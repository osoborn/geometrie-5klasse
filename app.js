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
    quizOnlyErrors: false,

    // Tab 6: Neue Proben mit Note (Probe A, B, C & Zufalls-Probe D)
    npExamId: "probe_a",
    npItems: [],
    npErrorIds: new Set(),
    npOnlyErrors: false,
    npHistory: [],

    // Tab 7: Mika-Arena (Probe 13. November)
    mikaView: "arcade", // "arcade" | "list" | "spickzettel"
    mikaWorld: "all",
    mikaItems: [],
    mikaIndex: 0,
    mikaCombo: 0,
    mikaSolvedSet: new Set(),
    mikaErrorIds: new Set(),
    mikaOnlyErrors: false,
    mikaSoundOn: true
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
        try {
          btn.scrollIntoView({ block: "nearest", inline: "nearest", container: "nearest" });
        } catch (_) {
          btn.scrollIntoView({ block: "nearest", inline: "nearest" });
        }
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
  // TAB 6: NEUE PROBEN MIT NOTE (NIVEAU 1, 2, 3 + ZUFALLS-GENERATOR PROBE D)
  // =========================================================================
  function computeChileanGrade(correct, total) {
    if (total <= 0) return 1.0;
    const pct = (correct / total) * 100;
    // Escala chilena al 60% de exigencia (60% = 4.0)
    const raw = pct < 60 ? 1.0 + 3.0 * (pct / 60) : 4.0 + 3.0 * ((pct - 60) / 40);
    return Math.round(raw * 10) / 10;
  }

  function computeGermanNote(pct) {
    if (pct >= 92) return { note: "1 (Sehr gut)", labelEs: "Sobresaliente" };
    if (pct >= 80) return { note: "2 (Gut)", labelEs: "Muy bien" };
    if (pct >= 65) return { note: "3 (Befriedigend)", labelEs: "Bien / Satisfactorio" };
    if (pct >= 50) return { note: "4 (Ausreichend)", labelEs: "Suficiente" };
    if (pct >= 30) return { note: "5 (Mangelhaft)", labelEs: "Insuficiente" };
    return { note: "6 (Ungenügend)", labelEs: "Deficiente" };
  }

  // Renderizador SVG dedicado para todas las figuras de las Pruebas Nuevas (con todos los puntos y letras sobre las líneas)
  function buildExtraExamSvg(spec) {
    if (!spec || !spec.type) return "";

    if (spec.type === "angle_pair") {
      const txt1 =
        spec.txt1 ||
        `∡${spec.p1}${spec.vertex}${spec.p2} = ${spec.given === 1 ? spec.d1 + "°" : "?°"} ↺`;
      const txt2 =
        spec.txt2 ||
        `∡${spec.p2}${spec.vertex}${spec.p1} = ${spec.given === 2 ? spec.d2 + "°" : "?°"} ↺`;

      return buildAnglePairNotebookSvg({
        vertex: spec.vertex,
        p1: spec.p1,
        p2: spec.p2,
        startDeg: spec.startDeg || 0,
        d1: spec.d1,
        d2: spec.d2,
        txt1,
        txt2,
        viewWidth: 340,
        viewHeight: 205,
        cx: 155,
        cy: 112,
        rPoint: 52,
        rRay: 70
      });
    }

    switch (spec.type) {
      case "fig_pqrs": {
        // Figura compuesta P - Q - R - S (estilo cuaderno 13. Okt):
        // - ⟼ PQ: Strahl que inicia con tope en P(72, 42) y pasa por Q(132, 132) con flecha en (152, 162)
        // - I—I QR: Strecke entre Q(132, 132) y R(232, 114) con topes en Q y R
        // - ⟷ RS: Gerade infinita con flechas en ambos extremos pasando por R(232, 114) y S(284, 52)
        const hl = spec.highlight || "";
        const colPQ = hl === "PQ" ? "#dc2626" : "#475569";
        const colQR = hl === "QR" ? "#dc2626" : "#475569";
        const colRS = hl === "RS" ? "#dc2626" : "#475569";
        const wPQ = hl === "PQ" ? 4.5 : 2.8;
        const wQR = hl === "QR" ? 4.5 : 2.8;
        const wRS = hl === "RS" ? 4.5 : 2.8;
        const halo = "paint-order: stroke; stroke: #ffffff; stroke-width: 3.5px; stroke-linejoin: round;";

        return `<svg viewBox="0 0 340 175" aria-label="Figur mit Punkten P, Q, R, S">
          <defs>
            <marker id="arrDark_pqrs" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="#475569"/>
            </marker>
            <marker id="arrRed_pqrs" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="#dc2626"/>
            </marker>
          </defs>
          <rect x="2" y="2" width="336" height="171" rx="10" fill="#ffffff" stroke="#e2e8f0"/>

          <!-- 1) Strahl ⟼ PQ: tope en P(72,42), pasa por Q(132,132), flecha en (150,159) -->
          <line x1="72" y1="42" x2="150" y2="159" stroke="${colPQ}" stroke-width="${wPQ}" marker-end="url(#${hl === "PQ" ? "arrRed_pqrs" : "arrDark_pqrs"})"/>
          <line x1="63" y1="48" x2="81" y2="36" stroke="${colPQ}" stroke-width="3.5"/>

          <!-- 2) Strecke I—I QR: entre Q(132,132) y R(232,114) con topes en Q y R -->
          <line x1="132" y1="132" x2="232" y2="114" stroke="${colQR}" stroke-width="${wQR}"/>
          <line x1="130" y1="122" x2="134" y2="142" stroke="${colQR}" stroke-width="3.5"/>
          <line x1="230" y1="104" x2="234" y2="124" stroke="${colQR}" stroke-width="3.5"/>

          <!-- 3) Gerade ⟷ RS: flechas en ambos extremos (207,144) y (309,22), pasando por R(232,114) y S(284,52) -->
          <line x1="207" y1="144" x2="309" y2="22" stroke="${colRS}" stroke-width="${wRS}"
                marker-start="url(#${hl === "RS" ? "arrRed_pqrs" : "arrDark_pqrs"})"
                marker-end="url(#${hl === "RS" ? "arrRed_pqrs" : "arrDark_pqrs"})"/>

          <!-- Puntos P, Q, R, S sobre las líneas -->
          <circle cx="72" cy="42" r="5" fill="#0f172a"/>
          <text x="50" y="47" text-anchor="middle" font-size="16" font-weight="900" fill="#0f172a" style="${halo}">P</text>

          <circle cx="132" cy="132" r="5" fill="#0f172a"/>
          <text x="112" y="144" text-anchor="middle" font-size="16" font-weight="900" fill="#0f172a" style="${halo}">Q</text>

          <circle cx="232" cy="114" r="5" fill="#0f172a"/>
          <text x="248" y="132" text-anchor="middle" font-size="16" font-weight="900" fill="#0f172a" style="${halo}">R</text>

          <circle cx="284" cy="52" r="5" fill="#0f172a"/>
          <text x="264" y="48" text-anchor="middle" font-size="16" font-weight="900" fill="#0f172a" style="${halo}">S</text>
        </svg>`;
      }

      case "closed_xyz":
        // Línea cerrada con punto X adentro, punto Y en el borde y punto Z afuera
        return `<svg viewBox="0 0 340 165" aria-label="Geschlossene Linie mit Punkten X, Y und Z">
          <rect x="2" y="2" width="336" height="161" rx="10" fill="#f8fafc" stroke="#e2e8f0"/>
          <ellipse cx="155" cy="82" rx="88" ry="52" fill="#f3e8ff" stroke="#7e22ce" stroke-width="3.5"/>
          <!-- Punto X en el Innenbereich -->
          <circle cx="135" cy="76" r="5" fill="#dc2626"/>
          <text x="135" y="64" text-anchor="middle" font-size="15" font-weight="900" fill="#dc2626">X</text>
          <text x="135" y="96" text-anchor="middle" font-size="11" font-weight="800" fill="#581c87">(drinnen)</text>
          <!-- Punto Y en el Rand / Grenze -->
          <circle cx="243" cy="82" r="5" fill="#7e22ce"/>
          <text x="262" y="87" font-size="15" font-weight="900" fill="#7e22ce">Y</text>
          <!-- Punto Z en el Außenbereich -->
          <circle cx="52" cy="40" r="5" fill="#047857"/>
          <text x="52" y="28" text-anchor="middle" font-size="15" font-weight="900" fill="#047857">Z</text>
        </svg>`;

      case "flagpole_tu":
        // Mástil vertical TU perpendicular al suelo (Boden)
        return `<svg viewBox="0 0 340 165" aria-label="Fahnenmast TU senkrecht zum Boden">
          <rect x="2" y="2" width="336" height="161" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Suelo (Boden) -->
          <line x1="35" y1="132" x2="305" y2="132" stroke="#15803d" stroke-width="4"/>
          <text x="270" y="150" text-anchor="middle" font-size="12" font-weight="800" fill="#166534">Boden (suelo)</text>
          <!-- Ángulo recto en T -->
          <path d="M 165 132 L 185 132 A 20 20 0 0 0 165 112 Z" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.8"/>
          <circle cx="173" cy="124" r="2.2" fill="#1e40af"/>
          <!-- Mástil vertical TU -->
          <line x1="165" y1="132" x2="165" y2="26" stroke="#0f172a" stroke-width="4"/>
          <!-- Bandera arriba en U -->
          <polygon points="165,26 212,36 165,48" fill="#ef4444"/>
          <!-- Puntos T y U sobre la línea -->
          <circle cx="165" cy="132" r="5" fill="#dc2626"/>
          <text x="148" y="150" text-anchor="middle" font-size="15" font-weight="900" fill="#dc2626">T</text>
          <circle cx="165" cy="26" r="5" fill="#0284c7"/>
          <text x="148" y="34" text-anchor="middle" font-size="15" font-weight="900" fill="#0284c7">U</text>
        </svg>`;

      case "rect_abcd": {
        // Rectángulo con vértices A, B, C, D marcados en las esquinas y resaltado según spec.highlight ("parallel" o "perp")
        const isPerp = spec.highlight === "perp";
        const colTop = isPerp ? "#64748b" : "#dc2626";
        const colBottom = "#dc2626";
        const colLeft = isPerp ? "#dc2626" : "#1d4ed8";
        const colRight = isPerp ? "#64748b" : "#1d4ed8";
        return `<svg viewBox="0 0 340 165" aria-label="Rechteck ABCD">
          <rect x="2" y="2" width="336" height="161" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Ángulos de 90° en las esquinas -->
          <rect x="85" y="38" width="14" height="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.2"/>
          <rect x="241" y="38" width="14" height="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.2"/>
          <rect x="85" y="109" width="16" height="16" fill="${isPerp ? "#fecaca" : "#dbeafe"}" stroke="${isPerp ? "#dc2626" : "#1d4ed8"}" stroke-width="1.8"/>
          <rect x="241" y="111" width="14" height="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.2"/>
          <!-- Lados AB (arriba) y DC (abajo) -->
          <line x1="85" y1="38" x2="255" y2="38" stroke="${colTop}" stroke-width="${isPerp ? 3 : 4.5}"/>
          <line x1="85" y1="125" x2="255" y2="125" stroke="${colBottom}" stroke-width="4.5"/>
          <!-- Lados AD (izquierda) y BC (derecha) -->
          <line x1="85" y1="38" x2="85" y2="125" stroke="${colLeft}" stroke-width="${isPerp ? 4.5 : 3}"/>
          <line x1="255" y1="38" x2="255" y2="125" stroke="${colRight}" stroke-width="3"/>
          <!-- Puntos A, B, C, D -->
          <circle cx="85" cy="38" r="5" fill="#0f172a"/><text x="68" y="34" font-size="15" font-weight="900">A</text>
          <circle cx="255" cy="38" r="5" fill="#0f172a"/><text x="266" y="34" font-size="15" font-weight="900">B</text>
          <circle cx="255" cy="125" r="5" fill="#0f172a"/><text x="266" y="138" font-size="15" font-weight="900">C</text>
          <circle cx="85" cy="125" r="5" fill="#dc2626"/><text x="68" y="138" font-size="15" font-weight="900" fill="#dc2626">D</text>
        </svg>`;
      }

      case "angle_0_360":
        // Izquierda: ∡EFG = 0° (Nullwinkel) | Derecha: ∡HIJ = 360° (Voller Winkel) con todos los puntos
        return `<svg viewBox="0 0 340 165" aria-label="0 Grad Nullwinkel EFG und 360 Grad Voller Winkel HIJ">
          <rect x="2" y="2" width="336" height="161" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Izquierda: ∡EFG = 0° -->
          <line x1="35" y1="95" x2="148" y2="95" stroke="#0f172a" stroke-width="3.5"/>
          <circle cx="42" cy="95" r="5.5" fill="#dc2626"/><text x="42" y="118" text-anchor="middle" font-size="14" font-weight="900" fill="#dc2626">F</text>
          <circle cx="95" cy="95" r="4" fill="#0f172a"/><text x="95" y="82" text-anchor="middle" font-size="13" font-weight="900">E</text>
          <circle cx="132" cy="95" r="4" fill="#0284c7"/><text x="132" y="118" text-anchor="middle" font-size="13" font-weight="900" fill="#0284c7">G</text>
          <text x="90" y="45" text-anchor="middle" font-size="13" font-weight="900" fill="#334155">∡EFG = 0°</text>

          <!-- Derecha: ∡HIJ = 360° -->
          <circle cx="222" cy="95" r="28" fill="rgba(219, 39, 119, 0.14)" stroke="#db2777" stroke-width="2.5"/>
          <line x1="222" y1="95" x2="322" y2="95" stroke="#0f172a" stroke-width="3.5"/>
          <circle cx="222" cy="95" r="5.5" fill="#dc2626"/><text x="205" y="100" text-anchor="middle" font-size="14" font-weight="900" fill="#dc2626">I</text>
          <circle cx="272" cy="95" r="4" fill="#0f172a"/><text x="272" y="82" text-anchor="middle" font-size="13" font-weight="900">H</text>
          <circle cx="305" cy="95" r="4" fill="#db2777"/><text x="305" y="118" text-anchor="middle" font-size="13" font-weight="900" fill="#db2777">J</text>
          <text x="255" y="45" text-anchor="middle" font-size="13" font-weight="900" fill="#9d174d">∡HIJ = 360° ↺</text>
        </svg>`;

      case "ray_tk_trap":
        // pb_1: El rayo empieza en el punto T (arriba a la derecha con tope) y baja oblicuo hacia abajo-izquierda pasando por K con flecha (⟼ TK)
        return `<svg viewBox="0 0 340 155" aria-label="Strahl mit Startpunkt T rechts oben schräg nach links unten durch Punkt K">
          <rect x="2" y="2" width="336" height="151" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Tope de inicio en T(265, 36) perpendicular al rayo -->
          <line x1="259" y1="24" x2="271" y2="48" stroke="#9333ea" stroke-width="4"/>
          <!-- Línea del rayo desde T(265, 36) pasando por K(150, 92) hasta la flecha en (64, 134) -->
          <line x1="265" y1="36" x2="68" y2="132" stroke="#9333ea" stroke-width="3.8"/>
          <polygon points="55,138 75,137 67,121" fill="#9333ea"/>
          <!-- Punto K en la línea -->
          <line x1="145" y1="81" x2="155" y2="103" stroke="#0f172a" stroke-width="2.5"/>
          <circle cx="150" cy="92" r="5" fill="#0f172a"/>
          <text x="135" y="76" text-anchor="middle" font-size="16" font-weight="900" fill="#0f172a">K</text>
          <!-- Punto inicial T arriba a la derecha -->
          <circle cx="265" cy="36" r="5.5" fill="#dc2626"/>
          <text x="265" y="70" text-anchor="middle" font-size="15" font-weight="900" fill="#dc2626">T (Start)</text>
        </svg>`;

      case "slanted_gerade_ef":
        // Recta inclinada EF respecto al suelo horizontal
        return `<svg viewBox="0 0 340 165" aria-label="Schräge Gerade EF zum Boden">
          <rect x="2" y="2" width="336" height="161" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Línea del suelo (Boden) punteada -->
          <line x1="30" y1="138" x2="310" y2="138" stroke="#64748b" stroke-width="2.5" stroke-dasharray="6,4"/>
          <text x="275" y="153" text-anchor="middle" font-size="11" font-weight="800" fill="#475569">Boden (waagerecht)</text>
          <!-- Recta inclinada EF con flechas en ambos extremos -->
          <line x1="55" y1="126" x2="275" y2="28" stroke="#0284c7" stroke-width="3.5"/>
          <polygon points="45,131 58,117 64,130" fill="#0284c7"/>
          <polygon points="285,23 272,37 266,24" fill="#0284c7"/>
          <!-- Puntos E y F sobre la recta -->
          <circle cx="110" cy="101.5" r="5" fill="#0f172a"/>
          <text x="102" y="86" text-anchor="middle" font-size="15" font-weight="900" fill="#0f172a">E</text>
          <circle cx="220" cy="52.5" r="5" fill="#0f172a"/>
          <text x="212" y="38" text-anchor="middle" font-size="15" font-weight="900" fill="#0f172a">F</text>
        </svg>`;

      case "trap_slanted_perp":
        // pb_3: Sobre la recta inclinada h cruzan DOS líneas:
        // - Linie m: vertical al borde inferior de la hoja (60° con h)
        // - Linie n: inclinada formando exactamente 90° (⦜) con la recta inclinada h
        return `<svg viewBox="0 0 340 180" aria-label="Schräge Gerade h mit Linie m (60 Grad) und Linie n (90 Grad senkrecht)">
          <rect x="2" y="2" width="336" height="176" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Recta principal inclinada h (rotada -30° respecto a la horizontal, pasando por (120,115) y (225,54.4)) -->
          <line x1="35" y1="164" x2="305" y2="8" stroke="#0f172a" stroke-width="3.5"/>
          <text x="316" y="24" font-size="16" font-weight="900" fill="#0f172a">h</text>

          <!-- 1) Linie m (izquierda, vertical al borde de la hoja en x=115, cruza h en (115, 117.8) a 60°) -->
          <line x1="115" y1="28" x2="115" y2="168" stroke="#ea580c" stroke-width="3" stroke-dasharray="5,3"/>
          <circle cx="115" cy="117.8" r="4.5" fill="#ea580c"/>
          <text x="115" y="20" text-anchor="middle" font-size="14" font-weight="900" fill="#c2410c">Linie m (60°)</text>

          <!-- 2) Linie n (derecha, perpendicular 90° ⦜ a la recta inclinada h en (220, 57.2)) -->
          <g transform="translate(220, 57.2) rotate(-30)">
            <rect x="0" y="0" width="18" height="18" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.8"/>
            <circle cx="7" cy="7" r="2" fill="#1e40af"/>
            <line x1="0" y1="-44" x2="0" y2="88" stroke="#1d4ed8" stroke-width="3.5"/>
            <circle cx="0" cy="0" r="5" fill="#1d4ed8"/>
          </g>
          <text x="235" y="162" text-anchor="middle" font-size="14" font-weight="900" fill="#1d4ed8" style="paint-order: stroke; stroke: #ffffff; stroke-width: 3px;">Linie n (90° ⦜)</text>
        </svg>`;

      case "geodreieck_115_mno":
        // Geodreieck con ∡MNO obtuso (> 90°) apuntando a la marca 65° / 115°
        return `<svg viewBox="0 0 340 190" aria-label="Stumpfer Winkel MNO auf dem Geodreieck bei 115 Grad">
          <rect x="2" y="2" width="336" height="186" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Silueta Geodreieck centrada en N(170, 148) -->
          <polygon points="40,148 300,148 170,18" fill="rgba(254, 249, 195, 0.65)" stroke="#ca8a04" stroke-width="1.8"/>
          <path d="M 82 148 A 88 88 0 0 1 258 148" fill="none" stroke="#a16207" stroke-width="1.5"/>
          <!-- Línea vertical de 90° -->
          <line x1="170" y1="148" x2="170" y2="22" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
          <text x="170" y="15" text-anchor="middle" font-size="11" font-weight="800" fill="#64748b">90°</text>
          <!-- Arco de 115° antihorario desde NM (derecha) hasta NO (arriba-izquierda) -->
          <path d="M 212 148 A 42 42 0 0 0 152.2 110" fill="rgba(234, 88, 12, 0.22)" stroke="#ea580c" stroke-width="2.5"/>
          <!-- Rayo base NM (derecha, 0°) -->
          <line x1="170" y1="148" x2="290" y2="148" stroke="#0f172a" stroke-width="3"/>
          <line x1="250" y1="141" x2="250" y2="155" stroke="#0f172a" stroke-width="2.5"/>
          <circle cx="250" cy="148" r="4.5" fill="#0f172a"/>
          <text x="250" y="172" text-anchor="middle" font-size="15" font-weight="900" fill="#0f172a">M</text>
          <!-- Vértice N -->
          <circle cx="170" cy="148" r="5.5" fill="#dc2626"/>
          <text x="170" y="172" text-anchor="middle" font-size="15" font-weight="900" fill="#dc2626">N</text>
          <!-- Segundo rayo NO a 115° (arriba a la izquierda de 90°) -->
          <line x1="170" y1="148" x2="122" y2="45" stroke="#0f172a" stroke-width="3"/>
          <circle cx="136" cy="75" r="4.5" fill="#0f172a"/>
          <text x="116" y="80" text-anchor="middle" font-size="15" font-weight="900" fill="#0f172a">O</text>
          <!-- Etiqueta 65° / 115° -->
          <rect x="62" y="24" width="88" height="22" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
          <text x="106" y="39" text-anchor="middle" font-size="12" font-weight="900" fill="#713f12">65° / 115°</text>
          <text x="208" y="118" font-size="12" font-weight="900" fill="#c2410c" style="paint-order: stroke; stroke: #ffffff; stroke-width: 3px;">∡MNO = ?° ↺</text>
        </svg>`;

      case "trapez_abcd":
        // Trapecio rectángulo ABCD: AB abajo, DC arriba (AB ∥ DC), AD izquierda perpendicular (90° en A y D), BC derecha inclinada
        return `<svg viewBox="0 0 340 165" aria-label="Rechtwinkliges Trapez ABCD">
          <rect x="2" y="2" width="336" height="161" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Cuadraditos de 90° en A y D -->
          <rect x="75" y="38" width="14" height="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
          <rect x="75" y="113" width="14" height="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
          <!-- Base AB y techo DC (paralelos, verdes) -->
          <line x1="75" y1="127" x2="275" y2="127" stroke="#16a34a" stroke-width="3.5"/>
          <line x1="75" y1="38" x2="205" y2="38" stroke="#16a34a" stroke-width="3.5"/>
          <!-- Lado vertical AD (perpendicular, azul) -->
          <line x1="75" y1="38" x2="75" y2="127" stroke="#1d4ed8" stroke-width="3.5"/>
          <!-- Lado inclinado BC (naranja) -->
          <line x1="205" y1="38" x2="275" y2="127" stroke="#ea580c" stroke-width="3.5"/>
          <!-- Vértices A, B, C, D -->
          <circle cx="75" cy="127" r="5" fill="#0f172a"/><text x="58" y="138" font-size="15" font-weight="900">A</text>
          <circle cx="275" cy="127" r="5" fill="#0f172a"/><text x="286" y="138" font-size="15" font-weight="900">B</text>
          <circle cx="205" cy="38" r="5" fill="#0f172a"/><text x="214" y="32" font-size="15" font-weight="900">C</text>
          <circle cx="75" cy="38" r="5" fill="#0f172a"/><text x="58" y="34" font-size="15" font-weight="900">D</text>
        </svg>`;

      case "converging_secants":
        // Dos rectas g(AB) y h(CD) que convergen hacia la derecha (Sekanten al prolongarlas)
        return `<svg viewBox="0 0 340 155" aria-label="Zwei zusammenlaufende Geraden g und h mit Punkten A, B, C, D">
          <rect x="2" y="2" width="336" height="151" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Recta g (arriba, inclinada hacia abajo) -->
          <line x1="30" y1="34" x2="225" y2="66" stroke="#ea580c" stroke-width="3.5"/>
          <line x1="225" y1="66" x2="310" y2="80" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/>
          <circle cx="75" cy="41.4" r="4.5" fill="#0f172a"/><text x="75" y="28" text-anchor="middle" font-size="14" font-weight="900">A</text>
          <circle cx="175" cy="57.8" r="4.5" fill="#0f172a"/><text x="175" y="45" text-anchor="middle" font-size="14" font-weight="900">B</text>
          <text x="42" y="25" font-size="14" font-weight="900" fill="#c2410c">g</text>

          <!-- Recta h (abajo, inclinada hacia arriba) -->
          <line x1="30" y1="126" x2="225" y2="94" stroke="#ea580c" stroke-width="3.5"/>
          <line x1="225" y1="94" x2="310" y2="80" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/>
          <circle cx="75" cy="118.6" r="4.5" fill="#0f172a"/><text x="75" y="140" text-anchor="middle" font-size="14" font-weight="900">C</text>
          <circle cx="175" cy="102.2" r="4.5" fill="#0f172a"/><text x="175" y="124" text-anchor="middle" font-size="14" font-weight="900">D</text>
          <text x="42" y="144" font-size="14" font-weight="900" fill="#c2410c">h</text>

          <!-- Punto futuro de cruce -->
          <circle cx="310" cy="80" r="5" fill="#dc2626"/>
          <text x="295" y="66" text-anchor="middle" font-size="11" font-weight="800" fill="#dc2626">Schnittpunkt?</text>
        </svg>`;

      case "fig_abcd_expert":
        // pc_1:
        // - Entre A y B dos topes -> I—I AB (Strecke)
        // - De B pasando por C va una flecha -> ⟼ BC (Strahl)
        // - Por C y D van flechas en ambos extremos -> ⟷ CD (Gerade)
        return `<svg viewBox="0 0 340 175" aria-label="Experten-Figur mit Strecke AB, Strahl BC und Gerade CD">
          <rect x="2" y="2" width="336" height="171" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- 1) Strecke I—I AB (arriba, verde, topes en A y B) -->
          <line x1="75" y1="34" x2="75" y2="58" stroke="#16a34a" stroke-width="3.5"/>
          <line x1="215" y1="34" x2="215" y2="58" stroke="#16a34a" stroke-width="3.5"/>
          <line x1="75" y1="46" x2="215" y2="46" stroke="#16a34a" stroke-width="3.5"/>
          <circle cx="75" cy="46" r="5" fill="#0f172a"/><text x="75" y="26" text-anchor="middle" font-size="15" font-weight="900">A</text>
          <circle cx="215" cy="46" r="5" fill="#0f172a"/><text x="215" y="26" text-anchor="middle" font-size="15" font-weight="900">B</text>

          <!-- 2) Strahl ⟼ BC (inicia en B(215,46) con tope, pasa por C(125,126) y termina con flecha en (98,150)) -->
          <line x1="207" y1="38" x2="223" y2="54" stroke="#9333ea" stroke-width="3.5"/>
          <line x1="215" y1="46" x2="104" y2="145" stroke="#9333ea" stroke-width="3.5"/>
          <polygon points="94,154 112,148 102,136" fill="#9333ea"/>

          <!-- 3) Gerade ⟷ CD (abajo, azul, flechas en ambos extremos pasando por C(125,126) y D(255,126)) -->
          <polygon points="34,126 50,118 50,134" fill="#0284c7"/>
          <polygon points="316,126 300,118 300,134" fill="#0284c7"/>
          <line x1="46" y1="126" x2="304" y2="126" stroke="#0284c7" stroke-width="3.5"/>
          <circle cx="125" cy="126" r="5" fill="#0f172a"/><text x="125" y="152" text-anchor="middle" font-size="15" font-weight="900">C</text>
          <circle cx="255" cy="126" r="5" fill="#0f172a"/><text x="255" y="152" text-anchor="middle" font-size="15" font-weight="900">D</text>
        </svg>`;

      case "double_perp_abg":
        // Dos rectas a y b que son ambas perpendiculares (90°) a la misma recta base g -> por tanto a ∥ b
        return `<svg viewBox="0 0 340 170" aria-label="Zwei Senkrechte a und b auf derselben Geraden g">
          <rect x="2" y="2" width="336" height="166" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Recta base g -->
          <line x1="30" y1="128" x2="310" y2="128" stroke="#0f172a" stroke-width="3.5"/>
          <text x="298" y="148" font-size="14" font-weight="900" fill="#0f172a">g</text>
          <!-- Ángulos de 90° en P y Q -->
          <rect x="105" y="112" width="16" height="16" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/>
          <circle cx="113" cy="120" r="2" fill="#1e40af"/>
          <rect x="225" y="112" width="16" height="16" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/>
          <circle cx="233" cy="120" r="2" fill="#1e40af"/>
          <!-- Recta a (pasa por A y P) -->
          <line x1="105" y1="20" x2="105" y2="152" stroke="#16a34a" stroke-width="3.5"/>
          <circle cx="105" cy="52" r="4.5" fill="#0f172a"/><text x="88" y="56" font-size="14" font-weight="900">A</text>
          <circle cx="105" cy="128" r="5" fill="#dc2626"/><text x="88" y="148" font-size="14" font-weight="900" fill="#dc2626">P</text>
          <text x="116" y="34" font-size="14" font-weight="900" fill="#166534">a</text>
          <!-- Recta b (pasa por B y Q) -->
          <line x1="225" y1="20" x2="225" y2="152" stroke="#16a34a" stroke-width="3.5"/>
          <circle cx="225" cy="52" r="4.5" fill="#0f172a"/><text x="208" y="56" font-size="14" font-weight="900">B</text>
          <circle cx="225" cy="128" r="5" fill="#dc2626"/><text x="208" y="148" font-size="14" font-weight="900" fill="#dc2626">Q</text>
          <text x="236" y="34" font-size="14" font-weight="900" fill="#166534">b</text>
        </svg>`;

      case "split_180_asbc": {
        // Ángulo extendido 180° (línea recta A - S - B) dividido por el rayo SC con ∡ASC = degGiven (por defecto 55°)
        const givenDeg = spec.givenDeg || 55;
        const pA = { x: 45, y: 132 };
        const pB = { x: 295, y: 132 };
        const pS = { x: 170, y: 132 };
        const rad = ((180 - givenDeg) * Math.PI) / 180;
        const pC = {
          x: pS.x + 84 * Math.cos(rad),
          y: pS.y - 84 * Math.sin(rad)
        };
        const ptC = {
          x: pS.x + 62 * Math.cos(rad),
          y: pS.y - 62 * Math.sin(rad)
        };
        const lblC = {
          x: pS.x + 98 * Math.cos(rad),
          y: pS.y - 98 * Math.sin(rad)
        };
        return `<svg viewBox="0 0 340 175" aria-label="Gestreckter Winkel ASB mit Strahl SC">
          <rect x="2" y="2" width="336" height="171" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Arco de 180° completo arriba -->
          <path d="M 218 132 A 48 48 0 0 0 122 132" fill="rgba(2, 132, 199, 0.1)" stroke="#0284c7" stroke-width="2" stroke-dasharray="4,3"/>
          <!-- Arco dado (izquierda: ∡ASC) -->
          <path d="M ${(pS.x + 34 * Math.cos(rad)).toFixed(1)} ${(pS.y - 34 * Math.sin(rad)).toFixed(1)} A 34 34 0 0 0 ${pS.x - 34} ${pS.y}" fill="rgba(22, 163, 74, 0.22)" stroke="#16a34a" stroke-width="2.5"/>
          <!-- Recta A - S - B -->
          <line x1="${pA.x}" y1="${pA.y}" x2="${pB.x}" y2="${pB.y}" stroke="#0f172a" stroke-width="3.5"/>
          <!-- Rayo SC -->
          <line x1="${pS.x}" y1="${pS.y}" x2="${pC.x.toFixed(1)}" y2="${pC.y.toFixed(1)}" stroke="#dc2626" stroke-width="3.5"/>
          <!-- Puntos A, S, B, C -->
          <circle cx="70" cy="132" r="4.5" fill="#0f172a"/><text x="70" y="155" text-anchor="middle" font-size="15" font-weight="900">A</text>
          <circle cx="170" cy="132" r="5.5" fill="#dc2626"/><text x="170" y="155" text-anchor="middle" font-size="15" font-weight="900" fill="#dc2626">S</text>
          <circle cx="270" cy="132" r="4.5" fill="#0f172a"/><text x="270" y="155" text-anchor="middle" font-size="15" font-weight="900">B</text>
          <circle cx="${ptC.x.toFixed(1)}" cy="${ptC.y.toFixed(1)}" r="4.5" fill="#0f172a"/>
          <text x="${lblC.x.toFixed(1)}" y="${(lblC.y + 4).toFixed(1)}" text-anchor="middle" font-size="15" font-weight="900">C</text>
          <!-- Textos de grados -->
          <text x="112" y="114" text-anchor="middle" font-size="13" font-weight="900" fill="#15803d">${givenDeg}°</text>
          <text x="224" y="98" text-anchor="middle" font-size="14" font-weight="900" fill="#0369a1">∡CSB = ?°</text>
          <text x="170" y="22" text-anchor="middle" font-size="12" font-weight="800" fill="#475569">Gestreckter Winkel (A—S—B = 180°)</text>
        </svg>`;
      }

      case "split_90_klmn": {
        // pc_4: ∡KLM es un ángulo recto (90° ⦜: LK horizontal y LM vertical). El rayo ⟼ LN lo divide con ∡KLN = givenDeg (35°), pidiendo ∡NLM y el exterior ∡MLK (270°)
        const givenDeg = spec.givenDeg || 35;
        const cx = 115;
        const cy = 142;
        const rad = (givenDeg * Math.PI) / 180;
        const tipN = { x: cx + 98 * Math.cos(rad), y: cy - 98 * Math.sin(rad) };
        const ptN = { x: cx + 74 * Math.cos(rad), y: cy - 74 * Math.sin(rad) };
        const lblN = { x: cx + 114 * Math.cos(rad), y: cy - 114 * Math.sin(rad) };
        return `<svg viewBox="0 0 340 175" aria-label="Rechter Winkel KLM geteilt durch Strahl LN">
          <rect x="2" y="2" width="336" height="171" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Cuadradito de 90° total (∡KLM) -->
          <rect x="${cx}" y="${cy - 22}" width="22" height="22" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
          <!-- Arco de givenDeg (∡KLN) -->
          <path d="M ${cx + 42} ${cy} A 42 42 0 0 0 ${(cx + 42 * Math.cos(rad)).toFixed(1)} ${(cy - 42 * Math.sin(rad)).toFixed(1)}" fill="rgba(22, 163, 74, 0.22)" stroke="#16a34a" stroke-width="2.5"/>
          <!-- Rayo LK (horizontal) -->
          <line x1="${cx}" y1="${cy}" x2="265" y2="${cy}" stroke="#0f172a" stroke-width="3.5"/>
          <circle cx="235" cy="${cy}" r="4.5" fill="#0f172a"/><text x="235" y="${cy + 22}" text-anchor="middle" font-size="15" font-weight="900">K</text>
          <!-- Rayo LM (vertical 90°) -->
          <line x1="${cx}" y1="${cy}" x2="${cx}" y2="24" stroke="#0f172a" stroke-width="3.5"/>
          <circle cx="${cx}" cy="46" r="4.5" fill="#0f172a"/><text x="${cx - 18}" y="52" text-anchor="middle" font-size="15" font-weight="900">M</text>
          <!-- Rayo divisor LN -->
          <line x1="${cx}" y1="${cy}" x2="${tipN.x.toFixed(1)}" y2="${tipN.y.toFixed(1)}" stroke="#dc2626" stroke-width="3"/>
          <circle cx="${ptN.x.toFixed(1)}" cy="${ptN.y.toFixed(1)}" r="4.5" fill="#dc2626"/>
          <text x="${lblN.x.toFixed(1)}" y="${(lblN.y + 5).toFixed(1)}" text-anchor="middle" font-size="15" font-weight="900" fill="#dc2626">N</text>
          <!-- Vértice L -->
          <circle cx="${cx}" cy="${cy}" r="5.5" fill="#dc2626"/>
          <text x="${cx - 16}" y="${cy + 18}" font-size="15" font-weight="900" fill="#dc2626">L</text>
          <!-- Etiquetas de medida libres de colisión -->
          <text x="${cx + 58}" y="${cy - 8}" font-size="12.5" font-weight="900" fill="#15803d" style="paint-order: stroke; stroke: #ffffff; stroke-width: 3px;">∡KLN = ${givenDeg}°</text>
          <text x="${cx + 10}" y="${cy - 88}" font-size="12.5" font-weight="900" fill="#1e40af" style="paint-order: stroke; stroke: #ffffff; stroke-width: 3px;">∡NLM = ?°</text>
          <text x="255" y="32" text-anchor="middle" font-size="12" font-weight="800" fill="#1e40af">∡KLM = 90° (⦜)</text>
        </svg>`;
      }

      case "diff_geodreieck_20_130":
        // pc_5: Vértice B en el 0 del Geodreieck, rayo BA en 20° y rayo BC en 130° (∡ABC = 130° - 20° = 110°)
        return `<svg viewBox="0 0 340 190" aria-label="Winkel ABC zwischen 20 Grad und 130 Grad auf dem Geodreieck">
          <rect x="2" y="2" width="336" height="186" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Silueta Geodreieck en B(170, 150) -->
          <polygon points="40,150 300,150 170,20" fill="rgba(254, 249, 195, 0.65)" stroke="#ca8a04" stroke-width="1.8"/>
          <path d="M 82 150 A 88 88 0 0 1 258 150" fill="none" stroke="#a16207" stroke-width="1.5"/>
          <!-- Arco entre 20° y 130° -->
          <path d="M 209.5 135.6 A 42 42 0 0 0 143 117.8" fill="rgba(147, 51, 234, 0.2)" stroke="#7e22ce" stroke-width="2.5"/>
          <!-- 1. Schenkel BA a 20° -->
          <line x1="170" y1="150" x2="278" y2="110.7" stroke="#0f172a" stroke-width="3"/>
          <circle cx="248" cy="121.6" r="4.5" fill="#0f172a"/>
          <text x="260" y="138" font-size="15" font-weight="900" fill="#0f172a">A</text>
          <rect x="276" y="92" width="42" height="20" rx="5" fill="#dcfce7" stroke="#16a34a"/>
          <text x="297" y="106" text-anchor="middle" font-size="12" font-weight="900" fill="#166534">20°</text>
          <!-- 2. Schenkel BC a 130° -->
          <line x1="170" y1="150" x2="96" y2="61.8" stroke="#0f172a" stroke-width="3"/>
          <circle cx="116" cy="85.6" r="4.5" fill="#0f172a"/>
          <text x="98" y="92" font-size="15" font-weight="900" fill="#0f172a">C</text>
          <rect x="46" y="38" width="48" height="20" rx="5" fill="#ffedd5" stroke="#ea580c"/>
          <text x="70" y="52" text-anchor="middle" font-size="12" font-weight="900" fill="#9a3412">130°</text>
          <!-- Vértice B -->
          <circle cx="170" cy="150" r="5.5" fill="#dc2626"/>
          <text x="170" y="173" text-anchor="middle" font-size="15" font-weight="900" fill="#dc2626">B</text>
          <text x="175" y="96" text-anchor="middle" font-size="13" font-weight="900" fill="#6b21a8">∡ABC = ?°</text>
        </svg>`;

      case "three_rays_360":
        // pc_6: Tres rayos SA (0°), SB (110°), SC (240°) desde el vértice S: ∡ASB = 110°, ∡BSC = 130°, ∡CSA = ?° (120°)
        return `<svg viewBox="0 0 340 190" aria-label="Drei Strahlen SA, SB, SC ab Scheitelpunkt S (360 Grad)">
          <rect x="2" y="2" width="336" height="186" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Rayo SA (0°, derecha) -->
          <line x1="170" y1="98" x2="268" y2="98" stroke="#0f172a" stroke-width="3"/>
          <circle cx="242" cy="98" r="4.5" fill="#0f172a"/><text x="242" y="118" text-anchor="middle" font-size="15" font-weight="900">A</text>
          <!-- Rayo SB (110°, arriba-izquierda) -->
          <line x1="170" y1="98" x2="140" y2="16" stroke="#0f172a" stroke-width="3"/>
          <circle cx="147" cy="36" r="4.5" fill="#0f172a"/><text x="128" y="36" text-anchor="middle" font-size="15" font-weight="900">B</text>
          <!-- Rayo SC (240°, abajo-izquierda) -->
          <line x1="170" y1="98" x2="126" y2="174" stroke="#0f172a" stroke-width="3"/>
          <circle cx="137" cy="155" r="4.5" fill="#0f172a"/><text x="118" y="165" text-anchor="middle" font-size="15" font-weight="900">C</text>
          <!-- Vértice S -->
          <circle cx="170" cy="98" r="5.5" fill="#dc2626"/>
          <text x="184" y="115" font-size="15" font-weight="900" fill="#dc2626">S</text>
          <!-- Etiquetas de los 3 sectores -->
          <text x="215" y="56" font-size="13" font-weight="900" fill="#15803d">∡ASB = 110° ↺</text>
          <text x="72" y="102" text-anchor="middle" font-size="13" font-weight="900" fill="#0369a1">∡BSC = 130° ↺</text>
          <text x="225" y="152" font-size="13" font-weight="900" fill="#dc2626">∡CSA = ?° ↺</text>
        </svg>`;

      case "rotated_square_efgh":
        // Cuadrado rotado 45° (rombo con 4 ángulos de 90°) con vértices E, F, G, H
        return `<svg viewBox="0 0 340 175" aria-label="Gedrehtes Quadrat EFGH">
          <rect x="2" y="2" width="336" height="171" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <g transform="translate(170, 88) rotate(45)">
            <rect x="-46" y="-46" width="92" height="92" fill="#f0fdf4" stroke="#16a34a" stroke-width="3.5"/>
            <rect x="-46" y="-46" width="14" height="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
            <rect x="32" y="-46" width="14" height="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
            <rect x="32" y="32" width="14" height="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
            <rect x="-46" y="32" width="14" height="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
          </g>
          <!-- Puntos E (abajo), F (derecha), G (arriba), H (izquierda) -->
          <circle cx="170" cy="153" r="5" fill="#0f172a"/><text x="188" y="162" text-anchor="middle" font-size="15" font-weight="900">E</text>
          <circle cx="235" cy="88" r="5" fill="#0f172a"/><text x="252" y="93" text-anchor="middle" font-size="15" font-weight="900">F</text>
          <circle cx="170" cy="23" r="5" fill="#0f172a"/><text x="188" y="24" text-anchor="middle" font-size="15" font-weight="900">G</text>
          <circle cx="105" cy="88" r="5" fill="#0f172a"/><text x="88" y="93" text-anchor="middle" font-size="15" font-weight="900">H</text>
          <text x="285" y="42" text-anchor="middle" font-size="12" font-weight="800" fill="#1e40af">4 × 90° (⦜)</text>
        </svg>`;

      case "add_angles_48_45":
        // pc_10: Vértice M con rayos MK (0°), ML (48°), MN (93°): ∡KML = 48° + ∡LMN = 45° => ∡KMN = 93°
        return `<svg viewBox="0 0 340 175" aria-label="Winkeladdition KML = 48 Grad und LMN = 45 Grad am Scheitelpunkt M">
          <rect x="2" y="2" width="336" height="171" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Rayo MK (0°) -->
          <line x1="135" y1="142" x2="275" y2="142" stroke="#0f172a" stroke-width="3"/>
          <circle cx="245" cy="142" r="4.5" fill="#0f172a"/><text x="245" y="162" text-anchor="middle" font-size="15" font-weight="900">K</text>
          <!-- Rayo ML (48°) -->
          <line x1="135" y1="142" x2="218" y2="50" stroke="#0284c7" stroke-width="3"/>
          <circle cx="198" cy="72" r="4.5" fill="#0284c7"/><text x="216" y="75" font-size="15" font-weight="900" fill="#0284c7">L</text>
          <!-- Rayo MN (93°, ligeramente pasado de 90°) -->
          <line x1="135" y1="142" x2="129" y2="20" stroke="#dc2626" stroke-width="3"/>
          <circle cx="131" cy="48" r="4.5" fill="#dc2626"/><text x="112" y="52" font-size="15" font-weight="900" fill="#dc2626">N</text>
          <!-- Vértice M -->
          <circle cx="135" cy="142" r="5.5" fill="#0f172a"/><text x="118" y="158" font-size="15" font-weight="900">M</text>
          <!-- Etiquetas -->
          <text x="205" y="124" font-size="13" font-weight="900" fill="#15803d">48°</text>
          <text x="158" y="78" font-size="13" font-weight="900" fill="#0369a1">45°</text>
          <text x="255" y="36" text-anchor="middle" font-size="12" font-weight="900" fill="#7c2d12">∡KMN = 48° + 45° = ?°</text>
        </svg>`;

      case "street_map_ghs":
      default:
        // Dos calles paralelas g(AB) y h(CD) cortadas por una calle perpendicular s en P (90°) y Q (?°)
        return `<svg viewBox="0 0 340 165" aria-label="Parallele Straßen g und h mit senkrechter Querstraße s">
          <rect x="2" y="2" width="336" height="161" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Cuadradito de 90° en P -->
          <rect x="170" y="34" width="16" height="16" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/>
          <circle cx="178" cy="42" r="2" fill="#1e40af"/>
          <!-- Calle g (arriba) -->
          <line x1="35" y1="50" x2="305" y2="50" stroke="#16a34a" stroke-width="3.5"/>
          <circle cx="85" cy="50" r="4.5" fill="#0f172a"/><text x="85" y="36" text-anchor="middle" font-size="14" font-weight="900">A</text>
          <circle cx="255" cy="50" r="4.5" fill="#0f172a"/><text x="255" y="36" text-anchor="middle" font-size="14" font-weight="900">B</text>
          <text x="316" y="54" font-size="14" font-weight="900" fill="#166534">g</text>
          <!-- Calle h (abajo, paralela a g) -->
          <line x1="35" y1="118" x2="305" y2="118" stroke="#16a34a" stroke-width="3.5"/>
          <circle cx="85" cy="118" r="4.5" fill="#0f172a"/><text x="85" y="140" text-anchor="middle" font-size="14" font-weight="900">C</text>
          <circle cx="255" cy="118" r="4.5" fill="#0f172a"/><text x="255" y="140" text-anchor="middle" font-size="14" font-weight="900">D</text>
          <text x="316" y="122" font-size="14" font-weight="900" fill="#166534">h</text>
          <!-- Calle transversal s -->
          <line x1="170" y1="14" x2="170" y2="152" stroke="#1d4ed8" stroke-width="3.5"/>
          <text x="182" y="24" font-size="14" font-weight="900" fill="#1d4ed8">s</text>
          <!-- Intersecciones P y Q -->
          <circle cx="170" cy="50" r="5" fill="#dc2626"/><text x="154" y="44" font-size="14" font-weight="900" fill="#dc2626">P</text>
          <circle cx="170" cy="118" r="5" fill="#dc2626"/><text x="154" y="138" font-size="14" font-weight="900" fill="#dc2626">Q</text>
          <text x="206" y="108" font-size="13" font-weight="900" fill="#dc2626">?° bei Q</text>
        </svg>`;
    }
  }

  // Generador dinámico de una prueba nueva completa de 12 preguntas (Probe D)
  function generateDynamicProbeD() {
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const pair1Deg = pick([35, 45, 50, 65, 75]);
    const pair1Conj = 360 - pair1Deg;
    const pair2Deg = pick([110, 125, 135, 145, 155]);
    const pair2Conj = 360 - pair2Deg;
    const suppDeg = pick([40, 50, 55, 65, 70]);
    const compDeg = pick([25, 30, 35, 40, 55]);

    // Tomamos una selección balanceada de los bancos A, B y C + preguntas con números frescos
    const poolBase = [
      ...DATA.extraExams.probe_a.questions.slice(0, 3),
      ...DATA.extraExams.probe_b.questions.slice(0, 3),
      ...DATA.extraExams.probe_c.questions.slice(0, 2)
    ];

    const dynamicQuestions = [
      {
        id: "pd_dyn_1",
        topicDe: "Winkel 360°-Paar (Neu generiert)",
        questionDe: `Schau auf die Zeichnung mit den Punkten A, B und C: ∡ABC = ${pair1Deg}°. Wie groß ist der Gegenwinkel ∡CBA (blauer Bogen ↺) und wie heißt er?`,
        questionEs: `Mira el dibujo con los puntos A, B y C: ∡ABC = ${pair1Deg}°. ¿Cuánto mide el ángulo conjugado ∡CBA (arco azul ↺) y cómo se clasifica?`,
        svgSpec: {
          type: "angle_pair",
          vertex: "B",
          p1: "A",
          p2: "C",
          startDeg: 0,
          d1: pair1Deg,
          d2: pair1Conj,
          txt1: `∡ABC = ${pair1Deg}° ↺`,
          txt2: `∡CBA = ?° ↺`
        },
        options: [
          { textDe: `∡CBA = ${pair1Conj}° (Überstumpfer Winkel)`, textEs: `${pair1Conj}° (Ángulo cóncavo > 180°)`, correct: true },
          { textDe: `∡CBA = ${180 - pair1Deg}° (Stumpfer Winkel)`, textEs: `${180 - pair1Deg}° (Ángulo obtuso)`, correct: false },
          { textDe: `∡CBA = ${pair1Conj}° (Stumpfer Winkel)`, textEs: `${pair1Conj}° (Ángulo obtuso)`, correct: false },
          { textDe: `∡CBA = 360° (Voller Winkel)`, textEs: `360° (Ángulo completo)`, correct: false }
        ],
        explanationDe: `Zusammen 360°: 360° − ${pair1Deg}° = ${pair1Conj}°. Da ${pair1Conj}° zwischen 181° und 359° liegt, ist es ein Überstumpfer Winkel.`,
        explanationEs: `Suman 360°: 360° − ${pair1Deg}° = ${pair1Conj}° (Überstumpfer Winkel).`
      },
      {
        id: "pd_dyn_2",
        topicDe: "Umgekehrte 360°-Aufgabe (Neu generiert)",
        questionDe: `In der Zeichnung mit den Punkten L, M und N ist der äußere Winkel ∡NML = ${pair2Conj}° gegeben. Wie groß ist der innere Winkel ∡LMN (grün ↺) und wie heißt seine Sortierung?`,
        questionEs: `En el dibujo con los puntos L, M y N se da el ángulo exterior ∡NML = ${pair2Conj}°. ¿Cuánto mide el ángulo interior ∡LMN y cuál es su clasificación?`,
        svgSpec: {
          type: "angle_pair",
          vertex: "M",
          p1: "L",
          p2: "N",
          startDeg: 0,
          d1: pair2Deg,
          d2: pair2Conj,
          txt1: `∡LMN = ?° ↺`,
          txt2: `∡NML = ${pair2Conj}° ↺`
        },
        options: [
          { textDe: `∡LMN = ${pair2Deg}° (${classifyAngleDe(pair2Deg)})`, textEs: `${pair2Deg}° (${classifyAngleEs(pair2Deg)})`, correct: true },
          { textDe: `∡LMN = ${pair2Deg}° (Spitzer Winkel)`, textEs: `${pair2Deg}° (Ángulo agudo)`, correct: false },
          { textDe: `∡LMN = ${360 - pair2Deg + 20}° (Überstumpfer Winkel)`, textEs: `${360 - pair2Deg + 20}°`, correct: false },
          { textDe: `∡LMN = 90° (Rechter Winkel)`, textEs: `90° (Ángulo recto)`, correct: false }
        ],
        explanationDe: `360° − ${pair2Conj}° = ${pair2Deg}°. Da ${pair2Deg}° zwischen 91° und 179° liegt, ist es ein Stumpfer Winkel!`,
        explanationEs: `360° − ${pair2Conj}° = ${pair2Deg}° (Stumpfer Winkel).`
      },
      {
        id: "pd_dyn_3",
        topicDe: "Nebenwinkel auf einer Geraden (180°)",
        questionDe: `Die Punkte A, S und B liegen auf einer geraden Linie (180°). Wenn ∡ASC = ${suppDeg}° misst, wie groß ist dann ∡CSB?`,
        questionEs: `Los puntos A, S y B están sobre una línea recta (180°). Si ∡ASC = ${suppDeg}°, ¿cuánto mide ∡CSB?`,
        svgSpec: { type: "split_180_asbc", givenDeg: suppDeg },
        options: [
          { textDe: `∡CSB = ${180 - suppDeg}° (${classifyAngleDe(180 - suppDeg)})`, textEs: `${180 - suppDeg}° (${classifyAngleEs(180 - suppDeg)})`, correct: true },
          { textDe: `∡CSB = ${360 - suppDeg}° (Überstumpfer Winkel)`, textEs: `${360 - suppDeg}°`, correct: false },
          { textDe: `∡CSB = ${Math.abs(90 - suppDeg)}° (Spitzer Winkel)`, textEs: `${Math.abs(90 - suppDeg)}°`, correct: false },
          { textDe: `∡CSB = 180° (Gestreckter Winkel)`, textEs: `180°`, correct: false }
        ],
        explanationDe: `Auf einer Geraden gilt 180°: 180° − ${suppDeg}° = ${180 - suppDeg}° (${classifyAngleDe(180 - suppDeg)}).`,
        explanationEs: `Sobre una línea recta suman 180°: 180° − ${suppDeg}° = ${180 - suppDeg}°.`
      },
      {
        id: "pd_dyn_4",
        topicDe: "Rechter Winkel geteilt (90°)",
        questionDe: `Die Strahlen LK und LM stehen senkrecht aufeinander (∡KLM = 90°). Wenn ∡KLN = ${compDeg}° ist, wie groß ist der Restwinkel ∡NLM?`,
        questionEs: `Los rayos LK y LM son perpendiculares (∡KLM = 90°). Si ∡KLN = ${compDeg}°, ¿cuánto mide el ángulo restante ∡NLM?`,
        svgSpec: { type: "split_90_klmn", givenDeg: compDeg },
        options: [
          { textDe: `∡NLM = ${90 - compDeg}° (Spitzer Winkel)`, textEs: `${90 - compDeg}° (Ángulo agudo)`, correct: true },
          { textDe: `∡NLM = ${180 - compDeg}° (Stumpfer Winkel)`, textEs: `${180 - compDeg}° (Ángulo obtuso)`, correct: false },
          { textDe: `∡NLM = 90° (Rechter Winkel)`, textEs: `90° (Ángulo recto)`, correct: false },
          { textDe: `∡NLM = ${360 - compDeg}° (Überstumpfer Winkel)`, textEs: `${360 - compDeg}°`, correct: false }
        ],
        explanationDe: `Rechter Winkel = 90°: 90° − ${compDeg}° = ${90 - compDeg}° (Spitzer Winkel).`,
        explanationEs: `Ángulo recto = 90°: 90° − ${compDeg}° = ${90 - compDeg}°.`
      }
    ];

    return {
      id: "probe_d",
      levelBadgeDe: "🎲 Zufalls-Probe · Gemischt",
      levelColor: "random",
      titleDe: "Probe D — Zufalls-Generator (Immer neue Zahlen & Fragen)",
      titleEs: "Prueba D — Generador Aleatorio (Números y preguntas nuevas cada vez)",
      descDe: "Jedes Mal, wenn du auf „Probe neu starten / mischen“ klickst, werden neue Winkelmaße und Fragen für eine neue Note zusammengestellt.",
      descEs: "Cada vez que presionas «Probe neu starten / mischen», se generan nuevos ángulos y preguntas para calcular una nueva nota.",
      questions: [...poolBase, ...dynamicQuestions]
    };
  }

  function initTab6NeueProben() {
    const selector = document.getElementById("np-exam-selector");
    if (!selector) return;

    selector.querySelectorAll("[data-exam-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        selector.querySelectorAll("[data-exam-id]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.npExamId = btn.dataset.examId;
        state.npOnlyErrors = false;
        state.npErrorIds.clear();
        renderNeueProbe();
      });
    });

    document.getElementById("btn-np-restart").addEventListener("click", () => {
      state.npOnlyErrors = false;
      state.npErrorIds.clear();
      renderNeueProbe();
    });

    document.getElementById("btn-np-retry-errors").addEventListener("click", () => {
      if (state.npErrorIds.size === 0) return;
      state.npOnlyErrors = true;
      renderNeueProbe();
    });

    document.getElementById("btn-np-evaluate-all").addEventListener("click", evaluateNeueProbe);

    renderNeueProbe();
  }

  function getActiveExtraExam() {
    if (state.npExamId === "probe_d") {
      return generateDynamicProbeD();
    }
    return DATA.extraExams[state.npExamId] || DATA.extraExams.probe_a;
  }

  function renderNeueProbe() {
    const exam = getActiveExtraExam();
    state.npCurrentExamMeta = exam;

    // Actualizar banner superior de la prueba seleccionada
    const badge = document.getElementById("np-level-badge");
    badge.textContent = exam.levelBadgeDe;
    badge.className = `np-level-badge level-${exam.levelColor}`;

    document.getElementById("np-exam-title").textContent = exam.titleDe;
    document.getElementById("np-exam-desc").textContent = exam.descDe;
    document.getElementById("np-exam-desc-es").textContent = exam.descEs;

    const summaryBanner = document.getElementById("np-summary-banner");
    summaryBanner.hidden = true;

    const container = document.getElementById("np-questions-container");
    container.innerHTML = "";

    let list = [...exam.questions];
    if (state.npOnlyErrors && state.npErrorIds.size > 0) {
      list = list.filter((q) => state.npErrorIds.has(q.id));
    }

    state.npItems = list.map((q) => ({
      ...q,
      shuffledOptions: [...q.options].sort(() => Math.random() - 0.5),
      selectedIdx: null
    }));

    state.npItems.forEach((q, qIdx) => {
      const card = document.createElement("article");
      card.className = "quiz-card np-quiz-card";
      card.dataset.qid = q.id;

      const optsHtml = q.shuffledOptions
        .map(
          (opt, oIdx) => `
          <button type="button" class="option-btn np-opt-btn" data-qidx="${qIdx}" data-oidx="${oIdx}">
            <div><strong>${opt.textDe}</strong></div>
            <small class="es-sub">${opt.textEs}</small>
          </button>
        `
        )
        .join("");

      card.innerHTML = `
        <div>
          <div class="card-top-meta">
            <span class="step-badge">Aufgabe ${qIdx + 1} / ${state.npItems.length}</span>
            <span class="source-tag">${q.topicDe}</span>
          </div>
          <h3>${q.questionDe}</h3>
          <p class="es-sub">${q.questionEs}</p>
          <div class="quiz-card-svg">${buildExtraExamSvg(q.svgSpec)}</div>
          <div class="options-stack">${optsHtml}</div>
        </div>
        <div class="feedback-banner np-fb" hidden></div>
      `;

      container.appendChild(card);
    });

    container.querySelectorAll(".np-opt-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qIdx = Number(btn.dataset.qidx);
        const oIdx = Number(btn.dataset.oidx);
        const qItem = state.npItems[qIdx];
        qItem.selectedIdx = oIdx;

        const card = btn.closest(".np-quiz-card");
        card.querySelectorAll(".np-opt-btn").forEach((b) => b.classList.remove("correct-choice", "wrong-choice"));
        const chosen = qItem.shuffledOptions[oIdx];
        const fb = card.querySelector(".np-fb");
        fb.hidden = false;

        if (chosen.correct) {
          btn.classList.add("correct-choice");
          fb.className = "feedback-banner np-fb ok";
          fb.innerHTML = `<strong>✓ Richtig!</strong> ${qItem.explanationDe}<span class="es-sub">${qItem.explanationEs}</span>`;
          state.npErrorIds.delete(qItem.id);
          awardSuccess("np_" + qItem.id, 12);
        } else {
          btn.classList.add("wrong-choice");
          card.querySelectorAll(".np-opt-btn").forEach((b, idx) => {
            if (qItem.shuffledOptions[idx].correct) b.classList.add("correct-choice");
          });
          fb.className = "feedback-banner np-fb err";
          fb.innerHTML = `<strong>✗ Aufgepasst:</strong> ${qItem.explanationDe}<span class="es-sub">${qItem.explanationEs}</span>`;
          state.npErrorIds.add(qItem.id);
          registerMistake();
        }
        updateNpErrorButton();
      });
    });

    updateNpErrorButton();
  }

  function updateNpErrorButton() {
    const btn = document.getElementById("btn-np-retry-errors");
    document.getElementById("np-error-count").textContent = state.npErrorIds.size;
    btn.hidden = state.npErrorIds.size === 0;
  }

  function evaluateNeueProbe() {
    let correct = 0;
    const total = state.npItems.length;
    const cards = document.querySelectorAll(".np-quiz-card");

    state.npItems.forEach((qItem, qIdx) => {
      const card = cards[qIdx];
      const fb = card.querySelector(".np-fb");
      const btns = card.querySelectorAll(".np-opt-btn");
      const chosen = qItem.selectedIdx !== null ? qItem.shuffledOptions[qItem.selectedIdx] : null;

      btns.forEach((b, idx) => {
        if (qItem.shuffledOptions[idx].correct) b.classList.add("correct-choice");
      });

      if (chosen && chosen.correct) {
        correct += 1;
        state.npErrorIds.delete(qItem.id);
      } else {
        if (qItem.selectedIdx !== null) {
          btns[qItem.selectedIdx].classList.add("wrong-choice");
        }
        state.npErrorIds.add(qItem.id);
        fb.hidden = false;
        fb.className = "feedback-banner np-fb err";
        fb.innerHTML = `<strong>Lösung:</strong> ${qItem.explanationDe}<span class="es-sub">${qItem.explanationEs}</span>`;
      }
    });

    const pct = Math.round((correct / total) * 100);
    const notaChile = computeChileanGrade(correct, total);
    const deGrade = computeGermanNote(pct);
    const toneClass = notaChile >= 6.0 ? "grade-excellent" : notaChile >= 4.5 ? "grade-good" : "grade-warn";

    // Guardar en el historial de la sesión
    const examLabel =
      state.npExamId === "probe_a"
        ? "🟢 Probe A (Basis)"
        : state.npExamId === "probe_b"
        ? "🟡 Probe B (Mittel)"
        : state.npExamId === "probe_c"
        ? "🔴 Probe C (Experten)"
        : "🎲 Probe D (Zufall)";

    state.npHistory.unshift({
      label: examLabel,
      nota: notaChile.toFixed(1),
      deNote: deGrade.note,
      score: `${correct}/${total} (${pct}%)`
    });
    renderNpHistory();

    const summaryBanner = document.getElementById("np-summary-banner");
    summaryBanner.hidden = false;
    summaryBanner.innerHTML = `
      <h3>📝 Zeugnis &amp; Auswertung — ${state.npCurrentExamMeta.titleDe}</h3>
      <div class="grade-boxes-row">
        <div class="grade-big-box ${toneClass}">
          <span class="grade-label">Chilenische Note (60% Skala)</span>
          <strong class="grade-number">${notaChile.toFixed(1)}</strong>
          <span class="grade-sub">Skala 1,0 bis 7,0</span>
        </div>
        <div class="grade-big-box ${toneClass}">
          <span class="grade-label">Deutsche Schulnote</span>
          <strong class="grade-number">${deGrade.note}</strong>
          <span class="grade-sub">${deGrade.labelEs}</span>
        </div>
        <div class="grade-big-box">
          <span class="grade-label">Erreichte Punkte</span>
          <strong class="grade-number">${correct} / ${total}</strong>
          <span class="grade-sub">${pct}% richtig gelöst</span>
        </div>
      </div>
      <p style="margin: 0.4rem 0 0; font-weight: 700;">
        ${
          notaChile >= 6.5
            ? "🌟 Meisterleistung! Du beherrschst alle Linien, Symbole und 360°-Winkel perfekt!"
            : notaChile >= 5.5
            ? "👏 Sehr starkes Ergebnis! Schau dir kurz die rot markierten Erklärungen an, um die 7,0 zu knacken."
            : "💪 Gute Übung! Klicke oben auf „🔁 Nur Fehler üben“, um genau die Aufgaben zu wiederholen, die noch gefehlt haben."
        }
      </p>
    `;

    summaryBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });
    updateNpErrorButton();
  }

  function renderNpHistory() {
    const bar = document.getElementById("np-history-bar");
    if (!bar || state.npHistory.length === 0) return;
    bar.hidden = false;
    const pills = state.npHistory
      .slice(0, 6)
      .map(
        (h) =>
          `<span class="np-history-pill">${h.label}: <strong>Note ${h.nota}</strong> (${h.score})</span>`
      )
      .join("");
    bar.innerHTML = `<strong>📊 Deine Noten in dieser Sitzung:</strong> ${pills}`;
  }

  // =========================================================================
  // TAB 7: MIKA-ARENA — PROBE FREITAG, 13. NOVEMBER
  // (Polygone, Dreiecke, Vierecke, Symmetrie, Koordinatensystem & Vektoren)
  // =========================================================================
  let mikaAudioCtx = null;

  function playMikaChime(type) {
    if (!state.mikaSoundOn) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      if (!mikaAudioCtx) mikaAudioCtx = new AudioContextClass();
      if (mikaAudioCtx.state === "suspended") mikaAudioCtx.resume();

      const now = mikaAudioCtx.currentTime;
      if (type === "ok") {
        // Alegre acorde ascendente (Do - Mi - Sol)
        [523.25, 659.25, 783.99].forEach((freq, idx) => {
          const osc = mikaAudioCtx.createOscillator();
          const gain = mikaAudioCtx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, now + idx * 0.065);
          gain.gain.setValueAtTime(0.11, now + idx * 0.065);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.065 + 0.22);
          osc.connect(gain);
          gain.connect(mikaAudioCtx.destination);
          osc.start(now + idx * 0.065);
          osc.stop(now + idx * 0.065 + 0.23);
        });
      } else if (type === "err") {
        // Suave tono grave de aviso
        const osc = mikaAudioCtx.createOscillator();
        const gain = mikaAudioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(240, now);
        osc.frequency.linearRampToValueAtTime(185, now + 0.2);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.connect(gain);
        gain.connect(mikaAudioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.23);
      }
    } catch (_) {
      // Ignorar si el navegador bloquea AudioContext
    }
  }

  function triggerMikaConfetti() {
    const layer = document.getElementById("mika-confetti-layer");
    if (!layer) return;
    layer.innerHTML = "";
    const colors = ["#ec4899", "#8b5cf6", "#0284c7", "#16a34a", "#eab308", "#f97316"];
    for (let i = 0; i < 18; i += 1) {
      const dot = document.createElement("span");
      dot.className = "mika-confetti-dot";
      dot.style.left = `${20 + Math.random() * 60}%`;
      dot.style.top = `${25 + Math.random() * 40}%`;
      dot.style.backgroundColor = colors[i % colors.length];
      const dx = Math.round((Math.random() - 0.5) * 220);
      const dy = Math.round(-40 - Math.random() * 120);
      dot.style.setProperty("--dx", `${dx}px`);
      dot.style.setProperty("--dy", `${dy}px`);
      layer.appendChild(dot);
    }
  }

  function updateMikaHeroStats() {
    const solved = state.mikaSolvedSet.size;
    const comboEl = document.getElementById("mika-combo-val");
    const starsEl = document.getElementById("mika-stars-val");
    const rankEl = document.getElementById("mika-rank-badge");

    if (comboEl) comboEl.textContent = `${state.mikaCombo}x`;
    if (starsEl) starsEl.textContent = `${solved} / 38`;

    if (rankEl) {
      if (solved >= 32) {
        rankEl.textContent = "👑 Rang 5: Geometrie-Königin (Note 7,0!)";
      } else if (solved >= 22) {
        rankEl.textContent = "🧭 Rang 4: Koordinaten- & Vektor-Pilotin";
      } else if (solved >= 12) {
        rankEl.textContent = "💎 Rang 3: Vierecks-Meisterin";
      } else if (solved >= 5) {
        rankEl.textContent = "📐 Rang 2: Dreiecks-Detektivin";
      } else {
        rankEl.textContent = "🐣 Rang 1: Ecken-Entdeckerin";
      }
    }
  }

  // Helper para dibujar rayitas de lados iguales (|, ||, |||) sobre un segmento (x1,y1)-(x2,y2)
  function svgTickMarks(x1, y1, x2, y2, count, color = "#0f172a") {
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len;
    const uy = dy / len;
    const nx = -uy;
    const ny = ux;
    const spacing = 5;
    const halfTick = 6.5;
    let out = "";
    for (let i = 0; i < count; i += 1) {
      const offset = (i - (count - 1) / 2) * spacing;
      const cx = mx + ux * offset;
      const cy = my + uy * offset;
      out += `<line x1="${(cx - nx * halfTick).toFixed(1)}" y1="${(cy - ny * halfTick).toFixed(1)}" x2="${(cx + nx * halfTick).toFixed(1)}" y2="${(cy + ny * halfTick).toFixed(1)}" stroke="${color}" stroke-width="2.4" stroke-linecap="round"/>`;
    }
    return out;
  }

  // Helper para dibujar flechitas de lados paralelos (>, >>) sobre un segmento
  function svgParallelArrows(x1, y1, x2, y2, count, color = "#dc2626") {
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len;
    const uy = dy / len;
    const nx = -uy;
    const ny = ux;
    const spacing = 7;
    const size = 6;
    let out = "";
    for (let i = 0; i < count; i += 1) {
      const offset = (i - (count - 1) / 2) * spacing;
      const tipX = mx + ux * (offset + size * 0.5);
      const tipY = my + uy * (offset + size * 0.5);
      const w1x = tipX - ux * size + nx * (size * 0.75);
      const w1y = tipY - uy * size + ny * (size * 0.75);
      const w2x = tipX - ux * size - nx * (size * 0.75);
      const w2y = tipY - uy * size - ny * (size * 0.75);
      out += `<polyline points="${w1x.toFixed(1)},${w1y.toFixed(1)} ${tipX.toFixed(1)},${tipY.toFixed(1)} ${w2x.toFixed(1)},${w2y.toFixed(1)}" fill="none" stroke="${color}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    return out;
  }

  // Renderizador SVG completo para la pestaña 7 (Mika-Arena 13. Nov)
  function buildMikaNov13Svg(spec) {
    if (!spec) return "";

    switch (spec.type) {
      // 1. POLÍGONOS REGULARES (3 a 20 lados)
      case "polygon_regular": {
        const n = spec.sides || 6;
        const stroke = spec.color || "#0284c7";
        const fill = spec.fill || "#e0f2fe";
        const cx = 170;
        const cy = 96;
        const r = 64;
        const pts = [];
        for (let i = 0; i < n; i += 1) {
          const ang = -Math.PI / 2 + (i * 2 * Math.PI) / n;
          pts.push({
            x: cx + r * Math.cos(ang),
            y: cy + r * Math.sin(ang),
            lx: cx + (r + 17) * Math.cos(ang),
            ly: cy + (r + 17) * Math.sin(ang)
          });
        }
        const polyPoints = pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
        const dotsHtml = pts
          .map((p, idx) => {
            const showNum = n <= 10 || idx % 2 === 0;
            return `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${n > 12 ? 3 : 4.5}" fill="#0f172a"/>
              ${
                showNum
                  ? `<text x="${p.lx.toFixed(1)}" y="${(p.ly + 4).toFixed(1)}" text-anchor="middle" font-size="${n > 10 ? 9.5 : 11.5}" font-weight="900" fill="#334155">${idx + 1}</text>`
                  : ""
              }`;
          })
          .join("");

        return `<svg viewBox="0 0 340 198" aria-label="Polygon mit ${n} Ecken">
          <rect x="2" y="2" width="336" height="194" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <polygon points="${polyPoints}" fill="${fill}" stroke="${stroke}" stroke-width="3.5" stroke-linejoin="round"/>
          ${dotsHtml}
          <rect x="118" y="80" width="104" height="32" rx="8" fill="rgba(255,255,255,0.92)" stroke="${stroke}" stroke-width="1.5"/>
          <text x="170" y="100" text-anchor="middle" font-size="13.5" font-weight="900" fill="#0f172a">${spec.labelCenter || n + " Ecken"}</text>
          <text x="170" y="186" text-anchor="middle" font-size="11.5" font-weight="800" fill="#475569">Ecken = Seiten = Winkel</text>
        </svg>`;
      }

      // 2. LINEUP S. 11: WELCHE FIGUR IST EIN VIERECK?
      case "not_a_viereck_lineup":
        return `<svg viewBox="0 0 350 185" aria-label="Vier Figuren A, B, C und D zum Vergleichen">
          <rect x="2" y="2" width="346" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- A: Fünfeck -->
          <rect x="10" y="14" width="76" height="154" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="48" y="32" text-anchor="middle" font-size="13" font-weight="900" fill="#334155">Figur A</text>
          <polygon points="48,52 74,72 64,108 32,108 22,72" fill="#94a3b8" stroke="#1e293b" stroke-width="2.5"/>
          <text x="48" y="142" text-anchor="middle" font-size="10.5" font-weight="800" fill="#64748b">5 Ecken</text>

          <!-- B: Offene Linie -->
          <rect x="94" y="14" width="76" height="154" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="132" y="32" text-anchor="middle" font-size="13" font-weight="900" fill="#334155">Figur B</text>
          <polyline points="154,60 108,60 108,108 156,108" fill="none" stroke="#1e293b" stroke-width="3"/>
          <text x="132" y="142" text-anchor="middle" font-size="10.5" font-weight="800" fill="#dc2626">Offen!</text>

          <!-- C: Rundbogen -->
          <rect x="178" y="14" width="76" height="154" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="216" y="32" text-anchor="middle" font-size="13" font-weight="900" fill="#334155">Figur C</text>
          <path d="M 192 108 L 192 76 A 24 24 0 0 1 240 76 L 240 108 Z" fill="#cbd5e1" stroke="#1e293b" stroke-width="2.5"/>
          <text x="216" y="142" text-anchor="middle" font-size="10.5" font-weight="800" fill="#dc2626">Mit Kurve!</text>

          <!-- D: Echtes Viereck (gedrehtes Quadrat) -->
          <rect x="262" y="14" width="78" height="154" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
          <text x="301" y="32" text-anchor="middle" font-size="13" font-weight="900" fill="#166534">Figur D</text>
          <polygon points="301,52 329,80 301,108 273,80" fill="#86efac" stroke="#15803d" stroke-width="2.8"/>
          <text x="301" y="142" text-anchor="middle" font-size="10.5" font-weight="900" fill="#15803d">4 gerade Seiten</text>
        </svg>`;

      // 3. DREIECKE NACH SEITEN & WINKELN (S. 2, 3, 17, 18)
      case "triangle_classified": {
        const kind = spec.kind || "equilateral";
        if (kind === "equilateral") {
          const p1 = { x: 170, y: 26 };
          const p2 = { x: 102, y: 144 };
          const p3 = { x: 238, y: 144 };
          return `<svg viewBox="0 0 340 185" aria-label="Gleichseitiges spitzwinkliges Dreieck">
            <rect x="2" y="2" width="336" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <polygon points="${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}" fill="#dcfce7" stroke="#15803d" stroke-width="3.2" stroke-linejoin="round"/>
            ${svgTickMarks(p1.x, p1.y, p2.x, p2.y, 1, "#15803d")}
            ${svgTickMarks(p2.x, p2.y, p3.x, p3.y, 1, "#15803d")}
            ${svgTickMarks(p3.x, p3.y, p1.x, p1.y, 1, "#15803d")}
            <text x="170" y="54" text-anchor="middle" font-size="11.5" font-weight="900" fill="#166534">s (60°)</text>
            <text x="124" y="136" text-anchor="middle" font-size="11.5" font-weight="900" fill="#166534">s</text>
            <text x="216" y="136" text-anchor="middle" font-size="11.5" font-weight="900" fill="#166534">s</text>
            <text x="170" y="172" text-anchor="middle" font-size="12" font-weight="800" fill="#334155">Alle 3 Seiten gleich lang (|) · 3 spitze Winkel</text>
          </svg>`;
        }
        if (kind === "isosceles_acute") {
          const p1 = { x: 170, y: 20 };
          const p2 = { x: 122, y: 148 };
          const p3 = { x: 218, y: 148 };
          return `<svg viewBox="0 0 340 185" aria-label="Gleichschenkliges spitzwinkliges Dreieck">
            <rect x="2" y="2" width="336" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <polygon points="${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}" fill="#e0f2fe" stroke="#0284c7" stroke-width="3.2" stroke-linejoin="round"/>
            ${svgTickMarks(p1.x, p1.y, p2.x, p2.y, 1, "#0369a1")}
            ${svgTickMarks(p3.x, p3.y, p1.x, p1.y, 1, "#0369a1")}
            ${svgTickMarks(p2.x, p2.y, p3.x, p3.y, 2, "#dc2626")}
            <text x="170" y="172" text-anchor="middle" font-size="12" font-weight="800" fill="#334155">2 Schenkel gleich lang (|) · Basis anders (||)</text>
          </svg>`;
        }
        if (kind === "isosceles_obtuse") {
          const p1 = { x: 170, y: 52 };
          const p2 = { x: 64, y: 136 };
          const p3 = { x: 276, y: 136 };
          return `<svg viewBox="0 0 340 185" aria-label="Stumpfwinkliges gleichschenkliges Dreieck">
            <rect x="2" y="2" width="336" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <polygon points="${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}" fill="#fef3c7" stroke="#d97706" stroke-width="3.2" stroke-linejoin="round"/>
            <path d="M 145 72 A 32 32 0 0 0 195 72" fill="rgba(220,38,38,0.2)" stroke="#dc2626" stroke-width="2.5"/>
            <text x="170" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#dc2626">st (&gt; 90° stumpf!)</text>
            ${svgTickMarks(p1.x, p1.y, p2.x, p2.y, 1, "#b45309")}
            ${svgTickMarks(p3.x, p3.y, p1.x, p1.y, 1, "#b45309")}
            ${svgTickMarks(p2.x, p2.y, p3.x, p3.y, 2, "#0f172a")}
            <text x="170" y="172" text-anchor="middle" font-size="12" font-weight="800" fill="#334155">Oben 1 stumpfer Winkel (&gt; 90°) · 2 Seiten gleich lang</text>
          </svg>`;
        }
        if (kind === "isosceles_right") {
          const p1 = { x: 170, y: 40 };
          const p2 = { x: 75, y: 135 };
          const p3 = { x: 265, y: 135 };
          return `<svg viewBox="0 0 340 185" aria-label="Rechtwinklig-gleichschenkliges Dreieck">
            <rect x="2" y="2" width="336" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <polygon points="${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}" fill="#ede9fe" stroke="#7c3aed" stroke-width="3.2" stroke-linejoin="round"/>
            <!-- Cuadradito de 90° rotado en la cima (170,40) -->
            <polygon points="170,40 156,54 170,68 184,54" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
            <circle cx="170" cy="54" r="2.2" fill="#1e40af"/>
            <text x="170" y="26" text-anchor="middle" font-size="12.5" font-weight="900" fill="#1d4ed8">90° (Rechter Winkel ⦜)</text>
            ${svgTickMarks(p1.x, p1.y, p2.x, p2.y, 1, "#6d28d9")}
            ${svgTickMarks(p3.x, p3.y, p1.x, p1.y, 1, "#6d28d9")}
            ${svgTickMarks(p2.x, p2.y, p3.x, p3.y, 2, "#0f172a")}
            <text x="170" y="172" text-anchor="middle" font-size="12" font-weight="800" fill="#334155">1 rechter Winkel (90°) + 2 gleich lange Seiten (|)</text>
          </svg>`;
        }
        if (kind === "scalene_right") {
          const p1 = { x: 86, y: 34 };
          const p2 = { x: 86, y: 138 };
          const p3 = { x: 264, y: 138 };
          return `<svg viewBox="0 0 340 185" aria-label="Rechtwinklig-ungleichseitiges Dreieck">
            <rect x="2" y="2" width="336" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <polygon points="${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}" fill="#f0f9ff" stroke="#0284c7" stroke-width="3.2" stroke-linejoin="round"/>
            <rect x="86" y="116" width="22" height="22" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
            <circle cx="97" cy="127" r="2.2" fill="#1e40af"/>
            ${svgTickMarks(p1.x, p1.y, p2.x, p2.y, 1, "#0f172a")}
            ${svgTickMarks(p2.x, p2.y, p3.x, p3.y, 2, "#0f172a")}
            ${svgTickMarks(p3.x, p3.y, p1.x, p1.y, 3, "#dc2626")}
            <text x="170" y="172" text-anchor="middle" font-size="12" font-weight="800" fill="#334155">1 rechter Winkel (90° ⦜) + 3 verschiedene Seiten (|, ||, |||)</text>
          </svg>`;
        }
        // Default: scalene_acute
        const p1 = { x: 145, y: 28 };
        const p2 = { x: 74, y: 142 };
        const p3 = { x: 266, y: 142 };
        return `<svg viewBox="0 0 340 185" aria-label="Allgemeines ungleichseitiges Dreieck">
          <rect x="2" y="2" width="336" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <polygon points="${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}" fill="#fce7f3" stroke="#db2777" stroke-width="3.2" stroke-linejoin="round"/>
          ${svgTickMarks(p1.x, p1.y, p2.x, p2.y, 1, "#9d174d")}
          ${svgTickMarks(p2.x, p2.y, p3.x, p3.y, 2, "#0f172a")}
          ${svgTickMarks(p3.x, p3.y, p1.x, p1.y, 3, "#0284c7")}
          <text x="170" y="172" text-anchor="middle" font-size="12" font-weight="800" fill="#334155">3 unterschiedlich lange Seiten: |, || und |||</text>
        </svg>`;
      }

      // 4. TABLA 3x3 DE TRIÁNGULOS (S. 3)
      case "triangle_matrix_3x3":
        return `<svg viewBox="0 0 350 190" aria-label="3x3 Tabelle der Dreiecke von Seite 3">
          <rect x="2" y="2" width="346" height="186" rx="12" fill="#ffffff" stroke="#cbd5e1"/>
          <!-- Header -->
          <rect x="10" y="10" width="94" height="36" fill="#f1f5f9" stroke="#94a3b8"/>
          <text x="57" y="32" text-anchor="middle" font-size="10.5" font-weight="900" fill="#334155">Seiten \ Winkel</text>
          <rect x="104" y="10" width="78" height="36" fill="#eff6ff" stroke="#94a3b8"/>
          <text x="143" y="26" text-anchor="middle" font-size="10" font-weight="900" fill="#1e40af">spitzwinklig</text>
          <text x="143" y="39" text-anchor="middle" font-size="8.5" fill="#1e40af">3 Winkel &lt; 90°</text>
          <rect x="182" y="10" width="78" height="36" fill="#eff6ff" stroke="#94a3b8"/>
          <text x="221" y="26" text-anchor="middle" font-size="10" font-weight="900" fill="#1e40af">rechtwinklig</text>
          <text x="221" y="39" text-anchor="middle" font-size="8.5" fill="#1e40af">1 Winkel = 90°</text>
          <rect x="260" y="10" width="80" height="36" fill="#eff6ff" stroke="#94a3b8"/>
          <text x="300" y="26" text-anchor="middle" font-size="10" font-weight="900" fill="#1e40af">stumpfwinklig</text>
          <text x="300" y="39" text-anchor="middle" font-size="8.5" fill="#1e40af">1 Winkel &gt; 90°</text>

          <!-- Fila 1: gleichseitig -->
          <rect x="10" y="46" width="94" height="44" fill="#f8fafc" stroke="#94a3b8"/>
          <text x="57" y="65" text-anchor="middle" font-size="10" font-weight="900" fill="#0f172a">gleichseitig</text>
          <text x="57" y="79" text-anchor="middle" font-size="8.5" fill="#475569">3 Seiten gleich</text>
          <rect x="104" y="46" width="78" height="44" fill="#dcfce7" stroke="#94a3b8"/>
          <polygon points="143,53 128,82 158,82" fill="#86efac" stroke="#15803d" stroke-width="2"/>
          <rect x="182" y="46" width="78" height="44" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
          <text x="221" y="72" text-anchor="middle" font-size="11.5" font-weight="900" fill="#dc2626">LEER! Warum?</text>
          <rect x="260" y="46" width="80" height="44" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
          <text x="300" y="72" text-anchor="middle" font-size="11.5" font-weight="900" fill="#dc2626">LEER! Warum?</text>

          <!-- Fila 2: gleichschenklig -->
          <rect x="10" y="90" width="94" height="42" fill="#f8fafc" stroke="#94a3b8"/>
          <text x="57" y="108" text-anchor="middle" font-size="10" font-weight="900" fill="#0f172a">gleichschenklig</text>
          <text x="57" y="122" text-anchor="middle" font-size="8.5" fill="#475569">2 Seiten gleich</text>
          <rect x="104" y="90" width="78" height="42" fill="#ffffff" stroke="#94a3b8"/>
          <text x="143" y="115" text-anchor="middle" font-size="13" font-weight="900" fill="#16a34a">✓ △</text>
          <rect x="182" y="90" width="78" height="42" fill="#ffffff" stroke="#94a3b8"/>
          <text x="221" y="115" text-anchor="middle" font-size="13" font-weight="900" fill="#16a34a">✓ ⦜△</text>
          <rect x="260" y="90" width="80" height="42" fill="#ffffff" stroke="#94a3b8"/>
          <text x="300" y="115" text-anchor="middle" font-size="13" font-weight="900" fill="#16a34a">✓ st△</text>

          <!-- Fila 3: allgemein -->
          <rect x="10" y="132" width="94" height="42" fill="#f8fafc" stroke="#94a3b8"/>
          <text x="57" y="150" text-anchor="middle" font-size="10" font-weight="900" fill="#0f172a">allgemein</text>
          <text x="57" y="164" text-anchor="middle" font-size="8.5" fill="#475569">3 verschieden</text>
          <rect x="104" y="132" width="78" height="42" fill="#ffffff" stroke="#94a3b8"/>
          <text x="143" y="157" text-anchor="middle" font-size="13" font-weight="900" fill="#16a34a">✓ △</text>
          <rect x="182" y="132" width="78" height="42" fill="#ffffff" stroke="#94a3b8"/>
          <text x="221" y="157" text-anchor="middle" font-size="13" font-weight="900" fill="#16a34a">✓ ⦜△</text>
          <rect x="260" y="132" width="80" height="42" fill="#ffffff" stroke="#94a3b8"/>
          <text x="300" y="157" text-anchor="middle" font-size="13" font-weight="900" fill="#16a34a">✓ st△</text>
        </svg>`;

      // 5. LÖSUNGSWORT-RÄTSEL (S. 19: HAUS, BAUM, AUTO)
      case "triangle_word_puzzle": {
        if (spec.puzzle === "HAUS") {
          return `<svg viewBox="0 0 340 175" aria-label="Rechtwinklige Dreiecke ergeben HAUS">
            <rect x="2" y="2" width="336" height="171" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <!-- H -->
            <polygon points="22,32 22,108 78,108" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.5"/>
            <rect x="22" y="92" width="16" height="16" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/>
            <text x="42" y="88" font-size="16" font-weight="900" fill="#1e3a8a">H</text>
            <!-- A -->
            <polygon points="98,32 162,32 98,108" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.5"/>
            <rect x="98" y="32" width="16" height="16" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/>
            <text x="118" y="72" font-size="16" font-weight="900" fill="#1e3a8a">A</text>
            <!-- U -->
            <polygon points="182,32 244,32 182,108" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.5"/>
            <rect x="182" y="32" width="16" height="16" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/>
            <text x="200" y="72" font-size="16" font-weight="900" fill="#1e3a8a">U</text>
            <!-- S -->
            <polygon points="262,62 322,36 286,108" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.5"/>
            <circle cx="274" cy="68" r="3" fill="#1d4ed8"/>
            <text x="288" y="82" font-size="16" font-weight="900" fill="#1e3a8a">S</text>
            <rect x="65" y="126" width="210" height="34" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
            <text x="170" y="148" text-anchor="middle" font-size="14" font-weight="900" fill="#166534">Lösungswort #1: H - A - U - S</text>
          </svg>`;
        }
        return `<svg viewBox="0 0 340 175" aria-label="Gleichseitige Dreiecke ergeben BAUM und gleichschenklige AUTO">
          <rect x="2" y="2" width="336" height="171" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Fila superior: B - A - U - M (gleichseitig) -->
          <text x="170" y="24" text-anchor="middle" font-size="11.5" font-weight="900" fill="#15803d">#2 Gleichseitig (3 Seiten gleich lang):</text>
          <polygon points="52,34 26,78 78,78" fill="#dcfce7" stroke="#16a34a" stroke-width="2.4"/><text x="52" y="69" text-anchor="middle" font-size="14" font-weight="900" fill="#14532d">B</text>
          <polygon points="130,34 104,78 156,78" fill="#dcfce7" stroke="#16a34a" stroke-width="2.4"/><text x="130" y="69" text-anchor="middle" font-size="14" font-weight="900" fill="#14532d">A</text>
          <polygon points="208,34 182,78 234,78" fill="#dcfce7" stroke="#16a34a" stroke-width="2.4"/><text x="208" y="69" text-anchor="middle" font-size="14" font-weight="900" fill="#14532d">U</text>
          <polygon points="286,34 260,78 312,78" fill="#dcfce7" stroke="#16a34a" stroke-width="2.4"/><text x="286" y="69" text-anchor="middle" font-size="14" font-weight="900" fill="#14532d">M</text>

          <!-- Fila inferior: A - U - T - O (gleichschenklig) -->
          <text x="170" y="104" text-anchor="middle" font-size="11.5" font-weight="900" fill="#0369a1">#3 Gleichschenklig (2 Seiten gleich lang):</text>
          <polygon points="52,112 22,158 82,158" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.4"/><text x="52" y="150" text-anchor="middle" font-size="14" font-weight="900" fill="#0c4a6e">A</text>
          <polygon points="130,112 100,158 160,158" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.4"/><text x="130" y="150" text-anchor="middle" font-size="14" font-weight="900" fill="#0c4a6e">U</text>
          <polygon points="208,112 184,158 232,158" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.4"/><text x="208" y="150" text-anchor="middle" font-size="14" font-weight="900" fill="#0c4a6e">T</text>
          <polygon points="286,110 270,158 302,158" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.4"/><text x="286" y="150" text-anchor="middle" font-size="14" font-weight="900" fill="#0c4a6e">O</text>
        </svg>`;
      }

      // 6. DIE 3 GRUPPEN DER VIERECKE (S. 4 & 5)
      case "viereck_three_groups":
        return `<svg viewBox="0 0 350 185" aria-label="Vierecke in 3 Gruppen nach parallelen Seiten">
          <rect x="2" y="2" width="346" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <rect x="115" y="10" width="120" height="28" rx="14" fill="#f1f5f9" stroke="#0f172a" stroke-width="2"/>
          <text x="175" y="29" text-anchor="middle" font-size="13" font-weight="900" fill="#0f172a">Vierecke (4 Ecken)</text>
          <line x1="145" y1="38" x2="62" y2="62" stroke="#0f172a" stroke-width="2"/>
          <line x1="175" y1="38" x2="175" y2="62" stroke="#0f172a" stroke-width="2"/>
          <line x1="205" y1="38" x2="288" y2="62" stroke="#0f172a" stroke-width="2"/>

          <!-- 1. Parallelogramm -->
          <rect x="8" y="62" width="106" height="110" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
          <text x="61" y="80" text-anchor="middle" font-size="11" font-weight="900" fill="#0c4a6e">Parallelogramm</text>
          <text x="61" y="95" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0369a1">2 Paar ∥ Seiten</text>
          <polygon points="34,110 96,110 84,152 22,152" fill="#7dd3fc" stroke="#0369a1" stroke-width="2.2"/>

          <!-- 2. Trapez -->
          <rect x="122" y="62" width="106" height="110" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
          <text x="175" y="80" text-anchor="middle" font-size="11" font-weight="900" fill="#78350f">Trapez</text>
          <text x="175" y="95" text-anchor="middle" font-size="10.5" font-weight="800" fill="#b45309">1 Paar ∥ Seiten</text>
          <polygon points="150,110 200,110 214,152 136,152" fill="#fde68a" stroke="#b45309" stroke-width="2.2"/>

          <!-- 3. Trapezoid -->
          <rect x="236" y="62" width="106" height="110" rx="10" fill="#fce7f3" stroke="#db2777" stroke-width="2"/>
          <text x="289" y="80" text-anchor="middle" font-size="11" font-weight="900" fill="#831843">Trapezoid</text>
          <text x="289" y="95" text-anchor="middle" font-size="10.5" font-weight="800" fill="#be185d">0 Paar ∥ Seiten</text>
          <polygon points="289,104 315,124 289,162 263,124" fill="#fbcfe8" stroke="#be185d" stroke-width="2.2"/>
        </svg>`;

      // 7. VIERECKE SPEZIAL-FORMEN (S. 5, 11–16)
      case "viereck_shape": {
        const k = spec.kind || "parallelogramm_family";
        if (k === "parallelogramm_family") {
          return `<svg viewBox="0 0 350 180" aria-label="Die 4 Parallelogramme: Quadrat, Rechteck, Raute, Romboid">
            <rect x="2" y="2" width="346" height="176" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <text x="175" y="22" text-anchor="middle" font-size="12" font-weight="900" fill="#0369a1">Gruppe Parallelogramm (alle haben 2 Paar ∥ Seiten!)</text>
            <!-- Quadrat -->
            <rect x="20" y="42" width="60" height="60" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5"/>
            <rect x="20" y="42" width="11" height="11" fill="none" stroke="#0369a1" stroke-width="1.5"/>
            <text x="50" y="124" text-anchor="middle" font-size="11" font-weight="900" fill="#0f172a">Quadrat</text>
            <text x="50" y="138" text-anchor="middle" font-size="9.5" fill="#475569">4 gleich · 4×90°</text>
            <!-- Rechteck -->
            <rect x="96" y="50" width="76" height="46" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5"/>
            <rect x="96" y="50" width="11" height="11" fill="none" stroke="#0369a1" stroke-width="1.5"/>
            <text x="134" y="124" text-anchor="middle" font-size="11" font-weight="900" fill="#0f172a">Rechteck</text>
            <text x="134" y="138" text-anchor="middle" font-size="9.5" fill="#475569">2 Paar · 4×90°</text>
            <!-- Raute -->
            <polygon points="216,36 248,72 216,108 184,72" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5"/>
            <text x="216" y="124" text-anchor="middle" font-size="11" font-weight="900" fill="#0f172a">Raute</text>
            <text x="216" y="138" text-anchor="middle" font-size="9.5" fill="#475569">4 gleich · 0×90°</text>
            <!-- Romboid -->
            <polygon points="274,48 336,48 320,98 258,98" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5"/>
            <text x="297" y="124" text-anchor="middle" font-size="11" font-weight="900" fill="#0f172a">Romboid</text>
            <text x="297" y="138" text-anchor="middle" font-size="9.5" fill="#475569">2 Paar · 0×90°</text>
          </svg>`;
        }
        if (k === "quadrat_vs_raute") {
          return `<svg viewBox="0 0 350 185" aria-label="Quadrat auf der Spitze vs. Raute">
            <rect x="2" y="2" width="346" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <!-- Links: Gedrehtes Quadrat -->
            <g transform="translate(92, 82) rotate(45)">
              <rect x="-38" y="-38" width="76" height="76" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
              <rect x="-38" y="-38" width="13" height="13" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>
              <rect x="25" y="-38" width="13" height="13" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>
              <rect x="25" y="25" width="13" height="13" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>
              <rect x="-38" y="25" width="13" height="13" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>
            </g>
            <text x="92" y="154" text-anchor="middle" font-size="12" font-weight="900" fill="#166534">Quadrat (4 × 90° ⦜)</text>
            <text x="92" y="170" text-anchor="middle" font-size="10.5" fill="#15803d">4 gleich lange Seiten</text>

            <!-- Rechts: Raute -->
            <polygon points="258,26 298,82 258,138 218,82" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
            ${svgTickMarks(258, 26, 298, 82, 1, "#b45309")}
            ${svgTickMarks(298, 82, 258, 138, 1, "#b45309")}
            ${svgTickMarks(258, 138, 218, 82, 1, "#b45309")}
            ${svgTickMarks(218, 82, 258, 26, 1, "#b45309")}
            <text x="258" y="154" text-anchor="middle" font-size="12" font-weight="900" fill="#b45309">Raute (0 × 90°!)</text>
            <text x="258" y="170" text-anchor="middle" font-size="10.5" fill="#92400e">2 spitze + 2 stumpfe Winkel</text>
          </svg>`;
        }
        if (k === "trapez_recht") {
          return `<svg viewBox="0 0 340 185" aria-label="Rechtwinkliges Trapez mit 1 Paar parallelen Seiten und 2 rechten Winkeln">
            <rect x="2" y="2" width="336" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <polygon points="85,38 215,38 265,134 85,134" fill="#fef3c7" stroke="#d97706" stroke-width="3.2" stroke-linejoin="round"/>
            <!-- 2 rechte Winkel links oben und links unten -->
            <rect x="85" y="38" width="20" height="20" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
            <circle cx="95" cy="48" r="2.2" fill="#1d4ed8"/>
            <rect x="85" y="114" width="20" height="20" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
            <circle cx="95" cy="124" r="2.2" fill="#1d4ed8"/>
            <!-- Pfeile für das 1 Paar paralleler Seiten -->
            ${svgParallelArrows(85, 38, 215, 38, 1, "#dc2626")}
            ${svgParallelArrows(85, 134, 265, 134, 1, "#dc2626")}
            <text x="48" y="54" text-anchor="middle" font-size="11.5" font-weight="900" fill="#1d4ed8">90° #1</text>
            <text x="48" y="128" text-anchor="middle" font-size="11.5" font-weight="900" fill="#1d4ed8">90° #2</text>
            <text x="170" y="168" text-anchor="middle" font-size="12" font-weight="900" fill="#92400e">Rechtwinkliges Trapez: 1 Paar ∥ und 2 rechte Winkel!</text>
          </svg>`;
        }
        if (k === "romboid_slanted_1f") {
          // Figura 1f de la pág. 16: paralelogramo muy inclinado
          const p1 = { x: 64, y: 122 };
          const p2 = { x: 214, y: 34 };
          const p3 = { x: 286, y: 34 };
          const p4 = { x: 136, y: 122 };
          return `<svg viewBox="0 0 340 185" aria-label="Schräges Romboid von Seite 16 Aufgabe 1f">
            <rect x="2" y="2" width="336" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <polygon points="${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y}" fill="#e0f2fe" stroke="#0284c7" stroke-width="3.2" stroke-linejoin="round"/>
            ${svgParallelArrows(p2.x, p2.y, p3.x, p3.y, 1, "#dc2626")}
            ${svgParallelArrows(p1.x, p1.y, p4.x, p4.y, 1, "#dc2626")}
            ${svgParallelArrows(p1.x, p1.y, p2.x, p2.y, 2, "#16a34a")}
            ${svgParallelArrows(p4.x, p4.y, p3.x, p3.y, 2, "#16a34a")}
            <text x="170" y="158" text-anchor="middle" font-size="12" font-weight="900" fill="#0c4a6e">Aufgabe 1f (S. 16): Oben ∥ Unten (&gt;) UND Schräg ∥ Schräg (&gt;&gt;)</text>
            <text x="170" y="174" text-anchor="middle" font-size="11.5" font-weight="800" fill="#15803d">→ 2 Paar ∥ Seiten = Romboid / Parallelogramm!</text>
          </svg>`;
        }
        if (k === "drachen") {
          const top = { x: 170, y: 20 };
          const right = { x: 232, y: 68 };
          const bottom = { x: 170, y: 150 };
          const left = { x: 108, y: 68 };
          return `<svg viewBox="0 0 340 185" aria-label="Drachen (Deltoid) mit Symmetrieachse">
            <rect x="2" y="2" width="336" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <polygon points="${top.x},${top.y} ${right.x},${right.y} ${bottom.x},${bottom.y} ${left.x},${left.y}" fill="#fce7f3" stroke="#db2777" stroke-width="3.2" stroke-linejoin="round"/>
            <!-- Symmetrieachse -->
            <line x1="170" y1="12" x2="170" y2="158" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/>
            ${svgTickMarks(top.x, top.y, right.x, right.y, 1, "#9d174d")}
            ${svgTickMarks(left.x, left.y, top.x, top.y, 1, "#9d174d")}
            ${svgTickMarks(right.x, right.y, bottom.x, bottom.y, 2, "#0284c7")}
            ${svgTickMarks(bottom.x, bottom.y, left.x, left.y, 2, "#0284c7")}
            <text x="170" y="174" text-anchor="middle" font-size="12" font-weight="900" fill="#831843">Drachen (Deltoid): 0 Paar ∥ · 2 Paar Nachbarseiten gleich · 1 Achse</text>
          </svg>`;
        }
        // Default: three_trapeze_compare (S. 15 unten)
        return `<svg viewBox="0 0 350 175" aria-label="Drei Trapeze a, b und c zum Vergleichen">
          <rect x="2" y="2" width="346" height="171" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Trapez a -->
          <polygon points="34,54 90,54 114,112 14,112" fill="#cbd5e1" stroke="#0f172a" stroke-width="2.5"/>
          ${svgParallelArrows(34, 54, 90, 54, 1, "#dc2626")}
          ${svgParallelArrows(14, 112, 114, 112, 1, "#dc2626")}
          <text x="64" y="92" text-anchor="middle" font-size="14" font-weight="900">a</text>
          <!-- Trapez b -->
          <polygon points="140,64 212,42 212,122 140,104" fill="#cbd5e1" stroke="#0f172a" stroke-width="2.5"/>
          ${svgParallelArrows(140, 104, 140, 64, 1, "#dc2626")}
          ${svgParallelArrows(212, 122, 212, 42, 1, "#dc2626")}
          <text x="180" y="88" text-anchor="middle" font-size="14" font-weight="900">b</text>
          <!-- Trapez c -->
          <polygon points="242,58 326,48 318,112 242,112" fill="#cbd5e1" stroke="#0f172a" stroke-width="2.5"/>
          <rect x="242" y="98" width="14" height="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
          <text x="284" y="90" text-anchor="middle" font-size="14" font-weight="900">c</text>
          <text x="175" y="154" text-anchor="middle" font-size="12" font-weight="900" fill="#b45309">Alle drei sind Trapeze → Gemeinsamkeit: 1 Paar ∥ Seiten!</text>
        </svg>`;
      }

      // 8. SPRECHBLASEN-RÄTSEL: MIA & JIN (S. 12) ODER AJANI (S. 13)
      case "riddle_character": {
        if (spec.character === "mia_jin") {
          return `<svg viewBox="0 0 350 180" aria-label="Mia und Jin sprechen über ein Quadrat">
            <rect x="2" y="2" width="346" height="176" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <!-- Mia -->
            <rect x="12" y="16" width="218" height="62" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
            <text x="24" y="36" font-size="12" font-weight="900" fill="#166534">👧 Mia sagt:</text>
            <text x="24" y="54" font-size="11" font-weight="700" fill="#0f172a">„Dieses Viereck hat eine GERADE</text>
            <text x="24" y="68" font-size="11" font-weight="700" fill="#0f172a">Anzahl rechte Winkel (4 Stück)!“</text>

            <!-- Jin -->
            <rect x="12" y="92" width="218" height="62" rx="10" fill="#fef2f2" stroke="#f87171" stroke-width="2"/>
            <text x="24" y="112" font-size="12" font-weight="900" fill="#991b1b">👦 Jin sagt:</text>
            <text x="24" y="130" font-size="11" font-weight="700" fill="#0f172a">„Ich glaube, es hat eine UNGERADE</text>
            <text x="24" y="144" font-size="11" font-weight="700" fill="#0f172a">Anzahl rechte Winkel.“</text>

            <!-- Quadrat rechts -->
            <rect x="248" y="42" width="82" height="82" fill="#bae6fd" stroke="#0284c7" stroke-width="3"/>
            <rect x="248" y="42" width="16" height="16" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
            <rect x="314" y="42" width="16" height="16" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
            <rect x="314" y="108" width="16" height="16" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
            <rect x="248" y="108" width="16" height="16" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
            <text x="289" y="88" text-anchor="middle" font-size="13" font-weight="900" fill="#0c4a6e">4 × 90°</text>
            <text x="289" y="148" text-anchor="middle" font-size="11" font-weight="800" fill="#15803d">4 = gerade Zahl!</text>
          </svg>`;
        }
        return `<svg viewBox="0 0 350 185" aria-label="Ajanis Viereck-Rätsel von Seite 13">
          <rect x="2" y="2" width="346" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <rect x="14" y="12" width="322" height="58" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
          <text x="28" y="32" font-size="12" font-weight="900" fill="#1d4ed8">🧑 Ajani (Seite 13):</text>
          <text x="28" y="49" font-size="11" font-weight="800" fill="#0f172a">„Meine Figur hat 4 Seiten, MINDESTENS 1 Paar ∥ Seiten</text>
          <text x="28" y="63" font-size="11" font-weight="800" fill="#dc2626">und KEINEN rechten Winkel (0 × 90°)!“</text>

          <!-- 3 Lösungen -->
          <polygon points="34,92 98,92 84,142 20,142" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
          <text x="59" y="164" text-anchor="middle" font-size="11" font-weight="900" fill="#166534">1. Romboid</text>

          <polygon points="175,82 212,116 175,150 138,116" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
          <text x="175" y="164" text-anchor="middle" font-size="11" font-weight="900" fill="#b45309">2. Raute</text>

          <polygon points="262,92 312,92 328,142 246,142" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
          <text x="287" y="164" text-anchor="middle" font-size="11" font-weight="900" fill="#0369a1">3. Gleichsch. Trapez</text>
        </svg>`;
      }

      // 9. SYMMETRIEACHSEN DER VIERECKE (S. 9 & 10)
      case "viereck_symmetry_showcase":
        return `<svg viewBox="0 0 350 185" aria-label="Symmetrieachsen der Vierecke">
          <rect x="2" y="2" width="346" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Quadrat: 4 -->
          <rect x="22" y="28" width="56" height="56" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.2"/>
          <line x1="50" y1="20" x2="50" y2="92" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="3,2"/>
          <line x1="14" y1="56" x2="86" y2="56" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="3,2"/>
          <line x1="18" y1="24" x2="82" y2="88" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="3,2"/>
          <line x1="82" y1="24" x2="18" y2="88" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="3,2"/>
          <text x="50" y="108" text-anchor="middle" font-size="10.5" font-weight="900">Quadrat: 4</text>

          <!-- Rechteck: 2 -->
          <rect x="108" y="36" width="68" height="42" fill="#eff6ff" stroke="#0284c7" stroke-width="2.2"/>
          <line x1="142" y1="24" x2="142" y2="90" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="3,2"/>
          <line x1="98" y1="57" x2="186" y2="57" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="3,2"/>
          <text x="142" y="108" text-anchor="middle" font-size="10.5" font-weight="900">Rechteck: 2</text>

          <!-- Raute: 2 -->
          <polygon points="228,24 260,56 228,88 196,56" fill="#fef3c7" stroke="#d97706" stroke-width="2.2"/>
          <line x1="228" y1="18" x2="228" y2="94" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="3,2"/>
          <line x1="190" y1="56" x2="266" y2="56" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="3,2"/>
          <text x="228" y="108" text-anchor="middle" font-size="10.5" font-weight="900">Raute: 2</text>

          <!-- Drachen: 1 -->
          <polygon points="306,22 332,48 306,90 280,48" fill="#fce7f3" stroke="#db2777" stroke-width="2.2"/>
          <line x1="306" y1="16" x2="306" y2="96" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,2"/>
          <text x="306" y="108" text-anchor="middle" font-size="10.5" font-weight="900">Drachen: 1</text>

          <!-- Bottom banner: Trapez 1, Romboid 0 -->
          <rect x="20" y="124" width="310" height="44" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="175" y="143" text-anchor="middle" font-size="11" font-weight="900" fill="#0f172a">Gleichschenkliges Trapez = 1 Symmetrieachse</text>
          <text x="175" y="159" text-anchor="middle" font-size="11" font-weight="900" fill="#dc2626">Romboid (allgemeines Parallelogramm) = 0 Symmetrieachsen!</text>
        </svg>`;

      // 10. KOORDINATENSYSTEM (PUNKTE, VEKTOREN & VIERECKE IM KS)
      case "coord_grid": {
        const maxX = spec.maxX || 10;
        const maxY = spec.maxY || 10;
        const padLeft = 34;
        const padBottom = 28;
        const padTop = 18;
        const padRight = 22;
        const plotW = 350 - padLeft - padRight;
        const plotH = 210 - padTop - padBottom;
        const stepX = plotW / maxX;
        const stepY = plotH / maxY;

        const toSvgX = (x) => padLeft + x * stepX;
        const toSvgY = (y) => 210 - padBottom - y * stepY;

        let gridHtml = "";
        for (let x = 0; x <= maxX; x += 1) {
          const sx = toSvgX(x);
          gridHtml += `<line x1="${sx.toFixed(1)}" y1="${padTop}" x2="${sx.toFixed(1)}" y2="${210 - padBottom}" stroke="#e2e8f0" stroke-width="1"/>`;
          gridHtml += `<text x="${sx.toFixed(1)}" y="${210 - padBottom + 14}" text-anchor="middle" font-size="9.5" font-weight="800" fill="#475569">${x}</text>`;
        }
        for (let y = 0; y <= maxY; y += 1) {
          const sy = toSvgY(y);
          gridHtml += `<line x1="${padLeft}" y1="${sy.toFixed(1)}" x2="${350 - padRight}" y2="${sy.toFixed(1)}" stroke="#e2e8f0" stroke-width="1"/>`;
          if (y > 0) {
            gridHtml += `<text x="${padLeft - 8}" y="${(sy + 3.5).toFixed(1)}" text-anchor="end" font-size="9.5" font-weight="800" fill="#475569">${y}</text>`;
          }
        }

        // Ejes x e y
        const oy = toSvgY(0);
        const ox = toSvgX(0);
        const axesHtml = `
          <line x1="${ox}" y1="${oy}" x2="${350 - padRight + 8}" y2="${oy}" stroke="#0f172a" stroke-width="2"/>
          <line x1="${ox}" y1="${oy}" x2="${ox}" y2="${padTop - 8}" stroke="#0f172a" stroke-width="2"/>
          <text x="${350 - 8}" y="${oy + 4}" text-anchor="end" font-size="11" font-weight="900" fill="#0f172a">x</text>
          <text x="${ox - 10}" y="${padTop - 4}" font-size="11" font-weight="900" fill="#0f172a">y</text>
        `;

        // Polígono / Viereck en el KS
        let polyHtml = "";
        if (spec.polygon && spec.polygon.length > 0) {
          const ptsStr = spec.polygon
            .map((p) => `${toSvgX(p.x).toFixed(1)},${toSvgY(p.y).toFixed(1)}`)
            .join(" ");
          const c = spec.polyColor || "#0284c7";
          polyHtml += `<polygon points="${ptsStr}" fill="rgba(2, 132, 199, 0.14)" stroke="${c}" stroke-width="2.5" stroke-dasharray="${spec.polygon.some((p) => p.isMissing) ? "5,3" : "none"}"/>`;
          spec.polygon.forEach((p) => {
            const sx = toSvgX(p.x);
            const sy = toSvgY(p.y);
            const ly = sy < 40 ? sy + 16 : sy - 9;
            if (p.isMissing) {
              polyHtml += `
                <circle cx="${sx.toFixed(1)}" cy="${sy.toFixed(1)}" r="7" fill="#fef08a" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="3,2"/>
                <text x="${sx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="middle" font-size="11" font-weight="900" fill="#dc2626" style="paint-order:stroke;stroke:#fff;stroke-width:3px;">${p.label}</text>
              `;
            } else {
              polyHtml += `
                <circle cx="${sx.toFixed(1)}" cy="${sy.toFixed(1)}" r="4.5" fill="${c}"/>
                <text x="${sx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="middle" font-size="10.5" font-weight="900" fill="#0f172a" style="paint-order:stroke;stroke:#fff;stroke-width:3px;">${p.label}</text>
              `;
            }
          });
        }

        // Vector de desplazamiento
        let vecHtml = "";
        if (spec.vector) {
          const v = spec.vector;
          const x1 = toSvgX(v.x1);
          const y1 = toSvgY(v.y1);
          const x2 = toSvgX(v.x2);
          const y2 = toSvgY(v.y2);
          // Componentes en L punteados (horizontal y luego vertical)
          vecHtml += `
            <line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y1.toFixed(1)}" stroke="#0284c7" stroke-width="2" stroke-dasharray="4,3"/>
            <line x1="${x2.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#9333ea" stroke-width="2" stroke-dasharray="4,3"/>
            <line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#dc2626" stroke-width="3"/>
          `;
          // Cabeza de flecha en (x2, y2)
          const ang = Math.atan2(y2 - y1, x2 - x1);
          const aLen = 9;
          const ax1 = x2 - aLen * Math.cos(ang - 0.45);
          const ay1 = y2 - aLen * Math.sin(ang - 0.45);
          const ax2 = x2 - aLen * Math.cos(ang + 0.45);
          const ay2 = y2 - aLen * Math.sin(ang + 0.45);
          vecHtml += `<polygon points="${x2.toFixed(1)},${y2.toFixed(1)} ${ax1.toFixed(1)},${ay1.toFixed(1)} ${ax2.toFixed(1)},${ay2.toFixed(1)}" fill="#dc2626"/>`;
          if (v.labelDe) {
            vecHtml += `<rect x="85" y="6" width="195" height="20" rx="5" fill="rgba(254,242,242,0.95)" stroke="#f87171"/>
              <text x="182" y="20" text-anchor="middle" font-size="10.5" font-weight="900" fill="#991b1b">${v.labelDe}</text>`;
          }
        }

        // Puntos individuales
        let ptsHtml = "";
        if (spec.points) {
          spec.points.forEach((pt) => {
            const sx = toSvgX(pt.x);
            const sy = toSvgY(pt.y);
            if (spec.showGuides) {
              ptsHtml += `<line x1="${sx.toFixed(1)}" y1="${oy}" x2="${sx.toFixed(1)}" y2="${sy.toFixed(1)}" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>`;
              ptsHtml += `<line x1="${ox}" y1="${sy.toFixed(1)}" x2="${sx.toFixed(1)}" y2="${sy.toFixed(1)}" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>`;
            }
            const ly = sy < 36 ? sy + 15 : sy - 8;
            ptsHtml += `
              <circle cx="${sx.toFixed(1)}" cy="${sy.toFixed(1)}" r="4.8" fill="${pt.color || "#dc2626"}"/>
              <text x="${(sx + 6).toFixed(1)}" y="${ly.toFixed(1)}" font-size="11" font-weight="900" fill="${pt.color || "#0f172a"}" style="paint-order:stroke;stroke:#fff;stroke-width:3px;">${pt.label}</text>
            `;
          });
        }

        return `<svg viewBox="0 0 350 210" aria-label="Koordinatensystem">
          <rect x="2" y="2" width="346" height="206" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          ${gridHtml}
          ${axesHtml}
          ${polyHtml}
          ${vecHtml}
          ${ptsHtml}
        </svg>`;
      }

      // 11. SPIEGELUNG AN DER GERADEN g (Seite 9 Aufgabe 1b)
      case "coord_mirror_s9":
      default: {
        // Reutilizamos coord_grid visualizando la recta g de (0|9) a (9|0), Raute ABCD y su reflejo A'B'C'D'
        const padLeft = 32;
        const padBottom = 26;
        const step = 16;
        const toX = (x) => padLeft + x * step;
        const toY = (y) => 205 - padBottom - y * step;
        let grid = "";
        for (let i = 0; i <= 10; i += 1) {
          grid += `<line x1="${toX(i)}" y1="${toY(10)}" x2="${toX(i)}" y2="${toY(0)}" stroke="#e2e8f0" stroke-width="1"/>`;
          grid += `<line x1="${toX(0)}" y1="${toY(i)}" x2="${toX(10)}" y2="${toY(i)}" stroke="#e2e8f0" stroke-width="1"/>`;
          grid += `<text x="${toX(i)}" y="${toY(0) + 13}" text-anchor="middle" font-size="9" font-weight="700" fill="#475569">${i}</text>`;
          if (i > 0) {
            grid += `<text x="${toX(0) - 6}" y="${toY(i) + 3}" text-anchor="end" font-size="9" font-weight="700" fill="#475569">${i}</text>`;
          }
        }
        return `<svg viewBox="0 0 350 210" aria-label="Spiegelung der Raute ABCD an der Geraden g (Seite 9)">
          <rect x="2" y="2" width="346" height="206" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          ${grid}
          <line x1="${toX(0)}" y1="${toY(0)}" x2="${toX(10.4)}" y2="${toY(0)}" stroke="#0f172a" stroke-width="2"/>
          <line x1="${toX(0)}" y1="${toY(0)}" x2="${toX(0)}" y2="${toY(10.3)}" stroke="#0f172a" stroke-width="2"/>
          <!-- Spiegelgerade g durch (0|9) und (9|0) -->
          <line x1="${toX(0)}" y1="${toY(9)}" x2="${toX(9)}" y2="${toY(0)}" stroke="#dc2626" stroke-width="2.5"/>
          <text x="${toX(1.2)}" y="${toY(8.3)}" font-size="11" font-weight="900" fill="#dc2626">Spiegel g</text>
          <!-- Original Raute ABCD: A(0|5), B(2|4), C(4|5), D(2|6) -->
          <polygon points="${toX(0)},${toY(5)} ${toX(2)},${toY(4)} ${toX(4)},${toY(5)} ${toX(2)},${toY(6)}" fill="rgba(2,132,199,0.2)" stroke="#0284c7" stroke-width="2.4"/>
          <!-- Bild-Raute A'B'C'D': A'(4|9), B'(5|7), C'(4|5), D'(3|7) -->
          <polygon points="${toX(4)},${toY(9)} ${toX(5)},${toY(7)} ${toX(4)},${toY(5)} ${toX(3)},${toY(7)}" fill="rgba(22,163,74,0.2)" stroke="#16a34a" stroke-width="2.4" stroke-dasharray="4,2"/>
          <circle cx="${toX(4)}" cy="${toY(5)}" r="5" fill="#dc2626"/>
          <text x="${toX(4) + 8}" y="${toY(5) + 4}" font-size="10.5" font-weight="900" fill="#dc2626">C = C'(4|5)</text>
          <circle cx="${toX(2)}" cy="${toY(6)}" r="4" fill="#0284c7"/>
          <text x="${toX(2) - 6}" y="${toY(6) - 6}" text-anchor="end" font-size="10" font-weight="900" fill="#0369a1">D(2|6)</text>
          <circle cx="${toX(3)}" cy="${toY(7)}" r="4" fill="#16a34a"/>
          <text x="${toX(3) + 6}" y="${toY(7) - 5}" font-size="10" font-weight="900" fill="#15803d">D'(3|7)</text>
          <!-- Info box rechts -->
          <rect x="206" y="24" width="134" height="122" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="273" y="42" text-anchor="middle" font-size="10.5" font-weight="900" fill="#0f172a">Lösung Seite 9 (1b):</text>
          <text x="216" y="62" font-size="10" font-weight="800" fill="#0369a1">• A(0|5) → A'(4 | 9)</text>
          <text x="216" y="80" font-size="10" font-weight="800" fill="#0369a1">• B(2|4) → B'(5 | 7)</text>
          <text x="216" y="98" font-size="10" font-weight="900" fill="#dc2626">• C(4|5) → C'(4 | 5)</text>
          <text x="216" y="116" font-size="10" font-weight="800" fill="#15803d">• D(2|6) → D'(3 | 7)</text>
          <text x="273" y="136" text-anchor="middle" font-size="9" fill="#475569">(C liegt auf g!)</text>
        </svg>`;
      }
    }
  }

  // Generador dinámico infinito para Welt 5 ("🎲 5. Zufalls-Maschine")
  function generateMikaRandomQuestions() {
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    // 1. Random Polygon
    const polyPool = [
      { n: 5, de: "Fünfeck", es: "Pentágono", color: "#ec4899", fill: "#fce7f3" },
      { n: 6, de: "Sechseck", es: "Hexágono", color: "#eab308", fill: "#fef9c3" },
      { n: 7, de: "Siebeneck", es: "Heptágono", color: "#0284c7", fill: "#e0f2fe" },
      { n: 8, de: "Achteck", es: "Octágono", color: "#dc2626", fill: "#fee2e2" },
      { n: 9, de: "Neuneck", es: "Nonágono / Eneágono", color: "#0d9488", fill: "#ccfbf1" },
      { n: 10, de: "Zehneck", es: "Decágono", color: "#2563eb", fill: "#dbeafe" },
      { n: 20, de: "Zwanzigeck", es: "Icoságono", color: "#7c3aed", fill: "#ede9fe" }
    ];
    const chosenPoly = pick(polyPool);
    const wrongPolys = polyPool.filter((p) => p.n !== chosenPoly.n).sort(() => Math.random() - 0.5).slice(0, 3);

    // 2. Random Punkt + Vektor = Zielpunkt
    const sx = randInt(2, 7);
    const sy = randInt(3, 7);
    const dx = pick([-3, -2, -1, 1, 2, 3, 4]);
    const dy = pick([-3, -2, -1, 0, 1, 2, 3]);
    const ex = sx + dx;
    const ey = sy + dy;
    const dirXDe = dx >= 0 ? `${dx} rechts` : `${Math.abs(dx)} links`;
    const dirYDe = dy >= 0 ? `${dy} oben` : `${Math.abs(dy)} unten`;

    // 3. Random Vektor zwischen 2 Punkten finden (wie S. 8 Aufgabe e)
    const p1x = randInt(2, 8);
    const p1y = randInt(2, 8);
    const vdx = pick([-4, -3, -2, 2, 3, 4]);
    const vdy = pick([-3, -2, 0, 2, 3]);
    const p2x = Math.max(1, Math.min(10, p1x + vdx));
    const p2y = Math.max(1, Math.min(10, p1y + vdy));
    const realDx = p2x - p1x;
    const realDy = p2y - p1y;

    // 4. Random 4. Eckpunkt eines Rechtecks im KS
    const rx1 = randInt(1, 4);
    const ry1 = randInt(2, 4);
    const rw = randInt(3, 5);
    const rh = randInt(2, 4);

    // Mezclamos 4 generadas frescas con 8 seleccionadas al azar del banco de 38
    const freshDynamic = [
      {
        id: "m13_dyn_poly_" + Date.now(),
        world: "random_mix",
        topicDe: "🎲 Zufalls-Polygon (Neu generiert)",
        questionDe: `Dieses Polygon hat genau ${chosenPoly.n} Ecken, ${chosenPoly.n} Seiten und ${chosenPoly.n} Winkel. Wie heißt es auf Deutsch?`,
        questionEs: `Este polígono tiene exactamente ${chosenPoly.n} vértices, ${chosenPoly.n} lados y ${chosenPoly.n} ángulos. ¿Cómo se llama en alemán?`,
        hintDe: `Zähle die Zahl ${chosenPoly.n} auf Deutsch + „-eck“!`,
        hintEs: `Combina el número ${chosenPoly.n} en alemán con «-eck».`,
        svgSpec: { type: "polygon_regular", sides: chosenPoly.n, color: chosenPoly.color, fill: chosenPoly.fill, labelCenter: `${chosenPoly.n} Ecken` },
        options: [
          { textDe: `Das ${chosenPoly.de} (${chosenPoly.n} Ecken, ${chosenPoly.n} Seiten, ${chosenPoly.n} Winkel)`, textEs: `Das ${chosenPoly.de} (${chosenPoly.es})`, correct: true },
          ...wrongPolys.map((wp) => ({
            textDe: `Das ${wp.de} (${wp.n} Ecken)`,
            textEs: `Das ${wp.de} (${wp.es})`,
            correct: false
          }))
        ],
        explanationDe: `Richtig! ${chosenPoly.n} Ecken, ${chosenPoly.n} Seiten und ${chosenPoly.n} Winkel = das ${chosenPoly.de}!`,
        explanationEs: `¡Correcto! ${chosenPoly.n} vértices, lados y ángulos = das ${chosenPoly.de} (${chosenPoly.es}).`
      },
      {
        id: "m13_dyn_vec_add_" + Date.now(),
        world: "random_mix",
        topicDe: "🎲 Punkt + Vektor (Neu generiert)",
        questionDe: `Du startest beim Punkt S(${sx} | ${sy}) und bewegst dich mit dem Vektor →(${dx} | ${dy}). Was bedeutet der Vektor und auf welchem Zielpunkt Z landest du?`,
        questionEs: `Partes en el punto S(${sx} | ${sy}) y te desplazas con el vector →(${dx} | ${dy}). ¿Qué significa ese vector y a qué punto final Z llegas?`,
        hintDe: `Rechne x = ${sx} + (${dx}) und y = ${sy} + (${dy})!`,
        hintEs: `Suma x = ${sx} + (${dx}) e y = ${sy} + (${dy}).`,
        svgSpec: {
          type: "coord_grid",
          maxX: 11,
          maxY: 11,
          points: [
            { label: `S(${sx}|${sy})`, x: sx, y: sy, color: "#0f172a" },
            { label: `Z(?|?)`, x: ex, y: ey, color: "#16a34a" }
          ],
          vector: { x1: sx, y1: sy, x2: ex, y2: ey, labelDe: `Vektor →(${dx} | ${dy})` }
        },
        options: [
          { textDe: `${dirXDe}, ${dirYDe} → Zielpunkt Z (${ex} | ${ey})`, textEs: `${dirXDe}, ${dirYDe} → Punto final Z (${ex} | ${ey})`, correct: true },
          { textDe: `Zielpunkt Z (${sx - dx} | ${sy - dy}) (in die falsche Richtung gegangen)`, textEs: `Punto final Z (${sx - dx} | ${sy - dy})`, correct: false },
          { textDe: `Zielpunkt Z (${ey} | ${ex}) (x und y vertauscht!)`, textEs: `Punto final Z (${ey} | ${ex}) (x e y al revés)`, correct: false },
          { textDe: `Zielpunkt Z (${sx} | ${sy})`, textEs: `Punto final Z (${sx} | ${sy})`, correct: false }
        ],
        explanationDe: `Perfekt gerechnet! →(${dx}|${dy}) bedeutet ${dirXDe} und ${dirYDe}. Also (${sx} + (${dx}) | ${sy} + (${dy})) = (${ex} | ${ey})!`,
        explanationEs: `¡Cálculo perfecto! (${sx} + (${dx}) | ${sy} + (${dy})) = (${ex} | ${ey}).`
      },
      {
        id: "m13_dyn_vec_find_" + Date.now(),
        world: "random_mix",
        topicDe: "🎲 Vektor bestimmen (Neu generiert)",
        questionDe: `Welcher Vektor →(x | y) verschiebt den Startpunkt A(${p1x} | ${p1y}) genau zum Zielpunkt B(${p2x} | ${p2y})?`,
        questionEs: `¿Qué vector →(x | y) traslada el punto inicial A(${p1x} | ${p1y}) exactamente hasta el punto final B(${p2x} | ${p2y})?`,
        hintDe: `Von ${p1x} bis ${p2x} auf der x-Achse und von ${p1y} bis ${p2y} auf der y-Achse!`,
        hintEs: `Calcula el cambio en x (${p2x} − ${p1x}) y el cambio en y (${p2y} − ${p1y}).`,
        svgSpec: {
          type: "coord_grid",
          maxX: 11,
          maxY: 11,
          points: [
            { label: `A(${p1x}|${p1y})`, x: p1x, y: p1y, color: "#0f172a" },
            { label: `B(${p2x}|${p2y})`, x: p2x, y: p2y, color: "#dc2626" }
          ],
          vector: { x1: p1x, y1: p1y, x2: p2x, y2: p2y, labelDe: "Welcher Vektor →(x | y)?" }
        },
        options: [
          { textDe: `Vektor →(${realDx} | ${realDy})`, textEs: `Vector →(${realDx} | ${realDy})`, correct: true },
          { textDe: `Vektor →(${-realDx} | ${-realDy}) (Vorzeichen verwechselt!)`, textEs: `Vector →(${-realDx} | ${-realDy}) (signo invertido)`, correct: false },
          { textDe: `Vektor →(${realDy} | ${realDx}) (x und y vertauscht!)`, textEs: `Vector →(${realDy} | ${realDx}) (x e y invertidos)`, correct: false },
          { textDe: `Vektor →(${p2x} | ${p2y})`, textEs: `Vector →(${p2x} | ${p2y})`, correct: false }
        ],
        explanationDe: `Von x = ${p1x} nach x = ${p2x} sind es ${realDx >= 0 ? "+" + realDx + " (rechts)" : realDx + " (links)"}, und von y = ${p1y} nach y = ${p2y} sind es ${realDy >= 0 ? "+" + realDy + " (oben)" : realDy + " (unten)"} → Vektor →(${realDx} | ${realDy})!`,
        explanationEs: `De (${p1x}|${p1y}) a (${p2x}|${p2y}) el desplazamiento es →(${realDx} | ${realDy}).`
      },
      {
        id: "m13_dyn_rect_4th_" + Date.now(),
        world: "random_mix",
        topicDe: "🎲 4. Eckpunkt im Koordinatensystem (Neu generiert)",
        questionDe: `Die Punkte P(${rx1} | ${ry1}), Q(${rx1 + rw} | ${ry1}) und R(${rx1 + rw} | ${ry1 + rh}) sollen ein RECHTECK PQRS bilden. Welche Koordinaten hat der 4. Eckpunkt S oben links?`,
        questionEs: `Los puntos P(${rx1} | ${ry1}), Q(${rx1 + rw} | ${ry1}) y R(${rx1 + rw} | ${ry1 + rh}) forman un RECHTECK (rectángulo) PQRS. ¿Qué coordenadas tiene el 4° vértice S arriba a la izquierda?`,
        hintDe: `S liegt genau über P(${rx1} | ${ry1}) auf derselben Höhe wie R(${rx1 + rw} | ${ry1 + rh})!`,
        hintEs: `S está justo encima de P (x = ${rx1}) y a la misma altura que R (y = ${ry1 + rh}).`,
        svgSpec: {
          type: "coord_grid",
          maxX: 11,
          maxY: 10,
          polygon: [
            { label: `P(${rx1}|${ry1})`, x: rx1, y: ry1 },
            { label: `Q(${rx1 + rw}|${ry1})`, x: rx1 + rw, y: ry1 },
            { label: `R(${rx1 + rw}|${ry1 + rh})`, x: rx1 + rw, y: ry1 + rh },
            { label: "S(?|?)", x: rx1, y: ry1 + rh, isMissing: true }
          ],
          polyColor: "#0284c7"
        },
        options: [
          { textDe: `S (${rx1} | ${ry1 + rh})`, textEs: `S (${rx1} | ${ry1 + rh})`, correct: true },
          { textDe: `S (${ry1 + rh} | ${rx1}) (x und y vertauscht!)`, textEs: `S (${ry1 + rh} | ${rx1})`, correct: false },
          { textDe: `S (${rx1 + rw} | ${ry1})`, textEs: `S (${rx1 + rw} | ${ry1})`, correct: false },
          { textDe: `S (${rx1 + 1} | ${ry1 + rh + 1})`, textEs: `S (${rx1 + 1} | ${ry1 + rh + 1})`, correct: false }
        ],
        explanationDe: `Im Rechteck liegt S direkt über P(x = ${rx1}) und auf derselben Höhe wie R(y = ${ry1 + rh}) → S(${rx1} | ${ry1 + rh})!`,
        explanationEs: `En el rectángulo, S está sobre P (x = ${rx1}) y a la altura de R (y = ${ry1 + rh}) → S(${rx1} | ${ry1 + rh}).`
      }
    ];

    const sampledFromBank = [...DATA.mikaNov13Arena.questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);

    return [...freshDynamic, ...sampledFromBank];
  }

  function initTab7MikaArena() {
    const arenaData = DATA.mikaNov13Arena;
    if (!arenaData) return;

    // Botón de sonido
    const soundBtn = document.getElementById("btn-mika-sound");
    if (soundBtn) {
      soundBtn.addEventListener("click", () => {
        state.mikaSoundOn = !state.mikaSoundOn;
        soundBtn.setAttribute("aria-pressed", String(state.mikaSoundOn));
        soundBtn.textContent = state.mikaSoundOn ? "🔊 Sound: AN" : "🔇 Sound: AUS";
      });
    }

    // Selector de modo (Arcade vs. Lista completa vs. Spickzettel)
    document.querySelectorAll("[data-mika-view]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-mika-view]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.mikaView = btn.dataset.mikaView;
        syncMikaSubViews();
      });
    });

    // Selector de mundos temáticos
    const worldsBar = document.getElementById("mika-worlds-bar");
    if (worldsBar) {
      worldsBar.querySelectorAll("[data-world]").forEach((btn) => {
        btn.addEventListener("click", () => {
          worldsBar.querySelectorAll("[data-world]").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          state.mikaWorld = btn.dataset.world;
          state.mikaOnlyErrors = false;
          if (state.mikaView === "spickzettel") {
            state.mikaView = "arcade";
            document.querySelectorAll("[data-mika-view]").forEach((b) => {
              b.classList.toggle("active", b.dataset.mikaView === "arcade");
            });
            syncMikaSubViews();
          }
          buildMikaQuestionDeck();
        });
      });
    }

    // Botones Nur Fehler üben y Neu mischen
    document.getElementById("btn-mika-retry-errors").addEventListener("click", () => {
      if (state.mikaErrorIds.size === 0) return;
      state.mikaOnlyErrors = true;
      buildMikaQuestionDeck();
    });

    document.getElementById("btn-mika-shuffle").addEventListener("click", () => {
      state.mikaOnlyErrors = false;
      buildMikaQuestionDeck(true);
    });

    // Controles del modo Arcade
    document.getElementById("btn-mika-hint").addEventListener("click", () => {
      const hintBox = document.getElementById("mika-hint-box");
      hintBox.hidden = !hintBox.hidden;
    });

    document.getElementById("btn-mika-prev").addEventListener("click", () => {
      if (state.mikaItems.length === 0) return;
      state.mikaIndex = (state.mikaIndex - 1 + state.mikaItems.length) % state.mikaItems.length;
      renderMikaArcadeCard();
    });

    document.getElementById("btn-mika-next").addEventListener("click", () => {
      if (state.mikaItems.length === 0) return;
      if (state.mikaIndex < state.mikaItems.length - 1) {
        state.mikaIndex += 1;
        renderMikaArcadeCard();
      } else {
        showMikaArcadeCertificate();
      }
    });

    document.getElementById("btn-mika-grade-now").addEventListener("click", () => {
      showMikaArcadeCertificate();
    });

    // Botón evaluar lista completa
    document.getElementById("btn-mika-evaluate-list").addEventListener("click", evaluateMikaListMode);

    // Atajos de teclado lúdicos en Modo Arcade (1-4 / A-D y flechas ← / →)
    document.addEventListener("keydown", (e) => {
      const panel = document.getElementById("tab-mika13nov");
      if (!panel || panel.hidden || state.mikaView !== "arcade") return;
      const tag = (e.target && e.target.tagName) || "";
      if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;

      const keyMap = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3 };
      const lower = e.key.toLowerCase();
      if (Object.prototype.hasOwnProperty.call(keyMap, lower)) {
        const btns = document.querySelectorAll("#mika-arcade-options .mika-opt-btn");
        if (btns[keyMap[lower]]) {
          e.preventDefault();
          btns[keyMap[lower]].click();
        }
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        document.getElementById("btn-mika-next").click();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        document.getElementById("btn-mika-prev").click();
      }
    });

    updateMikaHeroStats();
    buildMikaQuestionDeck();
  }

  function syncMikaSubViews() {
    const viewArcade = document.getElementById("mika-view-arcade");
    const viewList = document.getElementById("mika-view-list");
    const viewSpick = document.getElementById("mika-view-spickzettel");

    viewArcade.hidden = state.mikaView !== "arcade";
    viewList.hidden = state.mikaView !== "list";
    viewSpick.hidden = state.mikaView !== "spickzettel";
  }

  function buildMikaQuestionDeck(shuffleOrder = false) {
    let baseList = [];
    if (state.mikaWorld === "random_mix") {
      baseList = generateMikaRandomQuestions();
    } else if (state.mikaWorld === "all") {
      baseList = [...DATA.mikaNov13Arena.questions];
    } else {
      baseList = DATA.mikaNov13Arena.questions.filter((q) => q.world === state.mikaWorld);
    }

    if (state.mikaOnlyErrors && state.mikaErrorIds.size > 0) {
      const errFiltered = baseList.filter((q) => state.mikaErrorIds.has(q.id));
      if (errFiltered.length > 0) baseList = errFiltered;
    }

    if (shuffleOrder) {
      baseList.sort(() => Math.random() - 0.5);
    }

    state.mikaItems = baseList.map((q) => ({
      ...q,
      shuffledOptions: [...q.options].sort(() => Math.random() - 0.5),
      selectedIdx: null
    }));
    state.mikaIndex = 0;

    const arcadeCert = document.getElementById("mika-arcade-certificate");
    if (arcadeCert) arcadeCert.hidden = true;
    const listCert = document.getElementById("mika-list-certificate");
    if (listCert) listCert.hidden = true;

    renderMikaArcadeCard();
    renderMikaListCards();
    updateMikaErrorCountBtn();
  }

  function updateMikaErrorCountBtn() {
    const btn = document.getElementById("btn-mika-retry-errors");
    const countSpan = document.getElementById("mika-error-count");
    if (!btn || !countSpan) return;
    countSpan.textContent = state.mikaErrorIds.size;
    btn.hidden = state.mikaErrorIds.size === 0;
  }

  function renderMikaArcadeCard() {
    if (state.mikaItems.length === 0) return;
    const item = state.mikaItems[state.mikaIndex];
    const total = state.mikaItems.length;

    document.getElementById("mika-arcade-step-badge").textContent = `Frage ${state.mikaIndex + 1} / ${total}`;
    document.getElementById("mika-arcade-topic-badge").textContent = item.topicDe;

    const pct = Math.round(((state.mikaIndex + 1) / total) * 100);
    document.getElementById("mika-progress-fill").style.width = `${pct}%`;

    const correctSoFar = state.mikaItems.filter(
      (q) => q.selectedIdx !== null && q.shuffledOptions[q.selectedIdx]?.correct
    ).length;
    document.getElementById("mika-arcade-live-score").textContent = `✓ ${correctSoFar} / ${total} richtig`;

    document.getElementById("mika-arcade-svg").innerHTML = buildMikaNov13Svg(item.svgSpec);
    document.getElementById("mika-arcade-q-de").textContent = item.questionDe;
    document.getElementById("mika-arcade-q-es").textContent = item.questionEs;

    const hintBox = document.getElementById("mika-hint-box");
    hintBox.hidden = true;
    hintBox.innerHTML = `<strong>💡 Tipp:</strong> ${item.hintDe || ""}<span class="es-sub">${item.hintEs || ""}</span>`;

    const optsContainer = document.getElementById("mika-arcade-options");
    optsContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    const fb = document.getElementById("mika-arcade-feedback");
    fb.hidden = true;

    item.shuffledOptions.forEach((opt, oIdx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "mika-opt-btn";
      btn.innerHTML = `
        <span class="mika-opt-letter">${letters[oIdx] || "•"}</span>
        <div>
          <div><strong>${opt.textDe}</strong></div>
          <small class="es-sub">${opt.textEs}</small>
        </div>
      `;

      // Si ya fue respondida en esta ronda, mostrar su estado
      if (item.selectedIdx !== null) {
        if (opt.correct) btn.classList.add("correct-choice");
        else if (oIdx === item.selectedIdx) btn.classList.add("wrong-choice");
      }

      btn.addEventListener("click", () => {
        item.selectedIdx = oIdx;
        optsContainer.querySelectorAll(".mika-opt-btn").forEach((b, idx) => {
          b.classList.remove("correct-choice", "wrong-choice");
          if (item.shuffledOptions[idx].correct) b.classList.add("correct-choice");
        });

        fb.hidden = false;
        if (opt.correct) {
          btn.classList.add("correct-choice");
          state.mikaCombo += 1;
          state.mikaSolvedSet.add(item.id);
          state.mikaErrorIds.delete(item.id);
          playMikaChime("ok");
          triggerMikaConfetti();
          awardSuccess("mika13_" + item.id, 15);
          fb.className = "feedback-banner ok";
          fb.innerHTML = `<strong>🎉 Super gemacht, Mika! (Combo ${state.mikaCombo}x 🔥)</strong> ${item.explanationDe}<span class="es-sub">${item.explanationEs}</span>`;
        } else {
          btn.classList.add("wrong-choice");
          state.mikaCombo = 0;
          state.mikaErrorIds.add(item.id);
          playMikaChime("err");
          registerMistake();
          fb.className = "feedback-banner err";
          fb.innerHTML = `<strong>💡 Merk-Tipp für morgen:</strong> ${item.explanationDe}<span class="es-sub">${item.explanationEs}</span>`;
        }

        updateMikaHeroStats();
        updateMikaErrorCountBtn();

        const updatedCorrect = state.mikaItems.filter(
          (q) => q.selectedIdx !== null && q.shuffledOptions[q.selectedIdx]?.correct
        ).length;
        document.getElementById("mika-arcade-live-score").textContent = `✓ ${updatedCorrect} / ${total} richtig`;
      });

      optsContainer.appendChild(btn);
    });

    if (item.selectedIdx !== null) {
      const chosen = item.shuffledOptions[item.selectedIdx];
      fb.hidden = false;
      fb.className = chosen.correct ? "feedback-banner ok" : "feedback-banner err";
      fb.innerHTML = `<strong>${chosen.correct ? "✓ Richtig:" : "💡 Erklärung:"}</strong> ${item.explanationDe}<span class="es-sub">${item.explanationEs}</span>`;
    }
  }

  function showMikaArcadeCertificate() {
    const total = state.mikaItems.length;
    if (total === 0) return;
    const correct = state.mikaItems.filter(
      (q) => q.selectedIdx !== null && q.shuffledOptions[q.selectedIdx]?.correct
    ).length;
    const pct = Math.round((correct / total) * 100);
    const notaChile = computeChileanGrade(correct, total);
    const deGrade = computeGermanNote(pct);
    const toneClass = notaChile >= 6.0 ? "grade-excellent" : notaChile >= 4.5 ? "grade-good" : "grade-warn";

    const cert = document.getElementById("mika-arcade-certificate");
    cert.hidden = false;
    cert.innerHTML = `
      <h3>🏆 Mikas Zeugnis — Probe Freitag, 13. November</h3>
      <div class="grade-boxes-row">
        <div class="grade-big-box ${toneClass}">
          <span class="grade-label">Chilenische Note (60% Skala)</span>
          <strong class="grade-number">${notaChile.toFixed(1)}</strong>
          <span class="grade-sub">Skala 1,0 bis 7,0</span>
        </div>
        <div class="grade-big-box ${toneClass}">
          <span class="grade-label">Deutsche Schulnote</span>
          <strong class="grade-number">${deGrade.note}</strong>
          <span class="grade-sub">${deGrade.labelEs}</span>
        </div>
        <div class="grade-big-box">
          <span class="grade-label">Erreichte Punkte</span>
          <strong class="grade-number">${correct} / ${total}</strong>
          <span class="grade-sub">${pct}% richtig beantwortet</span>
        </div>
      </div>
      <p style="margin: 0.4rem 0 0; font-weight: 800;">
        ${
          notaChile >= 6.5
            ? "👑 Unglaublich stark, Mika! Du bist bereit für die 7,0 am Freitag, 13. November!"
            : notaChile >= 5.5
            ? "🌟 Super Ergebnis! Klicke oben auf „🔁 Nur Fehler üben“, um dir auch noch die letzten Punkte zu sichern."
            : "💪 Gutes Training! Klicke oben auf „🔁 Nur Fehler üben“, damit wir genau die kniffligen Figuren noch einmal üben."
        }
      </p>
    `;
    cert.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function renderMikaListCards() {
    const container = document.getElementById("mika-list-container");
    if (!container) return;
    container.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    state.mikaItems.forEach((q, qIdx) => {
      const card = document.createElement("article");
      card.className = "quiz-card mika-list-card";
      card.dataset.qid = q.id;

      const optsHtml = q.shuffledOptions
        .map(
          (opt, oIdx) => `
          <button type="button" class="mika-opt-btn mika-list-opt-btn" data-qidx="${qIdx}" data-oidx="${oIdx}">
            <span class="mika-opt-letter">${letters[oIdx] || "•"}</span>
            <div>
              <div><strong>${opt.textDe}</strong></div>
              <small class="es-sub">${opt.textEs}</small>
            </div>
          </button>
        `
        )
        .join("");

      card.innerHTML = `
        <div>
          <div class="card-top-meta">
            <span class="step-badge">Frage ${qIdx + 1} / ${state.mikaItems.length}</span>
            <span class="source-tag">${q.topicDe}</span>
          </div>
          <h3>${q.questionDe}</h3>
          <p class="es-sub">${q.questionEs}</p>
          <div class="quiz-card-svg">${buildMikaNov13Svg(q.svgSpec)}</div>
          <div class="mika-options-grid">${optsHtml}</div>
        </div>
        <div class="feedback-banner mika-list-fb" hidden></div>
      `;

      container.appendChild(card);
    });

    container.querySelectorAll(".mika-list-opt-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qIdx = Number(btn.dataset.qidx);
        const oIdx = Number(btn.dataset.oidx);
        const qItem = state.mikaItems[qIdx];
        qItem.selectedIdx = oIdx;

        const card = btn.closest(".mika-list-card");
        card.querySelectorAll(".mika-list-opt-btn").forEach((b, idx) => {
          b.classList.remove("correct-choice", "wrong-choice");
          if (qItem.shuffledOptions[idx].correct) b.classList.add("correct-choice");
        });

        const chosen = qItem.shuffledOptions[oIdx];
        const fb = card.querySelector(".mika-list-fb");
        fb.hidden = false;

        if (chosen.correct) {
          btn.classList.add("correct-choice");
          state.mikaCombo += 1;
          state.mikaSolvedSet.add(qItem.id);
          state.mikaErrorIds.delete(qItem.id);
          playMikaChime("ok");
          awardSuccess("mika13_" + qItem.id, 15);
          fb.className = "feedback-banner mika-list-fb ok";
          fb.innerHTML = `<strong>✓ Richtig!</strong> ${qItem.explanationDe}<span class="es-sub">${qItem.explanationEs}</span>`;
        } else {
          btn.classList.add("wrong-choice");
          state.mikaCombo = 0;
          state.mikaErrorIds.add(qItem.id);
          playMikaChime("err");
          registerMistake();
          fb.className = "feedback-banner mika-list-fb err";
          fb.innerHTML = `<strong>💡 Aufgepasst:</strong> ${qItem.explanationDe}<span class="es-sub">${qItem.explanationEs}</span>`;
        }

        updateMikaHeroStats();
        updateMikaErrorCountBtn();
      });
    });
  }

  function evaluateMikaListMode() {
    let correct = 0;
    const total = state.mikaItems.length;
    if (total === 0) return;

    const cards = document.querySelectorAll(".mika-list-card");
    state.mikaItems.forEach((qItem, qIdx) => {
      const card = cards[qIdx];
      if (!card) return;
      const fb = card.querySelector(".mika-list-fb");
      const btns = card.querySelectorAll(".mika-list-opt-btn");
      const chosen = qItem.selectedIdx !== null ? qItem.shuffledOptions[qItem.selectedIdx] : null;

      btns.forEach((b, idx) => {
        if (qItem.shuffledOptions[idx].correct) b.classList.add("correct-choice");
      });

      if (chosen && chosen.correct) {
        correct += 1;
        state.mikaErrorIds.delete(qItem.id);
      } else {
        if (qItem.selectedIdx !== null && btns[qItem.selectedIdx]) {
          btns[qItem.selectedIdx].classList.add("wrong-choice");
        }
        state.mikaErrorIds.add(qItem.id);
        fb.hidden = false;
        fb.className = "feedback-banner mika-list-fb err";
        fb.innerHTML = `<strong>Lösung:</strong> ${qItem.explanationDe}<span class="es-sub">${qItem.explanationEs}</span>`;
      }
    });

    const pct = Math.round((correct / total) * 100);
    const notaChile = computeChileanGrade(correct, total);
    const deGrade = computeGermanNote(pct);
    const toneClass = notaChile >= 6.0 ? "grade-excellent" : notaChile >= 4.5 ? "grade-good" : "grade-warn";

    const cert = document.getElementById("mika-list-certificate");
    cert.hidden = false;
    cert.innerHTML = `
      <h3>📝 Auswertung — Probe Freitag, 13. November (Mika)</h3>
      <div class="grade-boxes-row">
        <div class="grade-big-box ${toneClass}">
          <span class="grade-label">Chilenische Note (60% Skala)</span>
          <strong class="grade-number">${notaChile.toFixed(1)}</strong>
          <span class="grade-sub">Skala 1,0 bis 7,0</span>
        </div>
        <div class="grade-big-box ${toneClass}">
          <span class="grade-label">Deutsche Schulnote</span>
          <strong class="grade-number">${deGrade.note}</strong>
          <span class="grade-sub">${deGrade.labelEs}</span>
        </div>
        <div class="grade-big-box">
          <span class="grade-label">Erreichte Punkte</span>
          <strong class="grade-number">${correct} / ${total}</strong>
          <span class="grade-sub">${pct}% richtig gelöst</span>
        </div>
      </div>
    `;
    cert.scrollIntoView({ behavior: "smooth", block: "nearest" });
    updateMikaErrorCountBtn();
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
    initTab6NeueProben();
    initTab7MikaArena();
  });
})();
