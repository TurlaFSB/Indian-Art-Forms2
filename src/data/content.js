/**
 * SYNTHESIS — Comprehensive Cultural, Historical & Pedagogical Dataset
 * Distinguishes: Source Tradition, Documented Visual Principle, Student Transformation, Curatorial Interpretation.
 */

export const STYLES = [
  {
    id: "warli",
    name: "Warli",
    community: "Warli Indigenous Community",
    region: "North Sahyadri / Maharashtra & Gujarat Border",
    period: "Prehistoric roots · Documented living tradition",
    tag: "Tribal · Ritual & Communal",
    colors: ["#ebd9b6", "#1c1813", "#9e432a", "#5a3a23"],
    paletteNames: ["Rice Paste White", "Geru / Red Ochre Mud", "Burnt Earth", "Charcoal Black"],
    motifs: ["tarpa_dance", "sacred_chowk", "tree_of_life_warli", "rice_grain_figure", "hunting_procession"],
    grammar: "Economical geometric figures (two triangles joined at the apex representing cosmic balance of masculine/feminine energies), rhythmic circular repetition, dynamic horizontal bands, and communal scenes organized without single-point perspective.",
    materials: ["Red ochre earth mud wall (Geru)", "Cowdung ground", "Rice paste (Chawal Pittha)", "Chewed bamboo twig brush (Kalam)"],
    context: "Warli painting is an indigenous ritual and domestic visual language traditionally created by women (Savasinis) during weddings (Lagna Chowk), harvests, and seasonal festivals. The circle represents the sun, moon, and cyclical nature; the triangle symbolizes mountains and pointed trees; the square denotes sacred enclosures (Chowk).",
    matrix: { line: 4, geometry: 5, botanical: 2, narrative: 4, textile: 1, ritual: 5, pattern: 4, material: 4 },
    sources: [
      { name: "National Crafts Museum, New Delhi", type: "Museum Collection", ref: "Warli Painting Archive, Acc. No. NCM-WRL-842" },
      { name: "Indira Gandhi National Centre for the Arts (IGNCA)", type: "Institutional Archive", ref: "Tribal & Folk Art Documentation Project" },
      { name: "Dr. Yashodhara Dalmia", type: "Academic Monograph", ref: "The Painted World of the Warlis (Oxford University Press, 1988)" },
      { name: "Jivya Soma Mashe", type: "Pioneering Master Artist", ref: "Contemporary transformation from domestic ritual to global canvas (Padma Shri 2011)" }
    ]
  },
  {
    id: "kalamkari",
    name: "Kalamkari",
    community: "Chitrakara & Textile Artisan Guilds",
    region: "Srikalahasti & Machilipatnam / Andhra Pradesh & Telangana",
    period: "10th Century CE (Chola/Vijayanagara) – Living tradition",
    tag: "Textile · Botanical & Narrative",
    colors: ["#f2e6cb", "#82221b", "#16453b", "#23263b", "#c49232"],
    paletteNames: ["Bleached/Myrobalan Cotton", "Madder Root Crimson", "Indigo Blue / Mineral Green", "Iron & Jaggery Black (Kasi)", "Pomegranate Rind Yellow"],
    motifs: ["tree_of_life_kalamkari", "kalamkari_paisley", "foliage_border", "kalamkari_peacock", "narrative_devotee"],
    grammar: "Controlled calligraphic contour drawn with a bamboo pen (Kalam), undulating organic scrolling vines, interlacing multi-petaled lotuses, dense botanical fill, and multiple resist-dyeing and mordanting stages.",
    materials: ["Unbleached cotton cloth (Khadi)", "Myrobalan milk treatment (Karakka Puvvu)", "Bamboo reed with wool reservoir (Kalam)", "Natural alum mordants", "Vegetable & mineral dyes"],
    context: "Kalamkari comprises two major branches: Srikalahasti (freehand brush drawing of temple narratives, mythological epics, and floral scrolls) and Machilipatnam (block-printed textile courtly patterns). The complex chemical interaction between mordants, natural dyes, and running river water forms an integral part of its material ontology.",
    matrix: { line: 5, geometry: 2, botanical: 5, narrative: 5, textile: 5, ritual: 4, pattern: 5, material: 5 },
    sources: [
      { name: "Victoria and Albert Museum, London", type: "Museum Archive", ref: "Indian Chintz & Kalamkari Textile Collection, IS.12-1988" },
      { name: "Crafts Council of India", type: "Documentation", ref: "Srikalahasti Kalamkari Tradition Heritage File (GI Registered #18)" },
      { name: "Dr. Lotika Varadarajan", type: "Academic Study", ref: "South Indian Traditions of Kalamkari (National Institute of Design, 1982)" },
      { name: "Jonnalagadda Gurappa Chetty", type: "Living Master Artist", ref: "Srikalahasti Freehand Kalamkari Revivalist (Padma Shri 2008)" }
    ]
  },
  {
    id: "madhubani",
    name: "Mithila / Madhubani",
    community: "Mithila Women's Collectives & Artisan Lineages",
    region: "Mithila Region / Bihar & Janakpur (Nepal)",
    period: "Ancient origin · Documented 14th C. (Vidyapati era) – Living",
    tag: "Folk · Ritual & Symbolic",
    colors: ["#f7ecd1", "#94251c", "#1d585e", "#d89c28", "#1c1815"],
    paletteNames: ["Mud-Plaster / Khadi Ground", "Sindoor Terracotta", "Kusum / Indigo Turquoise", "Turmeric / Kusum Golden Yellow", "Lampblack (Kajal)"],
    motifs: ["sacred_fish", "kohbar_sun_moon", "mithila_lotus", "mithila_parrot", "kachni_lattice"],
    grammar: "Double-contour lines filled with ultra-fine parallel hatching (Kachni) or flat saturated pigment washes (Bharni), horror vacui (filling all negative space with floral and geometric micro-motifs), prominent almond-shaped fish eyes, and absence of shading.",
    materials: ["Cowdung & clay wash on wall", "Handmade paper treated with cowdung", "Bamboo twigs with cotton wrap", "Nibs & matchsticks", "Plant pigments (Aparajita, Palas, Haridra)"],
    context: "Traditionally painted by women on domestic nuptial chambers (Kohbar Ghar) and prayer rooms (Gosain Ghar) across distinct stylistic lineages: Bharni, Kachni, Tantrik, Godna, and Gobar. The artwork acts as an auspicious blessing invoking fertility, cosmic harmony, and community protection.",
    matrix: { line: 5, geometry: 4, botanical: 4, narrative: 4, textile: 2, ritual: 5, pattern: 5, material: 4 },
    sources: [
      { name: "Mithila Museum, Niigata, Japan", type: "Dedicated Museum Archive", ref: "Collection of over 850 Master Mithila Paintings" },
      { name: "National Museum, New Delhi", type: "Folk Art Gallery", ref: "Masterpieces of Mithila Painting Catalog" },
      { name: "Yves Vequaud", type: "Pioneering Monograph", ref: "The Women Painters of Mithila (Thames and Hudson, 1977)" },
      { name: "Ganga Devi & Sita Devi", type: "Pioneering Master Artists", ref: "Transforms domestic wall painting into modernist global paper art (Padma Shri)" }
    ]
  },
  {
    id: "gond",
    name: "Gond",
    community: "Pardhan Gond Adivasi Community",
    region: "Mandla, Dindori & Central Deccan / Madhya Pradesh",
    period: "Centuries of oral epics · Modern paper movement since 1980s",
    tag: "Tribal · Ecological & Mythic",
    colors: ["#eddabb", "#b23e25", "#245638", "#d38e2d", "#2d2a45"],
    paletteNames: ["Natural Canvas Ground", "Geru Red Ochre", "Ramraj Ochre / Leaf Green", "Chuna Lime Yellow", "Kala Koyla / Deep Indigo"],
    motifs: ["gond_deer", "mahua_tree", "gond_bird_flock", "dot_wave_field", "nature_serpent"],
    grammar: "Nature and spirit beings rendered with sweeping silhouette contours, whose interiors are filled with rhythmic, pulsating micro-patterns composed of repetitive dots (Bindiya), dashes, curved scales, and parallel hatchings unique to each artist's clan signature.",
    materials: ["Mud walls with Geru & Chuna", "Contemporary handmade acid-free paper", "Canvas supports", "Natural clay (Chui mitti, Ramraj mitti)", "Pigments & acrylics"],
    context: "Historically the Pardhan Gonds were the bardic musicians (Bana players) of the Gond kingdoms who sang genealogies and myths. In the 1980s, master artist Jangarh Singh Shyam pioneered 'Jangarh Kalam', translating sacred forest spirits (Devatas), trees, and animals into a vibrant contemporary graphic movement.",
    matrix: { line: 4, geometry: 3, botanical: 5, narrative: 4, textile: 2, ritual: 4, pattern: 5, material: 4 },
    sources: [
      { name: "Bharat Bhavan, Bhopal", type: "State Art Institution", ref: "Jangarh Singh Shyam Early Graphic Archive (1981-1995)" },
      { name: "Museum of Archaeology and Anthropology, Cambridge", type: "Archive", ref: "Contemporary Pardhan Gond Collection" },
      { name: "Udayan Vajpeyi", type: "Critical Study", ref: "Jangarh Kalam: Narrative and Visual Modernism in Gond Art (2008)" },
      { name: "Jangarh Singh Shyam & Bhajju Shyam", type: "Master Artists", ref: "Founders of Contemporary Gond Visual Language (Padma Shri)" }
    ]
  },
  {
    id: "pattachitra",
    name: "Pattachitra",
    community: "Chitrakara Artisan Guild of Raghurajpur & Bengal Patuas",
    region: "Puri / Odisha & Midnapore / West Bengal",
    period: "12th Century CE (Ganga dynasty / Jagannath temple) – Living",
    tag: "Scroll · Iconographic & Temple Devotional",
    colors: ["#ebd5a5", "#9d2019", "#18493d", "#1f2238", "#ca9634"],
    paletteNames: ["Tamarind Cloth / Talapatra Ground", "Hingula Vermilion", "Haritala Mineral Green", "Kala Deep Lampblack", "Geru Golden Yellow"],
    motifs: ["pattachitra_eye_deity", "prabhavali_arch", "mythical_makara", "processional_steed", "floral_scroll_border"],
    grammar: "Strict classical iconographic canons, dramatic profile views with enlarged fish-tail eyes (Meenakshi), bold black outlining, decorative framing bands (Patti), absence of cast shadows, and brilliant jewel-toned mineral color fields with protective shellac varnish.",
    materials: ["Patti (Stiffened cloth laminated with tamarind paste & chalk)", "Palm leaf strips (Tala-patra)", "Iron stylus (Lekhani)", "Conch shell powder (Sankha) for white", "Lampblack & natural minerals", "Liquid tree resin (Katha)"],
    context: "In Odisha, Pattachitra paintings are intimately linked to the rituals of the Jagannath Temple at Puri, serving as proxy icons (Anavasara Pati) when the deities undergo ritual convalescence. In Bengal, Patua scrolls are unrolled by travelling singing storytellers.",
    matrix: { line: 5, geometry: 3, botanical: 4, narrative: 5, textile: 4, ritual: 5, pattern: 5, material: 5 },
    sources: [
      { name: "Odisha State Museum, Bhubaneswar", type: "State Collection", ref: "Tala-patra Palm Leaf & Pattachitra Manuscript Archive" },
      { name: "Victoria and Albert Museum, London", type: "Museum Archive", ref: "19th Century Puri Temple Pilgrim Paintings" },
      { name: "Dr. Jyotindra Jain", type: "Academic Treatise", ref: "Picture Showmen: Insights into the Narrative Tradition in Indian Art (1998)" },
      { name: "Jagannath Mohapatra & Raghunath Mohapatra", type: "Master Chitrakaras", ref: "Preservers of Raghurajpur Heritage Village" }
    ]
  },
  {
    id: "thanjavur",
    name: "Thanjavur",
    community: "Raju & Jinagar Courtly Artisan Lineages",
    region: "Thanjavur / Tamil Nadu",
    period: "Late 16th – 18th Century CE (Nayaka & Maratha Rule) – Living",
    tag: "Courtly · Devotional & Gold Gesso Relief",
    colors: ["#ebd8b0", "#8f231b", "#224738", "#c89f38", "#171410"],
    paletteNames: ["Polished Jackwood Ground", "Deep Carmine Red", "Emerald Mineral Green", "22k Gold Leaf / Foil", "Carbon Lampblack"],
    motifs: ["kirtimukha_arch", "bejeweled_halo", "royal_canopy", "temple_pillar", "ornate_gesso_border"],
    grammar: "Symmetrical frontal hierarchy with a large central divine icon surrounded by architectural arches, three-dimensional high-relief gesso work (Sukkan / unboiled chalk plaster paste), inset polished glass stones or semi-precious gems, and gleaming 22-carat gold foil cladding.",
    materials: ["Jackwood / Teak wooden board (Palagai)", "Unbleached cloth pasted with Arabic gum", "Sukkan gesso paste (Lime, chalk & gum)", "22-karat gold foil (Varak)", "Natural stone powders & mineral colours"],
    context: "Developed under the patronage of the Thanjavur Nayakas and Maratha rulers (especially King Serfoji II), blending Vijayanagara, Deccani, and European portraiture influences into a radiant domestic and temple devotional icon designed to catch oil lamp illumination.",
    matrix: { line: 4, geometry: 4, botanical: 3, narrative: 3, textile: 1, ritual: 5, pattern: 5, material: 5 },
    sources: [
      { name: "Thanjavur Art Gallery / Maratha Palace", type: "Historic Royal Collection", ref: "Royal Court Paintings of the Nayaka & Maratha Eras" },
      { name: "Government Museum, Chennai", type: "Museum Collection", ref: "Iconography and Techniques of Tanjore Panels Archive" },
      { name: "Dr. C. Sivaramamurti", type: "Art History Study", ref: "South Indian Paintings (National Museum, 1968)" },
      { name: "GI Registry of India", type: "Geographical Indication", ref: "Thanjavur Paintings (GI Tag #11, 2007)" }
    ]
  },
  {
    id: "saura",
    name: "Saura",
    community: "Saura Indigenous Community",
    region: "Rayagada, Gajapati & Koraput / Odisha Hills",
    period: "Ancient prehistoric lineage · Living ritual practice",
    tag: "Tribal · Ritual Shamanic (Anital / Ikons)",
    colors: ["#ebdcb8", "#2f271f", "#9c4828", "#5b3820"],
    paletteNames: ["Red Earth / Terracotta Mud Wall", "Charcoal Night Brown", "Rice Powder White", "Burnt Siderite Ochre"],
    motifs: ["saura_spirit_house", "ancestor_procession", "sacred_palm", "sun_chariot", "village_ladder"],
    grammar: "Linear stick figures with flared trapezoidal torsos and elongated limbs, framed within an architectural shrine rectangle (Idital), organized in multi-tier stacked narratives depicting ancestor rituals, musical dances, agricultural cycles, and cosmos.",
    materials: ["Mud plaster wall seasoned with red earth (Geru)", "Rice flour paste suspended in water", "Fine bamboo sliver brush", "Plant resins for binder"],
    context: "Saura paintings (called Idital or Anital) are sacred murals created by the village priest-shaman (Kudangs) inside tribal homes to appease ancestral spirits (Labasum), celebrate childbirth, cure illness, and ensure bountiful crops. Unlike Warli, figures possess distinct angular torsos without joined apex triangles.",
    matrix: { line: 4, geometry: 5, botanical: 3, narrative: 4, textile: 1, ritual: 5, pattern: 4, material: 4 },
    sources: [
      { name: "Tribal Research Institute Museum, Bhubaneswar", type: "Anthropological Archive", ref: "Saura Idital Wall Murals Survey & Sound Recordings" },
      { name: "Verrier Elwin", type: "Classic Anthropological Treatise", ref: "The Religion of an Indian Tribe (Oxford University Press, 1955)" },
      { name: "IGNCA Eastern Regional Centre", type: "Documentation", ref: "Visual Vocabulary of the Lanjia Sauras of Odisha (2012)" },
      { name: "Lanjia Saura Artisan Guilds", type: "Community Custodians", ref: "GI Registration #417 for Saura Painting (2020)" }
    ]
  },
  {
    id: "phad",
    name: "Phad",
    community: "Joshi Artisan Families & Bhopa/Bhopi Bards",
    region: "Bhilwara & Shahpura / Rajasthan",
    period: "14th Century CE – Living bardic performance tradition",
    tag: "Scroll · Heroic Epic & Performance",
    colors: ["#e9d29f", "#8b2118", "#1c4a39", "#3b2b4f", "#cf9834"],
    paletteNames: ["Starched Khadi Scroll Ground", "Vermilion (Sindoor)", "Kachha Green", "Kala Lampblack", "Pila Peori (Golden Yellow)"],
    motifs: ["pabuji_steed", "phad_court_pavilion", "battle_camel", "continuous_scroll_frame", "royal_chhatri"],
    grammar: "Massive horizontal cloth scroll (15 to 30 feet long) packed with simultaneous narrative scenes; figures face each other rather than the viewer, hierarchical scaling where heroes and deities are largest, strict sequence of color application starting with orange/yellow and culminating in black eye opening.",
    materials: ["Handspun cotton khadi starched with boiled wheat flour & gum", "Polished smooth with a mohra stone", "Earthen & mineral pigments", "Goat hair brushes"],
    context: "Phad paintings are portable temple scrolls celebrating folk deities like Pabuji and Devnarayan. At night, priest-singers (Bhopas) unroll the scroll under open skies, playing the Ravanahatha violin while singing and dancing the epic as their partner (Bhopi) illuminates specific narrative scenes with an oil lantern.",
    matrix: { line: 5, geometry: 3, botanical: 2, narrative: 5, textile: 5, ritual: 5, pattern: 4, material: 5 },
    sources: [
      { name: "National Museum, New Delhi", type: "Scroll Collection", ref: "Pabuji Ki Phad 18th & 19th Century Scrolls, Acc. No. 62.124" },
      { name: "Jawahar Kala Kendra, Jaipur", type: "Folk Archive", ref: "Bhopa Bardic Performance Documentation" },
      { name: "John D. Smith", type: "Academic Masterwork", ref: "The Epic of Pabuji: A Study, Text and Translation (Cambridge University Press, 1991)" },
      { name: "Shree Lal Joshi & Pradip Mukherjee", type: "Master Phad Painters", ref: "Modernizers of the Phad Heritage (Padma Shri)" }
    ]
  }
];

