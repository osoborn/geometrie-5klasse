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

    // Tab 7: Mika-Arena (112 Fragen + Zufalls-Generator ohne Tipps)
    mikaView: "arcade", // "arcade" | "list"
    mikaWorld: "exam20",
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
    if (starsEl) starsEl.textContent = `${solved} / 112`;

    if (rankEl) {
      if (solved >= 80) {
        rankEl.textContent = "👑 Rang 5: Geometrie-Königin (Note 7,0!)";
      } else if (solved >= 50) {
        rankEl.textContent = "🧭 Rang 4: Koordinaten- & Vektor-Pilotin";
      } else if (solved >= 28) {
        rankEl.textContent = "💎 Rang 3: Vierecks-Meisterin";
      } else if (solved >= 12) {
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

  // Renderizador SVG 100% libre de pistas (sin textos que soplen la respuesta)
  function buildMikaNov13Svg(spec) {
    if (!spec) return "";

    switch (spec.type) {
      // 1. POLÍGONOS LIMPIOS (Regulares o Irregulares, sin números ni cartel central)
      case "polygon_clean": {
        const stroke = spec.color || "#0284c7";
        const fill = spec.fill || "#e0f2fe";
        let pts = [];
        if (spec.customPoints && spec.customPoints.length > 0) {
          pts = spec.customPoints;
        } else {
          const n = spec.sides || 6;
          const cx = 170;
          const cy = 96;
          const r = 68;
          for (let i = 0; i < n; i += 1) {
            const ang = -Math.PI / 2 + (i * 2 * Math.PI) / n;
            pts.push({
              x: cx + r * Math.cos(ang),
              y: cy + r * Math.sin(ang)
            });
          }
        }
        const polyPoints = pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
        const dotsHtml = pts
          .map(
            (p) =>
              `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${pts.length > 12 ? 3.2 : 4.5}" fill="#0f172a"/>`
          )
          .join("");

        return `<svg viewBox="0 0 340 192" aria-label="Geometrische Figur">
          <rect x="2" y="2" width="336" height="188" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <polygon points="${polyPoints}" fill="${fill}" stroke="${stroke}" stroke-width="3.2" stroke-linejoin="round"/>
          ${dotsHtml}
        </svg>`;
      }

      // 2. CUADRÍCULA DE 4 FIGURAS A, B, C, D (sin textos ni colores que delaten la respuesta)
      case "figures_4_grid": {
        const v = spec.variant || "which_is_viereck";
        let shapesHtml = "";
        if (v === "which_is_polygon") {
          shapesHtml = `
            <!-- A: Mit Kurve -->
            <path d="M 24 128 L 24 82 A 24 24 0 0 1 72 82 L 72 128 Z" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.6"/>
            <!-- B: Offene Linie -->
            <polyline points="156,64 108,64 108,128 156,128 156,96" fill="none" stroke="#1e293b" stroke-width="2.8"/>
            <!-- C: Echtes Polygon (Konkaves Fünfeck) -->
            <polygon points="190,62 242,62 242,128 216,104 190,128" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.6" stroke-linejoin="round"/>
            <!-- D: Überschlagen (Sanduhr) -->
            <polygon points="274,62 326,62 274,128 326,128" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.6" stroke-linejoin="round"/>
          `;
        } else if (v === "which_is_sechseck") {
          shapesHtml = `
            <!-- A: 5 Ecken -->
            <polygon points="48,56 74,78 64,126 32,126 22,78" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.5"/>
            <!-- B: 6 Ecken (L-Polygon) -->
            <polygon points="104,56 132,56 132,92 160,92 160,126 104,126" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.5"/>
            <!-- C: 7 Ecken (Pfeil) -->
            <polygon points="188,78 216,78 216,58 244,92 216,126 216,106 188,106" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.5"/>
            <!-- D: 8 Ecken -->
            <polygon points="288,56 312,56 328,72 328,110 312,126 288,126 272,110 272,72" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.5"/>
          `;
        } else if (v === "which_has_1_axis") {
          shapesHtml = `
            <!-- A: Romboid (0) -->
            <polygon points="28,66 76,66 64,122 16,122" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.5"/>
            <!-- B: Rechteck (2) -->
            <rect x="102" y="68" width="60" height="48" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.5"/>
            <!-- C: Drachen (1) -->
            <polygon points="216,54 240,82 216,132 192,82" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.5"/>
            <!-- D: Quadrat (4) -->
            <rect x="276" y="66" width="50" height="50" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.5"/>
          `;
        } else if (v === "which_is_romboid") {
          shapesHtml = `
            <!-- A: Gedrehtes Quadrat -->
            <polygon points="48,58 78,88 48,118 18,88" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.5"/>
            <!-- B: Raute -->
            <polygon points="132,52 154,90 132,128 110,90" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.5"/>
            <!-- C: Romboid -->
            <polygon points="196,64 248,64 234,120 182,120" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.5"/>
            <!-- D: Trapez -->
            <polygon points="284,64 316,64 330,120 270,120" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.5"/>
          `;
        } else {
          // Default: which_is_viereck
          shapesHtml = `
            <!-- A: Fünfeck -->
            <polygon points="48,58 74,78 64,122 32,122 22,78" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.5"/>
            <!-- B: Offene Linie -->
            <polyline points="154,66 108,66 108,120 156,120" fill="none" stroke="#1e293b" stroke-width="2.8"/>
            <!-- C: Rundbogen -->
            <path d="M 192 120 L 192 84 A 24 24 0 0 1 240 84 L 240 120 Z" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.5"/>
            <!-- D: Gedrehtes Viereck (exaktes Quadrat 30x30) -->
            <polygon points="301,58 331,88 301,118 271,88" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.5"/>
          `;
        }

        return `<svg viewBox="0 0 350 175" aria-label="Vier Figuren A, B, C und D">
          <rect x="2" y="2" width="346" height="171" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <rect x="10" y="14" width="76" height="146" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="48" y="34" text-anchor="middle" font-size="13" font-weight="900" fill="#334155">Figur A</text>
          <rect x="94" y="14" width="76" height="146" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="132" y="34" text-anchor="middle" font-size="13" font-weight="900" fill="#334155">Figur B</text>
          <rect x="178" y="14" width="76" height="146" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="216" y="34" text-anchor="middle" font-size="13" font-weight="900" fill="#334155">Figur C</text>
          <rect x="262" y="14" width="78" height="146" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="301" y="34" text-anchor="middle" font-size="13" font-weight="900" fill="#334155">Figur D</text>
          ${shapesHtml}
        </svg>`;
      }

      // 3. DREIECKE LIMPIOS (Sin leyendas que regalen la respuesta)
      case "triangle_clean": {
        const kind = spec.kind || "equilateral";
        let p1 = { x: 170, y: 28 };
        let p2 = { x: 98, y: 152 };
        let p3 = { x: 242, y: 152 };
        let ticks = [0, 0, 0];
        let stroke = "#0284c7";
        let fill = "#e0f2fe";

        if (kind === "equilateral") {
          p1 = { x: 170, y: 28.8 };
          p2 = { x: 100, y: 150 };
          p3 = { x: 240, y: 150 };
          ticks = [1, 1, 1];
          stroke = "#15803d";
          fill = "#dcfce7";
        } else if (kind === "isosceles_acute") {
          p1 = { x: 170, y: 22 };
          p2 = { x: 120, y: 154 };
          p3 = { x: 220, y: 154 };
          ticks = [1, 2, 1];
          stroke = "#0284c7";
          fill = "#e0f2fe";
        } else if (kind === "isosceles_obtuse") {
          p1 = { x: 170, y: 58 };
          p2 = { x: 58, y: 144 };
          p3 = { x: 282, y: 144 };
          ticks = [1, 2, 1];
          stroke = "#d97706";
          fill = "#fef3c7";
        } else if (kind === "isosceles_right") {
          p1 = { x: 170, y: 42 };
          p2 = { x: 72, y: 140 };
          p3 = { x: 268, y: 140 };
          ticks = [1, 2, 1];
          stroke = "#7c3aed";
          fill = "#ede9fe";
        } else if (kind === "scalene_right") {
          p1 = { x: 86, y: 34 };
          p2 = { x: 86, y: 146 };
          p3 = { x: 268, y: 146 };
          ticks = [1, 2, 3];
          stroke = "#0284c7";
          fill = "#f0f9ff";
        } else if (kind === "scalene_obtuse") {
          p1 = { x: 124, y: 94 };
          p2 = { x: 64, y: 148 };
          p3 = { x: 282, y: 148 };
          ticks = [1, 2, 3];
          stroke = "#ea580c";
          fill = "#ffedd5";
        } else if (kind === "near_right_89") {
          p1 = { x: 96, y: 34 };
          p2 = { x: 92, y: 148 };
          p3 = { x: 256, y: 148 };
          ticks = [0, 0, 0];
          stroke = "#4f46e5";
          fill = "#e0e7ff";
        } else if (kind === "near_right_91") {
          p1 = { x: 88, y: 34 };
          p2 = { x: 92, y: 148 };
          p3 = { x: 256, y: 148 };
          ticks = [0, 0, 0];
          stroke = "#4f46e5";
          fill = "#e0e7ff";
        } else {
          // scalene_acute
          p1 = { x: 145, y: 28 };
          p2 = { x: 74, y: 148 };
          p3 = { x: 268, y: 148 };
          ticks = [1, 2, 3];
          stroke = "#db2777";
          fill = "#fce7f3";
        }

        let extras = "";
        if (spec.showTicks) {
          if (ticks[0] > 0) extras += svgTickMarks(p1.x, p1.y, p2.x, p2.y, ticks[0], "#0f172a");
          if (ticks[1] > 0) extras += svgTickMarks(p2.x, p2.y, p3.x, p3.y, ticks[1], "#0f172a");
          if (ticks[2] > 0) extras += svgTickMarks(p3.x, p3.y, p1.x, p1.y, ticks[2], "#0f172a");
        }
        if (spec.showRightAngle) {
          if (kind === "isosceles_right") {
            extras += `<polygon points="170,42 156,56 170,70 184,56" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
              <circle cx="170" cy="56" r="2.2" fill="#1e40af"/>`;
          } else if (kind === "scalene_right") {
            extras += `<rect x="86" y="124" width="22" height="22" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
              <circle cx="97" cy="135" r="2.2" fill="#1e40af"/>`;
          }
        }
        if (spec.sideLabels && spec.sideLabels.length === 3) {
          const m12 = { x: (p1.x + p2.x) / 2 - 22, y: (p1.y + p2.y) / 2 };
          const m23 = { x: (p2.x + p3.x) / 2, y: (p2.y + p3.y) / 2 + 19 };
          const m31 = { x: (p3.x + p1.x) / 2 + 24, y: (p3.y + p1.y) / 2 };
          extras += `
            <text x="${m12.x}" y="${m12.y}" text-anchor="middle" font-size="12.5" font-weight="900" fill="#0f172a">${spec.sideLabels[0]}</text>
            <text x="${m23.x}" y="${m23.y}" text-anchor="middle" font-size="12.5" font-weight="900" fill="#0f172a">${spec.sideLabels[1]}</text>
            <text x="${m31.x}" y="${m31.y}" text-anchor="middle" font-size="12.5" font-weight="900" fill="#0f172a">${spec.sideLabels[2]}</text>
          `;
        }
        if (spec.angleLabels && spec.angleLabels.length === 3) {
          extras += `
            <text x="${p2.x + 28}" y="${p2.y - 12}" text-anchor="middle" font-size="12" font-weight="900" fill="#1e3a8a">${spec.angleLabels[0]}</text>
            <text x="${p3.x - 32}" y="${p3.y - 12}" text-anchor="middle" font-size="12" font-weight="900" fill="#1e3a8a">${spec.angleLabels[1]}</text>
            <text x="${p1.x + 8}" y="${p1.y + 32}" text-anchor="middle" font-size="12" font-weight="900" fill="#1e3a8a">${spec.angleLabels[2]}</text>
          `;
        }

        return `<svg viewBox="0 0 340 182" aria-label="Dreieck">
          <rect x="2" y="2" width="336" height="178" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <polygon points="${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}" fill="${fill}" stroke="${stroke}" stroke-width="3.2" stroke-linejoin="round"/>
          ${extras}
        </svg>`;
      }

      // 4. TABLA 3x3 DE TRIÁNGULOS LIMPIA (Con Feld 1 a Feld 9, sin textos explicativos ni spoilers)
      case "triangle_matrix_3x3_clean":
        return `<svg viewBox="0 0 350 186" aria-label="3x3 Tabelle der Dreiecke mit Feld 1 bis Feld 9">
          <rect x="2" y="2" width="346" height="182" rx="12" fill="#ffffff" stroke="#cbd5e1"/>
          <rect x="10" y="10" width="94" height="34" fill="#f1f5f9" stroke="#94a3b8"/>
          <text x="57" y="31" text-anchor="middle" font-size="10" font-weight="900" fill="#334155">Seiten \\ Winkel</text>
          <rect x="104" y="10" width="78" height="34" fill="#eff6ff" stroke="#94a3b8"/>
          <text x="143" y="31" text-anchor="middle" font-size="10.5" font-weight="900" fill="#1e40af">spitzwinklig</text>
          <rect x="182" y="10" width="78" height="34" fill="#eff6ff" stroke="#94a3b8"/>
          <text x="221" y="31" text-anchor="middle" font-size="10.5" font-weight="900" fill="#1e40af">rechtwinklig</text>
          <rect x="260" y="10" width="80" height="34" fill="#eff6ff" stroke="#94a3b8"/>
          <text x="300" y="31" text-anchor="middle" font-size="10.5" font-weight="900" fill="#1e40af">stumpfwinklig</text>

          <!-- Fila 1 -->
          <rect x="10" y="44" width="94" height="44" fill="#f8fafc" stroke="#94a3b8"/>
          <text x="57" y="70" text-anchor="middle" font-size="10.5" font-weight="900" fill="#0f172a">gleichseitig</text>
          <rect x="104" y="44" width="78" height="44" fill="#ffffff" stroke="#94a3b8"/>
          <text x="143" y="70" text-anchor="middle" font-size="12" font-weight="900" fill="#334155">Feld 1</text>
          <rect x="182" y="44" width="78" height="44" fill="#ffffff" stroke="#94a3b8"/>
          <text x="221" y="70" text-anchor="middle" font-size="12" font-weight="900" fill="#334155">Feld 2</text>
          <rect x="260" y="44" width="80" height="44" fill="#ffffff" stroke="#94a3b8"/>
          <text x="300" y="70" text-anchor="middle" font-size="12" font-weight="900" fill="#334155">Feld 3</text>

          <!-- Fila 2 -->
          <rect x="10" y="88" width="94" height="44" fill="#f8fafc" stroke="#94a3b8"/>
          <text x="57" y="114" text-anchor="middle" font-size="10" font-weight="900" fill="#0f172a">gleichschenklig</text>
          <rect x="104" y="88" width="78" height="44" fill="#ffffff" stroke="#94a3b8"/>
          <text x="143" y="114" text-anchor="middle" font-size="12" font-weight="900" fill="#334155">Feld 4</text>
          <rect x="182" y="88" width="78" height="44" fill="#ffffff" stroke="#94a3b8"/>
          <text x="221" y="114" text-anchor="middle" font-size="12" font-weight="900" fill="#334155">Feld 5</text>
          <rect x="260" y="88" width="80" height="44" fill="#ffffff" stroke="#94a3b8"/>
          <text x="300" y="114" text-anchor="middle" font-size="12" font-weight="900" fill="#334155">Feld 6</text>

          <!-- Fila 3 -->
          <rect x="10" y="132" width="94" height="44" fill="#f8fafc" stroke="#94a3b8"/>
          <text x="57" y="158" text-anchor="middle" font-size="10.5" font-weight="900" fill="#0f172a">allgemein</text>
          <rect x="104" y="132" width="78" height="44" fill="#ffffff" stroke="#94a3b8"/>
          <text x="143" y="158" text-anchor="middle" font-size="12" font-weight="900" fill="#334155">Feld 7</text>
          <rect x="182" y="132" width="78" height="44" fill="#ffffff" stroke="#94a3b8"/>
          <text x="221" y="158" text-anchor="middle" font-size="12" font-weight="900" fill="#334155">Feld 8</text>
          <rect x="260" y="132" width="80" height="44" fill="#ffffff" stroke="#94a3b8"/>
          <text x="300" y="158" text-anchor="middle" font-size="12" font-weight="900" fill="#334155">Feld 9</text>
        </svg>`;

      // 5. TABLEROS DE ACERTIJOS DE TRIÁNGULOS CON DISTRACTORES (Sin palabras secretas escritas)
      case "triangle_puzzle_board": {
        const b = spec.board || "STERN";
        if (b === "STERN") {
          // 7 triangles: S(recht), K(spitz), T(recht), E(recht), L(stumpf), R(recht), N(recht)
          return `<svg viewBox="0 0 350 185" aria-label="Sieben Dreiecke zum Untersuchen">
            <rect x="2" y="2" width="346" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <!-- S (recht) -->
            <polygon points="18,22 18,82 72,82" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="36" y="70" font-size="14" font-weight="900" fill="#0f172a">S</text>
            <!-- K (spitz gleichseitig) -->
            <polygon points="118,22 92,82 144,82" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="118" y="70" text-anchor="middle" font-size="14" font-weight="900" fill="#0f172a">K</text>
            <!-- T (recht oben) -->
            <polygon points="170,22 232,22 170,82" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="188" y="48" font-size="14" font-weight="900" fill="#0f172a">T</text>
            <!-- E (recht rechts unten) -->
            <polygon points="326,22 264,82 326,82" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="306" y="72" font-size="14" font-weight="900" fill="#0f172a">E</text>
            <!-- L (stumpf ~123°) -->
            <polygon points="62,134 18,166 122,166" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="66" y="160" text-anchor="middle" font-size="14" font-weight="900" fill="#0f172a">L</text>
            <!-- R (recht) -->
            <polygon points="154,104 154,166 220,166" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="174" y="154" font-size="14" font-weight="900" fill="#0f172a">R</text>
            <!-- N (recht) -->
            <polygon points="254,104 324,104 324,166" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="300" y="132" font-size="14" font-weight="900" fill="#0f172a">N</text>
          </svg>`;
        }
        if (b === "MOND") {
          // 7 triangles: M(stumpf), P(spitz), O(stumpf), F(recht), N(stumpf), D(stumpf), X(spitz)
          return `<svg viewBox="0 0 350 185" aria-label="Sieben Dreiecke zum Untersuchen">
            <rect x="2" y="2" width="346" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <!-- M (stumpf ~125°) -->
            <polygon points="58,60 14,84 102,84" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="58" y="80" text-anchor="middle" font-size="13.5" font-weight="900">M</text>
            <!-- P (spitz) -->
            <polygon points="146,18 122,84 170,84" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="146" y="72" text-anchor="middle" font-size="14" font-weight="900">P</text>
            <!-- O (stumpf ~120°) -->
            <polygon points="212,60 184,84 268,84" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="218" y="80" text-anchor="middle" font-size="13.5" font-weight="900">O</text>
            <!-- F (recht) -->
            <polygon points="286,22 286,84 336,84" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="302" y="72" font-size="14" font-weight="900">F</text>
            <!-- N (stumpf ~125°) -->
            <polygon points="68,142 18,168 118,168" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="68" y="164" text-anchor="middle" font-size="13.5" font-weight="900">N</text>
            <!-- D (stumpf ~125°) -->
            <polygon points="196,142 146,168 246,168" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="196" y="164" text-anchor="middle" font-size="13.5" font-weight="900">D</text>
            <!-- X (spitz) -->
            <polygon points="300,104 274,168 326,168" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="300" y="156" text-anchor="middle" font-size="14" font-weight="900">X</text>
          </svg>`;
        }
        if (b === "WALD") {
          // 7 triangles: W(gleichseitig), B(scalene), A(gleichseitig), K(tall iso), L(gleichseitig), Z(recht), D(gleichseitig)
          return `<svg viewBox="0 0 350 185" aria-label="Sieben Dreiecke zum Untersuchen">
            <rect x="2" y="2" width="346" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <!-- W (gleichseitig: side 56, h=48.5) -->
            <polygon points="48,30 20,78.5 76,78.5" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="48" y="68" text-anchor="middle" font-size="13.5" font-weight="900">W</text>
            <!-- B (ungleichseitig) -->
            <polygon points="104,24 94,78.5 162,78.5" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="120" y="68" text-anchor="middle" font-size="13.5" font-weight="900">B</text>
            <!-- A (gleichseitig) -->
            <polygon points="210,30 182,78.5 238,78.5" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="210" y="68" text-anchor="middle" font-size="13.5" font-weight="900">A</text>
            <!-- K (schmal gleichschenklig) -->
            <polygon points="298,16 280,78.5 316,78.5" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="298" y="68" text-anchor="middle" font-size="13.5" font-weight="900">K</text>
            <!-- L (gleichseitig) -->
            <polygon points="66,114 38,162.5 94,162.5" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="66" y="152" text-anchor="middle" font-size="13.5" font-weight="900">L</text>
            <!-- Z (stumpf) -->
            <polygon points="172,132 126,162.5 218,162.5" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="172" y="156" text-anchor="middle" font-size="13.5" font-weight="900">Z</text>
            <!-- D (gleichseitig) -->
            <polygon points="284,114 256,162.5 312,162.5" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            <text x="284" y="152" text-anchor="middle" font-size="13.5" font-weight="900">D</text>
          </svg>`;
        }
        if (b === "BERG") {
          // 7 triangles with tick marks: B(iso), U(scalene), E(iso), I(scalene), R(iso), S(scalene), G(iso)
          return `<svg viewBox="0 0 350 185" aria-label="Sieben Dreiecke mit Seitenmarkierungen">
            <rect x="2" y="2" width="346" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <!-- B (iso) -->
            <polygon points="46,18 22,82 70,82" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            ${svgTickMarks(46, 18, 22, 82, 1)} ${svgTickMarks(70, 82, 46, 18, 1)}
            <text x="46" y="70" text-anchor="middle" font-size="13.5" font-weight="900">B</text>
            <!-- U (scalene) -->
            <polygon points="96,24 96,82 156,82" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            ${svgTickMarks(96, 24, 96, 82, 1)} ${svgTickMarks(96, 82, 156, 82, 2)} ${svgTickMarks(156, 82, 96, 24, 3)}
            <text x="114" y="70" font-size="13.5" font-weight="900">U</text>
            <!-- E (iso) -->
            <polygon points="204,18 180,82 228,82" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            ${svgTickMarks(204, 18, 180, 82, 1)} ${svgTickMarks(228, 82, 204, 18, 1)}
            <text x="204" y="70" text-anchor="middle" font-size="13.5" font-weight="900">E</text>
            <!-- I (scalene) -->
            <polygon points="262,28 252,82 328,82" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            ${svgTickMarks(262, 28, 252, 82, 1)} ${svgTickMarks(252, 82, 328, 82, 2)} ${svgTickMarks(328, 82, 262, 28, 3)}
            <text x="282" y="70" font-size="13.5" font-weight="900">I</text>
            <!-- R (iso) -->
            <polygon points="64,104 38,166 90,166" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            ${svgTickMarks(64, 104, 38, 166, 1)} ${svgTickMarks(90, 166, 64, 104, 1)}
            <text x="64" y="154" text-anchor="middle" font-size="13.5" font-weight="900">R</text>
            <!-- S (scalene) -->
            <polygon points="134,108 134,166 206,166" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            ${svgTickMarks(134, 108, 134, 166, 1)} ${svgTickMarks(134, 166, 206, 166, 2)} ${svgTickMarks(206, 166, 134, 108, 3)}
            <text x="154" y="154" font-size="13.5" font-weight="900">S</text>
            <!-- G (iso) -->
            <polygon points="278,104 252,166 304,166" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            ${svgTickMarks(278, 104, 252, 166, 1)} ${svgTickMarks(304, 166, 278, 104, 1)}
            <text x="278" y="154" text-anchor="middle" font-size="13.5" font-weight="900">G</text>
          </svg>`;
        }
        if (b === "BOOT") {
          // Find scalene (ungleichseitig): B(scalene), A(iso), O(scalene), L(equi), O(scalene), N(iso), T(scalene)
          return `<svg viewBox="0 0 350 185" aria-label="Sieben Dreiecke zum Untersuchen">
            <rect x="2" y="2" width="346" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <!-- B (scalene) -->
            <polygon points="22,24 22,82 84,82" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            ${svgTickMarks(22, 24, 22, 82, 1)} ${svgTickMarks(22, 82, 84, 82, 2)} ${svgTickMarks(84, 82, 22, 24, 3)}
            <text x="40" y="70" font-size="13.5" font-weight="900">B</text>
            <!-- A (iso) -->
            <polygon points="130,18 106,82 154,82" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            ${svgTickMarks(130, 18, 106, 82, 1)} ${svgTickMarks(154, 82, 130, 18, 1)}
            <text x="130" y="70" text-anchor="middle" font-size="13.5" font-weight="900">A</text>
            <!-- O (scalene) -->
            <polygon points="184,26 174,82 246,82" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            ${svgTickMarks(184, 26, 174, 82, 1)} ${svgTickMarks(174, 82, 246, 82, 2)} ${svgTickMarks(246, 82, 184, 26, 3)}
            <text x="200" y="70" font-size="13.5" font-weight="900">O</text>
            <!-- L (equi) -->
            <polygon points="298,28 270,82 326,82" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            ${svgTickMarks(298, 28, 270, 82, 1)} ${svgTickMarks(270, 82, 326, 82, 1)} ${svgTickMarks(326, 82, 298, 28, 1)}
            <text x="298" y="70" text-anchor="middle" font-size="13.5" font-weight="900">L</text>
            <!-- O (scalene) -->
            <polygon points="34,108 24,166 104,166" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            ${svgTickMarks(34, 108, 24, 166, 1)} ${svgTickMarks(24, 166, 104, 166, 2)} ${svgTickMarks(104, 166, 34, 108, 3)}
            <text x="54" y="154" font-size="13.5" font-weight="900">O</text>
            <!-- N (iso) -->
            <polygon points="168,104 144,166 192,166" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            ${svgTickMarks(168, 104, 144, 166, 1)} ${svgTickMarks(192, 166, 168, 104, 1)}
            <text x="168" y="154" text-anchor="middle" font-size="13.5" font-weight="900">N</text>
            <!-- T (scalene) -->
            <polygon points="244,108 244,166 322,166" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
            ${svgTickMarks(244, 108, 244, 166, 1)} ${svgTickMarks(244, 166, 322, 166, 2)} ${svgTickMarks(322, 166, 244, 108, 3)}
            <text x="266" y="154" font-size="13.5" font-weight="900">T</text>
          </svg>`;
        }
        // Default: TURM (rechtwinklig UND gleichschenklig)
        return `<svg viewBox="0 0 350 185" aria-label="Sieben Dreiecke zum Untersuchen">
          <rect x="2" y="2" width="346" height="181" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- T (recht + iso: 54x54) -->
          <polygon points="22,28 22,82 76,82" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
          ${svgTickMarks(22, 28, 22, 82, 1)} ${svgTickMarks(22, 82, 76, 82, 1)}
          <text x="38" y="70" font-size="13.5" font-weight="900">T</text>
          <!-- E (recht + scalene) -->
          <polygon points="98,28 98,82 174,82" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
          ${svgTickMarks(98, 28, 98, 82, 1)} ${svgTickMarks(98, 82, 174, 82, 2)}
          <text x="116" y="70" font-size="13.5" font-weight="900">E</text>
          <!-- U (recht + iso) -->
          <polygon points="196,28 250,28 196,82" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
          ${svgTickMarks(196, 28, 250, 28, 1)} ${svgTickMarks(196, 28, 196, 82, 1)}
          <text x="210" y="52" font-size="13.5" font-weight="900">U</text>
          <!-- K (spitz + iso) -->
          <polygon points="298,18 274,82 322,82" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
          ${svgTickMarks(298, 18, 274, 82, 1)} ${svgTickMarks(322, 82, 298, 18, 1)}
          <text x="298" y="70" text-anchor="middle" font-size="13.5" font-weight="900">K</text>
          <!-- R (recht + iso: exakte 90° an der Spitze, h = 42 = halbe Basis 42) -->
          <polygon points="56,122 14,164 98,164" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
          ${svgTickMarks(56, 122, 14, 164, 1)} ${svgTickMarks(98, 164, 56, 122, 1)}
          <text x="56" y="156" text-anchor="middle" font-size="13.5" font-weight="900">R</text>
          <!-- S (stumpf + iso) -->
          <polygon points="168,128 118,164 218,164" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
          ${svgTickMarks(168, 128, 118, 164, 1)} ${svgTickMarks(218, 164, 168, 128, 1)}
          <text x="168" y="156" text-anchor="middle" font-size="13.5" font-weight="900">S</text>
          <!-- M (recht + iso) -->
          <polygon points="318,110 264,164 318,164" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/>
          ${svgTickMarks(318, 110, 318, 164, 1)} ${svgTickMarks(264, 164, 318, 164, 1)}
          <text x="300" y="154" font-size="13.5" font-weight="900">M</text>
        </svg>`;
      }

      // 6. VIERECKE LIMPIOS (Sin nombres ni leyendas que soplen la respuesta)
      case "viereck_clean": {
        const k = spec.kind || "raute";
        if (k === "three_blank_groups") {
          return `<svg viewBox="0 0 350 175" aria-label="Drei Gruppen der Vierecke">
            <rect x="2" y="2" width="346" height="171" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <rect x="115" y="12" width="120" height="28" rx="14" fill="#f1f5f9" stroke="#0f172a" stroke-width="2"/>
            <text x="175" y="31" text-anchor="middle" font-size="13" font-weight="900" fill="#0f172a">Vierecke</text>
            <line x1="145" y1="40" x2="62" y2="66" stroke="#0f172a" stroke-width="2"/>
            <line x1="175" y1="40" x2="175" y2="66" stroke="#0f172a" stroke-width="2"/>
            <line x1="205" y1="40" x2="288" y2="66" stroke="#0f172a" stroke-width="2"/>
            <rect x="10" y="66" width="104" height="92" rx="10" fill="#f8fafc" stroke="#0284c7" stroke-width="2"/>
            <polygon points="36,88 94,88 82,138 24,138" fill="#bae6fd" stroke="#0369a1" stroke-width="2.4"/>
            <rect x="123" y="66" width="104" height="92" rx="10" fill="#f8fafc" stroke="#d97706" stroke-width="2"/>
            <polygon points="150,88 200,88 214,138 136,138" fill="#fde68a" stroke="#b45309" stroke-width="2.4"/>
            <rect x="236" y="66" width="104" height="92" rx="10" fill="#f8fafc" stroke="#db2777" stroke-width="2"/>
            <polygon points="288,82 314,104 288,144 262,104" fill="#fbcfe8" stroke="#be185d" stroke-width="2.4"/>
          </svg>`;
        }
        if (k === "four_parallelograms_unlabeled") {
          return `<svg viewBox="0 0 350 165" aria-label="Vier Parallelogramme">
            <rect x="2" y="2" width="346" height="161" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <rect x="18" y="46" width="62" height="62" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.6"/>
            <rect x="96" y="54" width="76" height="46" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.6"/>
            <polygon points="216,38 248,77 216,116 184,77" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.6"/>
            <polygon points="274,52 336,52 320,102 258,102" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.6"/>
          </svg>`;
        }
        if (k === "quadrat_rotated") {
          return `<svg viewBox="0 0 340 180" aria-label="Gedrehtes Viereck">
            <rect x="2" y="2" width="336" height="176" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <g transform="translate(170, 90) rotate(45)">
              <rect x="-48" y="-48" width="96" height="96" fill="#dcfce7" stroke="#15803d" stroke-width="3.2"/>
            </g>
          </svg>`;
        }
        if (k === "raute") {
          return `<svg viewBox="0 0 340 180" aria-label="Viereck mit 4 gleich langen Seiten">
            <rect x="2" y="2" width="336" height="176" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <polygon points="170,22 256,90 170,158 84,90" fill="#fef3c7" stroke="#d97706" stroke-width="3.2" stroke-linejoin="round"/>
            ${svgTickMarks(170, 22, 256, 90, 1, "#b45309")}
            ${svgTickMarks(256, 90, 170, 158, 1, "#b45309")}
            ${svgTickMarks(170, 158, 84, 90, 1, "#b45309")}
            ${svgTickMarks(84, 90, 170, 22, 1, "#b45309")}
          </svg>`;
        }
        if (k === "romboid_steep_1f") {
          return `<svg viewBox="0 0 340 180" aria-label="Schräges Viereck">
            <rect x="2" y="2" width="336" height="176" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <polygon points="64,142 214,34 286,34 136,142" fill="#e0f2fe" stroke="#0284c7" stroke-width="3.2" stroke-linejoin="round"/>
          </svg>`;
        }
        if (k === "romboid") {
          return `<svg viewBox="0 0 340 180" aria-label="Parallelogramm / Romboid">
            <rect x="2" y="2" width="336" height="176" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <polygon points="96,42 268,42 236,142 64,142" fill="#e0f2fe" stroke="#0284c7" stroke-width="3.2" stroke-linejoin="round"/>
          </svg>`;
        }
        if (k === "trapez_recht_left") {
          return `<svg viewBox="0 0 340 180" aria-label="Viereck">
            <rect x="2" y="2" width="336" height="176" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <polygon points="85,38 215,38 265,142 85,142" fill="#fef3c7" stroke="#d97706" stroke-width="3.2" stroke-linejoin="round"/>
          </svg>`;
        }
        if (k === "trapez_recht_vertical") {
          return `<svg viewBox="0 0 340 180" aria-label="Gedrehtes Viereck">
            <rect x="2" y="2" width="336" height="176" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <polygon points="96,68 244,28 244,148 96,148" fill="#fef3c7" stroke="#d97706" stroke-width="3.2" stroke-linejoin="round"/>
          </svg>`;
        }
        if (k === "trapez_iso") {
          return `<svg viewBox="0 0 340 180" aria-label="Trapez">
            <rect x="2" y="2" width="336" height="176" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <polygon points="112,42 228,42 268,142 72,142" fill="#dcfce7" stroke="#16a34a" stroke-width="3.2" stroke-linejoin="round"/>
            ${svgTickMarks(112, 42, 72, 142, 1, "#15803d")}
            ${svgTickMarks(228, 42, 268, 142, 1, "#15803d")}
          </svg>`;
        }
        if (k === "trapez_scalene") {
          return `<svg viewBox="0 0 340 180" aria-label="Ungleichseitiges Trapez">
            <rect x="2" y="2" width="336" height="176" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <polygon points="122,42 214,42 276,142 64,142" fill="#f1f5f9" stroke="#334155" stroke-width="3.2" stroke-linejoin="round"/>
          </svg>`;
        }
        if (k === "drachen_vertical") {
          return `<svg viewBox="0 0 340 180" aria-label="Drachen (Deltoid)">
            <rect x="2" y="2" width="336" height="176" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <polygon points="170,18 234,68 170,162 106,68" fill="#fce7f3" stroke="#db2777" stroke-width="3.2" stroke-linejoin="round"/>
            ${svgTickMarks(170, 18, 234, 68, 1, "#9d174d")}
            ${svgTickMarks(106, 68, 170, 18, 1, "#9d174d")}
            ${svgTickMarks(234, 68, 170, 162, 2, "#0284c7")}
            ${svgTickMarks(170, 162, 106, 68, 2, "#0284c7")}
          </svg>`;
        }
        if (k === "drachen_horizontal") {
          return `<svg viewBox="0 0 340 180" aria-label="Liegender Drachen mit Diagonalen">
            <rect x="2" y="2" width="336" height="176" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <polygon points="62,90 134,30 278,90 134,150" fill="#fce7f3" stroke="#db2777" stroke-width="3.2" stroke-linejoin="round"/>
            <line x1="62" y1="90" x2="278" y2="90" stroke="#64748b" stroke-width="1.8" stroke-dasharray="4,3"/>
            <line x1="134" y1="30" x2="134" y2="150" stroke="#64748b" stroke-width="1.8" stroke-dasharray="4,3"/>
          </svg>`;
        }
        if (k === "trapezoid_concave") {
          return `<svg viewBox="0 0 340 180" aria-label="Konkaves Viereck">
            <rect x="2" y="2" width="336" height="176" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <polygon points="170,22 256,154 170,108 84,154" fill="#ede9fe" stroke="#7c3aed" stroke-width="3.2" stroke-linejoin="round"/>
          </svg>`;
        }
        if (k === "rechteck") {
          return `<svg viewBox="0 0 340 180" aria-label="Rechteck">
            <rect x="2" y="2" width="336" height="176" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <rect x="68" y="42" width="204" height="96" fill="#e0f2fe" stroke="#0284c7" stroke-width="3.2"/>
          </svg>`;
        }
        if (k === "rechteck_diagonal_trap") {
          return `<svg viewBox="0 0 340 180" aria-label="Rechteck ABCD mit Diagonale g">
            <rect x="2" y="2" width="336" height="176" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
            <rect x="68" y="42" width="204" height="96" fill="#e0f2fe" stroke="#0284c7" stroke-width="3.2"/>
            <line x1="52" y1="146" x2="288" y2="34" stroke="#dc2626" stroke-width="2.6" stroke-dasharray="6,4"/>
            <text x="58" y="156" font-size="13" font-weight="900" fill="#0f172a">A</text>
            <text x="278" y="156" font-size="13" font-weight="900" fill="#0f172a">B</text>
            <text x="278" y="34" font-size="13" font-weight="900" fill="#0f172a">C</text>
            <text x="58" y="34" font-size="13" font-weight="900" fill="#0f172a">D</text>
            <text x="294" y="48" font-size="13" font-weight="900" fill="#dc2626">g</text>
          </svg>`;
        }
        // Default: mystery_box (Steckbrief-Rätsel ohne Spoiler)
        return `<svg viewBox="0 0 340 175" aria-label="Geometrie-Rätsel">
          <rect x="2" y="2" width="336" height="171" rx="12" fill="#f8fafc" stroke="#cbd5e1"/>
          <rect x="95" y="32" width="150" height="110" rx="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2.5" stroke-dasharray="6,4"/>
          <text x="170" y="96" text-anchor="middle" font-size="42" font-weight="900" fill="#1d4ed8">?</text>
          <text x="170" y="126" text-anchor="middle" font-size="12" font-weight="900" fill="#1e3a8a">Welches Viereck bin ich?</text>
        </svg>`;
      }

      // 7. KOORDINATENSYSTEM LIMPIO — ESCALA 1:1 ISOTRÓPICA (stepX === stepY = 24px!)
      // Así todos los cuadraditos son 100% cuadrados y los ángulos de 90° y diagonales de 45° son exactos.
      case "coord_grid_clean":
      default: {
        const maxX = spec.maxX || 10;
        const maxY = spec.maxY || 10;
        const step = 24;
        const padLeft = 34;
        const padRight = 24;
        const padTop = 22;
        const padBottom = 30;
        const plotW = maxX * step;
        const plotH = maxY * step;
        const svgW = padLeft + plotW + padRight;
        const svgH = padTop + plotH + padBottom;

        const toSvgX = (x) => padLeft + x * step;
        const toSvgY = (y) => padTop + (maxY - y) * step;

        let gridHtml = "";
        for (let x = 0; x <= maxX; x += 1) {
          const sx = toSvgX(x);
          gridHtml += `<line x1="${sx.toFixed(1)}" y1="${padTop}" x2="${sx.toFixed(1)}" y2="${padTop + plotH}" stroke="#e2e8f0" stroke-width="1"/>`;
          gridHtml += `<text x="${sx.toFixed(1)}" y="${padTop + plotH + 15}" text-anchor="middle" font-size="10.5" font-weight="800" fill="#475569">${x}</text>`;
        }
        for (let y = 0; y <= maxY; y += 1) {
          const sy = toSvgY(y);
          gridHtml += `<line x1="${padLeft}" y1="${sy.toFixed(1)}" x2="${padLeft + plotW}" y2="${sy.toFixed(1)}" stroke="#e2e8f0" stroke-width="1"/>`;
          if (y > 0) {
            gridHtml += `<text x="${padLeft - 8}" y="${(sy + 3.5).toFixed(1)}" text-anchor="end" font-size="10.5" font-weight="800" fill="#475569">${y}</text>`;
          }
        }

        const oy = toSvgY(0);
        const ox = toSvgX(0);
        const axEndX = padLeft + plotW + 10;
        const axEndY = padTop - 10;
        const axesHtml = `
          <line x1="${ox}" y1="${oy}" x2="${axEndX}" y2="${oy}" stroke="#0f172a" stroke-width="2"/>
          <polygon points="${axEndX + 4},${oy} ${axEndX - 3},${oy - 3.5} ${axEndX - 3},${oy + 3.5}" fill="#0f172a"/>
          <line x1="${ox}" y1="${oy}" x2="${ox}" y2="${axEndY}" stroke="#0f172a" stroke-width="2"/>
          <polygon points="${ox},${axEndY - 4} ${ox - 3.5},${axEndY + 3} ${ox + 3.5},${axEndY + 3}" fill="#0f172a"/>
          <text x="${axEndX + 1}" y="${oy + 15}" text-anchor="middle" font-size="11.5" font-weight="900" fill="#0f172a">x</text>
          <text x="${ox - 13}" y="${axEndY + 4}" text-anchor="middle" font-size="11.5" font-weight="900" fill="#0f172a">y</text>
        `;

        // Recta de simetría g (si existe)
        let mirrorHtml = "";
        if (spec.mirrorLine) {
          const m = spec.mirrorLine;
          const mx1 = toSvgX(m.x1);
          const my1 = toSvgY(m.y1);
          const mx2 = toSvgX(m.x2);
          const my2 = toSvgY(m.y2);
          let gx = mx2 - 10;
          let gy = my2 + 16;
          if (m.y1 === m.y2) {
            gx = mx2 - 10;
            gy = my2 - 7;
          } else if (m.x1 === m.x2) {
            gx = mx2 + 8;
            gy = my2 + 14;
          } else if (m.y1 > m.y2) {
            // Diagonal descendente (ej. (0|9) -> (9|0))
            gx = mx1 + 14;
            gy = my1 + 6;
          }
          mirrorHtml = `
            <line x1="${mx1.toFixed(1)}" y1="${my1.toFixed(1)}" x2="${mx2.toFixed(1)}" y2="${my2.toFixed(1)}" stroke="#dc2626" stroke-width="2.6"/>
            <text x="${gx.toFixed(1)}" y="${gy.toFixed(1)}" font-size="12.5" font-weight="900" fill="#dc2626" style="paint-order:stroke;stroke:#fff;stroke-width:3px;">${m.label || "g"}</text>
          `;
        }

        // Polígono original (p. ej. para Spiegelung, sin dibujar nunca el reflejado)
        let polyHtml = "";
        if (spec.polygon && spec.polygon.length > 0) {
          const ptsStr = spec.polygon
            .map((p) => `${toSvgX(p.x).toFixed(1)},${toSvgY(p.y).toFixed(1)}`)
            .join(" ");
          const c = spec.polyColor || "#0284c7";
          polyHtml += `<polygon points="${ptsStr}" fill="rgba(2, 132, 199, 0.16)" stroke="${c}" stroke-width="2.5"/>`;
          spec.polygon.forEach((p) => {
            const sx = toSvgX(p.x);
            const sy = toSvgY(p.y);
            const ly = sy < padTop + 18 ? sy + 16 : sy - 8;
            const lx = sx > padLeft + plotW - 18 ? sx - 12 : sx + 7;
            polyHtml += `
              <circle cx="${sx.toFixed(1)}" cy="${sy.toFixed(1)}" r="4.5" fill="${c}"/>
              <text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" font-size="11.5" font-weight="900" fill="#0f172a" style="paint-order:stroke;stroke:#fff;stroke-width:3px;">${p.label}</text>
            `;
          });
        }

        // Puntos individuales (solo la letra, sin coordenadas ni líneas guía)
        let ptsHtml = "";
        if (spec.points) {
          spec.points.forEach((pt) => {
            const sx = toSvgX(pt.x);
            const sy = toSvgY(pt.y);
            const ly = sy < padTop + 18 ? sy + 16 : sy - 8;
            const lx = sx > padLeft + plotW - 18 ? sx - 14 : sx + 7;
            ptsHtml += `
              <circle cx="${sx.toFixed(1)}" cy="${sy.toFixed(1)}" r="4.8" fill="${pt.color || "#dc2626"}"/>
              <text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" font-size="12" font-weight="900" fill="${pt.color || "#0f172a"}" style="paint-order:stroke;stroke:#fff;stroke-width:3px;">${pt.label}</text>
            `;
          });
        }

        return `<svg viewBox="0 0 ${svgW} ${svgH}" preserveAspectRatio="xMidYMid meet" aria-label="Koordinatensystem mit quadratischem Raster">
          <rect x="2" y="2" width="${svgW - 4}" height="${svgH - 4}" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          ${gridHtml}
          ${axesHtml}
          ${mirrorHtml}
          ${polyHtml}
          ${ptsHtml}
        </svg>`;
      }
    }
  }

  // Generador dinámico infinito libre de pistas ("🎲 5. Zufalls-Generator")
  function generateMikaRandomQuestions() {
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const stamp = Date.now();

    // 1. Random Polygon (ohne Ecken-Label im Bild!)
    const polyPool = [
      { n: 5, de: "Das Fünfeck", color: "#ec4899", fill: "#fce7f3" },
      { n: 6, de: "Das Sechseck", color: "#eab308", fill: "#fef9c3" },
      { n: 7, de: "Das Siebeneck", color: "#0284c7", fill: "#e0f2fe" },
      { n: 8, de: "Das Achteck", color: "#dc2626", fill: "#fee2e2" },
      { n: 9, de: "Das Neuneck", color: "#0d9488", fill: "#ccfbf1" },
      { n: 10, de: "Das Zehneck", color: "#2563eb", fill: "#dbeafe" }
    ];
    const chosenPoly = pick(polyPool);
    const wrongPolys = polyPool.filter((p) => p.n !== chosenPoly.n).sort(() => Math.random() - 0.5).slice(0, 3);

    // 2. Random Punkt + Vektor = Zielpunkt (nur Startpunkt S im Gitter!)
    const sx = randInt(2, 7);
    const sy = randInt(3, 7);
    const dx = pick([-3, -2, -1, 2, 3]);
    const dy = pick([-3, -2, -1, 1, 2, 3]);
    const ex = sx + dx;
    const ey = sy + dy;

    // 3. Random Vektor zwischen A und B bestimmen (nur A und B als Buchstaben im Gitter!)
    const p1x = randInt(2, 8);
    const p1y = randInt(2, 8);
    const vdx = pick([-4, -3, -2, 2, 3, 4]);
    const vdy = pick([-3, -2, 0, 2, 3]);
    const p2x = Math.max(1, Math.min(10, p1x + vdx));
    const p2y = Math.max(1, Math.min(10, p1y + vdy));
    const realDx = p2x - p1x;
    const realDy = p2y - p1y;

    // 4. Random Rückwärts-Vektor (Startpunkt gesucht!)
    const rStartX = randInt(2, 7);
    const rStartY = randInt(2, 7);
    const rVecX = pick([-3, -2, 2, 3]);
    const rVecY = pick([-3, -2, 2, 3]);
    const rEndX = rStartX + rVecX;
    const rEndY = rStartY + rVecY;

    // 5. Random 4. Eckpunkt eines Rechtecks (nur P, Q, R im Gitter, S nicht eingezeichnet!)
    const rx1 = randInt(1, 4);
    const ry1 = randInt(1, 4);
    const rw = randInt(3, 5);
    const rh = randInt(2, 4);

    // 6. Random 4. Eckpunkt eines Drachens (nur A, B, C im Gitter!)
    const kx = randInt(4, 6);
    const ky = randInt(4, 6);
    const kw = randInt(2, 3);
    const khTop = randInt(2, 3);
    const khBot = randInt(3, 4);

    // 7. Random Spiegelung an senkrechter Achse x = m
    const mirX = 5;
    const origPx = pick([1, 2, 3]);
    const origPy = randInt(2, 8);
    const reflPx = mirX + (mirX - origPx);

    // 8. Random Dreieck-Umfang (gleichschenklig)
    const baseLen = pick([4, 6, 8]);
    const legLen = pick([7, 9, 10, 11]);
    const totalPerim = baseLen + 2 * legLen;

    const freshDynamic = [
      {
        id: "m13_dyn_poly_" + stamp,
        world: "random_mix",
        topicDe: "🎲 Polygon zählen (Neu generiert)",
        questionDe: "Zähle die Ecken dieser Figur genau. Wie heißt dieses Polygon auf Deutsch?",
        questionEs: "Cuenta con cuidado los vértices de esta figura. ¿Cómo se llama este polígono en alemán?",
        svgSpec: { type: "polygon_clean", sides: chosenPoly.n, color: chosenPoly.color, fill: chosenPoly.fill },
        options: [
          { textDe: chosenPoly.de, textEs: chosenPoly.de, correct: true },
          ...wrongPolys.map((wp) => ({
            textDe: wp.de,
            textEs: wp.de,
            correct: false
          }))
        ],
        explanationDe: `Die Figur hat genau ${chosenPoly.n} Ecken, ${chosenPoly.n} Seiten und ${chosenPoly.n} Winkel → ${chosenPoly.de}!`,
        explanationEs: `La figura tiene exactamente ${chosenPoly.n} vértices, lados y ángulos → ${chosenPoly.de}.`
      },
      {
        id: "m13_dyn_vec_add_" + stamp,
        world: "random_mix",
        topicDe: "🎲 Punkt + Vektor (Neu generiert)",
        questionDe: `Lies den Startpunkt S im Koordinatensystem ab und verschiebe ihn mit dem Vektor →(${dx} | ${dy}). Welche Koordinaten hat der Zielpunkt S'?`,
        questionEs: `Lee el punto inicial S en el plano cartesiano y trasládalo con el vector →(${dx} | ${dy}). ¿Qué coordenadas tiene el punto final S'?`,
        svgSpec: {
          type: "coord_grid_clean",
          maxX: 10,
          maxY: 10,
          points: [{ label: "S", x: sx, y: sy, color: "#0284c7" }]
        },
        options: [
          { textDe: `S' (${ex} | ${ey})`, textEs: `S' (${ex} | ${ey})`, correct: true },
          { textDe: `S' (${sx - dx} | ${sy - dy})`, textEs: `S' (${sx - dx} | ${sy - dy})`, correct: false },
          { textDe: `S' (${ey} | ${ex})`, textEs: `S' (${ey} | ${ex})`, correct: false },
          { textDe: `S' (${ex} | ${sy - dy})`, textEs: `S' (${ex} | ${sy - dy})`, correct: false }
        ],
        explanationDe: `S liegt bei (${sx} | ${sy}). Rechnung: (${sx} + (${dx}) | ${sy} + (${dy})) = S'(${ex} | ${ey})!`,
        explanationEs: `S está en (${sx} | ${sy}). Cálculo: (${sx} + (${dx}) | ${sy} + (${dy})) = S'(${ex} | ${ey}).`
      },
      {
        id: "m13_dyn_vec_find_" + stamp,
        world: "random_mix",
        topicDe: "🎲 Vektor zwischen 2 Punkten (Neu generiert)",
        questionDe: "Lies die Punkte A und B im Koordinatensystem ab. Welcher Vektor verschiebt den Startpunkt A genau zum Zielpunkt B?",
        questionEs: "Lee los puntos A y B en el plano cartesiano. ¿Qué vector traslada el punto inicial A exactamente hasta el punto final B?",
        svgSpec: {
          type: "coord_grid_clean",
          maxX: 10,
          maxY: 10,
          points: [
            { label: "A", x: p1x, y: p1y, color: "#0f172a" },
            { label: "B", x: p2x, y: p2y, color: "#dc2626" }
          ]
        },
        options: [
          { textDe: `→(${realDx} | ${realDy})`, textEs: `→(${realDx} | ${realDy})`, correct: true },
          { textDe: `→(${-realDx} | ${-realDy})`, textEs: `→(${-realDx} | ${-realDy})`, correct: false },
          { textDe: `→(${realDy} | ${realDx})`, textEs: `→(${realDy} | ${realDx})`, correct: false },
          { textDe: `→(${-realDx} | ${realDy})`, textEs: `→(${-realDx} | ${realDy})`, correct: false }
        ],
        explanationDe: `Von A(${p1x} | ${p1y}) nach B(${p2x} | ${p2y}) ändert sich x um ${realDx} und y um ${realDy} → Vektor →(${realDx} | ${realDy})!`,
        explanationEs: `De A(${p1x} | ${p1y}) a B(${p2x} | ${p2y}) el cambio es →(${realDx} | ${realDy}).`
      },
      {
        id: "m13_dyn_vec_rev_" + stamp,
        world: "random_mix",
        topicDe: "🎲 Startpunkt rückwärts finden (Neu generiert)",
        questionDe: `Ein Startpunkt A wurde mit dem Vektor →(${rVecX} | ${rVecY}) verschoben und landete auf A'(${rEndX} | ${rEndY}). Welche Koordinaten hatte der Startpunkt A?`,
        questionEs: `Un punto inicial A se trasladó con el vector →(${rVecX} | ${rVecY}) y llegó a A'(${rEndX} | ${rEndY}). ¿Qué coordenadas tenía el punto inicial A?`,
        svgSpec: {
          type: "coord_grid_clean",
          maxX: 10,
          maxY: 10,
          points: [{ label: "A'", x: rEndX, y: rEndY, color: "#16a34a" }]
        },
        options: [
          { textDe: `A (${rStartX} | ${rStartY})`, textEs: `A (${rStartX} | ${rStartY})`, correct: true },
          { textDe: `A (${rEndX + rVecX} | ${rEndY + rVecY})`, textEs: `A (${rEndX + rVecX} | ${rEndY + rVecY})`, correct: false },
          { textDe: `A (${rStartY} | ${rStartX})`, textEs: `A (${rStartY} | ${rStartX})`, correct: false },
          { textDe: `A (${rStartX} | ${rEndY + rVecY})`, textEs: `A (${rStartX} | ${rEndY + rVecY})`, correct: false }
        ],
        explanationDe: `Rückwärts gerechnet: x = ${rEndX} − (${rVecX}) = ${rStartX} und y = ${rEndY} − (${rVecY}) = ${rStartY} → Startpunkt A(${rStartX} | ${rStartY})!`,
        explanationEs: `Calculando a la inversa: x = ${rEndX} − (${rVecX}) = ${rStartX} e y = ${rEndY} − (${rVecY}) = ${rStartY} → A(${rStartX} | ${rStartY}).`
      },
      {
        id: "m13_dyn_rect_4th_" + stamp,
        world: "random_mix",
        topicDe: "🎲 4. Eckpunkt eines Rechtecks (Neu generiert)",
        questionDe: `Die drei eingezeichneten Punkte P(${rx1} | ${ry1}), Q(${rx1 + rw} | ${ry1}) und R(${rx1 + rw} | ${ry1 + rh}) bilden drei Ecken eines RECHTECKS PQRS. Wo muss der 4. Eckpunkt S liegen?`,
        questionEs: `Los tres puntos marcados P(${rx1} | ${ry1}), Q(${rx1 + rw} | ${ry1}) y R(${rx1 + rw} | ${ry1 + rh}) son tres esquinas de un RECHTECK (rectángulo) PQRS. ¿Dónde debe estar el 4° vértice S?`,
        svgSpec: {
          type: "coord_grid_clean",
          maxX: 10,
          maxY: 10,
          points: [
            { label: "P", x: rx1, y: ry1, color: "#0284c7" },
            { label: "Q", x: rx1 + rw, y: ry1, color: "#0284c7" },
            { label: "R", x: rx1 + rw, y: ry1 + rh, color: "#0284c7" }
          ]
        },
        options: [
          { textDe: `S (${rx1} | ${ry1 + rh})`, textEs: `S (${rx1} | ${ry1 + rh})`, correct: true },
          { textDe: `S (${ry1 + rh} | ${rx1})`, textEs: `S (${ry1 + rh} | ${rx1})`, correct: false },
          { textDe: `S (${rx1 + 1} | ${ry1 + rh})`, textEs: `S (${rx1 + 1} | ${ry1 + rh})`, correct: false },
          { textDe: `S (${rx1} | ${ry1 + rh - 1})`, textEs: `S (${rx1} | ${ry1 + rh - 1})`, correct: false }
        ],
        explanationDe: `Im Rechteck liegt S genau über P bei x = ${rx1} und auf derselben Höhe wie R bei y = ${ry1 + rh} → S(${rx1} | ${ry1 + rh})!`,
        explanationEs: `En el rectángulo, S queda sobre P (x = ${rx1}) y a la altura de R (y = ${ry1 + rh}) → S(${rx1} | ${ry1 + rh}).`
      },
      {
        id: "m13_dyn_kite_4th_" + stamp,
        world: "random_mix",
        topicDe: "🎲 4. Eckpunkt eines Drachens (Neu generiert)",
        questionDe: `Gegeben sind drei Ecken eines symmetrischen DRACHENS ABCD: A(${kx} | ${ky + khTop}), B(${kx - kw} | ${ky}) und C(${kx} | ${ky - khBot}). Wo liegt der 4. Eckpunkt D?`,
        questionEs: `Se dan tres vértices de un DRACHEN simétrico ABCD: A(${kx} | ${ky + khTop}), B(${kx - kw} | ${ky}) y C(${kx} | ${ky - khBot}). ¿Dónde queda el 4° vértice D?`,
        svgSpec: {
          type: "coord_grid_clean",
          maxX: 10,
          maxY: 10,
          points: [
            { label: "A", x: kx, y: ky + khTop, color: "#db2777" },
            { label: "B", x: kx - kw, y: ky, color: "#db2777" },
            { label: "C", x: kx, y: ky - khBot, color: "#db2777" }
          ]
        },
        options: [
          { textDe: `D (${kx + kw} | ${ky})`, textEs: `D (${kx + kw} | ${ky})`, correct: true },
          { textDe: `D (${ky} | ${kx + kw})`, textEs: `D (${ky} | ${kx + kw})`, correct: false },
          { textDe: `D (${kx + kw + 1} | ${ky})`, textEs: `D (${kx + kw + 1} | ${ky})`, correct: false },
          { textDe: `D (${kx + kw} | ${ky + 1})`, textEs: `D (${kx + kw} | ${ky + 1})`, correct: false }
        ],
        explanationDe: `Die Symmetrieachse durch A und C verläuft senkrecht bei x = ${kx}. Da B um ${kw} Einheiten links liegt, liegt D um ${kw} Einheiten rechts bei D(${kx + kw} | ${ky})!`,
        explanationEs: `El eje de simetría pasa por x = ${kx}. Como B está ${kw} unidades a la izquierda, D está ${kw} unidades a la derecha en D(${kx + kw} | ${ky}).`
      },
      {
        id: "m13_dyn_mirror_" + stamp,
        world: "random_mix",
        topicDe: "🎲 Spiegelung an Gerade g (Neu generiert)",
        questionDe: `Der Punkt P(${origPx} | ${origPy}) wird an der roten senkrechten Spiegelgeraden g (bei x = ${mirX}) gespiegelt. Welche Koordinaten hat der Bildpunkt P'?`,
        questionEs: `El punto P(${origPx} | ${origPy}) se refleja respecto al eje vertical rojo g (en x = ${mirX}). ¿Qué coordenadas tiene el punto reflejado P'?`,
        svgSpec: {
          type: "coord_grid_clean",
          maxX: 10,
          maxY: 10,
          mirrorLine: { x1: mirX, y1: 0, x2: mirX, y2: 10, label: "g" },
          points: [{ label: "P", x: origPx, y: origPy, color: "#0284c7" }]
        },
        options: [
          { textDe: `P' (${reflPx} | ${origPy})`, textEs: `P' (${reflPx} | ${origPy})`, correct: true },
          { textDe: `P' (${origPy} | ${reflPx})`, textEs: `P' (${origPy} | ${reflPx})`, correct: false },
          { textDe: `P' (${reflPx - 1} | ${origPy})`, textEs: `P' (${reflPx - 1} | ${origPy})`, correct: false },
          { textDe: `P' (${origPx} | ${mirX + (mirX - origPy)})`, textEs: `P' (${origPx} | ${mirX + (mirX - origPy)})`, correct: false }
        ],
        explanationDe: `P(${origPx} | ${origPy}) ist ${mirX - origPx} Einheiten links von x = ${mirX}. Der Spiegelpunkt liegt genauso weit rechts davon bei P'(${reflPx} | ${origPy})!`,
        explanationEs: `P(${origPx} | ${origPy}) está a ${mirX - origPx} unidades a la izquierda de x = ${mirX}, por lo que P' queda en P'(${reflPx} | ${origPy}).`
      },
      {
        id: "m13_dyn_tri_perim_" + stamp,
        world: "random_mix",
        topicDe: "🎲 Gleichschenkliges Dreieck (Neu generiert)",
        questionDe: `Ein gleichschenkliges Dreieck hat einen Gesamtumfang von ${totalPerim} cm. Die untere Seite (Basis) ist ${baseLen} cm lang. Wie lang ist jeder der beiden gleich langen Schenkel?`,
        questionEs: `Un triángulo isósceles (gleichschenkliges Dreieck) tiene un perímetro total de ${totalPerim} cm. La base inferior mide ${baseLen} cm. ¿Cuánto mide cada uno de los dos lados iguales?`,
        svgSpec: { type: "triangle_clean", kind: "isosceles_acute", sideLabels: ["?", `${baseLen} cm`, "?"] },
        options: [
          { textDe: `Je ${legLen} cm`, textEs: `${legLen} cm cada uno`, correct: true },
          { textDe: `Je ${legLen * 2} cm`, textEs: `${legLen * 2} cm cada uno`, correct: false },
          { textDe: `Je ${legLen - 2} cm`, textEs: `${legLen - 2} cm cada uno`, correct: false },
          { textDe: `Je ${legLen + 2} cm`, textEs: `${legLen + 2} cm cada uno`, correct: false }
        ],
        explanationDe: `${totalPerim} cm − ${baseLen} cm = ${2 * legLen} cm für beide Schenkel zusammen. ${2 * legLen} cm : 2 = ${legLen} cm pro Schenkel!`,
        explanationEs: `(${totalPerim} − ${baseLen}) : 2 = ${legLen} cm cada lado igual.`
      }
    ];

    const sampledFromBank = [...DATA.mikaNov13Arena.questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 12);

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

    // Selector de modo (Arcade vs. Lista completa)
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
          buildMikaQuestionDeck(true);
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
    buildMikaQuestionDeck(true);
  }

  function syncMikaSubViews() {
    const viewArcade = document.getElementById("mika-view-arcade");
    const viewList = document.getElementById("mika-view-list");

    if (viewArcade) viewArcade.hidden = state.mikaView !== "arcade";
    if (viewList) viewList.hidden = state.mikaView !== "list";
  }

  function buildMikaQuestionDeck(shuffleOrder = false) {
    const allQuestions = DATA.mikaNov13Arena.questions;
    let baseList = [];

    if (state.mikaOnlyErrors && state.mikaErrorIds.size > 0) {
      baseList = allQuestions.filter((q) => state.mikaErrorIds.has(q.id));
    } else if (state.mikaWorld === "random_mix") {
      baseList = generateMikaRandomQuestions();
    } else if (state.mikaWorld === "exam20") {
      // Seleccionamos 5 preguntas al azar de cada uno de los 4 mundos (= 20 preguntas balanceadas)
      const pickN = (w, n) =>
        allQuestions
          .filter((q) => q.world === w)
          .sort(() => Math.random() - 0.5)
          .slice(0, n);
      baseList = [
        ...pickN("polygone", 5),
        ...pickN("dreiecke", 5),
        ...pickN("vierecke", 5),
        ...pickN("koordinaten", 5)
      ].sort(() => Math.random() - 0.5);
    } else if (state.mikaWorld === "all") {
      baseList = [...allQuestions];
      if (shuffleOrder) baseList.sort(() => Math.random() - 0.5);
    } else {
      baseList = allQuestions.filter((q) => q.world === state.mikaWorld);
      if (shuffleOrder) baseList.sort(() => Math.random() - 0.5);
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

    const optsContainer = document.getElementById("mika-arcade-options");
    optsContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    const fb = document.getElementById("mika-arcade-feedback");
    fb.hidden = true;

    item.shuffledOptions.forEach((opt, oIdx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "mika-opt-btn";
      const showSub = opt.textEs && opt.textEs !== opt.textDe;
      btn.innerHTML = `
        <span class="mika-opt-letter">${letters[oIdx] || "•"}</span>
        <div>
          <div><strong>${opt.textDe}</strong></div>
          ${showSub ? `<small class="es-sub">${opt.textEs}</small>` : ""}
        </div>
      `;

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
          fb.innerHTML = `<strong>🎉 Richtig! (Combo ${state.mikaCombo}x 🔥)</strong> ${item.explanationDe}<span class="es-sub">${item.explanationEs}</span>`;
        } else {
          btn.classList.add("wrong-choice");
          state.mikaCombo = 0;
          state.mikaErrorIds.add(item.id);
          playMikaChime("err");
          registerMistake();
          fb.className = "feedback-banner err";
          fb.innerHTML = `<strong>✗ Erklärung:</strong> ${item.explanationDe}<span class="es-sub">${item.explanationEs}</span>`;
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
      fb.innerHTML = `<strong>${chosen.correct ? "✓ Richtig:" : "✗ Erklärung:"}</strong> ${item.explanationDe}<span class="es-sub">${item.explanationEs}</span>`;
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
      <h3>🏆 Mikas Zeugnis — Geometrie-Prüfung</h3>
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
            ? "👑 Unglaublich stark, Mika! Ohne einen einzigen Tipp gelöst!"
            : notaChile >= 5.5
            ? "🌟 Super Ergebnis! Klicke oben auf „🔁 Nur Fehler üben“, um dir auch noch die letzten Punkte zu sichern."
            : "💪 Gutes Training! Klicke oben auf „🔁 Nur Fehler üben“, um die kniffligen Aufgaben noch einmal zu trainieren."
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
        .map((opt, oIdx) => {
          const showSub = opt.textEs && opt.textEs !== opt.textDe;
          return `
          <button type="button" class="mika-opt-btn mika-list-opt-btn" data-qidx="${qIdx}" data-oidx="${oIdx}">
            <span class="mika-opt-letter">${letters[oIdx] || "•"}</span>
            <div>
              <div><strong>${opt.textDe}</strong></div>
              ${showSub ? `<small class="es-sub">${opt.textEs}</small>` : ""}
            </div>
          </button>
        `;
        })
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
          fb.innerHTML = `<strong>✗ Erklärung:</strong> ${qItem.explanationDe}<span class="es-sub">${qItem.explanationEs}</span>`;
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
      <h3>📝 Auswertung — Mikas Geometrie-Prüfung</h3>
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
