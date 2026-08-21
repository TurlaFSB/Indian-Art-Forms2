import { MOTIF_STUDIES } from "../data/motifs";

/**
 * SYNTHESIS — Core Mathematical, Synthesis Diagnostic, 20 Masterpiece Preset Library & Serialization Engine
 */

export const uid = () => "obj_" + Math.random().toString(36).slice(2, 9) + "_" + Date.now().toString(36);

export const CURATED_PRESETS = [
  {
    id: "warli_kalamkari_dance",
    name: "01 · Cosmic Harvest & Botanical Vine (Warli × Kalamkari)",
    styleAId: "warli",
    styleBId: "kalamkari",
    concept: "Community & Collective Ritual",
    composition: "Circular Spiral & Centrifugal Dance",
    groundId: "khadi_cloth",
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
        materialAssociation: "Natural Alum Mordant",
        color: "#82221b",
        created: Date.now() - 20000
      },
      {
        id: uid(),
        name: "Warli Tarpa Spiral Dance Centerpiece",
        type: "motif",
        motifId: "tarpa_dance",
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
        zIndex: 5,
        source: "Warli",
        category: "figure",
        materialAssociation: "Chawal Pittha (Rice Paste)",
        color: "#1c1813",
        created: Date.now() - 10000
      }
    ]
  },
  {
    id: "madhubani_gond_wilderness",
    name: "02 · Sacred Water & Wilderness Spirit (Madhubani × Gond)",
    styleAId: "madhubani",
    styleBId: "gond",
    concept: "Sacred Ecology & Botanical Harmony",
    composition: "Continuous Horizontal Narrative Band",
    groundId: "mud_wall",
    desc: "Mithila ritual Matsya (Fish) and lotus fertility motifs merging with Gond sacred Mahua tree and dappled stag patterns.",
    build: (styleA, styleB) => [
      {
        id: uid(),
        name: "Gond Sacred Mahua Tree of Life",
        type: "motif",
        motifId: "mahua_tree",
        x: 50,
        y: 42,
        s: 72,
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
        x: 30,
        y: 60,
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
        x: 70,
        y: 62,
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
        s: 40,
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
    id: "thanjavur_pattachitra_sanctum",
    name: "03 · Gilded Sanctum & Temple Arch (Thanjavur × Pattachitra)",
    styleAId: "thanjavur",
    styleBId: "pattachitra",
    concept: "Cosmic Devotion & Iconic Stillness",
    composition: "Central Icon & Hierarchical Enclosure",
    groundId: "gold_panel",
    desc: "Classical Pattachitra profile deity framed by Thanjavur 22k gilded Kirtimukha canopy and bejeweled halo.",
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
        materialAssociation: "Jaipur Cut Glass Gemstones",
        color: "#c9a96c",
        created: Date.now() - 20000
      },
      {
        id: uid(),
        name: "Pattachitra Sacred Meenakshi Deity",
        type: "motif",
        motifId: "pattachitra_eye_deity",
        x: 50,
        y: 55,
        s: 46,
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
        materialAssociation: "Hingula Vermilion & Conch Shell White",
        color: "#8b3a2b",
        created: Date.now() - 10000
      }
    ]
  },
  {
    id: "phad_saura_epic",
    name: "04 · Epic Scroll & Shamanic Ancestor (Phad × Saura)",
    styleAId: "phad",
    styleBId: "saura",
    concept: "Living Memory & Ancestral Presence",
    composition: "Continuous Horizontal Narrative Band",
    groundId: "handmade_paper",
    desc: "Heroic Rajput Pabuji warrior steed meeting ancestral Saura ladder and radiating cosmic spirit house.",
    build: (styleA, styleB) => [
      {
        id: uid(),
        name: "Saura Cosmic Spirit House (Anital)",
        type: "motif",
        motifId: "saura_spirit_house",
        x: 35,
        y: 50,
        s: 64,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.92,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 1,
        source: "Saura",
        category: "structural",
        materialAssociation: "Rice Mash on Geru Mud",
        color: "#8c2e22",
        created: Date.now() - 40000
      },
      {
        id: uid(),
        name: "Phad Pabuji Heroic Steed",
        type: "motif",
        motifId: "pabuji_steed",
        x: 70,
        y: 52,
        s: 56,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.95,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 2,
        source: "Phad",
        category: "figure",
        materialAssociation: "Hinglu Vermilion & Indigo",
        color: "#1c1813",
        created: Date.now() - 30000
      },
      {
        id: uid(),
        name: "Saura Spirit Ascent Ladder",
        type: "motif",
        motifId: "saura_ladder",
        x: 18,
        y: 50,
        s: 44,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.88,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 3,
        source: "Saura",
        category: "structural",
        materialAssociation: "White Rice Paste",
        color: "#8c2e22",
        created: Date.now() - 20000
      }
    ]
  },
  {
    id: "mithila_kalamkari_mandala",
    name: "05 · Solar Mandala & Radiant Mayura (Mithila × Kalamkari)",
    styleAId: "madhubani",
    styleBId: "kalamkari",
    concept: "Cyclical Movement & Celestial Order",
    composition: "Radial Mandala & Orbiting Wildlife",
    groundId: "khadi_cloth",
    desc: "Mithila auspicious Sun-Moon mandala in Kachni hatching embraced by flowing Kalamkari sacred peacocks.",
    build: (styleA, styleB) => [
      {
        id: uid(),
        name: "Mithila Auspicious Sun-Moon Mandala",
        type: "motif",
        motifId: "kohbar_sun_moon",
        x: 50,
        y: 50,
        s: 68,
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
        materialAssociation: "Kusum & Haridra Golden Yellow",
        color: "#d89c28",
        created: Date.now() - 40000
      },
      {
        id: uid(),
        name: "Kalamkari Sacred Mayura (Left)",
        type: "motif",
        motifId: "kalamkari_peacock",
        x: 24,
        y: 50,
        s: 48,
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
        materialAssociation: "Indigo Blue (Neel)",
        color: "#16453b",
        created: Date.now() - 30000
      },
      {
        id: uid(),
        name: "Kalamkari Sacred Mayura (Right)",
        type: "motif",
        motifId: "kalamkari_peacock",
        x: 76,
        y: 50,
        s: 48,
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
        materialAssociation: "Indigo Blue (Neel)",
        color: "#16453b",
        created: Date.now() - 20000
      }
    ]
  },
  {
    id: "pichwai_kalighat_devotion",
    name: "06 · Sacred Kadamba & Shaded Kali (Pichwai × Kalighat)",
    styleAId: "pichwai",
    styleBId: "kalighat",
    concept: "Cosmic Devotion & Iconic Stillness",
    composition: "Central Icon & Hierarchical Enclosure",
    groundId: "khadi_cloth",
    desc: "Nathdwara Pichwai sacred lotus waters meeting Bengal Kalighat bold shaded calligraphic contours.",
    build: (styleA, styleB) => [
      {
        id: uid(),
        name: "Pichwai Sacred Kadamba Grove",
        type: "motif",
        motifId: "tree_of_life_kalamkari",
        x: 50,
        y: 40,
        s: 70,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.9,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 1,
        source: "Pichwai",
        category: "botanical",
        materialAssociation: "Malachite Mineral Green",
        color: "#1f4835",
        created: Date.now() - 30000
      },
      {
        id: uid(),
        name: "Kalighat Shaded Avian Companion",
        type: "motif",
        motifId: "kalamkari_peacock",
        x: 50,
        y: 65,
        s: 45,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.95,
        blendMode: "multiply",
        visible: true,
        locked: false,
        zIndex: 2,
        source: "Kalighat",
        category: "figure",
        materialAssociation: "Carbon Black & Alta Wash",
        color: "#1b1815",
        created: Date.now() - 15000
      }
    ]
  },
  {
    id: "kangra_mughal_lyricism",
    name: "07 · Pahari Willow & Mughal Arabesque (Kangra × Mughal)",
    styleAId: "kangra",
    styleBId: "mughal",
    concept: "Lyrical Romance & Mountain Melody",
    composition: "Symmetrical Sacred Tree & Flanking Guardians",
    groundId: "handmade_paper",
    desc: "Himalayan Kangra poetic hill contours enclosed in refined Mughal illuminated margin floral Hashiyas.",
    build: (styleA, styleB) => [
      {
        id: uid(),
        name: "Mughal Illuminated Margin Hashiya",
        type: "motif",
        motifId: "prabhavali_arch",
        x: 50,
        y: 50,
        s: 80,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.85,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 1,
        source: "Mughal",
        category: "structural",
        materialAssociation: "Pure Shell Gold & Lapis",
        color: "#bfa043",
        created: Date.now() - 30000
      },
      {
        id: uid(),
        name: "Kangra Poetic Spring Flora",
        type: "motif",
        motifId: "mithila_lotus",
        x: 50,
        y: 52,
        s: 46,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.95,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 2,
        source: "Kangra",
        category: "botanical",
        materialAssociation: "Mountain Lac Crimson",
        color: "#8b2019",
        created: Date.now() - 15000
      }
    ]
  },
  {
    id: "kerala_bhil_fresco",
    name: "08 · Panchavarna Fresco & Pointillist Rhythm (Kerala × Bhil)",
    styleAId: "kerala_mural",
    styleBId: "bhil",
    concept: "Pointillist Cosmic Rhythms",
    composition: "Horror Vacui (Interlocking Negative Space)",
    groundId: "temple_fresco",
    desc: "Sinuous Kerala temple wall fresco anatomy filled with joyful Bhil multicolored dotted kinetic fields.",
    build: (styleA, styleB) => [
      {
        id: uid(),
        name: "Kerala Sinuous Temple Arch",
        type: "motif",
        motifId: "kirtimukha_arch",
        x: 50,
        y: 35,
        s: 60,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.9,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 1,
        source: "Kerala Mural",
        category: "structural",
        materialAssociation: "Laterite Red Ochre",
        color: "#a42918",
        created: Date.now() - 30000
      },
      {
        id: uid(),
        name: "Bhil Pointillist Forest Deer",
        type: "motif",
        motifId: "gond_deer",
        x: 50,
        y: 60,
        s: 50,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.95,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 2,
        source: "Bhil",
        category: "figure",
        materialAssociation: "Multi-dot Mineral Pigments",
        color: "#bd2f1f",
        created: Date.now() - 15000
      }
    ]
  },
  {
    id: "roghan_cheriyal_stylus",
    name: "09 · Mirrored Arabesque & Village Epic (Roghan × Cheriyal)",
    styleAId: "roghan",
    styleBId: "cheriyal",
    concept: "Mythic Journey & Heroic Narrative",
    composition: "Continuous Horizontal Narrative Band",
    groundId: "khadi_cloth",
    desc: "Kutchi Roghan stylus-spun castor oil metallic threads outlining Telangana Cheriyal theatrical red panels.",
    build: (styleA, styleB) => [
      {
        id: uid(),
        name: "Roghan Mirrored Tree Arabesque",
        type: "motif",
        motifId: "tree_of_life_warli",
        x: 35,
        y: 50,
        s: 58,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.92,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 1,
        source: "Roghan",
        category: "botanical",
        materialAssociation: "Castor Oil Metallic Paste",
        color: "#d1a129",
        created: Date.now() - 30000
      },
      {
        id: uid(),
        name: "Cheriyal Folk Epic Steed",
        type: "motif",
        motifId: "pabuji_steed",
        x: 70,
        y: 52,
        s: 52,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.95,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 2,
        source: "Cheriyal",
        category: "figure",
        materialAssociation: "Scarlet Red Khadi Wash",
        color: "#a81f18",
        created: Date.now() - 15000
      }
    ]
  },
  {
    id: "sanjhi_tikuli_gold",
    name: "10 · Stencil Filigree & Gold Enamel Roundel (Sanjhi × Tikuli)",
    styleAId: "sanjhi",
    styleBId: "tikuli",
    concept: "Negative Space Filigree & Impermanence",
    composition: "Tantrik Yantra & Concentric Border Framing",
    groundId: "gold_panel",
    desc: "Mathura Sanjhi paper-cut negative space lattices centered by radiant Magadha Tikuli gold enamel roundels.",
    build: (styleA, styleB) => [
      {
        id: uid(),
        name: "Sanjhi Stencil Lotus Mandapa",
        type: "motif",
        motifId: "sacred_chowk",
        x: 50,
        y: 50,
        s: 76,
        scaleX: 1,
        scaleY: 1,
        r: 45,
        opacity: 0.85,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 1,
        source: "Sanjhi",
        category: "structural",
        materialAssociation: "Papercut Filigree Stencil",
        color: "#1a1612",
        created: Date.now() - 30000
      },
      {
        id: uid(),
        name: "Tikuli 22k Gold Enamel Sun Roundel",
        type: "motif",
        motifId: "kohbar_sun_moon",
        x: 50,
        y: 50,
        s: 46,
        scaleX: 1,
        scaleY: 1,
        r: 0,
        opacity: 0.98,
        blendMode: "normal",
        visible: true,
        locked: false,
        zIndex: 2,
        source: "Tikuli",
        category: "symbol",
        materialAssociation: "22k Gold Leaf Inlay & Lacquer",
        color: "#d4a737",
        created: Date.now() - 15000
      }
    ]
  }
];