export const MATERIALS = [
  {
    id: "earth",
    name: "Earth Mud & Terracotta Wall",
    icon: "EARTH",
    physics: { particleDensity: 8, opacity: 9, texture: 9, edgeDiffusion: 4 },
    description: "Earthen wall seasoned with cow dung, geru clay, and husk. Forms a warm, porous, matte background where pigments fuse into the substrate.",
    traditions: ["warli", "madhubani", "saura"],
    bgClass: "ground-mud-wall"
  },
  {
    id: "rice",
    name: "Rice Paste & Light Ground (Chawal Pittha)",
    icon: "RICE",
    physics: { particleDensity: 7, opacity: 8, texture: 7, edgeDiffusion: 3 },
    description: "Finely soaked, stone-ground rice flour mixed with natural water-soluble tree gums. Gives crisp, chalky white lines with subtle dimensional relief.",
    traditions: ["warli", "madhubani", "saura"],
    bgClass: "ground-rice-plaster"
  },
  {
    id: "khadi",
    name: "Unbleached Cotton Cloth (Khadi)",
    icon: "TEXTILE",
    physics: { particleDensity: 5, opacity: 7, texture: 8, edgeDiffusion: 6 },
    description: "Handspun, handwoven cotton treated with myrobalan (harda) and buffalo milk to prevent dye bleeding while accepting natural iron and alum mordants.",
    traditions: ["kalamkari", "pattachitra", "phad"],
    bgClass: "ground-khadi-cloth"
  },
  {
    id: "handmade_paper",
    name: "Tamarind-Treated Handmade Paper",
    icon: "PAPER",
    physics: { particleDensity: 6, opacity: 8, texture: 6, edgeDiffusion: 4 },
    description: "Cotton-rag and hemp pulp paper seasoned with tamarind seed gum or cowdung wash, offering a smooth yet toothy organic surface for calligraphic line work.",
    traditions: ["madhubani", "gond", "saura"],
    bgClass: "ground-handmade-paper"
  },
  {
    id: "gold_panel",
    name: "Gesso-Layered Jackwood Panel (Palagai)",
    icon: "GOLD",
    physics: { particleDensity: 9, opacity: 10, texture: 9, edgeDiffusion: 1 },
    description: "Rigid seasoned jackwood board coated with unboiled limestone gesso relief (sukkan), layered with pure 22k gold foil and faceted glass gems.",
    traditions: ["thanjavur"],
    bgClass: "ground-gold-panel"
  },
  {
    id: "talapatra",
    name: "Palm Leaf Strip (Tala-patra)",
    icon: "PALM",
    physics: { particleDensity: 8, opacity: 9, texture: 8, edgeDiffusion: 2 },
    description: "Cured palmyra palm leaves stitched with thread, etched with a sharp iron stylus, and rubbed with lampblack and bean juice to make incisions permanent.",
    traditions: ["pattachitra"],
    bgClass: "ground-talapatra"
  }
];

