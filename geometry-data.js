// Datos pedagógicos basados 100% en el cuaderno de 5° Básico (5. Klasse) — Frau Ana María López Güell
// Incluye Banco Ampliado de 112 preguntas sin pistas para la Prueba de Geometría (Mika)

window.GEOMETRY_DATA = {
  "vocabItems": [
    {
      "id": "linie_offen",
      "block": "1. Die Linie (Tipos de línea)",
      "deutsch": "offene Linie",
      "DeutschAlt": [
        "offene linie",
        "offen"
      ],
      "symbol": "— / ~",
      "merkmalDe": "Anfang und Ende treffen sich nicht",
      "merkmalEs": "Sus extremos no se juntan (ej. recta, curva, espiral)",
      "spanisch": "línea abierta",
      "spanischAlt": [
        "linea abierta",
        "abierta"
      ]
    },
    {
      "id": "linie_geschlossen",
      "block": "1. Die Linie (Tipos de línea)",
      "deutsch": "geschlossene Linie",
      "DeutschAlt": [
        "geschlossene linie",
        "geschlossen"
      ],
      "symbol": "◯",
      "merkmalDe": "Hat Innenbereich, Außenbereich und Rand (Grenze)",
      "merkmalEs": "Tiene región interior, región exterior y frontera",
      "spanisch": "línea cerrada",
      "spanischAlt": [
        "linea cerrada",
        "cerrada"
      ]
    },
    {
      "id": "kurve",
      "block": "1. Die Linie (Tipos de línea)",
      "deutsch": "die Kurve",
      "DeutschAlt": [
        "kurve",
        "die kurve",
        "gekrümmte linie"
      ],
      "symbol": "〰️ / 🌀",
      "merkmalDe": "Nicht gerade (z. B. Spirale oder Wellenlinie)",
      "merkmalEs": "No es derecha (ej. curva o espiral)",
      "spanisch": "la curva",
      "spanischAlt": [
        "curva",
        "la curva",
        "linea curva",
        "línea curva"
      ]
    },
    {
      "id": "gerade",
      "block": "1. Die Linie (Tipos de línea)",
      "deutsch": "die Gerade",
      "DeutschAlt": [
        "gerade",
        "die gerade"
      ],
      "symbol": "⟷ (AB)",
      "merkmalDe": "Kein Anfangspunkt und kein Endpunkt (unendlich)",
      "merkmalEs": "Sin punto de inicio ni fin (flechas en ambos lados)",
      "spanisch": "la recta",
      "spanischAlt": [
        "recta",
        "la recta",
        "linea recta",
        "línea recta"
      ]
    },
    {
      "id": "strahl",
      "block": "1. Die Linie (Tipos de línea)",
      "deutsch": "der Strahl",
      "DeutschAlt": [
        "strahl",
        "der strahl",
        "halbgerade",
        "die halbgerade"
      ],
      "symbol": "⟼ (AB)",
      "merkmalDe": "Ein Anfangspunkt, aber kein Endpunkt (Bonus: 1. Buchstabe = Start!)",
      "merkmalEs": "Tiene inicio pero no fin (Bonus: 1ª letra = origen)",
      "spanisch": "el rayo / semirrecta",
      "spanischAlt": [
        "rayo",
        "el rayo",
        "semirrecta",
        "la semirrecta",
        "rayo o semirrecta"
      ]
    },
    {
      "id": "strecke",
      "block": "1. Die Linie (Tipos de línea)",
      "deutsch": "die Strecke",
      "DeutschAlt": [
        "strecke",
        "die strecke"
      ],
      "symbol": "I—I (AB)",
      "merkmalDe": "Hat Anfangspunkt und Endpunkt (messbare Länge)",
      "merkmalEs": "Tiene inicio y fin (topes en ambos lados, se puede medir)",
      "spanisch": "el segmento",
      "spanischAlt": [
        "segmento",
        "el segmento",
        "trazo",
        "el trazo"
      ]
    },
    {
      "id": "waagerecht",
      "block": "2. Lage zum Boden (Según el suelo)",
      "deutsch": "waagerecht / horizontal",
      "DeutschAlt": [
        "waagerecht",
        "horizontal",
        "waagrecht"
      ],
      "symbol": "☀️ ───",
      "merkmalDe": "Parallel zum Boden / Horizont",
      "merkmalEs": "Paralela al suelo o al horizonte",
      "spanisch": "horizontal",
      "spanischAlt": [
        "horizontal"
      ]
    },
    {
      "id": "senkrecht_boden",
      "block": "2. Lage zum Boden (Según el suelo)",
      "deutsch": "senkrecht / vertikal",
      "DeutschAlt": [
        "senkrecht",
        "vertikal"
      ],
      "symbol": "⊥ zum Boden",
      "merkmalDe": "Steht im 90°-Winkel zum Boden (Erde-Zeichnung)",
      "merkmalEs": "Forma 90° con el suelo (como una persona de pie en la Tierra)",
      "spanisch": "vertical",
      "spanischAlt": [
        "vertical",
        "perpendicular al suelo"
      ]
    },
    {
      "id": "schraeg",
      "block": "2. Lage zum Boden (Según el suelo)",
      "deutsch": "schräg",
      "DeutschAlt": [
        "schräg",
        "schraeg"
      ],
      "symbol": "╱",
      "merkmalDe": "Geneigt zum Boden (weder waagerecht noch senkrecht)",
      "merkmalEs": "Inclinada respecto al suelo (ni horizontal ni vertical)",
      "spanisch": "oblicua / inclinada",
      "spanischAlt": [
        "oblicua",
        "inclinada",
        "oblicuo"
      ]
    },
    {
      "id": "sekanten",
      "block": "3. Beziehung zwischen Linien (Relación entre líneas)",
      "deutsch": "die Sekanten",
      "DeutschAlt": [
        "sekanten",
        "die sekanten",
        "sekante",
        "sich schneidende linien",
        "sich schneidende geraden"
      ],
      "symbol": "✕",
      "merkmalDe": "Zwei Linien, die sich in einem Punkt schneiden",
      "merkmalEs": "Dos líneas que SÍ se intersecan (se cortan en un punto)",
      "spanisch": "las secantes",
      "spanischAlt": [
        "secantes",
        "las secantes",
        "lineas secantes",
        "líneas secantes"
      ]
    },
    {
      "id": "senkrechte_linien",
      "block": "3. Beziehung zwischen Linien (Relación entre líneas)",
      "deutsch": "senkrechte Linien",
      "DeutschAlt": [
        "senkrechte linien",
        "senkrecht",
        "senkrechte",
        "orthogonal"
      ],
      "symbol": "g ⊥ h (90°)",
      "merkmalDe": "Besondere Sekanten: schneiden sich im rechten Winkel (90°)",
      "merkmalEs": "Secante especial: se cortan formando un ángulo recto (90°)",
      "spanisch": "líneas perpendiculares",
      "spanischAlt": [
        "perpendiculares",
        "lineas perpendiculares",
        "líneas perpendiculares",
        "perpendicular"
      ]
    },
    {
      "id": "parallelen",
      "block": "3. Beziehung zwischen Linien (Relación entre líneas)",
      "deutsch": "die Parallelen",
      "DeutschAlt": [
        "parallelen",
        "die parallelen",
        "parallel",
        "parallele linien"
      ],
      "symbol": "g ∥ h",
      "merkmalDe": "Schneiden sich nie, immer gleicher Abstand",
      "merkmalEs": "NO se intersecan nunca y mantienen la misma distancia",
      "spanisch": "las paralelas",
      "spanischAlt": [
        "paralelas",
        "las paralelas",
        "lineas paralelas",
        "líneas paralelas"
      ]
    },
    {
      "id": "scheitelpunkt",
      "block": "4. Winkel-Grundbegriffe (Partes del ángulo)",
      "deutsch": "der Scheitelpunkt",
      "DeutschAlt": [
        "scheitelpunkt",
        "der scheitelpunkt",
        "scheitel"
      ],
      "symbol": "∡ D A̲ L (Mitte)",
      "merkmalDe": "Ursprung der beiden Strahlen (steht bei ∡ABC immer in der Mitte!)",
      "merkmalEs": "Punto donde nacen los dos rayos (¡va SIEMPRE al medio en ∡ABC!)",
      "spanisch": "el vértice",
      "spanischAlt": [
        "vertice",
        "vértice",
        "el vertice",
        "el vértice"
      ]
    },
    {
      "id": "schenkel",
      "block": "4. Winkel-Grundbegriffe (Partes del ángulo)",
      "deutsch": "die Schenkel",
      "DeutschAlt": [
        "schenkel",
        "die schenkel",
        "der schenkel"
      ],
      "symbol": "1. & 2. Strahl",
      "merkmalDe": "Die zwei Strahlen, die den Winkel begrenzen",
      "merkmalEs": "Los dos rayos (lados) que forman el ángulo",
      "spanisch": "los lados del ángulo",
      "spanischAlt": [
        "lados",
        "los lados",
        "rayos",
        "lados del angulo",
        "lados del ángulo"
      ]
    },
    {
      "id": "nullwinkel",
      "block": "5. Winkelarten / Sortierung (Clasificación de ángulos)",
      "deutsch": "Nullwinkel",
      "DeutschAlt": [
        "nullwinkel",
        "der nullwinkel",
        "0-winkel",
        "0 winkel"
      ],
      "symbol": "0°",
      "merkmalDe": "Genau 0° (keine Drehung)",
      "merkmalEs": "Exactamente 0° (sin abertura)",
      "spanisch": "ángulo nulo",
      "spanischAlt": [
        "angulo nulo",
        "ángulo nulo",
        "nulo"
      ]
    },
    {
      "id": "spitzer_winkel",
      "block": "5. Winkelarten / Sortierung (Clasificación de ángulos)",
      "deutsch": "Spitzer Winkel",
      "DeutschAlt": [
        "spitzer winkel",
        "spitzer",
        "spitzwinkel",
        "spitz"
      ],
      "symbol": "1° – 89°",
      "merkmalDe": "Größer als 0° und kleiner als 90°",
      "merkmalEs": "Entre 1° y 89° (menor que un ángulo recto)",
      "spanisch": "ángulo agudo",
      "spanischAlt": [
        "angulo agudo",
        "ángulo agudo",
        "agudo"
      ]
    },
    {
      "id": "rechter_winkel",
      "block": "5. Winkelarten / Sortierung (Clasificación de ángulos)",
      "deutsch": "Rechter Winkel",
      "DeutschAlt": [
        "rechter winkel",
        "rechter",
        "rechtwinkel",
        "recht"
      ],
      "symbol": "90° (⦜)",
      "merkmalDe": "Genau 90° (senkrechte Schenkel, Bogen mit Punkt)",
      "merkmalEs": "Exactamente 90° (rayos perpendiculares)",
      "spanisch": "ángulo recto",
      "spanischAlt": [
        "angulo recto",
        "ángulo recto",
        "recto"
      ]
    },
    {
      "id": "stumpfer_winkel",
      "block": "5. Winkelarten / Sortierung (Clasificación de ángulos)",
      "deutsch": "Stumpfer Winkel",
      "DeutschAlt": [
        "stumpfer winkel",
        "stumpfer",
        "stumpfwinkel",
        "stumpf"
      ],
      "symbol": "91° – 179°",
      "merkmalDe": "Größer als 90° und kleiner als 180°",
      "merkmalEs": "Entre 91° y 179° (más abierto que 90°, menos que 180°)",
      "spanisch": "ángulo obtuso",
      "spanischAlt": [
        "angulo obtuso",
        "ángulo obtuso",
        "obtuso"
      ]
    },
    {
      "id": "gestreckter_winkel",
      "block": "5. Winkelarten / Sortierung (Clasificación de ángulos)",
      "deutsch": "Gestreckter Winkel",
      "DeutschAlt": [
        "gestreckter winkel",
        "gestreckter",
        "gestreckt"
      ],
      "symbol": "180°",
      "merkmalDe": "Genau 180° (halbe Drehung, bildet eine Gerade)",
      "merkmalEs": "Exactamente 180° (media vuelta, forma una línea recta)",
      "spanisch": "ángulo extendido",
      "spanischAlt": [
        "angulo extendido",
        "ángulo extendido",
        "extendido",
        "llano",
        "angulo llano",
        "ángulo llano"
      ]
    },
    {
      "id": "ueberstumpfer_winkel",
      "block": "5. Winkelarten / Sortierung (Clasificación de ángulos)",
      "deutsch": "Überstumpfer Winkel",
      "DeutschAlt": [
        "überstumpfer winkel",
        "ueberstumpfer winkel",
        "überstumpfer",
        "ueberstumpfer",
        "überstumpf"
      ],
      "symbol": "181° – 359°",
      "merkmalDe": "Größer als 180° und kleiner als 360°",
      "merkmalEs": "Entre 181° y 359° (mayor que media vuelta)",
      "spanisch": "ángulo cóncavo / entrante (convexo en apunte)",
      "spanischAlt": [
        "convexo",
        "concavo",
        "cóncavo",
        "entrante",
        "angulo convexo",
        "ángulo convexo",
        "angulo concavo",
        "ángulo cóncavo"
      ]
    },
    {
      "id": "voller_winkel",
      "block": "5. Winkelarten / Sortierung (Clasificación de ángulos)",
      "deutsch": "Voller Winkel",
      "DeutschAlt": [
        "voller winkel",
        "vollwinkel",
        "voller",
        "voll"
      ],
      "symbol": "360°",
      "merkmalDe": "Genau 360° (eine komplette Drehung / Kreis)",
      "merkmalEs": "Exactamente 360° (una vuelta completa)",
      "spanisch": "ángulo completo",
      "spanischAlt": [
        "angulo completo",
        "ángulo completo",
        "completo"
      ]
    }
  ],
  "notebookAnglePairs": [
    {
      "id": "nb_dal",
      "source": "Heft · Montag, 19. Oktober",
      "vertex": "A",
      "p1": "D",
      "p2": "L",
      "ray1Deg": 270,
      "deg1": 45,
      "deg2": 315,
      "given": 1,
      "noteDe": "Beispiel aus dem Heft: ∡DAL = 45° (grün) und außen herum ∡LAD = 315° (rot gepunktet).",
      "noteEs": "Ejemplo del cuaderno (19 oct): ∡DAL = 45° y dando la vuelta antihoraria ∡LAD = 315°."
    },
    {
      "id": "nb_jkl_30",
      "source": "Heft · Mittwoch, 21. Oktober (Beispiel)",
      "vertex": "K",
      "p1": "J",
      "p2": "L",
      "ray1Deg": 0,
      "deg1": 30,
      "deg2": 330,
      "given": 1,
      "noteDe": "Vom Strahl KJ gegen den Uhrzeigersinn zu KL sind es 30° (∡JKL = 30°, ∡LKJ = 330°).",
      "noteEs": "Del rayo KJ en sentido antihorario a KL hay 30° (∡JKL = 30°, ∡LKJ = 330°)."
    },
    {
      "id": "nb_lmn_120",
      "source": "Heft · Mittwoch, 21. Oktober (#1)",
      "vertex": "M",
      "p1": "L",
      "p2": "N",
      "ray1Deg": 0,
      "deg1": 120,
      "deg2": 240,
      "given": 1,
      "noteDe": "Übung 1: ∡LMN = 120° (stumpfer Winkel) und ∡NML = 360° − 120° = 240° (überstumpfer Winkel).",
      "noteEs": "Ejercicio 1: ∡LMN = 120° (obtuso) y ∡NML = 360° − 120° = 240°."
    },
    {
      "id": "nb_cdf_80",
      "source": "Heft · Mittwoch, 21. Oktober (#2)",
      "vertex": "D",
      "p1": "C",
      "p2": "F",
      "ray1Deg": 0,
      "deg1": 80,
      "deg2": 280,
      "given": 1,
      "noteDe": "Übung 2: ∡CDF = 80° (spitzer Winkel) und ∡FDC = 360° − 80° = 280°.",
      "noteEs": "Ejercicio 2: ∡CDF = 80° (agudo) y ∡FDC = 360° − 80° = 280°."
    },
    {
      "id": "nb_hij_200",
      "source": "Heft · Mittwoch, 21. Oktober (#3)",
      "vertex": "I",
      "p1": "H",
      "p2": "J",
      "ray1Deg": 0,
      "deg1": 200,
      "deg2": 160,
      "given": 2,
      "noteDe": "Übung 3 (Achtung Richtung!): ∡HIJ = 200° (oben herum ↺) und ∡JIH = 160° (unten herum ↺).",
      "noteEs": "Ejercicio 3 (¡Ojo con el sentido antihorario!): ∡HIJ = 200° (por arriba ↺) y ∡JIH = 160° (por abajo ↺)."
    },
    {
      "id": "nb_fgh_300",
      "source": "Heft · Mittwoch, 21. Oktober (#4)",
      "vertex": "G",
      "p1": "F",
      "p2": "H",
      "ray1Deg": 0,
      "deg1": 60,
      "deg2": 300,
      "given": 1,
      "noteDe": "Übung 4: Ein Winkel misst 60° (spitzer Winkel) und der Gegenwinkel 300° (zusammen 360°).",
      "noteEs": "Ejercicio 4: El ángulo interior mide 60° (agudo) y el exterior 300° (suman 360°)."
    },
    {
      "id": "nb_def_15",
      "source": "Heft · Mittwoch, 21. Oktober (a)",
      "vertex": "E",
      "p1": "D",
      "p2": "F",
      "ray1Deg": 5,
      "deg1": 15,
      "deg2": 345,
      "given": 2,
      "noteDe": "Aufgabe a): Gegeben ist 345°. Rechnung: 360° − 345° = 15° (Spitzer Winkel).",
      "noteEs": "Ejercicio a): Te dan el arco exterior de 345°. Restas 360° − 345° = 15° (Spitzer Winkel)."
    },
    {
      "id": "nb_jkl_205",
      "source": "Heft · Mittwoch, 21. Oktober (b)",
      "vertex": "K",
      "p1": "J",
      "p2": "L",
      "ray1Deg": 0,
      "deg1": 155,
      "deg2": 205,
      "given": 1,
      "noteDe": "Aufgabe b): 155° (Stumpfer Winkel) und 360° − 155° = 205° (Überstumpfer Winkel).",
      "noteEs": "Ejercicio b): 155° (Stumpfer Winkel) y 360° − 155° = 205° (Überstumpfer Winkel)."
    },
    {
      "id": "nb_ijl_95",
      "source": "Heft · Mittwoch, 21. Oktober (d)",
      "vertex": "J",
      "p1": "I",
      "p2": "L",
      "ray1Deg": 0,
      "deg1": 95,
      "deg2": 265,
      "given": 2,
      "noteDe": "Aufgabe d): 360° − 265° = 95° (knapp größer als 90°, also ein Stumpfer Winkel!).",
      "noteEs": "Ejercicio d): 360° − 265° = 95° (apenas mayor que 90°, ¡así que es Stumpfer Winkel!)."
    },
    {
      "id": "nb_mko_60",
      "source": "Heft · Freitag, 23. Oktober (#1)",
      "vertex": "K",
      "p1": "M",
      "p2": "O",
      "ray1Deg": 0,
      "deg1": 60,
      "deg2": 300,
      "given": 1,
      "noteDe": "Freitag #1: ∡MKO = 60°, ∡OKM = 300° → Sortierung: Spitzer Winkel.",
      "noteEs": "Viernes #1: ∡MKO = 60°, ∡OKM = 300° → Clasificación: Spitzer Winkel."
    },
    {
      "id": "nb_lam_155",
      "source": "Heft · Freitag, 23. Oktober (#2)",
      "vertex": "A",
      "p1": "L",
      "p2": "M",
      "ray1Deg": 0,
      "deg1": 155,
      "deg2": 205,
      "given": 1,
      "noteDe": "Freitag #2: ∡LAM = 155°, ∡MAL = 205° → Sortierung: Stumpfer Winkel.",
      "noteEs": "Viernes #2: ∡LAM = 155°, ∡MAL = 205° → Clasificación: Stumpfer Winkel."
    },
    {
      "id": "nb_ald_90",
      "source": "Heft · Freitag, 23. Oktober (#3)",
      "vertex": "L",
      "p1": "A",
      "p2": "D",
      "ray1Deg": 0,
      "deg1": 90,
      "deg2": 270,
      "given": 1,
      "noteDe": "Freitag #3: ∡ALD = 90°, ∡DLA = 270° → Sortierung: Rechter Winkel.",
      "noteEs": "Viernes #3: ∡ALD = 90°, ∡DLA = 270° → Clasificación: Rechter Winkel."
    },
    {
      "id": "nb_wal_40",
      "source": "Heft · Freitag, 23. Oktober (#4)",
      "vertex": "A",
      "p1": "W",
      "p2": "L",
      "ray1Deg": 0,
      "deg1": 40,
      "deg2": 320,
      "given": 1,
      "noteDe": "Freitag #4: ∡WAL = 40°, ∡LAW = 320° → Sortierung: Spitzer Winkel.",
      "noteEs": "Viernes #4: ∡WAL = 40°, ∡LAW = 320° → Clasificación: Spitzer Winkel."
    },
    {
      "id": "nb_ter_100",
      "source": "Heft · Freitag, 23. Oktober (#5)",
      "vertex": "E",
      "p1": "T",
      "p2": "R",
      "ray1Deg": 0,
      "deg1": 100,
      "deg2": 260,
      "given": 1,
      "noteDe": "Freitag #5: ∡TER = 100°, ∡RET = 260° → Sortierung: Stumpfer Winkel.",
      "noteEs": "Viernes #5: ∡TER = 100°, ∡RET = 260° → Clasificación: Stumpfer Winkel."
    },
    {
      "id": "nb_msa_110",
      "source": "Heft · Freitag, 23. Oktober (#6)",
      "vertex": "S",
      "p1": "M",
      "p2": "A",
      "ray1Deg": 0,
      "deg1": 110,
      "deg2": 250,
      "given": 1,
      "noteDe": "Freitag #6: ∡MSA = 110°, ∡ASM = 250° → Sortierung: Stumpfer Winkel.",
      "noteEs": "Viernes #6: ∡MSA = 110°, ∡ASM = 250° → Clasificación: Stumpfer Winkel."
    },
    {
      "id": "nb_bkm_255",
      "source": "Heft · Freitag, 23. Oktober (#7)",
      "vertex": "K",
      "p1": "M",
      "p2": "B",
      "ray1Deg": 0,
      "deg1": 105,
      "deg2": 255,
      "given": 1,
      "noteDe": "Freitag #7: ∡MKB = 105° und ∡BKM = 255° (360° − 105° = 255°).",
      "noteEs": "Viernes #7: ∡MKB = 105° y ∡BKM = 255° (360° − 105° = 255°)."
    },
    {
      "id": "nb_tos_310",
      "source": "Heft · Freitag, 23. Oktober (#8)",
      "vertex": "O",
      "p1": "T",
      "p2": "S",
      "ray1Deg": 220,
      "deg1": 140,
      "deg2": 220,
      "customDeg1": 310,
      "customDeg2": 50,
      "given": 1,
      "noteDe": "Freitag #8: ∡TOS = 310° (überstumpfer Winkel) und ∡SOT = 50° (spitzer Winkel).",
      "noteEs": "Viernes #8: ∡TOS = 310° y ∡SOT = 50° (suman 360°)."
    },
    {
      "id": "nb_pcn_200",
      "source": "Heft · Freitag, 23. Oktober (#9)",
      "vertex": "C",
      "p1": "N",
      "p2": "P",
      "ray1Deg": 0,
      "deg1": 160,
      "deg2": 200,
      "given": 1,
      "noteDe": "Freitag #9: ∡NCP = 160° und ∡PCN = 200°.",
      "noteEs": "Viernes #9: ∡NCP = 160° y ∡PCN = 200°."
    },
    {
      "id": "nb_fcj_350",
      "source": "Heft · Freitag, 23. Oktober (#10)",
      "vertex": "C",
      "p1": "F",
      "p2": "J",
      "ray1Deg": 0,
      "deg1": 350,
      "deg2": 10,
      "given": 1,
      "noteDe": "Freitag #10: ∡FCJ = 350° (fast ein voller Kreis!) und ∡JCF = 10° (spitzer Winkel).",
      "noteEs": "Viernes #10: ∡FCJ = 350° (¡casi vuelta completa!) y ∡JCF = 10° (agudo)."
    }
  ],
  "detectiveTasks": [
    {
      "id": "det_13okt_jl",
      "category": "figure_symbols",
      "titleDe": "Heft-Übung (13. Okt): Linie zwischen J und L",
      "titleEs": "Ejercicio del cuaderno (13 oct): Línea entre J y L",
      "figureType": "notebook_jlmk",
      "highlightPart": "JL",
      "questionDe": "Schau dir die markierte Linie von Punkt J über Punkt L an: Bei J ist ein Querstrich (Startpunkt), hinter L geht ein Pfeil weiter. Welches Symbol und welcher Begriff passen?",
      "questionEs": "Mira la línea marcada desde el punto J pasando por L: en J tiene un tope (inicio) y después de L sigue con flecha. ¿Qué símbolo y nombre corresponden?",
      "options": [
        {
          "id": "a",
          "labelDe": "⟼ JL  — der Strahl (beginnt bei J)",
          "labelEs": "Rayo que empieza en J",
          "correct": true
        },
        {
          "id": "b",
          "labelDe": "⟼ LJ  — der Strahl (beginnt bei L)",
          "labelEs": "Rayo que empieza en L",
          "correct": false
        },
        {
          "id": "c",
          "labelDe": "I—I JL — die Strecke",
          "labelEs": "Segmento JL",
          "correct": false
        },
        {
          "id": "d",
          "labelDe": "⟷ JL  — die Gerade",
          "labelEs": "Recta JL",
          "correct": false
        }
      ],
      "explanationDe": "Richtig! Bei J ist der Anfangspunkt (Querstrich) und bei L der Pfeil → es ist ein Strahl (⟼ JL).",
      "explanationEs": "¡Exacto! En J está el tope de inicio y en L la flecha → es un rayo (der Strahl) y se escribe primero la letra de inicio: JL."
    },
    {
      "id": "det_13okt_lm",
      "category": "figure_symbols",
      "titleDe": "Heft-Übung (13. Okt): Linie zwischen L und M",
      "titleEs": "Ejercicio del cuaderno (13 oct): Línea entre L und M",
      "figureType": "notebook_jlmk",
      "highlightPart": "LM",
      "questionDe": "Die markierte Linie zwischen L und M hat sowohl bei L als auch bei M einen Endstrich (keinen Pfeil). Wie nennt man sie?",
      "questionEs": "La línea marcada entre L y M tiene tope tanto en L como en M (sin flechas). ¿Cómo se llama y escribe?",
      "options": [
        {
          "id": "a",
          "labelDe": "I—I LM — die Strecke",
          "labelEs": "El segmento LM",
          "correct": true
        },
        {
          "id": "b",
          "labelDe": "⟷ LM — die Gerade",
          "labelEs": "La recta LM",
          "correct": false
        },
        {
          "id": "c",
          "labelDe": "⟼ LM — der Strahl",
          "labelEs": "El rayo LM",
          "correct": false
        },
        {
          "id": "d",
          "labelDe": "die Kurve LM",
          "labelEs": "La curva LM",
          "correct": false
        }
      ],
      "explanationDe": "Super! Anfangspunkt L und Endpunkt M mit zwei Begrenzungsstrichen → die Strecke LM.",
      "explanationEs": "¡Muy bien! Tiene punto de inicio L y punto final M con dos topes → die Strecke (el segmento) LM."
    },
    {
      "id": "det_13okt_km",
      "category": "figure_symbols",
      "titleDe": "Heft-Übung (13. Okt): Linie durch K und M",
      "titleEs": "Ejercicio del cuaderno (13 oct): Línea por K y M",
      "figureType": "notebook_jlmk",
      "highlightPart": "KM",
      "questionDe": "Die Linie durch K und M hat an beiden Enden einen Pfeil (geht unendlich weiter). Was ist das?",
      "questionEs": "La línea que pasa por K y M tiene flecha en ambos extremos (sigue infinitamente). ¿Qué es?",
      "options": [
        {
          "id": "a",
          "labelDe": "⟷ KM — die Gerade",
          "labelEs": "La recta KM",
          "correct": true
        },
        {
          "id": "b",
          "labelDe": "⟼ KM — der Strahl",
          "labelEs": "El rayo KM",
          "correct": false
        },
        {
          "id": "c",
          "labelDe": "I—I KM — die Strecke",
          "labelEs": "El segmento KM",
          "correct": false
        },
        {
          "id": "d",
          "labelDe": "geschlossene Linie",
          "labelEs": "Línea cerrada",
          "correct": false
        }
      ],
      "explanationDe": "Perfekt! Pfeile an beiden Seiten bedeuten: kein Anfang, kein Ende → die Gerade (⟷ KM).",
      "explanationEs": "¡Perfecto! Flechas en ambos lados significan sin principio ni fin → die Gerade (la recta KM)."
    },
    {
      "id": "det_13okt_mj",
      "category": "figure_symbols",
      "titleDe": "Heft-Übung (13. Okt): ★ Bonus — Linie von M nach J",
      "titleEs": "Ejercicio del cuaderno (13 oct): ★ Bonus — Línea de M hacia J",
      "figureType": "notebook_jlmk",
      "highlightPart": "MJ",
      "questionDe": "★ BONUS-FRAGE: Diese Linie startet mit einem Strich bei M und hat den Pfeil oben bei J. Wie schreibt man das Symbol richtig auf?",
      "questionEs": "★ PREGUNTA BONUS: Esta línea parte con un tope en M y tiene la flecha arriba en J. ¿Cómo se escribe correctamente su símbolo?",
      "options": [
        {
          "id": "a",
          "labelDe": "⟼ MJ — der Strahl",
          "labelEs": "⟼ MJ — el rayo",
          "correct": true
        },
        {
          "id": "b",
          "labelDe": "⟼ JM — der Strahl",
          "labelEs": "⟼ JM — el rayo",
          "correct": false
        },
        {
          "id": "c",
          "labelDe": "I—I MJ — die Strecke",
          "labelEs": "I—I MJ — el segmento",
          "correct": false
        },
        {
          "id": "d",
          "labelDe": "⟷ MJ — die Gerade",
          "labelEs": "⟷ MJ — la recta",
          "correct": false
        }
      ],
      "explanationDe": "Stark! Wie im lila Bonus-Kasten im Heft: Beim Strahl steht IMMER der Anfangspunkt (M) zuerst → ⟼ MJ.",
      "explanationEs": "¡Excelente! Tal como dice el recuadro morado 'Bonus' del cuaderno: en un Strahl SIEMPRE se escribe primero la letra donde empieza (M) → ⟼ MJ."
    },
    {
      "id": "det_5okt_strahl_schraeg",
      "category": "line_classification",
      "titleDe": "Heft-Beispiel (5. Okt): 3 Eigenschaften erkennen",
      "titleEs": "Ejemplo del cuaderno (5 oct): Reconocer 3 propiedades",
      "figureType": "slanted_ray",
      "questionDe": "Betrachte diese Linie (wie unten links auf der Seite vom 5. Oktober): Welche 3 Eigenschaften treffen alle zu?",
      "questionEs": "Observa esta línea (como la de abajo a la izquierda en la página del 5 de octubre): ¿Cuáles 3 propiedades cumple?",
      "options": [
        {
          "id": "a",
          "labelDe": "offene Linie · der Strahl · schräg (zum Boden)",
          "labelEs": "abierta · rayo · oblicua (según el suelo)",
          "correct": true
        },
        {
          "id": "b",
          "labelDe": "offene Linie · die Strecke · waagerecht",
          "labelEs": "abierta · segmento · horizontal",
          "correct": false
        },
        {
          "id": "c",
          "labelDe": "geschlossene Linie · die Gerade · senkrecht",
          "labelEs": "cerrada · recta · vertical",
          "correct": false
        },
        {
          "id": "d",
          "labelDe": "offene Linie · die Kurve · schräg",
          "labelEs": "abierta · curva · oblicua",
          "correct": false
        }
      ],
      "explanationDe": "Genau wie im Heft notiert: gerade → Strahl (Rayo), schräg (oblicua), offen (abierta)!",
      "explanationEs": "¡Tal como está anotado en el cuaderno: recta → rayo (Strahl), oblicua (schräg), abierta (offene Linie)!"
    },
    {
      "id": "det_5okt_geschlossen",
      "category": "line_classification",
      "titleDe": "Heft (5. Okt): Geschlossene Linie & Bereiche",
      "titleEs": "Cuaderno (5 oct): Línea cerrada y regiones",
      "figureType": "closed_regions",
      "questionDe": "Eine geschlossene Linie teilt die Fläche in drei Teile (lila Punkte drinnen, grüne Punkte draußen, und die Linie selbst). Wie heißen diese 3 Teile?",
      "questionEs": "Una línea cerrada divide el plano en tres partes (puntos morados adentro, puntos verdes afuera y la línea misma). ¿Cómo se llaman?",
      "options": [
        {
          "id": "a",
          "labelDe": "Innenbereich (región interior), Außenbereich (región exterior) und Rand/Grenze (frontera)",
          "labelEs": "Región interior, región exterior y frontera",
          "correct": true
        },
        {
          "id": "b",
          "labelDe": "Scheitelpunkt, 1. Schenkel und 2. Schenkel",
          "labelEs": "Vértice, 1er lado y 2do lado",
          "correct": false
        },
        {
          "id": "c",
          "labelDe": "Gerade, Strahl und Strecke",
          "labelEs": "Recta, rayo y segmento",
          "correct": false
        },
        {
          "id": "d",
          "labelDe": "Waagerecht, senkrecht und schräg",
          "labelEs": "Horizontal, vertical y oblicua",
          "correct": false
        }
      ],
      "explanationDe": "Richtig! Jede geschlossene Linie hat einen Innenbereich, einen Außenbereich und die Grenze (Rand / frontera).",
      "explanationEs": "¡Correcto! Toda línea cerrada tiene región interior (Innenbereich), región exterior (Außenbereich) y frontera (Rand/Grenze)."
    },
    {
      "id": "det_5okt_boden",
      "category": "line_classification",
      "titleDe": "Heft (5. Okt): Lage zum Boden (Horizont & Erde)",
      "titleEs": "Cuaderno (5 oct): Posición según el suelo (Horizonte y Tierra)",
      "figureType": "ground_positions",
      "questionDe": "Ordne die drei Linien A (wie der Horizont mit der Sonne), B (wie ein Mensch, der aufrecht auf dem Boden steht) und C (geneigt) richtig zu:",
      "questionEs": "Asocia las tres líneas A (como el horizonte con el sol), B (como una persona parada derecha sobre el suelo) y C (inclinada):",
      "options": [
        {
          "id": "a",
          "labelDe": "A = waagerecht (horizontal) · B = senkrecht (vertical) · C = schräg (oblicua)",
          "labelEs": "A = horizontal · B = vertical · C = oblicua",
          "correct": true
        },
        {
          "id": "b",
          "labelDe": "A = senkrecht · B = waagerecht · C = schräg",
          "labelEs": "A = vertical · B = horizontal · C = oblicua",
          "correct": false
        },
        {
          "id": "c",
          "labelDe": "A = schräg · B = parallel · C = waagerecht",
          "labelEs": "A = oblicua · B = paralela · C = horizontal",
          "correct": false
        },
        {
          "id": "d",
          "labelDe": "A = Kurve · B = Strahl · C = Strecke",
          "labelEs": "A = curva · B = rayo · C = segmento",
          "correct": false
        }
      ],
      "explanationDe": "Klasse! Waagerecht = horizontal wie der Horizont, senkrecht = 90° zum Boden, schräg = geneigt.",
      "explanationEs": "¡Genial! Waagerecht = horizontal como el horizonte, senkrecht = 90° respecto al suelo (vertical), schräg = oblicua."
    },
    {
      "id": "det_6okt_sekanten_parallelen",
      "category": "line_relations",
      "titleDe": "Heft (6. Okt): Beziehung zwischen Linien",
      "titleEs": "Cuaderno (6 oct): Relación entre líneas",
      "figureType": "relations_overview",
      "questionDe": "Zwei Geraden schneiden sich in einem Punkt, aber NICHT im 90°-Winkel (Bild 1). Und im Bild 2 bilden sie genau 90°. Wie heißen sie im Heft?",
      "questionEs": "Dos rectas se intersecan en un punto pero NO en 90° (Imagen 1). Y en la Imagen 2 forman exactamente 90°. ¿Cómo se llaman en el cuaderno?",
      "options": [
        {
          "id": "a",
          "labelDe": "Bild 1: Sekanten (secantes) · Bild 2: Besondere Sekante → Senkrechte Linien (perpendiculares, 90°)",
          "labelEs": "Img 1: Secantes · Img 2: Secante especial → Perpendiculares (90°)",
          "correct": true
        },
        {
          "id": "b",
          "labelDe": "Bild 1: Parallelen · Bild 2: Sekanten",
          "labelEs": "Img 1: Paralelas · Img 2: Secantes",
          "correct": false
        },
        {
          "id": "c",
          "labelDe": "Bild 1: Strecken · Bild 2: Parallelen",
          "labelEs": "Img 1: Segmentos · Img 2: Paralelas",
          "correct": false
        },
        {
          "id": "d",
          "labelDe": "Beide heißen Parallelen (g ∥ h)",
          "labelEs": "Ambas se llaman paralelas",
          "correct": false
        }
      ],
      "explanationDe": "Genau so steht es im Schema vom 6. Oktober: Schneiden sie sich → Sekanten. Schneiden sie sich im 90°-Winkel → Senkrechte Linien!",
      "explanationEs": "Exactamente como en el esquema del 6 de octubre: si se intersecan → Sekanten (secantes). Si forman 90° → Senkrechte Linien (perpendiculares)."
    },
    {
      "id": "det_13okt_fishbone",
      "category": "line_relations",
      "titleDe": "Heft (8. & 13. Okt): Senkrechte Linien auf einer schrägen Gerade",
      "titleEs": "Cuaderno (8 y 13 oct): Líneas perpendiculares sobre una recta inclinada",
      "figureType": "slanted_perpendiculars",
      "questionDe": "Auf der schrägen Hauptgerade g sind 4 Linien eingezeichnet (1, 2, 3 und 4). Welche davon stehen wirklich SENKRECHT (⊥, 90°) auf g?",
      "questionEs": "Sobre la recta principal inclinada g se dibujaron 4 líneas (1, 2, 3 y 4). ¿Cuáles de ellas son realmente PERPENDICULARES (⊥, 90°) a g?",
      "options": [
        {
          "id": "a",
          "labelDe": "Die Linien 1, 2 und 4",
          "labelEs": "Las líneas 1, 2 y 4",
          "correct": true
        },
        {
          "id": "b",
          "labelDe": "Nur die Linie 3",
          "labelEs": "Solo la línea 3",
          "correct": false
        },
        {
          "id": "c",
          "labelDe": "Die Linien 2 und 3",
          "labelEs": "Las líneas 2 y 3",
          "correct": false
        },
        {
          "id": "d",
          "labelDe": "Alle vier Linien (1, 2, 3 und 4)",
          "labelEs": "Las cuatro líneas (1, 2, 3 y 4)",
          "correct": false
        }
      ],
      "explanationDe": "Aufgepasst! Senkrecht zu einer schrägen Gerade heißt: Das Geodreieck liegt mit der 90°-Mittellinie auf der schrägen Gerade (wie bei 1, 2 und 4)!",
      "explanationEs": "¡Ojo con esta trampa clásica de prueba! Perpendicular a una recta inclinada significa que forma 90° con ESA recta (como 1, 2 y 4), no con el borde del cuaderno."
    },
    {
      "id": "det_13okt_alltag",
      "category": "line_relations",
      "titleDe": "Heft (19. Okt oben): Parallel zum Boden & Senkrecht zur Wand",
      "titleEs": "Cuaderno (19 oct arriba): Paralelo al suelo y Perpendicular a la pared",
      "figureType": "room_objects",
      "questionDe": "Im Heft wurden Dinge im Klassenzimmer untersucht. Welche Zuordnung stimmt mit den Beispielen aus dem Heft überein?",
      "questionEs": "En el cuaderno anotaron objetos de la sala/casa. ¿Cuál asociación coincide con los ejemplos del cuaderno?",
      "options": [
        {
          "id": "a",
          "labelDe": "Parallel zum Boden: Buch auf dem Tisch, Schließfach-Boden, Waschbecken-Boden · Senkrecht (oder an) der Wand: Regal/Möbel, Tür, Vorhang",
          "labelEs": "Paralelo al suelo: libro, base casillero, base lavamanos · Perpendicular: mueble, puerta, cortina",
          "correct": true
        },
        {
          "id": "b",
          "labelDe": "Ein Vorhang (cortina) liegt immer waagerecht und parallel zum Boden",
          "labelEs": "Una cortina colgada siempre es horizontal y paralela al suelo",
          "correct": false
        },
        {
          "id": "c",
          "labelDe": "Boden und Decke sind Sekanten, die sich im Zimmer schneiden",
          "labelEs": "El suelo y el techo son secantes que se cortan en la pieza",
          "correct": false
        },
        {
          "id": "d",
          "labelDe": "Ein flach auf dem Tisch liegendes Buch ist senkrecht zum Boden",
          "labelEs": "Un libro apoyado plano en la mesa es perpendicular al suelo",
          "correct": false
        }
      ],
      "explanationDe": "Super erinnert! Genau diese Beispiele stehen oben auf der Heftseite vom 19. Oktober.",
      "explanationEs": "¡Muy buena memoria! Exactamente esos ejemplos están escritos arriba en la página del 19 de octubre."
    }
  ],
  "labChallenges": [
    {
      "id": "lab_lmn_150",
      "type": "build_angle",
      "titleDe": "Heft-Aufgabe #5: Zeichne ∡LMN = 150°",
      "titleEs": "Ejercicio #5 del cuaderno: Construye ∡LMN = 150°",
      "vertex": "M",
      "p1": "L",
      "p2": "N",
      "baseAngle": 0,
      "targetDeg": 150,
      "tolerance": 3,
      "hintDe": "Drehe den Strahl MN gegen den Uhrzeigersinn (↺) auf genau 150° (Stumpfer Winkel). Wie groß ist dann der Außenwinkel ∡NML?",
      "hintEs": "Gira el rayo MN en sentido antihorario (↺) hasta 150° (Stumpfer Winkel). El ángulo exterior ∡NML será 210°."
    },
    {
      "id": "lab_rst_190",
      "type": "build_angle",
      "titleDe": "Heft-Aufgabe #6: Zeichne ∡RST = 190°",
      "titleEs": "Ejercicio #6 del cuaderno: Construye ∡RST = 190°",
      "vertex": "S",
      "p1": "R",
      "p2": "T",
      "baseAngle": 0,
      "targetDeg": 190,
      "tolerance": 3,
      "hintDe": "190° ist größer als ein gestreckter Winkel (180°)! Ziehe den Strahl ST leicht nach unten links auf 190° (Überstumpfer Winkel).",
      "hintEs": "¡190° es mayor que un ángulo extendido (180°)! Arrastra el rayo ST un poco más abajo de los 180° hasta 190° (Überstumpfer Winkel)."
    },
    {
      "id": "lab_dal_45",
      "type": "build_angle",
      "titleDe": "Heft (19. Okt): Zeichne ∡DAL = 45° (Spitzer Winkel)",
      "titleEs": "Cuaderno (19 oct): Construye ∡DAL = 45° (Spitzer Winkel)",
      "vertex": "A",
      "p1": "D",
      "p2": "L",
      "baseAngle": 0,
      "targetDeg": 45,
      "tolerance": 3,
      "hintDe": "Halbiere den rechten Winkel (90° : 2 = 45°). Der Gegenwinkel ∡LAD beträgt dann 315°.",
      "hintEs": "La mitad de un ángulo recto (90° : 2 = 45°). El ángulo exterior ∡LAD mide 315°."
    },
    {
      "id": "lab_ald_90",
      "type": "build_angle",
      "titleDe": "Heft (23. Okt #3): Zeichne ∡ALD = 90° (Rechter Winkel ⦜)",
      "titleEs": "Cuaderno (23 oct #3): Construye ∡ALD = 90° (Ángulo recto ⦜)",
      "vertex": "L",
      "p1": "A",
      "p2": "D",
      "baseAngle": 0,
      "targetDeg": 90,
      "tolerance": 2,
      "hintDe": "Stelle genau 90° ein, sodass die beiden Schenkel senkrecht (⊥) aufeinander stehen!",
      "hintEs": "Ajusta exactamente 90° para que ambos rayos queden perpendiculares (⊥)."
    },
    {
      "id": "lab_gestreckt_180",
      "type": "build_angle",
      "titleDe": "Winkel-Training: Zeichne einen gestreckten Winkel (180°)",
      "titleEs": "Entrenamiento: Construye un ángulo extendido (180°)",
      "vertex": "S",
      "p1": "A",
      "p2": "B",
      "baseAngle": 0,
      "targetDeg": 180,
      "tolerance": 2,
      "hintDe": "Ein gestreckter Winkel misst genau 180° und bildet eine durchgehende gerade Linie.",
      "hintEs": "Un ángulo extendido (gestreckter Winkel) mide 180° y forma una línea recta continua."
    },
    {
      "id": "lab_perp_slanted",
      "type": "build_angle",
      "titleDe": "Senkrechte Linie auf schräger Gerade (8. & 13. Okt)",
      "titleEs": "Línea perpendicular sobre recta inclinada (8 y 13 oct)",
      "vertex": "P",
      "p1": "G",
      "p2": "H",
      "baseAngle": 35,
      "targetDeg": 90,
      "tolerance": 3,
      "hintDe": "Die Startlinie ist um 35° gedreht! Nutze das Geodreieck (Drehen auf 35°), um einen exakten 90°-Winkel (rechten Winkel) zur schrägen Linie einzustellen.",
      "hintEs": "¡La línea base está inclinada a 35°! Ajusta el rayo para que el ángulo ENTRE las dos líneas sea exactamente 90°."
    }
  ],
  "quizQuestions": [
    {
      "id": "q1",
      "topicDe": "Die Linie (5. Okt)",
      "questionDe": "Welche Linie hat einen Anfangspunkt, aber KEINEN Endpunkt?",
      "questionEs": "¿Qué línea tiene un punto de inicio, pero NO tiene punto final?",
      "svgType": "ray_ab",
      "options": [
        {
          "textDe": "der Strahl (⟼ AB)",
          "textEs": "el rayo / semirrecta",
          "correct": true
        },
        {
          "textDe": "die Strecke (I—I AB)",
          "textEs": "el segmento",
          "correct": false
        },
        {
          "textDe": "die Gerade (⟷ AB)",
          "textEs": "la recta",
          "correct": false
        },
        {
          "textDe": "die geschlossene Kurve",
          "textEs": "la curva cerrada",
          "correct": false
        }
      ],
      "explanationDe": "Der Strahl (rayo) beginnt in einem Punkt (Querstrich) und geht auf der anderen Seite unendlich weiter (Pfeil).",
      "explanationEs": "El rayo (der Strahl) comienza en un punto (tope) y continúa infinitamente por el otro extremo (flecha)."
    },
    {
      "id": "q2",
      "topicDe": "Die Linie (5. Okt)",
      "questionDe": "Wie nennt man eine gerade Linie, die einen Anfangspunkt UND einen Endpunkt hat (messbare Länge)?",
      "questionEs": "¿Cómo se llama en alemán una línea recta que tiene punto de inicio Y punto final (longitud medible)?",
      "svgType": "segment_lm",
      "options": [
        {
          "textDe": "die Strecke (I—I LM)",
          "textEs": "el segmento",
          "correct": true
        },
        {
          "textDe": "die Gerade (⟷ LM)",
          "textEs": "la recta",
          "correct": false
        },
        {
          "textDe": "der Strahl (⟼ LM)",
          "textEs": "el rayo",
          "correct": false
        },
        {
          "textDe": "die Sekante",
          "textEs": "la secante",
          "correct": false
        }
      ],
      "explanationDe": "Die Strecke (el segmento) wird von zwei Punkten begrenzt (I—I LM) und kann mit dem Geodreieck gemessen werden.",
      "explanationEs": "Die Strecke (el segmento) está limitado por dos puntos (I—I LM) y se puede medir."
    },
    {
      "id": "q3",
      "topicDe": "Die Linie · Bonus (5. & 13. Okt)",
      "questionDe": "★ Bonus aus dem Heft: Ein Strahl beginnt beim Punkt B und geht durch den Punkt A unendlich weiter. Wie schreibt man sein Symbol richtig?",
      "questionEs": "★ Bonus del cuaderno: Un rayo empieza en el punto B y pasa por el punto A hacia el infinito. ¿Cómo se escribe su símbolo?",
      "svgType": "ray_ba_left",
      "options": [
        {
          "textDe": "⟼ BA",
          "textEs": "⟼ BA",
          "correct": true
        },
        {
          "textDe": "⟼ AB",
          "textEs": "⟼ AB",
          "correct": false
        },
        {
          "textDe": "I—I BA",
          "textEs": "I—I BA",
          "correct": false
        },
        {
          "textDe": "⟷ AB",
          "textEs": "⟷ AB",
          "correct": false
        }
      ],
      "explanationDe": "Im Symbol ⟼ steht der Pfeil immer nach rechts, aber der ERSTE Buchstabe muss immer der Startpunkt sein → ⟼ BA.",
      "explanationEs": "En el símbolo ⟼ la flecha siempre apunta a la derecha, pero la PRIMERA letra debe ser siempre el punto de inicio → ⟼ BA."
    },
    {
      "id": "q4",
      "topicDe": "Lage zum Boden (5. Okt)",
      "questionDe": "Wie heißt eine Linie auf Deutsch, die wie der Horizont parallel zum Boden verläuft?",
      "questionEs": "¿Cómo se dice en alemán una línea que va como el horizonte (horizontal respecto al suelo)?",
      "svgType": "horizon_line",
      "options": [
        {
          "textDe": "waagerecht (horizontal)",
          "textEs": "horizontal",
          "correct": true
        },
        {
          "textDe": "senkrecht (vertikal)",
          "textEs": "vertical",
          "correct": false
        },
        {
          "textDe": "schräg",
          "textEs": "oblicua",
          "correct": false
        },
        {
          "textDe": "gekrümmt / Spirale",
          "textEs": "curva / espiral",
          "correct": false
        }
      ],
      "explanationDe": "Waagerecht (oder horizontal) bedeutet parallel zum Boden/Horizont. Senkrecht bedeutet vertikal (90° zum Boden), schräg bedeutet geneigt.",
      "explanationEs": "Waagerecht (u horizontal) significa paralelo al suelo/horizonte."
    },
    {
      "id": "q5",
      "topicDe": "Beziehung zwischen Linien (6. Okt)",
      "questionDe": "Zwei Geraden schneiden sich überhaupt NICHT und haben überall denselben Abstand. Wie heißen sie?",
      "questionEs": "Dos rectas NO se intersecan nunca y mantienen siempre la misma distancia. ¿Cómo se llaman?",
      "svgType": "parallel_lines",
      "options": [
        {
          "textDe": "Parallelen (parallele Linien, g ∥ h)",
          "textEs": "Paralelas",
          "correct": true
        },
        {
          "textDe": "Sekanten (sich schneidende Linien)",
          "textEs": "Secantes",
          "correct": false
        },
        {
          "textDe": "Senkrechte Linien (g ⊥ h)",
          "textEs": "Líneas perpendiculares",
          "correct": false
        },
        {
          "textDe": "Strahlen",
          "textEs": "Rayos",
          "correct": false
        }
      ],
      "explanationDe": "Wenn zwei Linien sich nie schneiden, heißen sie Parallelen (g ∥ h).",
      "explanationEs": "Cuando dos líneas no se intersecan nunca, se llaman Parallelen (paralelas, g ∥ h)."
    },
    {
      "id": "q6",
      "topicDe": "Beziehung zwischen Linien (6. & 8. Okt)",
      "questionDe": "Was sind „senkrechte Linien“ (g ⊥ h) laut dem Schema im Heft?",
      "questionEs": "¿Qué son las «senkrechte Linien» (g ⊥ h) según el esquema del cuaderno?",
      "svgType": "perp_lines",
      "options": [
        {
          "textDe": "Eine besondere Art von Sekanten, die sich im rechten Winkel (90°) schneiden",
          "textEs": "Un tipo especial de secantes que se cortan en ángulo recto (90°)",
          "correct": true
        },
        {
          "textDe": "Linien, die sich niemals berühren",
          "textEs": "Líneas que nunca se tocan",
          "correct": false
        },
        {
          "textDe": "Linien, die einen Winkel von 45° bilden",
          "textEs": "Líneas que forman un ángulo de 45°",
          "correct": false
        },
        {
          "textDe": "Geschlossene Kurven mit Innenbereich",
          "textEs": "Curvas cerradas con región interior",
          "correct": false
        }
      ],
      "explanationDe": "Senkrechte Linien (perpendiculares) sind besondere Sekanten: Sie schneiden sich genau im 90°-Winkel (rechter Winkel).",
      "explanationEs": "Las líneas perpendiculares (senkrechte Linien) son secantes especiales que se intersecan formando exactamente 90°."
    },
    {
      "id": "q7",
      "topicDe": "Winkel Sortierung (19. Okt)",
      "questionDe": "Zu welcher Winkelart gehört ein Winkel von α = 135°?",
      "questionEs": "¿A qué tipo de ángulo pertenece un ángulo de α = 135°?",
      "svgType": "angle_135",
      "options": [
        {
          "textDe": "Stumpfer Winkel",
          "textEs": "Stumpfer Winkel",
          "correct": true
        },
        {
          "textDe": "Spitzer Winkel",
          "textEs": "Spitzer Winkel",
          "correct": false
        },
        {
          "textDe": "Überstumpfer Winkel",
          "textEs": "Überstumpfer Winkel",
          "correct": false
        },
        {
          "textDe": "Gestreckter Winkel",
          "textEs": "Gestreckter Winkel",
          "correct": false
        }
      ],
      "explanationDe": "135° liegt zwischen 91° und 179° → das ist ein Stumpfer Winkel (ángulo obtuso).",
      "explanationEs": "135° está entre 91° y 179° → es un Stumpfer Winkel (ángulo obtuso)."
    },
    {
      "id": "q8",
      "topicDe": "Winkel Sortierung (19. Okt)",
      "questionDe": "Wie heißt ein Winkel, der genau 180° misst, und wie heißt einer zwischen 181° und 359°?",
      "questionEs": "¿Cómo se llama en alemán un ángulo de exactamente 180°, y uno de entre 181° y 359°?",
      "svgType": "angle_180_240",
      "options": [
        {
          "textDe": "180° = Gestreckter Winkel · 181°–359° = Überstumpfer Winkel",
          "textEs": "180° = Extendido · 181°–359° = Überstumpfer (cóncavo/convexo)",
          "correct": true
        },
        {
          "textDe": "180° = Rechter Winkel · 181°–359° = Stumpfer Winkel",
          "textEs": "180° = Recto · 181°–359° = Obtuso",
          "correct": false
        },
        {
          "textDe": "180° = Voller Winkel · 181°–359° = Spitzer Winkel",
          "textEs": "180° = Completo · 181°–359° = Agudo",
          "correct": false
        },
        {
          "textDe": "180° = Nullwinkel · 181°–359° = Gestreckter Winkel",
          "textEs": "180° = Nulo · 181°–359° = Extendido",
          "correct": false
        }
      ],
      "explanationDe": "Genau 180° heißt Gestreckter Winkel; zwischen 181° und 359° heißt Überstumpfer Winkel; 360° ist der Volle Winkel.",
      "explanationEs": "Exactamente 180° es Gestreckter Winkel (extendido); entre 181° y 359° es Überstumpfer Winkel; y 360° es Voller Winkel."
    },
    {
      "id": "q9",
      "topicDe": "Winkel nennen & berechnen (21. & 23. Okt)",
      "questionDe": "Im Heft gilt: ∡LMN = 120°. Wie groß ist dann der umgekehrte Winkel ∡NML (gegen den Uhrzeigersinn außen herum)?",
      "questionEs": "En el cuaderno: ∡LMN = 120°. ¿Cuánto mide entonces el ángulo inverso ∡NML (dando la vuelta en sentido antihorario)?",
      "svgType": "pair_120_240",
      "options": [
        {
          "textDe": "∡NML = 240°",
          "textEs": "∡NML = 240°",
          "correct": true
        },
        {
          "textDe": "∡NML = 60°",
          "textEs": "∡NML = 60°",
          "correct": false
        },
        {
          "textDe": "∡NML = 120°",
          "textEs": "∡NML = 120°",
          "correct": false
        },
        {
          "textDe": "∡NML = 260°",
          "textEs": "∡NML = 260°",
          "correct": false
        }
      ],
      "explanationDe": "∡LMN und ∡NML ergeben zusammen immer einen vollen Winkel (360°). Also: 360° − 120° = 240°!",
      "explanationEs": "∡LMN y ∡NML suman siempre la vuelta completa (360°). Por lo tanto: 360° − 120° = 240°."
    },
    {
      "id": "q10",
      "topicDe": "Winkel nennen (19.–23. Okt)",
      "questionDe": "Welcher Punkt ist beim Winkel ∡CDF der Scheitelpunkt (vértice)?",
      "questionEs": "En el ángulo ∡CDF, ¿cuál letra corresponde al vértice (Scheitelpunkt)?",
      "svgType": "pair_80_280",
      "options": [
        {
          "textDe": "Der Punkt D",
          "textEs": "El punto D",
          "correct": true
        },
        {
          "textDe": "Der Punkt C",
          "textEs": "El punto C",
          "correct": false
        },
        {
          "textDe": "Der Punkt F",
          "textEs": "El punto F",
          "correct": false
        },
        {
          "textDe": "Die Strecke CF",
          "textEs": "El segmento CF",
          "correct": false
        }
      ],
      "explanationDe": "Beim Nennen eines Winkels mit drei Buchstaben (∡CDF) steht der Scheitelpunkt D IMMER in der Mitte!",
      "explanationEs": "Al nombrar un ángulo con tres letras (∡CDF), el vértice D va SIEMPRE en el medio."
    },
    {
      "id": "q11",
      "topicDe": "Winkel berechnen & sortieren (21. Okt - Aufgabe d)",
      "questionDe": "Gegeben ist der große Außenwinkel ∡LJI = 265°. Wie groß ist ∡IJL und zu welcher Winkelart gehört ∡IJL?",
      "questionEs": "Se da el ángulo grande exterior ∡LJI = 265°. ¿Cuánto mide ∡IJL y qué tipo de ángulo es ∡IJL?",
      "svgType": "pair_95_265",
      "options": [
        {
          "textDe": "∡IJL = 95° → Stumpfer Winkel",
          "textEs": "∡IJL = 95° → Stumpfer Winkel",
          "correct": true
        },
        {
          "textDe": "∡IJL = 95° → Rechter Winkel",
          "textEs": "∡IJL = 95° → Rechter Winkel",
          "correct": false
        },
        {
          "textDe": "∡IJL = 85° → Spitzer Winkel",
          "textEs": "∡IJL = 85° → Spitzer Winkel",
          "correct": false
        },
        {
          "textDe": "∡IJL = 105° → Stumpfer Winkel",
          "textEs": "∡IJL = 105° → Stumpfer Winkel",
          "correct": false
        }
      ],
      "explanationDe": "360° − 265° = 95°. Und Achtung: 95° liegt zwischen 91° und 179°, ist also ein Stumpfer Winkel (nicht rechter Winkel!).",
      "explanationEs": "360° − 265° = 95°. Y cuidado: 95° está entre 91° y 179°, por lo que es un Stumpfer Winkel (obtuso), ¡no recto!"
    },
    {
      "id": "q12",
      "topicDe": "Geodreieck-Falle (Winkel messen)",
      "questionDe": "Du misst mit dem Geodreieck einen spitzen Winkel (deutlich kleiner als 90°). Auf der Skala stehen an der Stelle die Zahlen 50 und 130. Welches Maß stimmt?",
      "questionEs": "Mides con el Geodreieck un ángulo claramente agudo (menor que 90°). En la escala aparecen los números 50 y 130 en ese rayo. ¿Cuál medida es la correcta?",
      "svgType": "angle_50_geodreieck",
      "options": [
        {
          "textDe": "50°",
          "textEs": "50°",
          "correct": true
        },
        {
          "textDe": "130°",
          "textEs": "130°",
          "correct": false
        },
        {
          "textDe": "80°",
          "textEs": "80°",
          "correct": false
        },
        {
          "textDe": "180°",
          "textEs": "180°",
          "correct": false
        }
      ],
      "explanationDe": "Wichtiger Trick für die Probe: Prüfe zuerst mit dem Auge, ob der Winkel spitz (< 90°) oder stumpf (> 90°) ist. Da er spitz ist, muss es 50° sein!",
      "explanationEs": "Truco clave para la prueba: mira primero si el ángulo es más cerrado que una esquina de 90° (spitz). Como es agudo, ¡tiene que ser 50° y no 130°!"
    }
  ],
  "extraExams": {
    "probe_a": {
      "id": "probe_a",
      "levelBadgeDe": "🟢 Niveau 1 · Basis",
      "levelColor": "easy",
      "titleDe": "🟢 Probe A — Niveau 1: Basis-Training (Wie im Heft)",
      "titleEs": "Prueba A — Nivel 1: Entrenamiento Base (Mismo nivel del cuaderno, ejercicios nuevos)",
      "descDe": "12 neue Aufgaben zum sicheren Einstieg: Linienarten (⟼ PQ, I—I QR, ⟷ RS), geschlossene Linien, Parallelen, Senkrechte und 360°-Winkelpaare.",
      "descEs": "12 ejercicios nuevos de nivel base: tipos de línea (⟼ PQ, I—I QR, ⟷ RS), líneas cerradas, paralelas, perpendiculares y pares de ángulos de 360°.",
      "questions": [
        {
          "id": "pa_1",
          "topicDe": "Linien & Symbole",
          "questionDe": "Betrachte in der Figur die rot markierte Linie von P über Q: Bei P ist ein Querstrich (Start), hinter Q geht ein Pfeil weiter. Wie heißt sie?",
          "questionEs": "Observa en la figura la línea marcada en rojo desde P pasando por Q: en P tiene tope de inicio y después de Q sigue con flecha. ¿Cómo se llama?",
          "svgSpec": {
            "type": "fig_pqrs",
            "highlight": "PQ"
          },
          "options": [
            {
              "textDe": "⟼ PQ — der Strahl",
              "textEs": "⟼ PQ — el rayo",
              "correct": true
            },
            {
              "textDe": "I—I PQ — die Strecke",
              "textEs": "I—I PQ — el segmento",
              "correct": false
            },
            {
              "textDe": "⟷ PQ — die Gerade",
              "textEs": "⟷ PQ — la recta",
              "correct": false
            },
            {
              "textDe": "⟼ QP — der Strahl",
              "textEs": "⟼ QP — el rayo",
              "correct": false
            }
          ],
          "explanationDe": "Bei P ist der Anfangspunkt (Querstrich) und hinter Q der Pfeil → der Strahl ⟼ PQ.",
          "explanationEs": "En P está el tope de inicio y tras Q la flecha → es el rayo (der Strahl) ⟼ PQ."
        },
        {
          "id": "pa_2",
          "topicDe": "Linien & Symbole",
          "questionDe": "In derselben Figur hat die rot markierte Linie zwischen Q und R an beiden Enden einen Begrenzungsstrich. Wie schreibt man sie?",
          "questionEs": "En la misma figura, la línea marcada en rojo entre Q y R tiene tope en ambos extremos. ¿Cómo se escribe?",
          "svgSpec": {
            "type": "fig_pqrs",
            "highlight": "QR"
          },
          "options": [
            {
              "textDe": "I—I QR — die Strecke",
              "textEs": "El segmento QR",
              "correct": true
            },
            {
              "textDe": "⟷ QR — die Gerade",
              "textEs": "La recta QR",
              "correct": false
            },
            {
              "textDe": "⟼ QR — der Strahl",
              "textEs": "El rayo QR",
              "correct": false
            },
            {
              "textDe": "die Kurve QR",
              "textEs": "La curva QR",
              "correct": false
            }
          ],
          "explanationDe": "Anfangspunkt Q und Endpunkt R → die Strecke (I—I QR).",
          "explanationEs": "Punto inicial Q y punto final R → el segmento (die Strecke I—I QR)."
        },
        {
          "id": "pa_3",
          "topicDe": "Linien & Symbole",
          "questionDe": "Die rot markierte Linie durch R und S hat an beiden Enden einen Pfeil. Wie heißt sie auf Deutsch?",
          "questionEs": "La línea marcada en rojo que pasa por R y S tiene flecha en ambos extremos. ¿Cómo se llama en alemán?",
          "svgSpec": {
            "type": "fig_pqrs",
            "highlight": "RS"
          },
          "options": [
            {
              "textDe": "⟷ RS — die Gerade",
              "textEs": "⟷ RS — la recta",
              "correct": true
            },
            {
              "textDe": "⟼ RS — der Strahl",
              "textEs": "⟼ RS — el rayo",
              "correct": false
            },
            {
              "textDe": "I—I RS — die Strecke",
              "textEs": "I—I RS — el segmento",
              "correct": false
            },
            {
              "textDe": "⟼ SR — der Strahl",
              "textEs": "⟼ SR — el rayo",
              "correct": false
            }
          ],
          "explanationDe": "Zwei Pfeile = kein Anfang und kein Ende → die Gerade (⟷ RS).",
          "explanationEs": "Dos flechas = sin principio ni fin → die Gerade (la recta RS)."
        },
        {
          "id": "pa_4",
          "topicDe": "Geschlossene Linie",
          "questionDe": "Schau dir die geschlossene Linie mit den Punkten X, Y und Z an. Wo liegen X, Y und Z?",
          "questionEs": "Mira la línea cerrada con los puntos X, Y y Z. ¿Dónde están ubicados X, Y y Z?",
          "svgSpec": {
            "type": "closed_xyz"
          },
          "options": [
            {
              "textDe": "X im Innenbereich · Y auf dem Rand (Grenze) · Z im Außenbereich",
              "textEs": "X en región interior · Y en la frontera · Z en región exterior",
              "correct": true
            },
            {
              "textDe": "X im Außenbereich · Y im Innenbereich · Z auf dem Rand",
              "textEs": "X exterior · Y interior · Z en la frontera",
              "correct": false
            },
            {
              "textDe": "Alle drei Punkte liegen im Innenbereich",
              "textEs": "Los tres puntos están en el interior",
              "correct": false
            },
            {
              "textDe": "X ist der Scheitelpunkt und Z ist der Schenkel",
              "textEs": "X es el vértice y Z es el lado",
              "correct": false
            }
          ],
          "explanationDe": "X liegt drinnen (Innenbereich), Y genau auf der Linie (Rand/Grenze) und Z draußen (Außenbereich).",
          "explanationEs": "X está adentro (Innenbereich), Y sobre la línea (Rand/Grenze = frontera) y Z afuera (Außenbereich)."
        },
        {
          "id": "pa_5",
          "topicDe": "Lage zum Boden",
          "questionDe": "Der Fahnenmast TU steht im 90°-Winkel aufrecht auf dem Boden. Welche Lage zum Boden hat die Strecke TU?",
          "questionEs": "El mástil TU está parado formando 90° con el suelo. ¿Qué posición respecto al suelo tiene el segmento TU?",
          "svgSpec": {
            "type": "flagpole_tu"
          },
          "options": [
            {
              "textDe": "senkrecht / vertikal zum Boden",
              "textEs": "vertical (perpendicular al suelo)",
              "correct": true
            },
            {
              "textDe": "waagerecht / horizontal zum Boden",
              "textEs": "horizontal respecto al suelo",
              "correct": false
            },
            {
              "textDe": "schräg zum Boden",
              "textEs": "oblicua respecto al suelo",
              "correct": false
            },
            {
              "textDe": "gekrümmt (Spirale)",
              "textEs": "curva (espiral)",
              "correct": false
            }
          ],
          "explanationDe": "Aufrecht im 90°-Winkel zum Boden heißt auf Deutsch: senkrecht (oder vertikal).",
          "explanationEs": "Derecho a 90° respecto al suelo se llama en alemán senkrecht (o vertikal)."
        },
        {
          "id": "pa_6",
          "topicDe": "Beziehung zwischen Linien",
          "questionDe": "Im Rechteck ABCD: Welche Beziehung haben die obere Seite AB und die untere Seite DC zueinander?",
          "questionEs": "En el rectángulo ABCD: ¿Qué relación tienen el lado superior AB y el lado inferior DC entre sí?",
          "svgSpec": {
            "type": "rect_abcd",
            "highlight": "parallel"
          },
          "options": [
            {
              "textDe": "Sie sind parallel zueinander (AB ∥ DC)",
              "textEs": "Son paralelos entre sí (AB ∥ DC)",
              "correct": true
            },
            {
              "textDe": "Sie sind senkrecht zueinander (AB ⊥ DC)",
              "textEs": "Son perpendiculares entre sí (AB ⊥ DC)",
              "correct": false
            },
            {
              "textDe": "Sie sind Sekanten mit Schnittpunkt B",
              "textEs": "Son secantes que se cortan en B",
              "correct": false
            },
            {
              "textDe": "Sie bilden einen spitzen Winkel",
              "textEs": "Forman un ángulo agudo",
              "correct": false
            }
          ],
          "explanationDe": "Gegenüberliegende Seiten im Rechteck haben immer denselben Abstand und schneiden sich nie → Parallelen (AB ∥ DC).",
          "explanationEs": "Los lados opuestos de un rectángulo mantienen la misma distancia y nunca se cortan → Parallelen (AB ∥ DC)."
        },
        {
          "id": "pa_7",
          "topicDe": "Beziehung zwischen Linien",
          "questionDe": "Im selben Rechteck ABCD: Welche Beziehung haben die linke Seite AD und die untere Seite DC bei Punkt D?",
          "questionEs": "En el mismo rectángulo ABCD: ¿Qué relación tienen el lado izquierdo AD y el lado inferior DC en el punto D?",
          "svgSpec": {
            "type": "rect_abcd",
            "highlight": "perp"
          },
          "options": [
            {
              "textDe": "Sie stehen senkrecht aufeinander (AD ⊥ DC, rechter Winkel 90°)",
              "textEs": "Son perpendiculares entre sí (AD ⊥ DC, ángulo recto 90°)",
              "correct": true
            },
            {
              "textDe": "Sie sind parallel zueinander (AD ∥ DC)",
              "textEs": "Son paralelos entre sí (AD ∥ DC)",
              "correct": false
            },
            {
              "textDe": "Sie berühren sich nicht",
              "textEs": "No se tocan",
              "correct": false
            },
            {
              "textDe": "Sie bilden einen stumpfen Winkel von 120°",
              "textEs": "Forman un ángulo obtuso de 120°",
              "correct": false
            }
          ],
          "explanationDe": "Im Punkt D treffen sich AD und DC im rechten Winkel (90° ⦜) → senkrechte Linien (AD ⊥ DC).",
          "explanationEs": "En el punto D se cortan AD y DC en ángulo recto (90° ⦜) → senkrechte Linien (AD ⊥ DC)."
        },
        {
          "id": "pa_8",
          "topicDe": "Winkel 360° & Sortierung",
          "questionDe": "Gegeben ist der Winkel ∡PQR = 70°. Wie groß ist der Außenwinkel ∡RQP und welche Winkelart ist ∡PQR?",
          "questionEs": "Se da el ángulo ∡PQR = 70°. ¿Cuánto mide el ángulo exterior ∡RQP y qué tipo de ángulo es ∡PQR?",
          "svgSpec": {
            "type": "angle_pair",
            "vertex": "Q",
            "p1": "P",
            "p2": "R",
            "d1": 70,
            "d2": 290,
            "given": 1
          },
          "options": [
            {
              "textDe": "∡RQP = 290° · Spitzer Winkel",
              "textEs": "∡RQP = 290° · Spitzer Winkel",
              "correct": true
            },
            {
              "textDe": "∡RQP = 110° · Stumpfer Winkel",
              "textEs": "∡RQP = 110° · Stumpfer Winkel",
              "correct": false
            },
            {
              "textDe": "∡RQP = 290° · Rechter Winkel",
              "textEs": "∡RQP = 290° · Rechter Winkel",
              "correct": false
            },
            {
              "textDe": "∡RQP = 270° · Überstumpfer Winkel",
              "textEs": "∡RQP = 270° · Überstumpfer Winkel",
              "correct": false
            }
          ],
          "explanationDe": "360° − 70° = 290°. Da 70° zwischen 1° und 89° liegt, ist ∡PQR ein Spitzer Winkel!",
          "explanationEs": "360° − 70° = 290°. Como 70° está entre 1° y 89°, ¡∡PQR es un Spitzer Winkel!"
        },
        {
          "id": "pa_9",
          "topicDe": "Winkel 360° & Sortierung",
          "questionDe": "Gegeben ist ∡XYZ = 140°. Wie groß ist der Gegenwinkel ∡ZYX und wie heißt die Winkelart von ∡XYZ?",
          "questionEs": "Se da ∡XYZ = 140°. ¿Cuánto mide el ángulo inverso ∡ZYX y cómo se clasifica ∡XYZ?",
          "svgSpec": {
            "type": "angle_pair",
            "vertex": "Y",
            "p1": "X",
            "p2": "Z",
            "d1": 140,
            "d2": 220,
            "given": 1
          },
          "options": [
            {
              "textDe": "∡ZYX = 220° · Stumpfer Winkel",
              "textEs": "∡ZYX = 220° · Stumpfer Winkel",
              "correct": true
            },
            {
              "textDe": "∡ZYX = 40° · Spitzer Winkel",
              "textEs": "∡ZYX = 40° · Spitzer Winkel",
              "correct": false
            },
            {
              "textDe": "∡ZYX = 220° · Überstumpfer Winkel",
              "textEs": "∡ZYX = 220° · Überstumpfer Winkel",
              "correct": false
            },
            {
              "textDe": "∡ZYX = 240° · Gestreckter Winkel",
              "textEs": "∡ZYX = 240° · Gestreckter Winkel",
              "correct": false
            }
          ],
          "explanationDe": "360° − 140° = 220°. Und 140° liegt zwischen 91° und 179° → Stumpfer Winkel.",
          "explanationEs": "360° − 140° = 220°. Y 140° está entre 91° y 179° → Stumpfer Winkel (obtuso)."
        },
        {
          "id": "pa_10",
          "topicDe": "Scheitelpunkt & Rechter Winkel",
          "questionDe": "Beim Winkel ∡KLM = 90°: Welcher Buchstabe ist der Scheitelpunkt und wie groß ist der Außenwinkel ∡MLK?",
          "questionEs": "En el ángulo ∡KLM = 90°: ¿Cuál letra es el vértice (Scheitelpunkt) y cuánto mide el ángulo exterior ∡MLK?",
          "svgSpec": {
            "type": "angle_pair",
            "vertex": "L",
            "p1": "K",
            "p2": "M",
            "d1": 90,
            "d2": 270,
            "given": 1
          },
          "options": [
            {
              "textDe": "Scheitelpunkt L · ∡MLK = 270°",
              "textEs": "Vértice L · ∡MLK = 270°",
              "correct": true
            },
            {
              "textDe": "Scheitelpunkt K · ∡MLK = 90°",
              "textEs": "Vértice K · ∡MLK = 90°",
              "correct": false
            },
            {
              "textDe": "Scheitelpunkt M · ∡MLK = 180°",
              "textEs": "Vértice M · ∡MLK = 180°",
              "correct": false
            },
            {
              "textDe": "Scheitelpunkt L · ∡MLK = 190°",
              "textEs": "Vértice L · ∡MLK = 190°",
              "correct": false
            }
          ],
          "explanationDe": "Bei ∡KLM steht L in der Mitte (Scheitelpunkt). Und 360° − 90° = 270°!",
          "explanationEs": "En ∡KLM la letra L va al medio (vértice). Y 360° − 90° = 270°."
        },
        {
          "id": "pa_11",
          "topicDe": "Winkel Sortierung",
          "questionDe": "Schau dir den Winkel ∡DEF = 215° an. Wie heißt diese Winkelart auf Deutsch?",
          "questionEs": "Observa el ángulo ∡DEF = 215°. ¿Cómo se llama este tipo de ángulo en alemán?",
          "svgSpec": {
            "type": "angle_pair",
            "vertex": "E",
            "p1": "D",
            "p2": "F",
            "d1": 215,
            "d2": 145,
            "given": 1
          },
          "options": [
            {
              "textDe": "Überstumpfer Winkel",
              "textEs": "Überstumpfer Winkel",
              "correct": true
            },
            {
              "textDe": "Stumpfer Winkel",
              "textEs": "Stumpfer Winkel",
              "correct": false
            },
            {
              "textDe": "Gestreckter Winkel",
              "textEs": "Gestreckter Winkel",
              "correct": false
            },
            {
              "textDe": "Voller Winkel",
              "textEs": "Voller Winkel",
              "correct": false
            }
          ],
          "explanationDe": "Alle Winkel zwischen 181° und 359° heißen Überstumpfer Winkel!",
          "explanationEs": "Todos los ángulos entre 181° y 359° se llaman Überstumpfer Winkel."
        },
        {
          "id": "pa_12",
          "topicDe": "Besondere Winkel (0° & 360°)",
          "questionDe": "Wie heißen der Winkel von genau 0° und der Winkel einer kompletten Drehung von 360°?",
          "questionEs": "¿Cómo se llaman en alemán el ángulo de exactamente 0° y el ángulo de una vuelta completa de 360°?",
          "svgSpec": {
            "type": "angle_0_360"
          },
          "options": [
            {
              "textDe": "0° = Nullwinkel (0-Winkel) · 360° = Voller Winkel (Vollwinkel)",
              "textEs": "0° = Nullwinkel · 360° = Voller Winkel",
              "correct": true
            },
            {
              "textDe": "0° = Spitzer Winkel · 360° = Gestreckter Winkel",
              "textEs": "0° = Agudo · 360° = Extendido",
              "correct": false
            },
            {
              "textDe": "0° = Rechter Winkel · 360° = Überstumpfer Winkel",
              "textEs": "0° = Recto · 360° = Mayor de 180°",
              "correct": false
            },
            {
              "textDe": "0° = Kleiner Winkel · 360° = Großer Winkel",
              "textEs": "0° = Ángulo pequeño · 360° = Ángulo grande",
              "correct": false
            }
          ],
          "explanationDe": "Genau wie im Schema vom 19. Oktober: 0° ist der Nullwinkel (0-Winkel) und 360° ist der Volle Winkel!",
          "explanationEs": "Exactamente como en el esquema del 19 de octubre: 0° es Nullwinkel y 360° es Voller Winkel."
        }
      ]
    },
    "probe_b": {
      "id": "probe_b",
      "levelBadgeDe": "🟡 Niveau 2 · Mittelschwer & Fallen",
      "levelColor": "medium",
      "titleDe": "🟡 Probe B — Niveau 2: Mittelschwer & Prüfungsfallen",
      "titleEs": "Prueba B — Nivel 2: Intermedio con Trampas Clásicas de Prueba",
      "descDe": "12 mittelschwere Aufgaben mit den typischen Prüfungsfallen: Strahl nach links (⟼ TK), schräge Senkrechte, 89°/91°/181°-Grenzen und Geodreieck-Doppelskala.",
      "descEs": "12 ejercicios intermedios con las trampas clásicas: rayo hacia la izquierda (⟼ TK), perpendiculares inclinadas, límites 89°/91°/181° y doble escala del Geodreieck.",
      "questions": [
        {
          "id": "pb_1",
          "topicDe": "★ Bonus-Falle: Strahl nennen",
          "questionDe": "Achtung Falle! Der Strahl beginnt beim Punkt T (rechts oben mit Querstrich) und geht schräg nach links unten durch Punkt K weiter. Wie MUSS man sein Symbol schreiben?",
          "questionEs": "¡Cuidado con la trampa! El rayo empieza en el punto T (arriba a la derecha con tope) y baja pasando por K con flecha. ¿Cómo DEBE escribirse su símbolo?",
          "svgSpec": {
            "type": "ray_tk_trap"
          },
          "options": [
            {
              "textDe": "⟼ TK",
              "textEs": "⟼ TK",
              "correct": true
            },
            {
              "textDe": "⟼ KT",
              "textEs": "⟼ KT",
              "correct": false
            },
            {
              "textDe": "I—I TK",
              "textEs": "I—I TK",
              "correct": false
            },
            {
              "textDe": "⟷ KT",
              "textEs": "⟷ KT",
              "correct": false
            }
          ],
          "explanationDe": "Merke dir den ★ Bonus aus dem Heft: Egal wohin der Pfeil in der Zeichnung zeigt, im Symbol ⟼ steht IMMER der Startpunkt (T) an erster Stelle → ⟼ TK!",
          "explanationEs": "Recuerda el ★ Bonus del cuaderno: sin importar hacia dónde apunte la flecha en el dibujo, en el símbolo ⟼ SIEMPRE va primero el punto de inicio (T) → ⟼ TK."
        },
        {
          "id": "pb_2",
          "topicDe": "Die Linie (3 Eigenschaften)",
          "questionDe": "Betrachte die Linie durch E und F mit zwei Pfeilen, die geneigt zum Boden verläuft. Welche 3 Begriffe beschreiben sie komplett richtig?",
          "questionEs": "Observa la línea que pasa por E y F con dos flechas, inclinada respecto al suelo. ¿Cuáles 3 conceptos la describen correctamente?",
          "svgSpec": {
            "type": "slanted_gerade_ef"
          },
          "options": [
            {
              "textDe": "offene Linie · die Gerade (⟷ EF) · schräg zum Boden",
              "textEs": "línea abierta · la recta (⟷ EF) · oblicua al suelo",
              "correct": true
            },
            {
              "textDe": "offene Linie · der Strahl (⟼ EF) · schräg zum Boden",
              "textEs": "línea abierta · el rayo (⟼ EF) · oblicua al suelo",
              "correct": false
            },
            {
              "textDe": "geschlossene Linie · die Gerade · waagerecht",
              "textEs": "línea cerrada · la recta · horizontal",
              "correct": false
            },
            {
              "textDe": "offene Linie · die Strecke (I—I EF) · senkrecht",
              "textEs": "línea abierta · el segmento · vertical",
              "correct": false
            }
          ],
          "explanationDe": "Zwei Pfeile = die Gerade (⟷ EF); Enden treffen sich nicht = offene Linie; geneigt zum Boden = schräg!",
          "explanationEs": "Dos flechas = la recta (die Gerade); extremos no se unen = abierta (offene Linie); inclinada = oblicua (schräg)."
        },
        {
          "id": "pb_3",
          "topicDe": "Senkrechte auf schräger Gerade",
          "questionDe": "Auf der schrägen Gerade h kreuzen zwei Linien: Linie m zeigt senkrecht zum unteren Blattrand (60° zu h), Linie n bildet genau 90° (⦜) mit der schrägen Gerade h. Welche Aussage stimmt?",
          "questionEs": "Sobre la recta inclinada h cruzan dos líneas: la línea m va vertical al borde de la hoja (60° con h), y la línea n forma 90° (⦜) con la recta inclinada h. ¿Qué afirmación es correcta?",
          "svgSpec": {
            "type": "trap_slanted_perp"
          },
          "options": [
            {
              "textDe": "Nur Linie n ist senkrecht zu h (n ⊥ h)",
              "textEs": "Solo la línea n es perpendicular a h (n ⊥ h)",
              "correct": true
            },
            {
              "textDe": "Nur Linie m ist senkrecht zu h (m ⊥ h)",
              "textEs": "Solo la línea m es perpendicular a h (m ⊥ h)",
              "correct": false
            },
            {
              "textDe": "Beide Linien m und n sind senkrecht zu h",
              "textEs": "Ambas líneas m y n son perpendiculares a h",
              "correct": false
            },
            {
              "textDe": "Linie m und Linie n sind parallel (m ∥ n)",
              "textEs": "Las líneas m y n son paralelas (m ∥ n)",
              "correct": false
            }
          ],
          "explanationDe": "Senkrecht zu einer Gerade h bedeutet immer: 90°-Winkel zu DIESER Gerade h (also n ⊥ h). Linie m ist nur eine normale Sekante zu h!",
          "explanationEs": "Perpendicular a una recta h significa siempre formar 90° con ESA recta h (n ⊥ h). ¡La línea m es solo una secante común respecto a h!"
        },
        {
          "id": "pb_4",
          "topicDe": "89°-Falle (Spitz vs. Recht)",
          "questionDe": "Aufgepasst beim Rechnen! Gegeben ist der große Außenwinkel ∡CBA = 271°. Wie groß ist ∡ABC und zu welcher Winkelart gehört er?",
          "questionEs": "¡Cuidado al calcular! Se da el ángulo exterior grande ∡CBA = 271°. ¿Cuánto mide ∡ABC y a qué tipo de ángulo pertenece?",
          "svgSpec": {
            "type": "angle_pair",
            "vertex": "B",
            "p1": "A",
            "p2": "C",
            "d1": 89,
            "d2": 271,
            "given": 2
          },
          "options": [
            {
              "textDe": "∡ABC = 89° → Spitzer Winkel",
              "textEs": "∡ABC = 89° → Spitzer Winkel",
              "correct": true
            },
            {
              "textDe": "∡ABC = 89° → Rechter Winkel",
              "textEs": "∡ABC = 89° → Rechter Winkel",
              "correct": false
            },
            {
              "textDe": "∡ABC = 91° → Stumpfer Winkel",
              "textEs": "∡ABC = 91° → Stumpfer Winkel",
              "correct": false
            },
            {
              "textDe": "∡ABC = 99° → Stumpfer Winkel",
              "textEs": "∡ABC = 99° → Stumpfer Winkel",
              "correct": false
            }
          ],
          "explanationDe": "360° − 271° = 89°. Ein Rechter Winkel muss GENAU 90° haben. 89° gehört noch zu 1°–89° → Spitzer Winkel!",
          "explanationEs": "360° − 271° = 89°. Un ángulo recto debe medir EXACTAMENTE 90°. ¡89° sigue estando entre 1° y 89°, así que es Spitzer Winkel!"
        },
        {
          "id": "pb_5",
          "topicDe": "91°-Falle (Recht vs. Stumpf)",
          "questionDe": "Gegeben ist der Außenwinkel ∡NML = 269°. Berechne ∡LMN und bestimme die genaue Sortierung von ∡LMN:",
          "questionEs": "Se da el ángulo exterior ∡NML = 269°. Calcula ∡LMN y determina su clasificación exacta:",
          "svgSpec": {
            "type": "angle_pair",
            "vertex": "M",
            "p1": "L",
            "p2": "N",
            "d1": 91,
            "d2": 269,
            "given": 2
          },
          "options": [
            {
              "textDe": "∡LMN = 91° → Stumpfer Winkel",
              "textEs": "∡LMN = 91° → Stumpfer Winkel",
              "correct": true
            },
            {
              "textDe": "∡LMN = 91° → Rechter Winkel",
              "textEs": "∡LMN = 91° → Rechter Winkel",
              "correct": false
            },
            {
              "textDe": "∡LMN = 89° → Spitzer Winkel",
              "textEs": "∡LMN = 89° → Spitzer Winkel",
              "correct": false
            },
            {
              "textDe": "∡LMN = 101° → Überstumpfer Winkel",
              "textEs": "∡LMN = 101° → Überstumpfer Winkel",
              "correct": false
            }
          ],
          "explanationDe": "360° − 269° = 91°. Ab 91° bis 179° heißt der Winkel Stumpfer Winkel!",
          "explanationEs": "360° − 269° = 91°. Desde 91° hasta 179° el ángulo se llama Stumpfer Winkel (obtuso)."
        },
        {
          "id": "pb_6",
          "topicDe": "181°-Falle (Gestreckt vs. Überstumpf)",
          "questionDe": "Gegeben ist ∡PQR = 179° (Stumpfer Winkel). Wie groß ist der Gegenwinkel ∡RQP und wie wird ∡RQP sortiert?",
          "questionEs": "Se da ∡PQR = 179° (obtuso). ¿Cuánto mide el ángulo conjugado ∡RQP y cómo se clasifica ∡RQP?",
          "svgSpec": {
            "type": "angle_pair",
            "vertex": "Q",
            "p1": "P",
            "p2": "R",
            "d1": 179,
            "d2": 181,
            "given": 1
          },
          "options": [
            {
              "textDe": "∡RQP = 181° → Überstumpfer Winkel",
              "textEs": "∡RQP = 181° → Überstumpfer Winkel",
              "correct": true
            },
            {
              "textDe": "∡RQP = 181° → Gestreckter Winkel",
              "textEs": "∡RQP = 181° → Gestreckter Winkel",
              "correct": false
            },
            {
              "textDe": "∡RQP = 180° → Gestreckter Winkel",
              "textEs": "∡RQP = 180° → Gestreckter Winkel",
              "correct": false
            },
            {
              "textDe": "∡RQP = 181° → Stumpfer Winkel",
              "textEs": "∡RQP = 181° → Stumpfer Winkel",
              "correct": false
            }
          ],
          "explanationDe": "360° − 179° = 181°. Da 181° größer als 180° ist, ist es bereits ein Überstumpfer Winkel!",
          "explanationEs": "360° − 179° = 181°. Como 181° ya pasa de 180°, ¡es un Überstumpfer Winkel!"
        },
        {
          "id": "pb_7",
          "topicDe": "Richtungs-Falle (Gegen den Uhrzeigersinn ↺)",
          "questionDe": "Wie bei Übung #3 im Heft (21. Okt): Von Strahl AB gegen den Uhrzeigersinn (↺ oben herum) bis AC sind es ∡BAC = 210°. Wie groß ist ∡CAB (unten herum ↺) und welche Winkelart ist ∡CAB?",
          "questionEs": "Como en el ejercicio #3 del cuaderno (21 oct): Del rayo AB en sentido antihorario (↺ por arriba) hasta AC hay ∡BAC = 210°. ¿Cuánto mide ∡CAB (por abajo ↺) y qué tipo de ángulo es ∡CAB?",
          "svgSpec": {
            "type": "angle_pair",
            "vertex": "A",
            "p1": "B",
            "p2": "C",
            "d1": 210,
            "d2": 150,
            "given": 1
          },
          "options": [
            {
              "textDe": "∡CAB = 150° → Stumpfer Winkel",
              "textEs": "∡CAB = 150° → Ángulo obtuso (Stumpfer Winkel)",
              "correct": true
            },
            {
              "textDe": "∡CAB = 150° → Überstumpfer Winkel",
              "textEs": "∡CAB = 150° → Mayor de 180°",
              "correct": false
            },
            {
              "textDe": "∡CAB = 50° → Spitzer Winkel",
              "textEs": "∡CAB = 50° → Ángulo agudo",
              "correct": false
            },
            {
              "textDe": "∡CAB = 210° → Überstumpfer Winkel",
              "textEs": "∡CAB = 210° → Mayor de 180°",
              "correct": false
            }
          ],
          "explanationDe": "360° − 210° = 150°. Und 150° liegt zwischen 91° und 179°, also ist ∡CAB ein Stumpfer Winkel!",
          "explanationEs": "360° − 210° = 150°. Y 150° está entre 91° y 179°, por lo tanto ∡CAB es un Stumpfer Winkel."
        },
        {
          "id": "pb_8",
          "topicDe": "Geodreieck-Skala (Stumpfer Winkel)",
          "questionDe": "Du misst den deutlich geöffneten Winkel ∡MNO (größer als 90°!). Der Strahl NO geht auf dem Geodreieck durch die Zahlen 65° und 115°. Welches Maß hat ∡MNO und wie groß ist ∡ONM?",
          "questionEs": "Mides el ángulo claramente abierto ∡MNO (¡mayor que 90°!). El rayo NO pasa en el Geodreieck por los números 65° y 115°. ¿Cuánto mide ∡MNO y cuánto mide ∡ONM?",
          "svgSpec": {
            "type": "geodreieck_115_mno"
          },
          "options": [
            {
              "textDe": "∡MNO = 115° (Stumpfer Winkel) · Außenwinkel ∡ONM = 245°",
              "textEs": "∡MNO = 115° (obtuso) · ángulo exterior ∡ONM = 245°",
              "correct": true
            },
            {
              "textDe": "∡MNO = 65° (Spitzer Winkel) · Außenwinkel ∡ONM = 295°",
              "textEs": "∡MNO = 65° (agudo) · ángulo exterior ∡ONM = 295°",
              "correct": false
            },
            {
              "textDe": "∡MNO = 115° · Außenwinkel ∡ONM = 65°",
              "textEs": "∡MNO = 115° · ángulo exterior ∡ONM = 65°",
              "correct": false
            },
            {
              "textDe": "∡MNO = 180° · Außenwinkel ∡ONM = 180°",
              "textEs": "∡MNO = 180° · ángulo exterior ∡ONM = 180°",
              "correct": false
            }
          ],
          "explanationDe": "Da der Winkel weiter geöffnet ist als die 90°-Linie (stumpf), musst du die Zahl über 90° ablesen: 115°! Und 360° − 115° = 245°.",
          "explanationEs": "Como el ángulo es más abierto que la línea de 90° (obtuso), debes leer el número mayor que 90°: ¡115°! Y 360° − 115° = 245°."
        },
        {
          "id": "pb_9",
          "topicDe": "Figuren-Analyse (Trapez ABCD)",
          "questionDe": "Schau dir das Trapez ABCD an: Bei A und D sind rechte Winkel (90° ⦜), die Seite BC rechts ist schräg. Welche Aussage über die Seiten stimmt?",
          "questionEs": "Mira el trapecio ABCD: en A y D hay ángulos rectos (90° ⦜) y el lado derecho BC es inclinado. ¿Qué afirmación sobre sus lados es verdadera?",
          "svgSpec": {
            "type": "trapez_abcd"
          },
          "options": [
            {
              "textDe": "AB ∥ DC (parallel) und AD ⊥ AB (senkrecht)",
              "textEs": "AB ∥ DC (paralelos) y AD ⊥ AB (perpendiculares)",
              "correct": true
            },
            {
              "textDe": "AD ∥ BC (parallel) und AB ⊥ DC (senkrecht)",
              "textEs": "AD ∥ BC (paralelos) y AB ⊥ DC (perpendiculares)",
              "correct": false
            },
            {
              "textDe": "BC ⊥ AB (senkrecht bei B)",
              "textEs": "BC ⊥ AB (perpendiculares en B)",
              "correct": false
            },
            {
              "textDe": "Keine Seite ist parallel zu einer anderen",
              "textEs": "Ningún lado es paralelo a otro",
              "correct": false
            }
          ],
          "explanationDe": "Oben (DC) und unten (AB) laufen waagerecht im gleichen Abstand → AB ∥ DC. Links steht AD im 90°-Winkel auf AB → AD ⊥ AB.",
          "explanationEs": "Arriba (DC) y abajo (AB) son paralelos → AB ∥ DC. A la izquierda AD forma 90° con AB → AD ⊥ AB."
        },
        {
          "id": "pb_10",
          "topicDe": "Bestandteile eines Winkels",
          "questionDe": "Wie heißen beim Winkel ∡WXY der Scheitelpunkt und die beiden Schenkel (Strahlen) mit richtiger Symbol-Schreibweise?",
          "questionEs": "En el ángulo ∡WXY, ¿cuáles son el vértice (Scheitelpunkt) y los dos lados (Schenkel) escritos con el símbolo correcto de rayo?",
          "svgSpec": {
            "type": "angle_pair",
            "vertex": "X",
            "p1": "W",
            "p2": "Y",
            "d1": 65,
            "d2": 295,
            "given": 1
          },
          "options": [
            {
              "textDe": "Scheitelpunkt: X · Schenkel: ⟼ XW und ⟼ XY",
              "textEs": "Vértice: X · Lados: ⟼ XW y ⟼ XY",
              "correct": true
            },
            {
              "textDe": "Scheitelpunkt: W · Schenkel: ⟼ WX und ⟼ WY",
              "textEs": "Vértice: W · Lados: ⟼ WX y ⟼ WY",
              "correct": false
            },
            {
              "textDe": "Scheitelpunkt: X · Schenkel: ⟼ WX und ⟼ YX",
              "textEs": "Vértice: X · Lados: ⟼ WX y ⟼ YX",
              "correct": false
            },
            {
              "textDe": "Scheitelpunkt: Y · Schenkel: I—I XW und I—I XY",
              "textEs": "Vértice: Y · Lados: I—I XW y I—I XY",
              "correct": false
            }
          ],
          "explanationDe": "Beide Schenkel eines Winkels sind Strahlen, die im Scheitelpunkt X beginnen! Deshalb steht X bei beiden Symbolen zuerst: ⟼ XW und ⟼ XY.",
          "explanationEs": "¡Ambos lados de un ángulo son rayos que nacen en el vértice X! Por eso la letra X va primero en ambos símbolos: ⟼ XW y ⟼ XY."
        },
        {
          "id": "pb_11",
          "topicDe": "Fast voller Kreis (342°)",
          "questionDe": "Gegeben ist der große Winkel ∡FCJ = 342°. Wie groß ist der kleine Winkel ∡JCF und wie werden beide sortiert?",
          "questionEs": "Se da el ángulo grande ∡FCJ = 342°. ¿Cuánto mide el ángulo pequeño ∡JCF y cómo se clasifican ambos?",
          "svgSpec": {
            "type": "angle_pair",
            "vertex": "C",
            "p1": "F",
            "p2": "J",
            "d1": 342,
            "d2": 18,
            "given": 1
          },
          "options": [
            {
              "textDe": "∡JCF = 18° (Spitzer Winkel) · ∡FCJ = 342° (Überstumpfer Winkel)",
              "textEs": "∡JCF = 18° (agudo) · ∡FCJ = 342° (mayor de 180°)",
              "correct": true
            },
            {
              "textDe": "∡JCF = 28° (Spitzer Winkel) · ∡FCJ = 342° (Voller Winkel)",
              "textEs": "∡JCF = 28° (agudo) · ∡FCJ = 342° (completo)",
              "correct": false
            },
            {
              "textDe": "∡JCF = 18° (Nullwinkel) · ∡FCJ = 342° (Stumpfer Winkel)",
              "textEs": "∡JCF = 18° (nulo) · ∡FCJ = 342° (obtuso)",
              "correct": false
            },
            {
              "textDe": "∡JCF = 38° (Spitzer Winkel) · ∡FCJ = 342° (Überstumpfer Winkel)",
              "textEs": "∡JCF = 38° · ∡FCJ = 342°",
              "correct": false
            }
          ],
          "explanationDe": "360° − 342° = 18°. 18° ist ein Spitzer Winkel (1°–89°) und 342° ist ein Überstumpfer Winkel (181°–359°).",
          "explanationEs": "360° − 342° = 18°. 18° es Spitzer Winkel y 342° es Überstumpfer Winkel."
        },
        {
          "id": "pb_12",
          "topicDe": "Sekanten vs. Parallelen (Denkfrage)",
          "questionDe": "Zwei Geraden g (durch A, B) und h (durch C, D) laufen schräg aufeinander zu, berühren sich aber auf dem kurzen gezeichneten Stück noch nicht. Was sind g und h?",
          "questionEs": "Dos rectas g (por A, B) y h (por C, D) se van acercando entre sí, pero en el trozo dibujado aún no alcanzan a tocarse. ¿Qué son las rectas g y h?",
          "svgSpec": {
            "type": "converging_secants"
          },
          "options": [
            {
              "textDe": "Sekanten (sich schneidende Geraden)",
              "textEs": "Sekanten (rectas secantes)",
              "correct": true
            },
            {
              "textDe": "Parallelen (parallele Geraden)",
              "textEs": "Parallelen (rectas paralelas)",
              "correct": false
            },
            {
              "textDe": "Senkrechte Linien (g ⊥ h)",
              "textEs": "Senkrechte Linien (g ⊥ h)",
              "correct": false
            },
            {
              "textDe": "Geschlossene Strecken",
              "textEs": "Geschlossene Strecken",
              "correct": false
            }
          ],
          "explanationDe": "Super mitgedacht! Geraden haben kein Ende. Da der Abstand zwischen g und h immer kleiner wird, schneiden sie sich → Sekanten!",
          "explanationEs": "¡Muy bien pensado! Las rectas no tienen fin. Como la distancia entre g y h disminuye, al prolongarlas se intersecan → ¡son Sekanten!"
        }
      ]
    },
    "probe_c": {
      "id": "probe_c",
      "levelBadgeDe": "🔴 Niveau 3 · Experten (Note 7,0)",
      "levelColor": "hard",
      "titleDe": "🔴 Probe C — Niveau 3: Experten-Probe (Für die Note 7,0)",
      "titleEs": "Prueba C — Nivel 3: Prueba Experta (Desafíos para el 7.0)",
      "descDe": "12 anspruchsvolle Aufgaben für die Bestnote: Kombinierte Figuren, doppelte Senkrechte, geteilte 90°/180°/360°-Winkel, gedrehtes Geodreieck und Stadtplan-Logik.",
      "descEs": "12 desafíos avanzados para el 7.0: figuras combinadas, doble perpendicular, ángulos divididos de 90°/180°/360°, Geodreieck rotado y lógica de plano de calles.",
      "questions": [
        {
          "id": "pc_1",
          "topicDe": "Komplexe Figur (Alle Symbole)",
          "questionDe": "Betrachte die Figur mit den Punkten A, B, C, D: Zwischen A und B sind zwei Querstriche, von B über C geht ein Pfeil, und durch C und D gehen Pfeile an beiden Enden. Welche Liste stimmt?",
          "questionEs": "Observa la figura con los puntos A, B, C, D: entre A y B hay dos topes, de B pasando por C va una flecha, y por C y D hay flechas en ambos extremos. ¿Qué lista es correcta?",
          "svgSpec": {
            "type": "fig_abcd_expert"
          },
          "options": [
            {
              "textDe": "I—I AB (Strecke) · ⟼ BC (Strahl) · ⟷ CD (Gerade)",
              "textEs": "I—I AB (Segmento) · ⟼ BC (Rayo) · ⟷ CD (Recta)",
              "correct": true
            },
            {
              "textDe": "⟼ AB (Strahl) · I—I BC (Strecke) · ⟷ CD (Gerade)",
              "textEs": "⟼ AB (Rayo) · I—I BC (Segmento) · ⟷ CD (Recta)",
              "correct": false
            },
            {
              "textDe": "I—I AB (Strecke) · ⟼ CB (Strahl) · I—I CD (Strecke)",
              "textEs": "I—I AB (Segmento) · ⟼ CB (Rayo) · I—I CD (Segmento)",
              "correct": false
            },
            {
              "textDe": "⟷ AB (Gerade) · ⟼ BC (Strahl) · I—I CD (Strecke)",
              "textEs": "⟷ AB (Recta) · ⟼ BC (Rayo) · I—I CD (Segmento)",
              "correct": false
            }
          ],
          "explanationDe": "AB hat zwei Endpunkte → Strecke I—I AB. BC startet bei B mit Pfeil bei C → Strahl ⟼ BC. CD hat zwei Pfeile → Gerade ⟷ CD.",
          "explanationEs": "AB tiene dos topes → Strecke I—I AB. BC parte en B con flecha en C → Strahl ⟼ BC. CD tiene dos flechas → Gerade ⟷ CD."
        },
        {
          "id": "pc_2",
          "topicDe": "Doppelte Senkrechte (Denkaufgabe)",
          "questionDe": "Wie beim Leiter-Bild im Heft (13. Okt): Die Gerade a steht senkrecht auf g (a ⊥ g) und die Gerade b steht AUCH senkrecht auf derselben Gerade g (b ⊥ g). Welche Beziehung haben a und b zueinander?",
          "questionEs": "Como en el dibujo del cuaderno (13 oct): La recta a es perpendicular a g (a ⊥ g) y la recta b TAMBIÉN es perpendicular a la misma recta g (b ⊥ g). ¿Qué relación tienen a y b entre sí?",
          "svgSpec": {
            "type": "double_perp_abg"
          },
          "options": [
            {
              "textDe": "a und b sind parallel zueinander (a ∥ b)!",
              "textEs": "¡a y b son paralelas entre sí (a ∥ b)!",
              "correct": true
            },
            {
              "textDe": "a und b sind senkrecht zueinander (a ⊥ b)",
              "textEs": "a y b son perpendiculares entre sí (a ⊥ b)",
              "correct": false
            },
            {
              "textDe": "a und b schneiden sich im 45°-Winkel",
              "textEs": "a y b se cortan en un ángulo de 45°",
              "correct": false
            },
            {
              "textDe": "a und b sind Kurven",
              "textEs": "a y b son curvas",
              "correct": false
            }
          ],
          "explanationDe": "Genial! Zwei Geraden, die auf derselben Gerade g senkrecht (90°) stehen, laufen in genau dieselbe Richtung und schneiden sich nie → a ∥ b!",
          "explanationEs": "¡Brillante! Dos rectas que forman 90° con la misma recta g van exactamente en la misma dirección y nunca se cortan → ¡son paralelas (a ∥ b)!"
        },
        {
          "id": "pc_3",
          "topicDe": "Gestreckter Winkel teilen (180°)",
          "questionDe": "Die Punkte A, S und B liegen auf einer durchgehenden Gerade (Gestreckter Winkel ∡ASB = 180°). Der Strahl ⟼ SC teilt ihn so, dass ∡ASC = 55° ist. Wie groß ist ∡CSB und welche Winkelart ist ∡CSB?",
          "questionEs": "Los puntos A, S y B están sobre una línea recta (ángulo extendido ∡ASB = 180°). El rayo ⟼ SC lo divide de modo que ∡ASC = 55°. ¿Cuánto mide ∡CSB y qué tipo de ángulo es?",
          "svgSpec": {
            "type": "split_180_asbc"
          },
          "options": [
            {
              "textDe": "∡CSB = 125° → Stumpfer Winkel",
              "textEs": "∡CSB = 125° → Stumpfer Winkel",
              "correct": true
            },
            {
              "textDe": "∡CSB = 305° → Überstumpfer Winkel",
              "textEs": "∡CSB = 305° → Überstumpfer Winkel",
              "correct": false
            },
            {
              "textDe": "∡CSB = 35° → Spitzer Winkel",
              "textEs": "∡CSB = 35° → Spitzer Winkel",
              "correct": false
            },
            {
              "textDe": "∡CSB = 135° → Stumpfer Winkel",
              "textEs": "∡CSB = 135° → Stumpfer Winkel",
              "correct": false
            }
          ],
          "explanationDe": "Zusammen bilden ∡ASC und ∡CSB den gestreckten Winkel von 180°. Also: 180° − 55° = 125° (Stumpfer Winkel)!",
          "explanationEs": "Juntos ∡ASC y ∡CSB forman el ángulo extendido de 180°. Por lo tanto: 180° − 55° = 125° (Stumpfer Winkel)."
        },
        {
          "id": "pc_4",
          "topicDe": "Rechter Winkel teilen (90° & 360°)",
          "questionDe": "Der Winkel ∡KLM ist ein Rechter Winkel (90° ⦜). Ein Strahl ⟼ LN teilt ihn so, dass ∡KLN = 35° misst. Wie groß sind der zweite Teilwinkel ∡NLM und der große Außenwinkel ∡MLK?",
          "questionEs": "El ángulo ∡KLM es un ángulo recto (90° ⦜). Un rayo ⟼ LN lo divide de modo que ∡KLN = 35°. ¿Cuánto miden la otra parte ∡NLM y el ángulo exterior ∡MLK?",
          "svgSpec": {
            "type": "split_90_klmn"
          },
          "options": [
            {
              "textDe": "∡NLM = 55° und ∡MLK = 270°",
              "textEs": "∡NLM = 55° y ∡MLK = 270°",
              "correct": true
            },
            {
              "textDe": "∡NLM = 65° und ∡MLK = 270°",
              "textEs": "∡NLM = 65° y ∡MLK = 270°",
              "correct": false
            },
            {
              "textDe": "∡NLM = 55° und ∡MLK = 180°",
              "textEs": "∡NLM = 55° y ∡MLK = 180°",
              "correct": false
            },
            {
              "textDe": "∡NLM = 45° und ∡MLK = 325°",
              "textEs": "∡NLM = 45° y ∡MLK = 325°",
              "correct": false
            }
          ],
          "explanationDe": "Der rechte Winkel hat 90°: 90° − 35° = 55° für ∡NLM. Und außen herum um den rechten Winkel sind es 360° − 90° = 270° für ∡MLK!",
          "explanationEs": "El ángulo recto mide 90°: 90° − 35° = 55° para ∡NLM. Y por fuera del ángulo recto son 360° − 90° = 270° para ∡MLK."
        },
        {
          "id": "pc_5",
          "topicDe": "Gedrehte Messung am Geodreieck",
          "questionDe": "Der Scheitelpunkt B liegt auf der 0 des Geodreiecks, aber der 1. Schenkel BA zeigt auf 20° und der 2. Schenkel BC zeigt auf 130°. Wie groß ist der Winkel ∡ABC zwischen den beiden Schenkeln?",
          "questionEs": "El vértice B está en el 0 del Geodreieck, pero el 1er rayo BA apunta a 20° y el 2do rayo BC apunta a 130°. ¿Cuánto mide el ángulo ∡ABC entre ambos rayos?",
          "svgSpec": {
            "type": "diff_geodreieck_20_130"
          },
          "options": [
            {
              "textDe": "∡ABC = 110° (Stumpfer Winkel)",
              "textEs": "∡ABC = 110° (Stumpfer Winkel)",
              "correct": true
            },
            {
              "textDe": "∡ABC = 130° (Stumpfer Winkel)",
              "textEs": "∡ABC = 130° (Stumpfer Winkel)",
              "correct": false
            },
            {
              "textDe": "∡ABC = 150° (Stumpfer Winkel)",
              "textEs": "∡ABC = 150° (Stumpfer Winkel)",
              "correct": false
            },
            {
              "textDe": "∡ABC = 70° (Spitzer Winkel)",
              "textEs": "∡ABC = 70° (Spitzer Winkel)",
              "correct": false
            }
          ],
          "explanationDe": "Von 20° bis 130° dreht sich der Winkel um die Differenz: 130° − 20° = 110° (Stumpfer Winkel)!",
          "explanationEs": "Desde 20° hasta 130° la abertura entre los dos rayos es la resta: 130° − 20° = 110° (Stumpfer Winkel)."
        },
        {
          "id": "pc_6",
          "topicDe": "3 Strahlen um einen Punkt (360°)",
          "questionDe": "Vom Scheitelpunkt S gehen drei Strahlen aus: ⟼ SA, ⟼ SB und ⟼ SC. Gegeben sind ∡ASB = 110° und ∡BSC = 130°. Wie groß muss der dritte Winkel ∡CSA sein, damit der Kreis (360°) voll wird?",
          "questionEs": "Desde el vértice S salen tres rayos: ⟼ SA, ⟼ SB y ⟼ SC. Si ∡ASB = 110° y ∡BSC = 130°, ¿cuánto debe medir el tercer ángulo ∡CSA para completar la vuelta de 360°?",
          "svgSpec": {
            "type": "three_rays_360"
          },
          "options": [
            {
              "textDe": "∡CSA = 120°",
              "textEs": "∡CSA = 120°",
              "correct": true
            },
            {
              "textDe": "∡CSA = 140°",
              "textEs": "∡CSA = 140°",
              "correct": false
            },
            {
              "textDe": "∡CSA = 60°",
              "textEs": "∡CSA = 60°",
              "correct": false
            },
            {
              "textDe": "∡CSA = 240°",
              "textEs": "∡CSA = 240°",
              "correct": false
            }
          ],
          "explanationDe": "Alle Winkel rund um einen Punkt S ergeben zusammen einen Vollen Winkel (360°): 360° − 110° − 130° = 120°!",
          "explanationEs": "Todos los ángulos alrededor de un punto S suman un Voller Winkel (360°): 360° − 110° − 130° = 120°."
        },
        {
          "id": "pc_7",
          "topicDe": "Gedrehtes Quadrat (Raute EFGH)",
          "questionDe": "Wie auf der Heftseite vom 6./8. Oktober: Ein Quadrat EFGH wurde um 45° gedreht, sodass alle vier Seiten schräg zum Blattrand liegen. Stehen die Seiten EF und FG trotzdem noch senkrecht (⊥, 90°) aufeinander?",
          "questionEs": "Como en la página del 6/8 de octubre del cuaderno: Un cuadrado EFGH se giró en 45° de modo que sus 4 lados quedaron oblicuos a la hoja. ¿Siguen siendo perpendiculares (⊥, 90°) entre sí los lados EF y FG?",
          "svgSpec": {
            "type": "rotated_square_efgh"
          },
          "options": [
            {
              "textDe": "Ja, sie bleiben senkrecht zueinander (EF ⊥ FG, 90°)",
              "textEs": "Sí, siguen siendo perpendiculares (EF ⊥ FG, 90°)",
              "correct": true
            },
            {
              "textDe": "Nein, senkrechte Linien müssen vertikal zum Blattrand sein",
              "textEs": "No, deben ser verticales al borde de la hoja",
              "correct": false
            },
            {
              "textDe": "Nein, durch die Drehung beträgt der Winkel jetzt 45°",
              "textEs": "No, por el giro el ángulo ahora mide 45°",
              "correct": false
            },
            {
              "textDe": "Nein, die Seiten EF und FG sind jetzt parallel (EF ∥ FG)",
              "textEs": "No, los lados EF y FG ahora son paralelos",
              "correct": false
            }
          ],
          "explanationDe": "Wichtige Erkenntnis aus dem Heft: Wenn man eine Figur dreht, ändern sich die Winkel IN der Figur nicht! Im Quadrat bleibt jede Ecke 90° (EF ⊥ FG).",
          "explanationEs": "Concepto clave del cuaderno: al girar una figura, los ángulos ENTRE sus lados no cambian. En el cuadrado cada esquina sigue siendo 90° (EF ⊥ FG)."
        },
        {
          "id": "pc_8",
          "topicDe": "Gedrehter Winkel nennen (↺)",
          "questionDe": "In der Zeichnung zeigt Strahl QP nach links oben (140°) und Strahl QR nach links unten (205°). Wenn man gegen den Uhrzeigersinn (↺) von P über Q nach R geht, sind es 65°. Welches Winkelpaar stimmt?",
          "questionEs": "En el dibujo, el rayo QP apunta arriba-izquierda (140°) y el rayo QR apunta abajo-izquierda (205°). Yendo en sentido antihorario (↺) de P a R hay 65°. ¿Qué par de ángulos es el correcto?",
          "svgSpec": {
            "type": "angle_pair",
            "vertex": "Q",
            "p1": "P",
            "p2": "R",
            "startDeg": 140,
            "d1": 65,
            "d2": 295,
            "given": 1
          },
          "options": [
            {
              "textDe": "∡PQR = 65° (Spitzer Winkel) und ∡RQP = 295° (Überstumpfer Winkel)",
              "textEs": "∡PQR = 65° (agudo) y ∡RQP = 295° (mayor de 180°)",
              "correct": true
            },
            {
              "textDe": "∡RQP = 65° und ∡PQR = 295°",
              "textEs": "∡RQP = 65° y ∡PQR = 295°",
              "correct": false
            },
            {
              "textDe": "∡PQR = 65° und ∡RQP = 115°",
              "textEs": "∡PQR = 65° y ∡RQP = 115°",
              "correct": false
            },
            {
              "textDe": "∡PRQ = 65° und ∡QRP = 295° (Scheitelpunkt R)",
              "textEs": "∡PRQ = 65° y ∡QRP = 295° (vértice R)",
              "correct": false
            }
          ],
          "explanationDe": "Gegen den Uhrzeigersinn von P nach R ist der kleine Bogen (65°), also ∡PQR = 65°. Von R gegen den Uhrzeigersinn zurück nach P sind es 360° − 65° = 295° (∡RQP)!",
          "explanationEs": "En sentido antihorario de P a R es el arco pequeño (65°), es decir ∡PQR = 65°. Y de R a P en sentido antihorario son 360° − 65° = 295° (∡RQP)."
        },
        {
          "id": "pc_9",
          "topicDe": "Winkel-Rätsel (3 × Rechter Winkel)",
          "questionDe": "Der Winkel ∡DEF ist genau dreimal so groß wie ein Rechter Winkel (3 × 90°). Wie groß ist ∡DEF, welche Winkelart ist er, und wie groß ist sein Gegenwinkel ∡FED?",
          "questionEs": "El ángulo ∡DEF mide exactamente el triple de un ángulo recto (3 × 90°). ¿Cuánto mide ∡DEF, qué tipo de ángulo es y cuánto mide su ángulo inverso ∡FED?",
          "svgSpec": {
            "type": "angle_pair",
            "vertex": "E",
            "p1": "D",
            "p2": "F",
            "d1": 270,
            "d2": 90,
            "given": 2
          },
          "options": [
            {
              "textDe": "∡DEF = 270° (Überstumpfer Winkel) · Gegenwinkel ∡FED = 90° (Rechter Winkel)",
              "textEs": "∡DEF = 270° (Überstumpfer) · ángulo inverso ∡FED = 90° (Rechter Winkel)",
              "correct": true
            },
            {
              "textDe": "∡DEF = 180° (Gestreckter Winkel) · Gegenwinkel ∡FED = 180°",
              "textEs": "∡DEF = 180° · ángulo inverso ∡FED = 180°",
              "correct": false
            },
            {
              "textDe": "∡DEF = 270° (Stumpfer Winkel) · Gegenwinkel ∡FED = 90°",
              "textEs": "∡DEF = 270° (obtuso) · ángulo inverso ∡FED = 90°",
              "correct": false
            },
            {
              "textDe": "∡DEF = 360° (Voller Winkel) · Gegenwinkel ∡FED = 0°",
              "textEs": "∡DEF = 360° · ángulo inverso ∡FED = 0°",
              "correct": false
            }
          ],
          "explanationDe": "3 × 90° = 270° (liegt zwischen 181° und 359° → Überstumpfer Winkel). Und 360° − 270° = 90° (Rechter Winkel)!",
          "explanationEs": "3 × 90° = 270° (está entre 181° y 359° → Überstumpfer Winkel). Y 360° − 270° = 90° (Rechter Winkel)."
        },
        {
          "id": "pc_10",
          "topicDe": "Zwei Spitze Winkel addieren",
          "questionDe": "Am Scheitelpunkt M liegen zwei spitze Winkel direkt nebeneinander: ∡KML = 48° und ∡LMN = 45°. Wie groß ist der gesamte Winkel ∡KMN und zu welcher Winkelart gehört er?",
          "questionEs": "En el vértice M hay dos ángulos agudos seguidos: ∡KML = 48° y ∡LMN = 45°. ¿Cuánto mide el ángulo total ∡KMN y a qué clasificación pertenece?",
          "svgSpec": {
            "type": "add_angles_48_45"
          },
          "options": [
            {
              "textDe": "∡KMN = 93° → Stumpfer Winkel",
              "textEs": "∡KMN = 93° → Stumpfer Winkel",
              "correct": true
            },
            {
              "textDe": "∡KMN = 93° → Spitzer Winkel",
              "textEs": "∡KMN = 93° → Spitzer Winkel",
              "correct": false
            },
            {
              "textDe": "∡KMN = 90° → Rechter Winkel",
              "textEs": "∡KMN = 90° → Rechter Winkel",
              "correct": false
            },
            {
              "textDe": "∡KMN = 83° → Spitzer Winkel",
              "textEs": "∡KMN = 83° → Spitzer Winkel",
              "correct": false
            }
          ],
          "explanationDe": "48° + 45° = 93°. Da 93° zwischen 91° und 179° liegt, entsteht zusammen ein Stumpfer Winkel!",
          "explanationEs": "48° + 45° = 93°. Como 93° está entre 91° y 179°, ¡la suma forma un Stumpfer Winkel (obtuso)!"
        },
        {
          "id": "pc_11",
          "topicDe": "Parallelen & Senkrechte im Stadtplan",
          "questionDe": "Im Plan läuft die Hauptstraße (Gerade g) von A nach B. Die Parkstraße (h) ist parallel zu g (h ∥ g). Die Schulstraße (s) steht senkrecht auf der Hauptstraße (s ⊥ g). Wie steht die Schulstraße s dann zur Parkstraße h?",
          "questionEs": "En el plano, la calle principal (recta g) va de A a B. La calle del Parque (h) es paralela a g (h ∥ g). La calle del Colegio (s) es perpendicular a g (s ⊥ g). ¿Cómo es entonces la calle s respecto a la calle h?",
          "svgSpec": {
            "type": "street_map_ghs"
          },
          "options": [
            {
              "textDe": "Senkrecht zu h (s ⊥ h, 90°)",
              "textEs": "Perpendicular a h (s ⊥ h, 90°)",
              "correct": true
            },
            {
              "textDe": "Parallel zu h (s ∥ h)",
              "textEs": "Paralela a h (s ∥ h)",
              "correct": false
            },
            {
              "textDe": "Schräg zu h im 45°-Winkel",
              "textEs": "Oblicua a h en ángulo de 45°",
              "correct": false
            },
            {
              "textDe": "Sie schneidet die Gerade h nicht",
              "textEs": "No corta a la recta h",
              "correct": false
            }
          ],
          "explanationDe": "Wenn zwei Straßen g und h parallel sind (g ∥ h), dann schneidet jede Querstraße s, die zu g im 90°-Winkel steht, auch h genau im 90°-Winkel (s ⊥ h)!",
          "explanationEs": "Si dos calles g y h son paralelas (g ∥ h), cualquier calle transversal s que sea perpendicular a g también cortará a h en 90° (s ⊥ h)."
        },
        {
          "id": "pc_12",
          "topicDe": "Meister-Check (Alle Regeln)",
          "questionDe": "Welche Aussage über das Bild mit den Punkten B, K und M (∡MKB = 105° und ∡BKM = 255°) ist komplett richtig?",
          "questionEs": "¿Cuál afirmación sobre la figura con los puntos B, K y M (∡MKB = 105° y ∡BKM = 255°) es completamente verdadera?",
          "svgSpec": {
            "type": "angle_pair",
            "vertex": "K",
            "p1": "M",
            "p2": "B",
            "d1": 105,
            "d2": 255,
            "given": 1
          },
          "options": [
            {
              "textDe": "Scheitelpunkt K · Schenkel ⟼ KM und ⟼ KB · Summe 360°",
              "textEs": "Vértice K · Lados ⟼ KM y ⟼ KB · Suma 360°",
              "correct": true
            },
            {
              "textDe": "Scheitelpunkt M · Schenkel ⟼ MK und ⟼ MB · Summe 360°",
              "textEs": "Vértice M · Lados ⟼ MK y ⟼ MB · Suma 360°",
              "correct": false
            },
            {
              "textDe": "Scheitelpunkt K · Schenkel ⟼ KM und ⟼ KB · Summe 180°",
              "textEs": "Vértice K · Lados ⟼ KM y ⟼ KB · Suma 180°",
              "correct": false
            },
            {
              "textDe": "Scheitelpunkt B · Strecken I—I MB und I—I BK · Summe 360°",
              "textEs": "Vértice B · Segmentos I—I MB y I—I BK · Suma 360°",
              "correct": false
            }
          ],
          "explanationDe": "Perfekt zusammengefasst! Scheitelpunkt K in der Mitte, Strahlen ⟼ KM und ⟼ KB als Schenkel, 105° = Stumpfer Winkel, 255° = Überstumpfer Winkel, Summe = 360°!",
          "explanationEs": "¡Resumen perfecto! Vértice K al medio, rayos ⟼ KM y ⟼ KB como lados, 105° = Stumpfer Winkel, 255° = Überstumpfer Winkel, suma = 360°."
        }
      ]
    }
  },
  "mikaNov13Arena": {
    "worlds": [
      {
        "id": "exam20",
        "icon": "🎯",
        "titleDe": "20er-Prüfung (Zufalls-Auswahl aus 112)",
        "titleEs": "Simulacro de 20 preguntas al azar (del banco de 112)"
      },
      {
        "id": "all",
        "icon": "🌟",
        "titleDe": "Alle 112 Fragen",
        "titleEs": "Banco completo de 112 preguntas sin pistas"
      },
      {
        "id": "polygone",
        "icon": "🔷",
        "titleDe": "1. Polygone (26)",
        "titleEs": "Polígonos regulares, irregulares y diagonales"
      },
      {
        "id": "dreiecke",
        "icon": "🔺",
        "titleDe": "2. Dreiecke & Rätsel (28)",
        "titleEs": "Triángulos por lados/ángulos, tabla 3×3 y 6 palabras secretas nuevas"
      },
      {
        "id": "vierecke",
        "icon": "💎",
        "titleDe": "3. Vierecke & Symmetrie (30)",
        "titleEs": "Familias de cuadriláteros, ejes de simetría y acertijos"
      },
      {
        "id": "koordinaten",
        "icon": "🧭",
        "titleDe": "4. Koordinaten & Vektoren (28)",
        "titleEs": "Puntos (x|y), vectores, 4° vértice y reflexión sin pistas"
      },
      {
        "id": "random_mix",
        "icon": "🎲",
        "titleDe": "5. Zufalls-Generator (Immer neu!)",
        "titleEs": "Generador dinámico infinito con números y coordenadas nuevas"
      }
    ],
    "questions": [
      {
        "id": "m13_poly_1",
        "world": "polygone",
        "topicDe": "Polygone bestimmen",
        "questionDe": "Zähle die Ecken dieser Figur genau. Wie heißt dieses Polygon auf Deutsch?",
        "questionEs": "Cuenta con cuidado los vértices de esta figura. ¿Cómo se llama este polígono en alemán?",
        "svgSpec": {
          "type": "polygon_clean",
          "sides": 6,
          "color": "#eab308",
          "fill": "#fef9c3"
        },
        "options": [
          {
            "textDe": "Das Sechseck",
            "textEs": "Das Sechseck",
            "correct": true
          },
          {
            "textDe": "Das Fünfeck",
            "textEs": "Das Fünfeck",
            "correct": false
          },
          {
            "textDe": "Das Siebeneck",
            "textEs": "Das Siebeneck",
            "correct": false
          },
          {
            "textDe": "Das Achteck",
            "textEs": "Das Achteck",
            "correct": false
          }
        ],
        "explanationDe": "Die Figur hat genau 6 Ecken, 6 Seiten und 6 Winkel → das Sechseck.",
        "explanationEs": "La figura tiene 6 vértices, 6 lados y 6 ángulos → das Sechseck."
      },
      {
        "id": "m13_poly_2",
        "world": "polygone",
        "topicDe": "Polygone bestimmen",
        "questionDe": "Betrachte dieses regelmäßige Polygon. Wie lautet sein richtiger deutscher Name?",
        "questionEs": "Observa este polígono regular. ¿Cuál es su nombre correcto en alemán?",
        "svgSpec": {
          "type": "polygon_clean",
          "sides": 7,
          "color": "#0284c7",
          "fill": "#e0f2fe"
        },
        "options": [
          {
            "textDe": "Das Siebeneck",
            "textEs": "Das Siebeneck",
            "correct": true
          },
          {
            "textDe": "Das Sechseck",
            "textEs": "Das Sechseck",
            "correct": false
          },
          {
            "textDe": "Das Achteck",
            "textEs": "Das Achteck",
            "correct": false
          },
          {
            "textDe": "Das Neuneck",
            "textEs": "Das Neuneck",
            "correct": false
          }
        ],
        "explanationDe": "Wenn du die Punkte ringsherum zählst, sind es genau 7 Ecken → das Siebeneck.",
        "explanationEs": "Si cuentas los vértices alrededor, son exactamente 7 → das Siebeneck."
      },
      {
        "id": "m13_poly_3",
        "world": "polygone",
        "topicDe": "Polygone bestimmen",
        "questionDe": "Zähle alle Ecken und Seiten dieser Figur. Um welches Polygon handelt es sich?",
        "questionEs": "Cuenta todos los vértices y lados de esta figura. ¿De qué polígono se trata?",
        "svgSpec": {
          "type": "polygon_clean",
          "sides": 8,
          "color": "#dc2626",
          "fill": "#fee2e2"
        },
        "options": [
          {
            "textDe": "Das Achteck",
            "textEs": "Das Achteck",
            "correct": true
          },
          {
            "textDe": "Das Siebeneck",
            "textEs": "Das Siebeneck",
            "correct": false
          },
          {
            "textDe": "Das Neuneck",
            "textEs": "Das Neuneck",
            "correct": false
          },
          {
            "textDe": "Das Zehneck",
            "textEs": "Das Zehneck",
            "correct": false
          }
        ],
        "explanationDe": "Es sind 8 Ecken und 8 gerade Seiten → das Achteck.",
        "explanationEs": "Son 8 vértices y 8 lados rectos → das Achteck."
      },
      {
        "id": "m13_poly_4",
        "world": "polygone",
        "topicDe": "Polygone bestimmen",
        "questionDe": "Wie heißt dieses Polygon auf Deutsch? Zähle die Ecken sorgfältig im Kreis herum!",
        "questionEs": "¿Cómo se llama este polígono en alemán? ¡Cuenta con cuidado los vértices alrededor!",
        "svgSpec": {
          "type": "polygon_clean",
          "sides": 9,
          "color": "#0d9488",
          "fill": "#ccfbf1"
        },
        "options": [
          {
            "textDe": "Das Neuneck",
            "textEs": "Das Neuneck",
            "correct": true
          },
          {
            "textDe": "Das Achteck",
            "textEs": "Das Achteck",
            "correct": false
          },
          {
            "textDe": "Das Zehneck",
            "textEs": "Das Zehneck",
            "correct": false
          },
          {
            "textDe": "Das Siebeneck",
            "textEs": "Das Siebeneck",
            "correct": false
          }
        ],
        "explanationDe": "Die Figur besitzt genau 9 Ecken, 9 Seiten und 9 Winkel → das Neuneck.",
        "explanationEs": "La figura posee exactamente 9 vértices, 9 lados y 9 ángulos → das Neuneck."
      },
      {
        "id": "m13_poly_5",
        "world": "polygone",
        "topicDe": "Polygone bestimmen",
        "questionDe": "Zähle die Ecken dieser blauen Figur. Wie heißt sie auf Deutsch?",
        "questionEs": "Cuenta los vértices de esta figura azul. ¿Cómo se llama en alemán?",
        "svgSpec": {
          "type": "polygon_clean",
          "sides": 10,
          "color": "#2563eb",
          "fill": "#dbeafe"
        },
        "options": [
          {
            "textDe": "Das Zehneck",
            "textEs": "Das Zehneck",
            "correct": true
          },
          {
            "textDe": "Das Neuneck",
            "textEs": "Das Neuneck",
            "correct": false
          },
          {
            "textDe": "Das Zwölfeck",
            "textEs": "Das Zwölfeck",
            "correct": false
          },
          {
            "textDe": "Das Zwanzigeck",
            "textEs": "Das Zwanzigeck",
            "correct": false
          }
        ],
        "explanationDe": "10 Ecken, 10 Seiten und 10 Innenwinkel = das Zehneck.",
        "explanationEs": "10 vértices, 10 lados y 10 ángulos interiores = das Zehneck."
      },
      {
        "id": "m13_poly_6",
        "world": "polygone",
        "topicDe": "Rechtschreibung der Polygone",
        "questionDe": "Ein Polygon hat halb so viele Ecken wie ein Zwölfeck. Welche Schreibweise auf Deutsch ist exakt richtig?",
        "questionEs": "Un polígono tiene la mitad de vértices que un Zwölfeck (12). ¿Cuál escritura en alemán es exactamente la correcta?",
        "svgSpec": {
          "type": "polygon_clean",
          "sides": 6,
          "color": "#7c3aed",
          "fill": "#ede9fe"
        },
        "options": [
          {
            "textDe": "das Sechseck",
            "textEs": "das Sechseck",
            "correct": true
          },
          {
            "textDe": "das Sexeck",
            "textEs": "das Sexeck",
            "correct": false
          },
          {
            "textDe": "das Sechzeck",
            "textEs": "das Sechzeck",
            "correct": false
          },
          {
            "textDe": "das Seckseck",
            "textEs": "das Seckseck",
            "correct": false
          }
        ],
        "explanationDe": "Die Hälfte von 12 ist 6 (sechs). Auf Deutsch schreibt man „das Sechseck“ mit „chs“!",
        "explanationEs": "La mitad de 12 es 6 (sechs). En alemán se escribe «das Sechseck» con «chs»."
      },
      {
        "id": "m13_poly_7",
        "world": "polygone",
        "topicDe": "Unregelmäßige Polygone (Konkav)",
        "questionDe": "Auch eine L-förmige Figur aus geraden Strecken ist ein Polygon! Zähle ALLE Ecken (auch die innere Ecke). Wie heißt dieses Polygon?",
        "questionEs": "Una figura en forma de L hecha de segmentos rectos también es un polígono. Cuenta TODOS sus vértices (incluida la esquina entrante). ¿Qué polígono es?",
        "svgSpec": {
          "type": "polygon_clean",
          "customPoints": [
            {
              "x": 95,
              "y": 28
            },
            {
              "x": 165,
              "y": 28
            },
            {
              "x": 165,
              "y": 98
            },
            {
              "x": 245,
              "y": 98
            },
            {
              "x": 245,
              "y": 156
            },
            {
              "x": 95,
              "y": 156
            }
          ],
          "color": "#0284c7",
          "fill": "#e0f2fe"
        },
        "options": [
          {
            "textDe": "Das Sechseck",
            "textEs": "Das Sechseck",
            "correct": true
          },
          {
            "textDe": "Das Viereck",
            "textEs": "Das Viereck",
            "correct": false
          },
          {
            "textDe": "Das Fünfeck",
            "textEs": "Das Fünfeck",
            "correct": false
          },
          {
            "textDe": "Das Achteck",
            "textEs": "Das Achteck",
            "correct": false
          }
        ],
        "explanationDe": "Das L-Polygon hat 5 äußere Ecken und 1 innere Ecke = insgesamt 6 Ecken und 6 Seiten → ein Sechseck!",
        "explanationEs": "El polígono en L tiene 5 esquinas exteriores y 1 esquina entrante = 6 vértices y 6 lados en total → ¡un Sechseck!"
      },
      {
        "id": "m13_poly_8",
        "world": "polygone",
        "topicDe": "Unregelmäßige Polygone (Pfeilform)",
        "questionDe": "Betrachte diesen geradlinigen Pfeil. Zu welcher Polygon-Art gehört er nach der Anzahl seiner Ecken?",
        "questionEs": "Observa esta flecha formada por segmentos rectos. ¿A qué tipo de polígono pertenece según su número de vértices?",
        "svgSpec": {
          "type": "polygon_clean",
          "customPoints": [
            {
              "x": 70,
              "y": 66
            },
            {
              "x": 185,
              "y": 66
            },
            {
              "x": 185,
              "y": 32
            },
            {
              "x": 275,
              "y": 95
            },
            {
              "x": 185,
              "y": 158
            },
            {
              "x": 185,
              "y": 124
            },
            {
              "x": 70,
              "y": 124
            }
          ],
          "color": "#16a34a",
          "fill": "#dcfce7"
        },
        "options": [
          {
            "textDe": "Das Siebeneck",
            "textEs": "Das Siebeneck",
            "correct": true
          },
          {
            "textDe": "Das Fünfeck",
            "textEs": "Das Fünfeck",
            "correct": false
          },
          {
            "textDe": "Das Sechseck",
            "textEs": "Das Sechseck",
            "correct": false
          },
          {
            "textDe": "Das Achteck",
            "textEs": "Das Achteck",
            "correct": false
          }
        ],
        "explanationDe": "Links 2 Ecken + am Übergang 2 innere Ecken + 3 Ecken an der Pfeilspitze = 7 Ecken → das Siebeneck!",
        "explanationEs": "2 esquinas a la izquierda + 2 esquinas entrantes + 3 puntas de la flecha = 7 vértices → das Siebeneck."
      },
      {
        "id": "m13_poly_9",
        "world": "polygone",
        "topicDe": "Unregelmäßige Polygone (Stern)",
        "questionDe": "Dieser fünfzackige Stern besteht nur aus geraden Strecken. Zähle alle äußeren Spitzen UND alle inneren Ecken! Was für ein Polygon ist dieser Stern?",
        "questionEs": "Esta estrella de cinco puntas está formada solo por segmentos rectos. ¡Cuenta todas las puntas exteriores Y todas las esquinas interiores! ¿Qué polígono es?",
        "svgSpec": {
          "type": "polygon_clean",
          "customPoints": [
            {
              "x": 170,
              "y": 22
            },
            {
              "x": 190,
              "y": 72
            },
            {
              "x": 244,
              "y": 72
            },
            {
              "x": 201,
              "y": 104
            },
            {
              "x": 217,
              "y": 156
            },
            {
              "x": 170,
              "y": 124
            },
            {
              "x": 123,
              "y": 156
            },
            {
              "x": 139,
              "y": 104
            },
            {
              "x": 96,
              "y": 72
            },
            {
              "x": 150,
              "y": 72
            }
          ],
          "color": "#d97706",
          "fill": "#fef3c7"
        },
        "options": [
          {
            "textDe": "Das Zehneck",
            "textEs": "Das Zehneck",
            "correct": true
          },
          {
            "textDe": "Das Fünfeck",
            "textEs": "Das Fünfeck",
            "correct": false
          },
          {
            "textDe": "Das Achteck",
            "textEs": "Das Achteck",
            "correct": false
          },
          {
            "textDe": "Das Zwanzigeck",
            "textEs": "Das Zwanzigeck",
            "correct": false
          }
        ],
        "explanationDe": "Der Stern hat 5 äußere Spitzen + 5 innere Ecken = 10 Ecken und 10 gerade Seiten → er ist ein konkaves Zehneck!",
        "explanationEs": "La estrella tiene 5 puntas exteriores + 5 esquinas interiores = 10 vértices y 10 lados → ¡es un Zehneck (decágono)!"
      },
      {
        "id": "m13_poly_10",
        "world": "polygone",
        "topicDe": "Unregelmäßige Polygone (Kreuz)",
        "questionDe": "Dieses Plus-Kreuz ist ein geschlossenes Polygon. Wie viele Ecken und Seiten hat es insgesamt?",
        "questionEs": "Esta cruz en forma de signo más (+) es un polígono cerrado. ¿Cuántos vértices y lados tiene en total?",
        "svgSpec": {
          "type": "polygon_clean",
          "customPoints": [
            {
              "x": 142,
              "y": 24
            },
            {
              "x": 198,
              "y": 24
            },
            {
              "x": 198,
              "y": 68
            },
            {
              "x": 242,
              "y": 68
            },
            {
              "x": 242,
              "y": 124
            },
            {
              "x": 198,
              "y": 124
            },
            {
              "x": 198,
              "y": 168
            },
            {
              "x": 142,
              "y": 168
            },
            {
              "x": 142,
              "y": 124
            },
            {
              "x": 98,
              "y": 124
            },
            {
              "x": 98,
              "y": 68
            },
            {
              "x": 142,
              "y": 68
            }
          ],
          "color": "#dc2626",
          "fill": "#fee2e2"
        },
        "options": [
          {
            "textDe": "12 Ecken und 12 Seiten (Zwölfeck)",
            "textEs": "12 vértices y 12 lados (Zwölfeck)",
            "correct": true
          },
          {
            "textDe": "8 Ecken und 8 Seiten (Achteck)",
            "textEs": "8 vértices y 8 lados (Achteck)",
            "correct": false
          },
          {
            "textDe": "10 Ecken und 10 Seiten (Zehneck)",
            "textEs": "10 vértices y 10 lados (Zehneck)",
            "correct": false
          },
          {
            "textDe": "4 Ecken und 4 Seiten (Viereck)",
            "textEs": "4 vértices y 4 lados (Viereck)",
            "correct": false
          }
        ],
        "explanationDe": "Jeder der 4 Arme hat 2 äußere Ecken (8) plus die 4 inneren Ecken in der Mitte = 12 Ecken und 12 Seiten!",
        "explanationEs": "Cada uno de los 4 brazos tiene 2 esquinas exteriores (8) más las 4 esquinas interiores = 12 vértices y 12 lados."
      },
      {
        "id": "m13_poly_11",
        "world": "polygone",
        "topicDe": "Polygone erkennen",
        "questionDe": "Welche der vier gezeigten Figuren A, B, C oder D ist ein echtes Polygon?",
        "questionEs": "¿Cuál de las cuatro figuras A, B, C o D es un verdadero polígono (Polygon)?",
        "svgSpec": {
          "type": "figures_4_grid",
          "variant": "which_is_polygon"
        },
        "options": [
          {
            "textDe": "Nur Figur C",
            "textEs": "Solo la figura C",
            "correct": true
          },
          {
            "textDe": "Nur Figur A",
            "textEs": "Solo la figura A",
            "correct": false
          },
          {
            "textDe": "Nur Figur B",
            "textEs": "Solo la figura B",
            "correct": false
          },
          {
            "textDe": "Nur Figur D",
            "textEs": "Solo la figura D",
            "correct": false
          }
        ],
        "explanationDe": "Figur A hat eine runde Kurve, Figur B ist offen und Figur D kreuzt sich selbst. Nur Figur C ist geschlossen und besteht ausschließlich aus geraden Strecken!",
        "explanationEs": "La figura A tiene una curva, la B está abierta y la D se cruza a sí misma. ¡Solo la figura C es cerrada y de lados rectos!"
      },
      {
        "id": "m13_poly_12",
        "world": "polygone",
        "topicDe": "Vierecke unter Figuren finden",
        "questionDe": "Schau dir die vier Figuren A, B, C und D genau an. Welche davon ist ein Viereck?",
        "questionEs": "Mira con atención las cuatro figuras A, B, C y D. ¿Cuál de ellas es un cuadrilátero (Viereck)?",
        "svgSpec": {
          "type": "figures_4_grid",
          "variant": "which_is_viereck"
        },
        "options": [
          {
            "textDe": "Nur Figur D",
            "textEs": "Solo la figura D",
            "correct": true
          },
          {
            "textDe": "Nur Figur A",
            "textEs": "Solo la figura A",
            "correct": false
          },
          {
            "textDe": "Nur Figur B",
            "textEs": "Solo la figura B",
            "correct": false
          },
          {
            "textDe": "Nur Figur C",
            "textEs": "Solo la figura C",
            "correct": false
          }
        ],
        "explanationDe": "A hat 5 Ecken (Fünfeck), B ist offen, C hat einen runden Bogen. Nur D hat genau 4 gerade Seiten und ist geschlossen!",
        "explanationEs": "A tiene 5 esquinas (Fünfeck), B es abierta y C tiene un arco curvo. ¡Solo D tiene 4 lados rectos cerrados!"
      },
      {
        "id": "m13_poly_13",
        "world": "polygone",
        "topicDe": "Sechseck unter Figuren finden",
        "questionDe": "Alle vier Figuren A, B, C und D sind unregelmäßige Polygone. Welches davon ist ein Sechseck?",
        "questionEs": "Las cuatro figuras A, B, C y D son polígonos irregulares. ¿Cuál de ellos es un hexágono (Sechseck)?",
        "svgSpec": {
          "type": "figures_4_grid",
          "variant": "which_is_sechseck"
        },
        "options": [
          {
            "textDe": "Figur B",
            "textEs": "La figura B",
            "correct": true
          },
          {
            "textDe": "Figur A",
            "textEs": "La figura A",
            "correct": false
          },
          {
            "textDe": "Figur C",
            "textEs": "La figura C",
            "correct": false
          },
          {
            "textDe": "Figur D",
            "textEs": "La figura D",
            "correct": false
          }
        ],
        "explanationDe": "Zählt man die Ecken: Figur A hat 5 Ecken (Fünfeck), Figur B hat 6 Ecken (Sechseck), Figur C hat 7 Ecken (Siebeneck) und Figur D hat 8 Ecken (Achteck).",
        "explanationEs": "Contando los vértices: A tiene 5 (Fünfeck), B tiene 6 (Sechseck), C tiene 7 (Siebeneck) y D tiene 8 (Achteck)."
      },
      {
        "id": "m13_poly_14",
        "world": "polygone",
        "topicDe": "Polygone ordnen",
        "questionDe": "Welche Reihenfolge ordnet die vier Polygone richtig von der GRÖSSTEN zur KLEINSTEN Eckenzahl?",
        "questionEs": "¿Qué alternativa ordena los cuatro polígonos correctamente de MAYOR a MENOR número de vértices?",
        "svgSpec": {
          "type": "polygon_clean",
          "sides": 10,
          "color": "#0f172a",
          "fill": "#f1f5f9"
        },
        "options": [
          {
            "textDe": "Zwanzigeck → Zehneck → Neuneck → Siebeneck",
            "textEs": "Zwanzigeck → Zehneck → Neuneck → Siebeneck",
            "correct": true
          },
          {
            "textDe": "Siebeneck → Achteck → Neuneck → Zehneck",
            "textEs": "Siebeneck → Achteck → Neuneck → Zehneck",
            "correct": false
          },
          {
            "textDe": "Zwanzigeck → Neuneck → Zehneck → Achteck",
            "textEs": "Zwanzigeck → Neuneck → Zehneck → Achteck",
            "correct": false
          },
          {
            "textDe": "Zehneck → Zwanzigeck → Achteck → Sechseck",
            "textEs": "Zehneck → Zwanzigeck → Achteck → Sechseck",
            "correct": false
          }
        ],
        "explanationDe": "Von groß nach klein: Zwanzigeck (20) > Zehneck (10) > Neuneck (9) > Siebeneck (7)!",
        "explanationEs": "De mayor a menor: Zwanzigeck (20) > Zehneck (10) > Neuneck (9) > Siebeneck (7)."
      },
      {
        "id": "m13_poly_15",
        "world": "polygone",
        "topicDe": "Polygone · Rechenrätsel",
        "questionDe": "Du zeichnest ein Achteck und ein Fünfeck nebeneinander (sie berühren sich nicht). Wie viele Ecken haben beide Figuren zusammen?",
        "questionEs": "Dibujas un Achteck y un Fünfeck separados uno al lado del otro. ¿Cuántos vértices tienen ambas figuras en total?",
        "svgSpec": {
          "type": "polygon_clean",
          "sides": 8,
          "color": "#9333ea",
          "fill": "#f3e8ff"
        },
        "options": [
          {
            "textDe": "13 Ecken",
            "textEs": "13 vértices",
            "correct": true
          },
          {
            "textDe": "12 Ecken",
            "textEs": "12 vértices",
            "correct": false
          },
          {
            "textDe": "14 Ecken",
            "textEs": "14 vértices",
            "correct": false
          },
          {
            "textDe": "15 Ecken",
            "textEs": "15 vértices",
            "correct": false
          }
        ],
        "explanationDe": "Ein Achteck hat 8 Ecken und ein Fünfeck hat 5 Ecken: 8 + 5 = 13 Ecken.",
        "explanationEs": "Un Achteck tiene 8 vértices y un Fünfeck tiene 5 vértices: 8 + 5 = 13 vértices."
      },
      {
        "id": "m13_poly_16",
        "world": "polygone",
        "topicDe": "Polygone · Rechenrätsel",
        "questionDe": "Ein Zwanzigeck hat wie viele Seiten MEHR als ein Siebeneck?",
        "questionEs": "¿Cuántos lados MÁS tiene un Zwanzigeck que un Siebeneck?",
        "svgSpec": {
          "type": "polygon_clean",
          "sides": 20,
          "color": "#7c3aed",
          "fill": "#ede9fe"
        },
        "options": [
          {
            "textDe": "13 Seiten mehr",
            "textEs": "13 lados más",
            "correct": true
          },
          {
            "textDe": "3 Seiten mehr",
            "textEs": "3 lados más",
            "correct": false
          },
          {
            "textDe": "12 Seiten mehr",
            "textEs": "12 lados más",
            "correct": false
          },
          {
            "textDe": "14 Seiten mehr",
            "textEs": "14 lados más",
            "correct": false
          }
        ],
        "explanationDe": "Ein Zwanzigeck hat 20 Seiten und ein Siebeneck hat 7 Seiten: 20 − 7 = 13 Seiten mehr!",
        "explanationEs": "Un Zwanzigeck tiene 20 lados y un Siebeneck tiene 7 lados: 20 − 7 = 13 lados más."
      },
      {
        "id": "m13_poly_17",
        "world": "polygone",
        "topicDe": "Polygone · Denkaufgabe",
        "questionDe": "Ein Geometriequiz fragt: „Wenn du bei einem bestimmten Polygon die Anzahl der Ecken, die Anzahl der Seiten und die Anzahl der Innenwinkel addierst, erhältst du zusammen 24.“ Welches Polygon ist es?",
        "questionEs": "Un acertijo geométrico dice: «Si en cierto polígono sumas el número de vértices + el número de lados + el número de ángulos interiores, obtienes 24 en total». ¿Qué polígono es?",
        "svgSpec": {
          "type": "polygon_clean",
          "sides": 8,
          "color": "#0284c7",
          "fill": "#e0f2fe"
        },
        "options": [
          {
            "textDe": "Das Achteck",
            "textEs": "Das Achteck",
            "correct": true
          },
          {
            "textDe": "Das Sechseck",
            "textEs": "Das Sechseck",
            "correct": false
          },
          {
            "textDe": "Das Zwölfeck",
            "textEs": "Das Zwölfeck",
            "correct": false
          },
          {
            "textDe": "Das Viereck",
            "textEs": "Das Viereck",
            "correct": false
          }
        ],
        "explanationDe": "Da jedes Polygon gleich viele Ecken, Seiten und Winkel hat, teilt man 24 : 3 = 8. Es hat also 8 Ecken, 8 Seiten und 8 Winkel → das Achteck!",
        "explanationEs": "Como todo polígono tiene igual cantidad de vértices, lados y ángulos, dividimos 24 : 3 = 8 → ¡es el Achteck!"
      },
      {
        "id": "m13_poly_18",
        "world": "polygone",
        "topicDe": "Polygone · Denkaufgabe",
        "questionDe": "Bei einem Polygon ist die Summe aus Ecken + Seiten + Innenwinkeln genau 27. Wie heißt dieses Polygon auf Deutsch?",
        "questionEs": "En un polígono, la suma de vértices + lados + ángulos interiores es exactamente 27. ¿Cómo se llama este polígono en alemán?",
        "svgSpec": {
          "type": "polygon_clean",
          "sides": 9,
          "color": "#0d9488",
          "fill": "#ccfbf1"
        },
        "options": [
          {
            "textDe": "Das Neuneck",
            "textEs": "Das Neuneck",
            "correct": true
          },
          {
            "textDe": "Das Siebeneck",
            "textEs": "Das Siebeneck",
            "correct": false
          },
          {
            "textDe": "Das Achteck",
            "textEs": "Das Achteck",
            "correct": false
          },
          {
            "textDe": "Das Zehneck",
            "textEs": "Das Zehneck",
            "correct": false
          }
        ],
        "explanationDe": "27 : 3 = 9 (9 Ecken + 9 Seiten + 9 Winkel = 27) → das Neuneck!",
        "explanationEs": "27 : 3 = 9 (9 vértices + 9 lados + 9 ángulos = 27) → ¡das Neuneck!"
      },
      {
        "id": "m13_poly_19",
        "world": "polygone",
        "topicDe": "Polygone · Ecke abschneiden",
        "questionDe": "Stell dir ein Blatt Papier in Form eines Vierecks vor. Du schneidest mit einem einzigen geraden Scherenschnitt EINE Ecke schräg ab. Welches Polygon entsteht aus dem großen Blatt?",
        "questionEs": "Imagina una hoja de papel con forma de cuadrilátero (Viereck). Si cortas UNA sola esquina con un corte recto en diagonal, ¿qué polígono queda en la hoja grande?",
        "svgSpec": {
          "type": "polygon_clean",
          "customPoints": [
            {
              "x": 80,
              "y": 36
            },
            {
              "x": 210,
              "y": 36
            },
            {
              "x": 260,
              "y": 82
            },
            {
              "x": 260,
              "y": 152
            },
            {
              "x": 80,
              "y": 152
            }
          ],
          "color": "#ec4899",
          "fill": "#fce7f3"
        },
        "options": [
          {
            "textDe": "Ein Fünfeck",
            "textEs": "Un Fünfeck",
            "correct": true
          },
          {
            "textDe": "Ein Dreieck",
            "textEs": "Un Dreieck",
            "correct": false
          },
          {
            "textDe": "Ein Viereck",
            "textEs": "Un Viereck",
            "correct": false
          },
          {
            "textDe": "Ein Sechseck",
            "textEs": "Un Sechseck",
            "correct": false
          }
        ],
        "explanationDe": "An der abgeschnittenen Ecke verschwindet 1 alte Ecke, aber an den Enden des Schnitts entstehen 2 neue Ecken: 4 − 1 + 2 = 5 Ecken → ein Fünfeck!",
        "explanationEs": "Al cortar una esquina desaparece 1 vértice pero aparecen 2 vértices nuevos en los extremos del corte: 4 − 1 + 2 = 5 → ¡un Fünfeck!"
      },
      {
        "id": "m13_poly_20",
        "world": "polygone",
        "topicDe": "Polygone · Haus-Form",
        "questionDe": "Dieses kleine Haus besteht aus einem Viereck unten und einem Dach oben, ohne innere Trennlinie. Welches Polygon bildet der äußere Umriss?",
        "questionEs": "Esta casita está formada por una pared abajo y un techo arriba, sin línea divisoria interior. ¿Qué polígono forma su contorno exterior?",
        "svgSpec": {
          "type": "polygon_clean",
          "customPoints": [
            {
              "x": 170,
              "y": 24
            },
            {
              "x": 245,
              "y": 78
            },
            {
              "x": 245,
              "y": 156
            },
            {
              "x": 95,
              "y": 156
            },
            {
              "x": 95,
              "y": 78
            }
          ],
          "color": "#ea580c",
          "fill": "#ffedd5"
        },
        "options": [
          {
            "textDe": "Das Fünfeck",
            "textEs": "Das Fünfeck",
            "correct": true
          },
          {
            "textDe": "Das Sechseck",
            "textEs": "Das Sechseck",
            "correct": false
          },
          {
            "textDe": "Das Viereck",
            "textEs": "Das Viereck",
            "correct": false
          },
          {
            "textDe": "Das Siebeneck",
            "textEs": "Das Siebeneck",
            "correct": false
          }
        ],
        "explanationDe": "Der äußere Umriss des Hauses hat 2 Ecken am Boden, 2 Ecken am Dachansatz und 1 Dachspitze = 5 Ecken → ein Fünfeck!",
        "explanationEs": "El contorno exterior de la casa tiene 2 esquinas abajo, 2 al inicio del techo y 1 en la cumbrera = 5 vértices → ¡das Fünfeck!"
      },
      {
        "id": "m13_poly_21",
        "world": "polygone",
        "topicDe": "Polygone · Treppen-Figur",
        "questionDe": "Zähle alle Ecken dieser zweistufigen Treppe (außen und innen). Um welches Polygon handelt es sich?",
        "questionEs": "Cuenta todos los vértices de esta escalera de dos peldaños (exteriores e interiores). ¿De qué polígono se trata?",
        "svgSpec": {
          "type": "polygon_clean",
          "customPoints": [
            {
              "x": 75,
              "y": 156
            },
            {
              "x": 75,
              "y": 112
            },
            {
              "x": 138,
              "y": 112
            },
            {
              "x": 138,
              "y": 68
            },
            {
              "x": 201,
              "y": 68
            },
            {
              "x": 201,
              "y": 26
            },
            {
              "x": 265,
              "y": 26
            },
            {
              "x": 265,
              "y": 156
            }
          ],
          "color": "#4f46e5",
          "fill": "#e0e7ff"
        },
        "options": [
          {
            "textDe": "Das Achteck",
            "textEs": "Das Achteck",
            "correct": true
          },
          {
            "textDe": "Das Sechseck",
            "textEs": "Das Sechseck",
            "correct": false
          },
          {
            "textDe": "Das Siebeneck",
            "textEs": "Das Siebeneck",
            "correct": false
          },
          {
            "textDe": "Das Zehneck",
            "textEs": "Das Zehneck",
            "correct": false
          }
        ],
        "explanationDe": "Zählt man jede Richtungsänderung entlang des Randes, hat die Treppenfigur genau 8 Ecken und 8 gerade Strecken → ein Achteck!",
        "explanationEs": "Si cuentas cada esquina a lo largo del contorno, la figura escalonada tiene exactamente 8 vértices y 8 lados → ¡das Achteck!"
      },
      {
        "id": "m13_poly_22",
        "world": "polygone",
        "topicDe": "Diagonalen im Viereck",
        "questionDe": "Eine Diagonale verbindet zwei gegenüberliegende (nicht benachbarte) Eckpunkte. Wie viele Diagonalen kann man in einem Viereck ABCD insgesamt einzeichnen?",
        "questionEs": "Una diagonal une dos vértices opuestos (no vecinos). ¿Cuántas diagonales en total se pueden trazar dentro de un cuadrilátero ABCD?",
        "svgSpec": {
          "type": "polygon_clean",
          "customPoints": [
            {
              "x": 95,
              "y": 40
            },
            {
              "x": 245,
              "y": 40
            },
            {
              "x": 265,
              "y": 148
            },
            {
              "x": 75,
              "y": 148
            }
          ],
          "color": "#0284c7",
          "fill": "#f0f9ff"
        },
        "options": [
          {
            "textDe": "Genau 2 Diagonalen",
            "textEs": "Exactamente 2 diagonales",
            "correct": true
          },
          {
            "textDe": "Genau 1 Diagonale",
            "textEs": "Exactamente 1 diagonal",
            "correct": false
          },
          {
            "textDe": "Genau 4 Diagonalen",
            "textEs": "Exactamente 4 diagonales",
            "correct": false
          },
          {
            "textDe": "Genau 0 Diagonalen",
            "textEs": "Exactamente 0 diagonales",
            "correct": false
          }
        ],
        "explanationDe": "In jedem Viereck ABCD gibt es genau 2 Diagonalen: eine von A nach C und eine von B nach D!",
        "explanationEs": "En todo cuadrilátero ABCD hay exactamente 2 diagonales: una de A a C y otra de B a D."
      },
      {
        "id": "m13_poly_23",
        "world": "polygone",
        "topicDe": "Diagonalen im Dreieck",
        "questionDe": "Wie viele Diagonalen hat ein Dreieck ABC?",
        "questionEs": "¿Cuántas diagonales tiene un triángulo ABC?",
        "svgSpec": {
          "type": "polygon_clean",
          "sides": 3,
          "color": "#16a34a",
          "fill": "#dcfce7"
        },
        "options": [
          {
            "textDe": "0 Diagonalen",
            "textEs": "0 diagonales",
            "correct": true
          },
          {
            "textDe": "1 Diagonale",
            "textEs": "1 diagonal",
            "correct": false
          },
          {
            "textDe": "2 Diagonalen",
            "textEs": "2 diagonales",
            "correct": false
          },
          {
            "textDe": "3 Diagonalen",
            "textEs": "3 diagonales",
            "correct": false
          }
        ],
        "explanationDe": "Im Dreieck ist jede Ecke direkt mit beiden anderen Ecken durch eine Seite verbunden — es gibt keine gegenüberliegende Ecke, also 0 Diagonalen!",
        "explanationEs": "En un triángulo cada vértice es vecino de los otros dos, por lo que no existen diagonales (0 diagonales)."
      },
      {
        "id": "m13_poly_24",
        "world": "polygone",
        "topicDe": "Polygone zusammensetzen",
        "questionDe": "Du legst zwei gleich große Quadrate genau Kante an Kante nebeneinander, sodass die mittlere Linie verschwindet. Welches Polygon entsteht außen herum?",
        "questionEs": "Juntas dos cuadrados iguales exactamente lado con lado y borras la línea del medio. ¿Qué polígono se forma en el borde exterior?",
        "svgSpec": {
          "type": "polygon_clean",
          "customPoints": [
            {
              "x": 70,
              "y": 48
            },
            {
              "x": 270,
              "y": 48
            },
            {
              "x": 270,
              "y": 148
            },
            {
              "x": 70,
              "y": 148
            }
          ],
          "color": "#0284c7",
          "fill": "#e0f2fe"
        },
        "options": [
          {
            "textDe": "Ein Viereck (Rechteck)",
            "textEs": "Un Viereck (Rechteck)",
            "correct": true
          },
          {
            "textDe": "Ein Achteck",
            "textEs": "Un Achteck",
            "correct": false
          },
          {
            "textDe": "Ein Sechseck",
            "textEs": "Un Sechseck",
            "correct": false
          },
          {
            "textDe": "Ein Fünfeck",
            "textEs": "Un Fünfeck",
            "correct": false
          }
        ],
        "explanationDe": "Da die oberen und unteren Kanten gerade durchlaufen, hat der äußere Rahmen genau 4 Ecken und 4 Seiten → ein Viereck (Rechteck)!",
        "explanationEs": "Como los lados superiores e inferiores quedan colineales, el contorno exterior tiene 4 esquinas y 4 lados → un Viereck (Rechteck)."
      },
      {
        "id": "m13_poly_25",
        "world": "polygone",
        "topicDe": "Fachbegriffe Polygon",
        "questionDe": "Welche drei Bedingungen muss eine Figur erfüllen, damit sie in der Geometrie ein „Polygon“ ist?",
        "questionEs": "¿Cuáles tres condiciones debe cumplir una figura plana para ser un «Polygon» en geometría?",
        "svgSpec": {
          "type": "polygon_clean",
          "sides": 5,
          "color": "#db2777",
          "fill": "#fce7f3"
        },
        "options": [
          {
            "textDe": "Geschlossene Linie, nur gerade Strecken, keine Selbstüberschneidung",
            "textEs": "Línea cerrada, solo segmentos rectos, sin cruzarse a sí misma",
            "correct": true
          },
          {
            "textDe": "Offene Linie, mindestens 4 Ecken, mindestens 1 rechter Winkel",
            "textEs": "Línea abierta, al menos 4 esquinas y al menos 1 ángulo recto",
            "correct": false
          },
          {
            "textDe": "Geschlossene Linie, mindestens 1 Kurve, alle Seiten gleich lang",
            "textEs": "Línea cerrada, al menos 1 curva y todos los lados iguales",
            "correct": false
          },
          {
            "textDe": "Immer genau 4 Seiten, 2 Paar parallele Linien und 4 Symmetrieachsen",
            "textEs": "Siempre 4 lados, 2 pares de paralelas y 4 ejes de simetría",
            "correct": false
          }
        ],
        "explanationDe": "Ein Polygon (Vieleck) ist eine geschlossene ebene Figur, deren Rand nur aus geraden Strecken besteht, die sich nicht überkreuzen.",
        "explanationEs": "Un polígono es una figura plana cerrada cuyo borde está formado únicamente por segmentos rectos que no se cruzan."
      },
      {
        "id": "m13_poly_26",
        "world": "polygone",
        "topicDe": "Polygone · Zahlenverständnis",
        "questionDe": "Welches dieser vier Polygone hat genau doppelt so viele Ecken wie ein Fünfeck?",
        "questionEs": "¿Cuál de estos cuatro polígonos tiene exactamente el doble de vértices que un Fünfeck?",
        "svgSpec": {
          "type": "polygon_clean",
          "sides": 5,
          "color": "#16a34a",
          "fill": "#dcfce7"
        },
        "options": [
          {
            "textDe": "Das Zehneck",
            "textEs": "Das Zehneck",
            "correct": true
          },
          {
            "textDe": "Das Zwanzigeck",
            "textEs": "Das Zwanzigeck",
            "correct": false
          },
          {
            "textDe": "Das Achteck",
            "textEs": "Das Achteck",
            "correct": false
          },
          {
            "textDe": "Das Neuneck",
            "textEs": "Das Neuneck",
            "correct": false
          }
        ],
        "explanationDe": "Ein Fünfeck hat 5 Ecken. Das Doppelte von 5 ist 2 × 5 = 10 → das Zehneck!",
        "explanationEs": "Un Fünfeck tiene 5 vértices. El doble de 5 es 2 × 5 = 10 → ¡das Zehneck!"
      },
      {
        "id": "m13_tri_1",
        "world": "dreiecke",
        "topicDe": "Dreiecke nach Seitenlängen",
        "questionDe": "Schau dir die Striche an den Seiten dieses Dreiecks an. Wie heißt dieses Dreieck nach seinen Seitenlängen?",
        "questionEs": "Observa las marquitas en los lados de este triángulo. ¿Cómo se clasifica según la longitud de sus lados en alemán?",
        "svgSpec": {
          "type": "triangle_clean",
          "kind": "equilateral",
          "showTicks": true
        },
        "options": [
          {
            "textDe": "gleichseitiges Dreieck",
            "textEs": "gleichseitiges Dreieck",
            "correct": true
          },
          {
            "textDe": "gleichschenkliges Dreieck",
            "textEs": "gleichschenkliges Dreieck",
            "correct": false
          },
          {
            "textDe": "ungleichseitiges Dreieck",
            "textEs": "ungleichseitiges Dreieck",
            "correct": false
          },
          {
            "textDe": "rechtwinkliges Dreieck",
            "textEs": "rechtwinkliges Dreieck",
            "correct": false
          }
        ],
        "explanationDe": "Alle 3 Seiten haben denselben einzelnen Strich (|), sind also gleich lang → gleichseitiges Dreieck.",
        "explanationEs": "Los 3 lados tienen la misma marca (|), es decir miden lo mismo → gleichseitiges Dreieck (equilátero)."
      },
      {
        "id": "m13_tri_2",
        "world": "dreiecke",
        "topicDe": "Dreiecke nach Seitenlängen",
        "questionDe": "Betrachte die Seitenmarkierungen dieses Dreiecks. Wie wird es nach seinen Seiten eingeteilt?",
        "questionEs": "Observa las marcas de los lados de este triángulo. ¿Cómo se clasifica según sus lados en alemán?",
        "svgSpec": {
          "type": "triangle_clean",
          "kind": "isosceles_acute",
          "showTicks": true
        },
        "options": [
          {
            "textDe": "gleichschenkliges Dreieck",
            "textEs": "gleichschenkliges Dreieck",
            "correct": true
          },
          {
            "textDe": "gleichseitiges Dreieck",
            "textEs": "gleichseitiges Dreieck",
            "correct": false
          },
          {
            "textDe": "allgemeines Dreieck",
            "textEs": "allgemeines Dreieck",
            "correct": false
          },
          {
            "textDe": "stumpfwinkliges Dreieck",
            "textEs": "stumpfwinkliges Dreieck",
            "correct": false
          }
        ],
        "explanationDe": "Genau 2 Seiten sind gleich lang (|) und die dritte Seite ist anders (||) → gleichschenkliges Dreieck.",
        "explanationEs": "Exactamente 2 lados son iguales (|) y el tercero es distinto (||) → gleichschenkliges Dreieck (isósceles)."
      },
      {
        "id": "m13_tri_3",
        "world": "dreiecke",
        "topicDe": "Dreiecke nach Seitenlängen",
        "questionDe": "Ein Dreieck hat die Seitenlängen a = 4 cm, b = 7 cm und c = 9 cm. Welche BEIDEN deutschen Fachbegriffe passen für die Einteilung nach Seiten?",
        "questionEs": "Un triángulo tiene lados de medidas a = 4 cm, b = 7 cm y c = 9 cm. ¿Cuáles DOS nombres en alemán corresponden a su clasificación por lados?",
        "svgSpec": {
          "type": "triangle_clean",
          "kind": "scalene_acute",
          "sideLabels": [
            "4 cm",
            "9 cm",
            "7 cm"
          ]
        },
        "options": [
          {
            "textDe": "allgemeines Dreieck / ungleichseitiges Dreieck",
            "textEs": "allgemeines Dreieck / ungleichseitiges Dreieck",
            "correct": true
          },
          {
            "textDe": "gleichseitiges Dreieck / gleichschenkliges Dreieck",
            "textEs": "gleichseitiges Dreieck / gleichschenkliges Dreieck",
            "correct": false
          },
          {
            "textDe": "spitzwinkliges Dreieck / rechtwinkliges Dreieck",
            "textEs": "spitzwinkliges Dreieck / rechtwinkliges Dreieck",
            "correct": false
          },
          {
            "textDe": "gleichschenkliges Dreieck / stumpfwinkliges Dreieck",
            "textEs": "gleichschenkliges Dreieck / stumpfwinkliges Dreieck",
            "correct": false
          }
        ],
        "explanationDe": "Da alle 3 Seiten unterschiedlich lang sind (4 cm, 7 cm, 9 cm), heißt es „allgemeines Dreieck“ oder „ungleichseitiges Dreieck“.",
        "explanationEs": "Como los 3 lados miden distinto (4 cm, 7 cm, 9 cm), se llama «allgemeines Dreieck» o «ungleichseitiges Dreieck» (escaleno)."
      },
      {
        "id": "m13_tri_4",
        "world": "dreiecke",
        "topicDe": "Dreiecke nach Winkeln",
        "questionDe": "Schau dir die Innenwinkel dieses Dreiecks genau an. Wie heißt es nach seiner Winkelart?",
        "questionEs": "Mira con atención los ángulos interiores de este triángulo. ¿Cómo se clasifica según sus ángulos en alemán?",
        "svgSpec": {
          "type": "triangle_clean",
          "kind": "isosceles_obtuse",
          "showTicks": false
        },
        "options": [
          {
            "textDe": "stumpfwinkliges Dreieck",
            "textEs": "stumpfwinkliges Dreieck",
            "correct": true
          },
          {
            "textDe": "spitzwinkliges Dreieck",
            "textEs": "spitzwinkliges Dreieck",
            "correct": false
          },
          {
            "textDe": "rechtwinkliges Dreieck",
            "textEs": "rechtwinkliges Dreieck",
            "correct": false
          },
          {
            "textDe": "überstumpfwinkliges Dreieck",
            "textEs": "überstumpfwinkliges Dreieck",
            "correct": false
          }
        ],
        "explanationDe": "Der obere Winkel ist deutlich weiter geöffnet als 90° (ein stumpfer Winkel) → stumpfwinkliges Dreieck.",
        "explanationEs": "El ángulo superior es claramente mayor que 90° (obtuso) → stumpfwinkliges Dreieck."
      },
      {
        "id": "m13_tri_5",
        "world": "dreiecke",
        "topicDe": "Dreiecke nach Winkeln",
        "questionDe": "Ein Dreieck besitzt die drei Innenwinkel α = 52°, β = 63° und γ = 65°. Wie heißt es nach seinen Winkeln?",
        "questionEs": "Un triángulo tiene tres ángulos interiores de α = 52°, β = 63° y γ = 65°. ¿Cómo se clasifica según sus ángulos?",
        "svgSpec": {
          "type": "triangle_clean",
          "kind": "scalene_acute",
          "angleLabels": [
            "52°",
            "63°",
            "65°"
          ]
        },
        "options": [
          {
            "textDe": "spitzwinkliges Dreieck",
            "textEs": "spitzwinkliges Dreieck",
            "correct": true
          },
          {
            "textDe": "rechtwinkliges Dreieck",
            "textEs": "rechtwinkliges Dreieck",
            "correct": false
          },
          {
            "textDe": "stumpfwinkliges Dreieck",
            "textEs": "stumpfwinkliges Dreieck",
            "correct": false
          },
          {
            "textDe": "gleichseitiges Dreieck",
            "textEs": "gleichseitiges Dreieck",
            "correct": false
          }
        ],
        "explanationDe": "Alle 3 Winkel (52°, 63°, 65°) sind kleiner als 90° (spitz) → spitzwinkliges Dreieck!",
        "explanationEs": "Los 3 ángulos (52°, 63°, 65°) son menores de 90° (agudos) → spitzwinkliges Dreieck."
      },
      {
        "id": "m13_tri_6",
        "world": "dreiecke",
        "topicDe": "Dreiecke · 89°-Prüfungsfalle!",
        "questionDe": "Ein Dreieck hat die Innenwinkel α = 89°, β = 46° und γ = 45°. Zu welcher Winkel-Kategorie gehört dieses Dreieck?",
        "questionEs": "Un triángulo tiene ángulos interiores α = 89°, β = 46° y γ = 45°. ¿A qué categoría por ángulos pertenece?",
        "svgSpec": {
          "type": "triangle_clean",
          "kind": "near_right_89",
          "angleLabels": [
            "89°",
            "46°",
            "45°"
          ]
        },
        "options": [
          {
            "textDe": "spitzwinkliges Dreieck",
            "textEs": "spitzwinkliges Dreieck",
            "correct": true
          },
          {
            "textDe": "rechtwinkliges Dreieck",
            "textEs": "rechtwinkliges Dreieck",
            "correct": false
          },
          {
            "textDe": "stumpfwinkliges Dreieck",
            "textEs": "stumpfwinkliges Dreieck",
            "correct": false
          },
          {
            "textDe": "gleichseitiges Dreieck",
            "textEs": "gleichseitiges Dreieck",
            "correct": false
          }
        ],
        "explanationDe": "Achtung Falle: Ein rechtwinkliges Dreieck braucht GENAU 90°! Da 89° kleiner als 90° ist, sind alle 3 Winkel spitz → spitzwinkliges Dreieck.",
        "explanationEs": "¡Cuidado con la trampa! Un triángulo rectángulo requiere EXACTAMENTE 90°. Como 89° < 90°, los 3 ángulos son agudos → spitzwinkliges Dreieck."
      },
      {
        "id": "m13_tri_7",
        "world": "dreiecke",
        "topicDe": "Dreiecke · 91°-Prüfungsfalle!",
        "questionDe": "Ein Dreieck hat die drei Innenwinkel α = 91°, β = 44° und γ = 45°. Wie heißt es nach seiner Winkelart?",
        "questionEs": "Un triángulo tiene los ángulos interiores α = 91°, β = 44° y γ = 45°. ¿Cómo se clasifica según sus ángulos?",
        "svgSpec": {
          "type": "triangle_clean",
          "kind": "near_right_91",
          "angleLabels": [
            "91°",
            "44°",
            "45°"
          ]
        },
        "options": [
          {
            "textDe": "stumpfwinkliges Dreieck",
            "textEs": "stumpfwinkliges Dreieck",
            "correct": true
          },
          {
            "textDe": "rechtwinkliges Dreieck",
            "textEs": "rechtwinkliges Dreieck",
            "correct": false
          },
          {
            "textDe": "spitzwinkliges Dreieck",
            "textEs": "spitzwinkliges Dreieck",
            "correct": false
          },
          {
            "textDe": "gleichschenkliges Dreieck",
            "textEs": "gleichschenkliges Dreieck",
            "correct": false
          }
        ],
        "explanationDe": "91° ist größer als 90° (ein stumpfer Winkel)! Sobald ein Winkel > 90° ist, heißt das Dreieck stumpfwinkliges Dreieck.",
        "explanationEs": "¡91° ya es mayor que 90° (obtuso)! Por lo tanto es un stumpfwinkliges Dreieck."
      },
      {
        "id": "m13_tri_8",
        "world": "dreiecke",
        "topicDe": "Dreiecke kombinieren (Winkel + Seiten)",
        "questionDe": "Untersuche dieses Dreieck nach seiner Winkelart UND nach seinen Seitenlängen. Welche Doppel-Bezeichnung stimmt?",
        "questionEs": "Analiza este triángulo según sus ángulos Y según sus lados. ¿Cuál nombre combinado es el correcto?",
        "svgSpec": {
          "type": "triangle_clean",
          "kind": "isosceles_right",
          "showTicks": true,
          "showRightAngle": true
        },
        "options": [
          {
            "textDe": "rechtwinklig-gleichschenkliges Dreieck",
            "textEs": "rechtwinklig-gleichschenkliges Dreieck",
            "correct": true
          },
          {
            "textDe": "rechtwinklig-gleichseitiges Dreieck",
            "textEs": "rechtwinklig-gleichseitiges Dreieck",
            "correct": false
          },
          {
            "textDe": "spitzwinklig-gleichschenkliges Dreieck",
            "textEs": "spitzwinklig-gleichschenkliges Dreieck",
            "correct": false
          },
          {
            "textDe": "stumpfwinklig-gleichschenkliges Dreieck",
            "textEs": "stumpfwinklig-gleichschenkliges Dreieck",
            "correct": false
          }
        ],
        "explanationDe": "Es hat oben den rechten Winkel (90° ⦜ → rechtwinklig) und zwei gleich lange Seiten (| → gleichschenklig).",
        "explanationEs": "Tiene un ángulo recto (90° ⦜ → rechtwinklig) y dos lados iguales (| → gleichschenklig)."
      },
      {
        "id": "m13_tri_9",
        "world": "dreiecke",
        "topicDe": "Dreiecke kombinieren (Winkel + Seiten)",
        "questionDe": "Welche kombinierte Bezeichnung (Winkelart + Seitenart) beschreibt dieses Dreieck komplett richtig?",
        "questionEs": "¿Qué nombre combinado (por ángulos + por lados) describe este triángulo correctamente?",
        "svgSpec": {
          "type": "triangle_clean",
          "kind": "scalene_right",
          "showTicks": true,
          "showRightAngle": true
        },
        "options": [
          {
            "textDe": "rechtwinklig-ungleichseitiges Dreieck",
            "textEs": "rechtwinklig-ungleichseitiges Dreieck",
            "correct": true
          },
          {
            "textDe": "rechtwinklig-gleichschenkliges Dreieck",
            "textEs": "rechtwinklig-gleichschenkliges Dreieck",
            "correct": false
          },
          {
            "textDe": "stumpfwinklig-ungleichseitiges Dreieck",
            "textEs": "stumpfwinklig-ungleichseitiges Dreieck",
            "correct": false
          },
          {
            "textDe": "spitzwinklig-ungleichseitiges Dreieck",
            "textEs": "spitzwinklig-ungleichseitiges Dreieck",
            "correct": false
          }
        ],
        "explanationDe": "Es hat 1 rechten Winkel (90° ⦜ → rechtwinklig) und 3 verschieden lange Seiten (|, ||, ||| → ungleichseitig / allgemein).",
        "explanationEs": "Tiene 1 ángulo recto (rechtwinklig) y 3 lados de distinta medida (|, ||, ||| → ungleichseitig)."
      },
      {
        "id": "m13_tri_10",
        "world": "dreiecke",
        "topicDe": "Dreiecke kombinieren (Winkel + Seiten)",
        "questionDe": "Betrachte die Winkel und die Striche an den Seiten dieses flachen Dreiecks. Wie heißt es vollständig?",
        "questionEs": "Observa los ángulos y las marcas en los lados de este triángulo. ¿Cómo se llama de forma completa?",
        "svgSpec": {
          "type": "triangle_clean",
          "kind": "isosceles_obtuse",
          "showTicks": true
        },
        "options": [
          {
            "textDe": "stumpfwinklig-gleichschenkliges Dreieck",
            "textEs": "stumpfwinklig-gleichschenkliges Dreieck",
            "correct": true
          },
          {
            "textDe": "spitzwinklig-gleichschenkliges Dreieck",
            "textEs": "spitzwinklig-gleichschenkliges Dreieck",
            "correct": false
          },
          {
            "textDe": "stumpfwinklig-ungleichseitiges Dreieck",
            "textEs": "stumpfwinklig-ungleichseitiges Dreieck",
            "correct": false
          },
          {
            "textDe": "rechtwinklig-gleichschenkliges Dreieck",
            "textEs": "rechtwinklig-gleichschenkliges Dreieck",
            "correct": false
          }
        ],
        "explanationDe": "Oben liegt ein stumpfer Winkel (> 90°) und die beiden oberen Seiten sind gleich lang (|) → stumpfwinklig-gleichschenkliges Dreieck.",
        "explanationEs": "Arriba tiene un ángulo obtuso (> 90°) y los dos lados superiores son iguales (|) → stumpfwinklig-gleichschenkliges Dreieck."
      },
      {
        "id": "m13_tri_11",
        "world": "dreiecke",
        "topicDe": "Dreiecke kombinieren (Winkel + Seiten)",
        "questionDe": "Ein Dreieck hat die Seiten a = 6 cm, b = 9 cm, c = 13 cm und einen Winkel von 120°. Wie heißt es vollständig?",
        "questionEs": "Un triángulo tiene lados a = 6 cm, b = 9 cm, c = 13 cm y un ángulo de 120°. ¿Cómo se clasifica de forma completa?",
        "svgSpec": {
          "type": "triangle_clean",
          "kind": "scalene_obtuse",
          "sideLabels": [
            "6 cm",
            "13 cm",
            "9 cm"
          ]
        },
        "options": [
          {
            "textDe": "stumpfwinklig-ungleichseitiges Dreieck",
            "textEs": "stumpfwinklig-ungleichseitiges Dreieck",
            "correct": true
          },
          {
            "textDe": "stumpfwinklig-gleichschenkliges Dreieck",
            "textEs": "stumpfwinklig-gleichschenkliges Dreieck",
            "correct": false
          },
          {
            "textDe": "spitzwinklig-ungleichseitiges Dreieck",
            "textEs": "spitzwinklig-ungleichseitiges Dreieck",
            "correct": false
          },
          {
            "textDe": "rechtwinklig-ungleichseitiges Dreieck",
            "textEs": "rechtwinklig-ungleichseitiges Dreieck",
            "correct": false
          }
        ],
        "explanationDe": "120° ist ein stumpfer Winkel (> 90° → stumpfwinklig) und alle 3 Seiten (6 cm, 9 cm, 13 cm) sind verschieden lang (→ ungleichseitig).",
        "explanationEs": "120° es obtuso (stumpfwinklig) y sus 3 lados (6, 9 y 13 cm) son todos distintos (ungleichseitig)."
      },
      {
        "id": "m13_tri_12",
        "world": "dreiecke",
        "topicDe": "Dreiecke · Umfang berechnen",
        "questionDe": "Ein gleichseitiges Dreieck hat eine Seitenlänge von a = 7 cm. Wie lang sind alle 3 Seiten zusammen (der Umfang)?",
        "questionEs": "Un gleichseitiges Dreieck tiene un lado que mide a = 7 cm. ¿Cuánto suman sus 3 lados en total (el perímetro)?",
        "svgSpec": {
          "type": "triangle_clean",
          "kind": "equilateral",
          "sideLabels": [
            "7 cm",
            "?",
            "?"
          ]
        },
        "options": [
          {
            "textDe": "21 cm",
            "textEs": "21 cm",
            "correct": true
          },
          {
            "textDe": "14 cm",
            "textEs": "14 cm",
            "correct": false
          },
          {
            "textDe": "28 cm",
            "textEs": "28 cm",
            "correct": false
          },
          {
            "textDe": "17 cm",
            "textEs": "17 cm",
            "correct": false
          }
        ],
        "explanationDe": "Beim gleichseitigen Dreieck sind alle 3 Seiten gleich lang: 7 cm + 7 cm + 7 cm = 21 cm!",
        "explanationEs": "En un gleichseitiges Dreieck (equilátero) los 3 lados miden lo mismo: 3 × 7 cm = 21 cm."
      },
      {
        "id": "m13_tri_13",
        "world": "dreiecke",
        "topicDe": "Dreiecke · Seitenlänge finden",
        "questionDe": "Ein gleichschenkliges Dreieck hat rundherum eine Gesamtlänge (Umfang) von 20 cm. Die untere Basis ist 4 cm lang. Wie lang ist jeder der beiden gleich langen Schenkel?",
        "questionEs": "Un gleichschenkliges Dreieck tiene un perímetro total de 20 cm. Si la base inferior mide 4 cm, ¿cuánto mide cada uno de los dos lados iguales (Schenkel)?",
        "svgSpec": {
          "type": "triangle_clean",
          "kind": "isosceles_acute",
          "sideLabels": [
            "?",
            "4 cm",
            "?"
          ]
        },
        "options": [
          {
            "textDe": "Je 8 cm",
            "textEs": "8 cm cada uno",
            "correct": true
          },
          {
            "textDe": "Je 16 cm",
            "textEs": "16 cm cada uno",
            "correct": false
          },
          {
            "textDe": "Je 6 cm",
            "textEs": "6 cm cada uno",
            "correct": false
          },
          {
            "textDe": "Je 10 cm",
            "textEs": "10 cm cada uno",
            "correct": false
          }
        ],
        "explanationDe": "20 cm − 4 cm (Basis) = 16 cm für die beiden gleichen Schenkel zusammen. 16 cm : 2 = 8 cm pro Schenkel!",
        "explanationEs": "20 cm − 4 cm (base) = 16 cm para los dos lados iguales juntos. 16 cm : 2 = 8 cm cada lado."
      },
      {
        "id": "m13_tri_14",
        "world": "dreiecke",
        "topicDe": "3×3-Tabelle der Dreiecke",
        "questionDe": "Schau dir die 3×3-Tabelle mit den 9 Feldern (Feld 1 bis Feld 9) an. Welche ZWEI Felder in dieser Tabelle müssen IMMER leer bleiben, weil es solche Dreiecke nicht gibt?",
        "questionEs": "Mira la tabla 3×3 con las 9 casillas (Feld 1 a Feld 9). ¿Cuáles DOS casillas de esta tabla deben quedar SIEMPRE vacías porque esos triángulos no pueden existir?",
        "svgSpec": {
          "type": "triangle_matrix_3x3_clean"
        },
        "options": [
          {
            "textDe": "Feld 2 und Feld 3",
            "textEs": "Feld 2 y Feld 3",
            "correct": true
          },
          {
            "textDe": "Feld 1 und Feld 4",
            "textEs": "Feld 1 y Feld 4",
            "correct": false
          },
          {
            "textDe": "Feld 6 und Feld 9",
            "textEs": "Feld 6 y Feld 9",
            "correct": false
          },
          {
            "textDe": "Feld 7 und Feld 8",
            "textEs": "Feld 7 y Feld 8",
            "correct": false
          }
        ],
        "explanationDe": "In der 1. Zeile (gleichseitig) hat jedes Dreieck drei 60°-Winkel (Feld 1: spitzwinklig). Ein gleichseitiges Dreieck kann nie rechtwinklig (Feld 2) oder stumpfwinklig (Feld 3) sein!",
        "explanationEs": "En la 1ª fila (gleichseitig), todo triángulo equilátero tiene tres ángulos de 60° (Feld 1). Jamás puede ser rectángulo (Feld 2) ni obtusángulo (Feld 3)."
      },
      {
        "id": "m13_tri_15",
        "world": "dreiecke",
        "topicDe": "3×3-Tabelle der Dreiecke",
        "questionDe": "Wie viele der 9 Felder in der 3×3-Dreieckstabelle können tatsächlich mit einem echten Dreieck gefüllt werden?",
        "questionEs": "¿Cuántas de las 9 casillas de la tabla 3×3 de triángulos se pueden llenar realmente con un triángulo posible?",
        "svgSpec": {
          "type": "triangle_matrix_3x3_clean"
        },
        "options": [
          {
            "textDe": "Genau 7 von 9 Feldern",
            "textEs": "Exactamente 7 de 9 casillas",
            "correct": true
          },
          {
            "textDe": "Alle 9 von 9 Feldern",
            "textEs": "Las 9 de 9 casillas",
            "correct": false
          },
          {
            "textDe": "Genau 6 von 9 Feldern",
            "textEs": "Exactamente 6 de 9 casillas",
            "correct": false
          },
          {
            "textDe": "Genau 8 von 9 Feldern",
            "textEs": "Exactamente 8 de 9 casillas",
            "correct": false
          }
        ],
        "explanationDe": "Von den 9 Feldern fallen 2 weg (gleichseitig-rechtwinklig und gleichseitig-stumpfwinklig). Also gibt es genau 9 − 2 = 7 mögliche Dreiecks-Kombinationen!",
        "explanationEs": "De las 9 casillas hay 2 imposibles (equilátero-rectángulo y equilátero-obtusángulo), por lo que quedan 7 casillas posibles."
      },
      {
        "id": "m13_tri_16",
        "world": "dreiecke",
        "topicDe": "3×3-Tabelle der Dreiecke",
        "questionDe": "In welches Feld der 3×3-Tabelle (Feld 1 bis Feld 9) gehört ein Dreieck mit den Seiten 5 cm, 5 cm, 8 cm und einem Winkel von 106°?",
        "questionEs": "¿En qué casilla de la tabla 3×3 (Feld 1 a Feld 9) va un triángulo con lados de 5 cm, 5 cm, 8 cm y un ángulo de 106°?",
        "svgSpec": {
          "type": "triangle_matrix_3x3_clean"
        },
        "options": [
          {
            "textDe": "In Feld 6 (Zeile: gleichschenklig · Spalte: stumpfwinklig)",
            "textEs": "En Feld 6 (gleichschenklig · stumpfwinklig)",
            "correct": true
          },
          {
            "textDe": "In Feld 4 (Zeile: gleichschenklig · Spalte: spitzwinklig)",
            "textEs": "En Feld 4 (gleichschenklig · spitzwinklig)",
            "correct": false
          },
          {
            "textDe": "In Feld 9 (Zeile: allgemein · Spalte: stumpfwinklig)",
            "textEs": "En Feld 9 (allgemein · stumpfwinklig)",
            "correct": false
          },
          {
            "textDe": "In Feld 3 (Zeile: gleichseitig · Spalte: stumpfwinklig)",
            "textEs": "En Feld 3 (gleichseitig · stumpfwinklig)",
            "correct": false
          }
        ],
        "explanationDe": "Zwei Seiten sind gleich lang (5 cm und 5 cm → 2. Zeile: gleichschenklig) und ein Winkel ist 106° (> 90° → 3. Spalte: stumpfwinklig) → Feld 6!",
        "explanationEs": "Tiene 2 lados iguales (5 cm y 5 cm → fila 2: gleichschenklig) y un ángulo de 106° (> 90° → columna 3: stumpfwinklig) → ¡Feld 6!"
      },
      {
        "id": "m13_tri_17",
        "world": "dreiecke",
        "topicDe": "3×3-Tabelle der Dreiecke",
        "questionDe": "In welches Feld der 3×3-Tabelle (Feld 1 bis Feld 9) gehört dein eigenes Geodreieck aus dem Mäppchen?",
        "questionEs": "¿En qué casilla de la tabla 3×3 (Feld 1 a Feld 9) se ubica tu propia escuadra (Geodreieck) del estuche?",
        "svgSpec": {
          "type": "triangle_matrix_3x3_clean"
        },
        "options": [
          {
            "textDe": "In Feld 5 (gleichschenklig und rechtwinklig)",
            "textEs": "En Feld 5 (gleichschenklig y rechtwinklig)",
            "correct": true
          },
          {
            "textDe": "In Feld 1 (gleichseitig und spitzwinklig)",
            "textEs": "En Feld 1 (gleichseitig y spitzwinklig)",
            "correct": false
          },
          {
            "textDe": "In Feld 8 (allgemein und rechtwinklig)",
            "textEs": "En Feld 8 (allgemein y rechtwinklig)",
            "correct": false
          },
          {
            "textDe": "In Feld 2 (gleichseitig und rechtwinklig)",
            "textEs": "En Feld 2 (gleichseitig y rechtwinklig)",
            "correct": false
          }
        ],
        "explanationDe": "Das Geodreieck hat oben eine 90°-Spitze (rechtwinklig) und die beiden kurzen Seiten links und rechts sind genau gleich lang (gleichschenklig) → Feld 5!",
        "explanationEs": "El Geodreieck tiene un ángulo de 90° arriba (rechtwinklig) y sus dos lados laterales miden exactamente lo mismo (gleichschenklig) → ¡Feld 5!"
      },
      {
        "id": "m13_tri_18",
        "world": "dreiecke",
        "topicDe": "3×3-Tabelle der Dreiecke",
        "questionDe": "In welches Feld der 3×3-Tabelle gehört ein Dreieck mit den Seitenlängen 3 cm, 4 cm, 5 cm und einem 90°-Winkel?",
        "questionEs": "¿En qué casilla de la tabla 3×3 va un triángulo cuyos lados miden 3 cm, 4 cm, 5 cm y tiene un ángulo de 90°?",
        "svgSpec": {
          "type": "triangle_matrix_3x3_clean"
        },
        "options": [
          {
            "textDe": "In Feld 8 (allgemein und rechtwinklig)",
            "textEs": "En Feld 8 (allgemein y rechtwinklig)",
            "correct": true
          },
          {
            "textDe": "In Feld 5 (gleichschenklig und rechtwinklig)",
            "textEs": "En Feld 5 (gleichschenklig y rechtwinklig)",
            "correct": false
          },
          {
            "textDe": "In Feld 7 (allgemein und spitzwinklig)",
            "textEs": "En Feld 7 (allgemein y spitzwinklig)",
            "correct": false
          },
          {
            "textDe": "In Feld 9 (allgemein und stumpfwinklig)",
            "textEs": "En Feld 9 (allgemein y stumpfwinklig)",
            "correct": false
          }
        ],
        "explanationDe": "Alle 3 Seiten (3 cm, 4 cm, 5 cm) sind unterschiedlich lang (3. Zeile: allgemein) und es hat einen 90°-Winkel (2. Spalte: rechtwinklig) → Feld 8!",
        "explanationEs": "Sus 3 lados (3, 4 y 5 cm) son distintos (fila 3: allgemein) y tiene un ángulo de 90° (columna 2: rechtwinklig) → ¡Feld 8!"
      },
      {
        "id": "m13_tri_19",
        "world": "dreiecke",
        "topicDe": "Neues Lösungswort-Rätsel #1",
        "questionDe": "Untersuche die 7 Dreiecke auf der Tafel von links nach rechts. Welche Buchstaben gehören zu RECHTWINKLIGEN Dreiecken (mit einem 90°-Winkel)?",
        "questionEs": "Examina los 7 triángulos del tablero de izquierda a derecha. ¿Qué letras corresponden a triángulos RECTÁNGULOS (rechtwinklige Dreiecke, con un ángulo de 90°)?",
        "svgSpec": {
          "type": "triangle_puzzle_board",
          "board": "STERN"
        },
        "options": [
          {
            "textDe": "S - T - E - R - N",
            "textEs": "S - T - E - R - N",
            "correct": true
          },
          {
            "textDe": "S - K - E - L - N",
            "textEs": "S - K - E - L - N",
            "correct": false
          },
          {
            "textDe": "K - T - L - R",
            "textEs": "K - T - L - R",
            "correct": false
          },
          {
            "textDe": "S - T - L - N",
            "textEs": "S - T - L - N",
            "correct": false
          }
        ],
        "explanationDe": "Prüft man die Ecken: Dreieck K ist spitzwinklig und Dreieck L ist stumpfwinklig. Genau S, T, E, R und N haben eine 90°-Ecke → Lösungswort: STERN!",
        "explanationEs": "Al revisar las esquinas: K es acutángulo y L es obtusángulo. Exactamente S, T, E, R y N tienen un ángulo de 90° → palabra: STERN."
      },
      {
        "id": "m13_tri_20",
        "world": "dreiecke",
        "topicDe": "Neues Lösungswort-Rätsel #2",
        "questionDe": "Schau dir die 7 Dreiecke genau an. Welche Buchstaben gehören zu STUMPFWINKLIGEN Dreiecken (mit einem Winkel größer als 90°)?",
        "questionEs": "Mira con atención los 7 triángulos del tablero. ¿Qué letras corresponden a triángulos OBTUSÁNGULOS (stumpfwinklige Dreiecke, con un ángulo > 90°)?",
        "svgSpec": {
          "type": "triangle_puzzle_board",
          "board": "MOND"
        },
        "options": [
          {
            "textDe": "M - O - N - D",
            "textEs": "M - O - N - D",
            "correct": true
          },
          {
            "textDe": "M - P - N - X",
            "textEs": "M - P - N - X",
            "correct": false
          },
          {
            "textDe": "P - O - F - D",
            "textEs": "P - O - F - D",
            "correct": false
          },
          {
            "textDe": "M - O - F - X",
            "textEs": "M - O - F - X",
            "correct": false
          }
        ],
        "explanationDe": "Die Dreiecke P, F und X haben nur spitze oder rechte Winkel. Nur M, O, N und D besitzen einen weiten stumpfen Winkel (> 90°) → Lösungswort: MOND!",
        "explanationEs": "Los triángulos P, F y X solo tienen ángulos agudos o rectos. Solo M, O, N y D tienen un ángulo obtuso (> 90°) → palabra: MOND."
      },
      {
        "id": "m13_tri_21",
        "world": "dreiecke",
        "topicDe": "Neues Lösungswort-Rätsel #3",
        "questionDe": "Prüfe die Seitenlängen der 7 Dreiecke! Welche Buchstaben gehören zu GLEICHSEITIGEN Dreiecken (alle 3 Seiten genau gleich lang)?",
        "questionEs": "¡Revisa los lados de los 7 triángulos! ¿Qué letras corresponden a triángulos EQUILÁTEROS (gleichseitige Dreiecke, con los 3 lados iguales)?",
        "svgSpec": {
          "type": "triangle_puzzle_board",
          "board": "WALD"
        },
        "options": [
          {
            "textDe": "W - A - L - D",
            "textEs": "W - A - L - D",
            "correct": true
          },
          {
            "textDe": "W - B - L - Z",
            "textEs": "W - B - L - Z",
            "correct": false
          },
          {
            "textDe": "B - A - K - D",
            "textEs": "B - A - K - D",
            "correct": false
          },
          {
            "textDe": "W - K - Z - D",
            "textEs": "W - K - Z - D",
            "correct": false
          }
        ],
        "explanationDe": "Nur bei den Dreiecken W, A, L und D sind alle drei Seiten gleich lang (bei B, K und Z sind die Seiten unterschiedlich lang) → Lösungswort: WALD!",
        "explanationEs": "Solo en los triángulos W, A, L y D los 3 lados miden lo mismo (en B, K y Z los lados son desiguales) → palabra: WALD."
      },
      {
        "id": "m13_tri_22",
        "world": "dreiecke",
        "topicDe": "Neues Lösungswort-Rätsel #4",
        "questionDe": "Welche Dreiecke auf dieser Tafel sind GLEICHSCHENKLIG (haben genau 2 gleich lange Seiten, markiert mit Strichen)?",
        "questionEs": "¿Cuáles triángulos de este tablero son ISÓSCELES (gleichschenklig, con 2 lados de igual medida)?",
        "svgSpec": {
          "type": "triangle_puzzle_board",
          "board": "BERG"
        },
        "options": [
          {
            "textDe": "B - E - R - G",
            "textEs": "B - E - R - G",
            "correct": true
          },
          {
            "textDe": "B - U - R - S",
            "textEs": "B - U - R - S",
            "correct": false
          },
          {
            "textDe": "E - U - I - G",
            "textEs": "E - U - I - G",
            "correct": false
          },
          {
            "textDe": "B - E - I - S",
            "textEs": "B - E - I - S",
            "correct": false
          }
        ],
        "explanationDe": "Bei U, I und S sind alle 3 Seiten verschieden lang (|, ||, |||). Nur B, E, R und G haben zwei gleich lange Schenkel (|, |) → Lösungswort: BERG!",
        "explanationEs": "En U, I y S los 3 lados son distintos (|, ||, |||). Solo B, E, R y G tienen dos lados iguales (|, |) → palabra: BERG."
      },
      {
        "id": "m13_tri_23",
        "world": "dreiecke",
        "topicDe": "Neues Lösungswort-Rätsel #5",
        "questionDe": "Sammle von links nach rechts alle Dreiecke, die UNGLEICHSEITIG (allgemein) sind, bei denen also alle 3 Seiten unterschiedlich lang sind!",
        "questionEs": "Junta de izquierda a derecha todos los triángulos que son ESCALENOS (ungleichseitig / allgemein), es decir que tienen sus 3 lados de diferente medida:",
        "svgSpec": {
          "type": "triangle_puzzle_board",
          "board": "BOOT"
        },
        "options": [
          {
            "textDe": "B - O - O - T",
            "textEs": "B - O - O - T",
            "correct": true
          },
          {
            "textDe": "B - A - L - T",
            "textEs": "B - A - L - T",
            "correct": false
          },
          {
            "textDe": "A - O - N - T",
            "textEs": "A - O - N - T",
            "correct": false
          },
          {
            "textDe": "B - L - O - N",
            "textEs": "B - L - O - N",
            "correct": false
          }
        ],
        "explanationDe": "A, L und N haben gleich lange Seiten. Bei B, O, O und T sind alle drei Seiten verschieden lang → Lösungswort: BOOT!",
        "explanationEs": "A, L y N tienen lados iguales. En B, O, O y T los tres lados tienen distinta medida → palabra: BOOT."
      },
      {
        "id": "m13_tri_24",
        "world": "dreiecke",
        "topicDe": "Neues Lösungswort-Rätsel #6",
        "questionDe": "Meister-Rätsel: Welche Dreiecke auf der Tafel sind GLEICHZEITIG rechtwinklig UND gleichschenklig?",
        "questionEs": "Acertijo maestro: ¿Cuáles triángulos del tablero son AL MISMO TIEMPO rectángulos (rechtwinklig) E isósceles (gleichschenklig)?",
        "svgSpec": {
          "type": "triangle_puzzle_board",
          "board": "TURM"
        },
        "options": [
          {
            "textDe": "T - U - R - M",
            "textEs": "T - U - R - M",
            "correct": true
          },
          {
            "textDe": "T - E - R - S",
            "textEs": "T - E - R - S",
            "correct": false
          },
          {
            "textDe": "E - U - K - M",
            "textEs": "E - U - K - M",
            "correct": false
          },
          {
            "textDe": "T - U - K - S",
            "textEs": "T - U - K - S",
            "correct": false
          }
        ],
        "explanationDe": "E ist zwar rechtwinklig, aber ungleichseitig; K und S haben keinen rechten Winkel. Nur T, U, R und M haben sowohl 90° als auch 2 gleiche Schenkel → TURM!",
        "explanationEs": "E es rectángulo pero escaleno; K y S no tienen ángulo recto. Solo T, U, R y M tienen ángulo de 90° y 2 lados iguales → palabra: TURM."
      },
      {
        "id": "m13_tri_25",
        "world": "dreiecke",
        "topicDe": "Dreiecke · Winkel-Logik",
        "questionDe": "Wie viele stumpfe Winkel (> 90°) kann ein einziges Dreieck HÖCHSTENS haben?",
        "questionEs": "¿Cuántos ángulos obtusos (> 90°) puede tener COMO MÁXIMO un solo triángulo?",
        "svgSpec": {
          "type": "triangle_clean",
          "kind": "scalene_obtuse"
        },
        "options": [
          {
            "textDe": "Höchstens 1 stumpfen Winkel",
            "textEs": "Como máximo 1 ángulo obtuso",
            "correct": true
          },
          {
            "textDe": "Bis zu 2 stumpfe Winkel",
            "textEs": "Hasta 2 ángulos obtusos",
            "correct": false
          },
          {
            "textDe": "Alle 3 Winkel können stumpf sein",
            "textEs": "Los 3 ángulos pueden ser obtusos",
            "correct": false
          },
          {
            "textDe": "Gar keinen (0 stumpfe Winkel)",
            "textEs": "Ninguno (0 ángulos obtusos)",
            "correct": false
          }
        ],
        "explanationDe": "Ein Dreieck kann höchstens 1 stumpfen Winkel haben! Die anderen beiden Winkel in diesem Dreieck müssen immer spitz (< 90°) sein.",
        "explanationEs": "Un triángulo puede tener como máximo 1 ángulo obtuso; los otros dos ángulos deben ser siempre agudos (< 90°)."
      },
      {
        "id": "m13_tri_26",
        "world": "dreiecke",
        "topicDe": "Dreiecke · Winkel-Logik",
        "questionDe": "Wie viele spitze Winkel (< 90°) hat JEDES Dreieck mindestens — egal ob es spitzwinklig, rechtwinklig oder stumpfwinklig ist?",
        "questionEs": "¿Cuántos ángulos agudos (< 90°) tiene COMO MÍNIMO cualquier triángulo, sin importar si es acutángulo, rectángulo u obtusángulo?",
        "svgSpec": {
          "type": "triangle_clean",
          "kind": "scalene_right",
          "showRightAngle": true
        },
        "options": [
          {
            "textDe": "Mindestens 2 spitze Winkel",
            "textEs": "Al menos 2 ángulos agudos",
            "correct": true
          },
          {
            "textDe": "Mindestens 3 spitze Winkel",
            "textEs": "Al menos 3 ángulos agudos",
            "correct": false
          },
          {
            "textDe": "Mindestens 1 spitzen Winkel",
            "textEs": "Al menos 1 ángulo agudo",
            "correct": false
          },
          {
            "textDe": "Es kann auch 0 spitze Winkel haben",
            "textEs": "Puede tener 0 ángulos agudos",
            "correct": false
          }
        ],
        "explanationDe": "Jedes Dreieck hat mindestens 2 spitze Winkel! Wenn der 3. Winkel auch spitz ist, heißt es spitzwinklig; ist der 3. Winkel 90°, heißt es rechtwinklig; ist er > 90°, heißt es stumpfwinklig.",
        "explanationEs": "¡Todo triángulo tiene al menos 2 ángulos agudos! El tercer ángulo define si es acutángulo (< 90°), rectángulo (= 90°) u obtusángulo (> 90°)."
      },
      {
        "id": "m13_tri_27",
        "world": "dreiecke",
        "topicDe": "Symmetrieachsen beim Dreieck",
        "questionDe": "Wie viele Symmetrieachsen (Spiegelachsen) haben ein gleichseitiges, ein gleichschenkliges und ein allgemeines (ungleichseitiges) Dreieck?",
        "questionEs": "¿Cuántos ejes de simetría (Symmetrieachsen) tienen un triángulo equilátero (gleichseitig), uno isósceles (gleichschenklig) y uno escaleno (ungleichseitig)?",
        "svgSpec": {
          "type": "triangle_clean",
          "kind": "equilateral",
          "showTicks": true
        },
        "options": [
          {
            "textDe": "Gleichseitig: 3 · Gleichschenklig: 1 · Ungleichseitig: 0",
            "textEs": "Gleichseitig: 3 · Gleichschenklig: 1 · Ungleichseitig: 0",
            "correct": true
          },
          {
            "textDe": "Gleichseitig: 1 · Gleichschenklig: 2 · Ungleichseitig: 0",
            "textEs": "Gleichseitig: 1 · Gleichschenklig: 2 · Ungleichseitig: 0",
            "correct": false
          },
          {
            "textDe": "Gleichseitig: 3 · Gleichschenklig: 2 · Ungleichseitig: 1",
            "textEs": "Gleichseitig: 3 · Gleichschenklig: 2 · Ungleichseitig: 1",
            "correct": false
          },
          {
            "textDe": "Alle Dreiecke haben immer genau 1 Symmetrieachse",
            "textEs": "Todos los triángulos tienen siempre 1 eje de simetría",
            "correct": false
          }
        ],
        "explanationDe": "Ein gleichseitiges Dreieck kann man durch jede der 3 Spitzen spiegeln (3 Achsen). Ein gleichschenkliges Dreieck hat genau 1 Symmetrieachse, und ein ungleichseitiges hat 0!",
        "explanationEs": "El triángulo equilátero tiene 3 ejes de simetría, el isósceles (no equilátero) tiene 1 eje de simetría y el escaleno tiene 0."
      },
      {
        "id": "m13_tri_28",
        "world": "dreiecke",
        "topicDe": "Dreiecke im Alltag & Geometrie",
        "questionDe": "Du schneidest ein Quadrat einmal quer entlang einer Diagonale von Ecke zu Ecke durch. Was für zwei Dreiecke entstehen dabei?",
        "questionEs": "Cortas un cuadrado en dos partes por su diagonal de esquina a esquina. ¿Qué tipo de triángulos se forman?",
        "svgSpec": {
          "type": "triangle_clean",
          "kind": "isosceles_right",
          "showTicks": false,
          "showRightAngle": false
        },
        "options": [
          {
            "textDe": "Zwei rechtwinklig-gleichschenklige Dreiecke",
            "textEs": "Zwei rechtwinklig-gleichschenklige Dreiecke",
            "correct": true
          },
          {
            "textDe": "Zwei spitzwinklig-gleichseitige Dreiecke",
            "textEs": "Zwei spitzwinklig-gleichseitige Dreiecke",
            "correct": false
          },
          {
            "textDe": "Zwei stumpfwinklig-ungleichseitige Dreiecke",
            "textEs": "Zwei stumpfwinklig-ungleichseitige Dreiecke",
            "correct": false
          },
          {
            "textDe": "Zwei rechtwinklig-ungleichseitige Dreiecke",
            "textEs": "Zwei rechtwinklig-ungleichseitige Dreiecke",
            "correct": false
          }
        ],
        "explanationDe": "Jedes der beiden Dreiecke behält eine 90°-Ecke des Quadrats (rechtwinklig) und zwei gleich lange Quadratseiten als Schenkel (gleichschenklig)!",
        "explanationEs": "Cada triángulo conserva una esquina de 90° del cuadrado (rechtwinklig) y dos lados iguales del cuadrado (gleichschenklig)."
      },
      {
        "id": "m13_vier_1",
        "world": "vierecke",
        "topicDe": "Vierecke in 3 Gruppen",
        "questionDe": "Nach welchem Merkmal werden alle Vierecke in die 3 Hauptgruppen „Parallelogramm“, „Trapez“ und „Trapezoid“ eingeteilt?",
        "questionEs": "¿Según qué criterio se clasifican todos los cuadriláteros en los 3 grupos principales «Parallelogramm», «Trapez» y «Trapezoid»?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "three_blank_groups"
        },
        "options": [
          {
            "textDe": "Parallelogramm: 2 Paar ∥ · Trapez: 1 Paar ∥ · Trapezoid: 0 Paar ∥",
            "textEs": "Parallelogramm: 2 pares ∥ · Trapez: 1 par ∥ · Trapezoid: 0 pares ∥",
            "correct": true
          },
          {
            "textDe": "Parallelogramm: 1 Paar ∥ · Trapez: 2 Paar ∥ · Trapezoid: 0 Paar ∥",
            "textEs": "Parallelogramm: 1 par ∥ · Trapez: 2 pares ∥ · Trapezoid: 0 pares ∥",
            "correct": false
          },
          {
            "textDe": "Parallelogramm: 4 rechte Winkel · Trapez: 2 rechte Winkel · Trapezoid: 0 rechte Winkel",
            "textEs": "Parallelogramm: 4 ángulos rectos · Trapez: 2 · Trapezoid: 0",
            "correct": false
          },
          {
            "textDe": "Parallelogramm: 4 Symmetrieachsen · Trapez: 2 Achsen · Trapezoid: 1 Achse",
            "textEs": "Parallelogramm: 4 ejes · Trapez: 2 ejes · Trapezoid: 1 eje",
            "correct": false
          }
        ],
        "explanationDe": "Man zählt die Paare paralleler Seiten: 2 Paar ∥ = Parallelogramm, 1 Paar ∥ = Trapez, 0 Paar ∥ (keine parallelen Seiten) = Trapezoid!",
        "explanationEs": "Se cuentan los pares de lados paralelos: 2 pares ∥ = Parallelogramm, 1 par ∥ = Trapez y 0 pares ∥ = Trapezoid."
      },
      {
        "id": "m13_vier_2",
        "world": "vierecke",
        "topicDe": "Familie der Parallelogramme",
        "questionDe": "Welche vier speziellen Vierecke gehören alle zusammen zur Hauptgruppe „Parallelogramm“?",
        "questionEs": "¿Cuáles cuatro cuadriláteros pertenecen todos juntos al grupo principal «Parallelogramm»?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "four_parallelograms_unlabeled"
        },
        "options": [
          {
            "textDe": "Quadrat, Rechteck, Raute und Romboid",
            "textEs": "Quadrat, Rechteck, Raute y Romboid",
            "correct": true
          },
          {
            "textDe": "Quadrat, Rechteck, Trapez und Drachen",
            "textEs": "Quadrat, Rechteck, Trapez y Drachen",
            "correct": false
          },
          {
            "textDe": "Raute, Drachen, Romboid und Trapezoid",
            "textEs": "Raute, Drachen, Romboid y Trapezoid",
            "correct": false
          },
          {
            "textDe": "Quadrat, Raute, Drachen und gleichschenkliges Trapez",
            "textEs": "Quadrat, Raute, Drachen y gleichschenkliges Trapez",
            "correct": false
          }
        ],
        "explanationDe": "Bei Quadrat, Rechteck, Raute und Romboid sind jeweils die gegenüberliegenden Seiten parallel (2 Paar ∥ Seiten).",
        "explanationEs": "En Quadrat, Rechteck, Raute y Romboid ambos pares de lados opuestos son paralelos (2 pares ∥)."
      },
      {
        "id": "m13_vier_3",
        "world": "vierecke",
        "topicDe": "Vierecke bestimmen",
        "questionDe": "Betrachte dieses Viereck. Es steht auf einer Spitze, alle 4 Seiten sind gleich lang und alle 4 Innenwinkel betragen 90°. Wie heißt es?",
        "questionEs": "Observa este cuadrilátero apoyado en un vértice: sus 4 lados miden lo mismo y sus 4 ángulos interiores miden 90°. ¿Cómo se llama?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "quadrat_rotated"
        },
        "options": [
          {
            "textDe": "Das Quadrat",
            "textEs": "Das Quadrat",
            "correct": true
          },
          {
            "textDe": "Die Raute",
            "textEs": "Die Raute",
            "correct": false
          },
          {
            "textDe": "Der Drachen (Deltoid)",
            "textEs": "Der Drachen (Deltoid)",
            "correct": false
          },
          {
            "textDe": "Das Trapezoid",
            "textEs": "Das Trapezoid",
            "correct": false
          }
        ],
        "explanationDe": "Ein Viereck mit 4 gleich langen Seiten UND 4 rechten Winkeln (90°) ist immer ein Quadrat — auch wenn es um 45° gedreht ist!",
        "explanationEs": "Un cuadrilátero con 4 lados iguales Y 4 ángulos rectos (90°) es siempre un Quadrat, aunque esté girado 45°."
      },
      {
        "id": "m13_vier_4",
        "world": "vierecke",
        "topicDe": "Vierecke bestimmen",
        "questionDe": "Dieses Viereck hat 4 gleich lange Seiten, 2 spitze Winkel und 2 stumpfe Winkel. Wie heißt es?",
        "questionEs": "Este cuadrilátero tiene 4 lados iguales, 2 ángulos agudos y 2 ángulos obtusos. ¿Cómo se llama en alemán?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "raute"
        },
        "options": [
          {
            "textDe": "Die Raute",
            "textEs": "Die Raute",
            "correct": true
          },
          {
            "textDe": "Das Quadrat",
            "textEs": "Das Quadrat",
            "correct": false
          },
          {
            "textDe": "Der Drachen",
            "textEs": "Der Drachen",
            "correct": false
          },
          {
            "textDe": "Das Rechteck",
            "textEs": "Das Rechteck",
            "correct": false
          }
        ],
        "explanationDe": "4 gleich lange Seiten ohne rechte Winkel (2 spitze + 2 stumpfe Winkel) = die Raute!",
        "explanationEs": "4 lados iguales sin ángulos rectos (2 agudos + 2 obtusos) = die Raute (rombo)."
      },
      {
        "id": "m13_vier_5",
        "world": "vierecke",
        "topicDe": "Vierecke bestimmen (Schräge Lage)",
        "questionDe": "Schau dir dieses schräg liegende Viereck genau an: Gegenüberliegende Seiten sind gleich lang und parallel zueinander, aber es hat keinen rechten Winkel. Wie heißt es?",
        "questionEs": "Mira con atención este cuadrilátero inclinado: sus lados opuestos tienen igual medida y son paralelos entre sí, pero no tiene ángulos rectos. ¿Cómo se llama?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "romboid_steep_1f"
        },
        "options": [
          {
            "textDe": "Das Romboid",
            "textEs": "Das Romboid",
            "correct": true
          },
          {
            "textDe": "Das Trapezoid",
            "textEs": "Das Trapezoid",
            "correct": false
          },
          {
            "textDe": "Das Trapez",
            "textEs": "Das Trapez",
            "correct": false
          },
          {
            "textDe": "Der Drachen",
            "textEs": "Der Drachen",
            "correct": false
          }
        ],
        "explanationDe": "Auch wenn es stark gekippt ist: Da beide gegenüberliegenden Seitenpaare parallel sind (2 Paar ∥) und Nachbarseiten verschieden lang sind, ist es ein Romboid!",
        "explanationEs": "Aunque esté muy inclinado, como ambos pares de lados opuestos son paralelos (2 pares ∥) y los lados vecinos son distintos, es un Romboid."
      },
      {
        "id": "m13_vier_6",
        "world": "vierecke",
        "topicDe": "Rechtwinkliges Trapez",
        "questionDe": "Untersuche dieses Viereck: Wie viele Paare paralleler Seiten und wie viele rechte Winkel (90°) besitzt es?",
        "questionEs": "Examina este cuadrilátero: ¿cuántos pares de lados paralelos y cuántos ángulos rectos (90°) tiene?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "trapez_recht_left"
        },
        "options": [
          {
            "textDe": "1 Paar parallele Seiten und 2 rechte Winkel",
            "textEs": "1 par de lados paralelos y 2 ángulos rectos",
            "correct": true
          },
          {
            "textDe": "2 Paar parallele Seiten und 1 rechter Winkel",
            "textEs": "2 pares de lados paralelos y 1 ángulo recto",
            "correct": false
          },
          {
            "textDe": "1 Paar parallele Seiten und 1 rechter Winkel",
            "textEs": "1 par de lados paralelos y 1 ángulo recto",
            "correct": false
          },
          {
            "textDe": "2 Paar parallele Seiten und 2 rechte Winkel",
            "textEs": "2 pares de lados paralelos y 2 ángulos rectos",
            "correct": false
          }
        ],
        "explanationDe": "Es ist ein rechtwinkliges Trapez: Oben und unten sind parallel (1 Paar ∥), und die linke Wand steht sowohl oben als auch unten im 90°-Winkel (2 rechte Winkel)!",
        "explanationEs": "Es un rechtwinkliges Trapez: tiene 1 par de lados paralelos y SIEMPRE 2 ángulos rectos (arriba y abajo en el lado perpendicular)."
      },
      {
        "id": "m13_vier_7",
        "world": "vierecke",
        "topicDe": "Gedrehtes rechtwinkliges Trapez",
        "questionDe": "Dieses Viereck wurde gedreht, sodass die parallelen Seiten links und rechts senkrecht verlaufen. Wie heißt dieses spezielle Viereck?",
        "questionEs": "Este cuadrilátero está girado de modo que sus lados paralelos van verticales a la izquierda y a la derecha, y la base forma 90° con ambos. ¿Cómo se llama?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "trapez_recht_vertical"
        },
        "options": [
          {
            "textDe": "Rechtwinkliges Trapez",
            "textEs": "Rechtwinkliges Trapez",
            "correct": true
          },
          {
            "textDe": "Gleichschenkliges Trapez",
            "textEs": "Gleichschenkliges Trapez",
            "correct": false
          },
          {
            "textDe": "Romboid",
            "textEs": "Romboid",
            "correct": false
          },
          {
            "textDe": "Rechteck",
            "textEs": "Rechteck",
            "correct": false
          }
        ],
        "explanationDe": "Links und rechts sind parallel (1 Paar ∥) und unten sind 2 rechte Winkel (90°) → ein gedrehtes rechtwinkliges Trapez!",
        "explanationEs": "Los lados izquierdo y derecho son paralelos (1 par ∥) y abajo hay 2 ángulos rectos → rechtwinkliges Trapez."
      },
      {
        "id": "m13_vier_8",
        "world": "vierecke",
        "topicDe": "Gleichschenkliges Trapez",
        "questionDe": "Bei diesem Trapez sind die linke und die rechte schräge Seite gleich lang. Welche Eigenschaften treffen auf dieses Viereck zu?",
        "questionEs": "En este trapecio los lados inclinados izquierdo y derecho miden lo mismo. ¿Qué propiedades cumple?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "trapez_iso"
        },
        "options": [
          {
            "textDe": "1 Paar parallele Seiten, 0 rechte Winkel, 1 Symmetrieachse",
            "textEs": "1 par de lados paralelos, 0 ángulos rectos, 1 eje de simetría",
            "correct": true
          },
          {
            "textDe": "2 Paar parallele Seiten, 0 rechte Winkel, 2 Symmetrieachsen",
            "textEs": "2 pares de lados paralelos, 0 ángulos rectos, 2 ejes de simetría",
            "correct": false
          },
          {
            "textDe": "1 Paar parallele Seiten, 2 rechte Winkel, 2 Symmetrieachsen",
            "textEs": "1 par de lados paralelos, 2 ángulos rectos, 2 ejes de simetría",
            "correct": false
          },
          {
            "textDe": "0 Paar parallele Seiten, 0 rechte Winkel, 1 Symmetrieachse",
            "textEs": "0 pares de lados paralelos, 0 ángulos rectos, 1 eje de simetría",
            "correct": false
          }
        ],
        "explanationDe": "Das gleichschenklige Trapez hat 1 Paar parallele Seiten (oben/unten), 0 rechte Winkel (2 spitze + 2 stumpfe) und genau 1 senkrechte Symmetrieachse durch die Mitte!",
        "explanationEs": "El trapecio isósceles (gleichschenkliges Trapez) tiene 1 par de lados paralelos, 0 ángulos rectos y 1 eje de simetría."
      },
      {
        "id": "m13_vier_9",
        "world": "vierecke",
        "topicDe": "Ungleichseitiges Trapez",
        "questionDe": "Betrachte dieses Trapez: Alle 4 Seiten sind unterschiedlich lang und kein Winkel ist 90°. Wie heißt es und wie viele Symmetrieachsen hat es?",
        "questionEs": "Observa este trapecio: sus 4 lados tienen distinta medida y ningún ángulo mide 90°. ¿Cómo se llama y cuántos ejes de simetría tiene?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "trapez_scalene"
        },
        "options": [
          {
            "textDe": "Ungleichseitiges Trapez · 0 Symmetrieachsen",
            "textEs": "Ungleichseitiges Trapez · 0 ejes de simetría",
            "correct": true
          },
          {
            "textDe": "Gleichschenkliges Trapez · 1 Symmetrieachse",
            "textEs": "Gleichschenkliges Trapez · 1 eje de simetría",
            "correct": false
          },
          {
            "textDe": "Rechtwinkliges Trapez · 1 Symmetrieachse",
            "textEs": "Rechtwinkliges Trapez · 1 eje de simetría",
            "correct": false
          },
          {
            "textDe": "Trapezoid · 2 Symmetrieachsen",
            "textEs": "Trapezoid · 2 ejes de simetría",
            "correct": false
          }
        ],
        "explanationDe": "Es hat 1 Paar parallele Seiten, aber verschieden lange Schenkel → ein ungleichseitiges (allgemeines) Trapez mit 0 Symmetrieachsen!",
        "explanationEs": "Tiene 1 par de lados paralelos pero todos sus lados son distintos → ungleichseitiges Trapez con 0 ejes de simetría."
      },
      {
        "id": "m13_vier_10",
        "world": "vierecke",
        "topicDe": "Drachen (Deltoid) vs. Raute",
        "questionDe": "Worin unterscheidet sich ein Drachen (Deltoid) von einer Raute?",
        "questionEs": "¿En qué se diferencia un Drachen (Deltoid / cometa) de una Raute (rombo)?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "drachen_vertical"
        },
        "options": [
          {
            "textDe": "Drachen: 0 Paar ∥ und 1 Achse · Raute: 2 Paar ∥ und 2 Achsen",
            "textEs": "Drachen: 0 pares ∥ y 1 eje · Raute: 2 pares ∥ y 2 ejes",
            "correct": true
          },
          {
            "textDe": "Drachen: 2 Paar ∥ und 2 Achsen · Raute: 0 Paar ∥ und 1 Achse",
            "textEs": "Drachen: 2 pares ∥ y 2 ejes · Raute: 0 pares ∥ y 1 eje",
            "correct": false
          },
          {
            "textDe": "Drachen: 1 Paar ∥ und 2 Achsen · Raute: 2 Paar ∥ und 4 Achsen",
            "textEs": "Drachen: 1 par ∥ y 2 ejes · Raute: 2 pares ∥ y 4 ejes",
            "correct": false
          },
          {
            "textDe": "Drachen: 0 Paar ∥ und 2 Achsen · Raute: 1 Paar ∥ und 1 Achse",
            "textEs": "Drachen: 0 pares ∥ y 2 ejes · Raute: 1 par ∥ y 1 eje",
            "correct": false
          }
        ],
        "explanationDe": "Beim Drachen sind nur je 2 Nachbarseiten gleich lang, aber gegenüberliegende Seiten sind NICHT parallel (0 Paar ∥ → Gruppe Trapezoid, 1 Symmetrieachse).",
        "explanationEs": "En el Drachen solo los lados vecinos son iguales por pares y no tiene lados paralelos (0 pares ∥ → Trapezoid, 1 eje de simetría)."
      },
      {
        "id": "m13_vier_11",
        "world": "vierecke",
        "topicDe": "Konkaves Viereck (Pfeilviereck)",
        "questionDe": "Diese Pfeilspitze hat 4 gerade Seiten, aber keine Seite ist parallel zu einer anderen. Zu welcher der 3 Vierecks-Hauptgruppen gehört sie?",
        "questionEs": "Esta punta de flecha tiene 4 lados rectos, pero ningún lado es paralelo a otro. ¿A cuál de los 3 grupos principales de cuadriláteros pertenece?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "trapezoid_concave"
        },
        "options": [
          {
            "textDe": "Zur Gruppe Trapezoid (0 Paar parallele Seiten)",
            "textEs": "Al grupo Trapezoid (0 pares de lados paralelos)",
            "correct": true
          },
          {
            "textDe": "Zur Gruppe Trapez (1 Paar parallele Seiten)",
            "textEs": "Al grupo Trapez (1 par de lados paralelos)",
            "correct": false
          },
          {
            "textDe": "Zur Gruppe Parallelogramm (2 Paar parallele Seiten)",
            "textEs": "Al grupo Parallelogramm (2 pares de lados paralelos)",
            "correct": false
          },
          {
            "textDe": "Sie ist ein Dreieck und kein Viereck",
            "textEs": "Es un triángulo y no un cuadrilátero",
            "correct": false
          }
        ],
        "explanationDe": "Sie hat 4 Ecken (3 außen + 1 innen) und 4 Seiten, von denen keine parallel sind (0 Paar ∥) → Gruppe Trapezoid!",
        "explanationEs": "Tiene 4 vértices y 4 lados sin ningún par paralelo (0 pares ∥) → ¡pertenece al grupo Trapezoid!"
      },
      {
        "id": "m13_vier_12",
        "world": "vierecke",
        "topicDe": "Symmetrieachsen zählen",
        "questionDe": "Wie viele Symmetrieachsen (Spiegelachsen) hat dieses Rechteck (das kein Quadrat ist)?",
        "questionEs": "¿Cuántos ejes de simetría (Symmetrieachsen) tiene este rectángulo (que no es un cuadrado)?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "rechteck"
        },
        "options": [
          {
            "textDe": "Genau 2 Symmetrieachsen",
            "textEs": "Exactamente 2 ejes de simetría",
            "correct": true
          },
          {
            "textDe": "Genau 4 Symmetrieachsen",
            "textEs": "Exactamente 4 ejes de simetría",
            "correct": false
          },
          {
            "textDe": "Genau 1 Symmetrieachse",
            "textEs": "Exactamente 1 eje de simetría",
            "correct": false
          },
          {
            "textDe": "0 Symmetrieachsen",
            "textEs": "0 ejes de simetría",
            "correct": false
          }
        ],
        "explanationDe": "Ein Rechteck hat genau 2 Symmetrieachsen (die waagerechte und die senkrechte Mittellinie). Die beiden Diagonalen sind beim Rechteck KEINE Symmetrieachsen!",
        "explanationEs": "Un Rechteck tiene exactamente 2 ejes de simetría (las líneas medias horizontal y vertical). ¡Sus diagonales NO son ejes de simetría!"
      },
      {
        "id": "m13_vier_13",
        "world": "vierecke",
        "topicDe": "Symmetrieachsen-Falle beim Rechteck!",
        "questionDe": "Im Rechteck ABCD ist die rote gestrichelte Linie g durch die Ecken A und C (die Diagonale) eingezeichnet. Ist g eine Symmetrieachse des Rechtecks?",
        "questionEs": "En el rectángulo ABCD se trazó la línea roja punteada g por las esquinas A y C (la diagonal). ¿Es g un eje de simetría del rectángulo?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "rechteck_diagonal_trap"
        },
        "options": [
          {
            "textDe": "Nein, beim Falten an der Diagonale decken sich die Ecken B und D nicht",
            "textEs": "No, al doblar por la diagonal las esquinas B y D no coinciden",
            "correct": true
          },
          {
            "textDe": "Ja, jede Diagonale im Rechteck ist eine Symmetrieachse",
            "textEs": "Sí, toda diagonal de un rectángulo es eje de simetría",
            "correct": false
          },
          {
            "textDe": "Ja, deshalb hat das Rechteck 4 Symmetrieachsen wie das Quadrat",
            "textEs": "Sí, por eso el rectángulo tiene 4 ejes como el cuadrado",
            "correct": false
          },
          {
            "textDe": "Nein, weil ein Rechteck überhaupt keine Symmetrieachse hat",
            "textEs": "No, porque un rectángulo no tiene ningún eje de simetría",
            "correct": false
          }
        ],
        "explanationDe": "Klassische Prüfungsfalle! Faltet man ein längliches Rechteck entlang der Diagonale, ragt die Ecke B auf der anderen Seite an D vorbei. Nur die 2 Mittellinien sind Symmetrieachsen!",
        "explanationEs": "¡Trampa clásica de prueba! Si doblas un rectángulo por su diagonal, las esquinas B y D no calzan. Solo sus 2 líneas medias son ejes de simetría."
      },
      {
        "id": "m13_vier_14",
        "world": "vierecke",
        "topicDe": "Symmetrieachsen bei der Raute",
        "questionDe": "Welche Linien sind bei einer Raute (die kein Quadrat ist) die echten Symmetrieachsen?",
        "questionEs": "¿Cuáles líneas son los verdaderos ejes de simetría en un rombo (Raute que no es cuadrado)?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "raute"
        },
        "options": [
          {
            "textDe": "Genau 2 Symmetrieachsen: die beiden Diagonalen von Ecke zu Ecke",
            "textEs": "Exactamente 2 ejes: las dos diagonales de esquina a esquina",
            "correct": true
          },
          {
            "textDe": "Genau 2 Symmetrieachsen: die Verbindungen der Seitenmitten",
            "textEs": "Exactamente 2 ejes: las uniones de los puntos medios de los lados",
            "correct": false
          },
          {
            "textDe": "Genau 4 Symmetrieachsen: 2 Diagonalen und 2 Mittellinien",
            "textEs": "Exactamente 4 ejes: 2 diagonales y 2 líneas medias",
            "correct": false
          },
          {
            "textDe": "0 Symmetrieachsen, weil die Raute keine rechten Winkel hat",
            "textEs": "0 ejes de simetría, porque el rombo no tiene ángulos rectos",
            "correct": false
          }
        ],
        "explanationDe": "Bei der Raute sind genau die 2 Diagonalen (von Spitze zu Spitze) die Symmetrieachsen!",
        "explanationEs": "En la Raute los 2 ejes de simetría son exactamente sus dos diagonales (de vértice a vértice)."
      },
      {
        "id": "m13_vier_15",
        "world": "vierecke",
        "topicDe": "Symmetrieachsen beim Romboid",
        "questionDe": "Wie viele Symmetrieachsen hat ein allgemeines Parallelogramm (Romboid)?",
        "questionEs": "¿Cuántos ejes de simetría (Symmetrieachsen) tiene un paralelogramo general (Romboid)?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "romboid"
        },
        "options": [
          {
            "textDe": "0 Symmetrieachsen",
            "textEs": "0 ejes de simetría",
            "correct": true
          },
          {
            "textDe": "2 Symmetrieachsen",
            "textEs": "2 ejes de simetría",
            "correct": false
          },
          {
            "textDe": "1 Symmetrieachse",
            "textEs": "1 eje de simetría",
            "correct": false
          },
          {
            "textDe": "4 Symmetrieachsen",
            "textEs": "4 ejes de simetría",
            "correct": false
          }
        ],
        "explanationDe": "Ein Romboid ist schräg verschoben und hat verschieden lange Nachbarseiten: Egal wo man es faltet, die Hälften decken sich nie → 0 Symmetrieachsen!",
        "explanationEs": "Un Romboid está inclinado y sus lados vecinos miden distinto: no importa por dónde lo dobles, nunca calza → ¡0 ejes de simetría!"
      },
      {
        "id": "m13_vier_16",
        "world": "vierecke",
        "topicDe": "Symmetrieachsen vergleichen",
        "questionDe": "Welche der vier Figuren A, B, C oder D hat GENAU 1 Symmetrieachse?",
        "questionEs": "¿Cuál de las cuatro figuras A, B, C o D tiene EXACTAMENTE 1 eje de simetría?",
        "svgSpec": {
          "type": "figures_4_grid",
          "variant": "which_has_1_axis"
        },
        "options": [
          {
            "textDe": "Figur C",
            "textEs": "La figura C",
            "correct": true
          },
          {
            "textDe": "Figur A",
            "textEs": "La figura A",
            "correct": false
          },
          {
            "textDe": "Figur B",
            "textEs": "La figura B",
            "correct": false
          },
          {
            "textDe": "Figur D",
            "textEs": "La figura D",
            "correct": false
          }
        ],
        "explanationDe": "Figur A (Romboid) hat 0 Achsen, Figur B (Rechteck) hat 2 Achsen, Figur C (Drachen) hat genau 1 Achse und Figur D (Quadrat) hat 4 Achsen!",
        "explanationEs": "A (Romboid) tiene 0 ejes, B (Rechteck) tiene 2 ejes, C (Drachen) tiene exactamente 1 eje y D (Quadrat) tiene 4 ejes."
      },
      {
        "id": "m13_vier_17",
        "world": "vierecke",
        "topicDe": "Romboid unter Figuren erkennen",
        "questionDe": "Welche der vier Figuren A, B, C oder D ist ein Romboid?",
        "questionEs": "¿Cuál de las cuatro figuras A, B, C o D es un Romboid?",
        "svgSpec": {
          "type": "figures_4_grid",
          "variant": "which_is_romboid"
        },
        "options": [
          {
            "textDe": "Figur C",
            "textEs": "La figura C",
            "correct": true
          },
          {
            "textDe": "Figur A",
            "textEs": "La figura A",
            "correct": false
          },
          {
            "textDe": "Figur B",
            "textEs": "La figura B",
            "correct": false
          },
          {
            "textDe": "Figur D",
            "textEs": "La figura D",
            "correct": false
          }
        ],
        "explanationDe": "Figur A ist ein gedrehtes Quadrat, Figur B eine Raute (alle 4 Seiten gleich lang), Figur C ein Romboid (2 Paar ∥, Nachbarseiten verschieden lang) und Figur D ein Trapez.",
        "explanationEs": "A es un Quadrat girado, B una Raute, C un Romboid (2 pares ∥, lados vecinos distintos) y D un Trapez."
      },
      {
        "id": "m13_vier_18",
        "world": "vierecke",
        "topicDe": "Vierecks-Rätsel: Wer bin ich? #1",
        "questionDe": "„Ich bin ein Viereck. Ich habe 2 Paar parallele Seiten, 2 Symmetrieachsen und 4 rechte Winkel (90°).“ Welches Viereck bin ich?",
        "questionEs": "«Soy un cuadrilátero. Tengo 2 pares de lados paralelos, 2 ejes de simetría y 4 ángulos rectos (90°)». ¿Qué cuadrilátero soy?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "mystery_box"
        },
        "options": [
          {
            "textDe": "Das Rechteck",
            "textEs": "Das Rechteck",
            "correct": true
          },
          {
            "textDe": "Das Quadrat",
            "textEs": "Das Quadrat",
            "correct": false
          },
          {
            "textDe": "Die Raute",
            "textEs": "Die Raute",
            "correct": false
          },
          {
            "textDe": "Das Romboid",
            "textEs": "Das Romboid",
            "correct": false
          }
        ],
        "explanationDe": "4 rechte Winkel haben nur Quadrat und Rechteck. Da es genau 2 Symmetrieachsen hat (und nicht 4), ist es das Rechteck!",
        "explanationEs": "Solo el Quadrat y el Rechteck tienen 4 ángulos rectos. Como tiene exactamente 2 ejes de simetría (y no 4), es el Rechteck."
      },
      {
        "id": "m13_vier_19",
        "world": "vierecke",
        "topicDe": "Vierecks-Rätsel: Wer bin ich? #2",
        "questionDe": "„Ich habe 2 Paar parallele Seiten und 2 Symmetrieachsen, aber KEINEN einzigen rechten Winkel (0 × 90°).“ Wer bin ich?",
        "questionEs": "«Tengo 2 pares de lados paralelos y 2 ejes de simetría, pero NINGÚN ángulo recto (0 × 90°)». ¿Quién soy?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "mystery_box"
        },
        "options": [
          {
            "textDe": "Die Raute",
            "textEs": "Die Raute",
            "correct": true
          },
          {
            "textDe": "Das Romboid",
            "textEs": "Das Romboid",
            "correct": false
          },
          {
            "textDe": "Der Drachen",
            "textEs": "Der Drachen",
            "correct": false
          },
          {
            "textDe": "Das Quadrat",
            "textEs": "Das Quadrat",
            "correct": false
          }
        ],
        "explanationDe": "2 Paar parallele Seiten ohne 90° haben Raute und Romboid. Da das Romboid 0 Symmetrieachsen hat und die Raute 2 Symmetrieachsen, ist es die Raute!",
        "explanationEs": "Con 2 pares paralelos y sin ángulos de 90° están la Raute y el Romboid. Como tiene 2 ejes de simetría, es la Raute."
      },
      {
        "id": "m13_vier_20",
        "world": "vierecke",
        "topicDe": "Vierecks-Rätsel: Wer bin ich? #3",
        "questionDe": "„Ich habe 2 Paar parallele Seiten, 0 rechte Winkel und 0 Symmetrieachsen.“ Welches Viereck bin ich?",
        "questionEs": "«Tengo 2 pares de lados paralelos, 0 ángulos rectos y 0 ejes de simetría». ¿Qué cuadrilátero soy?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "mystery_box"
        },
        "options": [
          {
            "textDe": "Das Romboid",
            "textEs": "Das Romboid",
            "correct": true
          },
          {
            "textDe": "Die Raute",
            "textEs": "Die Raute",
            "correct": false
          },
          {
            "textDe": "Das Trapezoid",
            "textEs": "Das Trapezoid",
            "correct": false
          },
          {
            "textDe": "Das ungleichseitige Trapez",
            "textEs": "Das ungleichseitige Trapez",
            "correct": false
          }
        ],
        "explanationDe": "2 Paar parallele Seiten + 0 rechte Winkel + 0 Symmetrieachsen = das Romboid!",
        "explanationEs": "2 pares de lados paralelos + 0 ángulos rectos + 0 ejes de simetría = das Romboid."
      },
      {
        "id": "m13_vier_21",
        "world": "vierecke",
        "topicDe": "Vierecks-Rätsel: Wer bin ich? #4",
        "questionDe": "„Ich habe genau 1 Paar parallele Seiten, 1 Symmetrieachse und keinen rechten Winkel.“ Wer bin ich?",
        "questionEs": "«Tengo exactamente 1 par de lados paralelos, 1 eje de simetría y ningún ángulo recto». ¿Quién soy?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "mystery_box"
        },
        "options": [
          {
            "textDe": "Das gleichschenklige Trapez",
            "textEs": "Das gleichschenklige Trapez",
            "correct": true
          },
          {
            "textDe": "Das rechtwinklige Trapez",
            "textEs": "Das rechtwinklige Trapez",
            "correct": false
          },
          {
            "textDe": "Der Drachen (Deltoid)",
            "textEs": "Der Drachen (Deltoid)",
            "correct": false
          },
          {
            "textDe": "Die Raute",
            "textEs": "Die Raute",
            "correct": false
          }
        ],
        "explanationDe": "1 Paar parallele Seiten = Trapez. Da es 1 Symmetrieachse und 0 rechte Winkel hat, ist es das gleichschenklige Trapez!",
        "explanationEs": "1 par de lados paralelos = Trapez. Como tiene 1 eje de simetría y 0 ángulos rectos, es el gleichschenkliges Trapez."
      },
      {
        "id": "m13_vier_22",
        "world": "vierecke",
        "topicDe": "Vierecks-Rätsel: Wer bin ich? #5",
        "questionDe": "„Ich habe 0 Paar parallele Seiten, genau 1 Symmetrieachse und zwei Paare gleich langer Nachbarseiten.“ Wer bin ich?",
        "questionEs": "«Tengo 0 pares de lados paralelos, exactamente 1 eje de simetría y dos pares de lados vecinos de igual medida». ¿Quién soy?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "mystery_box"
        },
        "options": [
          {
            "textDe": "Der Drachen (Deltoid)",
            "textEs": "Der Drachen (Deltoid)",
            "correct": true
          },
          {
            "textDe": "Die Raute",
            "textEs": "Die Raute",
            "correct": false
          },
          {
            "textDe": "Das gleichschenklige Trapez",
            "textEs": "Das gleichschenklige Trapez",
            "correct": false
          },
          {
            "textDe": "Das Romboid",
            "textEs": "Das Romboid",
            "correct": false
          }
        ],
        "explanationDe": "0 Paar parallele Seiten (Gruppe Trapezoid), 1 Symmetrieachse und 2 Paar gleich lange Nachbarseiten = der Drachen (Deltoid)!",
        "explanationEs": "0 pares de lados paralelos (Trapezoid), 1 eje de simetría y 2 pares de lados contiguos iguales = der Drachen."
      },
      {
        "id": "m13_vier_23",
        "world": "vierecke",
        "topicDe": "Vierecks-Rätsel: Wer bin ich? #6",
        "questionDe": "„Ich habe genau 1 Paar parallele Seiten, 0 Symmetrieachsen und genau 2 rechte Winkel (90°).“ Wer bin ich?",
        "questionEs": "«Tengo exactamente 1 par de lados paralelos, 0 ejes de simetría y exactamente 2 ángulos rectos (90°)». ¿Quién soy?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "mystery_box"
        },
        "options": [
          {
            "textDe": "Das rechtwinklige Trapez",
            "textEs": "Das rechtwinklige Trapez",
            "correct": true
          },
          {
            "textDe": "Das gleichschenklige Trapez",
            "textEs": "Das gleichschenklige Trapez",
            "correct": false
          },
          {
            "textDe": "Das Rechteck",
            "textEs": "Das Rechteck",
            "correct": false
          },
          {
            "textDe": "Das ungleichseitige Trapez",
            "textEs": "Das ungleichseitige Trapez",
            "correct": false
          }
        ],
        "explanationDe": "1 Paar parallele Seiten + 2 rechte Winkel + 0 Symmetrieachsen = das rechtwinklige Trapez!",
        "explanationEs": "1 par de lados paralelos + 2 ángulos rectos + 0 ejes de simetría = das rechtwinklige Trapez."
      },
      {
        "id": "m13_vier_24",
        "world": "vierecke",
        "topicDe": "Denkaufgabe: 3 rechte Winkel im Viereck?",
        "questionDe": "Paul behauptet: „Ich kann ein Viereck zeichnen, das GENAU 3 rechte Winkel (90°) und 1 spitzen Winkel hat.“ Hat Paul recht?",
        "questionEs": "Paul afirma: «Puedo dibujar un cuadrilátero que tenga EXACTAMENTE 3 ángulos rectos (90°) y 1 ángulo agudo». ¿Tiene razón Paul?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "rechteck"
        },
        "options": [
          {
            "textDe": "Nein, der 4. Winkel ist dann automatisch auch 90°",
            "textEs": "No, el 4° ángulo mide automáticamente 90° también",
            "correct": true
          },
          {
            "textDe": "Ja, das ist bei jedem rechtwinkligen Trapez so",
            "textEs": "Sí, eso ocurre en todo trapecio rectángulo",
            "correct": false
          },
          {
            "textDe": "Ja, das ist bei einem Drachenviereck möglich",
            "textEs": "Sí, eso es posible en un cometa (Drachen)",
            "correct": false
          },
          {
            "textDe": "Nein, ein Viereck hat höchstens 2 rechte Winkel",
            "textEs": "No, un cuadrilátero tiene como máximo 2 ángulos rectos",
            "correct": false
          }
        ],
        "explanationDe": "Wenn in einem Viereck 3 Ecken jeweils 90° haben, stehen die Seiten paarweise parallel und senkrecht aufeinander — die 4. Ecke muss dann zwingend auch 90° sein!",
        "explanationEs": "Si 3 esquinas de un cuadrilátero miden 90°, los lados quedan paralelos y perpendiculares, por lo que la 4ª esquina mide obligatoriamente 90° (4 ángulos rectos)."
      },
      {
        "id": "m13_vier_25",
        "world": "vierecke",
        "topicDe": "Denkaufgabe: Gerade/Ungerade Anzahl",
        "questionDe": "Lena und Max untersuchen ein rechtwinkliges Trapez. Lena sagt: „Es hat eine GERADE Anzahl rechter Winkel.“ Max sagt: „Es hat eine UNGERADE Anzahl rechter Winkel.“ Wer hat recht?",
        "questionEs": "Lena y Max observan un rechtwinkliges Trapez. Lena dice: «Tiene una cantidad PAR (gerade) de ángulos rectos». Max dice: «Tiene una cantidad IMPAR (ungerade)». ¿Quién tiene razón?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "trapez_recht_left"
        },
        "options": [
          {
            "textDe": "Lena hat recht, denn es hat genau 2 rechte Winkel",
            "textEs": "Lena tiene razón, pues tiene exactamente 2 ángulos rectos",
            "correct": true
          },
          {
            "textDe": "Max hat recht, denn es hat genau 1 rechten Winkel",
            "textEs": "Max tiene razón, pues tiene exactamente 1 ángulo recto",
            "correct": false
          },
          {
            "textDe": "Max hat recht, denn es hat genau 3 rechte Winkel",
            "textEs": "Max tiene razón, pues tiene exactamente 3 ángulos rectos",
            "correct": false
          },
          {
            "textDe": "Lena hat recht, denn es hat genau 4 rechte Winkel",
            "textEs": "Lena tiene razón, pues tiene exactamente 4 ángulos rectos",
            "correct": false
          }
        ],
        "explanationDe": "Ein rechtwinkliges Trapez hat immer genau 2 rechte Winkel (90°), und die Zahl 2 ist eine gerade Zahl (par) → Lena hat recht!",
        "explanationEs": "Un rechtwinkliges Trapez tiene siempre 2 ángulos rectos (90°), y el 2 es un número par (gerade Zahl) → Lena tiene razón."
      },
      {
        "id": "m13_vier_26",
        "world": "vierecke",
        "topicDe": "Vierecke vergleichen: Rechteck vs. Romboid",
        "questionDe": "Was haben ein Rechteck und ein Romboid IMMER gemeinsam?",
        "questionEs": "¿Qué tienen SIEMPRE en común un Rechteck (rectángulo) y un Romboid (romboide)?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "romboid"
        },
        "options": [
          {
            "textDe": "Beide haben 2 Paar parallele und gleich lange Gegenseiten",
            "textEs": "Ambos tienen 2 pares de lados opuestos paralelos e iguales",
            "correct": true
          },
          {
            "textDe": "Beide haben 4 rechte Winkel (90°) und 2 Symmetrieachsen",
            "textEs": "Ambos tienen 4 ángulos rectos (90°) y 2 ejes de simetría",
            "correct": false
          },
          {
            "textDe": "Beide haben 4 gleich lange Seiten und 0 Symmetrieachsen",
            "textEs": "Ambos tienen 4 lados iguales y 0 ejes de simetría",
            "correct": false
          },
          {
            "textDe": "Beide gehören zu den Trapezen mit 1 Paar paralleler Seiten",
            "textEs": "Ambos pertenecen a los trapecios con 1 par de lados paralelos",
            "correct": false
          }
        ],
        "explanationDe": "Sowohl Rechteck als auch Romboid sind Parallelogramme: Gegenüberliegende Seiten sind parallel (2 Paar ∥) und gleich lang! (Aber nur das Rechteck hat 90°-Winkel und 2 Symmetrieachsen).",
        "explanationEs": "Tanto el Rechteck como el Romboid son paralelogramos: tienen 2 pares de lados opuestos paralelos e iguales."
      },
      {
        "id": "m13_vier_27",
        "world": "vierecke",
        "topicDe": "Vierecke · Diagonalen im Quadrat & in der Raute",
        "questionDe": "In welchem Winkel schneiden sich die beiden Diagonalen in einem Quadrat, einer Raute und einem Drachen (Deltoid)?",
        "questionEs": "¿En qué ángulo se cortan entre sí las dos diagonales dentro de un Quadrat, una Raute y un Drachen?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "drachen_horizontal"
        },
        "options": [
          {
            "textDe": "Immer senkrecht im 90°-Winkel (rechter Winkel ⦜)",
            "textEs": "Siempre de forma perpendicular en ángulo de 90° (⦜)",
            "correct": true
          },
          {
            "textDe": "Immer im 45°-Winkel (spitzer Winkel)",
            "textEs": "Siempre en un ángulo agudo de 45°",
            "correct": false
          },
          {
            "textDe": "Sie sind parallel und schneiden sich nie",
            "textEs": "Son paralelas y nunca se cortan",
            "correct": false
          },
          {
            "textDe": "Immer im 120°-Winkel (stumpfer Winkel)",
            "textEs": "Siempre en un ángulo obtuso de 120°",
            "correct": false
          }
        ],
        "explanationDe": "Bei Quadrat, Raute und Drachen stehen die beiden Diagonalen immer genau senkrecht (im 90°-Winkel ⦜) aufeinander!",
        "explanationEs": "En el Quadrat, la Raute y el Drachen las dos diagonales se cortan siempre formando exactamente 90° (perpendiculares)."
      },
      {
        "id": "m13_vier_28",
        "world": "vierecke",
        "topicDe": "Vierecke · Seitenlängen & Umfang",
        "questionDe": "Ein Drachen (Deltoid) hat zwei kurze Nachbarseiten von je 4 cm und zwei lange Nachbarseiten von je 9 cm. Wie groß ist sein Umfang (alle 4 Seiten zusammen)?",
        "questionEs": "Un Drachen (cometa) tiene dos lados vecinos cortos de 4 cm cada uno y dos lados vecinos largos de 9 cm cada uno. ¿Cuál es su perímetro total?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "drachen_vertical"
        },
        "options": [
          {
            "textDe": "26 cm",
            "textEs": "26 cm",
            "correct": true
          },
          {
            "textDe": "13 cm",
            "textEs": "13 cm",
            "correct": false
          },
          {
            "textDe": "36 cm",
            "textEs": "36 cm",
            "correct": false
          },
          {
            "textDe": "22 cm",
            "textEs": "22 cm",
            "correct": false
          }
        ],
        "explanationDe": "4 cm + 4 cm + 9 cm + 9 cm = 8 cm + 18 cm = 26 cm!",
        "explanationEs": "4 cm + 4 cm + 9 cm + 9 cm = 26 cm en total."
      },
      {
        "id": "m13_vier_29",
        "world": "vierecke",
        "topicDe": "Vierecke · Symmetrieachsen-Summe",
        "questionDe": "Du zählst alle Symmetrieachsen von einem Quadrat, einer Raute und einem Romboid zusammen. Welche Gesamtzahl kommt heraus?",
        "questionEs": "Sumas la cantidad de ejes de simetría de un Quadrat + una Raute + un Romboid. ¿Qué número total resulta?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "four_parallelograms_unlabeled"
        },
        "options": [
          {
            "textDe": "6 Symmetrieachsen",
            "textEs": "6 ejes de simetría",
            "correct": true
          },
          {
            "textDe": "8 Symmetrieachsen",
            "textEs": "8 ejes de simetría",
            "correct": false
          },
          {
            "textDe": "5 Symmetrieachsen",
            "textEs": "5 ejes de simetría",
            "correct": false
          },
          {
            "textDe": "7 Symmetrieachsen",
            "textEs": "7 ejes de simetría",
            "correct": false
          }
        ],
        "explanationDe": "Quadrat (4 Symmetrieachsen) + Raute (2 Symmetrieachsen) + Romboid (0 Symmetrieachsen) = 4 + 2 + 0 = 6 Symmetrieachsen!",
        "explanationEs": "Quadrat (4 ejes) + Raute (2 ejes) + Romboid (0 ejes) = 4 + 2 + 0 = 6 ejes de simetría."
      },
      {
        "id": "m13_vier_30",
        "world": "vierecke",
        "topicDe": "Vierecke · Alle Eigenschaften prüfen",
        "questionDe": "Welche der folgenden Aussagen über Vierecke ist FALSCH?",
        "questionEs": "¿Cuál de las siguientes afirmaciones sobre los cuadriláteros es FALSA?",
        "svgSpec": {
          "type": "viereck_clean",
          "kind": "three_blank_groups"
        },
        "options": [
          {
            "textDe": "Jedes Romboid hat mindestens 2 Symmetrieachsen",
            "textEs": "Todo Romboid tiene al menos 2 ejes de simetría",
            "correct": true
          },
          {
            "textDe": "Jedes Quadrat gehört zur Hauptgruppe der Parallelogramme",
            "textEs": "Todo Quadrat pertenece al grupo principal de los Parallelogramme",
            "correct": false
          },
          {
            "textDe": "Jedes rechtwinklige Trapez hat genau 2 rechte Winkel",
            "textEs": "Todo rechtwinkliges Trapez tiene exactamente 2 ángulos rectos",
            "correct": false
          },
          {
            "textDe": "Ein Drachen (Deltoid) hat 0 Paar parallele Seiten",
            "textEs": "Un Drachen (Deltoid) tiene 0 pares de lados paralelos",
            "correct": false
          }
        ],
        "explanationDe": "Die erste Aussage ist falsch: Ein allgemeines Parallelogramm (Romboid) hat 0 Symmetrieachsen! Alle anderen drei Aussagen sind komplett richtig.",
        "explanationEs": "La primera afirmación es falsa: ¡un Romboid tiene 0 ejes de simetría! Las otras tres afirmaciones son verdaderas."
      },
      {
        "id": "m13_ks_1",
        "world": "koordinaten",
        "topicDe": "Punkte im Koordinatensystem ablesen",
        "questionDe": "Lies die Koordinaten (x | y) der drei Punkte P, Q und R im Koordinatensystem ab!",
        "questionEs": "Lee las coordenadas (x | y) de los tres puntos P, Q y R en el plano cartesiano:",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 10,
          "points": [
            {
              "label": "P",
              "x": 2,
              "y": 7,
              "color": "#dc2626"
            },
            {
              "label": "Q",
              "x": 7,
              "y": 2,
              "color": "#0284c7"
            },
            {
              "label": "R",
              "x": 5,
              "y": 9,
              "color": "#16a34a"
            }
          ]
        },
        "options": [
          {
            "textDe": "P (2 | 7) · Q (7 | 2) · R (5 | 9)",
            "textEs": "P (2 | 7) · Q (7 | 2) · R (5 | 9)",
            "correct": true
          },
          {
            "textDe": "P (7 | 2) · Q (2 | 7) · R (9 | 5)",
            "textEs": "P (7 | 2) · Q (2 | 7) · R (9 | 5)",
            "correct": false
          },
          {
            "textDe": "P (2 | 6) · Q (7 | 3) · R (5 | 8)",
            "textEs": "P (2 | 6) · Q (7 | 3) · R (5 | 8)",
            "correct": false
          },
          {
            "textDe": "P (3 | 7) · Q (6 | 2) · R (9 | 5)",
            "textEs": "P (3 | 7) · Q (6 | 2) · R (9 | 5)",
            "correct": false
          }
        ],
        "explanationDe": "Immer zuerst auf der x-Achse nach rechts, dann auf der y-Achse nach oben: P(2 | 7), Q(7 | 2) und R(5 | 9).",
        "explanationEs": "Siempre primero en el eje horizontal x y luego en el eje vertical y: P(2 | 7), Q(7 | 2) y R(5 | 9)."
      },
      {
        "id": "m13_ks_2",
        "world": "koordinaten",
        "topicDe": "Punkte auf den Achsen (Null-Falle!)",
        "questionDe": "Schau dir die beiden Punkte M und N direkt auf den Achsen an. Welche Koordinaten (x | y) haben M und N?",
        "questionEs": "Observa los puntos M y N ubicados directamente sobre los ejes. ¿Qué coordenadas (x | y) tienen M y N?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 10,
          "points": [
            {
              "label": "M",
              "x": 6,
              "y": 0,
              "color": "#dc2626"
            },
            {
              "label": "N",
              "x": 0,
              "y": 8,
              "color": "#9333ea"
            }
          ]
        },
        "options": [
          {
            "textDe": "M (6 | 0) und N (0 | 8)",
            "textEs": "M (6 | 0) y N (0 | 8)",
            "correct": true
          },
          {
            "textDe": "M (0 | 6) und N (8 | 0)",
            "textEs": "M (0 | 6) y N (8 | 0)",
            "correct": false
          },
          {
            "textDe": "M (6 | 6) und N (8 | 8)",
            "textEs": "M (6 | 6) y N (8 | 8)",
            "correct": false
          },
          {
            "textDe": "M (6 | 1) und N (1 | 8)",
            "textEs": "M (6 | 1) y N (1 | 8)",
            "correct": false
          }
        ],
        "explanationDe": "M liegt auf der x-Achse bei 6 (0 nach oben → M(6 | 0)). N liegt auf der y-Achse bei 8 (0 nach rechts → N(0 | 8))!",
        "explanationEs": "M está sobre el eje x en 6 (altura 0 → M(6 | 0)), mientras que N está sobre el eje y en 8 (0 a la derecha → N(0 | 8))."
      },
      {
        "id": "m13_ks_3",
        "world": "koordinaten",
        "topicDe": "Dezimal-Koordinaten ablesen (,5)",
        "questionDe": "Auf deinen Arbeitsblättern (S. 10) liegen Punkte oft genau auf einer halben Kästchenlänge (,5). Welche Koordinaten haben A und B hier?",
        "questionEs": "En tus guías (pág. 10) los puntos a veces caen a mitad de cuadrito (,5). ¿Qué coordenadas tienen los puntos A y B aquí?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 8,
          "maxY": 8,
          "points": [
            {
              "label": "A",
              "x": 2.5,
              "y": 4,
              "color": "#0284c7"
            },
            {
              "label": "B",
              "x": 6,
              "y": 5.5,
              "color": "#16a34a"
            }
          ]
        },
        "options": [
          {
            "textDe": "A (2,5 | 4) und B (6 | 5,5)",
            "textEs": "A (2,5 | 4) y B (6 | 5,5)",
            "correct": true
          },
          {
            "textDe": "A (4 | 2,5) und B (5,5 | 6)",
            "textEs": "A (4 | 2,5) y B (5,5 | 6)",
            "correct": false
          },
          {
            "textDe": "A (3,5 | 4) und B (6 | 4,5)",
            "textEs": "A (3,5 | 4) y B (6 | 4,5)",
            "correct": false
          },
          {
            "textDe": "A (2 | 4,5) und B (6,5 | 5)",
            "textEs": "A (2 | 4,5) y B (6,5 | 5)",
            "correct": false
          }
        ],
        "explanationDe": "A liegt auf der x-Achse genau zwischen 2 und 3 bei 2,5 und auf Höhe 4 → A(2,5 | 4). B liegt bei x = 6 und zwischen 5 und 6 auf Höhe 5,5 → B(6 | 5,5)!",
        "explanationEs": "A está entre 2 y 3 en x (2,5) y en y = 4 → A(2,5 | 4). B está en x = 6 y entre 5 y 6 en y (5,5) → B(6 | 5,5)."
      },
      {
        "id": "m13_ks_4",
        "world": "koordinaten",
        "topicDe": "Vektor-Schreibweise verstehen",
        "questionDe": "Welche Bewegung im Koordinatensystem beschreibt der Vektor →(−5 | 3)?",
        "questionEs": "¿Qué desplazamiento en el plano cartesiano describe el vector →(−5 | 3)?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 8,
          "maxY": 8,
          "points": [
            {
              "label": "S",
              "x": 6,
              "y": 2,
              "color": "#0f172a"
            }
          ]
        },
        "options": [
          {
            "textDe": "5 Einheiten nach links und 3 Einheiten nach oben",
            "textEs": "5 unidades a la izquierda y 3 unidades hacia arriba",
            "correct": true
          },
          {
            "textDe": "5 Einheiten nach rechts und 3 Einheiten nach unten",
            "textEs": "5 unidades a la derecha y 3 unidades hacia abajo",
            "correct": false
          },
          {
            "textDe": "5 Einheiten nach unten und 3 Einheiten nach rechts",
            "textEs": "5 unidades hacia abajo y 3 unidades a la derecha",
            "correct": false
          },
          {
            "textDe": "5 Einheiten nach links und 3 Einheiten nach unten",
            "textEs": "5 unidades a la izquierda y 3 unidades hacia abajo",
            "correct": false
          }
        ],
        "explanationDe": "Die 1. Zahl im Vektor ist die x-Richtung (−5 = 5 links), die 2. Zahl ist die y-Richtung (+3 = 3 oben).",
        "explanationEs": "El 1er número del vector indica el movimiento horizontal (−5 = 5 izquierda) y el 2° el vertical (+3 = 3 arriba)."
      },
      {
        "id": "m13_ks_5",
        "world": "koordinaten",
        "topicDe": "Vektor-Schreibweise verstehen",
        "questionDe": "Wie schreibt man die Verschiebung „0 Einheiten nach rechts/links und 6 Einheiten nach unten“ als Vektor?",
        "questionEs": "¿Cómo se escribe el desplazamiento «0 unidades a la derecha/izquierda y 6 unidades hacia abajo» como vector?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 8,
          "maxY": 8,
          "points": [
            {
              "label": "P",
              "x": 4,
              "y": 7,
              "color": "#0284c7"
            }
          ]
        },
        "options": [
          {
            "textDe": "→(0 | −6)",
            "textEs": "→(0 | −6)",
            "correct": true
          },
          {
            "textDe": "→(−6 | 0)",
            "textEs": "→(−6 | 0)",
            "correct": false
          },
          {
            "textDe": "→(0 | 6)",
            "textEs": "→(0 | 6)",
            "correct": false
          },
          {
            "textDe": "→(6 | −6)",
            "textEs": "→(6 | −6)",
            "correct": false
          }
        ],
        "explanationDe": "0 in x-Richtung (weder rechts noch links) und 6 nach unten (−6 in y-Richtung) ergibt den Vektor →(0 | −6)!",
        "explanationEs": "0 en dirección horizontal (x) y 6 hacia abajo en dirección vertical (y = −6) se escribe →(0 | −6)."
      },
      {
        "id": "m13_ks_6",
        "world": "koordinaten",
        "topicDe": "Startpunkt + Vektor = Zielpunkt",
        "questionDe": "Du startest beim eingezeichneten Punkt A(3 | 7) und verschiebst ihn mit dem Vektor →(5 | −4). Auf welchem Zielpunkt A' landest du?",
        "questionEs": "Partes en el punto dibujado A(3 | 7) y lo trasladas con el vector →(5 | −4). ¿A qué punto final A' llegas?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 10,
          "points": [
            {
              "label": "A",
              "x": 3,
              "y": 7,
              "color": "#dc2626"
            }
          ]
        },
        "options": [
          {
            "textDe": "A' (8 | 3)",
            "textEs": "A' (8 | 3)",
            "correct": true
          },
          {
            "textDe": "A' (3 | 8)",
            "textEs": "A' (3 | 8)",
            "correct": false
          },
          {
            "textDe": "A' (−2 | 11)",
            "textEs": "A' (−2 | 11)",
            "correct": false
          },
          {
            "textDe": "A' (8 | 11)",
            "textEs": "A' (8 | 11)",
            "correct": false
          }
        ],
        "explanationDe": "Rechne x = 3 + 5 = 8 (5 nach rechts) und y = 7 − 4 = 3 (4 nach unten) → Zielpunkt A'(8 | 3)!",
        "explanationEs": "Calculas x = 3 + 5 = 8 (5 a la derecha) e y = 7 − 4 = 3 (4 hacia abajo) → punto final A'(8 | 3)."
      },
      {
        "id": "m13_ks_7",
        "world": "koordinaten",
        "topicDe": "Startpunkt + Vektor = Zielpunkt",
        "questionDe": "Lies zuerst die Koordinaten des eingezeichneten Punktes S im Gitter ab. Verschiebe S dann mit dem Vektor →(−4 | 3). Wo liegt der Bildpunkt S'?",
        "questionEs": "Primero lee las coordenadas del punto S en la cuadrícula. Luego traslada S con el vector →(−4 | 3). ¿Dónde queda el punto final S'?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 10,
          "points": [
            {
              "label": "S",
              "x": 7,
              "y": 4,
              "color": "#0284c7"
            }
          ]
        },
        "options": [
          {
            "textDe": "S' (3 | 7)",
            "textEs": "S' (3 | 7)",
            "correct": true
          },
          {
            "textDe": "S' (7 | 3)",
            "textEs": "S' (7 | 3)",
            "correct": false
          },
          {
            "textDe": "S' (11 | 1)",
            "textEs": "S' (11 | 1)",
            "correct": false
          },
          {
            "textDe": "S' (3 | 1)",
            "textEs": "S' (3 | 1)",
            "correct": false
          }
        ],
        "explanationDe": "S liegt bei (7 | 4). Mit dem Vektor →(−4 | 3) rechnest du: 7 − 4 = 3 und 4 + 3 = 7 → S'(3 | 7)!",
        "explanationEs": "S está en (7 | 4). Con el vector →(−4 | 3) calculas: 7 − 4 = 3 y 4 + 3 = 7 → S'(3 | 7)."
      },
      {
        "id": "m13_ks_8",
        "world": "koordinaten",
        "topicDe": "Startpunkt + Vektor = Zielpunkt",
        "questionDe": "Lies den Punkt K im Koordinatensystem ab und wende den Vektor →(−6 | 0) an. Welche Koordinaten hat K'?",
        "questionEs": "Lee el punto K en el plano cartesiano y aplícale el vector →(−6 | 0). ¿Qué coordenadas tiene K'?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 10,
          "points": [
            {
              "label": "K",
              "x": 9,
              "y": 6,
              "color": "#9333ea"
            }
          ]
        },
        "options": [
          {
            "textDe": "K' (3 | 6)",
            "textEs": "K' (3 | 6)",
            "correct": true
          },
          {
            "textDe": "K' (9 | 0)",
            "textEs": "K' (9 | 0)",
            "correct": false
          },
          {
            "textDe": "K' (6 | 3)",
            "textEs": "K' (6 | 3)",
            "correct": false
          },
          {
            "textDe": "K' (3 | 0)",
            "textEs": "K' (3 | 0)",
            "correct": false
          }
        ],
        "explanationDe": "K liegt bei (9 | 6). Der Vektor →(−6 | 0) geht 6 nach links (9 − 6 = 3) und 0 nach oben/unten (y bleibt 6) → K'(3 | 6)!",
        "explanationEs": "K está en (9 | 6). El vector →(−6 | 0) mueve 6 a la izquierda (9 − 6 = 3) y mantiene la altura y = 6 → K'(3 | 6)."
      },
      {
        "id": "m13_ks_9",
        "world": "koordinaten",
        "topicDe": "Vektor zwischen zwei Punkten bestimmen",
        "questionDe": "Welcher Vektor verschiebt im Koordinatensystem den Startpunkt A zum Zielpunkt B (von A nach B)?",
        "questionEs": "¿Qué vector traslada en el plano cartesiano el punto inicial A hasta el punto final B (de A hacia B)?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 10,
          "points": [
            {
              "label": "A",
              "x": 2,
              "y": 8,
              "color": "#0f172a"
            },
            {
              "label": "B",
              "x": 7,
              "y": 8,
              "color": "#dc2626"
            }
          ]
        },
        "options": [
          {
            "textDe": "→(5 | 0)",
            "textEs": "→(5 | 0)",
            "correct": true
          },
          {
            "textDe": "→(−5 | 0)",
            "textEs": "→(−5 | 0)",
            "correct": false
          },
          {
            "textDe": "→(0 | 5)",
            "textEs": "→(0 | 5)",
            "correct": false
          },
          {
            "textDe": "→(0 | −5)",
            "textEs": "→(0 | −5)",
            "correct": false
          }
        ],
        "explanationDe": "A liegt bei (2 | 8) und B bei (7 | 8). Von 2 nach 7 geht man 5 Einheiten nach RECHTS (+5) und 0 nach oben → Vektor →(5 | 0)!",
        "explanationEs": "A está en (2 | 8) y B en (7 | 8). De 2 a 7 avanzas 5 hacia la derecha (+5) y 0 en vertical → vector →(5 | 0)."
      },
      {
        "id": "m13_ks_10",
        "world": "koordinaten",
        "topicDe": "Vektor zwischen zwei Punkten (Richtungs-Check!)",
        "questionDe": "Aufgepasst auf die Richtung: Welcher Vektor führt vom Startpunkt M zum Zielpunkt N (also von M nach N)?",
        "questionEs": "Atención con el sentido: ¿qué vector lleva desde el punto inicial M hasta el punto final N (es decir, de M hacia N)?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 10,
          "points": [
            {
              "label": "M",
              "x": 8,
              "y": 7,
              "color": "#0f172a"
            },
            {
              "label": "N",
              "x": 3,
              "y": 2,
              "color": "#dc2626"
            }
          ]
        },
        "options": [
          {
            "textDe": "→(−5 | −5)",
            "textEs": "→(−5 | −5)",
            "correct": true
          },
          {
            "textDe": "→(5 | 5)",
            "textEs": "→(5 | 5)",
            "correct": false
          },
          {
            "textDe": "→(−5 | 5)",
            "textEs": "→(−5 | 5)",
            "correct": false
          },
          {
            "textDe": "→(5 | −5)",
            "textEs": "→(5 | −5)",
            "correct": false
          }
        ],
        "explanationDe": "M liegt bei (8 | 7) und N bei (3 | 2). Von M nach N geht man 5 nach links (−5) und 5 nach unten (−5) → Vektor →(−5 | −5)!",
        "explanationEs": "M está en (8 | 7) y N en (3 | 2). De M hacia N vas 5 a la izquierda (−5) y 5 hacia abajo (−5) → vector →(−5 | −5)."
      },
      {
        "id": "m13_ks_11",
        "world": "koordinaten",
        "topicDe": "Vektor zwischen zwei Punkten",
        "questionDe": "Lies die Punkte P und Q im Koordinatensystem ab. Welcher Vektor verschiebt P genau nach Q?",
        "questionEs": "Lee los puntos P y Q en el plano cartesiano. ¿Qué vector traslada P exactamente hasta Q?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 10,
          "points": [
            {
              "label": "P",
              "x": 7,
              "y": 2,
              "color": "#0284c7"
            },
            {
              "label": "Q",
              "x": 3,
              "y": 9,
              "color": "#16a34a"
            }
          ]
        },
        "options": [
          {
            "textDe": "→(−4 | 7)",
            "textEs": "→(−4 | 7)",
            "correct": true
          },
          {
            "textDe": "→(4 | −7)",
            "textEs": "→(4 | −7)",
            "correct": false
          },
          {
            "textDe": "→(7 | −4)",
            "textEs": "→(7 | −4)",
            "correct": false
          },
          {
            "textDe": "→(−4 | −7)",
            "textEs": "→(−4 | −7)",
            "correct": false
          }
        ],
        "explanationDe": "Von P(7 | 2) zu Q(3 | 9) geht man 4 Einheiten nach links (3 − 7 = −4) und 7 Einheiten nach oben (9 − 2 = +7) → →(−4 | 7)!",
        "explanationEs": "De P(7 | 2) a Q(3 | 9) te mueves 4 a la izquierda (−4) y 7 hacia arriba (+7) → vector →(−4 | 7)."
      },
      {
        "id": "m13_ks_12",
        "world": "koordinaten",
        "topicDe": "Rückwärts-Aufgabe: Startpunkt gesucht!",
        "questionDe": "Knifflige Rückwärts-Frage: Ein unbekannter Startpunkt A wurde mit dem Vektor →(3 | −4) verschoben und ist auf dem Zielpunkt A'(8 | 2) gelandet. Wo lag der Startpunkt A?",
        "questionEs": "Desafío inverso: Un punto inicial desconocido A se trasladó con el vector →(3 | −4) y llegó al punto final A'(8 | 2). ¿Dónde estaba el punto inicial A?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 10,
          "points": [
            {
              "label": "A'",
              "x": 8,
              "y": 2,
              "color": "#16a34a"
            }
          ]
        },
        "options": [
          {
            "textDe": "A (5 | 6)",
            "textEs": "A (5 | 6)",
            "correct": true
          },
          {
            "textDe": "A (11 | −2)",
            "textEs": "A (11 | −2)",
            "correct": false
          },
          {
            "textDe": "A (5 | −2)",
            "textEs": "A (5 | −2)",
            "correct": false
          },
          {
            "textDe": "A (6 | 5)",
            "textEs": "A (6 | 5)",
            "correct": false
          }
        ],
        "explanationDe": "Um vom Ziel A'(8 | 2) zurück zum Start A zu kommen, rechnet man genau umgekehrt: x = 8 − 3 = 5 und y = 2 + 4 = 6 → Startpunkt A(5 | 6)! Probe: (5+3 | 6−4) = (8 | 2).",
        "explanationEs": "Para volver desde A'(8 | 2) al inicio A hacemos la operación inversa: x = 8 − 3 = 5 e y = 2 + 4 = 6 → A(5 | 6)."
      },
      {
        "id": "m13_ks_13",
        "world": "koordinaten",
        "topicDe": "Rückwärts-Aufgabe: Startpunkt gesucht!",
        "questionDe": "Nach einer Verschiebung mit dem Vektor →(−2 | 5) landest du auf dem Punkt Z(4 | 9). Welche Koordinaten hatte dein Startpunkt S?",
        "questionEs": "Después de trasladarte con el vector →(−2 | 5) llegas al punto Z(4 | 9). ¿Qué coordenadas tenía tu punto de partida S?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 10,
          "points": [
            {
              "label": "Z",
              "x": 4,
              "y": 9,
              "color": "#dc2626"
            }
          ]
        },
        "options": [
          {
            "textDe": "S (6 | 4)",
            "textEs": "S (6 | 4)",
            "correct": true
          },
          {
            "textDe": "S (2 | 14)",
            "textEs": "S (2 | 14)",
            "correct": false
          },
          {
            "textDe": "S (2 | 4)",
            "textEs": "S (2 | 4)",
            "correct": false
          },
          {
            "textDe": "S (4 | 6)",
            "textEs": "S (4 | 6)",
            "correct": false
          }
        ],
        "explanationDe": "Rückwärts gedacht: Vor „2 nach links“ warst du 2 weiter rechts (4 + 2 = 6), und vor „5 nach oben“ warst du 5 weiter unten (9 − 5 = 4) → Startpunkt S(6 | 4)!",
        "explanationEs": "Pensando hacia atrás: 4 + 2 = 6 en x y 9 − 5 = 4 en y → el punto inicial era S(6 | 4)."
      },
      {
        "id": "m13_ks_14",
        "world": "koordinaten",
        "topicDe": "Zwei Vektoren hintereinander",
        "questionDe": "Du startest bei P(2 | 3). Zuerst gehst du mit dem Vektor →(6 | 4) und danach sofort weiter mit dem Vektor →(−3 | −2). Auf welchem Punkt landest du am Ende?",
        "questionEs": "Partes en P(2 | 3). Primero avanzas con el vector →(6 | 4) y enseguida continúas con el vector →(−3 | −2). ¿En qué punto terminas?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 10,
          "points": [
            {
              "label": "P",
              "x": 2,
              "y": 3,
              "color": "#0284c7"
            }
          ]
        },
        "options": [
          {
            "textDe": "Auf (5 | 5)",
            "textEs": "En (5 | 5)",
            "correct": true
          },
          {
            "textDe": "Auf (8 | 7)",
            "textEs": "En (8 | 7)",
            "correct": false
          },
          {
            "textDe": "Auf (11 | 9)",
            "textEs": "En (11 | 9)",
            "correct": false
          },
          {
            "textDe": "Auf (5 | 9)",
            "textEs": "En (5 | 9)",
            "correct": false
          }
        ],
        "explanationDe": "1. Schritt: (2 + 6 | 3 + 4) = (8 | 7). 2. Schritt: (8 − 3 | 7 − 2) = (5 | 5)!",
        "explanationEs": "Paso 1: (2 + 6 | 3 + 4) = (8 | 7). Paso 2: (8 − 3 | 7 − 2) = (5 | 5)."
      },
      {
        "id": "m13_ks_15",
        "world": "koordinaten",
        "topicDe": "Figur im Koordinatensystem erkennen",
        "questionDe": "Wenn du die eingezeichneten Punkte A(2 | 3), B(5 | 1), C(8 | 3) und D(5 | 5) der Reihe nach verbindest, welches besondere Viereck entsteht?",
        "questionEs": "Si unes en orden los puntos marcados A(2 | 3), B(5 | 1), C(8 | 3) y D(5 | 5), ¿qué cuadrilátero especial se forma?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 8,
          "points": [
            {
              "label": "A",
              "x": 2,
              "y": 3,
              "color": "#0284c7"
            },
            {
              "label": "B",
              "x": 5,
              "y": 1,
              "color": "#0284c7"
            },
            {
              "label": "C",
              "x": 8,
              "y": 3,
              "color": "#0284c7"
            },
            {
              "label": "D",
              "x": 5,
              "y": 5,
              "color": "#0284c7"
            }
          ]
        },
        "options": [
          {
            "textDe": "Eine Raute",
            "textEs": "Die Raute",
            "correct": true
          },
          {
            "textDe": "Ein Quadrat",
            "textEs": "Das Quadrat",
            "correct": false
          },
          {
            "textDe": "Ein rechtwinkliges Trapez",
            "textEs": "Das rechtwinklige Trapez",
            "correct": false
          },
          {
            "textDe": "Ein Drachen mit verschieden langen Seitenpaaren",
            "textEs": "Der Drachen",
            "correct": false
          }
        ],
        "explanationDe": "Die waagerechte Diagonale AC ist 6 Einheiten lang (von x = 2 bis x = 8), die senkrechte Diagonale BD ist 4 Einheiten lang (von y = 1 bis y = 5). Alle 4 Seiten sind gleich lang, aber die Winkel sind nicht 90° → eine Raute!",
        "explanationEs": "La diagonal horizontal mide 6 unidades y la vertical mide 4 unidades. Sus 4 lados son iguales pero sus ángulos no son de 90° → ¡una Raute!"
      },
      {
        "id": "m13_ks_16",
        "world": "koordinaten",
        "topicDe": "Figur im Koordinatensystem erkennen",
        "questionDe": "Verbindet man im Gedanken die 4 Punkte A(5 | 1), B(8 | 4), C(5 | 7) und D(2 | 4), welches Viereck entsteht?",
        "questionEs": "Si unes los 4 puntos A(5 | 1), B(8 | 4), C(5 | 7) y D(2 | 4) marcados en el plano, ¿qué cuadrilátero se forma?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 9,
          "points": [
            {
              "label": "A",
              "x": 5,
              "y": 1,
              "color": "#16a34a"
            },
            {
              "label": "B",
              "x": 8,
              "y": 4,
              "color": "#16a34a"
            },
            {
              "label": "C",
              "x": 5,
              "y": 7,
              "color": "#16a34a"
            },
            {
              "label": "D",
              "x": 2,
              "y": 4,
              "color": "#16a34a"
            }
          ]
        },
        "options": [
          {
            "textDe": "Ein Quadrat (auf der Spitze stehend)",
            "textEs": "Das Quadrat (apoyado en un vértice)",
            "correct": true
          },
          {
            "textDe": "Ein allgemeines Trapezoid",
            "textEs": "Das Trapezoid",
            "correct": false
          },
          {
            "textDe": "Ein rechtwinkliges Trapez",
            "textEs": "Das rechtwinklige Trapez",
            "correct": false
          },
          {
            "textDe": "Ein Romboid ohne Symmetrieachse",
            "textEs": "Das Romboid",
            "correct": false
          }
        ],
        "explanationDe": "Vom Mittelpunkt (5 | 4) gehen alle 4 Ecken genau 3 Einheiten nach oben, unten, links und rechts. Beide Diagonalen sind gleich lang (6) und stehen senkrecht aufeinander → ein gedrehtes Quadrat mit 4 rechten Winkeln!",
        "explanationEs": "Desde el centro (5 | 4) los 4 vértices están exactamente a 3 unidades arriba, abajo, izquierda y derecha → ¡es un Quadrat girado 45°!"
      },
      {
        "id": "m13_ks_17",
        "world": "koordinaten",
        "topicDe": "Figur im Koordinatensystem erkennen",
        "questionDe": "Welches Viereck entsteht, wenn man die Punkte A(2 | 2), B(8 | 2), C(6 | 6) und D(2 | 6) der Reihe nach verbindet?",
        "questionEs": "¿Qué cuadrilátero se forma al unir en orden los puntos A(2 | 2), B(8 | 2), C(6 | 6) y D(2 | 6)?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 8,
          "points": [
            {
              "label": "A",
              "x": 2,
              "y": 2,
              "color": "#d97706"
            },
            {
              "label": "B",
              "x": 8,
              "y": 2,
              "color": "#d97706"
            },
            {
              "label": "C",
              "x": 6,
              "y": 6,
              "color": "#d97706"
            },
            {
              "label": "D",
              "x": 2,
              "y": 6,
              "color": "#d97706"
            }
          ]
        },
        "options": [
          {
            "textDe": "Ein rechtwinkliges Trapez",
            "textEs": "Rechtwinkliges Trapez",
            "correct": true
          },
          {
            "textDe": "Ein gleichschenkliges Trapez",
            "textEs": "Gleichschenkliges Trapez",
            "correct": false
          },
          {
            "textDe": "Ein Rechteck",
            "textEs": "Rechteck",
            "correct": false
          },
          {
            "textDe": "Ein Drachen (Deltoid)",
            "textEs": "Drachen (Deltoid)",
            "correct": false
          }
        ],
        "explanationDe": "AB (unten auf y = 2) und DC (oben auf y = 6) sind waagerecht und parallel (1 Paar ∥). Die linke Seite AD liegt senkrecht auf x = 2 (2 rechte Winkel bei A und D), während BC rechts schräg ist → rechtwinkliges Trapez!",
        "explanationEs": "AB y DC son horizontales y paralelos (1 par ∥), mientras que AD es vertical en x = 2 formando dos ángulos de 90° en A y D → rechtwinkliges Trapez."
      },
      {
        "id": "m13_ks_18",
        "world": "koordinaten",
        "topicDe": "4. Eckpunkt ergänzen (Quadrat)",
        "questionDe": "Die drei eingezeichneten Punkte E(4 | 8), F(2 | 6) und G(4 | 4) sind drei Ecken eines auf der Spitze stehenden QUADRATS EFGH. Welche Koordinaten muss der 4. Eckpunkt H haben?",
        "questionEs": "Los tres puntos marcados E(4 | 8), F(2 | 6) y G(4 | 4) son tres vértices de un QUADRAT (cuadrado) EFGH apoyado en punta. ¿Qué coordenadas debe tener el 4° vértice H?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 10,
          "points": [
            {
              "label": "E",
              "x": 4,
              "y": 8,
              "color": "#0284c7"
            },
            {
              "label": "F",
              "x": 2,
              "y": 6,
              "color": "#0284c7"
            },
            {
              "label": "G",
              "x": 4,
              "y": 4,
              "color": "#0284c7"
            }
          ]
        },
        "options": [
          {
            "textDe": "H (6 | 6)",
            "textEs": "H (6 | 6)",
            "correct": true
          },
          {
            "textDe": "H (5 | 6)",
            "textEs": "H (5 | 6)",
            "correct": false
          },
          {
            "textDe": "H (6 | 4)",
            "textEs": "H (6 | 4)",
            "correct": false
          },
          {
            "textDe": "H (8 | 6)",
            "textEs": "H (8 | 6)",
            "correct": false
          }
        ],
        "explanationDe": "Die Symmetrieachse durch E(4|8) und G(4|4) liegt bei x = 4. Da F(2|6) genau 2 Einheiten links von (4|6) liegt, muss H genau 2 Einheiten rechts davon liegen → H(6 | 6)!",
        "explanationEs": "El eje vertical pasa por E(4|8) y G(4|4) en x = 4. Como F(2|6) está 2 unidades a la izquierda de (4|6), H debe estar 2 unidades a la derecha en H(6 | 6)."
      },
      {
        "id": "m13_ks_19",
        "world": "koordinaten",
        "topicDe": "4. Eckpunkt ergänzen (Drachen)",
        "questionDe": "Die Punkte A(1 | 4), B(3 | 2) und C(8 | 4) sollen zu einem symmetrischen DRACHEN ABCD ergänzt werden. Wo liegt der fehlende 4. Eckpunkt D?",
        "questionEs": "Los puntos A(1 | 4), B(3 | 2) y C(8 | 4) deben completarse para formar un DRACHEN (cometa) simétrico ABCD. ¿Dónde se ubica el 4° vértice D?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 8,
          "points": [
            {
              "label": "A",
              "x": 1,
              "y": 4,
              "color": "#db2777"
            },
            {
              "label": "B",
              "x": 3,
              "y": 2,
              "color": "#db2777"
            },
            {
              "label": "C",
              "x": 8,
              "y": 4,
              "color": "#db2777"
            }
          ]
        },
        "options": [
          {
            "textDe": "D (3 | 6)",
            "textEs": "D (3 | 6)",
            "correct": true
          },
          {
            "textDe": "D (6 | 3)",
            "textEs": "D (6 | 3)",
            "correct": false
          },
          {
            "textDe": "D (3 | 7)",
            "textEs": "D (3 | 7)",
            "correct": false
          },
          {
            "textDe": "D (5 | 6)",
            "textEs": "D (5 | 6)",
            "correct": false
          }
        ],
        "explanationDe": "A(1|4) und C(8|4) liegen beide auf der Höhe y = 4 (das ist die Symmetrieachse des Drachens). B(3|2) liegt 2 Einheiten unter y = 4, also muss D genau 2 Einheiten über y = 4 liegen → D(3 | 6)!",
        "explanationEs": "A(1|4) y C(8|4) están en la altura y = 4 (eje de simetría). Como B(3|2) está 2 unidades abajo, D debe estar 2 unidades arriba en D(3 | 6)."
      },
      {
        "id": "m13_ks_20",
        "world": "koordinaten",
        "topicDe": "4. Eckpunkt ergänzen (Stehender Drachen)",
        "questionDe": "Gegeben sind drei Ecken eines stehenden DRACHENS: A(5 | 9), B(2 | 6) und C(5 | 1). Welche Koordinaten hat der 4. Eckpunkt D auf der rechten Seite?",
        "questionEs": "Se dan tres vértices de un DRACHEN vertical: A(5 | 9), B(2 | 6) y C(5 | 1). ¿Qué coordenadas tiene el 4° vértice D del lado derecho?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 10,
          "points": [
            {
              "label": "A",
              "x": 5,
              "y": 9,
              "color": "#9333ea"
            },
            {
              "label": "B",
              "x": 2,
              "y": 6,
              "color": "#9333ea"
            },
            {
              "label": "C",
              "x": 5,
              "y": 1,
              "color": "#9333ea"
            }
          ]
        },
        "options": [
          {
            "textDe": "D (8 | 6)",
            "textEs": "D (8 | 6)",
            "correct": true
          },
          {
            "textDe": "D (6 | 8)",
            "textEs": "D (6 | 8)",
            "correct": false
          },
          {
            "textDe": "D (7 | 6)",
            "textEs": "D (7 | 6)",
            "correct": false
          },
          {
            "textDe": "D (8 | 5)",
            "textEs": "D (8 | 5)",
            "correct": false
          }
        ],
        "explanationDe": "Die senkrechte Symmetrieachse durch A(5|9) und C(5|1) verläuft bei x = 5. Da B(2|6) genau 3 Einheiten links von x = 5 liegt, liegt D genau 3 Einheiten rechts davon bei x = 5 + 3 = 8 → D(8 | 6)!",
        "explanationEs": "El eje vertical por A(5|9) y C(5|1) está en x = 5. Como B(2|6) está 3 unidades a la izquierda, D está 3 unidades a la derecha en D(8 | 6)."
      },
      {
        "id": "m13_ks_21",
        "world": "koordinaten",
        "topicDe": "4. Eckpunkt ergänzen (Raute mit ,5)",
        "questionDe": "Die drei Punkte M(4,5 | 3,5), N(7 | 1,5) und O(9,5 | 3,5) bilden die untere Hälfte einer RAUTE MNOP. Welche Koordinaten hat der obere 4. Eckpunkt P?",
        "questionEs": "Los tres puntos M(4,5 | 3,5), N(7 | 1,5) y O(9,5 | 3,5) forman la mitad inferior de una RAUTE (rombo) MNOP. ¿Qué coordenadas tiene el 4° vértice superior P?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 11,
          "maxY": 8,
          "points": [
            {
              "label": "M",
              "x": 4.5,
              "y": 3.5,
              "color": "#eab308"
            },
            {
              "label": "N",
              "x": 7,
              "y": 1.5,
              "color": "#eab308"
            },
            {
              "label": "O",
              "x": 9.5,
              "y": 3.5,
              "color": "#eab308"
            }
          ]
        },
        "options": [
          {
            "textDe": "P (7 | 5,5)",
            "textEs": "P (7 | 5,5)",
            "correct": true
          },
          {
            "textDe": "P (5,5 | 7)",
            "textEs": "P (5,5 | 7)",
            "correct": false
          },
          {
            "textDe": "P (7 | 4,5)",
            "textEs": "P (7 | 4,5)",
            "correct": false
          },
          {
            "textDe": "P (7,5 | 5,5)",
            "textEs": "P (7,5 | 5,5)",
            "correct": false
          }
        ],
        "explanationDe": "Die waagerechte Achse durch M und O liegt auf y = 3,5 (Mitte bei x = 7). N(7 | 1,5) liegt 2 Einheiten darunter, also liegt P genau 2 Einheiten darüber bei y = 3,5 + 2 = 5,5 → P(7 | 5,5)!",
        "explanationEs": "La línea media por M y O está en y = 3,5 (con centro en x = 7). Como N(7 | 1,5) baja 2 unidades, P sube 2 unidades hasta y = 5,5 → P(7 | 5,5)."
      },
      {
        "id": "m13_ks_22",
        "world": "koordinaten",
        "topicDe": "4. Eckpunkt ergänzen (Gleichschenkliges Trapez)",
        "questionDe": "Die Punkte A(1 | 2), B(9 | 2) und C(7 | 6) sollen zu einem GLEICHSCHENKLIGEN TRAPEZ ABCD (mit AB ∥ DC) ergänzt werden. Wo muss der 4. Eckpunkt D liegen?",
        "questionEs": "Los puntos A(1 | 2), B(9 | 2) y C(7 | 6) deben formar un GLEICHSCHENKLIGES TRAPEZ (trapecio isósceles) ABCD con AB ∥ DC. ¿Dónde debe ubicarse el 4° vértice D?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 8,
          "points": [
            {
              "label": "A",
              "x": 1,
              "y": 2,
              "color": "#16a34a"
            },
            {
              "label": "B",
              "x": 9,
              "y": 2,
              "color": "#16a34a"
            },
            {
              "label": "C",
              "x": 7,
              "y": 6,
              "color": "#16a34a"
            }
          ]
        },
        "options": [
          {
            "textDe": "D (3 | 6)",
            "textEs": "D (3 | 6)",
            "correct": true
          },
          {
            "textDe": "D (1 | 6)",
            "textEs": "D (1 | 6)",
            "correct": false
          },
          {
            "textDe": "D (2 | 6)",
            "textEs": "D (2 | 6)",
            "correct": false
          },
          {
            "textDe": "D (6 | 3)",
            "textEs": "D (6 | 3)",
            "correct": false
          }
        ],
        "explanationDe": "Unten geht AB von x = 1 bis x = 9. Rechts oben ist C(7 | 6) um 2 Einheiten nach innen gerückt (9 − 2 = 7). Damit das Trapez gleichschenklig ist, muss D links oben ebenfalls um 2 Einheiten nach innen rücken (1 + 2 = 3) → D(3 | 6)!",
        "explanationEs": "Abajo AB va de x = 1 a x = 9. Como C(7 | 6) entra 2 unidades desde 9, para que sea simétrico D debe entrar 2 unidades desde 1 (1 + 2 = 3) a la misma altura y = 6 → D(3 | 6)."
      },
      {
        "id": "m13_ks_23",
        "world": "koordinaten",
        "topicDe": "4. Eckpunkt ergänzen (Romboid / Parallelogramm)",
        "questionDe": "Gegeben sind drei Ecken eines ROMBOIDS (Parallelogramms) ABCD: A(1 | 2), B(6 | 2) und C(8 | 6). Welche Koordinaten hat der 4. Eckpunkt D oben links?",
        "questionEs": "Se dan tres vértices de un ROMBOID (paralelogramo) ABCD: A(1 | 2), B(6 | 2) y C(8 | 6). ¿Qué coordenadas tiene el 4° vértice D arriba a la izquierda?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 8,
          "points": [
            {
              "label": "A",
              "x": 1,
              "y": 2,
              "color": "#0284c7"
            },
            {
              "label": "B",
              "x": 6,
              "y": 2,
              "color": "#0284c7"
            },
            {
              "label": "C",
              "x": 8,
              "y": 6,
              "color": "#0284c7"
            }
          ]
        },
        "options": [
          {
            "textDe": "D (3 | 6)",
            "textEs": "D (3 | 6)",
            "correct": true
          },
          {
            "textDe": "D (1 | 6)",
            "textEs": "D (1 | 6)",
            "correct": false
          },
          {
            "textDe": "D (2 | 6)",
            "textEs": "D (2 | 6)",
            "correct": false
          },
          {
            "textDe": "D (4 | 6)",
            "textEs": "D (4 | 6)",
            "correct": false
          }
        ],
        "explanationDe": "Im Parallelogramm geht der Vektor von B(6|2) nach C(8|6) um 2 nach rechts und 4 nach oben: →(2 | 4). Genau denselben Vektor geht man von A(1|2) zu D: (1 + 2 | 2 + 4) = D(3 | 6)!",
        "explanationEs": "En un paralelogramo el desplazamiento de B(6|2) a C(8|6) es →(2 | 4). Aplicando el mismo vector desde A(1|2) obtenemos D(1 + 2 | 2 + 4) = D(3 | 6)."
      },
      {
        "id": "m13_ks_24",
        "world": "koordinaten",
        "topicDe": "Spiegelung an senkrechter Gerade g",
        "questionDe": "Im Koordinatensystem verläuft die rote Spiegelgerade g senkrecht bei x = 5. Der Punkt P(2 | 7) wird an der Geraden g gespiegelt. Welche Koordinaten hat der Spiegelpunkt P'?",
        "questionEs": "En el plano cartesiano, el eje de simetría rojo g es vertical en x = 5. Si reflejas el punto P(2 | 7) respecto a la recta g, ¿qué coordenadas tiene el punto reflejado P'?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 10,
          "mirrorLine": {
            "x1": 5,
            "y1": 0,
            "x2": 5,
            "y2": 10,
            "label": "g"
          },
          "points": [
            {
              "label": "P",
              "x": 2,
              "y": 7,
              "color": "#0284c7"
            }
          ]
        },
        "options": [
          {
            "textDe": "P' (8 | 7)",
            "textEs": "P' (8 | 7)",
            "correct": true
          },
          {
            "textDe": "P' (7 | 8)",
            "textEs": "P' (7 | 8)",
            "correct": false
          },
          {
            "textDe": "P' (2 | 3)",
            "textEs": "P' (2 | 3)",
            "correct": false
          },
          {
            "textDe": "P' (7 | 7)",
            "textEs": "P' (7 | 7)",
            "correct": false
          }
        ],
        "explanationDe": "P(2 | 7) hat zur senkrechten Spiegelachse x = 5 genau 3 Einheiten Abstand nach links (5 − 2 = 3). Der Spiegelpunkt P' liegt deshalb 3 Einheiten rechts von x = 5 auf derselben Höhe: (5 + 3 | 7) = P'(8 | 7)!",
        "explanationEs": "P(2 | 7) está a 3 unidades a la izquierda del eje x = 5. Su reflejo P' queda 3 unidades a la derecha del eje a la misma altura: P'(8 | 7)."
      },
      {
        "id": "m13_ks_25",
        "world": "koordinaten",
        "topicDe": "Spiegelung an waagerechter Gerade g",
        "questionDe": "Die rote Spiegelgerade g verläuft waagerecht auf der Höhe y = 4. Das Dreieck ABC hat die obere Ecke B(6 | 7). Wo liegt die gespiegelte Ecke B'?",
        "questionEs": "El eje de simetría rojo g es horizontal en la altura y = 4. El punto B está en B(6 | 7). ¿Dónde queda el punto reflejado B' al otro lado de g?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 9,
          "mirrorLine": {
            "x1": 0,
            "y1": 4,
            "x2": 10,
            "y2": 4,
            "label": "g"
          },
          "points": [
            {
              "label": "A",
              "x": 3,
              "y": 5,
              "color": "#0284c7"
            },
            {
              "label": "B",
              "x": 6,
              "y": 7,
              "color": "#dc2626"
            },
            {
              "label": "C",
              "x": 8,
              "y": 4,
              "color": "#0284c7"
            }
          ]
        },
        "options": [
          {
            "textDe": "B' (6 | 1)",
            "textEs": "B' (6 | 1)",
            "correct": true
          },
          {
            "textDe": "B' (1 | 6)",
            "textEs": "B' (1 | 6)",
            "correct": false
          },
          {
            "textDe": "B' (6 | 2)",
            "textEs": "B' (6 | 2)",
            "correct": false
          },
          {
            "textDe": "B' (2 | 7)",
            "textEs": "B' (2 | 7)",
            "correct": false
          }
        ],
        "explanationDe": "B(6 | 7) liegt 3 Einheiten ÜBER der waagerechten Achse y = 4 (7 − 4 = 3). Also liegt B' genau 3 Einheiten UNTER der Achse bei y = 4 − 3 = 1 → B'(6 | 1)!",
        "explanationEs": "B(6 | 7) está 3 unidades ARRIBA de la recta y = 4. Por lo tanto B' queda 3 unidades DEBAJO de la recta en y = 4 − 3 = 1 → B'(6 | 1)."
      },
      {
        "id": "m13_ks_26",
        "world": "koordinaten",
        "topicDe": "Spiegelung an schräger Gerade g (Fixpunkt)",
        "questionDe": "Im Bild wird die Raute ABCD an der schrägen roten Geraden g (durch (0|9) und (9|0)) gespiegelt. Welche Koordinaten hat der Bildpunkt C'?",
        "questionEs": "En la figura se refleja el rombo ABCD respecto a la recta inclinada roja g (que pasa por (0|9) y (9|0)). ¿Qué coordenadas tiene el punto reflejado C'?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 10,
          "mirrorLine": {
            "x1": 0,
            "y1": 9,
            "x2": 9,
            "y2": 0,
            "label": "g"
          },
          "polygon": [
            {
              "label": "A",
              "x": 0,
              "y": 5
            },
            {
              "label": "B",
              "x": 2,
              "y": 4
            },
            {
              "label": "C",
              "x": 4,
              "y": 5
            },
            {
              "label": "D",
              "x": 2,
              "y": 6
            }
          ],
          "polyColor": "#0284c7"
        },
        "options": [
          {
            "textDe": "C' (4 | 5)",
            "textEs": "C' (4 | 5)",
            "correct": true
          },
          {
            "textDe": "C' (5 | 4)",
            "textEs": "C' (5 | 4)",
            "correct": false
          },
          {
            "textDe": "C' (4 | 9)",
            "textEs": "C' (4 | 9)",
            "correct": false
          },
          {
            "textDe": "C' (5 | 7)",
            "textEs": "C' (5 | 7)",
            "correct": false
          }
        ],
        "explanationDe": "Schau genau hin: Der Eckpunkt C(4 | 5) liegt direkt AUF der Spiegelgeraden g! Jeder Punkt auf der Spiegelachse bleibt beim Spiegeln genau an seinem Platz → C'(4 | 5).",
        "explanationEs": "El vértice C(4 | 5) está justo SOBRE la recta de simetría g. Todo punto sobre el eje de simetría permanece en el mismo lugar al reflejarse → C'(4 | 5)."
      },
      {
        "id": "m13_ks_27",
        "world": "koordinaten",
        "topicDe": "Spiegelung an schräger Gerade g (Eckpunkt A')",
        "questionDe": "Im selben Bild (Spiegelgerade g durch (0|9) und (9|0)): Wo landet der linke Eckpunkt A(0 | 5), wenn man ihn im 90°-Winkel über die schräge Gerade g spiegelt?",
        "questionEs": "En la misma figura (eje de simetría g por (0|9) y (9|0)): ¿dónde queda el vértice A(0 | 5) al reflejarlo perpendicularmente al otro lado de la recta inclinada g?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 10,
          "mirrorLine": {
            "x1": 0,
            "y1": 9,
            "x2": 9,
            "y2": 0,
            "label": "g"
          },
          "polygon": [
            {
              "label": "A",
              "x": 0,
              "y": 5
            },
            {
              "label": "B",
              "x": 2,
              "y": 4
            },
            {
              "label": "C",
              "x": 4,
              "y": 5
            },
            {
              "label": "D",
              "x": 2,
              "y": 6
            }
          ],
          "polyColor": "#0284c7"
        },
        "options": [
          {
            "textDe": "A' (4 | 9)",
            "textEs": "A' (4 | 9)",
            "correct": true
          },
          {
            "textDe": "A' (5 | 0)",
            "textEs": "A' (5 | 0)",
            "correct": false
          },
          {
            "textDe": "A' (3 | 7)",
            "textEs": "A' (3 | 7)",
            "correct": false
          },
          {
            "textDe": "A' (5 | 7)",
            "textEs": "A' (5 | 7)",
            "correct": false
          }
        ],
        "explanationDe": "Von A(0 | 5) geht man im 90°-Winkel zur Achse g genau 2 Kästchendiagonalen nach rechts-oben bis zum Schnittpunkt (2 | 7) auf g — und dann noch einmal 2 Kästchendiagonalen weiter bis A'(4 | 9)!",
        "explanationEs": "Desde A(0 | 5) avanzas perpendicularmente 2 diagonales hacia arriba-derecha hasta tocar g en (2 | 7), y luego 2 diagonales más hasta A'(4 | 9)."
      },
      {
        "id": "m13_ks_28",
        "world": "koordinaten",
        "topicDe": "Spiegelung an der Winkelhalbierenden g",
        "questionDe": "Die rote Spiegelgerade g verläuft schräg von (0 | 0) bis (10 | 10). Der Punkt P(6 | 2) wird an g gespiegelt. Welche Koordinaten hat sein Spiegelpunkt P'?",
        "questionEs": "La recta de simetría roja g sube en diagonal desde (0 | 0) hasta (10 | 10). Si reflejas el punto P(6 | 2) respecto a g, ¿qué coordenadas tiene su reflejo P'?",
        "svgSpec": {
          "type": "coord_grid_clean",
          "maxX": 10,
          "maxY": 10,
          "mirrorLine": {
            "x1": 0,
            "y1": 0,
            "x2": 10,
            "y2": 10,
            "label": "g"
          },
          "points": [
            {
              "label": "P",
              "x": 6,
              "y": 2,
              "color": "#dc2626"
            }
          ]
        },
        "options": [
          {
            "textDe": "P' (2 | 6)",
            "textEs": "P' (2 | 6)",
            "correct": true
          },
          {
            "textDe": "P' (6 | 8)",
            "textEs": "P' (6 | 8)",
            "correct": false
          },
          {
            "textDe": "P' (4 | 4)",
            "textEs": "P' (4 | 4)",
            "correct": false
          },
          {
            "textDe": "P' (8 | 2)",
            "textEs": "P' (8 | 2)",
            "correct": false
          }
        ],
        "explanationDe": "Von P(6 | 2) geht man senkrecht zur Diagonale g genau 2 Kästchendiagonalen nach links-oben bis (4 | 4) auf g und 2 weitere Kästchendiagonalen bis P'(2 | 6)!",
        "explanationEs": "Desde P(6 | 2) vas perpendicularmente 2 diagonales hacia arriba-izquierda hasta (4 | 4) sobre g, y 2 diagonales más hasta P'(2 | 6)."
      }
    ]
  }
};