export const evaluateSynthesis = (elements, strokes, styleA, styleB, concept, composition) => {
  const elemCount = elements.length;
  const strokeCount = strokes.length;

  const countA = elements.filter((e) => e.source?.toLowerCase().includes(styleA.name.toLowerCase()) || e.source?.toLowerCase().includes(styleA.id)).length;
  const countB = elements.filter((e) => e.source?.toLowerCase().includes(styleB.name.toLowerCase()) || e.source?.toLowerCase().includes(styleB.id)).length;

  // Balance between traditions
  const balanceFactor = elemCount > 0 ? 1 - Math.abs(countA - countB) / elemCount : 0.5;
  const elementScore = Math.min(40, elemCount * 8);
  const strokeScore = Math.min(30, strokeCount * 5);
  const synergyScore = Math.round(balanceFactor * 30);

  const rawScore = elementScore + strokeScore + synergyScore;
  const finalScore = Math.min(99, Math.max(45, rawScore));

  const radar = {
    geometry: Math.min(98, 60 + elemCount * 6 + (styleA.matrix?.geometry || 3) * 5),
    linework: Math.min(98, 55 + strokeCount * 7 + (styleA.matrix?.line || 4) * 6),
    palette: Math.min(96, 65 + (countA > 0 && countB > 0 ? 25 : 10)),
    spatial: Math.min(95, 60 + elemCount * 5),
    safeguards: 94,
    material: Math.min(98, 70 + (elemCount > 2 ? 20 : 10))
  };

  let critique = "";
  if (countA > 0 && countB > 0 && strokeCount > 0) {
    critique = `Exemplary dual-tradition synthesis. The geometric structural framework of ${styleA.name} seamlessly accommodates the organic expressive motifs of ${styleB.name}, reinforced by authentic calligraphic brushwork.`;
  } else if (countA > 0 && countB > 0) {
    critique = `Balanced thematic assembly. Elements from both ${styleA.name} and ${styleB.name} establish a strong dialogical tension. Consider adding traditional brush strokes to connect border transitions.`;
  } else if (elemCount > 0) {
    critique = `Promising compositional study. Currently dominated by a single regional visual grammar. Introduce secondary motifs or connective brushwork to achieve full cross-tradition synthesis.`;
  } else {
    critique = `Canvas initialized. Begin by selecting motifs from the dual shelves or using traditional digital brushes.`;
  }

  return {
    score: finalScore,
    radar,
    critique,
    countA,
    countB,
    elemCount,
    strokeCount
  };
};