export const CONCEPTS = [
  "Community & Collective Ritual",
  "Sacred Ecology & Botanical Harmony",
  "Mythic Journey & Heroic Narrative",
  "Living Memory & Ancestral Presence",
  "Cyclical Movement & Celestial Order",
  "Cosmic Devotion & Iconic Stillness",
  "Domestic Celebration & Auspicious Blessings",
  "Nature Spirit & Ecological Sanctuary",
  "Migration, Forest & Settlement",
  "Contemporary Indian Urban Synthesis"
];

export const COMPOSITIONS = [
  "Central Icon & Hierarchical Enclosure",
  "Circular Spiral & Centrifugal Dance",
  "Continuous Horizontal Narrative Band",
  "Symmetrical Temple Shrine & Arch",
  "Dense Pattern Field (Horror Vacui)",
  "Diagonal Dynamic Rhythm & Flight",
  "Open Ecological Sanctuary Landscape",
  "Stacked Tiered Procession of Figures"
];

export const FUSION_MATRIX_DIMENSIONS = [
  { key: "line", name: "Linear Quality & Contour Dynamics" },
  { key: "geometry", name: "Geometric vs Organic Grammar" },
  { key: "botanical", name: "Botanical & Floral Complexity" },
  { key: "narrative", name: "Narrative & Sequential Storytelling" },
  { key: "textile", name: "Textile & Mordant Heritage" },
  { key: "ritual", name: "Ritual & Shamanic Function" },
  { key: "pattern", name: "Surface Pattern Density" },
  { key: "material", name: "Support & Pigment Chemistry" }
];

