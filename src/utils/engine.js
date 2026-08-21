/**
 * SYNTHESIS — Core Mathematical, Synthesis Diagnostic, Preset Library & Serialization Engine
 */

export const uid = () => "obj_" + Math.random().toString(36).slice(2, 9) + "_" + Date.now().toString(36);

export const CURATED_PRESETS = [
  {
    id: "warli_kalamkari_dance",
    name: "Cosmic Harvest & Botanical Vine",
    styleAId: "warli",
    styleBId: "kalamkari",
    concept: "Community & Collective Ritual",
    composition: "Concentric Spiral & Radial Dance",
    groundId: "khadi",
    desc: "Warli centrifugal spiral dance harmonized within undulating Kalamkari lotus vines and sacred paisley borders.",
    build: (styleA, styleB) => [
      {
        id: uid(),
        name: "Warli Sacred Chowk Enclosure",
        type: "motif",
        motifId: "sacred_chowk",
        x: 50,
        y: 50,
        s: 78,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.8,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 1,
        source: "Warli",
        category: "structural",
        materialAssociation: "Cowdung & Geru Ground",
        color: "#82221b",
        created: Date.now() - 40000
      },
      {
        id: uid(),
        name: "Kalamkari Tree of Life (Left)",
        type: "motif",
        motifId: "tree_of_life_kalamkari",
        x: 20,
        y: 48,
        s: 46,
        scaleX: 1,
        scaleY: 1,
        r: -8,
        opacity: 0.92,
        blendMode: "multiply",
        visible: true,
        locked: false,
        zIndex: 2,
        source: "Kalamkari",
        category: "botanical",
        materialAssociation: "Madder Dye (Manjistha)",
        color: "#16453b",
        created: Date.now() - 30000
      },
      {
        id: uid(),
        name: "Kalamkari Tree of Life (Right)",
        type: "motif",
        motifId: "tree_of_life_kalamkari",
        x: 80,
        y: 48,
        s: 46,
        scaleX: -1,
        scaleY: 1,
        r: 8,
        opacity: 0.92,
        blendMode: "multiply",
        visible: true,
        locked: false,
        zIndex: 3,
        source: "Kalamkari",
        category: "botanical",
        materialAssociation: "Madder Dye (Manjistha)",
        color: "#16453b",
        created: Date.now() - 25000
      },
      {
        id: uid(),
        name: "Kalamkari Paisley Medallion (Top)",
        type: "motif",
        motifId: "kalamkari_paisley",
        x: 50,
        y: 18,
        s: 32,
        scaleX: 1,
        scaleY: 1,
        r: 180,
        opacity: 0.9,
        blendMode: "multiply",
        visible: true,
        locked: false,
        zIndex: 4,
        source: "Kalamkari",
        category: "symbol",
        materialAssociation: "Myrobalan & Iron Tint",
        color: "#82221b",
        created: Date.now() - 20000
      },
      {
        id: uid(),
        name: "Warli Tarpa Spiral Dance Centerpiece",
        type: "motif",
        motifId: "tarpa_dance",
        x: 50,
        y: 54,
        s: 48,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.98,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 5,
        source: "Warli",
        category: "figure",
        materialAssociation: "Rice Flour Paste (Chawal Pittha)",
        color: "#ebd9b6",
        created: Date.now() - 10000
      }
    ]
  },
  {
    id: "madhubani_gond_forest",
    name: "Sacred Water & Wilderness Spirit",
    styleAId: "madhubani",
    styleBId: "gond",
    concept: "Ecology & Sacred Nature",
    composition: "Horror Vacui & Saturated Grid",
    groundId: "mud",
    desc: "Mithila auspicious double-contoured Matsya fish and lotus interlaced with Gond stippled forest stag and Mahua canopy.",
    build: (styleA, styleB) => [
      {
        id: uid(),
        name: "Gond Sacred Mahua Tree",
        type: "motif",
        motifId: "mahua_tree",
        x: 50,
        y: 42,
        s: 70,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.85,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 1,
        source: "Gond",
        category: "botanical",
        materialAssociation: "Kachra Earth Pigments",
        color: "#c28822",
        created: Date.now() - 40000
      },
      {
        id: uid(),
        name: "Gond Dappled Forest Stag",
        type: "motif",
        motifId: "gond_deer",
        x: 32,
        y: 62,
        s: 46,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.95,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 2,
        source: "Gond",
        category: "figure",
        materialAssociation: "Black Earth (Hirawali)",
        color: "#1c1813",
        created: Date.now() - 30000
      },
      {
        id: uid(),
        name: "Mithila Auspicious Matsya (Fish)",
        type: "motif",
        motifId: "sacred_fish",
        x: 68,
        y: 64,
        s: 44,
        scaleX: 1,
        scaleY: 1,
        r: -12,
        opacity: 0.95,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 3,
        source: "Mithila / Madhubani",
        category: "figure",
        materialAssociation: "Sindoor & Lampblack",
        color: "#b83324",
        created: Date.now() - 20000
      },
      {
        id: uid(),
        name: "Mithila Sacred Kamala (Lotus)",
        type: "motif",
        motifId: "mithila_lotus",
        x: 50,
        y: 80,
        s: 38,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.9,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 4,
        source: "Mithila / Madhubani",
        category: "botanical",
        materialAssociation: "Kusum Flower Red",
        color: "#b83324",
        created: Date.now() - 10000
      }
    ]
  },
  {
    id: "pattachitra_thanjavur_sanctum",
    name: "Gilded Sanctum & Temple Arch",
    styleAId: "pattachitra",
    styleBId: "thanjavur",
    concept: "Mythological Cosmos & Divine Order",
    composition: "Central Icon & Hierarchical Enclosure",
    groundId: "gold",
    desc: "Classical Pattachitra iconographic Meenakshi-eye profile deity framed by Thanjavur high-relief 22k gilded Kirtimukha canopy.",
    build: (styleA, styleB) => [
      {
        id: uid(),
        name: "Pattachitra Temple Prabhavali Arch",
        type: "motif",
        motifId: "prabhavali_arch",
        x: 50,
        y: 50,
        s: 82,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.9,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 1,
        source: "Pattachitra",
        category: "structural",
        materialAssociation: "Tamarind Seed Gum & Chalk",
        color: "#8b3a2b",
        created: Date.now() - 40000
      },
      {
        id: uid(),
        name: "Thanjavur Gilded Kirtimukha Canopy",
        type: "motif",
        motifId: "kirtimukha_arch",
        x: 50,
        y: 26,
        s: 55,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.95,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 2,
        source: "Thanjavur",
        category: "structural",
        materialAssociation: "22k Gold Foil & Limestone Gesso",
        color: "#c9a96c",
        created: Date.now() - 30000
      },
      {
        id: uid(),
        name: "Thanjavur Radiant Halo (Prabha)",
        type: "motif",
        motifId: "bejeweled_halo",
        x: 50,
        y: 52,
        s: 48,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.85,
        blendMode: "luminosity",
        visible: true,
        locked: false,
        zIndex: 3,
        source: "Thanjavur",
        category: "symbol",
        materialAssociation: "Burma Teak Wood & Gold Leaf",
        color: "#c9a96c",
        created: Date.now() - 20000
      },
      {
        id: uid(),
        name: "Pattachitra Lotus-Eye Deity Icon",
        type: "motif",
        motifId: "pattachitra_eye_deity",
        x: 50,
        y: 54,
        s: 44,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.98,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 4,
        source: "Pattachitra",
        category: "figure",
        materialAssociation: "Hingula Vermilion & Lampblack",
        color: "#1c1813",
        created: Date.now() - 10000
      }
    ]
  },
  {
    id: "phad_saura_procession",
    name: "Epic Scroll & Shamanic Ancestor",
    styleAId: "phad",
    styleBId: "saura",
    concept: "Continuous Narrative & Time",
    composition: "Narrative Frieze & Horizontal Procession",
    groundId: "talapatra",
    desc: "Rajasthani Pabuji hero on black steed alongside Saura sacred spirit house and rhythmic ancestor procession.",
    build: (styleA, styleB) => [
      {
        id: uid(),
        name: "Saura Idital Spirit House",
        type: "motif",
        motifId: "saura_spirit_house",
        x: 75,
        y: 50,
        s: 64,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.88,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 1,
        source: "Saura",
        category: "structural",
        materialAssociation: "Rice Powder on Red Clay Wall",
        color: "#8b3a2b",
        created: Date.now() - 40000
      },
      {
        id: uid(),
        name: "Phad Royal Chhatri Pavilion",
        type: "motif",
        motifId: "phad_court_pavilion",
        x: 25,
        y: 45,
        s: 58,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.9,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 2,
        source: "Phad",
        category: "structural",
        materialAssociation: "Natural Stone Pigments on Khadi",
        color: "#b83324",
        created: Date.now() - 30000
      },
      {
        id: uid(),
        name: "Phad Epic Mare (Kesar Kalmi)",
        type: "motif",
        motifId: "pabuji_steed",
        x: 48,
        y: 52,
        s: 46,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.96,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 3,
        source: "Phad",
        category: "figure",
        materialAssociation: "Kajol Lampblack & Indigo",
        color: "#1c1813",
        created: Date.now() - 20000
      },
      {
        id: uid(),
        name: "Saura Linked Ancestor Line",
        type: "motif",
        motifId: "ancestor_procession",
        x: 50,
        y: 84,
        s: 40,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.95,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 4,
        source: "Saura",
        category: "figure",
        materialAssociation: "Tender Bamboo Nib (Kudang)",
        color: "#ebd9b6",
        created: Date.now() - 10000
      }
    ]
  },
  {
    id: "solar_mandala_mayura",
    name: "Solar Mandala & Radiant Mayura",
    styleAId: "madhubani",
    styleBId: "kalamkari",
    concept: "Transcendence & Divine Majesty",
    composition: "Concentric Spiral & Radial Dance",
    groundId: "paper",
    desc: "Mithila Kohbar cosmic radiant Sun-Moon centerpiece flanked by Kalamkari sacred Mayura peacocks and botanical scroll.",
    build: (styleA, styleB) => [
      {
        id: uid(),
        name: "Kohbar Cosmic Sun-Moon Centerpiece",
        type: "motif",
        motifId: "kohbar_sun_moon",
        x: 50,
        y: 50,
        s: 60,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.95,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 1,
        source: "Mithila / Madhubani",
        category: "symbol",
        materialAssociation: "Turmeric Yellow & Madder",
        color: "#b83324",
        created: Date.now() - 40000
      },
      {
        id: uid(),
        name: "Kalamkari Sacred Mayura (Left)",
        type: "motif",
        motifId: "kalamkari_peacock",
        x: 22,
        y: 50,
        s: 42,
        scaleX: 1,
        scaleY: 1,
        r: 10,
        opacity: 0.92,
        blendMode: "multiply",
        visible: true,
        locked: false,
        zIndex: 2,
        source: "Kalamkari",
        category: "figure",
        materialAssociation: "Indigofera Tinctoria",
        color: "#1b3b4f",
        created: Date.now() - 30000
      },
      {
        id: uid(),
        name: "Kalamkari Sacred Mayura (Right)",
        type: "motif",
        motifId: "kalamkari_peacock",
        x: 78,
        y: 50,
        s: 42,
        scaleX: -1,
        scaleY: 1,
        r: -10,
        opacity: 0.92,
        blendMode: "multiply",
        visible: true,
        locked: false,
        zIndex: 3,
        source: "Kalamkari",
        category: "figure",
        materialAssociation: "Indigofera Tinctoria",
        color: "#1b3b4f",
        created: Date.now() - 20000
      },
      {
        id: uid(),
        name: "Mithila Sacred Kamala (Lotus)",
        type: "motif",
        motifId: "mithila_lotus",
        x: 50,
        y: 84,
        s: 36,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.9,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 4,
        source: "Mithila / Madhubani",
        category: "botanical",
        materialAssociation: "Rice Paste & Plant Extracts",
        color: "#c28822",
        created: Date.now() - 10000
      }
    ]
  }
];

