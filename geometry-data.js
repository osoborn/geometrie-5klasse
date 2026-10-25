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
  ]
};