export const ROUTES = [
  {
    name: "Earth to Image",
    subtitle: "Pigment, Mud Surface & Elemental Mark-Making",
    text: "Trace how raw earth ochres, rice pastes, and natural mineral pigments turn domestic and sacred architectural walls into living visual languages.",
    steps: ["warli", "saura", "madhubani", "gond"]
  },
  {
    name: "Narrative on Cloth",
    subtitle: "The Moving Scroll, Textile & Bardic Epic",
    text: "Follow the translation of sung epics and temple mythology into portable textiles, mordant-dyed cottons, and performance scrolls.",
    steps: ["kalamkari", "pattachitra", "phad"]
  },
  {
    name: "The Sacred Surface",
    subtitle: "Hierarchy, Architectural Enclosure & Gold Radiance",
    text: "Explore how temple shrines, devotional deities, and gilded relief panels construct spiritual presence and focal gravity.",
    steps: ["pattachitra", "thanjavur", "madhubani"]
  },
  {
    name: "Pattern as Memory & Ecology",
    subtitle: "Repetition, Dot Stippling & Tribal Animism",
    text: "Compare how indigenous communities convert forest flora, animal forms, and ancestral oral memories into pulsating dot and line systems.",
    steps: ["gond", "warli", "saura", "madhubani"]
  }
];