export function createInitialArtwork(styleA, styleB, concept = "Community & Collective Ritual", composition = "Central Icon & Hierarchical Enclosure", groundId = "khadi") {
  // Check if matching preset exists
  const matchedPreset = CURATED_PRESETS.find(
    (p) => (p.styleAId === styleA.id && p.styleBId === styleB.id) || (p.styleAId === styleB.id && p.styleBId === styleA.id)
  );

  if (matchedPreset) {
    return matchedPreset.build(styleA, styleB);
  }

  // Dynamic generative fallback for any arbitrary pair
  return generateDynamicFusion(styleA, styleB, concept, composition);
}

export function generateDynamicFusion(styleA, styleB, concept, composition) {
  const colorA = styleA.colors[1] || "#82221b";
  const colorB = styleB.colors[1] || "#16453b";
  const motifA1 = styleA.motifs[0] || "tarpa_dance";
  const motifA2 = styleA.motifs[1] || "sacred_chowk";
  const motifB1 = styleB.motifs[0] || "tree_of_life_kalamkari";
  const motifB2 = styleB.motifs[1] || "kalamkari_paisley";

  return [
    {
      id: uid(),
      name: `${styleA.name} Structural Framework`,
      type: "motif",
      motifId: motifA2,
      x: 50,
      y: 50,
      s: 74,
      scaleX: 1,
      scaleY: 1,
      r: 0,
      opacity: 0.85,
      blendMode: "normal",
      visible: true,
      locked: false,
      zIndex: 1,
      source: styleA.name,
      category: "structural",
      materialAssociation: styleA.materials[0],
      color: colorA,
      created: Date.now() - 30000
    },
    {
      id: uid(),
      name: `${styleB.name} Transformative Foliage`,
      type: "motif",
      motifId: motifB1,
      x: 25,
      y: 48,
      s: 44,
      scaleX: 1,
      scaleY: 1,
      r: -6,
      opacity: 0.92,
      blendMode: "multiply",
      visible: true,
      locked: false,
      zIndex: 2,
      source: styleB.name,
      category: "botanical",
      materialAssociation: styleB.materials[0],
      color: colorB,
      created: Date.now() - 20000
    },
    {
      id: uid(),
      name: `${styleB.name} Accent Medallion`,
      type: "motif",
      motifId: motifB2,
      x: 75,
      y: 48,
      s: 44,
      scaleX: -1,
      scaleY: 1,
      r: 6,
      opacity: 0.92,
      blendMode: "multiply",
      visible: true,
      locked: false,
      zIndex: 3,
      source: styleB.name,
      category: "symbol",
      materialAssociation: styleB.materials[1] || styleB.materials[0],
      color: colorB,
      created: Date.now() - 15000
    },
    {
      id: uid(),
      name: `${styleA.name} Iconic Centerpiece`,
      type: "motif",
      motifId: motifA1,
      x: 50,
      y: 52,
      s: 48,
      scaleX: 1,
      scaleY: 1,
      r: 0,
      opacity: 0.98,
      blendMode: "normal",
      visible: true,
      locked: false,
      zIndex: 4,
      source: styleA.name,
      category: "figure",
      materialAssociation: styleA.materials[0],
      color: colorA,
      created: Date.now() - 10000
    }
  ];
}

