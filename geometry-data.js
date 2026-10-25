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
      titleDe: "🟢 Probe A — Niveau 1: Basis-Training (Wie im Heft)",
      titleEs: "Prueba A — Nivel 1: Entrenamiento Base (Mismo nivel del cuaderno, ejercicios nuevos)",
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
      titleDe: "🟡 Probe B — Niveau 2: Mittelschwer & Prüfungsfallen",
      titleEs: "Prueba B — Nivel 2: Intermedio con Trampas Clásicas de Prueba",
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
      titleDe: "🔴 Probe C — Niveau 3: Experten-Probe (Für die Note 7,0)",
      titleEs: "Prueba C — Nivel 3: Prueba Experta (Desafíos para el 7.0)",
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
  }
};