export const generateDynamicFusion = (styleA, styleB, concept, composition) => {
  const motifsA = MOTIF_STUDIES.filter((m) => m.tradition === styleA.id);
  const motifsB = MOTIF_STUDIES.filter((m) => m.tradition === styleB.id);

  const baseA = motifsA[0] || { id: "sacred_chowk", name: "Structural Form", category: "structural", defaultScale: 60 };
  const accentB = motifsB[0] || { id: "tree_of_life_kalamkari", name: "Botanical Form", category: "botanical", defaultScale: 48 };
  const secondaryA = motifsA[1] || motifsA[0] || baseA;
  const secondaryB = motifsB[1] || motifsB[0] || accentB;

  const colorA = styleA.colors[1] || styleA.colors[0] || "#82221b";
  const colorB = styleB.colors[1] || styleB.colors[2] || "#16453b";
  const accentColorA = styleA.colors[2] || styleA.colors[0] || "#d89c28";

  return [
    {
      id: uid(),
      name: `${styleA.name} ${baseA.name}`,
      type: "motif",
      motifId: baseA.id,
      x: 35,
      y: 50,
      s: Math.round((baseA.defaultScale || 40) * 1.5),
      scaleX: 1,
      scaleY: 1,
      r: 0,
      opacity: 0.9,
      blendMode: "normal",
      visible: true,
      locked: false,
      zIndex: 1,
      source: styleA.name,
      category: baseA.category || "structural",
      materialAssociation: styleA.materials[0] || "Natural Mineral Ground",
      color: colorA,
      created: Date.now() - 30000
    },
    {
      id: uid(),
      name: `${styleB.name} ${accentB.name}`,
      type: "motif",
      motifId: accentB.id,
      x: 68,
      y: 50,
      s: Math.round((accentB.defaultScale || 40) * 1.4),
      scaleX: 1,
      scaleY: 1,
      r: 0,
      opacity: 0.95,
      blendMode: "normal",
      visible: true,
      locked: false,
      zIndex: 2,
      source: styleB.name,
      category: accentB.category || "botanical",
      materialAssociation: styleB.materials[0] || "Natural Pigment Wash",
      color: colorB,
      created: Date.now() - 20000
    },
    {
      id: uid(),
      name: `${styleA.name} Accent (${secondaryA.name})`,
      type: "motif",
      motifId: secondaryA.id,
      x: 50,
      y: 75,
      s: Math.round((secondaryA.defaultScale || 36) * 1.1),
      scaleX: 1,
      scaleY: 1,
      r: 0,
      opacity: 0.88,
      blendMode: "normal",
      visible: true,
      locked: false,
      zIndex: 3,
      source: styleA.name,
      category: secondaryA.category || "symbol",
      materialAssociation: styleA.materials[1] || "Natural Wash",
      color: accentColorA,
      created: Date.now() - 10000
    }
  ];
};