export function evaluateSynthesis(elements = [], strokes = [], styleA, styleB, concept, composition) {
  if (!styleA || !styleB) {
    return { balance: 70, diversity: 70, coherence: 70, documentation: 80, compatibility: 85 };
  }

  const countA = elements.filter((e) => e.source === styleA.name).length;
  const countB = elements.filter((e) => e.source === styleB.name).length;
  const studentStrokes = strokes.length;

  // 1. Balance between source traditions (100 is perfectly even)
  const totalSources = countA + countB;
  let balance = 50;
  if (totalSources > 0) {
    const ratio = Math.min(countA, countB) / Math.max(countA, countB);
    balance = Math.round(55 + ratio * 40);
  }

  // 2. Diversity of motif categories (structural, botanical, figure, symbol, brushwork)
  const categories = new Set(elements.map((e) => e.category));
  if (studentStrokes > 0) categories.add("freehand");
  const diversity = Math.min(98, 45 + categories.size * 13);

  // 3. Structural Coherence (compositional balance)
  const coherence = Math.min(99, 60 + Math.min(elements.length, 6) * 5 + (studentStrokes > 0 ? 8 : 0));

  // 4. Material & Grammar Compatibility from Matrix
  const matrixA = styleA.matrix || { line: 4, geometry: 4 };
  const matrixB = styleB.matrix || { line: 4, geometry: 4 };
  const diffGeo = Math.abs(matrixA.geometry - matrixB.geometry);
  const compScore = Math.min(99, 70 + (5 - diffGeo) * 5 + Math.min(matrixA.line, matrixB.line) * 2);

  return {
    balance: Math.min(99, balance),
    diversity: Math.min(99, diversity),
    coherence: Math.min(99, coherence),
    compatibility: Math.min(99, compScore),
    documentation: 92
  };
}