export const RUBRIC = [
  ["Stylistic Integrity & Provenance", "Distinct visual principles from each source tradition remain clearly identifiable without merely copying existing historical specimens."],
  ["Depth of Creative Synthesis", "Source traditions interact dynamically (e.g. geometric structure blended with botanical contour) rather than occupying segregated halves of the canvas."],
  ["Conceptual & Thematic Clarity", "The student provides a defensible rationale for pairing the traditions and shows how composition reinforces the chosen theme."],
  ["Material & Technical Awareness", "Choice of simulated support ground, line weight, brush pressure, and natural pigment behavior reflects authentic material logic."],
  ["Cultural Respect & Attribution", "Source communities, geographical lineages, and sacred/secular contexts are accurately cited, avoiding cultural flattening."],
  ["Compositional Hierarchy & Rhythm", "Focal hierarchy, directional eye movement, positive/negative balance, and ornamental framing are thoughtfully orchestrated."],
  ["Curatorial Documentation & Defense", "The exhibition dossier, artist statement, layer provenance, and viva defense responses demonstrate rigorous scholarly reflection."]
];

export const QUESTIONS = [
  {
    q: "Which approach demonstrates genuine artistic synthesis rather than mere juxtaposition?",
    opts: [
      "Copying an authentic Warli motif in the top half and pasting a Kalamkari border in the bottom half.",
      "Using the structural geometric grammar of one tradition and transforming the botanical motif vocabulary of another into a new unified spatial relationship.",
      "Applying every bright modern synthetic color across both traditions simultaneously.",
      "Combining all 8 traditions on a single canvas without attribution."
    ],
    ans: 1,
    exp: "True synthesis requires extracting underlying generative principles (geometry, contour rhythm, surface density) and allowing them to actively transform one another into a coherent new visual relationship."
  },
  {
    q: "Why is it academically and culturally essential to designate student digital motifs as 'Curated Digital Motif Studies' rather than 'Authentic Traditional Artworks'?",
    opts: [
      "Because digital software has lower grading value than physical paper.",
      "To explicitly distinguish contemporary digital interpretations from living, hereditary, community-specific ritual and artisan practices.",
      "Because traditional art cannot be rendered digitally.",
      "To avoid having to cite source artists."
    ],
    ans: 1,
    exp: "Responsible digital humanities pedagogy acknowledges that student vectors are educational studies of visual principles, never claiming to replace authentic living community heritage."
  },
  {
    q: "What makes Kalamkari's material and chemical process unique compared to Warli painting?",
    opts: [
      "Kalamkari is only painted with acrylics on cardboard.",
      "Kalamkari relies on freehand bamboo pen drawing with intricate alum/iron mordanting, natural dyes, and river washing on myrobalan-treated cotton khadi.",
      "Kalamkari exclusively uses rice paste on mud walls.",
      "Kalamkari does not use any lines or contours."
    ],
    ans: 1,
    exp: "Kalamkari is grounded in South Indian textile chemistry where the bamboo pen (Kalam) dispenses natural mordants that chemically bond with botanical dyes (madder, indigo, pomegranate) during repeated river baths."
  },
  {
    q: "In Gond painting (Jangarh Kalam), how do artists construct internal volume and visual movement inside animal and botanical silhouettes?",
    opts: [
      "Using western single-point perspective and realistic cast shadows.",
      "Filling the silhouette with dense, rhythmic signature micro-patterns of repetitive dots, dashes, scales, and parallel lines.",
      "Leaving all interiors blank without pigment.",
      "Using photographic collage."
    ],
    ans: 1,
    exp: "Pardhan Gond artists infuse solid silhouettes with spiritual life force (Jeev) through pulsating graphic fields of dots (Bindiya), dashes, and curved scales unique to their clan lineages."
  },
  {
    q: "How does the Thanjavur (Tanjore) painting technique establish visual hierarchy in a devotional artwork?",
    opts: [
      "By painting all figures at the same microscopic size without architectural frames.",
      "Through a prominent central frontal deity, high-relief gesso (sukkan) embossing, inset gems, and radiant 22k gold foil under an ornate arch (Kirtimukha).",
      "Using only black and white stick figures on unprimed paper.",
      "By rendering figures with photorealistic oil glazes."
    ],
    ans: 1,
    exp: "Thanjavur visual grammar is courtly and devotional, employing three-dimensional gesso relief, gold foil reflection, and architectural framing to command the viewer's reverent focus."
  },
  {
    q: "What is the primary ritual and social context of the Saura Idital / Anital murals of Odisha?",
    opts: [
      "They are secular commercial advertisements painted on roadside billboards.",
      "They are sacred household wall murals created by village shamans (Kudangs) to communicate with ancestral spirits (Labasum) and mark life transitions.",
      "They are decorative royal palace ceiling portraits made for Mughal emperors.",
      "They are modern digital animations for cinema."
    ],
    ans: 1,
    exp: "Saura Iditals are shamanic spirit houses created within domestic tribal spaces to preserve cosmological balance, honor ancestors, and invoke community health and fertility."
  },
  {
    q: "In the Rajasthani Phad tradition, how do the Bhopa and Bhopi performers interact with the painted scroll?",
    opts: [
      "They cut the scroll into pieces and distribute it to the audience.",
      "At night, the Bhopa plays the Ravanahatha violin and sings epic ballads while the Bhopi illuminates the relevant painted narrative scenes with an oil lamp.",
      "They keep the scroll locked in a box and never display it.",
      "They recite European poetry without looking at the scroll."
    ],
    ans: 1,
    exp: "Phad is an active performance medium: the massive cloth scroll acts as a mobile temple backdrop illuminated scene-by-scene by lantern light during nocturnal sung epics."
  },
  {
    q: "When preparing an Artist Statement for a regional painting fusion project, which structure is the most academically rigorous and defensible?",
    opts: [
      "Stating 'I blended these styles randomly because I liked the colors.'",
      "Claiming 'This is an authentic traditional artwork made without any modifications.'",
      "Identifying the two source traditions, documenting the specific structural/botanical elements transformed, stating the conceptual intent, and explaining the material ground decision.",
      "Copying the Wikipedia summary of one tradition."
    ],
    ans: 2,
    exp: "A scholarly artist statement clearly articulates source tradition attribution, the specific visual grammar transformed, the conceptual rationale, and the chosen material support."
  }
];

