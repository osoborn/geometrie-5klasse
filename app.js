(function () {
  "use strict";

  const DATA = window.GEOMETRY_DATA;

  // Estado global de progreso
  const state = {
    showSpanish: true,
    solvedCount: 0,
    streak: 0,
    points: 0,
    solvedIds: new Set(),
    lastFocusedInput: null,

    // Tab 1B: Vocab Table
    vocabErrorIds: new Set(),
    vocabOnlyErrors: false,

    // Tab 2: Detektiv
    detFilter: "all",
    detIndex: 0,

    // Tab 3: Winkel-Paare
    wpMode: "heft", // "heft" | "random"
    wpIndex: 0,
    wpCurrentItem: null,

    // Tab 4: Geodreieck-Labor
    labIndex: 0,
    labCurrentDeg: 60,
    labShowGeodreieck: true,
    labCustomChallenge: null,

    // Tab 5: Probe-Simulation
    quizItems: [],
    quizErrorIds: new Set(),
    quizOnlyErrors: false
  };

  // =========================================================================
  // UTILIDADES GEOMÉTRICAS Y CLASIFICACIÓN ALEMANA
  // =========================================================================
  function classifyAngleDe(deg) {
    const d = Math.round(deg);
    if (d === 0) return "Nullwinkel";
    if (d > 0 && d < 90) return "Spitzer Winkel";
    if (d === 90) return "Rechter Winkel";
    if (d > 90 && d < 180) return "Stumpfer Winkel";
    if (d === 180) return "Gestreckter Winkel";
    if (d > 180 && d < 360) return "Überstumpfer Winkel";
    if (d === 360) return "Voller Winkel";
    return "Spitzer Winkel";
  }

  function classifyAngleEs(deg) {
    const d = Math.round(deg);
    if (d === 0) return "Ángulo nulo (0°)";
    if (d > 0 && d < 90) return "Ángulo agudo (1°–89°)";
    if (d === 90) return "Ángulo recto (90°)";
    if (d > 90 && d < 179.9) return "Ángulo obtuso (91°–179°)";
    if (d === 180) return "Ángulo extendido (180°)";
    if (d > 180 && d < 360) return "Ángulo cóncavo / convexo (181°–359°)";
    if (d === 360) return "Ángulo completo (360°)";
    return "";
  }

  function normalizeText(str) {
    return String(str || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function awardSuccess(uniqueKey, pts = 10) {
    state.streak += 1;
    if (!uniqueKey || !state.solvedIds.has(uniqueKey)) {
      if (uniqueKey) state.solvedIds.add(uniqueKey);
      state.solvedCount += 1;
      state.points += pts;
    } else {
      state.points += 2;
    }
    updateScoreHeader();
  }

  function registerMistake() {
    state.streak = 0;
    updateScoreHeader();
  }

  function updateScoreHeader() {
    document.getElementById("global-correct-count").textContent = state.solvedCount;
    document.getElementById("global-streak-count").textContent = state.streak;
    document.getElementById("global-points-count").textContent = state.points;
  }

  // Coordenadas polares en pantalla (0° a la derecha, sentido antihorario matemático = hacia arriba en pantalla)
  function polarToScreen(cx, cy, r, degMathCCW) {
    const rad = (degMathCCW * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy - r * Math.sin(rad)
    };
  }

  // Arco SVG en sentido antihorario matemático (en pantalla sweep-flag = 0 porque Y crece hacia abajo)
  function describeArcCCW(cx, cy, r, startDeg, sweepDeg) {
    if (sweepDeg <= 0) return "";
    if (sweepDeg >= 360) {
      return `M ${cx - r} ${cy} A ${r} ${r} 0 1 0 ${cx + r} ${cy} A ${r} ${r} 0 1 0 ${cx - r} ${cy}`;
    }
    const start = polarToScreen(cx, cy, r, startDeg);
    const end = polarToScreen(cx, cy, r, startDeg + sweepDeg);
    const largeArcFlag = sweepDeg > 180 ? 1 : 0;
    // En coordenadas SVG (Y hacia abajo), ir en sentido antihorario matemático es sweep-flag = 0
    return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
  }

  // =========================================================================
  // NAVEGACIÓN DE PESTAÑAS E IDIOMA
  // =========================================================================
  function initHeaderAndTabs() {
    const btnLang = document.getElementById("btn-toggle-es");
    const langText = document.getElementById("lang-toggle-text");
    btnLang.addEventListener("click", () => {
      state.showSpanish = !state.showSpanish;
      document.body.classList.toggle("show-es", state.showSpanish);
      btnLang.setAttribute("aria-pressed", String(state.showSpanish));
      langText.textContent = state.showSpanish ? "Spanisch-Hilfe: AN" : "Spanisch-Hilfe: AUS (Nur Deutsch)";
    });

    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.dataset.tab;
        tabBtns.forEach((b) => {
          const active = b === btn;
          b.classList.toggle("active", active);
          b.setAttribute("aria-selected", String(active));
        });
        tabPanels.forEach((panel) => {
          const isMatch = panel.id === targetId;
          panel.classList.toggle("active", isMatch);
          panel.hidden = !isMatch;
        });
      });
    });

    // Barra de Umlauts
    document.querySelectorAll(".umlaut-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const ch = btn.dataset.char;
        const input = state.lastFocusedInput;
        if (!input || input.disabled) return;
        const start = input.selectionStart ?? input.value.length;
        const end = input.selectionEnd ?? input.value.length;
        input.value = input.value.slice(0, start) + ch + input.value.slice(end);
        input.focus();
        input.setSelectionRange(start + ch.length, start + ch.length);
      });
    });
  }

  // =========================================================================
  // TAB 1: SPICKZETTEL & VOKABEL-TABELLE
  // =========================================================================
  function initTab1Vocab() {
    const btnPosters = document.getElementById("btn-show-posters");
    const btnVocab = document.getElementById("btn-show-vocabtable");
    const postersDiv = document.getElementById("spickzettel-posters");
    const vocabDiv = document.getElementById("spickzettel-vocabtable");

    btnPosters.addEventListener("click", () => {
      btnPosters.classList.add("active");
      btnVocab.classList.remove("active");
      postersDiv.hidden = false;
      vocabDiv.hidden = true;
    });

    btnVocab.addEventListener("click", () => {
      btnVocab.classList.add("active");
      btnPosters.classList.remove("active");
      postersDiv.hidden = true;
      vocabDiv.hidden = false;
      renderVocabTable();
    });

    document.getElementById("vocab-block-select").addEventListener("change", () => {
      state.vocabOnlyErrors = false;
      renderVocabTable();
    });

    document.getElementById("vocab-mode-select").addEventListener("change", () => {
      renderVocabTable();
    });

    document.getElementById("btn-vocab-check").addEventListener("click", checkAllVocabRows);
    document.getElementById("btn-vocab-reset").addEventListener("click", () => {
      state.vocabOnlyErrors = false;
      renderVocabTable();
    });

    document.getElementById("btn-vocab-retry").addEventListener("click", () => {
      if (state.vocabErrorIds.size === 0) return;
      state.vocabOnlyErrors = true;
      renderVocabTable();
    });
  }

  function renderVocabTable() {
    const tbody = document.getElementById("vocab-tbody");
    const blockFilter = document.getElementById("vocab-block-select").value;
    const mode = document.getElementById("vocab-mode-select").value;
    tbody.innerHTML = "";

    let items = DATA.vocabItems.filter((item) => blockFilter === "all" || item.block === blockFilter);
    if (state.vocabOnlyErrors && state.vocabErrorIds.size > 0) {
      items = items.filter((item) => state.vocabErrorIds.has(item.id));
    }

    let currentBlock = "";
    items.forEach((item, idx) => {
      if (item.block !== currentBlock) {
        currentBlock = item.block;
        const blockTr = document.createElement("tr");
        blockTr.className = "block-row";
        blockTr.innerHTML = `<td colspan="6">${currentBlock}</td>`;
        tbody.appendChild(blockTr);
      }

      const tr = document.createElement("tr");
      tr.dataset.itemId = item.id;

      let askCol = mode;
      if (mode === "random") {
        askCol = Math.random() < 0.65 ? "ask_de" : "ask_es";
      }

      const tdNum = `<td><strong>${idx + 1}</strong></td>`;
      const tdSym = `<td><span class="sym-badge">${item.symbol}</span></td>`;

      let tdDe = "";
      if (askCol === "ask_de") {
        tdDe = `<td>
          <input type="text" class="vocab-input" data-field="de" data-id="${item.id}" placeholder="Begriff auf Deutsch..." autocomplete="off">
          <span class="solution-hint" hidden></span>
        </td>`;
      } else {
        tdDe = `<td><strong>${item.deutsch}</strong></td>`;
      }

      const tdMerkmal = `<td>
        <span>${item.merkmalDe}</span>
        <small class="es-sub">${item.merkmalEs}</small>
      </td>`;

      let tdEs = "";
      if (askCol === "ask_es") {
        tdEs = `<td>
          <input type="text" class="vocab-input" data-field="es" data-id="${item.id}" placeholder="En español..." autocomplete="off">
          <span class="solution-hint" hidden></span>
        </td>`;
      } else {
        tdEs = `<td><span>${item.spanisch}</span></td>`;
      }

      const tdBtn = `<td>
        <button type="button" class="btn-secondary btn-row-check" data-id="${item.id}">Prüfen</button>
      </td>`;

      tr.innerHTML = tdNum + tdSym + tdDe + tdMerkmal + tdEs + tdBtn;
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll(".vocab-input").forEach((inp) => {
      inp.addEventListener("focus", () => {
        state.lastFocusedInput = inp;
      });
      inp.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          checkSingleVocabRow(inp.dataset.id);
        }
      });
    });

    tbody.querySelectorAll(".btn-row-check").forEach((btn) => {
      btn.addEventListener("click", () => checkSingleVocabRow(btn.dataset.id));
    });

    document.getElementById("btn-vocab-retry").hidden = state.vocabErrorIds.size === 0;
  }

  function validateVocabInput(inp) {
    const item = DATA.vocabItems.find((x) => x.id === inp.dataset.id);
    if (!item) return true;
    const val = normalizeText(inp.value);
    const field = inp.dataset.field;
    const accepted = field === "de" ? item.DeutschAlt : item.spanischAlt;
    const isOk = accepted.some((ans) => normalizeText(ans) === val);
    const hintEl = inp.parentElement.querySelector(".solution-hint");

    inp.classList.remove("is-correct", "is-wrong");
    if (isOk) {
      inp.classList.add("is-correct");
      if (hintEl) hintEl.hidden = true;
      state.vocabErrorIds.delete(item.id);
      awardSuccess("vocab_" + item.id + "_" + field, 5);
    } else {
      inp.classList.add("is-wrong");
      if (hintEl) {
        hintEl.textContent = "✓ Lösung: " + (field === "de" ? item.deutsch : item.spanisch);
        hintEl.hidden = false;
      }
      state.vocabErrorIds.add(item.id);
      registerMistake();
    }
    return isOk;
  }

  function checkSingleVocabRow(itemId) {
    const row = document.querySelector(`#vocab-tbody tr[data-item-id="${itemId}"]`);
    if (!row) return;
    row.querySelectorAll(".vocab-input").forEach(validateVocabInput);
    updateVocabRetryButton();
  }

  function checkAllVocabRows() {
    document.querySelectorAll("#vocab-tbody .vocab-input").forEach(validateVocabInput);
    updateVocabRetryButton();
  }

  function updateVocabRetryButton() {
    const btn = document.getElementById("btn-vocab-retry");
    const countSpan = document.getElementById("vocab-retry-count");
    countSpan.textContent = state.vocabErrorIds.size;
    btn.hidden = state.vocabErrorIds.size === 0;
  }

  // =========================================================================
  // TAB 2: LINIEN- & FIGUREN-DETEKTIV
  // =========================================================================
  function getFilteredDetectiveTasks() {
    if (state.detFilter === "all") return DATA.detectiveTasks;
    return DATA.detectiveTasks.filter((t) => t.category === state.detFilter);
  }

  function initTab2Detektiv() {
    document.querySelectorAll("[data-det-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-det-filter]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.detFilter = btn.dataset.detFilter;
        state.detIndex = 0;
        renderDetectiveTask();
      });
    });

    document.getElementById("btn-det-prev").addEventListener("click", () => {
      const list = getFilteredDetectiveTasks();
      state.detIndex = (state.detIndex - 1 + list.length) % list.length;
      renderDetectiveTask();
    });

    document.getElementById("btn-det-next").addEventListener("click", () => {
      const list = getFilteredDetectiveTasks();
      state.detIndex = (state.detIndex + 1) % list.length;
      renderDetectiveTask();
    });

    renderDetectiveTask();
  }

  function buildDetectiveSvg(task) {
    const type = task.figureType;
    const hl = task.highlightPart || "";

    if (type === "notebook_jlmk") {
      // Figura exacta del cuaderno (Donnerstag, 13. Oktober - IMG_7606.jpg): J, L, M, K
      const colJL = hl === "JL" ? "#dc2626" : "#334155";
      const wJL = hl === "JL" ? 4.5 : 2.5;
      const colLM = hl === "LM" ? "#dc2626" : "#334155";
      const wLM = hl === "LM" ? 4.5 : 2.5;
      const colMJ = hl === "MJ" ? "#dc2626" : "#334155";
      const wMJ = hl === "MJ" ? 4.5 : 2.5;
      const colKM = hl === "KM" ? "#dc2626" : "#334155";
      const wKM = hl === "KM" ? 4.5 : 2.5;

      return `
      <svg viewBox="0 0 420 260" aria-label="Heft-Figur vom 13. Oktober mit Punkten J, L, M, K">
        <defs>
          <marker id="arrDark" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#334155"/>
          </marker>
          <marker id="arrRed" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#dc2626"/>
          </marker>
        </defs>
        <rect x="4" y="4" width="412" height="252" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
        <text x="16" y="26" font-size="12" font-weight="800" fill="#64748b">Heft · Donnerstag, 13. Oktober (Übung)</text>

        <!-- 1. Strahl JL: empieza con barrita en J(95, 55) y pasa por L(145, 195) con flecha en (160, 235) -->
        <line x1="95" y1="55" x2="160" y2="235" stroke="${colJL}" stroke-width="${wJL}" marker-end="url(#${hl === "JL" ? "arrRed" : "arrDark"})"/>
        <!-- Tope de inicio en J perpendicular a JL -->
        <line x1="87" y1="58" x2="103" y2="52" stroke="${colJL}" stroke-width="3"/>

        <!-- 2. Strecke LM: entre L(145, 195) y M(245, 165) con topes en ambos -->
        <line x1="145" y1="195" x2="245" y2="165" stroke="${colLM}" stroke-width="${wLM}"/>
        <line x1="142" y1="187" x2="148" y2="203" stroke="${colLM}" stroke-width="3"/>
        <line x1="242" y1="157" x2="248" y2="173" stroke="${colLM}" stroke-width="3"/>

        <!-- 3. Strahl MJ: empieza con tope en M(245, 165) y pasa por J(95, 55) con flecha en (65, 33) -->
        <line x1="245" y1="165" x2="65" y2="33" stroke="${colMJ}" stroke-width="${wMJ}" marker-end="url(#${hl === "MJ" ? "arrRed" : "arrDark"})"/>
        <line x1="240" y1="171" x2="250" y2="159" stroke="${colMJ}" stroke-width="3"/>

        <!-- 4. Gerade KM: recta con flecha en ambos lados pasando por M(245, 165) y K(355, 180) -->
        <line x1="210" y1="160" x2="390" y2="185" stroke="${colKM}" stroke-width="${wKM}"
              marker-start="url(#${hl === "KM" ? "arrRed" : "arrDark"})"
              marker-end="url(#${hl === "KM" ? "arrRed" : "arrDark"})"/>

        <!-- Puntos y etiquetas -->
        <circle cx="95" cy="55" r="4.5" fill="#0f172a"/>
        <text x="68" y="64" font-size="16" font-weight="900" fill="#0f172a">J</text>

        <circle cx="145" cy="195" r="4.5" fill="#0f172a"/>
        <text x="122" y="206" font-size="16" font-weight="900" fill="#0f172a">L</text>

        <circle cx="245" cy="165" r="4.5" fill="#0f172a"/>
        <text x="245" y="146" font-size="16" font-weight="900" fill="#0f172a">M</text>

        <circle cx="350" cy="179" r="4.5" fill="#0f172a"/>
        <text x="346" y="206" font-size="16" font-weight="900" fill="#0f172a">K</text>
      </svg>`;
    }

    if (type === "slanted_ray") {
      return `
      <svg viewBox="0 0 420 230" aria-label="Schräger Strahl zum Boden">
        <rect x="4" y="4" width="412" height="222" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
        <!-- Suelo horizontal de referencia -->
        <line x1="40" y1="195" x2="380" y2="195" stroke="#94a3b8" stroke-width="3"/>
        <text x="210" y="214" text-anchor="middle" font-size="12" font-weight="700" fill="#64748b">Boden / Suelo (Horizont)</text>
        <!-- Rayo oblicuo como en IMG_7604 abajo a la izquierda -->
        <line x1="125" y1="45" x2="105" y2="57" stroke="#dc2626" stroke-width="3.5"/>
        <line x1="115" y1="51" x2="265" y2="165" stroke="#dc2626" stroke-width="4"/>
        <polygon points="272,170 256,167 265,155" fill="#dc2626"/>
        <text x="275" y="88" text-anchor="middle" font-size="14" font-weight="800" fill="#dc2626">Was für eine Linie ist das?</text>
      </svg>`;
    }

    if (type === "closed_regions") {
      return `
      <svg viewBox="0 0 420 230" aria-label="Geschlossene Linie mit 3 Bereichen">
        <rect x="4" y="4" width="412" height="222" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
        <ellipse cx="210" cy="115" rx="95" ry="65" fill="#f3e8ff" stroke="#7e22ce" stroke-width="4"/>
        <circle cx="180" cy="100" r="5" fill="#7e22ce"/><circle cx="225" cy="95" r="5" fill="#7e22ce"/>
        <circle cx="205" cy="128" r="5" fill="#7e22ce"/><circle cx="240" cy="122" r="5" fill="#7e22ce"/>
        <circle cx="70" cy="65" r="5" fill="#10b981"/><circle cx="88" cy="150" r="5" fill="#10b981"/>
        <circle cx="340" cy="80" r="5" fill="#10b981"/><circle cx="330" cy="160" r="5" fill="#10b981"/>
        <text x="210" y="116" text-anchor="middle" font-size="13" font-weight="800" fill="#581c87">? (drinnen)</text>
        <text x="72" y="45" font-size="13" font-weight="800" fill="#047857">? (draußen)</text>
        <text x="210" y="202" text-anchor="middle" font-size="13" font-weight="800" fill="#7e22ce">? (Linie selbst)</text>
      </svg>`;
    }

    if (type === "ground_positions") {
      return `
      <svg viewBox="0 0 420 230" aria-label="Waagerecht, senkrecht und schräg">
        <rect x="4" y="4" width="412" height="222" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
        <!-- A: waagerecht con sol -->
        <circle cx="80" cy="95" r="18" fill="#fde047" stroke="#eab308" stroke-width="2"/>
        <line x1="30" y1="95" x2="130" y2="95" stroke="#0284c7" stroke-width="4"/>
        <text x="80" y="130" text-anchor="middle" font-size="15" font-weight="900" fill="#0284c7">Linie A</text>

        <!-- B: senkrecht al suelo -->
        <line x1="175" y1="165" x2="245" y2="165" stroke="#64748b" stroke-width="3"/>
        <line x1="210" y1="55" x2="210" y2="165" stroke="#16a34a" stroke-width="4"/>
        <rect x="210" y="151" width="14" height="14" fill="none" stroke="#16a34a" stroke-width="2"/>
        <text x="210" y="190" text-anchor="middle" font-size="15" font-weight="900" fill="#16a34a">Linie B</text>

        <!-- C: schräg -->
        <line x1="290" y1="165" x2="385" y2="165" stroke="#64748b" stroke-width="3"/>
        <line x1="305" y1="165" x2="375" y2="65" stroke="#ea580c" stroke-width="4"/>
        <text x="340" y="190" text-anchor="middle" font-size="15" font-weight="900" fill="#ea580c">Linie C</text>
      </svg>`;
    }

    if (type === "relations_overview") {
      return `
      <svg viewBox="0 0 420 230" aria-label="Bild 1 Sekanten, Bild 2 Senkrechte">
        <rect x="4" y="4" width="412" height="222" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
        <text x="105" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#9a3412">Bild 1 (≠ 90°)</text>
        <line x1="35" y1="165" x2="175" y2="65" stroke="#ea580c" stroke-width="3.5"/>
        <line x1="35" y1="80" x2="175" y2="155" stroke="#ea580c" stroke-width="3.5"/>

        <text x="310" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#1e40af">Bild 2 (genau 90°)</text>
        <path d="M 310 115 L 328 115 A 18 18 0 0 0 310 97 Z" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
        <circle cx="317" cy="108" r="2.2" fill="#1e40af"/>
        <line x1="240" y1="115" x2="380" y2="115" stroke="#1d4ed8" stroke-width="3.5"/>
        <line x1="310" y1="48" x2="310" y2="182" stroke="#1d4ed8" stroke-width="3.5"/>
      </svg>`;
    }

    if (type === "slanted_perpendiculars") {
      // Espina de pescado sobre recta inclinada g (Donnerstag 8. & 13. Oktober)
      return `
      <svg viewBox="0 0 420 240" aria-label="Schräge Gerade g mit 4 Seitenlinien">
        <rect x="4" y="4" width="412" height="232" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
        <!-- Recta principal g desde (70, 200) hasta (340, 40) -> vector (270, -160), perpendicular es (160, 270) -->
        <line x1="70" y1="200" x2="340" y2="40" stroke="#0f172a" stroke-width="3.5"/>
        <text x="352" y="42" font-size="15" font-weight="900" fill="#0f172a">g</text>

        <!-- Línea 1 perpendicular en (124, 168) hacia abajo-derecha -->
        <line x1="124" y1="168" x2="164" y2="235" stroke="#0284c7" stroke-width="3"/>
        <text x="172" y="232" font-size="14" font-weight="800" fill="#0284c7">1</text>

        <!-- Línea 2 perpendicular en (178, 136) hacia arriba-izquierda -->
        <line x1="178" y1="136" x2="138" y2="69" stroke="#16a34a" stroke-width="3"/>
        <text x="125" y="65" font-size="14" font-weight="800" fill="#16a34a">2</text>

        <!-- Línea 3 TRAMPA: vertical a la hoja en (232, 104), NO forma 90° con g -->
        <line x1="232" y1="104" x2="232" y2="25" stroke="#dc2626" stroke-width="3" stroke-dasharray="4,2"/>
        <text x="238" y="34" font-size="14" font-weight="800" fill="#dc2626">3</text>

        <!-- Línea 4 perpendicular en (286, 72) hacia abajo-derecha -->
        <line x1="286" y1="72" x2="326" y2="139" stroke="#7e22ce" stroke-width="3"/>
        <text x="334" y="148" font-size="14" font-weight="800" fill="#7e22ce">4</text>
      </svg>`;
    }

    // room_objects
    return `
    <svg viewBox="0 0 420 230" aria-label="Klassenzimmer: Wand und Boden">
      <rect x="4" y="4" width="412" height="222" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
      <!-- Pared izquierda y Suelo -->
      <line x1="60" y1="25" x2="60" y2="185" stroke="#334155" stroke-width="5"/>
      <line x1="60" y1="185" x2="380" y2="185" stroke="#334155" stroke-width="5"/>
      <rect x="60" y="169" width="16" height="16" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
      <text x="32" y="105" font-size="12" font-weight="800" fill="#334155" transform="rotate(-90 32 105)">Wand (Pared)</text>
      <text x="220" y="208" text-anchor="middle" font-size="12" font-weight="800" fill="#334155">Boden (Suelo)</text>
      <!-- Mesa y libro paralelo al suelo -->
      <line x1="140" y1="130" x2="250" y2="130" stroke="#0284c7" stroke-width="4"/>
      <line x1="155" y1="130" x2="155" y2="185" stroke="#64748b" stroke-width="3"/>
      <line x1="235" y1="130" x2="235" y2="185" stroke="#64748b" stroke-width="3"/>
      <rect x="170" y="118" width="50" height="10" rx="2" fill="#22c55e"/>
      <text x="195" y="110" text-anchor="middle" font-size="11" font-weight="800" fill="#15803d">Buch (∥ Boden)</text>
      <!-- Puerta / Mueble vertical -->
      <rect x="295" y="75" width="55" height="110" fill="#ffedd5" stroke="#ea580c" stroke-width="3"/>
      <text x="322" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#9a3412">Tür / Möbel (⊥)</text>
    </svg>`;
  }

  function renderDetectiveTask() {
    const list = getFilteredDetectiveTasks();
    const task = list[state.detIndex] || list[0];
    if (!task) return;

    document.getElementById("det-progress-badge").textContent = `Aufgabe ${state.detIndex + 1} / ${list.length}`;
    document.getElementById("det-title-de").textContent = task.titleDe;
    document.getElementById("det-svg-container").innerHTML = buildDetectiveSvg(task);
    document.getElementById("det-question-de").textContent = task.questionDe;
    document.getElementById("det-question-es").textContent = task.questionEs;

    const feedbackBox = document.getElementById("det-feedback-box");
    feedbackBox.hidden = true;

    const optionsList = document.getElementById("det-options-list");
    optionsList.innerHTML = "";

    // Mezclar opciones conservando la correcta
    const shuffled = [...task.options].sort(() => Math.random() - 0.5);
    shuffled.forEach((opt) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.innerHTML = `
        <div><strong>${opt.labelDe}</strong></div>
        <small class="es-sub">${opt.labelEs}</small>
      `;
      btn.addEventListener("click", () => {
        optionsList.querySelectorAll(".option-btn").forEach((b) => {
          b.disabled = true;
        });
        if (opt.correct) {
          btn.classList.add("correct-choice");
          feedbackBox.className = "feedback-banner ok";
          feedbackBox.innerHTML = `<strong>✓ Richtig!</strong> ${task.explanationDe}<span class="es-sub">${task.explanationEs}</span>`;
          feedbackBox.hidden = false;
          awardSuccess("det_" + task.id, 10);
        } else {
          btn.classList.add("wrong-choice");
          // Resaltar la correcta
          optionsList.querySelectorAll(".option-btn").forEach((b, i) => {
            if (shuffled[i].correct) b.classList.add("correct-choice");
          });
          feedbackBox.className = "feedback-banner err";
          feedbackBox.innerHTML = `<strong>✗ Fast!</strong> ${task.explanationDe}<span class="es-sub">${task.explanationEs}</span>`;
          feedbackBox.hidden = false;
          registerMistake();
        }
      });
      optionsList.appendChild(btn);
    });
  }

  // =========================================================================
  // TAB 3: WINKEL-PAARE (∡ABC & ∡CBA = 360°) & SORTIERUNG
  // =========================================================================
  function initTab3WinkelPaare() {
    const btnHeft = document.getElementById("btn-wp-heft");
    const btnRandom = document.getElementById("btn-wp-random");

    btnHeft.addEventListener("click", () => {
      state.wpMode = "heft";
      btnHeft.classList.add("active");
      btnRandom.classList.remove("active");
      loadWinkelPaarExercise();
    });

    btnRandom.addEventListener("click", () => {
      state.wpMode = "random";
      btnRandom.classList.add("active");
      btnHeft.classList.remove("active");
      loadWinkelPaarExercise(true);
    });

    document.getElementById("btn-wp-prev").addEventListener("click", () => {
      if (state.wpMode === "random") {
        loadWinkelPaarExercise(true);
      } else {
        const len = DATA.notebookAnglePairs.length;
        state.wpIndex = (state.wpIndex - 1 + len) % len;
        loadWinkelPaarExercise();
      }
    });

    document.getElementById("btn-wp-next").addEventListener("click", () => {
      if (state.wpMode === "random") {
        loadWinkelPaarExercise(true);
      } else {
        const len = DATA.notebookAnglePairs.length;
        state.wpIndex = (state.wpIndex + 1) % len;
        loadWinkelPaarExercise();
      }
    });

    document.getElementById("btn-wp-check").addEventListener("click", checkWinkelPaarExercise);

    loadWinkelPaarExercise();
  }

  function generateRandomAnglePair() {
    const triplets = [
      ["A", "B", "C"], ["D", "E", "F"], ["L", "M", "N"], ["R", "S", "T"],
      ["P", "Q", "R"], ["G", "H", "I"], ["W", "A", "L"], ["M", "K", "O"]
    ];
    const [p1, vertex, p2] = triplets[Math.floor(Math.random() * triplets.length)];
    const possibleDegs = [20, 35, 45, 60, 75, 90, 95, 110, 125, 140, 160, 180, 210, 240, 300];
    const deg1 = possibleDegs[Math.floor(Math.random() * possibleDegs.length)];
    const deg2 = 360 - deg1;
    const given = Math.random() < 0.5 ? 1 : 2;
    return {
      id: "rnd_" + Date.now(),
      source: "Zufalls-Training (360°-Paar)",
      vertex,
      p1,
      p2,
      ray1Deg: 0,
      deg1,
      deg2,
      given,
      noteDe: `Rechnung: 360° − ${given === 1 ? deg1 : deg2}° = ${given === 1 ? deg2 : deg1}°. Scheitelpunkt in der Mitte ist ${vertex}!`,
      noteEs: `Cálculo: 360° − ${given === 1 ? deg1 : deg2}° = ${given === 1 ? deg2 : deg1}°. ¡El vértice al medio es ${vertex}!`
    };
  }

  function loadWinkelPaarExercise(forceNewRandom = false) {
    let item;
    if (state.wpMode === "random" || forceNewRandom) {
      item = generateRandomAnglePair();
      document.getElementById("wp-counter-badge").textContent = "Zufalls-Aufgabe 🎲";
    } else {
      const list = DATA.notebookAnglePairs;
      item = list[state.wpIndex];
      document.getElementById("wp-counter-badge").textContent = `Heft #${state.wpIndex + 1} / ${list.length}`;
    }

    const d1 = item.customDeg1 ?? item.deg1;
    const d2 = item.customDeg2 ?? item.deg2;
    state.wpCurrentItem = { ...item, d1, d2 };

    document.getElementById("wp-source-label").textContent = item.source;
    const name1 = `∡${item.p1}${item.vertex}${item.p2}`;
    const name2 = `∡${item.p2}${item.vertex}${item.p1}`;

    document.getElementById("wp-name-1").textContent = name1;
    document.getElementById("wp-name-sort1").textContent = name1;
    document.getElementById("wp-name-2").textContent = name2;
    document.getElementById("wp-name-sort2").textContent = name2;

    // Pre-llenar el dato entregado en el dibujo y dejar vacío el que debe calcular
    const inpVertex = document.getElementById("wp-input-vertex");
    const inpDeg1 = document.getElementById("wp-input-deg1");
    const inpDeg2 = document.getElementById("wp-input-deg2");
    const selSort1 = document.getElementById("wp-select-sort1");
    const selSort2 = document.getElementById("wp-select-sort2");

    [inpVertex, inpDeg1, inpDeg2, selSort1, selSort2].forEach((el) => {
      el.classList.remove("is-correct", "is-wrong");
    });

    inpVertex.value = "";
    inpDeg1.value = item.given === 1 ? String(d1) : "";
    inpDeg2.value = item.given === 2 ? String(d2) : "";
    selSort1.value = "";
    selSort2.value = "";

    document.getElementById("wp-feedback-box").hidden = true;
    renderWinkelPaarSvg(state.wpCurrentItem, false);
  }

  // Helper para dibujar un par de ángulos estilo cuaderno sin colisiones (con vértice, puntos en los rayos, flechas y arcos antihorarios)
  function buildAnglePairNotebookSvg({
    vertex,
    p1,
    p2,
    startDeg = 0,
    d1,
    d2,
    txt1,
    txt2,
    viewWidth = 390,
    viewHeight = 260,
    cx = 185,
    cy = 135,
    rPoint = 68,
    rRay = 90
  }) {
    const ray2Deg = (startDeg + d1) % 360;

    // Puntos sobre los rayos (donde va la marquita y la letra) y puntas de flecha al final del rayo
    const pt1 = polarToScreen(cx, cy, rPoint, startDeg);
    const tip1 = polarToScreen(cx, cy, rRay, startDeg);
    const pt2 = polarToScreen(cx, cy, rPoint, ray2Deg);
    const tip2 = polarToScreen(cx, cy, rRay, ray2Deg);

    // Pequeñas marquitas transversales (ticks) en los puntos p1 y p2 como en el cuaderno
    const perp1A = polarToScreen(pt1.x, pt1.y, 6, startDeg + 90);
    const perp1B = polarToScreen(pt1.x, pt1.y, 6, startDeg - 90);
    const perp2A = polarToScreen(pt2.x, pt2.y, 6, ray2Deg + 90);
    const perp2B = polarToScreen(pt2.x, pt2.y, 6, ray2Deg - 90);

    // Cuando d1 > 180, invertimos el lado de las letras p1/p2 para que siempre queden en el sector amplio y nunca en la cuña estrecha
    const sign = d1 <= 180 ? 1 : -1;
    const lbl1 = polarToScreen(pt1.x, pt1.y, 20, startDeg - sign * 80);
    const lbl2 = polarToScreen(pt2.x, pt2.y, 20, ray2Deg + sign * 80);

    const bis1 = (startDeg + d1 / 2) % 360;
    const bis2 = (ray2Deg + d2 / 2) % 360;
    const largeBis = d1 <= 180 ? bis2 : bis1;
    const vLbl = polarToScreen(cx, cy, 22, (largeBis + 45) % 360);

    const rArc1 = 30;
    const rArc2 = 44;
    const arc1 = describeArcCCW(cx, cy, rArc1, startDeg, d1);
    const arc2 = describeArcCCW(cx, cy, rArc2, ray2Deg, d2);

    function computeLabelPos(bisDeg, rArc, sweepDeg) {
      const rTxt = sweepDeg <= 45 ? rRay + 10 : rArc + 16;
      const pt = polarToScreen(cx, cy, rTxt, bisDeg);
      const cosV = Math.cos((bisDeg * Math.PI) / 180);
      const anchor = cosV > 0.3 ? "start" : cosV < -0.3 ? "end" : "middle";
      return { x: pt.x, y: pt.y + 4, anchor };
    }

    const pos1 = computeLabelPos(bis1, rArc1, d1);
    const pos2 = computeLabelPos(bis2, rArc2, d2);

    const uid = `${vertex}_${p1}_${p2}_${d1}`;
    const haloStyle = "paint-order: stroke; stroke: #ffffff; stroke-width: 3.5px; stroke-linejoin: round;";

    return `
      <svg viewBox="0 0 ${viewWidth} ${viewHeight}" aria-label="Winkelpaar ${p1}${vertex}${p2}">
        <defs>
          <marker id="rayArr_${uid}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#0f172a"/>
          </marker>
          <marker id="arcArrG_${uid}" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#16a34a"/>
          </marker>
          <marker id="arcArrB_${uid}" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#0284c7"/>
          </marker>
        </defs>
        <rect x="4" y="4" width="${viewWidth - 8}" height="${viewHeight - 8}" rx="12" fill="#ffffff" stroke="#e2e8f0"/>

        <!-- Arco 2 (azul exterior antihorario) -->
        <path d="${arc2}" fill="rgba(2, 132, 199, 0.08)" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="5,3" marker-end="url(#arcArrB_${uid})"/>
        <!-- Arco 1 (verde interior antihorario) -->
        <path d="${arc1}" fill="rgba(22, 163, 74, 0.18)" stroke="#16a34a" stroke-width="3" marker-end="url(#arcArrG_${uid})"/>

        <!-- Rayos con flecha en la punta -->
        <line x1="${cx}" y1="${cy}" x2="${tip1.x.toFixed(1)}" y2="${tip1.y.toFixed(1)}" stroke="#0f172a" stroke-width="3" marker-end="url(#rayArr_${uid})"/>
        <line x1="${cx}" y1="${cy}" x2="${tip2.x.toFixed(1)}" y2="${tip2.y.toFixed(1)}" stroke="#0f172a" stroke-width="3" marker-end="url(#rayArr_${uid})"/>

        <!-- Marquita (tick) y punto para P1 -->
        <line x1="${perp1A.x.toFixed(1)}" y1="${perp1A.y.toFixed(1)}" x2="${perp1B.x.toFixed(1)}" y2="${perp1B.y.toFixed(1)}" stroke="#0f172a" stroke-width="2.5"/>
        <circle cx="${pt1.x.toFixed(1)}" cy="${pt1.y.toFixed(1)}" r="4" fill="#0f172a"/>
        <text x="${lbl1.x.toFixed(1)}" y="${(lbl1.y + 5).toFixed(1)}" text-anchor="middle" font-size="16" font-weight="900" fill="#0f172a" style="${haloStyle}">${p1}</text>

        <!-- Marquita (tick) y punto para P2 -->
        <line x1="${perp2A.x.toFixed(1)}" y1="${perp2A.y.toFixed(1)}" x2="${perp2B.x.toFixed(1)}" y2="${perp2B.y.toFixed(1)}" stroke="#0f172a" stroke-width="2.5"/>
        <circle cx="${pt2.x.toFixed(1)}" cy="${pt2.y.toFixed(1)}" r="4" fill="#0f172a"/>
        <text x="${lbl2.x.toFixed(1)}" y="${(lbl2.y + 5).toFixed(1)}" text-anchor="middle" font-size="16" font-weight="900" fill="#0f172a" style="${haloStyle}">${p2}</text>

        <!-- Vértice (Scheitelpunkt) -->
        <circle cx="${cx}" cy="${cy}" r="5.5" fill="#dc2626"/>
        <text x="${vLbl.x.toFixed(1)}" y="${(vLbl.y + 6).toFixed(1)}" text-anchor="middle" font-size="17" font-weight="900" fill="#dc2626" style="${haloStyle}">${vertex}</text>

        <!-- Etiquetas de grados -->
        <text x="${pos1.x.toFixed(1)}" y="${pos1.y.toFixed(1)}" text-anchor="${pos1.anchor}" font-size="13" font-weight="900" fill="#15803d" style="${haloStyle}">
          ${txt1}
        </text>
        <text x="${pos2.x.toFixed(1)}" y="${pos2.y.toFixed(1)}" text-anchor="${pos2.anchor}" font-size="13" font-weight="900" fill="#0369a1" style="${haloStyle}">
          ${txt2}
        </text>
      </svg>
    `;
  }

  function renderWinkelPaarSvg(item, solved) {
    const d1 = item.d1;
    const d2 = item.d2;
    const txt1 = `∡${item.p1}${item.vertex}${item.p2}: ${solved || item.given === 1 ? d1 + "°" : "?°"} ↺`;
    const txt2 = `∡${item.p2}${item.vertex}${item.p1}: ${solved || item.given === 2 ? d2 + "°" : "?°"} ↺`;

    document.getElementById("wp-svg-stage").innerHTML = buildAnglePairNotebookSvg({
      vertex: item.vertex,
      p1: item.p1,
      p2: item.p2,
      startDeg: item.ray1Deg || 0,
      d1,
      d2,
      txt1,
      txt2,
      viewWidth: 390,
      viewHeight: 280,
      cx: 185,
      cy: 140,
      rPoint: 68,
      rRay: 90
    });
  }

  function checkWinkelPaarExercise() {
    const item = state.wpCurrentItem;
    if (!item) return;

    const inpVertex = document.getElementById("wp-input-vertex");
    const inpDeg1 = document.getElementById("wp-input-deg1");
    const inpDeg2 = document.getElementById("wp-input-deg2");
    const selSort1 = document.getElementById("wp-select-sort1");
    const selSort2 = document.getElementById("wp-select-sort2");

    const okVertex = inpVertex.value.trim().toUpperCase() === item.vertex.toUpperCase();
    const okDeg1 = Number(inpDeg1.value) === item.d1;
    const okDeg2 = Number(inpDeg2.value) === item.d2;
    const expectedSort1 = classifyAngleDe(item.d1);
    const expectedSort2 = classifyAngleDe(item.d2);
    const okSort1 = selSort1.value === expectedSort1;
    const okSort2 = selSort2.value === expectedSort2;

    inpVertex.className = "short-input " + (okVertex ? "is-correct" : "is-wrong");
    inpDeg1.className = "deg-input " + (okDeg1 ? "is-correct" : "is-wrong");
    inpDeg2.className = "deg-input " + (okDeg2 ? "is-correct" : "is-wrong");
    selSort1.className = "sort-select " + (okSort1 ? "is-correct" : "is-wrong");
    selSort2.className = "sort-select " + (okSort2 ? "is-correct" : "is-wrong");

    const allOk = okVertex && okDeg1 && okDeg2 && okSort1 && okSort2;
    const fb = document.getElementById("wp-feedback-box");
    fb.hidden = false;

    if (allOk) {
      fb.className = "feedback-banner ok";
      fb.innerHTML = `
        <strong>🎉 Ausgezeichnet! Alles stimmt!</strong><br>
        ${item.noteDe}
        <span class="es-sub">${item.noteEs}</span>
      `;
      renderWinkelPaarSvg(item, true);
      awardSuccess("wp_" + item.id, 15);
    } else {
      fb.className = "feedback-banner err";
      fb.innerHTML = `
        <strong>Noch nicht ganz! Prüfe die rot markierten Felder:</strong><br>
        • Scheitelpunkt (Mitte): <strong>${item.vertex}</strong><br>
        • ∡${item.p1}${item.vertex}${item.p2} = <strong>${item.d1}° (${expectedSort1})</strong><br>
        • ∡${item.p2}${item.vertex}${item.p1} = <strong>${item.d2}° (${expectedSort2})</strong> (denn ${item.d1}° + ${item.d2}° = 360°)
        <span class="es-sub">${item.noteEs}</span>
      `;
      registerMistake();
    }
  }

  // =========================================================================
  // TAB 4: GEODREIECK-LABOR (MESSEN & ZEICHNEN CON POINTER CAPTURE)
  // =========================================================================
  function initTab4Labor() {
    drawGeodreieckTicks();

    const btnGeo = document.getElementById("btn-toggle-geodreieck");
    const geoGroup = document.getElementById("lab-geodreieck-group");
    btnGeo.addEventListener("click", () => {
      state.labShowGeodreieck = !state.labShowGeodreieck;
      btnGeo.classList.toggle("active", state.labShowGeodreieck);
      geoGroup.style.display = state.labShowGeodreieck ? "" : "none";
    });

    document.getElementById("btn-lab-random").addEventListener("click", () => {
      const randomTargets = [30, 45, 60, 75, 90, 115, 135, 150, 180, 190, 225, 270, 315];
      const t = randomTargets[Math.floor(Math.random() * randomTargets.length)];
      state.labCustomChallenge = {
        id: "lab_rnd_" + t,
        titleDe: `Freies Training: Zeichne einen Winkel von genau ${t}° (${classifyAngleDe(t)})`,
        titleEs: `Práctica libre: Construye un ángulo de exactamente ${t}° (${classifyAngleEs(t)})`,
        vertex: "S",
        p1: "A",
        p2: "B",
        baseAngle: 0,
        targetDeg: t,
        tolerance: 2,
        hintDe: `Ziehe den roten Punkt B auf ${t}°. Der Gegenwinkel beträgt dann ${360 - t}°.`,
        hintEs: `Arrastra el punto rojo B hasta ${t}°. El ángulo exterior medirá ${360 - t}°.`
      };
      loadLabChallenge(state.labCustomChallenge);
    });

    document.getElementById("btn-lab-prev").addEventListener("click", () => {
      state.labCustomChallenge = null;
      const len = DATA.labChallenges.length;
      state.labIndex = (state.labIndex - 1 + len) % len;
      loadLabChallenge(DATA.labChallenges[state.labIndex]);
    });

    document.getElementById("btn-lab-next").addEventListener("click", () => {
      state.labCustomChallenge = null;
      const len = DATA.labChallenges.length;
      state.labIndex = (state.labIndex + 1) % len;
      loadLabChallenge(DATA.labChallenges[state.labIndex]);
    });

    document.getElementById("btn-lab-check").addEventListener("click", checkLabChallenge);

    const slider = document.getElementById("lab-angle-slider");
    slider.addEventListener("input", () => {
      setLabAngle(Number(slider.value));
    });

    document.querySelectorAll("[data-set-deg]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLabAngle(Number(btn.dataset.setDeg));
      });
    });

    // Implementación de arrastre siguiendo Modern Web Guidance (`drag`):
    // - Dedicated handle `#lab-drag-handle`
    // - `event.button === 0`
    // - `handle.setPointerCapture(event.pointerId)` y `lostpointercapture`
    // - Teclado con flechas y `preventDefault()`
    const handle = document.getElementById("lab-drag-handle");
    const svg = document.getElementById("lab-svg");

    handle.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) return;
      handle.setPointerCapture(event.pointerId);
      handle.classList.add("dragging");
    });

    handle.addEventListener("pointermove", (event) => {
      if (!handle.hasPointerCapture(event.pointerId)) return;
      const rect = svg.getBoundingClientRect();
      const scaleX = 560 / rect.width;
      const scaleY = 430 / rect.height;
      const svgX = (event.clientX - rect.left) * scaleX;
      const svgY = (event.clientY - rect.top) * scaleY;

      const cx = 280;
      const cy = 230;
      const dx = svgX - cx;
      const dy = cy - svgY; // Y hacia arriba = positivo matemático
      let degAbs = (Math.atan2(dy, dx) * 180) / Math.PI;
      if (degAbs < 0) degAbs += 360;

      const ch = getCurrentLabChallenge();
      const base = ch.baseAngle || 0;
      let relDeg = Math.round((degAbs - base + 360) % 360);
      setLabAngle(relDeg);
    });

    handle.addEventListener("lostpointercapture", () => {
      handle.classList.remove("dragging");
    });

    handle.addEventListener("keydown", (event) => {
      const step = event.shiftKey ? 5 : 1;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        setLabAngle(Math.min(360, state.labCurrentDeg + step));
      } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        setLabAngle(Math.max(0, state.labCurrentDeg - step));
      }
    });

    loadLabChallenge(DATA.labChallenges[0]);
  }

  function drawGeodreieckTicks() {
    const g = document.getElementById("lab-protractor-ticks");
    if (!g) return;
    let html = "";
    for (let deg = 0; deg <= 180; deg += 10) {
      const rad = (deg * Math.PI) / 180;
      const rIn = deg % 30 === 0 ? 122 : 128;
      const rOut = 135;
      const x1 = rIn * Math.cos(rad);
      const y1 = -rIn * Math.sin(rad);
      const x2 = rOut * Math.cos(rad);
      const y2 = -rOut * Math.sin(rad);
      html += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#854d0e" stroke-width="${deg % 30 === 0 ? 2 : 1}"/>`;
      if (deg % 30 === 0 && deg > 0 && deg < 180) {
        const rTxt = 110;
        const tx = rTxt * Math.cos(rad);
        const ty = -rTxt * Math.sin(rad);
        html += `<text x="${tx.toFixed(1)}" y="${(ty + 3).toFixed(1)}" text-anchor="middle" font-size="9" font-weight="800" fill="#713f12">${deg}°</text>`;
      }
    }
    g.innerHTML = html;
  }

  function getCurrentLabChallenge() {
    return state.labCustomChallenge || DATA.labChallenges[state.labIndex];
  }

  function loadLabChallenge(ch) {
    if (!state.labCustomChallenge) {
      document.getElementById("lab-step-badge").textContent = `Labor-Aufgabe ${state.labIndex + 1} / ${DATA.labChallenges.length}`;
    } else {
      document.getElementById("lab-step-badge").textContent = `Freies Ziel 🎯`;
    }
    document.getElementById("lab-task-title-de").textContent = ch.titleDe;
    document.getElementById("lab-task-hint-de").textContent = ch.hintDe;
    document.getElementById("lab-task-hint-es").textContent = ch.hintEs;
    document.getElementById("lab-feedback-box").hidden = true;

    // Rotar el Geodreieck si la recta base está inclinada (ej. 35° en el desafío de perpendicular inclinada)
    const base = ch.baseAngle || 0;
    document.getElementById("lab-geodreieck-group").setAttribute(
      "transform",
      `translate(280, 230) rotate(${-base})`
    );

    setLabAngle(60);
  }

  function setLabAngle(deg) {
    const clamped = Math.max(0, Math.min(360, Math.round(deg)));
    state.labCurrentDeg = clamped;
    document.getElementById("lab-angle-slider").value = String(clamped);

    const handle = document.getElementById("lab-drag-handle");
    handle.setAttribute("aria-valuenow", String(clamped));

    const ch = getCurrentLabChallenge();
    const cx = 280;
    const cy = 230;
    const rRay = 185;
    const base = ch.baseAngle || 0;
    const absRay2 = (base + clamped) % 360;

    // Actualizar rayo base
    const pBaseEnd = polarToScreen(cx, cy, rRay, base);
    const pBaseDot = polarToScreen(cx, cy, 155, base);
    const pBaseLbl = polarToScreen(pBaseDot.x, pBaseDot.y, 22, base - 80);
    const rayBaseEl = document.getElementById("lab-ray-base");
    rayBaseEl.setAttribute("x2", pBaseEnd.x.toFixed(1));
    rayBaseEl.setAttribute("y2", pBaseEnd.y.toFixed(1));

    const dotP1 = document.getElementById("lab-point-p1");
    dotP1.setAttribute("cx", pBaseDot.x.toFixed(1));
    dotP1.setAttribute("cy", pBaseDot.y.toFixed(1));

    const lblP1 = document.getElementById("lab-label-p1");
    lblP1.setAttribute("x", pBaseLbl.x.toFixed(1));
    lblP1.setAttribute("y", (pBaseLbl.y + 5).toFixed(1));
    lblP1.textContent = ch.p1;

    document.getElementById("lab-label-vertex").textContent = ch.vertex;

    // Actualizar rayo móvil y manilla
    const pMovEnd = polarToScreen(cx, cy, rRay, absRay2);
    const pHandle = polarToScreen(cx, cy, 155, absRay2);
    const pLbl2 = polarToScreen(pHandle.x, pHandle.y, 24, absRay2 + 75);

    const rayMovEl = document.getElementById("lab-ray-movable");
    rayMovEl.setAttribute("x2", pMovEnd.x.toFixed(1));
    rayMovEl.setAttribute("y2", pMovEnd.y.toFixed(1));

    const halo = document.getElementById("lab-handle-halo");
    const circle = document.getElementById("lab-handle-circle");
    halo.setAttribute("cx", pHandle.x.toFixed(1));
    halo.setAttribute("cy", pHandle.y.toFixed(1));
    circle.setAttribute("cx", pHandle.x.toFixed(1));
    circle.setAttribute("cy", pHandle.y.toFixed(1));

    const lblP2 = document.getElementById("lab-label-p2");
    lblP2.setAttribute("x", pLbl2.x.toFixed(1));
    lblP2.setAttribute("y", (pLbl2.y + 5).toFixed(1));
    lblP2.setAttribute("text-anchor", "middle");
    lblP2.textContent = ch.p2;

    // Arcos interior y exterior
    const arcIn = describeArcCCW(cx, cy, 52, base, clamped);
    const arcOut = describeArcCCW(cx, cy, 68, absRay2, 360 - clamped);
    document.getElementById("lab-arc-inner").setAttribute("d", arcIn);
    document.getElementById("lab-arc-outer").setAttribute("d", arcOut);

    // Lectura en vivo
    const conj = 360 - clamped;
    document.getElementById("lab-readout-name1").textContent = `∡${ch.p1}${ch.vertex}${ch.p2} (Innen ↺)`;
    document.getElementById("lab-readout-deg1").textContent = `${clamped}°`;
    document.getElementById("lab-readout-type1").textContent = classifyAngleDe(clamped);

    document.getElementById("lab-readout-name2").textContent = `∡${ch.p2}${ch.vertex}${ch.p1} (360° − α)`;
    document.getElementById("lab-readout-deg2").textContent = `${conj}°`;
    document.getElementById("lab-readout-type2").textContent = classifyAngleDe(conj);
  }

  function checkLabChallenge() {
    const ch = getCurrentLabChallenge();
    const diff = Math.abs(state.labCurrentDeg - ch.targetDeg);
    const fb = document.getElementById("lab-feedback-box");
    fb.hidden = false;

    if (diff <= (ch.tolerance || 3)) {
      fb.className = "feedback-banner ok";
      fb.innerHTML = `
        <strong>🎯 Volltreffer! (${state.labCurrentDeg}° eingestellt, Ziel war ${ch.targetDeg}°)</strong><br>
        • ∡${ch.p1}${ch.vertex}${ch.p2} = <strong>${ch.targetDeg}° (${classifyAngleDe(ch.targetDeg)})</strong><br>
        • Gegenwinkel ∡${ch.p2}${ch.vertex}${ch.p1} = <strong>${360 - ch.targetDeg}° (${classifyAngleDe(360 - ch.targetDeg)})</strong>
      `;
      awardSuccess("lab_" + ch.id, 15);
    } else {
      fb.className = "feedback-banner err";
      fb.innerHTML = `
        <strong>Noch ${diff}° daneben!</strong> Du hast aktuell <strong>${state.labCurrentDeg}°</strong> eingestellt, gesucht sind <strong>${ch.targetDeg}° (${classifyAngleDe(ch.targetDeg)})</strong>.
        <span class="es-sub">Ajusta el rayo rojo hasta llegar a ${ch.targetDeg}°.</span>
      `;
      registerMistake();
    }
  }

  // =========================================================================
  // TAB 5: PROZESSNOTE-TEST (SIMULACRO DE PRUEBA)
  // =========================================================================
  function initTab5Quiz() {
    document.getElementById("btn-quiz-restart").addEventListener("click", () => {
      state.quizOnlyErrors = false;
      state.quizErrorIds.clear();
      renderQuizQuestions();
    });

    document.getElementById("btn-quiz-retry-errors").addEventListener("click", () => {
      if (state.quizErrorIds.size === 0) return;
      state.quizOnlyErrors = true;
      renderQuizQuestions();
    });

    document.getElementById("btn-quiz-evaluate-all").addEventListener("click", evaluateWholeQuiz);

    renderQuizQuestions();
  }

  function buildMiniQuizSvg(svgType) {
    switch (svgType) {
      case "ray_ab":
        return `<svg viewBox="0 0 280 95">
          <line x1="45" y1="30" x2="45" y2="56" stroke="#0284c7" stroke-width="3.5"/>
          <line x1="45" y1="43" x2="225" y2="43" stroke="#0284c7" stroke-width="3.5"/>
          <polygon points="235,43 219,35 219,51" fill="#0284c7"/>
          <circle cx="45" cy="43" r="4.5" fill="#0f172a"/>
          <text x="45" y="76" text-anchor="middle" font-size="14" font-weight="900" fill="#0f172a">A</text>
          <line x1="155" y1="34" x2="155" y2="52" stroke="#0f172a" stroke-width="2.5"/>
          <circle cx="155" cy="43" r="4.5" fill="#0f172a"/>
          <text x="155" y="76" text-anchor="middle" font-size="14" font-weight="900" fill="#0f172a">B</text>
        </svg>`;
      case "segment_lm":
        return `<svg viewBox="0 0 280 95">
          <line x1="55" y1="30" x2="55" y2="56" stroke="#16a34a" stroke-width="3.5"/>
          <line x1="225" y1="30" x2="225" y2="56" stroke="#16a34a" stroke-width="3.5"/>
          <line x1="55" y1="43" x2="225" y2="43" stroke="#16a34a" stroke-width="3.5"/>
          <circle cx="55" cy="43" r="4.5" fill="#0f172a"/>
          <circle cx="225" cy="43" r="4.5" fill="#0f172a"/>
          <text x="55" y="76" text-anchor="middle" font-size="14" font-weight="900" fill="#0f172a">L</text>
          <text x="225" y="76" text-anchor="middle" font-size="14" font-weight="900" fill="#0f172a">M</text>
        </svg>`;
      case "ray_ba_left":
        return `<svg viewBox="0 0 280 95">
          <line x1="225" y1="30" x2="225" y2="56" stroke="#9333ea" stroke-width="3.5"/>
          <line x1="225" y1="43" x2="50" y2="43" stroke="#9333ea" stroke-width="3.5"/>
          <polygon points="38,43 54,35 54,51" fill="#9333ea"/>
          <line x1="115" y1="34" x2="115" y2="52" stroke="#0f172a" stroke-width="2.5"/>
          <circle cx="115" cy="43" r="4.5" fill="#0f172a"/>
          <circle cx="225" cy="43" r="4.5" fill="#0f172a"/>
          <text x="115" y="76" text-anchor="middle" font-size="14" font-weight="900" fill="#0f172a">A</text>
          <text x="225" y="76" text-anchor="middle" font-size="14" font-weight="900" fill="#0f172a">B (Start)</text>
        </svg>`;
      case "horizon_line":
        return `<svg viewBox="0 0 280 95">
          <circle cx="140" cy="48" r="18" fill="#fde047" stroke="#eab308" stroke-width="2"/>
          <line x1="35" y1="48" x2="245" y2="48" stroke="#0284c7" stroke-width="4"/>
          <circle cx="80" cy="48" r="4" fill="#0f172a"/><text x="80" y="72" text-anchor="middle" font-size="13" font-weight="800">A</text>
          <circle cx="200" cy="48" r="4" fill="#0f172a"/><text x="200" y="72" text-anchor="middle" font-size="13" font-weight="800">B</text>
        </svg>`;
      case "parallel_lines":
        return `<svg viewBox="0 0 280 95">
          <line x1="35" y1="32" x2="235" y2="22" stroke="#16a34a" stroke-width="3"/>
          <line x1="35" y1="64" x2="235" y2="54" stroke="#16a34a" stroke-width="3"/>
          <circle cx="90" cy="29" r="3.5" fill="#0f172a"/><text x="90" y="18" text-anchor="middle" font-size="12" font-weight="800">A</text>
          <circle cx="180" cy="25" r="3.5" fill="#0f172a"/><text x="180" y="14" text-anchor="middle" font-size="12" font-weight="800">B</text>
          <circle cx="90" cy="61" r="3.5" fill="#0f172a"/><text x="90" y="82" text-anchor="middle" font-size="12" font-weight="800">C</text>
          <circle cx="180" cy="57" r="3.5" fill="#0f172a"/><text x="180" y="78" text-anchor="middle" font-size="12" font-weight="800">D</text>
          <text x="250" y="26" font-size="13" font-weight="900" fill="#166534">g</text>
          <text x="250" y="58" font-size="13" font-weight="900" fill="#166534">h</text>
        </svg>`;
      case "perp_lines":
        return `<svg viewBox="0 0 280 105">
          <path d="M 140 55 L 158 55 A 18 18 0 0 0 140 37 Z" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.8"/>
          <circle cx="147" cy="48" r="2.2" fill="#1e40af"/>
          <line x1="55" y1="55" x2="225" y2="55" stroke="#1d4ed8" stroke-width="3"/>
          <line x1="140" y1="12" x2="140" y2="95" stroke="#1d4ed8" stroke-width="3"/>
          <circle cx="195" cy="55" r="3.5" fill="#0f172a"/><text x="195" y="73" text-anchor="middle" font-size="12" font-weight="800">A</text>
          <circle cx="140" cy="24" r="3.5" fill="#0f172a"/><text x="126" y="28" text-anchor="middle" font-size="12" font-weight="800">B</text>
          <circle cx="140" cy="55" r="4.5" fill="#dc2626"/>
          <text x="126" y="72" font-size="13" font-weight="900" fill="#dc2626">S</text>
          <text x="236" y="59" font-size="13" font-weight="900" fill="#1e40af">g</text>
          <text x="152" y="22" font-size="13" font-weight="900" fill="#1e40af">h</text>
        </svg>`;
      case "angle_135":
        return buildAnglePairNotebookSvg({
          vertex: "B",
          p1: "A",
          p2: "C",
          startDeg: 0,
          d1: 135,
          d2: 225,
          txt1: "α = 135° ↺",
          txt2: "225° ↺",
          viewWidth: 340,
          viewHeight: 195,
          cx: 165,
          cy: 112,
          rPoint: 56,
          rRay: 76
        });
      case "angle_180_240":
        return `<svg viewBox="0 0 340 165" aria-label="180 Grad und 240 Grad Winkel mit Punkten">
          <rect x="2" y="2" width="336" height="161" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Izquierda: 180° Gestreckter Winkel ∡ABC -->
          <path d="M 135 95 A 35 35 0 0 0 65 95" fill="rgba(234, 179, 8, 0.2)" stroke="#ca8a04" stroke-width="2.5"/>
          <line x1="32" y1="95" x2="168" y2="95" stroke="#0f172a" stroke-width="3"/>
          <circle cx="150" cy="95" r="4" fill="#0f172a"/><text x="150" y="116" text-anchor="middle" font-size="13" font-weight="900">A</text>
          <circle cx="100" cy="95" r="5" fill="#dc2626"/><text x="100" y="116" text-anchor="middle" font-size="14" font-weight="900" fill="#dc2626">B</text>
          <circle cx="50" cy="95" r="4" fill="#0f172a"/><text x="50" y="116" text-anchor="middle" font-size="13" font-weight="900">C</text>
          <text x="100" y="48" text-anchor="middle" font-size="13" font-weight="900" fill="#854d0e">∡ABC = 180° ↺</text>

          <!-- Derecha: 240° Überstumpfer Winkel ∡DEF -->
          <path d="M 282 85 A 32 32 0 1 0 234 113" fill="rgba(147, 51, 234, 0.16)" stroke="#7e22ce" stroke-width="2.5"/>
          <line x1="250" y1="85" x2="322" y2="85" stroke="#0f172a" stroke-width="3"/>
          <line x1="250" y1="85" x2="214" y2="145" stroke="#0f172a" stroke-width="3"/>
          <circle cx="305" cy="85" r="4" fill="#0f172a"/><text x="305" y="105" text-anchor="middle" font-size="13" font-weight="900">D</text>
          <circle cx="250" cy="85" r="5" fill="#dc2626"/><text x="236" y="82" text-anchor="middle" font-size="14" font-weight="900" fill="#dc2626">E</text>
          <circle cx="222" cy="132" r="4" fill="#0f172a"/><text x="205" y="138" text-anchor="middle" font-size="13" font-weight="900">F</text>
          <text x="255" y="38" text-anchor="middle" font-size="13" font-weight="900" fill="#6b21a8">∡DEF = 240° ↺</text>
        </svg>`;
      case "pair_120_240":
        // Frage 9: ∡LMN = 120° y ∡NML = ?° (Con los puntos L, M, N claramente marcados en las líneas!)
        return buildAnglePairNotebookSvg({
          vertex: "M",
          p1: "L",
          p2: "N",
          startDeg: 0,
          d1: 120,
          d2: 240,
          txt1: "∡LMN = 120° ↺",
          txt2: "∡NML = ?° ↺",
          viewWidth: 340,
          viewHeight: 205,
          cx: 165,
          cy: 112,
          rPoint: 56,
          rRay: 76
        });
      case "pair_80_280":
        // Frage 10: ∡CDF = 80° y ∡FDC = 280° (Con los puntos C, D, F claramente marcados en las líneas!)
        return buildAnglePairNotebookSvg({
          vertex: "D",
          p1: "C",
          p2: "F",
          startDeg: 0,
          d1: 80,
          d2: 280,
          txt1: "∡CDF = 80° ↺",
          txt2: "∡FDC = 280° ↺",
          viewWidth: 340,
          viewHeight: 205,
          cx: 165,
          cy: 112,
          rPoint: 56,
          rRay: 76
        });
      case "pair_95_265":
        // Frage 11: ∡LJI = 265° y ∡IJL = ?° (Con los puntos I, J, L claramente marcados en las líneas!)
        return buildAnglePairNotebookSvg({
          vertex: "J",
          p1: "I",
          p2: "L",
          startDeg: 0,
          d1: 95,
          d2: 265,
          txt1: "∡IJL = ?° ↺",
          txt2: "∡LJI = 265° ↺",
          viewWidth: 340,
          viewHeight: 205,
          cx: 165,
          cy: 112,
          rPoint: 56,
          rRay: 76
        });
      case "angle_50_geodreieck":
      default:
        // Frage 12: ∡ABC con Geodreieck mostrando 50° / 130° y los puntos A, B, C marcados en las líneas!
        return `<svg viewBox="0 0 340 190" aria-label="Winkel ABC mit Geodreieck bei 50 Grad und 130 Grad">
          <rect x="2" y="2" width="336" height="186" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Silueta Geodreieck centrada en B(160, 145) -->
          <polygon points="35,145 285,145 160,20" fill="rgba(254, 249, 195, 0.65)" stroke="#ca8a04" stroke-width="1.8"/>
          <path d="M 75 145 A 85 85 0 0 1 245 145" fill="none" stroke="#a16207" stroke-width="1.5"/>
          <!-- Línea de 90° de referencia -->
          <line x1="160" y1="145" x2="160" y2="24" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
          <text x="160" y="16" text-anchor="middle" font-size="11" font-weight="800" fill="#64748b">90°</text>
          <!-- Arco de 50° -->
          <path d="M 200 145 A 40 40 0 0 0 185.7 114.4" fill="rgba(22, 163, 74, 0.22)" stroke="#16a34a" stroke-width="2.5"/>
          <!-- Rayo BA (0°) -->
          <line x1="160" y1="145" x2="275" y2="145" stroke="#0f172a" stroke-width="3"/>
          <line x1="240" y1="138" x2="240" y2="152" stroke="#0f172a" stroke-width="2.5"/>
          <circle cx="240" cy="145" r="4.5" fill="#0f172a"/>
          <text x="240" y="168" text-anchor="middle" font-size="15" font-weight="900" fill="#0f172a">A</text>
          <!-- Vértice B -->
          <circle cx="160" cy="145" r="5.5" fill="#dc2626"/>
          <text x="148" y="168" text-anchor="middle" font-size="15" font-weight="900" fill="#dc2626">B</text>
          <!-- Rayo BC (50°) -->
          <line x1="160" y1="145" x2="234" y2="57" stroke="#0f172a" stroke-width="3"/>
          <circle cx="214" cy="81" r="4.5" fill="#0f172a"/>
          <text x="232" y="84" text-anchor="middle" font-size="15" font-weight="900" fill="#0f172a">C</text>
          <!-- Etiqueta en la escala: 50° / 130° -->
          <rect x="208" y="32" width="84" height="22" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
          <text x="250" y="47" text-anchor="middle" font-size="12" font-weight="900" fill="#713f12">50° / 130°</text>
          <text x="202" y="125" font-size="12" font-weight="900" fill="#15803d" style="paint-order: stroke; stroke: #ffffff; stroke-width: 3px;">∡ABC = ?°</text>
        </svg>`;
    }
  }

  function renderQuizQuestions() {
    const container = document.getElementById("quiz-questions-container");
    const summaryBanner = document.getElementById("quiz-summary-banner");
    summaryBanner.hidden = true;
    container.innerHTML = "";

    let list = [...DATA.quizQuestions];
    if (state.quizOnlyErrors && state.quizErrorIds.size > 0) {
      list = list.filter((q) => state.quizErrorIds.has(q.id));
    }

    state.quizItems = list.map((q) => ({
      ...q,
      shuffledOptions: [...q.options].sort(() => Math.random() - 0.5),
      selectedIdx: null
    }));

    state.quizItems.forEach((q, qIdx) => {
      const card = document.createElement("article");
      card.className = "quiz-card";
      card.dataset.qid = q.id;

      const optsHtml = q.shuffledOptions
        .map(
          (opt, oIdx) => `
          <button type="button" class="option-btn quiz-opt-btn" data-qidx="${qIdx}" data-oidx="${oIdx}">
            <div><strong>${opt.textDe}</strong></div>
            <small class="es-sub">${opt.textEs}</small>
          </button>
        `
        )
        .join("");

      card.innerHTML = `
        <div>
          <div class="card-top-meta">
            <span class="step-badge">Frage ${qIdx + 1} / ${state.quizItems.length}</span>
            <span class="source-tag">${q.topicDe}</span>
          </div>
          <h3>${q.questionDe}</h3>
          <p class="es-sub">${q.questionEs}</p>
          <div class="quiz-card-svg">${buildMiniQuizSvg(q.svgType)}</div>
          <div class="options-stack">${optsHtml}</div>
        </div>
        <div class="feedback-banner quiz-fb" hidden></div>
      `;

      container.appendChild(card);
    });

    container.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qIdx = Number(btn.dataset.qidx);
        const oIdx = Number(btn.dataset.oidx);
        const qItem = state.quizItems[qIdx];
        qItem.selectedIdx = oIdx;

        const card = btn.closest(".quiz-card");
        card.querySelectorAll(".quiz-opt-btn").forEach((b) => b.classList.remove("correct-choice", "wrong-choice"));
        const chosen = qItem.shuffledOptions[oIdx];
        const fb = card.querySelector(".quiz-fb");
        fb.hidden = false;

        if (chosen.correct) {
          btn.classList.add("correct-choice");
          fb.className = "feedback-banner quiz-fb ok";
          fb.innerHTML = `<strong>✓ Richtig!</strong> ${qItem.explanationDe}<span class="es-sub">${qItem.explanationEs}</span>`;
          state.quizErrorIds.delete(qItem.id);
          awardSuccess("quiz_" + qItem.id, 10);
        } else {
          btn.classList.add("wrong-choice");
          card.querySelectorAll(".quiz-opt-btn").forEach((b, idx) => {
            if (qItem.shuffledOptions[idx].correct) b.classList.add("correct-choice");
          });
          fb.className = "feedback-banner quiz-fb err";
          fb.innerHTML = `<strong>✗ Aufgepasst:</strong> ${qItem.explanationDe}<span class="es-sub">${qItem.explanationEs}</span>`;
          state.quizErrorIds.add(qItem.id);
          registerMistake();
        }
        updateQuizErrorButton();
      });
    });

    updateQuizErrorButton();
  }

  function updateQuizErrorButton() {
    const btn = document.getElementById("btn-quiz-retry-errors");
    document.getElementById("quiz-error-count").textContent = state.quizErrorIds.size;
    btn.hidden = state.quizErrorIds.size === 0;
  }

  function evaluateWholeQuiz() {
    let correct = 0;
    const total = state.quizItems.length;

    state.quizItems.forEach((qItem, qIdx) => {
      const card = document.querySelectorAll(".quiz-card")[qIdx];
      const fb = card.querySelector(".quiz-fb");
      const btns = card.querySelectorAll(".quiz-opt-btn");
      const chosen = qItem.selectedIdx !== null ? qItem.shuffledOptions[qItem.selectedIdx] : null;

      btns.forEach((b, idx) => {
        if (qItem.shuffledOptions[idx].correct) b.classList.add("correct-choice");
      });

      if (chosen && chosen.correct) {
        correct += 1;
        state.quizErrorIds.delete(qItem.id);
      } else {
        if (qItem.selectedIdx !== null) {
          btns[qItem.selectedIdx].classList.add("wrong-choice");
        }
        state.quizErrorIds.add(qItem.id);
        fb.hidden = false;
        fb.className = "feedback-banner quiz-fb err";
        fb.innerHTML = `<strong>Lösung:</strong> ${qItem.explanationDe}<span class="es-sub">${qItem.explanationEs}</span>`;
      }
    });

    const pct = Math.round((correct / total) * 100);
    // Nota chilena estimada (escala 60% = 4.0)
    let nota = 1.0;
    if (pct < 60) {
      nota = 1.0 + 3.0 * (pct / 60);
    } else {
      nota = 4.0 + 3.0 * ((pct - 60) / 40);
    }

    const summaryBanner = document.getElementById("quiz-summary-banner");
    summaryBanner.hidden = false;
    summaryBanner.innerHTML = `
      <h3>🏆 Ergebnis der Prozessnote-Probe: ${correct} von ${total} richtig (${pct}%)</h3>
      <p><strong>Geschätzte Note (Chile): ${nota.toFixed(1)}</strong> · ${
      pct >= 90
        ? "Hervorragend! Du bist bestens auf die Geometrie-Probe vorbereitet! 🌟"
        : pct >= 75
        ? "Sehr gut gemacht! Übe noch kurz die Fehler mit dem gelben Button."
        : "Guter Start! Klicke oben auf „🔁 Nur Fehler üben“, um die schwierigen Fragen zu meistern."
    }</p>
    `;
    summaryBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });
    updateQuizErrorButton();
  }

  // =========================================================================
  // INICIALIZACIÓN
  // =========================================================================
  document.addEventListener("DOMContentLoaded", () => {
    initHeaderAndTabs();
    initTab1Vocab();
    initTab2Detektiv();
    initTab3WinkelPaare();
    initTab4Labor();
    initTab5Quiz();
  });
})();