export function generateCuratorCritique(elements, strokes, styleA, styleB, concept, composition, score) {
  const countA = elements.filter((e) => e.source === styleA.name).length;
  const countB = elements.filter((e) => e.source === styleB.name).length;
  const strokeCount = strokes.length;

  let critique = "";
  let tag = "Harmonious Synthesis";

  if (countA === 0 || countB === 0) {
    tag = "Unequal Representation";
    critique = `The current study heavily privileges ${countA === 0 ? styleB.name : styleA.name}. To achieve authentic synthesis rather than an isolated study, introduce key structural or decorative principles from ${countA === 0 ? styleA.name : styleB.name} into the shared visual field.`;
  } else if (Math.abs(countA - countB) >= 3) {
    tag = "Dominant Hierarchy";
    critique = `While both ${styleA.name} and ${styleB.name} are present, ${countA > countB ? styleA.name : styleB.name} is visually dominant. Consider allowing ${countA > countB ? styleB.name : styleA.name}'s motifs to serve as the framing structure or internal texture to create higher compositional equilibrium.`;
  } else if (score.diversity < 65) {
    tag = "Uniform Grammar";
    critique = `Good initial dialogue between ${styleA.name} and ${styleB.name}, but the artwork is primarily using one category of elements. Try incorporating contrasting botanical vines or structural enclosures alongside the figurative elements.`;
  } else {
    tag = "Exemplary Synthesis";
    critique = `Strong visual dialogue. The geometric economy of ${styleA.name} and the intricate ornamental vocabulary of ${styleB.name} inhabit a unified spatial field under '${composition}'. The integration of ${strokeCount > 0 ? `direct freehand brushwork (${strokeCount} strokes) with ` : ""}curated motif studies creates an original, defensible student transformation.`;
  }

  return { tag, critique };
}

export function formatTimestamp(time = Date.now()) {
  const d = new Date(time);
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

export const STORAGE_KEY = "synthesis_atelier_v2_project";

export function saveProjectToLocalStorage(projectData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...projectData, lastAutosaved: Date.now() }));
    return true;
  } catch (err) {
    console.error("Autosave error:", err);
    return false;
  }
}

export function loadProjectFromLocalStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.error("Load error:", err);
    return null;
  }
}