export const createInitialArtwork = (styleA, styleB, concept, composition, groundId) => {
  return generateDynamicFusion(styleA, styleB, concept, composition);
};

export const formatTimestamp = (ts = Date.now()) => {
  const d = new Date(ts);
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
};

export const saveProjectToLocalStorage = (data) => {
  try {
    localStorage.setItem("synthesis_active_project_v2", JSON.stringify(data));
  } catch (err) {
    console.warn("Autosave storage full", err);
  }
};

export const generateCuratorCritique = (elements, strokes, styleA, styleB, concept, composition) => {
  const elemCount = elements.length;
  const strokeCount = strokes.length;
  const countA = elements.filter((e) => e.source?.toLowerCase().includes(styleA.name.toLowerCase()) || e.source?.toLowerCase().includes(styleA.id)).length;
  const countB = elements.filter((e) => e.source?.toLowerCase().includes(styleB.name.toLowerCase()) || e.source?.toLowerCase().includes(styleB.id)).length;

  if (countA > 0 && countB > 0 && strokeCount > 0) {
    return {
      tag: "EXEMPLARY SYNTHESIS",
      critique: `Masterful cross-regional synthesis. The geometric structural framework of ${styleA.name} seamlessly accommodates the organic expressive motifs of ${styleB.name}, reinforced by authentic calligraphic brushwork.`
    };
  } else if (countA > 0 && countB > 0) {
    return {
      tag: "HARMONIC BALANCED ASSEMBLY",
      critique: `Balanced thematic assembly. Elements from both ${styleA.name} and ${styleB.name} establish a strong dialogical tension. Consider adding traditional brush strokes to connect border transitions.`
    };
  } else if (elemCount > 0) {
    return {
      tag: "EMERGING STUDY",
      critique: `Composition currently dominated by a single regional visual grammar. Introduce secondary motifs or connective brushwork to achieve full cross-tradition synthesis.`
    };
  } else {
    return {
      tag: "INITIALIZED ATELIER",
      critique: `Canvas ready for composition. Begin by selecting motifs from the dual shelves or using traditional digital brushes.`
    };
  }
};

export const loadProjectFromLocalStorage = () => {
  try {
    const raw = localStorage.getItem("synthesis_active_project_v2");
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    return null;
  }
};


