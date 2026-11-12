// Datos pedagógicos basados 100% en el cuaderno de 5° Básico (5. Klasse) — Frau Ana María López Güell
// Temas: 1) Die Linie (5. Okt) · 2) Beziehung zwischen Linien (6.–13. Okt) · 3) Winkel: Zeichnen, Messen, Nennen, Sortieren (19.–23. Okt)

window.GEOMETRY_DATA = {
  // 1. Tabla de vocabulario y conceptos para el Spickzettel y el Entrenador tipo tabla (22 conceptos clave)
  vocabItems: [
    // Bloque 1: Die Linie (5. Oktober)
    {
      id: "linie_offen",
      block: "1. Die Linie (Tipos de línea)",
      deutsch: "offene Linie",
      DeutschAlt: ["offene linie", "offen"],
      symbol: "— / ~",
      merkmalDe: "Anfang und Ende treffen sich nicht",
      merkmalEs: "Sus extremos no se juntan (ej. recta, curva, espiral)",
      spanisch: "línea abierta",
      spanischAlt: ["linea abierta", "abierta"]
    },
    {
      id: "linie_geschlossen",
      block: "1. Die Linie (Tipos de línea)",
      deutsch: "geschlossene Linie",
      DeutschAlt: ["geschlossene linie", "geschlossen"],
      symbol: "◯",
      merkmalDe: "Hat Innenbereich, Außenbereich und Rand (Grenze)",
      merkmalEs: "Tiene región interior, región exterior y frontera",
      spanisch: "línea cerrada",
      spanischAlt: ["linea cerrada", "cerrada"]
    },
    {
      id: "kurve",
      block: "1. Die Linie (Tipos de línea)",
      deutsch: "die Kurve",
      DeutschAlt: ["kurve", "die kurve", "gekrümmte linie"],
      symbol: "〰️ / 🌀",
      merkmalDe: "Nicht gerade (z. B. Spirale oder Wellenlinie)",
      merkmalEs: "No es derecha (ej. curva o espiral)",
      spanisch: "la curva",
      spanischAlt: ["curva", "la curva", "linea curva", "línea curva"]
    },
    {
      id: "gerade",
      block: "1. Die Linie (Tipos de línea)",
      deutsch: "die Gerade",
      DeutschAlt: ["gerade", "die gerade"],
      symbol: "⟷ (AB)",
      merkmalDe: "Kein Anfangspunkt und kein Endpunkt (unendlich)",
      merkmalEs: "Sin punto de inicio ni fin (flechas en ambos lados)",
      spanisch: "la recta",
      spanischAlt: ["recta", "la recta", "linea recta", "línea recta"]
    },
    {
      id: "strahl",
      block: "1. Die Linie (Tipos de línea)",
      deutsch: "der Strahl",
      DeutschAlt: ["strahl", "der strahl", "halbgerade", "die halbgerade"],
      symbol: "⟼ (AB)",
      merkmalDe: "Ein Anfangspunkt, aber kein Endpunkt (Bonus: 1. Buchstabe = Start!)",
      merkmalEs: "Tiene inicio pero no fin (Bonus: 1ª letra = origen)",
      spanisch: "el rayo / semirrecta",
      spanischAlt: ["rayo", "el rayo", "semirrecta", "la semirrecta", "rayo o semirrecta"]
    },
    {
      id: "strecke",
      block: "1. Die Linie (Tipos de línea)",
      deutsch: "die Strecke",
      DeutschAlt: ["strecke", "die strecke"],
      symbol: "I—I (AB)",
      merkmalDe: "Hat Anfangspunkt und Endpunkt (messbare Länge)",
      merkmalEs: "Tiene inicio y fin (topes en ambos lados, se puede medir)",
      spanisch: "el segmento",
      spanischAlt: ["segmento", "el segmento", "trazo", "el trazo"]
    },
    // Bloque 2: Nach dem Boden (Según el suelo - 5. Oktober)
    {
      id: "waagerecht",
      block: "2. Lage zum Boden (Según el suelo)",
      deutsch: "waagerecht / horizontal",
      DeutschAlt: ["waagerecht", "horizontal", "waagrecht"],
      symbol: "☀️ ───",
      merkmalDe: "Parallel zum Boden / Horizont",
      merkmalEs: "Paralela al suelo o al horizonte",
      spanisch: "horizontal",
      spanischAlt: ["horizontal"]
    },
    {
      id: "senkrecht_boden",
      block: "2. Lage zum Boden (Según el suelo)",
      deutsch: "senkrecht / vertikal",
      DeutschAlt: ["senkrecht", "vertikal"],
      symbol: "⊥ zum Boden",
      merkmalDe: "Steht im 90°-Winkel zum Boden (Erde-Zeichnung)",
      merkmalEs: "Forma 90° con el suelo (como una persona de pie en la Tierra)",
      spanisch: "vertical",
      spanischAlt: ["vertical", "perpendicular al suelo"]
    },
    {
      id: "schraeg",
      block: "2. Lage zum Boden (Según el suelo)",
      deutsch: "schräg",
      DeutschAlt: ["schräg", "schraeg"],
      symbol: "╱",
      merkmalDe: "Geneigt zum Boden (weder waagerecht noch senkrecht)",
      merkmalEs: "Inclinada respecto al suelo (ni horizontal ni vertical)",
      spanisch: "oblicua / inclinada",
      spanischAlt: ["oblicua", "inclinada", "oblicuo"]
    },
    // Bloque 3: Beziehung zwischen Linien (6. – 13. Oktober)
    {
      id: "sekanten",
      block: "3. Beziehung zwischen Linien (Relación entre líneas)",
      deutsch: "die Sekanten",
      DeutschAlt: ["sekanten", "die sekanten", "sekante", "sich schneidende linien", "sich schneidende geraden"],
      symbol: "✕",
      merkmalDe: "Zwei Linien, die sich in einem Punkt schneiden",
      merkmalEs: "Dos líneas que SÍ se intersecan (se cortan en un punto)",
      spanisch: "las secantes",
      spanischAlt: ["secantes", "las secantes", "lineas secantes", "líneas secantes"]
    },
    {
      id: "senkrechte_linien",
      block: "3. Beziehung zwischen Linien (Relación entre líneas)",
      deutsch: "senkrechte Linien",
      DeutschAlt: ["senkrechte linien", "senkrecht", "senkrechte", "orthogonal"],
      symbol: "g ⊥ h (90°)",
      merkmalDe: "Besondere Sekanten: schneiden sich im rechten Winkel (90°)",
      merkmalEs: "Secante especial: se cortan formando un ángulo recto (90°)",
      spanisch: "líneas perpendiculares",
      spanischAlt: ["perpendiculares", "lineas perpendiculares", "líneas perpendiculares", "perpendicular"]
    },
    {
      id: "parallelen",
      block: "3. Beziehung zwischen Linien (Relación entre líneas)",
      deutsch: "die Parallelen",
      DeutschAlt: ["parallelen", "die parallelen", "parallel", "parallele linien"],
      symbol: "g ∥ h",
      merkmalDe: "Schneiden sich nie, immer gleicher Abstand",
      merkmalEs: "NO se intersecan nunca y mantienen la misma distancia",
      spanisch: "las paralelas",
      spanischAlt: ["paralelas", "las paralelas", "lineas paralelas", "líneas paralelas"]
    },
    // Bloque 4: Winkel & Sortierung (19. – 23. Oktober)
    {
      id: "scheitelpunkt",
      block: "4. Winkel-Grundbegriffe (Partes del ángulo)",
      deutsch: "der Scheitelpunkt",
      DeutschAlt: ["scheitelpunkt", "der scheitelpunkt", "scheitel"],
      symbol: "∡ D A̲ L (Mitte)",
      merkmalDe: "Ursprung der beiden Strahlen (steht bei ∡ABC immer in der Mitte!)",
      merkmalEs: "Punto donde nacen los dos rayos (¡va SIEMPRE al medio en ∡ABC!)",
      spanisch: "el vértice",
      spanischAlt: ["vertice", "vértice", "el vertice", "el vértice"]
    },
    {
      id: "schenkel",
      block: "4. Winkel-Grundbegriffe (Partes del ángulo)",
      deutsch: "die Schenkel",
      DeutschAlt: ["schenkel", "die schenkel", "der schenkel"],
      symbol: "1. & 2. Strahl",
      merkmalDe: "Die zwei Strahlen, die den Winkel begrenzen",
      merkmalEs: "Los dos rayos (lados) que forman el ángulo",
      spanisch: "los lados del ángulo",
      spanischAlt: ["lados", "los lados", "rayos", "lados del angulo", "lados del ángulo"]
    },
    {
      id: "nullwinkel",
      block: "5. Winkelarten / Sortierung (Clasificación de ángulos)",
      deutsch: "Nullwinkel",
      DeutschAlt: ["nullwinkel", "der nullwinkel", "0-winkel", "0 winkel"],
      symbol: "0°",
      merkmalDe: "Genau 0° (keine Drehung)",
      merkmalEs: "Exactamente 0° (sin abertura)",
      spanisch: "ángulo nulo",
      spanischAlt: ["angulo nulo", "ángulo nulo", "nulo"]
    },
    {
      id: "spitzer_winkel",
      block: "5. Winkelarten / Sortierung (Clasificación de ángulos)",
      deutsch: "Spitzer Winkel",
      DeutschAlt: ["spitzer winkel", "spitzer", "spitzwinkel", "spitz"],
      symbol: "1° – 89°",
      merkmalDe: "Größer als 0° und kleiner als 90°",
      merkmalEs: "Entre 1° y 89° (menor que un ángulo recto)",
      spanisch: "ángulo agudo",
      spanischAlt: ["angulo agudo", "ángulo agudo", "agudo"]
    },
    {
      id: "rechter_winkel",
      block: "5. Winkelarten / Sortierung (Clasificación de ángulos)",
      deutsch: "Rechter Winkel",
      DeutschAlt: ["rechter winkel", "rechter", "rechtwinkel", "recht"],
      symbol: "90° (⦜)",
      merkmalDe: "Genau 90° (senkrechte Schenkel, Bogen mit Punkt)",
      merkmalEs: "Exactamente 90° (rayos perpendiculares)",
      spanisch: "ángulo recto",
      spanischAlt: ["angulo recto", "ángulo recto", "recto"]
    },
    {
      id: "stumpfer_winkel",
      block: "5. Winkelarten / Sortierung (Clasificación de ángulos)",
      deutsch: "Stumpfer Winkel",
      DeutschAlt: ["stumpfer winkel", "stumpfer", "stumpfwinkel", "stumpf"],
      symbol: "91° – 179°",
      merkmalDe: "Größer als 90° und kleiner als 180°",
      merkmalEs: "Entre 91° y 179° (más abierto que 90°, menos que 180°)",
      spanisch: "ángulo obtuso",
      spanischAlt: ["angulo obtuso", "ángulo obtuso", "obtuso"]
    },
    {
      id: "gestreckter_winkel",
      block: "5. Winkelarten / Sortierung (Clasificación de ángulos)",
      deutsch: "Gestreckter Winkel",
      DeutschAlt: ["gestreckter winkel", "gestreckter", "gestreckt"],
      symbol: "180°",
      merkmalDe: "Genau 180° (halbe Drehung, bildet eine Gerade)",
      merkmalEs: "Exactamente 180° (media vuelta, forma una línea recta)",
      spanisch: "ángulo extendido",
      spanischAlt: ["angulo extendido", "ángulo extendido", "extendido", "llano", "angulo llano", "ángulo llano"]
    },
    {
      id: "ueberstumpfer_winkel",
      block: "5. Winkelarten / Sortierung (Clasificación de ángulos)",
      deutsch: "Überstumpfer Winkel",
      DeutschAlt: ["überstumpfer winkel", "ueberstumpfer winkel", "überstumpfer", "ueberstumpfer", "überstumpf"],
      symbol: "181° – 359°",
      merkmalDe: "Größer als 180° und kleiner als 360°",
      merkmalEs: "Entre 181° y 359° (mayor que media vuelta)",
      spanisch: "ángulo cóncavo / entrante (convexo en apunte)",
      spanischAlt: ["convexo", "concavo", "cóncavo", "entrante", "angulo convexo", "ángulo convexo", "angulo concavo", "ángulo cóncavo"]
    },
    {
      id: "voller_winkel",
      block: "5. Winkelarten / Sortierung (Clasificación de ángulos)",
      deutsch: "Voller Winkel",
      DeutschAlt: ["voller winkel", "vollwinkel", "voller", "voll"],
      symbol: "360°",
      merkmalDe: "Genau 360° (eine komplette Drehung / Kreis)",
      merkmalEs: "Exactamente 360° (una vuelta completa)",
      spanisch: "ángulo completo",
      spanischAlt: ["angulo completo", "ángulo completo", "completo"]
    }
  ],

  // 2. Ejercicios reales del cuaderno de pares de ángulos ∡ABC y ∡CBA = 360° (IMG_7607, IMG_7608, IMG_7609, IMG_7610)
  // Convención del cuaderno:
  // En cada figura hay un vértice V y dos puntos en los rayos: P1 y P2.
  // yendo en sentido antihorario (gegen den Uhrzeigersinn ↺) de P1 -> V -> P2 se barre `deg1` (∡ P1 V P2).
  // yendo en sentido antihorario (↺) de P2 -> V -> P1 se barre `deg2 = 360 - deg1` (∡ P2 V P1).
  notebookAnglePairs: [
    {
      id: "nb_dal",
      source: "Heft · Montag, 19. Oktober",
      vertex: "A",
      p1: "D",
      p2: "L",
      ray1Deg: 270, // D hacia abajo
      deg1: 45,     // ∡DAL = 45° (antihorario de 270° a 315°)
      deg2: 315,    // ∡LAD = 315°
      given: 1,     // te dan 45° y debes hallar 315° (o ambos)
      noteDe: "Beispiel aus dem Heft: ∡DAL = 45° (grün) und außen herum ∡LAD = 315° (rot gepunktet).",
      noteEs: "Ejemplo del cuaderno (19 oct): ∡DAL = 45° y dando la vuelta antihoraria ∡LAD = 315°."
    },
    {
      id: "nb_jkl_30",
      source: "Heft · Mittwoch, 21. Oktober (Beispiel)",
      vertex: "K",
      p1: "J",
      p2: "L",
      ray1Deg: 0,
      deg1: 30,     // ∡JKL = 30°
      deg2: 330,    // ∡LKJ = 330°
      given: 1,
      noteDe: "Vom Strahl KJ gegen den Uhrzeigersinn zu KL sind es 30° (∡JKL = 30°, ∡LKJ = 330°).",
      noteEs: "Del rayo KJ en sentido antihorario a KL hay 30° (∡JKL = 30°, ∡LKJ = 330°)."
    },
    {
      id: "nb_lmn_120",
      source: "Heft · Mittwoch, 21. Oktober (#1)",
      vertex: "M",
      p1: "L",
      p2: "N",
      ray1Deg: 0,
      deg1: 120,    // ∡LMN = 120°
      deg2: 240,    // ∡NML = 240°
      given: 1,
      noteDe: "Übung 1: ∡LMN = 120° (stumpfer Winkel) und ∡NML = 360° − 120° = 240° (überstumpfer Winkel).",
      noteEs: "Ejercicio 1: ∡LMN = 120° (obtuso) y ∡NML = 360° − 120° = 240°."
    },
    {
      id: "nb_cdf_80",
      source: "Heft · Mittwoch, 21. Oktober (#2)",
      vertex: "D",
      p1: "C",
      p2: "F",
      ray1Deg: 0,
      deg1: 80,     // ∡CDF = 80°
      deg2: 280,    // ∡FDC = 280°
      given: 1,
      noteDe: "Übung 2: ∡CDF = 80° (spitzer Winkel) und ∡FDC = 360° − 80° = 280°.",
      noteEs: "Ejercicio 2: ∡CDF = 80° (agudo) y ∡FDC = 360° − 80° = 280°."
    },
    {
      id: "nb_hij_200",
      source: "Heft · Mittwoch, 21. Oktober (#3)",
      vertex: "I",
      p1: "H",
      p2: "J",
      ray1Deg: 0,
      deg1: 200,    // ∡HIJ = 200° (va por arriba antihorario hasta 200°)
      deg2: 160,    // ∡JIH = 160° (va por abajo antihorario de 200° a 360°)
      given: 2,
      noteDe: "Übung 3 (Achtung Richtung!): ∡HIJ = 200° (oben herum ↺) und ∡JIH = 160° (unten herum ↺).",
      noteEs: "Ejercicio 3 (¡Ojo con el sentido antihorario!): ∡HIJ = 200° (por arriba ↺) y ∡JIH = 160° (por abajo ↺)."
    },
    {
      id: "nb_fgh_300",
      source: "Heft · Mittwoch, 21. Oktober (#4)",
      vertex: "G",
      p1: "F",
      p2: "H",
      ray1Deg: 0,
      deg1: 60,     // En el dibujo HGF = 60° y FGH = 300° (con F a la derecha y H arriba-derecha)
      deg2: 300,
      given: 1,
      noteDe: "Übung 4: Ein Winkel misst 60° (spitzer Winkel) und der Gegenwinkel 300° (zusammen 360°).",
      noteEs: "Ejercicio 4: El ángulo interior mide 60° (agudo) y el exterior 300° (suman 360°)."
    },
    {
      id: "nb_def_15",
      source: "Heft · Mittwoch, 21. Oktober (a)",
      vertex: "E",
      p1: "D",
      p2: "F",
      ray1Deg: 5,
      deg1: 15,     // ∡DEF = 15°
      deg2: 345,    // ∡FED = 345°
      given: 2,     // En el cuaderno dan 345° y restan 360 - 345 = 15°
      noteDe: "Aufgabe a): Gegeben ist 345°. Rechnung: 360° − 345° = 15° (Spitzer Winkel).",
      noteEs: "Ejercicio a): Te dan el arco exterior de 345°. Restas 360° − 345° = 15° (Spitzer Winkel)."
    },
    {
      id: "nb_jkl_205",
      source: "Heft · Mittwoch, 21. Oktober (b)",
      vertex: "K",
      p1: "J",
      p2: "L",
      ray1Deg: 0,
      deg1: 155,
      deg2: 205,
      given: 1,
      noteDe: "Aufgabe b): 155° (Stumpfer Winkel) und 360° − 155° = 205° (Überstumpfer Winkel).",
      noteEs: "Ejercicio b): 155° (Stumpfer Winkel) y 360° − 155° = 205° (Überstumpfer Winkel)."
    },
    {
      id: "nb_ijl_95",
      source: "Heft · Mittwoch, 21. Oktober (d)",
      vertex: "J",
      p1: "I",
      p2: "L",
      ray1Deg: 0,
      deg1: 95,
      deg2: 265,
      given: 2,
      noteDe: "Aufgabe d): 360° − 265° = 95° (knapp größer als 90°, also ein Stumpfer Winkel!).",
      noteEs: "Ejercicio d): 360° − 265° = 95° (apenas mayor que 90°, ¡así que es Stumpfer Winkel!)."
    },
    {
      id: "nb_mko_60",
      source: "Heft · Freitag, 23. Oktober (#1)",
      vertex: "K",
      p1: "M",
      p2: "O",
      ray1Deg: 0,
      deg1: 60,     // ∡MKO = 60°
      deg2: 300,    // ∡OKM = 300°
      given: 1,
      noteDe: "Freitag #1: ∡MKO = 60°, ∡OKM = 300° → Sortierung: Spitzer Winkel.",
      noteEs: "Viernes #1: ∡MKO = 60°, ∡OKM = 300° → Clasificación: Spitzer Winkel."
    },
    {
      id: "nb_lam_155",
      source: "Heft · Freitag, 23. Oktober (#2)",
      vertex: "A",
      p1: "L",
      p2: "M",
      ray1Deg: 0,
      deg1: 155,    // ∡LAM = 155°
      deg2: 205,    // ∡MAL = 205°
      given: 1,
      noteDe: "Freitag #2: ∡LAM = 155°, ∡MAL = 205° → Sortierung: Stumpfer Winkel.",
      noteEs: "Viernes #2: ∡LAM = 155°, ∡MAL = 205° → Clasificación: Stumpfer Winkel."
    },
    {
      id: "nb_ald_90",
      source: "Heft · Freitag, 23. Oktober (#3)",
      vertex: "L",
      p1: "A",
      p2: "D",
      ray1Deg: 0,
      deg1: 90,     // ∡ALD = 90°
      deg2: 270,    // ∡DLA = 270°
      given: 1,
      noteDe: "Freitag #3: ∡ALD = 90°, ∡DLA = 270° → Sortierung: Rechter Winkel.",
      noteEs: "Viernes #3: ∡ALD = 90°, ∡DLA = 270° → Clasificación: Rechter Winkel."
    },
    {
      id: "nb_wal_40",
      source: "Heft · Freitag, 23. Oktober (#4)",
      vertex: "A",
      p1: "W",
      p2: "L",
      ray1Deg: 0,
      deg1: 40,     // ∡WAL = 40°
      deg2: 320,    // ∡LAW = 320°
      given: 1,
      noteDe: "Freitag #4: ∡WAL = 40°, ∡LAW = 320° → Sortierung: Spitzer Winkel.",
      noteEs: "Viernes #4: ∡WAL = 40°, ∡LAW = 320° → Clasificación: Spitzer Winkel."
    },
    {
      id: "nb_ter_100",
      source: "Heft · Freitag, 23. Oktober (#5)",
      vertex: "E",
      p1: "T",
      p2: "R",
      ray1Deg: 0,
      deg1: 100,    // ∡TER = 100°
      deg2: 260,    // ∡RET = 260°
      given: 1,
      noteDe: "Freitag #5: ∡TER = 100°, ∡RET = 260° → Sortierung: Stumpfer Winkel.",
      noteEs: "Viernes #5: ∡TER = 100°, ∡RET = 260° → Clasificación: Stumpfer Winkel."
    },
    {
      id: "nb_msa_110",
      source: "Heft · Freitag, 23. Oktober (#6)",
      vertex: "S",
      p1: "M",
      p2: "A",
      ray1Deg: 0,
      deg1: 110,    // ∡MSA = 110°
      deg2: 250,    // ∡ASM = 250°
      given: 1,
      noteDe: "Freitag #6: ∡MSA = 110°, ∡ASM = 250° → Sortierung: Stumpfer Winkel.",
      noteEs: "Viernes #6: ∡MSA = 110°, ∡ASM = 250° → Clasificación: Stumpfer Winkel."
    },
    {
      id: "nb_bkm_255",
      source: "Heft · Freitag, 23. Oktober (#7)",
      vertex: "K",
      p1: "M",
      p2: "B",
      ray1Deg: 0,
      deg1: 105,    // ∡MKB = 105°
      deg2: 255,    // ∡BKM = 255°
      given: 1,
      noteDe: "Freitag #7: ∡MKB = 105° und ∡BKM = 255° (360° − 105° = 255°).",
      noteEs: "Viernes #7: ∡MKB = 105° y ∡BKM = 255° (360° − 105° = 255°)."
    },
    {
      id: "nb_tos_310",
      source: "Heft · Freitag, 23. Oktober (#8)",
      vertex: "O",
      p1: "T",
      p2: "S",
      ray1Deg: 220,
      deg1: 140,    // En el cuaderno: ∡TOS = 310° y ∡SOT = 50°
      deg2: 220,
      // Ajustemos exactamente a 310° y 50°:
      customDeg1: 310,
      customDeg2: 50,
      given: 1,
      noteDe: "Freitag #8: ∡TOS = 310° (überstumpfer Winkel) und ∡SOT = 50° (spitzer Winkel).",
      noteEs: "Viernes #8: ∡TOS = 310° y ∡SOT = 50° (suman 360°)."
    },
    {
      id: "nb_pcn_200",
      source: "Heft · Freitag, 23. Oktober (#9)",
      vertex: "C",
      p1: "N",
      p2: "P",
      ray1Deg: 0,
      deg1: 160,    // ∡NCP = 160°
      deg2: 200,    // ∡PCN = 200°
      given: 1,
      noteDe: "Freitag #9: ∡NCP = 160° und ∡PCN = 200°.",
      noteEs: "Viernes #9: ∡NCP = 160° y ∡PCN = 200°."
    },
    {
      id: "nb_fcj_350",
      source: "Heft · Freitag, 23. Oktober (#10)",
      vertex: "C",
      p1: "F",
      p2: "J",
      ray1Deg: 0,
      deg1: 350,    // ∡FCJ = 350°
      deg2: 10,     // ∡JCF = 10°
      given: 1,
      noteDe: "Freitag #10: ∡FCJ = 350° (fast ein voller Kreis!) und ∡JCF = 10° (spitzer Winkel).",
      noteEs: "Viernes #10: ∡FCJ = 350° (¡casi vuelta completa!) y ∡JCF = 10° (agudo)."
    }
  ],

  // 3. Desafíos del Detective de Líneas y Figuras (Tab 2)
  detectiveTasks: [
    // Submodo 1: Figura compuesta del cuaderno (Donnerstag, 13. Oktober - J, L, M, K)
    {
      id: "det_13okt_jl",
      category: "figure_symbols",
      titleDe: "Heft-Übung (13. Okt): Linie zwischen J und L",
      titleEs: "Ejercicio del cuaderno (13 oct): Línea entre J y L",
      figureType: "notebook_jlmk",
      highlightPart: "JL",
      questionDe: "Schau dir die markierte Linie von Punkt J über Punkt L an: Bei J ist ein Querstrich (Startpunkt), hinter L geht ein Pfeil weiter. Welches Symbol und welcher Begriff passen?",
      questionEs: "Mira la línea marcada desde el punto J pasando por L: en J tiene un tope (inicio) y después de L sigue con flecha. ¿Qué símbolo y nombre corresponden?",
      options: [
        { id: "a", labelDe: "⟼ JL  — der Strahl (beginnt bei J)", labelEs: "Rayo que empieza en J", correct: true },
        { id: "b", labelDe: "⟼ LJ  — der Strahl (beginnt bei L)", labelEs: "Rayo que empieza en L", correct: false },
        { id: "c", labelDe: "I—I JL — die Strecke", labelEs: "Segmento JL", correct: false },
        { id: "d", labelDe: "⟷ JL  — die Gerade", labelEs: "Recta JL", correct: false }
      ],
      explanationDe: "Richtig! Bei J ist der Anfangspunkt (Querstrich) und bei L der Pfeil → es ist ein Strahl (⟼ JL).",
      explanationEs: "¡Exacto! En J está el tope de inicio y en L la flecha → es un rayo (der Strahl) y se escribe primero la letra de inicio: JL."
    },
    {
      id: "det_13okt_lm",
      category: "figure_symbols",
      titleDe: "Heft-Übung (13. Okt): Linie zwischen L und M",
      titleEs: "Ejercicio del cuaderno (13 oct): Línea entre L und M",
      figureType: "notebook_jlmk",
      highlightPart: "LM",
      questionDe: "Die markierte Linie zwischen L und M hat sowohl bei L als auch bei M einen Endstrich (keinen Pfeil). Wie nennt man sie?",
      questionEs: "La línea marcada entre L y M tiene tope tanto en L como en M (sin flechas). ¿Cómo se llama y escribe?",
      options: [
        { id: "a", labelDe: "I—I LM — die Strecke", labelEs: "El segmento LM", correct: true },
        { id: "b", labelDe: "⟷ LM — die Gerade", labelEs: "La recta LM", correct: false },
        { id: "c", labelDe: "⟼ LM — der Strahl", labelEs: "El rayo LM", correct: false },
        { id: "d", labelDe: "die Kurve LM", labelEs: "La curva LM", correct: false }
      ],
      explanationDe: "Super! Anfangspunkt L und Endpunkt M mit zwei Begrenzungsstrichen → die Strecke LM.",
      explanationEs: "¡Muy bien! Tiene punto de inicio L y punto final M con dos topes → die Strecke (el segmento) LM."
    },
    {
      id: "det_13okt_km",
      category: "figure_symbols",
      titleDe: "Heft-Übung (13. Okt): Linie durch K und M",
      titleEs: "Ejercicio del cuaderno (13 oct): Línea por K y M",
      figureType: "notebook_jlmk",
      highlightPart: "KM",
      questionDe: "Die Linie durch K und M hat an beiden Enden einen Pfeil (geht unendlich weiter). Was ist das?",
      questionEs: "La línea que pasa por K y M tiene flecha en ambos extremos (sigue infinitamente). ¿Qué es?",
      options: [
        { id: "a", labelDe: "⟷ KM — die Gerade", labelEs: "La recta KM", correct: true },
        { id: "b", labelDe: "⟼ KM — der Strahl", labelEs: "El rayo KM", correct: false },
        { id: "c", labelDe: "I—I KM — die Strecke", labelEs: "El segmento KM", correct: false },
        { id: "d", labelDe: "geschlossene Linie", labelEs: "Línea cerrada", correct: false }
      ],
      explanationDe: "Perfekt! Pfeile an beiden Seiten bedeuten: kein Anfang, kein Ende → die Gerade (⟷ KM).",
      explanationEs: "¡Perfecto! Flechas en ambos lados significan sin principio ni fin → die Gerade (la recta KM)."
    },
    {
      id: "det_13okt_mj",
      category: "figure_symbols",
      titleDe: "Heft-Übung (13. Okt): ★ Bonus — Linie von M nach J",
      titleEs: "Ejercicio del cuaderno (13 oct): ★ Bonus — Línea de M hacia J",
      figureType: "notebook_jlmk",
      highlightPart: "MJ",
      questionDe: "★ BONUS-FRAGE: Diese Linie startet mit einem Strich bei M und hat den Pfeil oben bei J. Wie schreibt man das Symbol richtig auf?",
      questionEs: "★ PREGUNTA BONUS: Esta línea parte con un tope en M y tiene la flecha arriba en J. ¿Cómo se escribe correctamente su símbolo?",
      options: [
        { id: "a", labelDe: "⟼ MJ (Startpunkt M zuerst, Pfeil im Symbol nach rechts)", labelEs: "⟼ MJ (primero el punto de inicio M)", correct: true },
        { id: "b", labelDe: "⟼ JM (weil J weiter oben liegt)", labelEs: "⟼ JM (porque J está más arriba)", correct: false },
        { id: "c", labelDe: "I—I MJ (Strecke)", labelEs: "I—I MJ (segmento)", correct: false },
        { id: "d", labelDe: "⟷ MJ (Gerade)", labelEs: "⟷ MJ (recta)", correct: false }
      ],
      explanationDe: "Stark! Wie im lila Bonus-Kasten im Heft: Beim Strahl steht IMMER der Anfangspunkt (M) zuerst → ⟼ MJ.",
      explanationEs: "¡Excelente! Tal como dice el recuadro morado 'Bonus' del cuaderno: en un Strahl SIEMPRE se escribe primero la letra donde empieza (M) → ⟼ MJ."
    },
    // Submodo 2: Clasificación triple (5. Oktober)
    {
      id: "det_5okt_strahl_schraeg",
      category: "line_classification",
      titleDe: "Heft-Beispiel (5. Okt): 3 Eigenschaften erkennen",
      titleEs: "Ejemplo del cuaderno (5 oct): Reconocer 3 propiedades",
      figureType: "slanted_ray",
      questionDe: "Betrachte diese Linie (wie unten links auf der Seite vom 5. Oktober): Welche 3 Eigenschaften treffen alle zu?",
      questionEs: "Observa esta línea (como la de abajo a la izquierda en la página del 5 de octubre): ¿Cuáles 3 propiedades cumple?",
      options: [
        { id: "a", labelDe: "offene Linie · der Strahl · schräg (zum Boden)", labelEs: "abierta · rayo · oblicua (según el suelo)", correct: true },
        { id: "b", labelDe: "offene Linie · die Strecke · waagerecht", labelEs: "abierta · segmento · horizontal", correct: false },
        { id: "c", labelDe: "geschlossene Linie · die Gerade · senkrecht", labelEs: "cerrada · recta · vertical", correct: false },
        { id: "d", labelDe: "offene Linie · die Kurve · schräg", labelEs: "abierta · curva · oblicua", correct: false }
      ],
      explanationDe: "Genau wie im Heft notiert: gerade → Strahl (Rayo), schräg (oblicua), offen (abierta)!",
      explanationEs: "¡Tal como está anotado en el cuaderno: recta → rayo (Strahl), oblicua (schräg), abierta (offene Linie)!"
    },
    {
      id: "det_5okt_geschlossen",
      category: "line_classification",
      titleDe: "Heft (5. Okt): Geschlossene Linie & Bereiche",
      titleEs: "Cuaderno (5 oct): Línea cerrada y regiones",
      figureType: "closed_regions",
      questionDe: "Eine geschlossene Linie teilt die Fläche in drei Teile (lila Punkte drinnen, grüne Punkte draußen, und die Linie selbst). Wie heißen diese 3 Teile?",
      questionEs: "Una línea cerrada divide el plano en tres partes (puntos morados adentro, puntos verdes afuera y la línea misma). ¿Cómo se llaman?",
      options: [
        { id: "a", labelDe: "Innenbereich (región interior), Außenbereich (región exterior) und Rand/Grenze (frontera)", labelEs: "Región interior, región exterior y frontera", correct: true },
        { id: "b", labelDe: "Scheitelpunkt, 1. Schenkel und 2. Schenkel", labelEs: "Vértice, 1er lado y 2do lado", correct: false },
        { id: "c", labelDe: "Gerade, Strahl und Strecke", labelEs: "Recta, rayo y segmento", correct: false },
        { id: "d", labelDe: "Waagerecht, senkrecht und schräg", labelEs: "Horizontal, vertical y oblicua", correct: false }
      ],
      explanationDe: "Richtig! Jede geschlossene Linie hat einen Innenbereich, einen Außenbereich und die Grenze (Rand / frontera).",
      explanationEs: "¡Correcto! Toda línea cerrada tiene región interior (Innenbereich), región exterior (Außenbereich) y frontera (Rand/Grenze)."
    },
    {
      id: "det_5okt_boden",
      category: "line_classification",
      titleDe: "Heft (5. Okt): Lage zum Boden (Horizont & Erde)",
      titleEs: "Cuaderno (5 oct): Posición según el suelo (Horizonte y Tierra)",
      figureType: "ground_positions",
      questionDe: "Ordne die drei Linien A (wie der Horizont mit der Sonne), B (wie ein Mensch, der aufrecht auf dem Boden steht) und C (geneigt) richtig zu:",
      questionEs: "Asocia las tres líneas A (como el horizonte con el sol), B (como una persona parada derecha sobre el suelo) y C (inclinada):",
      options: [
        { id: "a", labelDe: "A = waagerecht (horizontal) · B = senkrecht (vertical) · C = schräg (oblicua)", labelEs: "A = horizontal · B = vertical · C = oblicua", correct: true },
        { id: "b", labelDe: "A = senkrecht · B = waagerecht · C = schräg", labelEs: "A = vertical · B = horizontal · C = oblicua", correct: false },
        { id: "c", labelDe: "A = schräg · B = parallel · C = waagerecht", labelEs: "A = oblicua · B = paralela · C = horizontal", correct: false },
        { id: "d", labelDe: "A = Kurve · B = Strahl · C = Strecke", labelEs: "A = curva · B = rayo · C = segmento", correct: false }
      ],
      explanationDe: "Klasse! Waagerecht = horizontal wie der Horizont, senkrecht = 90° zum Boden, schräg = geneigt.",
      explanationEs: "¡Genial! Waagerecht = horizontal como el horizonte, senkrecht = 90° respecto al suelo (vertical), schräg = oblicua."
    },
    // Submodo 3: Relación entre líneas (6., 8. y 13. Oktober)
    {
      id: "det_6okt_sekanten_parallelen",
      category: "line_relations",
      titleDe: "Heft (6. Okt): Beziehung zwischen Linien",
      titleEs: "Cuaderno (6 oct): Relación entre líneas",
      figureType: "relations_overview",
      questionDe: "Zwei Geraden schneiden sich in einem Punkt, aber NICHT im 90°-Winkel (Bild 1). Und im Bild 2 bilden sie genau 90°. Wie heißen sie im Heft?",
      questionEs: "Dos rectas se intersecan en un punto pero NO en 90° (Imagen 1). Y en la Imagen 2 forman exactamente 90°. ¿Cómo se llaman en el cuaderno?",
      options: [
        { id: "a", labelDe: "Bild 1: Sekanten (secantes) · Bild 2: Besondere Sekante → Senkrechte Linien (perpendiculares, 90°)", labelEs: "Img 1: Secantes · Img 2: Secante especial → Perpendiculares (90°)", correct: true },
        { id: "b", labelDe: "Bild 1: Parallelen · Bild 2: Sekanten", labelEs: "Img 1: Paralelas · Img 2: Secantes", correct: false },
        { id: "c", labelDe: "Bild 1: Strecken · Bild 2: Parallelen", labelEs: "Img 1: Segmentos · Img 2: Paralelas", correct: false },
        { id: "d", labelDe: "Beide heißen Parallelen (g ∥ h)", labelEs: "Ambas se llaman paralelas", correct: false }
      ],
      explanationDe: "Genau so steht es im Schema vom 6. Oktober: Schneiden sie sich → Sekanten. Schneiden sie sich im 90°-Winkel → Senkrechte Linien!",
      explanationEs: "Exactamente como en el esquema del 6 de octubre: si se intersecan → Sekanten (secantes). Si forman 90° → Senkrechte Linien (perpendiculares)."
    },
    {
      id: "det_13okt_fishbone",
      category: "line_relations",
      titleDe: "Heft (8. & 13. Okt): Senkrechte Linien auf einer schrägen Gerade",
      titleEs: "Cuaderno (8 y 13 oct): Líneas perpendiculares sobre una recta inclinada",
      figureType: "slanted_perpendiculars",
      questionDe: "Auf der schrägen Hauptgerade g sind 4 Linien eingezeichnet (1, 2, 3 und 4). Welche davon stehen wirklich SENKRECHT (⊥, 90°) auf g?",
      questionEs: "Sobre la recta principal inclinada g se dibujaron 4 líneas (1, 2, 3 y 4). ¿Cuáles de ellas son realmente PERPENDICULARES (⊥, 90°) a g?",
      options: [
        { id: "a", labelDe: "Linien 1, 2 und 4 (sie bilden 90° mit der schrägen Gerade g; Linie 3 ist nur vertikal zum Blattrand!)", labelEs: "Las líneas 1, 2 y 4 (forman 90° con g; ¡la 3 solo es vertical a la hoja!)", correct: true },
        { id: "b", labelDe: "Nur Linie 3, weil sie gerade nach oben zeigt", labelEs: "Solo la línea 3 porque va derechito hacia arriba", correct: false },
        { id: "c", labelDe: "Alle vier Linien (1, 2, 3 und 4)", labelEs: "Las cuatro líneas", correct: false },
        { id: "d", labelDe: "Keine, weil die Gerade g schräg ist", labelEs: "Ninguna, porque la recta g está inclinada", correct: false }
      ],
      explanationDe: "Aufgepasst! Senkrecht zu einer schrägen Gerade heißt: Das Geodreieck liegt mit der 90°-Mittellinie auf der schrägen Gerade (wie bei 1, 2 und 4)!",
      explanationEs: "¡Ojo con esta trampa clásica de prueba! Perpendicular a una recta inclinada significa que forma 90° con ESA recta (como 1, 2 y 4), no con el borde del cuaderno."
    },
    {
      id: "det_13okt_alltag",
      category: "line_relations",
      titleDe: "Heft (19. Okt oben): Parallel zum Boden & Senkrecht zur Wand",
      titleEs: "Cuaderno (19 oct arriba): Paralelo al suelo y Perpendicular a la pared",
      figureType: "room_objects",
      questionDe: "Im Heft wurden Dinge im Klassenzimmer untersucht. Welche Zuordnung stimmt mit den Beispielen aus dem Heft überein?",
      questionEs: "En el cuaderno anotaron objetos de la sala/casa. ¿Cuál asociación coincide con los ejemplos del cuaderno?",
      options: [
        { id: "a", labelDe: "Parallel zum Boden: Buch auf dem Tisch, Schließfach-Boden, Waschbecken-Boden · Senkrecht (oder an) der Wand: Regal/Möbel, Tür, Vorhang", labelEs: "Paralelo al suelo: libro, base casillero, base lavamanos · Perpendicular: mueble, puerta, cortina", correct: true },
        { id: "b", labelDe: "Ein Vorhang (cortina) liegt immer waagerecht und parallel zum Boden", labelEs: "Una cortina colgada siempre es horizontal y paralela al suelo", correct: false },
        { id: "c", labelDe: "Boden und Decke sind Sekanten, die sich im Zimmer schneiden", labelEs: "El suelo y el techo son secantes que se cortan en la pieza", correct: false },
        { id: "d", labelDe: "Ein flach auf dem Tisch liegendes Buch ist senkrecht zum Boden", labelEs: "Un libro apoyado plano en la mesa es perpendicular al suelo", correct: false }
      ],
      explanationDe: "Super erinnert! Genau diese Beispiele stehen oben auf der Heftseite vom 19. Oktober.",
      explanationEs: "¡Muy buena memoria! Exactamente esos ejemplos están escritos arriba en la página del 19 de octubre."
    }
  ],

  // 4. Desafíos del Laboratorio Geodreieck (Tab 4): construir y medir ángulos y perpendiculares/paralelas
  labChallenges: [
    {
      id: "lab_lmn_150",
      type: "build_angle",
      titleDe: "Heft-Aufgabe #5: Zeichne ∡LMN = 150°",
      titleEs: "Ejercicio #5 del cuaderno: Construye ∡LMN = 150°",
      vertex: "M",
      p1: "L",
      p2: "N",
      baseAngle: 0,
      targetDeg: 150,
      tolerance: 3,
      hintDe: "Drehe den Strahl MN gegen den Uhrzeigersinn (↺) auf genau 150° (Stumpfer Winkel). Wie groß ist dann der Außenwinkel ∡NML?",
      hintEs: "Gira el rayo MN en sentido antihorario (↺) hasta 150° (Stumpfer Winkel). El ángulo exterior ∡NML será 210°."
    },
    {
      id: "lab_rst_190",
      type: "build_angle",
      titleDe: "Heft-Aufgabe #6: Zeichne ∡RST = 190°",
      titleEs: "Ejercicio #6 del cuaderno: Construye ∡RST = 190°",
      vertex: "S",
      p1: "R",
      p2: "T",
      baseAngle: 0,
      targetDeg: 190,
      tolerance: 3,
      hintDe: "190° ist größer als ein gestreckter Winkel (180°)! Ziehe den Strahl ST leicht nach unten links auf 190° (Überstumpfer Winkel).",
      hintEs: "¡190° es mayor que un ángulo extendido (180°)! Arrastra el rayo ST un poco más abajo de los 180° hasta 190° (Überstumpfer Winkel)."
    },
    {
      id: "lab_dal_45",
      type: "build_angle",
      titleDe: "Heft (19. Okt): Zeichne ∡DAL = 45° (Spitzer Winkel)",
      titleEs: "Cuaderno (19 oct): Construye ∡DAL = 45° (Spitzer Winkel)",
      vertex: "A",
      p1: "D",
      p2: "L",
      baseAngle: 0,
      targetDeg: 45,
      tolerance: 3,
      hintDe: "Halbiere den rechten Winkel (90° : 2 = 45°). Der Gegenwinkel ∡LAD beträgt dann 315°.",
      hintEs: "La mitad de un ángulo recto (90° : 2 = 45°). El ángulo exterior ∡LAD mide 315°."
    },
    {
      id: "lab_ald_90",
      type: "build_angle",
      titleDe: "Heft (23. Okt #3): Zeichne ∡ALD = 90° (Rechter Winkel ⦜)",
      titleEs: "Cuaderno (23 oct #3): Construye ∡ALD = 90° (Ángulo recto ⦜)",
      vertex: "L",
      p1: "A",
      p2: "D",
      baseAngle: 0,
      targetDeg: 90,
      tolerance: 2,
      hintDe: "Stelle genau 90° ein, sodass die beiden Schenkel senkrecht (⊥) aufeinander stehen!",
      hintEs: "Ajusta exactamente 90° para que ambos rayos queden perpendiculares (⊥)."
    },
    {
      id: "lab_gestreckt_180",
      type: "build_angle",
      titleDe: "Winkel-Training: Zeichne einen gestreckten Winkel (180°)",
      titleEs: "Entrenamiento: Construye un ángulo extendido (180°)",
      vertex: "S",
      p1: "A",
      p2: "B",
      baseAngle: 0,
      targetDeg: 180,
      tolerance: 2,
      hintDe: "Ein gestreckter Winkel misst genau 180° und bildet eine durchgehende gerade Linie.",
      hintEs: "Un ángulo extendido (gestreckter Winkel) mide 180° y forma una línea recta continua."
    },
    {
      id: "lab_perp_slanted",
      type: "build_angle",
      titleDe: "Senkrechte Linie auf schräger Gerade (8. & 13. Okt)",
      titleEs: "Línea perpendicular sobre recta inclinada (8 y 13 oct)",
      vertex: "P",
      p1: "G",
      p2: "H",
      baseAngle: 35,
      targetDeg: 90,
      tolerance: 3,
      hintDe: "Die Startlinie ist um 35° gedreht! Nutze das Geodreieck (Drehen auf 35°), um einen exakten 90°-Winkel (rechten Winkel) zur schrägen Linie einzustellen.",
      hintEs: "¡La línea base está inclinada a 35°! Ajusta el rayo para que el ángulo ENTRE las dos líneas sea exactamente 90°."
    }
  ],

  // 5. Banco completo de preguntas para el Simulacro de Prozessnote (Tab 5)
  quizQuestions: [
    {
      id: "q1",
      topicDe: "Die Linie (5. Okt)",
      questionDe: "Welche Linie hat einen Anfangspunkt, aber KEINEN Endpunkt?",
      questionEs: "¿Qué línea tiene un punto de inicio, pero NO tiene punto final?",
      svgType: "ray_ab",
      options: [
        { textDe: "der Strahl (⟼ AB)", textEs: "el rayo / semirrecta", correct: true },
        { textDe: "die Strecke (I—I AB)", textEs: "el segmento", correct: false },
        { textDe: "die Gerade (⟷ AB)", textEs: "la recta", correct: false },
        { textDe: "die geschlossene Kurve", textEs: "la curva cerrada", correct: false }
      ],
      explanationDe: "Der Strahl (rayo) beginnt in einem Punkt (Querstrich) und geht auf der anderen Seite unendlich weiter (Pfeil).",
      explanationEs: "El rayo (der Strahl) comienza en un punto (tope) y continúa infinitamente por el otro extremo (flecha)."
    },
    {
      id: "q2",
      topicDe: "Die Linie (5. Okt)",
      questionDe: "Wie nennt man eine gerade Linie, die einen Anfangspunkt UND einen Endpunkt hat (messbare Länge)?",
      questionEs: "¿Cómo se llama en alemán una línea recta que tiene punto de inicio Y punto final (longitud medible)?",
      svgType: "segment_lm",
      options: [
        { textDe: "die Strecke (I—I LM)", textEs: "el segmento", correct: true },
        { textDe: "die Gerade (⟷ LM)", textEs: "la recta", correct: false },
        { textDe: "der Strahl (⟼ LM)", textEs: "el rayo", correct: false },
        { textDe: "die Sekante", textEs: "la secante", correct: false }
      ],
      explanationDe: "Die Strecke (el segmento) wird von zwei Punkten begrenzt (I—I LM) und kann mit dem Geodreieck gemessen werden.",
      explanationEs: "Die Strecke (el segmento) está limitado por dos puntos (I—I LM) y se puede medir."
    },
    {
      id: "q3",
      topicDe: "Die Linie · Bonus (5. & 13. Okt)",
      questionDe: "★ Bonus aus dem Heft: Ein Strahl beginnt beim Punkt B und geht durch den Punkt A unendlich weiter. Wie schreibt man sein Symbol richtig?",
      questionEs: "★ Bonus del cuaderno: Un rayo empieza en el punto B y pasa por el punto A hacia el infinito. ¿Cómo se escribe su símbolo?",
      svgType: "ray_ba_left",
      options: [
        { textDe: "⟼ BA (Anfangspunkt B steht immer zuerst!)", textEs: "⟼ BA (el punto de inicio B va siempre primero)", correct: true },
        { textDe: "⟼ AB (alphabetische Reihenfolge)", textEs: "⟼ AB (por orden alfabético)", correct: false },
        { textDe: "I—I BA (Strecke)", textEs: "I—I BA (segmento)", correct: false },
        { textDe: "⟷ AB (Gerade)", textEs: "⟷ AB (recta)", correct: false }
      ],
      explanationDe: "Im Symbol ⟼ steht der Pfeil immer nach rechts, aber der ERSTE Buchstabe muss immer der Startpunkt sein → ⟼ BA.",
      explanationEs: "En el símbolo ⟼ la flecha siempre apunta a la derecha, pero la PRIMERA letra debe ser siempre el punto de inicio → ⟼ BA."
    },
    {
      id: "q4",
      topicDe: "Lage zum Boden (5. Okt)",
      questionDe: "Wie heißt eine Linie auf Deutsch, die wie der Horizont parallel zum Boden verläuft?",
      questionEs: "¿Cómo se dice en alemán una línea que va como el horizonte (horizontal respecto al suelo)?",
      svgType: "horizon_line",
      options: [
        { textDe: "waagerecht (horizontal)", textEs: "horizontal", correct: true },
        { textDe: "senkrecht (vertikal)", textEs: "vertical", correct: false },
        { textDe: "schräg", textEs: "oblicua", correct: false },
        { textDe: "gekrümmt / Spirale", textEs: "curva / espiral", correct: false }
      ],
      explanationDe: "Waagerecht (oder horizontal) bedeutet parallel zum Boden/Horizont. Senkrecht bedeutet vertikal (90° zum Boden), schräg bedeutet geneigt.",
      explanationEs: "Waagerecht (u horizontal) significa paralelo al suelo/horizonte."
    },
    {
      id: "q5",
      topicDe: "Beziehung zwischen Linien (6. Okt)",
      questionDe: "Zwei Geraden schneiden sich überhaupt NICHT und haben überall denselben Abstand. Wie heißen sie?",
      questionEs: "Dos rectas NO se intersecan nunca y mantienen siempre la misma distancia. ¿Cómo se llaman?",
      svgType: "parallel_lines",
      options: [
        { textDe: "Parallelen (parallele Linien, g ∥ h)", textEs: "Paralelas", correct: true },
        { textDe: "Sekanten (sich schneidende Linien)", textEs: "Secantes", correct: false },
        { textDe: "Senkrechte Linien (g ⊥ h)", textEs: "Líneas perpendiculares", correct: false },
        { textDe: "Strahlen", textEs: "Rayos", correct: false }
      ],
      explanationDe: "Wenn zwei Linien sich nie schneiden, heißen sie Parallelen (g ∥ h).",
      explanationEs: "Cuando dos líneas no se intersecan nunca, se llaman Parallelen (paralelas, g ∥ h)."
    },
    {
      id: "q6",
      topicDe: "Beziehung zwischen Linien (6. & 8. Okt)",
      questionDe: "Was sind „senkrechte Linien“ (g ⊥ h) laut dem Schema im Heft?",
      questionEs: "¿Qué son las «senkrechte Linien» (g ⊥ h) según el esquema del cuaderno?",
      svgType: "perp_lines",
      options: [
        { textDe: "Eine besondere Art von Sekanten, die sich im rechten Winkel (90°) schneiden", textEs: "Un tipo especial de secantes que se cortan en ángulo recto (90°)", correct: true },
        { textDe: "Linien, die sich niemals berühren", textEs: "Líneas que nunca se tocan", correct: false },
        { textDe: "Linien, die einen Winkel von 45° bilden", textEs: "Líneas que forman un ángulo de 45°", correct: false },
        { textDe: "Geschlossene Kurven mit Innenbereich", textEs: "Curvas cerradas con región interior", correct: false }
      ],
      explanationDe: "Senkrechte Linien (perpendiculares) sind besondere Sekanten: Sie schneiden sich genau im 90°-Winkel (rechter Winkel).",
      explanationEs: "Las líneas perpendiculares (senkrechte Linien) son secantes especiales que se intersecan formando exactamente 90°."
    },
    {
      id: "q7",
      topicDe: "Winkel Sortierung (19. Okt)",
      questionDe: "Zu welcher Winkelart gehört ein Winkel von α = 135°?",
      questionEs: "¿A qué tipo de ángulo pertenece un ángulo de α = 135°?",
      svgType: "angle_135",
      options: [
        { textDe: "Stumpfer Winkel (91° – 179°)", textEs: "Ángulo obtuso (91° – 179°)", correct: true },
        { textDe: "Spitzer Winkel (1° – 89°)", textEs: "Ángulo agudo (1° – 89°)", correct: false },
        { textDe: "Überstumpfer Winkel (181° – 359°)", textEs: "Ángulo mayor de 180° (181° – 359°)", correct: false },
        { textDe: "Gestreckter Winkel (180°)", textEs: "Ángulo extendido (180°)", correct: false }
      ],
      explanationDe: "135° liegt zwischen 91° und 179° → das ist ein Stumpfer Winkel (ángulo obtuso).",
      explanationEs: "135° está entre 91° y 179° → es un Stumpfer Winkel (ángulo obtuso)."
    },
    {
      id: "q8",
      topicDe: "Winkel Sortierung (19. Okt)",
      questionDe: "Wie heißt ein Winkel, der genau 180° misst, und wie heißt einer zwischen 181° und 359°?",
      questionEs: "¿Cómo se llama en alemán un ángulo de exactamente 180°, y uno de entre 181° y 359°?",
      svgType: "angle_180_240",
      options: [
        { textDe: "180° = Gestreckter Winkel · 181°–359° = Überstumpfer Winkel", textEs: "180° = Extendido · 181°–359° = Überstumpfer (cóncavo/convexo)", correct: true },
        { textDe: "180° = Rechter Winkel · 181°–359° = Stumpfer Winkel", textEs: "180° = Recto · 181°–359° = Obtuso", correct: false },
        { textDe: "180° = Voller Winkel · 181°–359° = Spitzer Winkel", textEs: "180° = Completo · 181°–359° = Agudo", correct: false },
        { textDe: "180° = Nullwinkel · 181°–359° = Gestreckter Winkel", textEs: "180° = Nulo · 181°–359° = Extendido", correct: false }
      ],
      explanationDe: "Genau 180° heißt Gestreckter Winkel; zwischen 181° und 359° heißt Überstumpfer Winkel; 360° ist der Volle Winkel.",
      explanationEs: "Exactamente 180° es Gestreckter Winkel (extendido); entre 181° y 359° es Überstumpfer Winkel; y 360° es Voller Winkel."
    },
    {
      id: "q9",
      topicDe: "Winkel nennen & berechnen (21. & 23. Okt)",
      questionDe: "Im Heft gilt: ∡LMN = 120°. Wie groß ist dann der umgekehrte Winkel ∡NML (gegen den Uhrzeigersinn außen herum)?",
      questionEs: "En el cuaderno: ∡LMN = 120°. ¿Cuánto mide entonces el ángulo inverso ∡NML (dando la vuelta en sentido antihorario)?",
      svgType: "pair_120_240",
      options: [
        { textDe: "∡NML = 240° (denn 360° − 120° = 240°)", textEs: "∡NML = 240° (porque 360° − 120° = 240°)", correct: true },
        { textDe: "∡NML = 60° (denn 180° − 120° = 60°)", textEs: "∡NML = 60° (porque 180° − 120° = 60°)", correct: false },
        { textDe: "∡NML = 120° (bleibt gleich)", textEs: "∡NML = 120° (mide lo mismo)", correct: false },
        { textDe: "∡NML = 260°", textEs: "∡NML = 260°", correct: false }
      ],
      explanationDe: "∡LMN und ∡NML ergeben zusammen immer einen vollen Winkel (360°). Also: 360° − 120° = 240°!",
      explanationEs: "∡LMN y ∡NML suman siempre la vuelta completa (360°). Por lo tanto: 360° − 120° = 240°."
    },
    {
      id: "q10",
      topicDe: "Winkel nennen (19.–23. Okt)",
      questionDe: "Welcher Punkt ist beim Winkel ∡CDF der Scheitelpunkt (vértice)?",
      questionEs: "En el ángulo ∡CDF, ¿cuál letra corresponde al vértice (Scheitelpunkt)?",
      svgType: "pair_80_280",
      options: [
        { textDe: "Der Punkt D (steht immer in der Mitte: C D̲ F)", textEs: "El punto D (siempre va al medio: C D̲ F)", correct: true },
        { textDe: "Der Punkt C (der erste Buchstabe)", textEs: "El punto C (la primera letra)", correct: false },
        { textDe: "Der Punkt F (der letzte Buchstabe)", textEs: "El punto F (la última letra)", correct: false },
        { textDe: "Alle drei Punkte sind Scheitelpunkte", textEs: "Los tres puntos son vértices", correct: false }
      ],
      explanationDe: "Beim Nennen eines Winkels mit drei Buchstaben (∡CDF) steht der Scheitelpunkt D IMMER in der Mitte!",
      explanationEs: "Al nombrar un ángulo con tres letras (∡CDF), el vértice D va SIEMPRE en el medio."
    },
    {
      id: "q11",
      topicDe: "Winkel berechnen & sortieren (21. Okt - Aufgabe d)",
      questionDe: "Gegeben ist der große Außenwinkel ∡LJI = 265°. Wie groß ist ∡IJL und zu welcher Winkelart gehört ∡IJL?",
      questionEs: "Se da el ángulo grande exterior ∡LJI = 265°. ¿Cuánto mide ∡IJL y qué tipo de ángulo es ∡IJL?",
      svgType: "pair_95_265",
      options: [
        { textDe: "∡IJL = 95° → Stumpfer Winkel (weil 95° größer als 90° ist!)", textEs: "∡IJL = 95° → Ángulo obtuso (¡porque 95° es mayor que 90°!)", correct: true },
        { textDe: "∡IJL = 95° → Rechter Winkel", textEs: "∡IJL = 95° → Ángulo recto", correct: false },
        { textDe: "∡IJL = 85° → Spitzer Winkel", textEs: "∡IJL = 85° → Ángulo agudo", correct: false },
        { textDe: "∡IJL = 105° → Überstumpfer Winkel", textEs: "∡IJL = 105° → Ángulo mayor de 180°", correct: false }
      ],
      explanationDe: "360° − 265° = 95°. Und Achtung: 95° liegt zwischen 91° und 179°, ist also ein Stumpfer Winkel (nicht rechter Winkel!).",
      explanationEs: "360° − 265° = 95°. Y cuidado: 95° está entre 91° y 179°, por lo que es un Stumpfer Winkel (obtuso), ¡no recto!"
    },
    {
      id: "q12",
      topicDe: "Geodreieck-Falle (Winkel messen)",
      questionDe: "Du misst mit dem Geodreieck einen spitzen Winkel (deutlich kleiner als 90°). Auf der Skala stehen an der Stelle die Zahlen 50 und 130. Welches Maß stimmt?",
      questionEs: "Mides con el Geodreieck un ángulo claramente agudo (menor que 90°). En la escala aparecen los números 50 y 130 en ese rayo. ¿Cuál medida es la correcta?",
      svgType: "angle_50_geodreieck",
      options: [
        { textDe: "50° (weil es ein spitzer Winkel unter 90° ist!)", textEs: "50° (¡porque es un ángulo agudo menor de 90°!)", correct: true },
        { textDe: "130° (weil die Zahl größer ist)", textEs: "130° (porque el número es más grande)", correct: false },
        { textDe: "180° (50° + 130°)", textEs: "180° (50° + 130°)", correct: false },
        { textDe: "310°", textEs: "310°", correct: false }
      ],
      explanationDe: "Wichtiger Trick für die Probe: Prüfe zuerst mit dem Auge, ob der Winkel spitz (< 90°) oder stumpf (> 90°) ist. Da er spitz ist, muss es 50° sein!",
      explanationEs: "Truco clave para la prueba: mira primero si el ángulo es más cerrado que una esquina de 90° (spitz). Como es agudo, ¡tiene que ser 50° y no 130°!"
    }
  ],

  // 6. Nuevas Pruebas Completas por Nivel (Tab 6: Neue Proben mit Note)
  extraExams: {
    probe_a: {
      id: "probe_a",
      levelBadgeDe: "🟢 Niveau 1 · Basis",
      levelColor: "easy",
      titleDe: "🟢 Probe A — Niveau 1: Basis-Training (Wie im Heft)",
      titleEs: "Prueba A — Nivel 1: Entrenamiento Base (Mismo nivel del cuaderno, ejercicios nuevos)",
      descDe: "12 neue Aufgaben zum sicheren Einstieg: Linienarten (⟼ PQ, I—I QR, ⟷ RS), geschlossene Linien, Parallelen, Senkrechte und 360°-Winkelpaare.",
      descEs: "12 ejercicios nuevos de nivel base: tipos de línea (⟼ PQ, I—I QR, ⟷ RS), líneas cerradas, paralelas, perpendiculares y pares de ángulos de 360°.",
      questions: [
        {
          id: "pa_1",
          topicDe: "Linien & Symbole",
          questionDe: "Betrachte in der Figur die rot markierte Linie von P über Q: Bei P ist ein Querstrich (Start), hinter Q geht ein Pfeil weiter. Wie heißt sie?",
          questionEs: "Observa en la figura la línea marcada en rojo desde P pasando por Q: en P tiene tope de inicio y después de Q sigue con flecha. ¿Cómo se llama?",
          svgSpec: { type: "fig_pqrs", highlight: "PQ" },
          options: [
            { textDe: "⟼ PQ — der Strahl (beginnt bei P)", textEs: "El rayo PQ (empieza en P)", correct: true },
            { textDe: "I—I PQ — die Strecke", textEs: "El segmento PQ", correct: false },
            { textDe: "⟷ PQ — die Gerade", textEs: "La recta PQ", correct: false },
            { textDe: "⟼ QP — der Strahl (beginnt bei Q)", textEs: "El rayo QP (empieza en Q)", correct: false }
          ],
          explanationDe: "Bei P ist der Anfangspunkt (Querstrich) und hinter Q der Pfeil → der Strahl ⟼ PQ.",
          explanationEs: "En P está el tope de inicio y tras Q la flecha → es el rayo (der Strahl) ⟼ PQ."
        },
        {
          id: "pa_2",
          topicDe: "Linien & Symbole",
          questionDe: "In derselben Figur hat die rot markierte Linie zwischen Q und R an beiden Enden einen Begrenzungsstrich. Wie schreibt man sie?",
          questionEs: "En la misma figura, la línea marcada en rojo entre Q y R tiene tope en ambos extremos. ¿Cómo se escribe?",
          svgSpec: { type: "fig_pqrs", highlight: "QR" },
          options: [
            { textDe: "I—I QR — die Strecke", textEs: "El segmento QR", correct: true },
            { textDe: "⟷ QR — die Gerade", textEs: "La recta QR", correct: false },
            { textDe: "⟼ QR — der Strahl", textEs: "El rayo QR", correct: false },
            { textDe: "die Kurve QR", textEs: "La curva QR", correct: false }
          ],
          explanationDe: "Anfangspunkt Q und Endpunkt R → die Strecke (I—I QR).",
          explanationEs: "Punto inicial Q y punto final R → el segmento (die Strecke I—I QR)."
        },
        {
          id: "pa_3",
          topicDe: "Linien & Symbole",
          questionDe: "Die rot markierte Linie durch R und S hat an beiden Enden einen Pfeil. Wie heißt sie auf Deutsch?",
          questionEs: "La línea marcada en rojo que pasa por R y S tiene flecha en ambos extremos. ¿Cómo se llama en alemán?",
          svgSpec: { type: "fig_pqrs", highlight: "RS" },
          options: [
            { textDe: "⟷ RS — die Gerade (unendlich in beide Richtungen)", textEs: "La recta RS (infinita en ambos sentidos)", correct: true },
            { textDe: "⟼ RS — der Strahl", textEs: "El rayo RS", correct: false },
            { textDe: "I—I RS — die Strecke", textEs: "El segmento RS", correct: false },
            { textDe: "geschlossene Linie", textEs: "Línea cerrada", correct: false }
          ],
          explanationDe: "Zwei Pfeile = kein Anfang und kein Ende → die Gerade (⟷ RS).",
          explanationEs: "Dos flechas = sin principio ni fin → die Gerade (la recta RS)."
        },
        {
          id: "pa_4",
          topicDe: "Geschlossene Linie",
          questionDe: "Schau dir die geschlossene Linie mit den Punkten X, Y und Z an. Wo liegen X, Y und Z?",
          questionEs: "Mira la línea cerrada con los puntos X, Y y Z. ¿Dónde están ubicados X, Y y Z?",
          svgSpec: { type: "closed_xyz" },
          options: [
            { textDe: "X im Innenbereich · Y auf dem Rand (Grenze) · Z im Außenbereich", textEs: "X en región interior · Y en la frontera · Z en región exterior", correct: true },
            { textDe: "X im Außenbereich · Y im Innenbereich · Z auf dem Rand", textEs: "X exterior · Y interior · Z en la frontera", correct: false },
            { textDe: "Alle drei Punkte liegen im Innenbereich", textEs: "Los tres puntos están en el interior", correct: false },
            { textDe: "X ist der Scheitelpunkt und Z ist der Schenkel", textEs: "X es el vértice y Z es el lado", correct: false }
          ],
          explanationDe: "X liegt drinnen (Innenbereich), Y genau auf der Linie (Rand/Grenze) und Z draußen (Außenbereich).",
          explanationEs: "X está adentro (Innenbereich), Y sobre la línea (Rand/Grenze = frontera) y Z afuera (Außenbereich)."
        },
        {
          id: "pa_5",
          topicDe: "Lage zum Boden",
          questionDe: "Der Fahnenmast TU steht im 90°-Winkel aufrecht auf dem Boden. Welche Lage zum Boden hat die Strecke TU?",
          questionEs: "El mástil TU está parado formando 90° con el suelo. ¿Qué posición respecto al suelo tiene el segmento TU?",
          svgSpec: { type: "flagpole_tu" },
          options: [
            { textDe: "senkrecht / vertikal zum Boden", textEs: "vertical (perpendicular al suelo)", correct: true },
            { textDe: "waagerecht / horizontal zum Boden", textEs: "horizontal respecto al suelo", correct: false },
            { textDe: "schräg zum Boden", textEs: "oblicua respecto al suelo", correct: false },
            { textDe: "gekrümmt (Spirale)", textEs: "curva (espiral)", correct: false }
          ],
          explanationDe: "Aufrecht im 90°-Winkel zum Boden heißt auf Deutsch: senkrecht (oder vertikal).",
          explanationEs: "Derecho a 90° respecto al suelo se llama en alemán senkrecht (o vertikal)."
        },
        {
          id: "pa_6",
          topicDe: "Beziehung zwischen Linien",
          questionDe: "Im Rechteck ABCD: Welche Beziehung haben die obere Seite AB und die untere Seite DC zueinander?",
          questionEs: "En el rectángulo ABCD: ¿Qué relación tienen el lado superior AB y el lado inferior DC entre sí?",
          svgSpec: { type: "rect_abcd", highlight: "parallel" },
          options: [
            { textDe: "Sie sind parallel zueinander (AB ∥ DC)", textEs: "Son paralelos entre sí (AB ∥ DC)", correct: true },
            { textDe: "Sie sind senkrecht zueinander (AB ⊥ DC)", textEs: "Son perpendiculares entre sí (AB ⊥ DC)", correct: false },
            { textDe: "Sie sind Sekanten mit Schnittpunkt B", textEs: "Son secantes que se cortan en B", correct: false },
            { textDe: "Sie bilden einen spitzen Winkel", textEs: "Forman un ángulo agudo", correct: false }
          ],
          explanationDe: "Gegenüberliegende Seiten im Rechteck haben immer denselben Abstand und schneiden sich nie → Parallelen (AB ∥ DC).",
          explanationEs: "Los lados opuestos de un rectángulo mantienen la misma distancia y nunca se cortan → Parallelen (AB ∥ DC)."
        },
        {
          id: "pa_7",
          topicDe: "Beziehung zwischen Linien",
          questionDe: "Im selben Rechteck ABCD: Welche Beziehung haben die linke Seite AD und die untere Seite DC bei Punkt D?",
          questionEs: "En el mismo rectángulo ABCD: ¿Qué relación tienen el lado izquierdo AD y el lado inferior DC en el punto D?",
          svgSpec: { type: "rect_abcd", highlight: "perp" },
          options: [
            { textDe: "Sie stehen senkrecht aufeinander (AD ⊥ DC, rechter Winkel 90°)", textEs: "Son perpendiculares entre sí (AD ⊥ DC, ángulo recto 90°)", correct: true },
            { textDe: "Sie sind parallel zueinander (AD ∥ DC)", textEs: "Son paralelos entre sí (AD ∥ DC)", correct: false },
            { textDe: "Sie berühren sich nicht", textEs: "No se tocan", correct: false },
            { textDe: "Sie bilden einen stumpfen Winkel von 120°", textEs: "Forman un ángulo obtuso de 120°", correct: false }
          ],
          explanationDe: "Im Punkt D treffen sich AD und DC im rechten Winkel (90° ⦜) → senkrechte Linien (AD ⊥ DC).",
          explanationEs: "En el punto D se cortan AD y DC en ángulo recto (90° ⦜) → senkrechte Linien (AD ⊥ DC)."
        },
        {
          id: "pa_8",
          topicDe: "Winkel 360° & Sortierung",
          questionDe: "Gegeben ist der Winkel ∡PQR = 70°. Wie groß ist der Außenwinkel ∡RQP und welche Winkelart ist ∡PQR?",
          questionEs: "Se da el ángulo ∡PQR = 70°. ¿Cuánto mide el ángulo exterior ∡RQP y qué tipo de ángulo es ∡PQR?",
          svgSpec: { type: "angle_pair", vertex: "Q", p1: "P", p2: "R", d1: 70, d2: 290, given: 1 },
          options: [
            { textDe: "∡RQP = 290° · ∡PQR ist ein Spitzer Winkel (1°–89°)", textEs: "∡RQP = 290° · ∡PQR es un ángulo agudo", correct: true },
            { textDe: "∡RQP = 110° · ∡PQR ist ein Stumpfer Winkel", textEs: "∡RQP = 110° · ∡PQR es un ángulo obtuso", correct: false },
            { textDe: "∡RQP = 290° · ∡PQR ist ein Rechter Winkel", textEs: "∡RQP = 290° · ∡PQR es un ángulo recto", correct: false },
            { textDe: "∡RQP = 270° · ∡PQR ist ein Überstumpfer Winkel", textEs: "∡RQP = 270° · ∡PQR es un ángulo mayor de 180°", correct: false }
          ],
          explanationDe: "360° − 70° = 290°. Da 70° zwischen 1° und 89° liegt, ist ∡PQR ein Spitzer Winkel!",
          explanationEs: "360° − 70° = 290°. Como 70° está entre 1° y 89°, ¡∡PQR es un Spitzer Winkel!"
        },
        {
          id: "pa_9",
          topicDe: "Winkel 360° & Sortierung",
          questionDe: "Gegeben ist ∡XYZ = 140°. Wie groß ist der Gegenwinkel ∡ZYX und wie heißt die Winkelart von ∡XYZ?",
          questionEs: "Se da ∡XYZ = 140°. ¿Cuánto mide el ángulo inverso ∡ZYX y cómo se clasifica ∡XYZ?",
          svgSpec: { type: "angle_pair", vertex: "Y", p1: "X", p2: "Z", d1: 140, d2: 220, given: 1 },
          options: [
            { textDe: "∡ZYX = 220° · ∡XYZ ist ein Stumpfer Winkel (91°–179°)", textEs: "∡ZYX = 220° · ∡XYZ es un ángulo obtuso", correct: true },
            { textDe: "∡ZYX = 40° · ∡XYZ ist ein Spitzer Winkel", textEs: "∡ZYX = 40° · ∡XYZ es un ángulo agudo", correct: false },
            { textDe: "∡ZYX = 220° · ∡XYZ ist ein Überstumpfer Winkel", textEs: "∡ZYX = 220° · ∡XYZ es mayor de 180°", correct: false },
            { textDe: "∡ZYX = 240° · ∡XYZ ist ein Gestreckter Winkel", textEs: "∡ZYX = 240° · ∡XYZ es extendido", correct: false }
          ],
          explanationDe: "360° − 140° = 220°. Und 140° liegt zwischen 91° und 179° → Stumpfer Winkel.",
          explanationEs: "360° − 140° = 220°. Y 140° está entre 91° y 179° → Stumpfer Winkel (obtuso)."
        },
        {
          id: "pa_10",
          topicDe: "Scheitelpunkt & Rechter Winkel",
          questionDe: "Beim Winkel ∡KLM = 90°: Welcher Buchstabe ist der Scheitelpunkt und wie groß ist der Außenwinkel ∡MLK?",
          questionEs: "En el ángulo ∡KLM = 90°: ¿Cuál letra es el vértice (Scheitelpunkt) y cuánto mide el ángulo exterior ∡MLK?",
          svgSpec: { type: "angle_pair", vertex: "L", p1: "K", p2: "M", d1: 90, d2: 270, given: 1 },
          options: [
            { textDe: "Scheitelpunkt ist L (in der Mitte) · ∡MLK = 270°", textEs: "El vértice es L (al medio) · ∡MLK = 270°", correct: true },
            { textDe: "Scheitelpunkt ist K · ∡MLK = 90°", textEs: "El vértice es K · ∡MLK = 90°", correct: false },
            { textDe: "Scheitelpunkt ist M · ∡MLK = 180°", textEs: "El vértice es M · ∡MLK = 180°", correct: false },
            { textDe: "Scheitelpunkt ist L · ∡MLK = 190°", textEs: "El vértice es L · ∡MLK = 190°", correct: false }
          ],
          explanationDe: "Bei ∡KLM steht L in der Mitte (Scheitelpunkt). Und 360° − 90° = 270°!",
          explanationEs: "En ∡KLM la letra L va al medio (vértice). Y 360° − 90° = 270°."
        },
        {
          id: "pa_11",
          topicDe: "Winkel Sortierung",
          questionDe: "Schau dir den Winkel ∡DEF = 215° an. Wie heißt diese Winkelart auf Deutsch?",
          questionEs: "Observa el ángulo ∡DEF = 215°. ¿Cómo se llama este tipo de ángulo en alemán?",
          svgSpec: { type: "angle_pair", vertex: "E", p1: "D", p2: "F", d1: 215, d2: 145, given: 1 },
          options: [
            { textDe: "Überstumpfer Winkel (181° – 359°)", textEs: "Überstumpfer Winkel (entre 181° y 359°)", correct: true },
            { textDe: "Stumpfer Winkel (91° – 179°)", textEs: "Stumpfer Winkel (obtuso)", correct: false },
            { textDe: "Gestreckter Winkel (180°)", textEs: "Gestreckter Winkel (extendido)", correct: false },
            { textDe: "Voller Winkel (360°)", textEs: "Voller Winkel (completo)", correct: false }
          ],
          explanationDe: "Alle Winkel zwischen 181° und 359° heißen Überstumpfer Winkel!",
          explanationEs: "Todos los ángulos entre 181° y 359° se llaman Überstumpfer Winkel."
        },
        {
          id: "pa_12",
          topicDe: "Besondere Winkel (0° & 360°)",
          questionDe: "Wie heißen der Winkel von genau 0° und der Winkel einer kompletten Drehung von 360°?",
          questionEs: "¿Cómo se llaman en alemán el ángulo de exactamente 0° y el ángulo de una vuelta completa de 360°?",
          svgSpec: { type: "angle_0_360" },
          options: [
            { textDe: "0° = Nullwinkel (0-Winkel) · 360° = Voller Winkel (Vollwinkel)", textEs: "0° = Nullwinkel · 360° = Voller Winkel", correct: true },
            { textDe: "0° = Spitzer Winkel · 360° = Gestreckter Winkel", textEs: "0° = Agudo · 360° = Extendido", correct: false },
            { textDe: "0° = Rechter Winkel · 360° = Überstumpfer Winkel", textEs: "0° = Recto · 360° = Mayor de 180°", correct: false },
            { textDe: "0° = Kleiner Winkel · 360° = Großer Winkel", textEs: "0° = Ángulo pequeño · 360° = Ángulo grande", correct: false }
          ],
          explanationDe: "Genau wie im Schema vom 19. Oktober: 0° ist der Nullwinkel (0-Winkel) und 360° ist der Volle Winkel!",
          explanationEs: "Exactamente como en el esquema del 19 de octubre: 0° es Nullwinkel y 360° es Voller Winkel."
        }
      ]
    },

    probe_b: {
      id: "probe_b",
      levelBadgeDe: "🟡 Niveau 2 · Mittelschwer & Fallen",
      levelColor: "medium",
      titleDe: "🟡 Probe B — Niveau 2: Mittelschwer & Prüfungsfallen",
      titleEs: "Prueba B — Nivel 2: Intermedio con Trampas Clásicas de Prueba",
      descDe: "12 mittelschwere Aufgaben mit den typischen Prüfungsfallen: Strahl nach links (⟼ TK), schräge Senkrechte, 89°/91°/181°-Grenzen und Geodreieck-Doppelskala.",
      descEs: "12 ejercicios intermedios con las trampas clásicas: rayo hacia la izquierda (⟼ TK), perpendiculares inclinadas, límites 89°/91°/181° y doble escala del Geodreieck.",
      questions: [
        {
          id: "pb_1",
          topicDe: "★ Bonus-Falle: Strahl nennen",
          questionDe: "Achtung Falle! Der Strahl beginnt beim Punkt T (rechts oben mit Querstrich) und geht schräg nach links unten durch Punkt K weiter. Wie MUSS man sein Symbol schreiben?",
          questionEs: "¡Cuidado con la trampa! El rayo empieza en el punto T (arriba a la derecha con tope) y baja pasando por K con flecha. ¿Cómo DEBE escribirse su símbolo?",
          svgSpec: { type: "ray_tk_trap" },
          options: [
            { textDe: "⟼ TK (weil T der Anfangspunkt ist!)", textEs: "⟼ TK (¡porque T es el punto de inicio!)", correct: true },
            { textDe: "⟼ KT (weil K weiter links liegt und im Alphabet vor T kommt)", textEs: "⟼ KT (porque K está a la izquierda y va antes en el abecedario)", correct: false },
            { textDe: "I—I TK (Strecke TK)", textEs: "I—I TK (Segmento TK)", correct: false },
            { textDe: "⟷ KT (Gerade KT)", textEs: "⟷ KT (Recta KT)", correct: false }
          ],
          explanationDe: "Merke dir den ★ Bonus aus dem Heft: Egal wohin der Pfeil in der Zeichnung zeigt, im Symbol ⟼ steht IMMER der Startpunkt (T) an erster Stelle → ⟼ TK!",
          explanationEs: "Recuerda el ★ Bonus del cuaderno: sin importar hacia dónde apunte la flecha en el dibujo, en el símbolo ⟼ SIEMPRE va primero el punto de inicio (T) → ⟼ TK."
        },
        {
          id: "pb_2",
          topicDe: "Die Linie (3 Eigenschaften)",
          questionDe: "Betrachte die Linie durch E und F mit zwei Pfeilen, die geneigt zum Boden verläuft. Welche 3 Begriffe beschreiben sie komplett richtig?",
          questionEs: "Observa la línea que pasa por E y F con dos flechas, inclinada respecto al suelo. ¿Cuáles 3 conceptos la describen correctamente?",
          svgSpec: { type: "slanted_gerade_ef" },
          options: [
            { textDe: "offene Linie · die Gerade (⟷ EF) · schräg zum Boden", textEs: "línea abierta · la recta (⟷ EF) · oblicua al suelo", correct: true },
            { textDe: "offene Linie · der Strahl (⟼ EF) · schräg zum Boden", textEs: "línea abierta · el rayo (⟼ EF) · oblicua al suelo", correct: false },
            { textDe: "geschlossene Linie · die Gerade · waagerecht", textEs: "línea cerrada · la recta · horizontal", correct: false },
            { textDe: "offene Linie · die Strecke (I—I EF) · senkrecht", textEs: "línea abierta · el segmento · vertical", correct: false }
          ],
          explanationDe: "Zwei Pfeile = die Gerade (⟷ EF); Enden treffen sich nicht = offene Linie; geneigt zum Boden = schräg!",
          explanationEs: "Dos flechas = la recta (die Gerade); extremos no se unen = abierta (offene Linie); inclinada = oblicua (schräg)."
        },
        {
          id: "pb_3",
          topicDe: "Senkrechte auf schräger Gerade",
          questionDe: "Auf der schrägen Gerade h kreuzen zwei Linien: Linie m zeigt senkrecht zum unteren Blattrand (60° zu h), Linie n bildet genau 90° (⦜) mit der schrägen Gerade h. Welche Aussage stimmt?",
          questionEs: "Sobre la recta inclinada h cruzan dos líneas: la línea m va vertical al borde de la hoja (60° con h), y la línea n forma 90° (⦜) con la recta inclinada h. ¿Qué afirmación es correcta?",
          svgSpec: { type: "trap_slanted_perp" },
          options: [
            { textDe: "Nur Linie n ist senkrecht zu h (n ⊥ h), weil sie mit h einen 90°-Winkel bildet!", textEs: "¡Solo la línea n es perpendicular a h (n ⊥ h), porque forma 90° con h!", correct: true },
            { textDe: "Nur Linie m ist senkrecht zu h, weil sie gerade nach oben zeigt", textEs: "Solo la línea m es perpendicular a h porque va hacia arriba", correct: false },
            { textDe: "Beide Linien m und n sind senkrecht zu h", textEs: "Ambas líneas m y n son perpendiculares a h", correct: false },
            { textDe: "Linie m und Linie n sind parallel zueinander (m ∥ n)", textEs: "Las líneas m y n son paralelas entre sí", correct: false }
          ],
          explanationDe: "Senkrecht zu einer Gerade h bedeutet immer: 90°-Winkel zu DIESER Gerade h (also n ⊥ h). Linie m ist nur eine normale Sekante zu h!",
          explanationEs: "Perpendicular a una recta h significa siempre formar 90° con ESA recta h (n ⊥ h). ¡La línea m es solo una secante común respecto a h!"
        },
        {
          id: "pb_4",
          topicDe: "89°-Falle (Spitz vs. Recht)",
          questionDe: "Aufgepasst beim Rechnen! Gegeben ist der große Außenwinkel ∡CBA = 271°. Wie groß ist ∡ABC und zu welcher Winkelart gehört er?",
          questionEs: "¡Cuidado al calcular! Se da el ángulo exterior grande ∡CBA = 271°. ¿Cuánto mide ∡ABC y a qué tipo de ángulo pertenece?",
          svgSpec: { type: "angle_pair", vertex: "B", p1: "A", p2: "C", d1: 89, d2: 271, given: 2 },
          options: [
            { textDe: "∡ABC = 89° → Spitzer Winkel (weil 89° knapp kleiner als 90° ist!)", textEs: "∡ABC = 89° → Ángulo agudo (¡porque 89° es menor que 90°!)", correct: true },
            { textDe: "∡ABC = 89° → Rechter Winkel (weil es fast 90° ist)", textEs: "∡ABC = 89° → Ángulo recto (porque es casi 90°)", correct: false },
            { textDe: "∡ABC = 91° → Stumpfer Winkel", textEs: "∡ABC = 91° → Ángulo obtuso", correct: false },
            { textDe: "∡ABC = 99° → Stumpfer Winkel", textEs: "∡ABC = 99° → Ángulo obtuso", correct: false }
          ],
          explanationDe: "360° − 271° = 89°. Ein Rechter Winkel muss GENAU 90° haben. 89° gehört noch zu 1°–89° → Spitzer Winkel!",
          explanationEs: "360° − 271° = 89°. Un ángulo recto debe medir EXACTAMENTE 90°. ¡89° sigue estando entre 1° y 89°, así que es Spitzer Winkel!"
        },
        {
          id: "pb_5",
          topicDe: "91°-Falle (Recht vs. Stumpf)",
          questionDe: "Gegeben ist der Außenwinkel ∡NML = 269°. Berechne ∡LMN und bestimme die genaue Sortierung von ∡LMN:",
          questionEs: "Se da el ángulo exterior ∡NML = 269°. Calcula ∡LMN y determina su clasificación exacta:",
          svgSpec: { type: "angle_pair", vertex: "M", p1: "L", p2: "N", d1: 91, d2: 269, given: 2 },
          options: [
            { textDe: "∡LMN = 91° → Stumpfer Winkel (91° – 179°)", textEs: "∡LMN = 91° → Ángulo obtuso (91° – 179°)", correct: true },
            { textDe: "∡LMN = 91° → Rechter Winkel", textEs: "∡LMN = 91° → Ángulo recto", correct: false },
            { textDe: "∡LMN = 89° → Spitzer Winkel", textEs: "∡LMN = 89° → Ángulo agudo", correct: false },
            { textDe: "∡LMN = 101° → Überstumpfer Winkel", textEs: "∡LMN = 101° → Ángulo mayor de 180°", correct: false }
          ],
          explanationDe: "360° − 269° = 91°. Ab 91° bis 179° heißt der Winkel Stumpfer Winkel!",
          explanationEs: "360° − 269° = 91°. Desde 91° hasta 179° el ángulo se llama Stumpfer Winkel (obtuso)."
        },
        {
          id: "pb_6",
          topicDe: "181°-Falle (Gestreckt vs. Überstumpf)",
          questionDe: "Gegeben ist ∡PQR = 179° (Stumpfer Winkel). Wie groß ist der Gegenwinkel ∡RQP und wie wird ∡RQP sortiert?",
          questionEs: "Se da ∡PQR = 179° (obtuso). ¿Cuánto mide el ángulo conjugado ∡RQP y cómo se clasifica ∡RQP?",
          svgSpec: { type: "angle_pair", vertex: "Q", p1: "P", p2: "R", d1: 179, d2: 181, given: 1 },
          options: [
            { textDe: "∡RQP = 181° → Überstumpfer Winkel (181° – 359°)", textEs: "∡RQP = 181° → Überstumpfer Winkel (181° – 359°)", correct: true },
            { textDe: "∡RQP = 181° → Gestreckter Winkel", textEs: "∡RQP = 181° → Ángulo extendido", correct: false },
            { textDe: "∡RQP = 180° → Gestreckter Winkel", textEs: "∡RQP = 180° → Ángulo extendido", correct: false },
            { textDe: "∡RQP = 181° → Stumpfer Winkel", textEs: "∡RQP = 181° → Ángulo obtuso", correct: false }
          ],
          explanationDe: "360° − 179° = 181°. Da 181° größer als 180° ist, ist es bereits ein Überstumpfer Winkel!",
          explanationEs: "360° − 179° = 181°. Como 181° ya pasa de 180°, ¡es un Überstumpfer Winkel!"
        },
        {
          id: "pb_7",
          topicDe: "Richtungs-Falle (Gegen den Uhrzeigersinn ↺)",
          questionDe: "Wie bei Übung #3 im Heft (21. Okt): Von Strahl AB gegen den Uhrzeigersinn (↺ oben herum) bis AC sind es ∡BAC = 210°. Wie groß ist ∡CAB (unten herum ↺) und welche Winkelart ist ∡CAB?",
          questionEs: "Como en el ejercicio #3 del cuaderno (21 oct): Del rayo AB en sentido antihorario (↺ por arriba) hasta AC hay ∡BAC = 210°. ¿Cuánto mide ∡CAB (por abajo ↺) y qué tipo de ángulo es ∡CAB?",
          svgSpec: { type: "angle_pair", vertex: "A", p1: "B", p2: "C", d1: 210, d2: 150, given: 1 },
          options: [
            { textDe: "∡CAB = 150° → Stumpfer Winkel", textEs: "∡CAB = 150° → Ángulo obtuso (Stumpfer Winkel)", correct: true },
            { textDe: "∡CAB = 150° → Überstumpfer Winkel", textEs: "∡CAB = 150° → Mayor de 180°", correct: false },
            { textDe: "∡CAB = 50° → Spitzer Winkel", textEs: "∡CAB = 50° → Ángulo agudo", correct: false },
            { textDe: "∡CAB = 210° → Überstumpfer Winkel", textEs: "∡CAB = 210° → Mayor de 180°", correct: false }
          ],
          explanationDe: "360° − 210° = 150°. Und 150° liegt zwischen 91° und 179°, also ist ∡CAB ein Stumpfer Winkel!",
          explanationEs: "360° − 210° = 150°. Y 150° está entre 91° y 179°, por lo tanto ∡CAB es un Stumpfer Winkel."
        },
        {
          id: "pb_8",
          topicDe: "Geodreieck-Skala (Stumpfer Winkel)",
          questionDe: "Du misst den deutlich geöffneten Winkel ∡MNO (größer als 90°!). Der Strahl NO geht auf dem Geodreieck durch die Zahlen 65° und 115°. Welches Maß hat ∡MNO und wie groß ist ∡ONM?",
          questionEs: "Mides el ángulo claramente abierto ∡MNO (¡mayor que 90°!). El rayo NO pasa en el Geodreieck por los números 65° y 115°. ¿Cuánto mide ∡MNO y cuánto mide ∡ONM?",
          svgSpec: { type: "geodreieck_115_mno" },
          options: [
            { textDe: "∡MNO = 115° (Stumpfer Winkel) · Außenwinkel ∡ONM = 245°", textEs: "∡MNO = 115° (obtuso) · ángulo exterior ∡ONM = 245°", correct: true },
            { textDe: "∡MNO = 65° (Spitzer Winkel) · Außenwinkel ∡ONM = 295°", textEs: "∡MNO = 65° (agudo) · ángulo exterior ∡ONM = 295°", correct: false },
            { textDe: "∡MNO = 115° · Außenwinkel ∡ONM = 65°", textEs: "∡MNO = 115° · ángulo exterior ∡ONM = 65°", correct: false },
            { textDe: "∡MNO = 180° · Außenwinkel ∡ONM = 180°", textEs: "∡MNO = 180° · ángulo exterior ∡ONM = 180°", correct: false }
          ],
          explanationDe: "Da der Winkel weiter geöffnet ist als die 90°-Linie (stumpf), musst du die Zahl über 90° ablesen: 115°! Und 360° − 115° = 245°.",
          explanationEs: "Como el ángulo es más abierto que la línea de 90° (obtuso), debes leer el número mayor que 90°: ¡115°! Y 360° − 115° = 245°."
        },
        {
          id: "pb_9",
          topicDe: "Figuren-Analyse (Trapez ABCD)",
          questionDe: "Schau dir das Trapez ABCD an: Bei A und D sind rechte Winkel (90° ⦜), die Seite BC rechts ist schräg. Welche Aussage über die Seiten stimmt?",
          questionEs: "Mira el trapecio ABCD: en A y D hay ángulos rectos (90° ⦜) y el lado derecho BC es inclinado. ¿Qué afirmación sobre sus lados es verdadera?",
          svgSpec: { type: "trapez_abcd" },
          options: [
            { textDe: "AB ∥ DC (parallel) und AD ⊥ AB (senkrecht)", textEs: "AB ∥ DC (paralelos) y AD ⊥ AB (perpendiculares)", correct: true },
            { textDe: "AD ∥ BC (parallel) und AB ⊥ DC (senkrecht)", textEs: "AD ∥ BC (paralelos) y AB ⊥ DC (perpendiculares)", correct: false },
            { textDe: "BC ⊥ AB (senkrecht bei B)", textEs: "BC ⊥ AB (perpendiculares en B)", correct: false },
            { textDe: "Keine Seite ist parallel zu einer anderen", textEs: "Ningún lado es paralelo a otro", correct: false }
          ],
          explanationDe: "Oben (DC) und unten (AB) laufen waagerecht im gleichen Abstand → AB ∥ DC. Links steht AD im 90°-Winkel auf AB → AD ⊥ AB.",
          explanationEs: "Arriba (DC) y abajo (AB) son paralelos → AB ∥ DC. A la izquierda AD forma 90° con AB → AD ⊥ AB."
        },
        {
          id: "pb_10",
          topicDe: "Bestandteile eines Winkels",
          questionDe: "Wie heißen beim Winkel ∡WXY der Scheitelpunkt und die beiden Schenkel (Strahlen) mit richtiger Symbol-Schreibweise?",
          questionEs: "En el ángulo ∡WXY, ¿cuáles son el vértice (Scheitelpunkt) y los dos lados (Schenkel) escritos con el símbolo correcto de rayo?",
          svgSpec: { type: "angle_pair", vertex: "X", p1: "W", p2: "Y", d1: 65, d2: 295, given: 1 },
          options: [
            { textDe: "Scheitelpunkt: X · Schenkel: die Strahlen ⟼ XW und ⟼ XY (beide starten bei X!)", textEs: "Vértice: X · Lados: los rayos ⟼ XW y ⟼ XY (¡ambos nacen en X!)", correct: true },
            { textDe: "Scheitelpunkt: W · Schenkel: ⟼ WX und ⟼ XY", textEs: "Vértice: W · Lados: ⟼ WX y ⟼ XY", correct: false },
            { textDe: "Scheitelpunkt: X · Schenkel: ⟼ WX und ⟼ YX", textEs: "Vértice: X · Lados: ⟼ WX y ⟼ YX", correct: false },
            { textDe: "Scheitelpunkt: Y · Schenkel: I—I XW und I—I XY", textEs: "Vértice: Y · Lados: segmentos XW y XY", correct: false }
          ],
          explanationDe: "Beide Schenkel eines Winkels sind Strahlen, die im Scheitelpunkt X beginnen! Deshalb steht X bei beiden Symbolen zuerst: ⟼ XW und ⟼ XY.",
          explanationEs: "¡Ambos lados de un ángulo son rayos que nacen en el vértice X! Por eso la letra X va primero en ambos símbolos: ⟼ XW y ⟼ XY."
        },
        {
          id: "pb_11",
          topicDe: "Fast voller Kreis (342°)",
          questionDe: "Gegeben ist der große Winkel ∡FCJ = 342°. Wie groß ist der kleine Winkel ∡JCF und wie werden beide sortiert?",
          questionEs: "Se da el ángulo grande ∡FCJ = 342°. ¿Cuánto mide el ángulo pequeño ∡JCF y cómo se clasifican ambos?",
          svgSpec: { type: "angle_pair", vertex: "C", p1: "F", p2: "J", d1: 342, d2: 18, given: 1 },
          options: [
            { textDe: "∡JCF = 18° (Spitzer Winkel) · ∡FCJ = 342° (Überstumpfer Winkel)", textEs: "∡JCF = 18° (agudo) · ∡FCJ = 342° (mayor de 180°)", correct: true },
            { textDe: "∡JCF = 28° (Spitzer Winkel) · ∡FCJ = 342° (Voller Winkel)", textEs: "∡JCF = 28° (agudo) · ∡FCJ = 342° (completo)", correct: false },
            { textDe: "∡JCF = 18° (Nullwinkel) · ∡FCJ = 342° (Stumpfer Winkel)", textEs: "∡JCF = 18° (nulo) · ∡FCJ = 342° (obtuso)", correct: false },
            { textDe: "∡JCF = 38° (Spitzer Winkel) · ∡FCJ = 342° (Überstumpfer Winkel)", textEs: "∡JCF = 38° · ∡FCJ = 342°", correct: false }
          ],
          explanationDe: "360° − 342° = 18°. 18° ist ein Spitzer Winkel (1°–89°) und 342° ist ein Überstumpfer Winkel (181°–359°).",
          explanationEs: "360° − 342° = 18°. 18° es Spitzer Winkel y 342° es Überstumpfer Winkel."
        },
        {
          id: "pb_12",
          topicDe: "Sekanten vs. Parallelen (Denkfrage)",
          questionDe: "Zwei Geraden g (durch A, B) und h (durch C, D) laufen schräg aufeinander zu, berühren sich aber auf dem kurzen gezeichneten Stück noch nicht. Was sind g und h?",
          questionEs: "Dos rectas g (por A, B) y h (por C, D) se van acercando entre sí, pero en el trozo dibujado aún no alcanzan a tocarse. ¿Qué son las rectas g y h?",
          svgSpec: { type: "converging_secants" },
          options: [
            { textDe: "Sekanten! Weil Geraden (⟷) unendlich lang sind und sich weiter rechts schneiden werden", textEs: "¡Secantes! Porque las rectas (⟷) son infinitas y al prolongarlas se cortan", correct: true },
            { textDe: "Parallelen, weil man auf dem Bild noch keinen Schnittpunkt sieht", textEs: "Paralelas, porque en el dibujo aún no se ve que se toquen", correct: false },
            { textDe: "Senkrechte Linien (g ⊥ h)", textEs: "Líneas perpendiculares (g ⊥ h)", correct: false },
            { textDe: "Geschlossene Kurven", textEs: "Curvas cerradas", correct: false }
          ],
          explanationDe: "Super mitgedacht! Geraden haben kein Ende. Da der Abstand zwischen g und h immer kleiner wird, schneiden sie sich → Sekanten!",
          explanationEs: "¡Muy bien pensado! Las rectas no tienen fin. Como la distancia entre g y h disminuye, al prolongarlas se intersecan → ¡son Sekanten!"
        }
      ]
    },

    probe_c: {
      id: "probe_c",
      levelBadgeDe: "🔴 Niveau 3 · Experten (Note 7,0)",
      levelColor: "hard",
      titleDe: "🔴 Probe C — Niveau 3: Experten-Probe (Für die Note 7,0)",
      titleEs: "Prueba C — Nivel 3: Prueba Experta (Desafíos para el 7.0)",
      descDe: "12 anspruchsvolle Aufgaben für die Bestnote: Kombinierte Figuren, doppelte Senkrechte, geteilte 90°/180°/360°-Winkel, gedrehtes Geodreieck und Stadtplan-Logik.",
      descEs: "12 desafíos avanzados para el 7.0: figuras combinadas, doble perpendicular, ángulos divididos de 90°/180°/360°, Geodreieck rotado y lógica de plano de calles.",
      questions: [
        {
          id: "pc_1",
          topicDe: "Komplexe Figur (Alle Symbole)",
          questionDe: "Betrachte die Figur mit den Punkten A, B, C, D: Zwischen A und B sind zwei Querstriche, von B über C geht ein Pfeil, und durch C und D gehen Pfeile an beiden Enden. Welche Liste stimmt?",
          questionEs: "Observa la figura con los puntos A, B, C, D: entre A y B hay dos topes, de B pasando por C va una flecha, y por C y D hay flechas en ambos extremos. ¿Qué lista es correcta?",
          svgSpec: { type: "fig_abcd_expert" },
          options: [
            { textDe: "I—I AB (Strecke) · ⟼ BC (Strahl) · ⟷ CD (Gerade)", textEs: "I—I AB (Segmento) · ⟼ BC (Rayo) · ⟷ CD (Recta)", correct: true },
            { textDe: "⟼ AB (Strahl) · I—I BC (Strecke) · ⟷ CD (Gerade)", textEs: "⟼ AB (Rayo) · I—I BC (Segmento) · ⟷ CD (Recta)", correct: false },
            { textDe: "I—I AB (Strecke) · ⟼ CB (Strahl) · I—I CD (Strecke)", textEs: "I—I AB (Segmento) · ⟼ CB (Rayo) · I—I CD (Segmento)", correct: false },
            { textDe: "⟷ AB (Gerade) · ⟼ BC (Strahl) · I—I CD (Strecke)", textEs: "⟷ AB (Recta) · ⟼ BC (Rayo) · I—I CD (Segmento)", correct: false }
          ],
          explanationDe: "AB hat zwei Endpunkte → Strecke I—I AB. BC startet bei B mit Pfeil bei C → Strahl ⟼ BC. CD hat zwei Pfeile → Gerade ⟷ CD.",
          explanationEs: "AB tiene dos topes → Strecke I—I AB. BC parte en B con flecha en C → Strahl ⟼ BC. CD tiene dos flechas → Gerade ⟷ CD."
        },
        {
          id: "pc_2",
          topicDe: "Doppelte Senkrechte (Denkaufgabe)",
          questionDe: "Wie beim Leiter-Bild im Heft (13. Okt): Die Gerade a steht senkrecht auf g (a ⊥ g) und die Gerade b steht AUCH senkrecht auf derselben Gerade g (b ⊥ g). Welche Beziehung haben a und b zueinander?",
          questionEs: "Como en el dibujo del cuaderno (13 oct): La recta a es perpendicular a g (a ⊥ g) y la recta b TAMBIÉN es perpendicular a la misma recta g (b ⊥ g). ¿Qué relación tienen a y b entre sí?",
          svgSpec: { type: "double_perp_abg" },
          options: [
            { textDe: "a und b sind parallel zueinander (a ∥ b)!", textEs: "¡a y b son paralelas entre sí (a ∥ b)!", correct: true },
            { textDe: "a und b sind senkrecht zueinander (a ⊥ b)", textEs: "a y b son perpendiculares entre sí (a ⊥ b)", correct: false },
            { textDe: "a und b schneiden sich im 45°-Winkel", textEs: "a y b se cortan en un ángulo de 45°", correct: false },
            { textDe: "a und b sind Kurven", textEs: "a y b son curvas", correct: false }
          ],
          explanationDe: "Genial! Zwei Geraden, die auf derselben Gerade g senkrecht (90°) stehen, laufen in genau dieselbe Richtung und schneiden sich nie → a ∥ b!",
          explanationEs: "¡Brillante! Dos rectas que forman 90° con la misma recta g van exactamente en la misma dirección y nunca se cortan → ¡son paralelas (a ∥ b)!"
        },
        {
          id: "pc_3",
          topicDe: "Gestreckter Winkel teilen (180°)",
          questionDe: "Die Punkte A, S und B liegen auf einer durchgehenden Gerade (Gestreckter Winkel ∡ASB = 180°). Der Strahl ⟼ SC teilt ihn so, dass ∡ASC = 55° ist. Wie groß ist ∡CSB und welche Winkelart ist ∡CSB?",
          questionEs: "Los puntos A, S y B están sobre una línea recta (ángulo extendido ∡ASB = 180°). El rayo ⟼ SC lo divide de modo que ∡ASC = 55°. ¿Cuánto mide ∡CSB y qué tipo de ángulo es?",
          svgSpec: { type: "split_180_asbc" },
          options: [
            { textDe: "∡CSB = 125° (denn 180° − 55° = 125°) → Stumpfer Winkel", textEs: "∡CSB = 125° (porque 180° − 55° = 125°) → Ángulo obtuso", correct: true },
            { textDe: "∡CSB = 305° (denn 360° − 55° = 305°) → Überstumpfer Winkel", textEs: "∡CSB = 305° (porque 360° − 55° = 305°)", correct: false },
            { textDe: "∡CSB = 35° (denn 90° − 55° = 35°) → Spitzer Winkel", textEs: "∡CSB = 35° (porque 90° − 55° = 35°)", correct: false },
            { textDe: "∡CSB = 135° → Stumpfer Winkel", textEs: "∡CSB = 135° → Ángulo obtuso", correct: false }
          ],
          explanationDe: "Zusammen bilden ∡ASC und ∡CSB den gestreckten Winkel von 180°. Also: 180° − 55° = 125° (Stumpfer Winkel)!",
          explanationEs: "Juntos ∡ASC y ∡CSB forman el ángulo extendido de 180°. Por lo tanto: 180° − 55° = 125° (Stumpfer Winkel)."
        },
        {
          id: "pc_4",
          topicDe: "Rechter Winkel teilen (90° & 360°)",
          questionDe: "Der Winkel ∡KLM ist ein Rechter Winkel (90° ⦜). Ein Strahl ⟼ LN teilt ihn so, dass ∡KLN = 35° misst. Wie groß sind der zweite Teilwinkel ∡NLM und der große Außenwinkel ∡MLK?",
          questionEs: "El ángulo ∡KLM es un ángulo recto (90° ⦜). Un rayo ⟼ LN lo divide de modo que ∡KLN = 35°. ¿Cuánto miden la otra parte ∡NLM y el ángulo exterior ∡MLK?",
          svgSpec: { type: "split_90_klmn" },
          options: [
            { textDe: "∡NLM = 55° (90° − 35°) und Außenwinkel ∡MLK = 270° (360° − 90°)", textEs: "∡NLM = 55° (90° − 35°) y ángulo exterior ∡MLK = 270° (360° − 90°)", correct: true },
            { textDe: "∡NLM = 65° und Außenwinkel ∡MLK = 270°", textEs: "∡NLM = 65° y ángulo exterior ∡MLK = 270°", correct: false },
            { textDe: "∡NLM = 55° und Außenwinkel ∡MLK = 180°", textEs: "∡NLM = 55° y ángulo exterior ∡MLK = 180°", correct: false },
            { textDe: "∡NLM = 45° und Außenwinkel ∡MLK = 325°", textEs: "∡NLM = 45° y ángulo exterior ∡MLK = 325°", correct: false }
          ],
          explanationDe: "Der rechte Winkel hat 90°: 90° − 35° = 55° für ∡NLM. Und außen herum um den rechten Winkel sind es 360° − 90° = 270° für ∡MLK!",
          explanationEs: "El ángulo recto mide 90°: 90° − 35° = 55° para ∡NLM. Y por fuera del ángulo recto son 360° − 90° = 270° para ∡MLK."
        },
        {
          id: "pc_5",
          topicDe: "Gedrehte Messung am Geodreieck",
          questionDe: "Der Scheitelpunkt B liegt auf der 0 des Geodreiecks, aber der 1. Schenkel BA zeigt auf 20° und der 2. Schenkel BC zeigt auf 130°. Wie groß ist der Winkel ∡ABC zwischen den beiden Schenkeln?",
          questionEs: "El vértice B está en el 0 del Geodreieck, pero el 1er rayo BA apunta a 20° y el 2do rayo BC apunta a 130°. ¿Cuánto mide el ángulo ∡ABC entre ambos rayos?",
          svgSpec: { type: "diff_geodreieck_20_130" },
          options: [
            { textDe: "∡ABC = 110° (denn 130° − 20° = 110°, Stumpfer Winkel)", textEs: "∡ABC = 110° (porque 130° − 20° = 110°, ángulo obtuso)", correct: true },
            { textDe: "∡ABC = 130° (man liest nur den zweiten Schenkel ab)", textEs: "∡ABC = 130° (solo se lee el segundo rayo)", correct: false },
            { textDe: "∡ABC = 150° (denn 130° + 20° = 150°)", textEs: "∡ABC = 150° (porque 130° + 20° = 150°)", correct: false },
            { textDe: "∡ABC = 70° (Spitzer Winkel)", textEs: "∡ABC = 70° (ángulo agudo)", correct: false }
          ],
          explanationDe: "Von 20° bis 130° dreht sich der Winkel um die Differenz: 130° − 20° = 110° (Stumpfer Winkel)!",
          explanationEs: "Desde 20° hasta 130° la abertura entre los dos rayos es la resta: 130° − 20° = 110° (Stumpfer Winkel)."
        },
        {
          id: "pc_6",
          topicDe: "3 Strahlen um einen Punkt (360°)",
          questionDe: "Vom Scheitelpunkt S gehen drei Strahlen aus: ⟼ SA, ⟼ SB und ⟼ SC. Gegeben sind ∡ASB = 110° und ∡BSC = 130°. Wie groß muss der dritte Winkel ∡CSA sein, damit der Kreis (360°) voll wird?",
          questionEs: "Desde el vértice S salen tres rayos: ⟼ SA, ⟼ SB y ⟼ SC. Si ∡ASB = 110° y ∡BSC = 130°, ¿cuánto debe medir el tercer ángulo ∡CSA para completar la vuelta de 360°?",
          svgSpec: { type: "three_rays_360" },
          options: [
            { textDe: "∡CSA = 120° (denn 110° + 130° = 240° und 360° − 240° = 120°)", textEs: "∡CSA = 120° (porque 110° + 130° = 240° y 360° − 240° = 120°)", correct: true },
            { textDe: "∡CSA = 140°", textEs: "∡CSA = 140°", correct: false },
            { textDe: "∡CSA = 60° (denn 180° − 120° = 60°)", textEs: "∡CSA = 60°", correct: false },
            { textDe: "∡CSA = 240°", textEs: "∡CSA = 240°", correct: false }
          ],
          explanationDe: "Alle Winkel rund um einen Punkt S ergeben zusammen einen Vollen Winkel (360°): 360° − 110° − 130° = 120°!",
          explanationEs: "Todos los ángulos alrededor de un punto S suman un Voller Winkel (360°): 360° − 110° − 130° = 120°."
        },
        {
          id: "pc_7",
          topicDe: "Gedrehtes Quadrat (Raute EFGH)",
          questionDe: "Wie auf der Heftseite vom 6./8. Oktober: Ein Quadrat EFGH wurde um 45° gedreht, sodass alle vier Seiten schräg zum Blattrand liegen. Stehen die Seiten EF und FG trotzdem noch senkrecht (⊥, 90°) aufeinander?",
          questionEs: "Como en la página del 6/8 de octubre del cuaderno: Un cuadrado EFGH se giró en 45° de modo que sus 4 lados quedaron oblicuos a la hoja. ¿Siguen siendo perpendiculares (⊥, 90°) entre sí los lados EF y FG?",
          svgSpec: { type: "rotated_square_efgh" },
          options: [
            { textDe: "Ja! Sie sind schräg zum Boden, aber der Winkel ∡EFG zwischen ihnen bleibt genau 90° (EF ⊥ FG)!", textEs: "¡Sí! Están oblicuos al suelo, pero el ángulo ∡EFG entre ellos sigue siendo exactamente 90° (EF ⊥ FG)", correct: true },
            { textDe: "Nein, senkrechte Linien müssen immer vertikal zum Blattrand sein", textEs: "No, las líneas perpendiculares deben ser siempre verticales a la hoja", correct: false },
            { textDe: "Nein, durch das Drehen wird der Winkel zu 45° (spitzer Winkel)", textEs: "No, al girarlo el ángulo cambia a 45°", correct: false },
            { textDe: "EF und FG sind jetzt parallel zueinander", textEs: "EF y FG ahora son paralelos entre sí", correct: false }
          ],
          explanationDe: "Wichtige Erkenntnis aus dem Heft: Wenn man eine Figur dreht, ändern sich die Winkel IN der Figur nicht! Im Quadrat bleibt jede Ecke 90° (EF ⊥ FG).",
          explanationEs: "Concepto clave del cuaderno: al girar una figura, los ángulos ENTRE sus lados no cambian. En el cuadrado cada esquina sigue siendo 90° (EF ⊥ FG)."
        },
        {
          id: "pc_8",
          topicDe: "Gedrehter Winkel nennen (↺)",
          questionDe: "In der Zeichnung zeigt Strahl QP nach links oben (140°) und Strahl QR nach links unten (205°). Wenn man gegen den Uhrzeigersinn (↺) von P über Q nach R geht, sind es 65°. Welches Winkelpaar stimmt?",
          questionEs: "En el dibujo, el rayo QP apunta arriba-izquierda (140°) y el rayo QR apunta abajo-izquierda (205°). Yendo en sentido antihorario (↺) de P a R hay 65°. ¿Qué par de ángulos es el correcto?",
          svgSpec: { type: "angle_pair", vertex: "Q", p1: "P", p2: "R", startDeg: 140, d1: 65, d2: 295, given: 1 },
          options: [
            { textDe: "∡PQR = 65° (Spitzer Winkel) und ∡RQP = 295° (Überstumpfer Winkel)", textEs: "∡PQR = 65° (agudo) y ∡RQP = 295° (mayor de 180°)", correct: true },
            { textDe: "∡RQP = 65° und ∡PQR = 295°", textEs: "∡RQP = 65° y ∡PQR = 295°", correct: false },
            { textDe: "∡PQR = 65° und ∡RQP = 115°", textEs: "∡PQR = 65° y ∡RQP = 115°", correct: false },
            { textDe: "∡PRQ = 65° und ∡QRP = 295° (Scheitelpunkt R)", textEs: "∡PRQ = 65° y ∡QRP = 295° (vértice R)", correct: false }
          ],
          explanationDe: "Gegen den Uhrzeigersinn von P nach R ist der kleine Bogen (65°), also ∡PQR = 65°. Von R gegen den Uhrzeigersinn zurück nach P sind es 360° − 65° = 295° (∡RQP)!",
          explanationEs: "En sentido antihorario de P a R es el arco pequeño (65°), es decir ∡PQR = 65°. Y de R a P en sentido antihorario son 360° − 65° = 295° (∡RQP)."
        },
        {
          id: "pc_9",
          topicDe: "Winkel-Rätsel (3 × Rechter Winkel)",
          questionDe: "Der Winkel ∡DEF ist genau dreimal so groß wie ein Rechter Winkel (3 × 90°). Wie groß ist ∡DEF, welche Winkelart ist er, und wie groß ist sein Gegenwinkel ∡FED?",
          questionEs: "El ángulo ∡DEF mide exactamente el triple de un ángulo recto (3 × 90°). ¿Cuánto mide ∡DEF, qué tipo de ángulo es y cuánto mide su ángulo inverso ∡FED?",
          svgSpec: { type: "angle_pair", vertex: "E", p1: "D", p2: "F", d1: 270, d2: 90, given: 2 },
          options: [
            { textDe: "∡DEF = 270° (Überstumpfer Winkel) · Gegenwinkel ∡FED = 90° (Rechter Winkel)", textEs: "∡DEF = 270° (Überstumpfer) · ángulo inverso ∡FED = 90° (Rechter Winkel)", correct: true },
            { textDe: "∡DEF = 180° (Gestreckter Winkel) · Gegenwinkel ∡FED = 180°", textEs: "∡DEF = 180° · ángulo inverso ∡FED = 180°", correct: false },
            { textDe: "∡DEF = 270° (Stumpfer Winkel) · Gegenwinkel ∡FED = 90°", textEs: "∡DEF = 270° (obtuso) · ángulo inverso ∡FED = 90°", correct: false },
            { textDe: "∡DEF = 360° (Voller Winkel) · Gegenwinkel ∡FED = 0°", textEs: "∡DEF = 360° · ángulo inverso ∡FED = 0°", correct: false }
          ],
          explanationDe: "3 × 90° = 270° (liegt zwischen 181° und 359° → Überstumpfer Winkel). Und 360° − 270° = 90° (Rechter Winkel)!",
          explanationEs: "3 × 90° = 270° (está entre 181° y 359° → Überstumpfer Winkel). Y 360° − 270° = 90° (Rechter Winkel)."
        },
        {
          id: "pc_10",
          topicDe: "Zwei Spitze Winkel addieren",
          questionDe: "Am Scheitelpunkt M liegen zwei spitze Winkel direkt nebeneinander: ∡KML = 48° und ∡LMN = 45°. Wie groß ist der gesamte Winkel ∡KMN und zu welcher Winkelart gehört er?",
          questionEs: "En el vértice M hay dos ángulos agudos seguidos: ∡KML = 48° y ∡LMN = 45°. ¿Cuánto mide el ángulo total ∡KMN y a qué clasificación pertenece?",
          svgSpec: { type: "add_angles_48_45" },
          options: [
            { textDe: "∡KMN = 93° (48° + 45°) → Stumpfer Winkel (weil 93° größer als 90° ist!)", textEs: "∡KMN = 93° (48° + 45°) → Ángulo obtuso (¡porque 93° es mayor que 90°!)", correct: true },
            { textDe: "∡KMN = 93° → Spitzer Winkel (weil beide Teile spitz waren)", textEs: "∡KMN = 93° → Ángulo agudo", correct: false },
            { textDe: "∡KMN = 90° → Rechter Winkel", textEs: "∡KMN = 90° → Ángulo recto", correct: false },
            { textDe: "∡KMN = 83° → Spitzer Winkel", textEs: "∡KMN = 83° → Ángulo agudo", correct: false }
          ],
          explanationDe: "48° + 45° = 93°. Da 93° zwischen 91° und 179° liegt, entsteht zusammen ein Stumpfer Winkel!",
          explanationEs: "48° + 45° = 93°. Como 93° está entre 91° y 179°, ¡la suma forma un Stumpfer Winkel (obtuso)!"
        },
        {
          id: "pc_11",
          topicDe: "Parallelen & Senkrechte im Stadtplan",
          questionDe: "Im Plan läuft die Hauptstraße (Gerade g) von A nach B. Die Parkstraße (h) ist parallel zu g (h ∥ g). Die Schulstraße (s) steht senkrecht auf der Hauptstraße (s ⊥ g). Wie steht die Schulstraße s dann zur Parkstraße h?",
          questionEs: "En el plano, la calle principal (recta g) va de A a B. La calle del Parque (h) es paralela a g (h ∥ g). La calle del Colegio (s) es perpendicular a g (s ⊥ g). ¿Cómo es entonces la calle s respecto a la calle h?",
          svgSpec: { type: "street_map_ghs" },
          options: [
            { textDe: "Auch senkrecht (s ⊥ h, 90°)! Wenn g ∥ h ist und s ⊥ g steht, schneidet s auch h im 90°-Winkel", textEs: "¡También perpendicular (s ⊥ h, 90°)! Si g ∥ h y s ⊥ g, entonces s también corta a h en 90°", correct: true },
            { textDe: "Parallel zu h (s ∥ h)", textEs: "Paralela a h (s ∥ h)", correct: false },
            { textDe: "Sie schneiden sich überhaupt nicht", textEs: "No se cortan nunca", correct: false },
            { textDe: "Im 30°-Winkel (Spitzer Winkel)", textEs: "En un ángulo de 30°", correct: false }
          ],
          explanationDe: "Wenn zwei Straßen g und h parallel sind (g ∥ h), dann schneidet jede Querstraße s, die zu g im 90°-Winkel steht, auch h genau im 90°-Winkel (s ⊥ h)!",
          explanationEs: "Si dos calles g y h son paralelas (g ∥ h), cualquier calle transversal s que sea perpendicular a g también cortará a h en 90° (s ⊥ h)."
        },
        {
          id: "pc_12",
          topicDe: "Meister-Check (Alle Regeln)",
          questionDe: "Welche Aussage über das Bild mit den Punkten B, K und M (∡MKB = 105° und ∡BKM = 255°) ist komplett richtig?",
          questionEs: "¿Cuál afirmación sobre la figura con los puntos B, K y M (∡MKB = 105° y ∡BKM = 255°) es completamente verdadera?",
          svgSpec: { type: "angle_pair", vertex: "K", p1: "M", p2: "B", d1: 105, d2: 255, given: 1 },
          options: [
            { textDe: "K ist der Scheitelpunkt, ⟼ KM und ⟼ KB sind die Schenkel, 105° ist ein Stumpfer Winkel, 255° ein Überstumpfer Winkel und 105° + 255° = 360°", textEs: "K es el vértice, ⟼ KM y ⟼ KB son los rayos, 105° es obtuso, 255° es mayor de 180° y suman 360°", correct: true },
            { textDe: "M ist der Scheitelpunkt, 105° ist ein Spitzer Winkel und 255° ein Stumpfer Winkel", textEs: "M es el vértice, 105° es agudo y 255° es obtuso", correct: false },
            { textDe: "K ist der Scheitelpunkt, aber beide Winkel müssen zusammen 180° ergeben", textEs: "K es el vértice, pero ambos ángulos deben sumar 180°", correct: false },
            { textDe: "Die Schenkel sind die Strecken I—I MB und I—I BK", textEs: "Los lados son los segmentos MB y BK", correct: false }
          ],
          explanationDe: "Perfekt zusammengefasst! Scheitelpunkt K in der Mitte, Strahlen ⟼ KM und ⟼ KB als Schenkel, 105° = Stumpfer Winkel, 255° = Überstumpfer Winkel, Summe = 360°!",
          explanationEs: "¡Resumen perfecto! Vértice K al medio, rayos ⟼ KM y ⟼ KB como lados, 105° = Stumpfer Winkel, 255° = Überstumpfer Winkel, suma = 360°."
        }
      ]
    }
  },

  // ===========================================================================
  // TAB 7: MIKA-ARENA — PROBE FREITAG, 13. NOVEMBER
  // (Polygone, Dreiecke, Vierecke, Symmetrie, Koordinatensystem & Vektoren)
  // ===========================================================================
  mikaNov13Arena: {
    worlds: [
      {
        id: "all",
        icon: "🌟",
        titleDe: "Alle Themen (38 Fragen)",
        titleEs: "Todos los temas de la prueba del 13 de nov."
      },
      {
        id: "polygone",
        icon: "🔷",
        titleDe: "1. Polygone (3–20 Ecken)",
        titleEs: "Polígonos: Dreieck hasta Zwanzigeck"
      },
      {
        id: "dreiecke",
        icon: "🔺",
        titleDe: "2. Dreiecke & Rätsel",
        titleEs: "Triángulos por lados/ángulos y palabras secretas"
      },
      {
        id: "vierecke",
        icon: "💎",
        titleDe: "3. Vierecke & Symmetrie",
        titleEs: "Las 3 familias de cuadriláteros, trampas y acertijos"
      },
      {
        id: "koordinaten",
        icon: "🧭",
        titleDe: "4. Koordinaten & Vektoren",
        titleEs: "Puntos (x|y), vectores de desplazamiento y simetría"
      },
      {
        id: "random_mix",
        icon: "🎲",
        titleDe: "5. Zufalls-Arena (Neu!)",
        titleEs: "Generador infinito de preguntas nuevas"
      }
    ],

    questions: [
      // =======================================================================
      // WELT 1: POLYGONE (Heft: Montag, 26. Oktober & S. 11)
      // =======================================================================
      {
        id: "m13_poly_1",
        world: "polygone",
        topicDe: "Polygone · Heft 26. Oktober",
        questionDe: "Zähle die Ecken, Seiten und Winkel dieser gelb leuchtenden Figur! Wie heißt dieses Polygon auf Deutsch?",
        questionEs: "¡Cuenta los vértices, lados y ángulos de esta figura! ¿Cómo se llama este polígono de 6 lados en alemán?",
        hintDe: "Achtung Heft-Falle: Auf Spanisch heißt es Hexágono (6). Auf Deutsch schreibt man „Sechs“ + „eck“!",
        hintEs: "Ojo con la ortografía en alemán: viene del número 6 (sechs) + eck.",
        svgSpec: { type: "polygon_regular", sides: 6, color: "#eab308", fill: "#fef9c3", labelCenter: "6 Ecken" },
        options: [
          { textDe: "Das Sechseck (6 Ecken, 6 Seiten, 6 Winkel)", textEs: "Sechseck (Hexágono: 6 vértices, 6 lados, 6 ángulos)", correct: true },
          { textDe: "Das Fünfeck (5 Ecken, 5 Seiten, 5 Winkel)", textEs: "Fünfeck (Pentágono: 5 lados)", correct: false },
          { textDe: "Das Siebeneck (7 Ecken, 7 Seiten, 7 Winkel)", textEs: "Siebeneck (Heptágono: 7 lados)", correct: false },
          { textDe: "Das Achteck (8 Ecken, 8 Seiten, 8 Winkel)", textEs: "Achteck (Octágono: 8 lados)", correct: false }
        ],
        explanationDe: "Super! Ein Polygon mit 6 Ecken, 6 Seiten und 6 Winkeln heißt auf Deutsch das Sechseck (mit „chs“ geschrieben, von sechs = 6!).",
        explanationEs: "¡Excelente! Un polígono de 6 lados se escribe «Sechseck» en alemán (de sechs = 6)."
      },
      {
        id: "m13_poly_2",
        world: "polygone",
        topicDe: "Polygone · Heft 26. Oktober",
        questionDe: "Welches Polygon aus deiner Hefttabelle vom 26. Oktober hat genau 5 Ecken, 5 Seiten und 5 Winkel?",
        questionEs: "¿Qué polígono de tu tabla del 26 de octubre tiene exactamente 5 vértices (Ecken), 5 lados (Seiten) y 5 ángulos (Winkel)?",
        hintDe: "5 = fünf → Fünf + eck!",
        hintEs: "5 en alemán es «fünf».",
        svgSpec: { type: "polygon_regular", sides: 5, color: "#ec4899", fill: "#fce7f3", labelCenter: "5 Ecken" },
        options: [
          { textDe: "Das Fünfeck (Pentágono)", textEs: "El Fünfeck (pentágono)", correct: true },
          { textDe: "Das Viereck (Cuadrilátero)", textEs: "El Viereck (cuadrilátero)", correct: false },
          { textDe: "Das Neuneck (Eneágono)", textEs: "El Neuneck (nonágono / eneágono)", correct: false },
          { textDe: "Das Zehneck (Decágono)", textEs: "El Zehneck (decágono)", correct: false }
        ],
        explanationDe: "Genau! 5 Ecken, 5 Seiten und 5 Winkel = das Fünfeck (auf Spanisch: Pentágono).",
        explanationEs: "¡Exacto! 5 vértices, 5 lados y 5 ángulos = das Fünfeck (pentágono)."
      },
      {
        id: "m13_poly_3",
        world: "polygone",
        topicDe: "Polygone · Heft 26. Oktober",
        questionDe: "Ein Stoppschild auf der Straße hat 8 Ecken, 8 gerade Seiten und 8 Winkel. Wie heißt dieses Polygon?",
        questionEs: "Una señal de PARE (STOP) tiene 8 vértices, 8 lados rectos y 8 ángulos. ¿Cómo se llama este polígono en alemán?",
        hintDe: "8 auf Deutsch ist „acht“.",
        hintEs: "8 en alemán es «acht».",
        svgSpec: { type: "polygon_regular", sides: 8, color: "#dc2626", fill: "#fee2e2", labelCenter: "8 Ecken" },
        options: [
          { textDe: "Das Achteck (Octágono / Octógono)", textEs: "Das Achteck (octágono)", correct: true },
          { textDe: "Das Siebeneck (Heptágono)", textEs: "Das Siebeneck (heptágono)", correct: false },
          { textDe: "Das Neuneck (Nonágono)", textEs: "Das Neuneck (nonágono)", correct: false },
          { textDe: "Das Zwanzigeck (Icoságono)", textEs: "Das Zwanzigeck (icoságono)", correct: false }
        ],
        explanationDe: "Richtig! 8 Ecken, 8 Seiten und 8 Winkel = das Achteck.",
        explanationEs: "¡Correcto! 8 vértices, 8 lados y 8 ángulos = das Achteck."
      },
      {
        id: "m13_poly_4",
        world: "polygone",
        topicDe: "Polygone · Heft 26. Oktober",
        questionDe: "Ganz unten in deiner Hefttabelle vom 26. Oktober steht der Rekord-Champion mit 20 Ecken, 20 Seiten und 20 Winkeln (Icoságono). Wie heißt er auf Deutsch?",
        questionEs: "Al final de tu tabla del 26 de octubre está el campeón con 20 vértices, 20 lados y 20 ángulos (icoságono). ¿Cómo se llama en alemán?",
        hintDe: "20 auf Deutsch heißt „zwanzig“!",
        hintEs: "20 en alemán se dice «zwanzig».",
        svgSpec: { type: "polygon_regular", sides: 20, color: "#7c3aed", fill: "#ede9fe", labelCenter: "20 Ecken!" },
        options: [
          { textDe: "Das Zwanzigeck (20 Ecken, 20 Seiten, 20 Winkel)", textEs: "Das Zwanzigeck (20 vértices, 20 lados, 20 ángulos)", correct: true },
          { textDe: "Das Zehneck (10 Ecken, 10 Seiten, 10 Winkel)", textEs: "Das Zehneck (10 lados)", correct: false },
          { textDe: "Das Zweieck (2 Ecken)", textEs: "Das Zweieck (2 esquinas)", correct: false },
          { textDe: "Das Neuneck (9 Ecken, 9 Seiten, 9 Winkel)", textEs: "Das Neuneck (9 lados)", correct: false }
        ],
        explanationDe: "Spitze! 20 = zwanzig → das Zwanzigeck (auf Spanisch: Icoságono) hat 20 Ecken, 20 Seiten und 20 Winkel.",
        explanationEs: "¡Genial! 20 = zwanzig → das Zwanzigeck (icoságono) tiene 20 vértices, 20 lados y 20 ángulos."
      },
      {
        id: "m13_poly_5",
        world: "polygone",
        topicDe: "Polygone · Heft 26. Oktober",
        questionDe: "Welche Reihe ordnet diese vier Polygone richtig nach der Anzahl ihrer Ecken von KLEIN nach GROSS?",
        questionEs: "¿Qué alternativa ordena estos cuatro polígonos correctamente según su número de vértices de MENOR a MAYOR?",
        hintDe: "Sieben (7), Acht (8), Neun (9), Zehn (10)!",
        hintEs: "Recuerda los números: sieben (7), acht (8), neun (9), zehn (10).",
        svgSpec: { type: "polygon_regular", sides: 7, color: "#0284c7", fill: "#e0f2fe", labelCenter: "7 → 8 → 9 → 10" },
        options: [
          { textDe: "Siebeneck (7) → Achteck (8) → Neuneck (9) → Zehneck (10)", textEs: "Siebeneck (7) → Achteck (8) → Neuneck (9) → Zehneck (10)", correct: true },
          { textDe: "Sechseck (6) → Neuneck (9) → Achteck (8) → Siebeneck (7)", textEs: "Sechseck (6) → Neuneck (9) → Achteck (8) → Siebeneck (7)", correct: false },
          { textDe: "Zehneck (10) → Neuneck (9) → Achteck (8) → Siebeneck (7)", textEs: "Zehneck (10) → Neuneck (9) → Achteck (8) → Siebeneck (7)", correct: false },
          { textDe: "Dreieck (3) → Fünfeck (5) → Viereck (4) → Sechseck (6)", textEs: "Dreieck (3) → Fünfeck (5) → Viereck (4) → Sechseck (6)", correct: false }
        ],
        explanationDe: "Perfekt! Siebeneck (7 Ecken) < Achteck (8 Ecken) < Neuneck (9 Ecken) < Zehneck (10 Ecken).",
        explanationEs: "¡Perfecto! Siebeneck (7) < Achteck (8) < Neuneck (9) < Zehneck (10)."
      },
      {
        id: "m13_poly_6",
        world: "polygone",
        topicDe: "Vierecke erkennen · Arbeitsblatt S. 11",
        questionDe: "Schau dir die 4 Figuren A, B, C und D genau an (wie auf Seite 11 „Kreise die Vierecke ein“). Welche Figur ist ein echtes Viereck?",
        questionEs: "Mira con atención las 4 figuras A, B, C y D (como en la página 11 «Kreise die Vierecke ein»). ¿Cuál de ellas es un verdadero Viereck (cuadrilátero)?",
        hintDe: "Ein Viereck muss geschlossen sein, nur gerade Strecken haben und genau 4 Ecken besitzen!",
        hintEs: "Un Viereck debe ser cerrado, tener solo lados rectos y tener exactamente 4 esquinas.",
        svgSpec: { type: "not_a_viereck_lineup" },
        options: [
          { textDe: "Nur Figur D (gedrehtes Quadrat mit 4 geraden Seiten und 4 Ecken)", textEs: "Solo la figura D (cuadrado girado con 4 lados rectos y 4 vértices)", correct: true },
          { textDe: "Figur B (sie hat zwar eine Öffnung, aber 4 Seiten-Teile)", textEs: "La figura B (aunque está abierta)", correct: false },
          { textDe: "Figur C (das Fenster mit dem runden Bogen oben)", textEs: "La figura C (la ventana con arco curvo arriba)", correct: false },
          { textDe: "Figur A (das graue Fünfeck)", textEs: "La figura A (el pentágono gris)", correct: false }
        ],
        explanationDe: "Genau wie auf deinem Arbeitsblatt S. 11! A hat 5 Ecken (Fünfeck), B ist eine offene Linie, C hat oben eine runde Kurve. Nur D ist ein geschlossenes Viereck!",
        explanationEs: "¡Tal como en tu guía de la pág. 11! A tiene 5 esquinas (Fünfeck), B es una línea abierta y C tiene una curva. ¡Solo D es un Viereck cerrado!"
      },
      {
        id: "m13_poly_7",
        world: "polygone",
        topicDe: "Polygone · Grundregel",
        questionDe: "Ein Neuneck (Eneágono / Nonágono) hat 9 Ecken. Wie viele Seiten und wie viele Innenwinkel hat es dann?",
        questionEs: "Un Neuneck (nonágono / eneágono) tiene 9 vértices (Ecken). ¿Cuántos lados (Seiten) y cuántos ángulos (Winkel) tiene entonces?",
        hintDe: "Schau in die drei Spalten deiner Hefttabelle vom 26. Oktober: Ecken, Seiten, Winkel!",
        hintEs: "Mira las 3 columnas de tu tabla del 26 de octubre: Ecken, Seiten, Winkel.",
        svgSpec: { type: "polygon_regular", sides: 9, color: "#0d9488", fill: "#ccfbf1", labelCenter: "9 Ecken" },
        options: [
          { textDe: "Genau 9 Seiten und 9 Winkel (bei jedem Polygon sind Ecken = Seiten = Winkel!)", textEs: "Exactamente 9 lados y 9 ángulos (¡en todo polígono Ecken = Seiten = Winkel!)", correct: true },
          { textDe: "9 Seiten, aber 18 Winkel", textEs: "9 lados, pero 18 ángulos", correct: false },
          { textDe: "8 Seiten und 9 Winkel", textEs: "8 lados y 9 ángulos", correct: false },
          { textDe: "10 Seiten und 9 Winkel", textEs: "10 lados y 9 ángulos", correct: false }
        ],
        explanationDe: "Goldene Regel aus deiner Tabelle vom 26. Oktober: Jedes Polygon hat immer genau gleich viele Ecken, Seiten und Winkel (9 Ecken, 9 Seiten, 9 Winkel)!",
        explanationEs: "Regla de oro de tu tabla del 26 de octubre: todo polígono tiene siempre la misma cantidad de vértices, lados y ángulos (9, 9 y 9)."
      },
      {
        id: "m13_poly_8",
        world: "polygone",
        topicDe: "Polygone · Zehneck & Siebeneck",
        questionDe: "Ein Polygon hat 10 Ecken (Decágono) und ein anderes hat 7 Ecken (Heptágono). Wie heißen die beiden auf Deutsch?",
        questionEs: "Un polígono tiene 10 vértices (decágono) y otro tiene 7 vértices (heptágono). ¿Cómo se llaman ambos en alemán?",
        hintDe: "10 = zehn → Zehneck · 7 = sieben → Siebeneck!",
        hintEs: "10 = zehn → Zehneck · 7 = sieben → Siebeneck.",
        svgSpec: { type: "polygon_regular", sides: 10, color: "#2563eb", fill: "#dbeafe", labelCenter: "10 & 7" },
        options: [
          { textDe: "10 Ecken = das Zehneck · 7 Ecken = das Siebeneck", textEs: "10 vértices = das Zehneck · 7 vértices = das Siebeneck", correct: true },
          { textDe: "10 Ecken = das Zwanzigeck · 7 Ecken = das Sechseck", textEs: "10 vértices = Zwanzigeck · 7 vértices = Sechseck", correct: false },
          { textDe: "10 Ecken = das Neuneck · 7 Ecken = das Achteck", textEs: "10 vértices = Neuneck · 7 vértices = Achteck", correct: false },
          { textDe: "10 Ecken = das Viereck · 7 Ecken = das Dreieck", textEs: "10 vértices = Viereck · 7 vértices = Dreieck", correct: false }
        ],
        explanationDe: "Super! 10 Ecken = das Zehneck (Decágono) und 7 Ecken = das Siebeneck (Heptágono).",
        explanationEs: "¡Muy bien! 10 vértices = das Zehneck (decágono) y 7 vértices = das Siebeneck (heptágono)."
      },

      // =======================================================================
      // WELT 2: DREIECKE SORTIEREN & RÄTSEL (Heft: 27. Okt, S. 2, 3, 17–20)
      // =======================================================================
      {
        id: "m13_tri_1",
        world: "dreiecke",
        topicDe: "Dreiecke nach Seiten · Heft 27. Okt",
        questionDe: "An diesem Dreieck haben alle 3 Seiten denselben kleinen Strich (|). Das bedeutet: Alle 3 Seiten sind gleich lang! Wie heißt es auf Deutsch?",
        questionEs: "En este triángulo los 3 lados tienen la misma marquita (|). Eso significa que los 3 lados miden lo mismo (equilátero). ¿Cómo se llama en alemán?",
        hintDe: "3 Seiten gleich lang → gleich + seitig!",
        hintEs: "3 lados iguales → gleich (igual) + seitig (lados).",
        svgSpec: { type: "triangle_classified", kind: "equilateral" },
        options: [
          { textDe: "gleichseitiges Dreieck (3 Seiten gleich lang — equilátero)", textEs: "gleichseitiges Dreieck (3 lados iguales — equilátero)", correct: true },
          { textDe: "gleichschenkliges Dreieck (nur 2 Seiten gleich lang — isósceles)", textEs: "gleichschenkliges Dreieck (solo 2 lados iguales — isósceles)", correct: false },
          { textDe: "allgemeines / ungleichseitiges Dreieck (escaleno)", textEs: "allgemeines / ungleichseitiges Dreieck (escaleno)", correct: false },
          { textDe: "rechtwinkliges Dreieck (mit 90°-Winkel)", textEs: "rechtwinkliges Dreieck (con ángulo de 90°)", correct: false }
        ],
        explanationDe: "Perfekt! Wenn alle 3 Seiten gleich lang sind, heißt das Dreieck „gleichseitig“ (auf Spanisch: equilátero).",
        explanationEs: "¡Perfecto! Cuando los 3 lados miden lo mismo, el triángulo se llama «gleichseitig» (equilátero)."
      },
      {
        id: "m13_tri_2",
        world: "dreiecke",
        topicDe: "Dreiecke nach Seiten · Heft 27. Okt",
        questionDe: "Dieses hohe Dreieck hat zwei gleich lange Seiten links und rechts (|) und eine kürzere Seite unten (||). Wie heißt es nach seinen Seiten?",
        questionEs: "Este triángulo alto tiene dos lados iguales a la izquierda y derecha (|) y un lado distinto abajo (||). ¿Cómo se clasifica según sus lados (isósceles)?",
        hintDe: "Die zwei gleich langen Seiten heißen „Schenkel“ → gleich + schenklig!",
        hintEs: "Los dos lados iguales se llaman «Schenkel» → gleichschenklig.",
        svgSpec: { type: "triangle_classified", kind: "isosceles_acute" },
        options: [
          { textDe: "gleichschenkliges Dreieck (2 Seiten gleich lang — isósceles)", textEs: "gleichschenkliges Dreieck (2 lados iguales — isósceles)", correct: true },
          { textDe: "gleichseitiges Dreieck (3 Seiten gleich lang — equilátero)", textEs: "gleichseitiges Dreieck (3 lados iguales — equilátero)", correct: false },
          { textDe: "ungleichseitiges / allgemeines Dreieck (escaleno)", textEs: "ungleichseitiges / allgemeines Dreieck (escaleno)", correct: false },
          { textDe: "stumpfwinkliges Viereck", textEs: "stumpfwinkliges Viereck", correct: false }
        ],
        explanationDe: "Genau! 2 gleich lange Seiten (Schenkel) = gleichschenkliges Dreieck (isósceles).",
        explanationEs: "¡Exacto! 2 lados iguales = gleichschenkliges Dreieck (isósceles)."
      },
      {
        id: "m13_tri_3",
        world: "dreiecke",
        topicDe: "Dreiecke nach Seiten · S. 3 & S. 20",
        questionDe: "Bei diesem Dreieck sind alle 3 Seiten unterschiedlich lang (markiert mit |, || und |||). Welche BEIDEN deutschen Wörter aus deinen Blättern bedeuten „escaleno“?",
        questionEs: "En este triángulo los 3 lados tienen distinta medida (marcados con |, || y |||). ¿Cuáles DOS palabras en alemán de tus guías significan «escaleno»?",
        hintDe: "Auf Seite 3 steht „allgemein“ und auf Seite 20 steht „ungleichseitig“!",
        hintEs: "En la página 3 aparece «allgemein» y en la página 20 aparece «ungleichseitig».",
        svgSpec: { type: "triangle_classified", kind: "scalene_acute" },
        options: [
          { textDe: "allgemeines Dreieck ODER ungleichseitiges Dreieck (3 Seiten unterschiedlich lang)", textEs: "allgemeines Dreieck O ungleichseitiges Dreieck (3 lados diferentes)", correct: true },
          { textDe: "gleichseitiges Dreieck ODER gleichschenkliges Dreieck", textEs: "gleichseitiges O gleichschenkliges Dreieck", correct: false },
          { textDe: "rechtwinkliges Dreieck ODER spitzwinkliges Dreieck", textEs: "rechtwinkliges O spitzwinkliges Dreieck", correct: false },
          { textDe: "Parallelogramm ODER Trapezoid", textEs: "Parallelogramm O Trapezoid", correct: false }
        ],
        explanationDe: "Super gemerkt! Auf dem Tabellenblatt (S. 3) heißt es „allgemeines Dreieck“ und auf den Übungsblättern (S. 17–20) „ungleichseitiges Dreieck“. Beides bedeutet: alle 3 Seiten sind unterschiedlich lang (escaleno)!",
        explanationEs: "¡Muy bien! En la tabla de la pág. 3 se llama «allgemeines Dreieck» y en las guías de las págs. 17–20 «ungleichseitiges Dreieck». Ambos significan escaleno."
      },
      {
        id: "m13_tri_4",
        world: "dreiecke",
        topicDe: "Dreiecke nach Winkeln · Heft 27. Okt",
        questionDe: "Dieses Dreieck hat oben einen sehr weiten Winkel, der größer als 90° ist (markiert mit „st“ wie auf Seite 3). Wie heißt es nach seiner Winkelart?",
        questionEs: "Este triángulo tiene arriba un ángulo muy abierto, mayor que 90° (marcado con «st» como en la página 3). ¿Cómo se clasifica según sus ángulos?",
        hintDe: "1 Winkel > 90° (stumpfer Winkel) → stumpfwinklig!",
        hintEs: "Tiene 1 ángulo obtuso (stumpfer Winkel > 90°).",
        svgSpec: { type: "triangle_classified", kind: "isosceles_obtuse" },
        options: [
          { textDe: "stumpfwinkliges Dreieck (hat 1 stumpfen Winkel > 90°)", textEs: "stumpfwinkliges Dreieck (tiene 1 ángulo obtuso > 90°)", correct: true },
          { textDe: "spitzwinkliges Dreieck (alle 3 Winkel < 90°)", textEs: "spitzwinkliges Dreieck (los 3 ángulos < 90°)", correct: false },
          { textDe: "rechtwinkliges Dreieck (hat 1 rechten Winkel = 90°)", textEs: "rechtwinkliges Dreieck (tiene 1 ángulo recto = 90°)", correct: false },
          { textDe: "überstumpfwinkliges Dreieck (Winkel > 180°)", textEs: "überstumpfwinkliges Dreieck (> 180°)", correct: false }
        ],
        explanationDe: "Richtig! Sobald ein Dreieck einen stumpfen Winkel (> 90°) hat, heißt es „stumpfwinkliges Dreieck“.",
        explanationEs: "¡Correcto! Basta con que un triángulo tenga 1 ángulo obtuso (> 90°) para llamarse «stumpfwinkliges Dreieck»."
      },
      {
        id: "m13_tri_5",
        world: "dreiecke",
        topicDe: "Dreiecke kombinieren · S. 3 & S. 18",
        questionDe: "Schau dir dieses Dreieck genau an: Es hat einen rechten Winkel (90° ⦜) UND die zwei Seiten am rechten Winkel sind gleich lang (|). Wie heißt es mit BEIDEN Eigenschaften (Winkelart + Seitenlänge)?",
        questionEs: "Mira bien este triángulo: tiene un ángulo recto (90° ⦜) Y los dos lados que forman el ángulo recto miden lo mismo (|). ¿Cómo se llama combinando AMBAS características?",
        hintDe: "90° = rechtwinklig · 2 Seiten gleich lang = gleichschenklig (genau wie dein Geodreieck!).",
        hintEs: "90° = rechtwinklig · 2 lados iguales = gleichschenklig (¡igual que tu Geodreieck!).",
        svgSpec: { type: "triangle_classified", kind: "isosceles_right" },
        options: [
          { textDe: "Rechtwinklig-gleichschenkliges Dreieck (1 Winkel = 90° und 2 Seiten gleich lang)", textEs: "Rechtwinklig-gleichschenkliges Dreieck (rectángulo e isósceles)", correct: true },
          { textDe: "Spitzwinklig-gleichseitiges Dreieck (alle Winkel < 90° und 3 Seiten gleich lang)", textEs: "Spitzwinklig-gleichseitiges Dreieck (acutángulo y equilátero)", correct: false },
          { textDe: "Stumpfwinklig-ungleichseitiges Dreieck", textEs: "Stumpfwinklig-ungleichseitiges Dreieck (obtusángulo y escaleno)", correct: false },
          { textDe: "Rechtwinklig-gleichseitiges Dreieck", textEs: "Rechtwinklig-gleichseitiges Dreieck (rectángulo y equilátero)", correct: false }
        ],
        explanationDe: "Klasse! Es hat 1 rechten Winkel (rechtwinklig) und 2 gleich lange Seiten (gleichschenklig) → ein rechtwinklig-gleichschenkliges Dreieck!",
        explanationEs: "¡Brillante! Tiene 1 ángulo recto (rechtwinklig) y 2 lados iguales (gleichschenklig)."
      },
      {
        id: "m13_tri_6",
        world: "dreiecke",
        topicDe: "Die 3×3-Tabelle verstehen · S. 3",
        questionDe: "Auf Seite 3 in deiner Tabelle sind in der ersten Zeile („gleichseitig — 3 Seiten gleich lang“) die beiden Kästchen für „rechtwinklig“ und „stumpfwinklig“ LEER! Warum?",
        questionEs: "En la tabla de la página 3, en la primera fila («gleichseitig — 3 lados iguales»), las casillas de «rechtwinklig» y «stumpfwinklig» están VACÍAS. ¿Por qué?",
        hintDe: "In einem gleichseitigen Dreieck sind alle 3 Winkel genau gleich groß (60°).",
        hintEs: "En un triángulo equilátero los 3 ángulos miden siempre 60° (menores de 90°).",
        svgSpec: { type: "triangle_matrix_3x3" },
        options: [
          { textDe: "Weil ein gleichseitiges Dreieck IMMER 3 spitze Winkel (je 60°) hat — es kann niemals einen 90°- oder stumpfen Winkel haben!", textEs: "¡Porque un triángulo equilátero SIEMPRE tiene 3 ángulos agudos (60°) y jamás puede tener un ángulo de 90° ni obtuso!", correct: true },
          { textDe: "Weil die Lehrerin vergessen hat, sie einzuzeichnen", textEs: "Porque a la profesora se le olvidó dibujarlos", correct: false },
          { textDe: "Weil ein gleichseitiges Dreieck 4 Ecken braucht", textEs: "Porque un triángulo equilátero necesita 4 esquinas", correct: false },
          { textDe: "Weil gleichseitige Dreiecke immer stumpfwinklig sind", textEs: "Porque los triángulos equiláteros son siempre obtusángulos", correct: false }
        ],
        explanationDe: "Geniale Erkenntnis! Wenn alle 3 Seiten gleich lang sind (gleichseitig), sind auch alle 3 Winkel gleich groß (60° < 90°). Darum ist jedes gleichseitige Dreieck automatisch spitzwinklig!",
        explanationEs: "¡Gran razonamiento! Si los 3 lados son iguales (gleichseitig), sus 3 ángulos también son iguales (60° < 90°), por lo que SIEMPRE es spitzwinklig."
      },
      {
        id: "m13_tri_7",
        world: "dreiecke",
        topicDe: "Lösungswort-Rätsel · Arbeitsblatt S. 19 #1",
        questionDe: "Auf Seite 19 Aufgabe 1: „Welche Dreiecke sind rechtwinklig?“ Du hast die Buchstaben der Dreiecke mit einem 90°-Winkel (⦜) gesammelt. Welches Lösungswort kam heraus?",
        questionEs: "En la página 19 ejercicio 1: «Welche Dreiecke sind rechtwinklig?». Juntaste las letras de los triángulos que tienen un ángulo recto (90° ⦜). ¿Qué palabra secreta se formó?",
        hintDe: "Die Dreiecke H, A, U und S haben alle einen rechten Winkel (90°)!",
        hintEs: "Los triángulos H, A, U y S tienen todos un ángulo recto (90°).",
        svgSpec: { type: "triangle_word_puzzle", puzzle: "HAUS" },
        options: [
          { textDe: "H - A - U - S (die 4 rechtwinkligen Dreiecke)", textEs: "H - A - U - S (los 4 triángulos rectángulos)", correct: true },
          { textDe: "H - E - F - T", textEs: "H - E - F - T", correct: false },
          { textDe: "A - U - T - O", textEs: "A - U - T - O", correct: false },
          { textDe: "H - U - N - D", textEs: "H - U - N - D", correct: false }
        ],
        explanationDe: "Volltreffer! Nur die Dreiecke H, A, U und S haben eine 90°-Ecke → Lösungswort: HAUS!",
        explanationEs: "¡Exacto! Solo los triángulos H, A, U y S tienen una esquina de 90° → palabra secreta: HAUS."
      },
      {
        id: "m13_tri_8",
        world: "dreiecke",
        topicDe: "Lösungswort-Rätsel · Arbeitsblatt S. 19 #2 & #3",
        questionDe: "Auf Seite 19 Aufgabe 2 & 3: Bei #2 sucht man alle GLEICHSEITIGEN Dreiecke (alle 3 Seiten gleich lang: B, A, U, M) und bei #3 alle GLEICHSCHENKLIGEN Dreiecke (2 Seiten gleich lang: A, U, T, O). Welche zwei Lösungswörter entstehen?",
        questionEs: "En la página 19 ejercicios 2 y 3: En el #2 se buscan todos los triángulos EQUILÁTEROS (3 lados iguales: B, A, U, M) y en el #3 todos los ISÓSCELES (2 lados iguales: A, U, T, O). ¿Qué dos palabras secretas se forman?",
        hintDe: "B-A-U-M (der Baum 🌳) und A-U-T-O (das Auto 🚗)!",
        hintEs: "B-A-U-M (árbol 🌳) y A-U-T-O (auto 🚗).",
        svgSpec: { type: "triangle_word_puzzle", puzzle: "BAUM_AUTO" },
        options: [
          { textDe: "#2: B - A - U - M (gleichseitig) und #3: A - U - T - O (gleichschenklig)", textEs: "#2: B - A - U - M (equiláteros) y #3: A - U - T - O (isósceles)", correct: true },
          { textDe: "#2: B - M und #3: A - R - G", textEs: "#2: B - M y #3: A - R - G", correct: false },
          { textDe: "#2: B - A - L - L und #3: T - O - R", textEs: "#2: B - A - L - L y #3: T - O - R", correct: false },
          { textDe: "#2: S - T - U - M und #3: R - O - T", textEs: "#2: S - T - U - M y #3: R - O - T", correct: false }
        ],
        explanationDe: "Super! Bei Aufgabe 2 sind B, A, U und M gleichseitig (Lösungswort: BAUM 🌳) und bei Aufgabe 3 sind A, U, T und O gleichschenklig (Lösungswort: AUTO 🚗)!",
        explanationEs: "¡Genial! En la #2 los triángulos B, A, U y M tienen sus 3 lados iguales (BAUM 🌳) y en la #3 los triángulos A, U, T y O tienen 2 lados iguales (AUTO 🚗)."
      },
      {
        id: "m13_tri_9",
        world: "dreiecke",
        topicDe: "Dreiecke kombinieren · S. 3 & S. 18",
        questionDe: "Dieses Dreieck hat 1 rechten Winkel (90° ⦜) und alle 3 Seiten sind unterschiedlich lang (|, ||, |||). Wie heißt es vollständig?",
        questionEs: "Este triángulo tiene 1 ángulo recto (90° ⦜) y sus 3 lados tienen distinto largo (|, ||, |||). ¿Cómo se llama de forma completa?",
        hintDe: "90° = rechtwinklig · 3 verschiedene Seiten = allgemein / ungleichseitig!",
        hintEs: "90° = rechtwinklig · 3 lados distintos = allgemein / ungleichseitig.",
        svgSpec: { type: "triangle_classified", kind: "scalene_right" },
        options: [
          { textDe: "Rechtwinklig-ungleichseitiges (allgemeines) Dreieck", textEs: "Rechtwinklig-ungleichseitiges (allgemeines) Dreieck (rectángulo y escaleno)", correct: true },
          { textDe: "Spitzwinklig-gleichseitiges Dreieck", textEs: "Spitzwinklig-gleichseitiges Dreieck", correct: false },
          { textDe: "Stumpfwinklig-gleichschenkliges Dreieck", textEs: "Stumpfwinklig-gleichschenkliges Dreieck", correct: false },
          { textDe: "Gleichseitiges Rechteck", textEs: "Gleichseitiges Rechteck", correct: false }
        ],
        explanationDe: "Genau! Es hat 1 rechten Winkel (rechtwinklig) und 3 unterschiedlich lange Seiten (ungleichseitig / allgemein).",
        explanationEs: "¡Exacto! Tiene 1 ángulo recto (rechtwinklig) y 3 lados de distinta longitud (ungleichseitig / allgemein)."
      },

      // =======================================================================
      // WELT 3: VIERECKE — DIE 3 GRUPPEN, EIGENSCHAFTEN & RÄTSEL (S. 4–5, 11–16)
      // =======================================================================
      {
        id: "m13_vier_1",
        world: "vierecke",
        topicDe: "Vierecke in 3 Gruppen · Heft 2. & 3. Nov",
        questionDe: "Im Heft (2. & 3. November) sortieren wir alle Vierecke nach ihren PARALLELEN Seiten (∥) in 3 große Gruppen. Welche Zuordnung stimmt genau?",
        questionEs: "En el cuaderno (2 y 3 de noviembre) clasificamos todos los cuadriláteros según sus pares de lados PARALELOS (∥) en 3 grandes grupos. ¿Cuál relación es la correcta?",
        hintDe: "Zähle die Paare paralleler Seiten: 2 Paar ∥, 1 Paar ∥ oder 0 Paar ∥!",
        hintEs: "Cuenta los pares de lados paralelos: 2 pares ∥, 1 par ∥ o 0 pares ∥.",
        svgSpec: { type: "viereck_three_groups" },
        options: [
          { textDe: "Parallelogramm = 2 Paar ∥ Seiten · Trapez = 1 Paar ∥ Seiten · Trapezoid = 0 Paar ∥ (keine parallelen Seiten)", textEs: "Parallelogramm = 2 pares ∥ · Trapez = 1 par ∥ · Trapezoid = 0 pares ∥ (ningún lado paralelo)", correct: true },
          { textDe: "Parallelogramm = 1 Paar ∥ · Trapez = 2 Paar ∥ · Trapezoid = 4 Paar ∥", textEs: "Parallelogramm = 1 par ∥ · Trapez = 2 pares ∥ · Trapezoid = 4 pares ∥", correct: false },
          { textDe: "Parallelogramm = 0 Paar ∥ · Trapez = 1 Paar ∥ · Trapezoid = 2 Paar ∥", textEs: "Parallelogramm = 0 pares ∥ · Trapez = 1 par ∥ · Trapezoid = 2 pares ∥", correct: false },
          { textDe: "Alle Vierecke haben immer 2 Paar parallele Seiten", textEs: "Todos los cuadriláteros tienen siempre 2 pares de lados paralelos", correct: false }
        ],
        explanationDe: "Perfekt! Das ist das Hauptschema vom 2. und 3. November: 1) Parallelogramm (2 Paar ∥), 2) Trapez (1 Paar ∥), 3) Trapezoid (0 Paar ∥, z. B. Drachen)!",
        explanationEs: "¡Perfecto! Ese es el esquema central del 2 y 3 de noviembre: 1) Parallelogramm (2 pares ∥), 2) Trapez (1 par ∥), 3) Trapezoid (0 pares ∥, p. ej. Drachen)."
      },
      {
        id: "m13_vier_2",
        world: "vierecke",
        topicDe: "Parallelogramm-Familie · Heft 3. Nov",
        questionDe: "Welche 4 Vierecke gehören auf deinem Schema vom 3. November (blaue Spalte) alle zur Gruppe „Parallelogramm“ (Zwei Paar parallele Seiten)?",
        questionEs: "¿Cuáles 4 cuadriláteros pertenecen en tu esquema del 3 de noviembre (columna azul) a la familia «Parallelogramm» (dos pares de lados paralelos)?",
        hintDe: "Schau auf die 4 blauen Figuren: zwei mit 90°-Winkeln und zwei geschobene ohne 90°-Winkel!",
        hintEs: "Son los 4 azules: dos con ángulos rectos (90°) y dos inclinados sin ángulos rectos.",
        svgSpec: { type: "viereck_shape", kind: "parallelogramm_family" },
        options: [
          { textDe: "Quadrat, Rechteck, Raute und Romboid", textEs: "Quadrat (cuadrado), Rechteck (rectángulo), Raute (rombo) y Romboid (romboide)", correct: true },
          { textDe: "Quadrat, Rechteck, Trapez und Drachen", textEs: "Quadrat, Rechteck, Trapez y Drachen", correct: false },
          { textDe: "Rechtwinkliges Trapez, gleichschenkliges Trapez und ungleichseitiges Trapez", textEs: "Los tres tipos de Trapez", correct: false },
          { textDe: "Drachen, Trapezoid, Dreieck und Fünfeck", textEs: "Drachen, Trapezoid, Dreieck y Fünfeck", correct: false }
        ],
        explanationDe: "Genau! Quadrat, Rechteck, Raute und Romboid haben alle 2 Paar parallele Seiten (gegenüberliegende Seiten sind parallel)!",
        explanationEs: "¡Exacto! Quadrat, Rechteck, Raute y Romboid tienen todos 2 pares de lados paralelos."
      },
      {
        id: "m13_vier_3",
        world: "vierecke",
        topicDe: "Quadrat vs. Raute (Prüfungs-Klassiker!)",
        questionDe: "Beide Figuren — das Quadrat und die Raute — haben 4 gleich lange Seiten (|) und 2 Paar parallele Seiten. Worin unterscheidet sich die Raute vom Quadrat?",
        questionEs: "Ambas figuras —el Quadrat (cuadrado) y la Raute (rombo)— tienen 4 lados iguales (|) y 2 pares de lados paralelos. ¿En qué se diferencia la Raute del Quadrat?",
        hintDe: "Schau auf die Innenwinkel in den Ecken (S. 13 & S. 15)!",
        hintEs: "Fíjate en los ángulos de las esquinas (págs. 13 y 15).",
        svgSpec: { type: "viereck_shape", kind: "quadrat_vs_raute" },
        options: [
          { textDe: "Das Quadrat hat 4 rechte Winkel (90° ⦜). Die Raute ist „verschoben“ und hat 0 rechte Winkel (2 spitze + 2 stumpfe Winkel)!", textEs: "El Quadrat tiene 4 ángulos rectos (90° ⦜). ¡La Raute tiene 0 ángulos rectos (2 agudos + 2 obtusos)!", correct: true },
          { textDe: "Die Raute hat keine parallelen Seiten (0 Paar ∥)", textEs: "La Raute no tiene lados paralelos (0 pares ∥)", correct: false },
          { textDe: "Das Quadrat hat nur 1 Paar parallele Seiten", textEs: "El Quadrat tiene solo 1 par de lados paralelos", correct: false },
          { textDe: "Es gibt gar keinen Unterschied, jede Raute hat immer 90°-Winkel", textEs: "No hay diferencia, toda Raute tiene ángulos de 90°", correct: false }
        ],
        explanationDe: "Wichtiger Unterschied! Wenn eine Figur auf der Spitze steht, prüfe mit dem Geodreieck die Ecke: Sind es 90° (⦜), ist es ein gedrehtes Quadrat! Sind es 2 spitze und 2 stumpfe Winkel (0 rechte Winkel), ist es eine Raute!",
        explanationEs: "¡Diferencia clave! Si una figura está apoyada en una punta, revisa su esquina con el Geodreieck: si mide 90° (⦜), ¡es un Quadrat girado! Si tiene 2 ángulos agudos y 2 obtusos (0 rectos), es una Raute."
      },
      {
        id: "m13_vier_4",
        world: "vierecke",
        topicDe: "Rechtwinkliges Trapez · Falle von S. 13 & S. 15!",
        questionDe: "Aufgepasst bei dieser Figur (von Seite 13 oben links und Seite 15): Es ist ein rechtwinkliges Trapez. Wie viele Paare paralleler Seiten und wie viele RECHTE Winkel (90° ⦜) hat es wirklich?",
        questionEs: "¡Mucha atención con esta figura (de la página 13 arriba a la izquierda y página 15)! Es un rechtwinkliges Trapez (trapecio rectángulo). ¿Cuántos pares de lados paralelos y cuántos ÁNGULOS RECTOS (90° ⦜) tiene en realidad?",
        hintDe: "Oben und unten sind parallel (1 Paar ∥). Die linke Seite steht senkrecht auf BEIDEN parallelen Seiten!",
        hintEs: "El lado de arriba y el de abajo son paralelos (1 par ∥). ¡El lado izquierdo es perpendicular tanto arriba como abajo!",
        svgSpec: { type: "viereck_shape", kind: "trapez_recht" },
        options: [
          { textDe: "1 Paar parallele Seiten (∥) und genau 2 rechte Winkel (90° oben links UND 90° unten links)!", textEs: "¡1 par de lados paralelos (∥) y exactamente 2 ángulos rectos (90° arriba a la izquierda Y 90° abajo a la izquierda)!", correct: true },
          { textDe: "2 Paar parallele Seiten und nur 1 rechter Winkel", textEs: "2 pares de lados paralelos y solo 1 ángulo recto", correct: false },
          { textDe: "0 Paar parallele Seiten und 4 rechte Winkel", textEs: "0 pares de lados paralelos y 4 ángulos rectos", correct: false },
          { textDe: "1 Paar parallele Seiten und 0 rechte Winkel", textEs: "1 par de lados paralelos y 0 ángulos rectos", correct: false }
        ],
        explanationDe: "Ganz wichtiger Merksatz für morgen: Ein rechtwinkliges Trapez ist ein Trapez → also hat es 1 Paar parallele Seiten! Und weil die gerade Wand auf BEIDEN parallelen Linien senkrecht steht, hat es immer ZWEI rechte Winkel (2 × 90°)!",
        explanationEs: "¡Dato clave para mañana! En la pág. 13 habías puesto «2 Paar ∥ y 1 Rechter Winkel», pero como en la pág. 15: un trapecio rectángulo tiene 1 par de lados paralelos y SIEMPRE 2 ángulos rectos (uno arriba y otro abajo)."
      },
      {
        id: "m13_vier_5",
        world: "vierecke",
        topicDe: "Schräges Romboid · Falle von S. 16 Aufgabe 1f!",
        questionDe: "Schau dir dieses stark gekippte Viereck an (genau wie Aufgabe 1f auf Seite 16!). Die lange obere und untere Kante sind parallel (>) und die beiden schrägen Seiten sind AUCH parallel (>>). Wie heißt es?",
        questionEs: "Mira este cuadrilátero muy inclinado (¡exactamente como el ejercicio 1f de la página 16!). El borde corto de arriba y el de abajo son paralelos (>) y los dos lados largos inclinados TAMBIÉN son paralelos (>>). ¿Cómo se llama?",
        hintDe: "Es sieht zwar schräg aus, hat aber 2 Paar parallele Seiten und unterschiedlich lange Nachbarseiten!",
        hintEs: "En la pág. 16 pusiste «Trapezoid» porque estaba muy inclinado, ¡pero fíjate que sus lados opuestos SÍ son paralelos (2 pares ∥)!",
        svgSpec: { type: "viereck_shape", kind: "romboid_slanted_1f" },
        options: [
          { textDe: "Romboid / Parallelogramm (denn gegenüberliegende Seiten sind parallel: 2 Paar ∥!)", textEs: "Romboid / Parallelogramm (¡porque sus lados opuestos son paralelos: 2 pares ∥!)", correct: true },
          { textDe: "Trapezoid (0 Paar parallele Seiten)", textEs: "Trapezoid (0 pares de lados paralelos)", correct: false },
          { textDe: "Drachen / Deltoid", textEs: "Drachen / Deltoid (cometa)", correct: false },
          { textDe: "Rechteck (4 rechte Winkel)", textEs: "Rechteck (4 ángulos rectos)", correct: false }
        ],
        explanationDe: "Super! Auf Seite 16 bei 1f war das eine gemeine optische Täuschung: Auch wenn ein Parallelogramm gedreht und schmal ist — solange beide gegenüberliegenden Seitenpaare parallel sind (2 Paar ∥), ist es ein Romboid / Parallelogramm und KEIN Trapezoid!",
        explanationEs: "¡Excelente! En la pág. 16 (1f) era una trampa visual: aunque esté rotado y alargado, como ambos pares de lados opuestos son paralelos (2 pares ∥), es un Romboid / Parallelogramm y NO un Trapezoid."
      },
      {
        id: "m13_vier_6",
        world: "vierecke",
        topicDe: "Drachen (Deltoid) · S. 4, 5, 13 & 16",
        questionDe: "Welche 3 Eigenschaften beschreiben den Drachen (Deltoid) komplett richtig?",
        questionEs: "¿Cuáles 3 características describen al Drachen (Deltoid / cometa) de forma completamente correcta?",
        hintDe: "Gehört der Drachen auf Seite 4 & 5 zu Parallelogramm, Trapez oder Trapezoid?",
        hintEs: "Mira la página 4 y 5: el Drachen sale de la rama Trapezoid (0 pares ∥).",
        svgSpec: { type: "viereck_shape", kind: "drachen" },
        options: [
          { textDe: "Er gehört zur Gruppe Trapezoid (0 Paar ∥ Seiten), hat 2 Paare gleich langer Nachbarseiten und 1 Symmetrieachse", textEs: "Pertenece al grupo Trapezoid (0 pares ∥), tiene 2 pares de lados vecinos iguales y 1 eje de simetría", correct: true },
          { textDe: "Er hat 2 Paar parallele Seiten wie eine Raute und 4 rechte Winkel", textEs: "Tiene 2 pares de lados paralelos como el rombo y 4 ángulos rectos", correct: false },
          { textDe: "Er hat 1 Paar parallele Seiten und gehört zu den Trapezen", textEs: "Tiene 1 par de lados paralelos y pertenece a los trapecios", correct: false },
          { textDe: "Er hat 3 Ecken und 3 Seiten", textEs: "Tiene 3 vértices y 3 lados", correct: false }
        ],
        explanationDe: "Richtig! Ein Drachen (Deltoid) hat 0 Paar parallele Seiten (deshalb Gruppe Trapezoid!), aber je 2 benachbarte Seiten sind gleich lang und er hat 1 Symmetrieachse von oben nach unten.",
        explanationEs: "¡Correcto! Un Drachen (Deltoid) tiene 0 pares de lados paralelos (grupo Trapezoid), 2 pares de lados contiguos iguales y 1 eje de simetría."
      },
      {
        id: "m13_vier_7",
        world: "vierecke",
        topicDe: "Mia & Jin Rätsel · Arbeitsblatt S. 12 #5",
        questionDe: "Mia und Jin schauen sich ein Quadrat an (S. 12 Nr. 5). Mia sagt: „Dieses Viereck hat eine GERADE Anzahl rechte Winkel.“ Jin sagt: „Es hat eine UNGERADE Anzahl rechte Winkel.“ Wer hat recht und warum?",
        questionEs: "Mia y Jin miran un cuadrado (pág. 12 N° 5). Mia dice: «Este cuadrilátero tiene una cantidad PAR (gerade) de ángulos rectos». Jin dice: «Tiene una cantidad IMPAR (ungerade)». ¿Quién tiene razón y por qué?",
        hintDe: "Wie viele rechte Winkel hat ein Quadrat? Und ist diese Zahl gerade (par: 2, 4, 6...) oder ungerade (impar: 1, 3, 5...)?",
        hintEs: "¿Cuántos ángulos rectos tiene un cuadrado? ¿Y el 4 es par (gerade Zahl) o impar (ungerade Zahl)?",
        svgSpec: { type: "riddle_character", character: "mia_jin" },
        options: [
          { textDe: "Mia hat recht, weil das Quadrat 4 rechte Winkel hat und 4 eine gerade Zahl ist!", textEs: "¡Mia tiene razón, porque el cuadrado tiene 4 ángulos rectos y 4 es un número par (gerade Zahl)!", correct: true },
          { textDe: "Jin hat recht, weil 4 eine ungerade Zahl ist", textEs: "Jin tiene razón, porque 4 es un número impar", correct: false },
          { textDe: "Jin hat recht, weil ein Quadrat 3 rechte Winkel hat", textEs: "Jin tiene razón, porque un cuadrado tiene 3 ángulos rectos", correct: false },
          { textDe: "Keiner hat recht, ein Quadrat hat 0 rechte Winkel", textEs: "Ninguno tiene razón, un cuadrado tiene 0 ángulos rectos", correct: false }
        ],
        explanationDe: "Genauso hast du es auf Seite 12 perfekt aufgeschrieben: „Mia hat recht, weil es 4 rechte Winkel sind und 4 eine gerade Zahl ist.“",
        explanationEs: "¡Tal cual como lo escribiste perfecto en la página 12!: «Mia hat recht, weil es 4 rechte Winkel sind und 4 eine gerade Zahl ist.»"
      },
      {
        id: "m13_vier_8",
        world: "vierecke",
        topicDe: "Ajanis Rätsel · Arbeitsblatt S. 13",
        questionDe: "Ajani sagt (S. 13 unten): „Meine Figur hat 4 Seiten, MINDESTENS ein Paar paralleler Seiten (1 oder 2 Paar ∥) und KEINEN rechten Winkel (0 × 90°).“ An welche drei Vierecke kann Ajani denken?",
        questionEs: "Ajani dice (pág. 13 abajo): «Mi figura tiene 4 lados, AL MENOS un par de lados paralelos (1 o 2 pares ∥) y NINGÚN ángulo recto (0 × 90°)». ¿En qué tres cuadriláteros puede estar pensando Ajani?",
        hintDe: "Quadrat und Rechteck fallen weg (haben 90°). Drachen fällt weg (hat 0 Paar ∥)!",
        hintEs: "Quadrat y Rechteck se descartan (tienen 90°). Drachen se descarta (tiene 0 pares ∥).",
        svgSpec: { type: "riddle_character", character: "ajani" },
        options: [
          { textDe: "Romboid (Parallelogramm), Raute und gleichschenkliges Trapez!", textEs: "¡Romboid (paralelogramo), Raute (rombo) y gleichschenkliges Trapez (trapecio isósceles)!", correct: true },
          { textDe: "Quadrat, Rechteck und rechtwinkliges Trapez", textEs: "Quadrat, Rechteck y rechtwinkliges Trapez", correct: false },
          { textDe: "Drachen (Deltoid), Dreieck und Sechseck", textEs: "Drachen (Deltoid), Dreieck y Sechseck", correct: false },
          { textDe: "Quadrat, Raute und Drachen", textEs: "Quadrat, Raute y Drachen", correct: false }
        ],
        explanationDe: "Volltreffer (genau deine Lösung von S. 13)! Romboid (2 Paar ∥), Raute (2 Paar ∥) und gleichschenkliges Trapez (1 Paar ∥) haben alle parallele Seiten und keinen einzigen rechten Winkel!",
        explanationEs: "¡Exacto (la misma respuesta que anotaste en la pág. 13)! Romboid, Raute y gleichschenkliges Trapez tienen lados paralelos y ningún ángulo recto."
      },
      {
        id: "m13_vier_9",
        world: "vierecke",
        topicDe: "Symmetrieachsen der Vierecke · S. 9 & 10",
        questionDe: "Auf Seite 9 und 10 musst du die Symmetrieachsen (Spiegelachsen / ejes de simetría) der Vierecke zählen. Welche Anzahl von Symmetrieachsen stimmt?",
        questionEs: "En las páginas 9 y 10 debes contar los ejes de simetría (Symmetrieachsen) de cada cuadrilátero. ¿Cuál cantidad de ejes de simetría es la correcta?",
        hintDe: "Quadrat = 4 (längs, quer + 2 Diagonalen) · Rechteck = 2 · Raute = 2 · Drachen = 1 · Romboid = 0!",
        hintEs: "Quadrat = 4 · Rechteck = 2 · Raute = 2 · Drachen = 1 · Gleichschenkliges Trapez = 1 · Romboid = 0.",
        svgSpec: { type: "viereck_symmetry_showcase" },
        options: [
          { textDe: "Quadrat: 4 · Rechteck: 2 · Raute: 2 · Drachen: 1 · Gleichschenkliges Trapez: 1 · Romboid: 0", textEs: "Quadrat: 4 · Rechteck: 2 · Raute: 2 · Drachen: 1 · Trapecio isósceles: 1 · Romboid: 0", correct: true },
          { textDe: "Quadrat: 2 · Rechteck: 4 · Raute: 4 · Drachen: 2 · Romboid: 2", textEs: "Quadrat: 2 · Rechteck: 4 · Raute: 4 · Drachen: 2 · Romboid: 2", correct: false },
          { textDe: "Alle Vierecke haben immer genau 2 Symmetrieachsen", textEs: "Todos los cuadriláteros tienen siempre 2 ejes de simetría", correct: false },
          { textDe: "Drachen hat 4 Symmetrieachsen und Quadrat hat 1 Symmetrieachse", textEs: "Drachen tiene 4 ejes y Quadrat tiene 1 eje", correct: false }
        ],
        explanationDe: "Merke dir für die Tabelle auf S. 9: Quadrat = 4 Symmetrieachsen, Rechteck = 2 (nur die Mittellinien, NICHT die Diagonalen!), Raute = 2 (die Diagonalen), Drachen = 1, gleichschenkliges Trapez = 1, allgemeines Parallelogramm (Romboid) = 0!",
        explanationEs: "Para la tabla de la pág. 9: Quadrat = 4 ejes, Rechteck = 2, Raute = 2 (sus diagonales), Drachen = 1, gleichschenkliges Trapez = 1 y Romboid = 0."
      },
      {
        id: "m13_vier_10",
        world: "vierecke",
        topicDe: "Drei Trapeze vergleichen · Arbeitsblatt S. 15",
        questionDe: "Auf Seite 15 unten vergleichst du drei verschiedene Trapeze a, b und c. Was haben ALLE Trapeze immer gemeinsam?",
        questionEs: "En la página 15 abajo comparas tres trapecios distintos (a, b y c). ¿Qué tienen TODOS los trapecios siempre en común?",
        hintDe: "Warum heißen sie alle „Trapez“?",
        hintEs: "¿Por qué pertenecen los tres a la familia «Trapez»?",
        svgSpec: { type: "viereck_shape", kind: "three_trapeze_compare" },
        options: [
          { textDe: "Sie haben alle genau 1 Paar parallele Seiten (und 4 Ecken, 4 Seiten, 4 Winkel)!", textEs: "¡Todos tienen exactamente 1 par de lados paralelos (y 4 vértices, 4 lados, 4 ángulos)!", correct: true },
          { textDe: "Sie haben alle 4 gleich lange Seiten", textEs: "Todos tienen 4 lados de igual longitud", correct: false },
          { textDe: "Sie haben alle 2 Paare paralleler Seiten", textEs: "Todos tienen 2 pares de lados paralelos", correct: false },
          { textDe: "Sie haben alle 4 rechte Winkel", textEs: "Todos tienen 4 ángulos rectos", correct: false }
        ],
        explanationDe: "Genau wie du auf Seite 15 geschrieben hast: Alle Trapeze haben 1 Paar parallele Linien (Seiten) gemeinsam, aber sie unterscheiden sich in ihren Seitenlängen und Winkeln!",
        explanationEs: "¡Tal como escribiste en la página 15! Todos los trapecios comparten 1 par de lados paralelos, aunque se diferencien en el largo de sus lados y en sus ángulos."
      },

      // =======================================================================
      // WELT 4: KOORDINATENSYSTEM & VEKTOREN (Heft: 9.–11. Nov, S. 6–10)
      // =======================================================================
      {
        id: "m13_ks_1",
        world: "koordinaten",
        topicDe: "Koordinatensystem („KS Bauen“) · Heft 9. Nov (S. 6)",
        questionDe: "Schau in das Koordinatensystem (wie am Montag, 9. November „KS Bauen“): Welche Koordinaten (x | y) haben die Punkte A, B und D?",
        questionEs: "Mira el plano cartesiano (como el lunes 9 de noviembre «KS Bauen»): ¿Qué coordenadas (x | y) tienen los puntos A, B y D?",
        hintDe: "Immer zuerst auf der x-Achse nach rechts lesen, dann auf der y-Achse nach oben!",
        hintEs: "Siempre lee primero el eje horizontal x (derecha) y luego el eje vertical y (arriba).",
        svgSpec: {
          type: "coord_grid",
          maxX: 11,
          maxY: 10,
          points: [
            { label: "E", x: 1, y: 4, color: "#64748b" },
            { label: "A", x: 3, y: 5, color: "#dc2626" },
            { label: "D", x: 3, y: 7, color: "#0284c7" },
            { label: "B", x: 6, y: 7, color: "#16a34a" },
            { label: "F", x: 7, y: 7, color: "#9333ea" },
            { label: "C", x: 10, y: 9, color: "#ea580c" }
          ],
          showGuides: true
        },
        options: [
          { textDe: "A (3 | 5) · B (6 | 7) · D (3 | 7)", textEs: "A (3 | 5) · B (6 | 7) · D (3 | 7)", correct: true },
          { textDe: "A (5 | 3) · B (7 | 6) · D (7 | 3) (x und y vertauscht!)", textEs: "A (5 | 3) · B (7 | 6) · D (7 | 3) (¡x e y al revés!)", correct: false },
          { textDe: "A (3 | 4) · B (6 | 5) · D (3 | 6)", textEs: "A (3 | 4) · B (6 | 5) · D (3 | 6)", correct: false },
          { textDe: "A (1 | 4) · B (10 | 9) · D (7 | 7)", textEs: "A (1 | 4) · B (10 | 9) · D (7 | 7)", correct: false }
        ],
        explanationDe: "Perfekt abgelesen! Zuerst die x-Achse (Rechtsachse), dann die y-Achse (Hochachse): A ist bei 3 rechts und 5 oben → A(3|5), B(6|7) und D(3|7)!",
        explanationEs: "¡Leído a la perfección! Primero el eje x (derecha) y luego el eje y (arriba): A(3|5), B(6|7) y D(3|7)."
      },
      {
        id: "m13_ks_2",
        world: "koordinaten",
        topicDe: "Punkt vs. Vektor · Heft S. 7",
        questionDe: "Auf Seite 7 in deinem Heft steht nebeneinander: (3, 4) und darüber mit einem Pfeil →(3, 4). Was ist der Unterschied und was bedeutet „+ → man schreibt nicht“?",
        questionEs: "En la página 7 de tu cuaderno aparece (3, 4) al lado de →(3, 4) con una flecha arriba. ¿Cuál es la diferencia y qué significa «+ → man schreibt nicht»?",
        hintDe: "Ohne Pfeil = fester Ort (Punkt). Mit Pfeil = Bewegung/Verschiebung (Vektor)!",
        hintEs: "Sin flecha = punto fijo. Con flecha arriba = vector de desplazamiento.",
        svgSpec: {
          type: "coord_grid",
          maxX: 8,
          maxY: 7,
          points: [
            { label: "Start (1|2)", x: 1, y: 2, color: "#0f172a" },
            { label: "Ziel (4|6)", x: 4, y: 6, color: "#16a34a" }
          ],
          vector: { x1: 1, y1: 2, x2: 4, y2: 6, labelDe: "Vektor →(3, 4): 3 rechts, 4 oben" }
        },
        options: [
          { textDe: "(3, 4) ist ein Punkt. →(3, 4) mit Pfeil ist ein Vektor (3 nach rechts, 4 nach oben) — und bei positiven Zahlen lässt man das „+“ einfach weg!", textEs: "(3, 4) es un punto. →(3, 4) con flecha es un vector (3 a la derecha, 4 arriba), ¡y el signo «+» no hace falta escribirlo!", correct: true },
          { textDe: "Beides sind Geraden, und man darf niemals Minuszeichen schreiben", textEs: "Ambos son rectas y nunca se escriben signos menos", correct: false },
          { textDe: "→(3, 4) bedeutet 3 nach oben und 4 nach links", textEs: "→(3, 4) significa 3 arriba y 4 a la izquierda", correct: false },
          { textDe: "(3, 4) ist ein Dreieck und →(3, 4) ist ein Viereck", textEs: "(3, 4) es un triángulo y →(3, 4) es un cuadrilátero", correct: false }
        ],
        explanationDe: "Genau wie auf deiner Heftseite 7: Ohne Pfeil ist (3,4) ein Punkt. Mit Pfeil darüber ist →(3,4) ein Vektor (Verschiebung: 3 rechts, 4 oben). Und das Pluszeichen (+) schreibt man vor positiven Zahlen nicht!",
        explanationEs: "¡Exacto como en tu página 7! Sin flecha (3,4) es un punto; con flecha arriba →(3,4) es un vector de desplazamiento (3 derecha, 4 arriba) y el signo + no se escribe."
      },
      {
        id: "m13_ks_3",
        world: "koordinaten",
        topicDe: "Vektor-Richtungen · Heft S. 7",
        questionDe: "Wie übersetzt man die Vektoren →(−4, 3) und →(2, −2) aus deinem Heft (Seite 7) in Richtungen (rechts/links und oben/unten)?",
        questionEs: "¿Cómo se traducen los vectores →(−4, 3) y →(2, −2) de tu cuaderno (página 7) en direcciones en alemán (rechts/links y oben/unten)?",
        hintDe: "1. Zahl (x): + ist rechts, − ist links · 2. Zahl (y): + ist oben, − ist unten!",
        hintEs: "1° número (x): + es rechts (derecha), − es links (izquierda) · 2° número (y): + es oben (arriba), − es unten (abajo).",
        svgSpec: {
          type: "coord_grid",
          maxX: 9,
          maxY: 8,
          points: [
            { label: "Start", x: 6, y: 3, color: "#0f172a" },
            { label: "Ziel", x: 2, y: 6, color: "#dc2626" }
          ],
          vector: { x1: 6, y1: 3, x2: 2, y2: 6, labelDe: "→(−4, 3): 4 links, 3 oben" }
        },
        options: [
          { textDe: "→(−4, 3) = 4 links, 3 oben · und · →(2, −2) = 2 rechts, 2 unten", textEs: "→(−4, 3) = 4 izquierda, 3 arriba · y · →(2, −2) = 2 derecha, 2 abajo", correct: true },
          { textDe: "→(−4, 3) = 4 rechts, 3 unten · und · →(2, −2) = 2 links, 2 oben", textEs: "→(−4, 3) = 4 derecha, 3 abajo · y · →(2, −2) = 2 izquierda, 2 arriba", correct: false },
          { textDe: "→(−4, 3) = 4 unten, 3 links · und · →(2, −2) = 2 oben, 2 rechts", textEs: "→(−4, 3) = 4 abajo, 3 izquierda · y · →(2, −2) = 2 arriba, 2 derecha", correct: false },
          { textDe: "→(−4, 3) = 4 links, 3 unten · und · →(2, −2) = 2 rechts, 2 oben", textEs: "→(−4, 3) = 4 izquierda, 3 abajo · y · →(2, −2) = 2 derecha, 2 arriba", correct: false }
        ],
        explanationDe: "Super! Bei x bedeutet Minus (−) nach LINKS und Plus (+) nach RECHTS. Bei y bedeutet Plus (+) nach OBEN und Minus (−) nach UNTEN!",
        explanationEs: "¡Excelente! En el primer número (x): + es rechts y − es links. En el segundo número (y): + es oben y − es unten."
      },
      {
        id: "m13_ks_4",
        world: "koordinaten",
        topicDe: "Vektor mit Null · Heft S. 7",
        questionDe: "Was bedeutet der letzte Vektor auf Seite 7 in deinem Heft: →(−3, 0) und der vorletzte →(−1, −5)?",
        questionEs: "¿Qué significan los dos últimos vectores de la página 7 de tu cuaderno: →(−3, 0) y →(−1, −5)?",
        hintDe: "Wenn die zweite Zahl 0 ist, geht man 0 nach oben/unten!",
        hintEs: "Si el segundo número es 0, te mueves 0 arriba (0 oben).",
        svgSpec: {
          type: "coord_grid",
          maxX: 8,
          maxY: 7,
          points: [
            { label: "P(6|4)", x: 6, y: 4, color: "#0f172a" },
            { label: "P'(3|4)", x: 3, y: 4, color: "#0284c7" }
          ],
          vector: { x1: 6, y1: 4, x2: 3, y2: 4, labelDe: "→(−3, 0): 3 links, 0 oben" }
        },
        options: [
          { textDe: "→(−3, 0) = 3 links, 0 oben · und · →(−1, −5) = 1 links, 5 unten", textEs: "→(−3, 0) = 3 izquierda, 0 arriba · y · →(−1, −5) = 1 izquierda, 5 abajo", correct: true },
          { textDe: "→(−3, 0) = 0 links, 3 unten · und · →(−1, −5) = 1 rechts, 5 unten", textEs: "→(−3, 0) = 0 izquierda, 3 abajo · y · →(−1, −5) = 1 derecha, 5 abajo", correct: false },
          { textDe: "→(−3, 0) = 3 rechts, 0 oben · und · →(−1, −5) = 1 links, 5 oben", textEs: "→(−3, 0) = 3 derecha, 0 arriba · y · →(−1, −5) = 1 izquierda, 5 arriba", correct: false },
          { textDe: "Man bleibt bei beiden Vektoren einfach stehen", textEs: "En ambos vectores te quedas en el mismo lugar", correct: false }
        ],
        explanationDe: "Genau wie in deinem Heft: →(−3, 0) heißt „3 links, 0 oben“ und →(−1, −5) heißt „1 links, 5 unten“!",
        explanationEs: "¡Tal cual como en tu cuaderno!: →(−3, 0) es «3 links, 0 oben» y →(−1, −5) es «1 links, 5 unten»."
      },
      {
        id: "m13_ks_5",
        world: "koordinaten",
        topicDe: "Punkt + Vektor · Mittwoch, 11. Nov (S. 8 a, d, g)",
        questionDe: "Rechne wie in der Übung vom Mittwoch, 11. November (S. 8): Du startest beim Punkt (8 | 10) und gehst mit dem Vektor →(1 | −2). Und bei g) startest du bei (6 | 5) mit dem Vektor →(−1 | 2). Wo landest du?",
        questionEs: "Calcula como en el ejercicio del miércoles 11 de noviembre (pág. 8): Partes en el punto (8 | 10) con el vector →(1 | −2). Y en g) partes en (6 | 5) con el vector →(−1 | 2). ¿A qué puntos llegas?",
        hintDe: "Rechne x + Vektor_x und y + Vektor_y: (8+1 | 10−2) und (6−1 | 5+2)!",
        hintEs: "Suma coordenada a coordenada: (8+1 | 10−2) y (6−1 | 5+2).",
        svgSpec: {
          type: "coord_grid",
          maxX: 11,
          maxY: 11,
          points: [
            { label: "Start (8|10)", x: 8, y: 10, color: "#0f172a" },
            { label: "Ziel (9|8)", x: 9, y: 8, color: "#16a34a" }
          ],
          vector: { x1: 8, y1: 10, x2: 9, y2: 8, labelDe: "→(1 | −2)" }
        },
        options: [
          { textDe: "Bei d) landet man auf (9 | 8) und bei g) landet man auf (5 | 7)", textEs: "En d) llegas a (9 | 8) y en g) llegas a (5 | 7)", correct: true },
          { textDe: "Bei d) landet man auf (7 | 12) und bei g) auf (7 | 3)", textEs: "En d) llegas a (7 | 12) y en g) a (7 | 3)", correct: false },
          { textDe: "Bei d) landet man auf (9 | 12) und bei g) auf (5 | 3)", textEs: "En d) llegas a (9 | 12) y en g) a (5 | 3)", correct: false },
          { textDe: "Bei beiden landet man auf (0 | 0)", textEs: "En ambos llegas a (0 | 0)", correct: false }
        ],
        explanationDe: "Klasse! Bei d): 8 + 1 = 9 (1 rechts) und 10 − 2 = 8 (2 unten) → (9 | 8). Und bei g): 6 − 1 = 5 (1 links) und 5 + 2 = 7 (2 oben) → (5 | 7)!",
        explanationEs: "¡Genial! En d): 8 + 1 = 9 y 10 − 2 = 8 → (9 | 8). Y en g): 6 − 1 = 5 y 5 + 2 = 7 → (5 | 7)."
      },
      {
        id: "m13_ks_6",
        world: "koordinaten",
        topicDe: "Fehlenden Vektor finden · Falle von S. 8 Aufgabe e!",
        questionDe: "Aufgepasst bei Aufgabe e) vom 11. November (S. 8): Du startest beim Punkt (5 | 8) und willst zum Zielpunkt (9 | 8). Welcher Vektor bringt dich von (5 | 8) nach (9 | 8)?",
        questionEs: "¡Ojo con el ejercicio e) del 11 de noviembre (pág. 8)! Partes en el punto (5 | 8) y llegas al punto final (9 | 8). ¿Qué vector te lleva desde (5 | 8) hasta (9 | 8)?",
        hintDe: "Von x = 5 bis x = 9 geht man nach RECHTS (+4, nicht −4!) und die Höhe y bleibt bei 8 (0 oben)!",
        hintEs: "En la pág. 8 habías puesto (−4|0), pero para ir del 5 al 9 vas 4 hacia la DERECHA (+4) y 0 arriba.",
        svgSpec: {
          type: "coord_grid",
          maxX: 11,
          maxY: 10,
          points: [
            { label: "Start (5|8)", x: 5, y: 8, color: "#0f172a" },
            { label: "Ziel (9|8)", x: 9, y: 8, color: "#dc2626" }
          ],
          vector: { x1: 5, y1: 8, x2: 9, y2: 8, labelDe: "Von 5 nach 9 = +4 rechts!" }
        },
        options: [
          { textDe: "Vektor →(4 | 0) — denn von 5 nach 9 geht man 4 nach RECHTS (+4) und 0 nach oben!", textEs: "Vector →(4 | 0) — ¡porque de 5 a 9 vas 4 a la DERECHA (+4) y 0 arriba!", correct: true },
          { textDe: "Vektor →(−4 | 0) — 4 nach links", textEs: "Vector →(−4 | 0) — 4 a la izquierda", correct: false },
          { textDe: "Vektor →(0 | 4) — 4 nach oben", textEs: "Vector →(0 | 4) — 4 hacia arriba", correct: false },
          { textDe: "Vektor →(14 | 16)", textEs: "Vector →(14 | 16)", correct: false }
        ],
        explanationDe: "Wichtiger Check für morgen: Von (5 | 8) nach (9 | 8) wird x größer (5 + 4 = 9, also 4 nach rechts = +4). Darum ist der Vektor →(4 | 0) ohne Minus! (Nur umgekehrt von 9 zurück nach 5 wäre es −4).",
        explanationEs: "¡Corrección súper útil para mañana! Para ir de (5 | 8) a (9 | 8) avanzas hacia la derecha (5 + 4 = 9), así que el vector es positivo →(4 | 0)."
      },
      {
        id: "m13_ks_7",
        world: "koordinaten",
        topicDe: "Vierecke im Koordinatensystem · S. 10 Aufgabe 1",
        questionDe: "Auf Seite 10 Aufgabe 1 verbindest du die 4 Punkte A(2|1), B(4|3), C(2|5) und D(0|3). Die Figur steht auf der Spitze, hat 4 gleich lange Seiten UND 4 rechte Winkel (90° ⦜). Welches Viereck ist es?",
        questionEs: "En la página 10 ejercicio 1 unes los 4 puntos A(2|1), B(4|3), C(2|5) y D(0|3). La figura queda apoyada en una punta, tiene 4 lados iguales Y 4 ángulos rectos (90° ⦜). ¿Qué cuadrilátero es?",
        hintDe: "Schau auf deine Karte „Viereck 1“ auf Seite 10: „Ich bin ein ...“",
        hintEs: "Mira tu tarjeta «Viereck 1» en la página 10: aunque esté en punta, sus ángulos miden 90°.",
        svgSpec: {
          type: "coord_grid",
          maxX: 6,
          maxY: 6,
          polygon: [
            { label: "A(2|1)", x: 2, y: 1 },
            { label: "B(4|3)", x: 4, y: 3 },
            { label: "C(2|5)", x: 2, y: 5 },
            { label: "D(0|3)", x: 0, y: 3 }
          ],
          polyColor: "#16a34a"
        },
        options: [
          { textDe: "Ein Quadrat (gedrehtes Quadrat mit 4 rechten Winkeln und 4 Symmetrieachsen)!", textEs: "¡Un Quadrat (cuadrado girado con 4 ángulos rectos y 4 ejes de simetría)!", correct: true },
          { textDe: "Ein Trapez (nur 1 Paar parallele Seiten)", textEs: "Un Trapez (solo 1 par de lados paralelos)", correct: false },
          { textDe: "Ein rechtwinkliges Dreieck", textEs: "Un triángulo rectángulo", correct: false },
          { textDe: "Ein allgemeines Trapezoid ohne Symmetrieachse", textEs: "Un trapezoide sin ejes de simetría", correct: false }
        ],
        explanationDe: "Genau wie du auf Seite 10 bei „Viereck 1“ eingetragen hast: Obwohl es auf der Spitze steht, treffen sich die Diagonalen und Seiten im 90°-Winkel und alle 4 Seiten sind gleich lang → Ich bin ein Quadrat!",
        explanationEs: "¡Tal como escribiste en «Viereck 1» de la página 10! Aunque esté apoyado en una esquina, sus 4 lados son iguales y sus 4 ángulos miden 90° → ¡Quadrat!"
      },
      {
        id: "m13_ks_8",
        world: "koordinaten",
        topicDe: "4. Eckpunkt ergänzen · S. 10 Aufgabe 2b (Quadrat)",
        questionDe: "Auf Seite 10 Aufgabe 2b sollst du ein QUADRAT EFGH fertig zeichnen. Gegeben sind 3 Eckpunkte: E(2 | 7), F(1 | 6) und G(2 | 5). Welche Koordinaten hat der fehlende 4. Eckpunkt H?",
        questionEs: "En la página 10 ejercicio 2b debes completar un QUADRAT (cuadrado) EFGH. Te dan 3 vértices: E(2 | 7), F(1 | 6) y G(2 | 5). ¿Qué coordenadas tiene el 4° vértice H que falta?",
        hintDe: "F(1|6) liegt um 1 links von der Mitte (2|6). Wo muss H auf der rechten Seite liegen?",
        hintEs: "F(1|6) está 1 unidad a la izquierda del centro (2|6). ¿Dónde debe estar H a la derecha?",
        svgSpec: {
          type: "coord_grid",
          maxX: 6,
          maxY: 9,
          polygon: [
            { label: "E(2|7)", x: 2, y: 7 },
            { label: "F(1|6)", x: 1, y: 6 },
            { label: "G(2|5)", x: 2, y: 5 },
            { label: "H(?|?)", x: 3, y: 6, isMissing: true }
          ],
          polyColor: "#0284c7"
        },
        options: [
          { textDe: "H (3 | 6)", textEs: "H (3 | 6)", correct: true },
          { textDe: "H (6 | 3)", textEs: "H (6 | 3)", correct: false },
          { textDe: "H (4 | 7)", textEs: "H (4 | 7)", correct: false },
          { textDe: "H (2 | 6)", textEs: "H (2 | 6)", correct: false }
        ],
        explanationDe: "Perfekt! E(2|7) ist oben, G(2|5) ist unten, F(1|6) ist links — also liegt der 4. Eckpunkt H genau gegenüber auf der rechten Seite bei H(3 | 6)!",
        explanationEs: "¡Perfecto! E(2|7) está arriba, G(2|5) abajo y F(1|6) a la izquierda, por lo que el 4° vértice H está justo al frente a la derecha en H(3 | 6)."
      },
      {
        id: "m13_ks_9",
        world: "koordinaten",
        topicDe: "4. Eckpunkt ergänzen · S. 10 Aufgabe 2a (Drachen)",
        questionDe: "Auf Seite 10 Aufgabe 2a soll ein DRACHEN ABCD entstehen. Gegeben sind A(0 | 2), B(1,5 | 1) und C(5 | 2). Die Linie von A(0|2) nach C(5|2) auf der Höhe y = 2 ist die Symmetrieachse! Wo liegt der 4. Eckpunkt D?",
        questionEs: "En la página 10 ejercicio 2a debes formar un DRACHEN (cometa) ABCD. Te dan A(0 | 2), B(1,5 | 1) y C(5 | 2). La línea horizontal entre A(0|2) y C(5|2) en y = 2 es el eje de simetría. ¿Dónde está el 4° vértice D?",
        hintDe: "B(1,5 | 1) liegt 1 Einheit UNTER der Achse y = 2. Also muss D genau 1 Einheit ÜBER der Achse liegen!",
        hintEs: "B(1,5 | 1) está 1 unidad DEBAJO del eje y = 2. ¡Entonces D debe estar 1 unidad ARRIBA del eje!",
        svgSpec: {
          type: "coord_grid",
          maxX: 6,
          maxY: 5,
          polygon: [
            { label: "A(0|2)", x: 0, y: 2 },
            { label: "B(1,5|1)", x: 1.5, y: 1 },
            { label: "C(5|2)", x: 5, y: 2 },
            { label: "D(?|?)", x: 1.5, y: 3, isMissing: true }
          ],
          polyColor: "#9333ea"
        },
        options: [
          { textDe: "D (1,5 | 3)", textEs: "D (1,5 | 3)", correct: true },
          { textDe: "D (3 | 1,5)", textEs: "D (3 | 1,5)", correct: false },
          { textDe: "D (5 | 4)", textEs: "D (5 | 4)", correct: false },
          { textDe: "D (1,5 | 0)", textEs: "D (1,5 | 0)", correct: false }
        ],
        explanationDe: "Spitzenmäßig! Da die Symmetrieachse des Drachens auf y = 2 verläuft und B bei (1,5 | 1) liegt (1 nach unten), liegt der Spiegelpunkt D genau 1 nach oben bei D(1,5 | 3)!",
        explanationEs: "¡Brillante! Como el eje de simetría del Drachen está en la altura y = 2 y B está en (1,5 | 1), el vértice simétrico D queda arriba en D(1,5 | 3)."
      },
      {
        id: "m13_ks_10",
        world: "koordinaten",
        topicDe: "Spiegelung an der Geraden g · S. 9 Aufgabe 1b",
        questionDe: "Auf Seite 9 Aufgabe 1b spiegelst du die Raute ABCD an der schrägen Spiegelgeraden g. Der Eckpunkt C(4 | 5) liegt GENAU AUF der Spiegelgeraden g, und D(2 | 6) liegt 1 Diagonalkästchen links darunter. Wo liegen die Bildpunkte C' und D'?",
        questionEs: "En la página 9 ejercicio 1b reflejas el rombo ABCD respecto a la recta de simetría inclinada g. El vértice C(4 | 5) está JUSTO SOBRE la recta g, y D(2 | 6) está a 1 diagonal de distancia. ¿Dónde quedan los puntos reflejados C' y D'?",
        hintDe: "Ein Punkt, der genau auf dem Spiegel g liegt, bewegt sich beim Spiegeln keinen Millimeter!",
        hintEs: "Un punto que está justo encima del espejo g ¡queda exactamente en el mismo lugar al reflejarse!",
        svgSpec: {
          type: "coord_mirror_s9"
        },
        options: [
          { textDe: "C' bleibt genau auf (4 | 5) und D(2 | 6) wird senkrecht über g zu D'(3 | 7) gespiegelt!", textEs: "¡C' se queda en (4 | 5) y D(2 | 6) se refleja al otro lado de g en D'(3 | 7)!", correct: true },
          { textDe: "C' wandert zu (0 | 0) und D' bleibt bei (2 | 6)", textEs: "C' se va a (0 | 0) y D' se queda en (2 | 6)", correct: false },
          { textDe: "C' liegt bei (5 | 4) und D' bei (6 | 2)", textEs: "C' queda en (5 | 4) y D' en (6 | 2)", correct: false },
          { textDe: "Alle Bildpunkte verschwinden beim Spiegeln", textEs: "Todos los puntos desaparecen al reflejarse", correct: false }
        ],
        explanationDe: "Geniale Beobachtung für Seite 9: Da C(4|5) direkt auf der Geraden g liegt, gilt C' = (4|5)! Und von D(2|6) geht man im 90°-Winkel zur Achse g (durch (2,5|6,5)) genauso weit auf die andere Seite zu D'(3|7) (sowie A(0|5) → A'(4|9) und B(2|4) → B'(5|7))!",
        explanationEs: "¡Gran observación para la página 9! Como C(4|5) está sobre la recta g, su reflejo es el mismo C'(4|5). Y al reflejar perpendicularmente respecto a g: D(2|6) → D'(3|7), A(0|5) → A'(4|9) y B(2|4) → B'(5|7)."
      },
      {
        id: "m13_ks_11",
        world: "koordinaten",
        topicDe: "4. Eckpunkt ergänzen · S. 10 Aufgabe 2c & 2d",
        questionDe: "Auf Seite 10 Aufgabe 2d soll eine RAUTE MNOP entstehen mit M(6,5 | 2,5), N(8 | 0,5) und O(9,5 | 2,5). Wo liegt der obere 4. Eckpunkt P?",
        questionEs: "En la página 10 ejercicio 2d debes completar una RAUTE (rombo) MNOP con M(6,5 | 2,5), N(8 | 0,5) y O(9,5 | 2,5). ¿Dónde queda el 4° vértice superior P?",
        hintDe: "Die Mitte liegt auf Höhe y = 2,5 bei x = 8. N(8 | 0,5) geht 2 nach unten → also geht P um 2 nach oben!",
        hintEs: "El centro está en (8 | 2,5). Como N(8 | 0,5) baja 2 unidades, P sube 2 unidades desde 2,5.",
        svgSpec: {
          type: "coord_grid",
          maxX: 11,
          maxY: 6,
          polygon: [
            { label: "M(6,5|2,5)", x: 6.5, y: 2.5 },
            { label: "N(8|0,5)", x: 8, y: 0.5 },
            { label: "O(9,5|2,5)", x: 9.5, y: 2.5 },
            { label: "P(?|?)", x: 8, y: 4.5, isMissing: true }
          ],
          polyColor: "#eab308"
        },
        options: [
          { textDe: "P (8 | 4,5)", textEs: "P (8 | 4,5)", correct: true },
          { textDe: "P (4,5 | 8)", textEs: "P (4,5 | 8)", correct: false },
          { textDe: "P (8 | 3,5)", textEs: "P (8 | 3,5)", correct: false },
          { textDe: "P (9,5 | 4,5)", textEs: "P (9,5 | 4,5)", correct: false }
        ],
        explanationDe: "Richtig! M und O liegen auf y = 2,5. N(8 | 0,5) liegt 2 Einheiten darunter, also liegt P genau 2 Einheiten darüber bei P(8 | 4,5)!",
        explanationEs: "¡Correcto! M y O están en y = 2,5. Como N(8 | 0,5) está 2 unidades más abajo, P queda 2 unidades más arriba en P(8 | 4,5)."
      }
    ]
  }
};