export const VIVA_QUESTIONS_TEMPLATE = [
  {
    id: "tradition_selection",
    prompt: "Why did you select these specific two source traditions for your creative synthesis?",
    guidance: "Articulate the conceptual tension or harmony between the two traditions (e.g. geometric brevity vs. calligraphic botanical density)."
  },
  {
    id: "visual_transformation",
    prompt: "Which visual principles did you extract from each tradition, and how did you transform them into a new relationship?",
    guidance: "Specify which tradition provided structural/compositional framework and which provided internal textural or figurative motifs."
  },
  {
    id: "material_logic",
    prompt: "What is the material rationale behind your choice of simulated canvas support and pigment palette?",
    guidance: "Explain how your choice of ground (Khadi cloth, Mud wall, Tamarind paper, etc.) and pigment chemistry reinforces the artwork's concept."
  },
  {
    id: "synthesis_vs_collage",
    prompt: "Why is your artwork a genuine creative synthesis rather than a decorative collage or side-by-side juxtaposition?",
    guidance: "Describe how elements from both traditions inhabit the same spatial field and modify each other's visual behavior."
  },
  {
    id: "cultural_context",
    prompt: "What cultural, ritual, or community-specific contexts did you research, and how did you ensure respectful attribution?",
    guidance: "Mention source archives, living artist lineages, and how you safeguarded sacred imagery from being treated as superficial clip art."
  },
  {
    id: "challenges_solutions",
    prompt: "What compositional or visual grammar conflicts arose during your creation, and how did you resolve them?",
    guidance: "Discuss balancing negative space, line weights, color saturation, and focal hierarchy."
  },
  {
    id: "future_iteration",
    prompt: "If you were to create Version 2 of this study, what would you develop or investigate further?",
    guidance: "Reflect on further experiments with scale, traditional brush mechanics, or multi-tradition cross-pollination."
  }
];