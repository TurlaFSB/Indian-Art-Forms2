/**
 * SYNTHESIS — Comprehensive Cultural, Historical & Pedagogical Dataset
 * 20 Documented Regional Painting Traditions across India
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
    grammar: "Economical geometric figures (two triangles joined at apex representing cosmic balance), rhythmic circular repetition, dynamic horizontal bands, no single-point perspective.",
    materials: ["Red ochre earth mud wall (Geru)", "Cowdung ground", "Rice paste (Chawal Pittha)", "Chewed bamboo twig brush (Kalam)"],
    context: "Indigenous ritual visual language painted on domestic walls during weddings (Lagna Chowk), harvests, and seasonal festivals invoking nature spirits.",
    matrix: { line: 4, geometry: 5, botanical: 2, narrative: 4, textile: 1, ritual: 5, pattern: 4, material: 4 },
    sources: [
      { name: "National Crafts Museum, New Delhi", type: "Museum Collection", ref: "Warli Painting Archive, Acc. No. NCM-WRL-842" },
      { name: "IGNCA", type: "Institutional Archive", ref: "Tribal & Folk Art Documentation Project" },
      { name: "Dr. Yashodhara Dalmia", type: "Academic Monograph", ref: "The Painted World of the Warlis (OUP 1988)" }
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
    grammar: "Controlled calligraphic contour drawn with a bamboo pen (Kalam), undulating organic scrolling vines, interlacing multi-petaled lotuses, dense botanical fill, and multiple resist-dyeing stages.",
    materials: ["Unbleached cotton cloth (Khadi)", "Myrobalan milk treatment (Karakka Puvvu)", "Bamboo reed with wool reservoir", "Alum mordants", "Vegetable dyes"],
    context: "Srikalahasti freehand temple narratives and Machilipatnam courtly floral patterns using chemical interaction between mordants, dyes, and river water.",
    matrix: { line: 5, geometry: 2, botanical: 5, narrative: 5, textile: 5, ritual: 4, pattern: 5, material: 5 },
    sources: [
      { name: "Victoria and Albert Museum, London", type: "Museum Archive", ref: "Indian Chintz & Kalamkari Textile Collection, IS.12-1988" },
      { name: "Crafts Council of India", type: "Documentation", ref: "Srikalahasti Kalamkari Heritage File (GI #18)" }
    ]
  },
  {
    id: "madhubani",
    name: "Mithila / Madhubani",
    community: "Mithila Women's Collectives & Artisan Lineages",
    region: "Mithila Region / Bihar & Janakpur (Nepal)",
    period: "Ancient origin · Documented 14th C. – Living tradition",
    tag: "Folk · Ritual & Symbolic",
    colors: ["#f7ecd1", "#94251c", "#1d585e", "#d89c28", "#1c1815"],
    paletteNames: ["Mud-Plaster Ground", "Sindoor Terracotta", "Kusum / Indigo Turquoise", "Turmeric Golden Yellow", "Lampblack (Kajal)"],
    motifs: ["sacred_fish", "kohbar_sun_moon", "mithila_lotus", "mithila_parrot", "kachni_lattice"],
    grammar: "Double-contour lines filled with ultra-fine parallel hatching (Kachni) or flat saturated pigment washes (Bharni), horror vacui, almond fish eyes, absence of shading.",
    materials: ["Cowdung & clay wash on wall", "Handmade paper treated with cowdung", "Bamboo twigs with cotton wrap", "Nibs & matchsticks", "Plant pigments"],
    context: "Traditionally painted on nuptial chambers (Kohbar Ghar) across distinct styles: Bharni, Kachni, Tantrik, Godna, and Gobar.",
    matrix: { line: 5, geometry: 4, botanical: 4, narrative: 4, textile: 2, ritual: 5, pattern: 5, material: 4 },
    sources: [
      { name: "Mithila Museum, Tokamachi, Japan", type: "Museum Archive", ref: "Collection of over 850 Master Mithila Paintings" },
      { name: "National Museum, New Delhi", type: "Folk Art Gallery", ref: "Masterpieces of Mithila Painting Catalog" }
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
    paletteNames: ["Natural Ground", "Geru Red Ochre", "Ramraj Ochre / Leaf Green", "Chuna Lime Yellow", "Kala Koyla / Indigo"],
    motifs: ["gond_deer", "mahua_tree", "gond_bird", "gond_sun", "dappled_fish"],
    grammar: "Nature and spirit beings with sweeping silhouette contours filled with rhythmic, pulsating micro-patterns composed of repetitive dots (Bindiya) and clan hatchings.",
    materials: ["Mud walls with Geru & Chuna", "Handmade paper", "Canvas supports", "Natural clays (Chui, Ramraj)", "Pigments"],
    context: "Pardhan Gonds translated sacred forest spirits (Devatas), trees, and animal fables into a vibrant contemporary graphic movement.",
    matrix: { line: 4, geometry: 3, botanical: 5, narrative: 4, textile: 2, ritual: 4, pattern: 5, material: 4 },
    sources: [
      { name: "Bharat Bhavan, Bhopal", type: "State Art Institution", ref: "Jangarh Singh Shyam Graphic Archive (1981-1995)" },
      { name: "Museum of Archaeology and Anthropology, Cambridge", type: "Archive", ref: "Contemporary Pardhan Gond Collection" }
    ]
  },
  {
    id: "pattachitra",
    name: "Pattachitra",
    community: "Chitrakara Artisan Guild of Raghurajpur",
    region: "Puri / Odisha & Midnapore / West Bengal",
    period: "12th Century CE (Jagannath temple) – Living tradition",
    tag: "Scroll · Iconographic & Devotional",
    colors: ["#ebd5a5", "#9d2019", "#18493d", "#1f2238", "#ca9634"],
    paletteNames: ["Tamarind Cloth Ground", "Hingula Vermilion", "Haritala Mineral Green", "Kala Deep Lampblack", "Geru Golden Yellow"],
    motifs: ["prabhavali_arch", "pattachitra_eye_deity", "pattachitra_lotus", "pattachitra_border", "navagunjara_beast"],
    grammar: "Razor-sharp bold calligraphic outlines, classical postures, stylized anatomical curves, ornate lotus borders, saturated primary mineral flat fills.",
    materials: ["Patti (Tamarind seed paste glued cotton)", "Talapatra (Palm leaves)", "Hingula (Cinnabar)", "Haritala (Orpiment)", "Conch shell white"],
    context: "Serves as temporary substitute deities (Anasara Patti) during annual Jagannath temple sanctum retreats and dynamic narrative scrolls.",
    matrix: { line: 5, geometry: 3, botanical: 4, narrative: 5, textile: 3, ritual: 5, pattern: 5, material: 5 },
    sources: [
      { name: "Odisha State Museum, Bhubaneswar", type: "State Archive", ref: "Palm-Leaf and Pattachitra Heritage Vault" },
      { name: "Crafts Council of India", type: "GI File", ref: "Raghurajpur Heritage Craft Village (GI #22)" }
    ]
  },
  {
    id: "thanjavur",
    name: "Thanjavur (Tanjore)",
    community: "Raju & Jinigara Artisan Guilds",
    region: "Thanjavur / Tamil Nadu",
    period: "16th–18th Century CE (Maratha / Nayaka courts) – Living",
    tag: "Courtly · Sacred Icon & Gold Gesso",
    colors: ["#e5c158", "#7a1a15", "#14372e", "#2c1c0e", "#e8e1cd"],
    paletteNames: ["22k Gold Foil", "Kalyana Crimson", "Emerald Green Wash", "Jackwood Dark Teak", "Chuna Gesso White"],
    motifs: ["kirtimukha_arch", "bejeweled_halo", "thanjavur_pillar", "gilded_canopy", "sacred_hamsa"],
    grammar: "Central iconic deity framed by elaborate arched pavilions (Prabhavali), heavy sculptural gesso relief (Sukkan), pure 22k gold leaf, inlaid faceted glass stones.",
    materials: ["Seasoned jackwood panel (Palagai)", "Unboiled limestone gesso (Sukkan)", "22k Gold foil (Thagadu)", "Natural gum arabic", "Jaipur gems"],
    context: "Created for domestic prayer altars and temple sanctums under Maratha royal patronage, blending Vijayanagara iconography with Deccani opulence.",
    matrix: { line: 3, geometry: 4, botanical: 3, narrative: 3, textile: 1, ritual: 5, pattern: 4, material: 5 },
    sources: [
      { name: "Thanjavur Art Gallery, Royal Palace", type: "Museum Archive", ref: "Maratha Royal Collection of Gilded Palagai Paintings" },
      { name: "Government of India GI Registry", type: "GI Verification", ref: "Thanjavur Paintings GI Registration #56" }
    ]
  },
  {
    id: "saura",
    name: "Saura (Ikons)",
    community: "Saura / Lanjia Saura Tribal Community",
    region: "Rayagada & Koraput / Southern Odisha",
    period: "Pre-Vedic tribal roots – Living ritual art",
    tag: "Tribal · Shamanic & Ancestral",
    colors: ["#dbcaa7", "#8c2e22", "#191612", "#cfa744"],
    paletteNames: ["Rice Mash White", "Geru Red Earth", "Charcoal Ash", "Wild Flower Yellow"],
    motifs: ["saura_spirit_house", "ancestor_procession", "saura_sun_horse", "shaman_tree", "saura_ladder"],
    grammar: "Geometric human stick silhouettes with elongated torsos and triangular joints, radiating spirit houses (Anital), linear ladders connecting earthly and spirit realms.",
    materials: ["Red clay wall washed with Geru", "Ground rice paste", "Bamboo twig stylus", "Tree resin binders"],
    context: "Created by village shamans (Kudangs) on interior walls to appease ancestral spirits, ensure bumper harvests, and protect newborns.",
    matrix: { line: 4, geometry: 5, botanical: 2, narrative: 4, textile: 1, ritual: 5, pattern: 4, material: 4 },
    sources: [
      { name: "Tribal Research Institute Museum, Bhubaneswar", type: "Museum Collection", ref: "Lanjia Saura Ritual Ikon Photographic Archive" },
      { name: "Verrier Elwin", type: "Seminal Anthropological Study", ref: "The Religion of an Indian Tribe (OUP 1955)" }
    ]
  },
  {
    id: "phad",
    name: "Phad",
    community: "Joshi Clan of Chippa Artisans & Bhopa Bards",
    region: "Bhilwara & Shahpura / Rajasthan",
    period: "14th Century CE – Living scroll tradition",
    tag: "Scroll · Heroic Ballad & Epic",
    colors: ["#edd6af", "#c0321c", "#1f4a3b", "#d09528", "#171410"],
    paletteNames: ["Handspun Khadi Canvas", "Hinglu Vermilion", "Hara Patthar Green", "Pila Geru Yellow", "Kajal Black"],
    motifs: ["pabuji_steed", "phad_court_pavilion", "phad_hero_profile", "phad_procession_elephant", "rajasthani_chhatri"],
    grammar: "Continuous panoramic 30-foot scroll, hierarchical scaling where epic heroes appear largest, dynamic flat profile figures with wide open eyes, ornate Rajput architecture.",
    materials: ["Handwoven cotton cloth treated with starch and mohra stone", "Mineral pigments in earthen pots", "Kendu gum", "Fine squirrel hair brushes"],
    context: "Unrolled at night by nomadic Bhopa and Bhopi priests who sing, dance, and play the Ravanahatha instrument in front of the illuminated textile shrine.",
    matrix: { line: 5, geometry: 3, botanical: 3, narrative: 5, textile: 4, ritual: 5, pattern: 4, material: 5 },
    sources: [
      { name: "National Museum, New Delhi", type: "Permanent Collection", ref: "Pabuji and Devnarayan Phad Historical Scrolls" },
      { name: "Shree Lal Joshi Archives", type: "Master Lineage", ref: "Phad Painting Revival File (Padma Shri)" }
    ]
  },
  {
    id: "pichwai",
    name: "Pichwai",
    community: "Pushtimarg Temple Artisans",
    region: "Nathdwara / Rajasthan",
    period: "17th Century CE – Living devotional tradition",
    tag: "Temple · Sacred Devotional & Vaishnava",
    colors: ["#f5ebdc", "#1e3a5f", "#9c261e", "#c59a35", "#1f4835"],
    paletteNames: ["Khadi Cotton Ground", "Indigo Deep Blue", "Gulaal Crimson", "Pure Gold Leaf Wash", "Kadamba Leaf Green"],
    motifs: ["pichwai_lotus_pond", "sacred_kamadhenu_cow", "kadamba_tree", "shrinathji_eye", "peacock_dance"],
    grammar: "Intricate floral groves, symmetrical clusters of Kamadhenu cows with devotional handprints, lush lotus ponds in stepped waters, deep indigo skies with gold stars.",
    materials: ["Handspun starched cotton", "Pure lapis lazuli, malachite, and gold dust", "Tamarind seed paste gum", "Goat hair fine liners"],
    context: "Hung as temple cloth backdrops behind the Shrinathji idol, changing according to the 24 daily seasons, festivals (Sharad Purnima, Annakoot), and times of day.",
    matrix: { line: 5, geometry: 3, botanical: 5, narrative: 4, textile: 5, ritual: 5, pattern: 5, material: 5 },
    sources: [
      { name: "Nathdwara Temple Board Archive", type: "Temple Collection", ref: "Pushtimarg Pichwai Sacred Heritage Collection" },
      { name: "Calico Museum of Textiles, Ahmedabad", type: "Textile Archive", ref: "Pichwai Hangings Monograph" }
    ]
  },
  {
    id: "kalighat",
    name: "Kalighat",
    community: "Patuas (Scroll Painters) of Bengal",
    region: "Kolkata / West Bengal",
    period: "19th Century CE (Colonial Calcutta) – Living revival",
    tag: "Urban Folk · Satirical & Devotional",
    colors: ["#f7f0e3", "#1b1815", "#ad2c24", "#2c5d7a", "#d49b32"],
    paletteNames: ["Mill-made Paper Ground", "Carbon Black Contour", "Alta Crimson Wash", "Prussian Blue", "Turmeric Ochre"],
    motifs: ["kalighat_cat_prawn", "goddess_kali_contour", "babu_zamindar", "peacock_vina", "dancing_nautch"],
    grammar: "Sweeping, unbroken, rhythmic calligraphic brush strokes shaded with tonal washes along the outer contours to create voluminous modeling on flat paper.",
    materials: ["Thin newsprint/mill paper", "Lampblack and water-based pigments", "Thick flat brushes and pointed quill liners", "Glue binders"],
    context: "Sold as cheap pilgrim souvenirs outside the Kalighat temple, satirizing the Westernized Bengali elite (Babu culture) while venerating folk deities.",
    matrix: { line: 5, geometry: 2, botanical: 2, narrative: 5, textile: 1, ritual: 3, pattern: 3, material: 3 },
    sources: [
      { name: "Victoria and Albert Museum, London", type: "Museum Archive", ref: "Largest International Collection of Kalighat Paintings" },
      { name: "W.G. Archer", type: "Critical Monograph", ref: "Kalighat Paintings (Victoria & Albert Museum, 1971)" }
    ]
  },
  {
    id: "cheriyal",
    name: "Cheriyal Scroll Painting",
    community: "Nakashi Artisan Lineage",
    region: "Cheriyal / Telangana",
    period: "15th Century CE (Kakatiya / Vijayanagara roots)",
    tag: "Scroll · Folk Narrative & Theater",
    colors: ["#edd6b6", "#a81f18", "#173b5c", "#2c633a", "#cfa030"],
    paletteNames: ["Tamarind Khadi Ground", "Vibrant Scarlet Red", "Indigo Sky Blue", "Tree Moss Green", "Turmeric Golden Ochre"],
    motifs: ["cheriyal_tree_scroll", "nakashi_villager", "temple_garuda", "telangana_border", "narrative_panel_frame"],
    grammar: "Brilliant, saturated red backgrounds with comic-strip narrative panel borders, stylized almond eyes, theatrical profiles, ornate folk jewelry.",
    materials: ["Khadi cloth treated with tamarind paste, chalk, and tree gum", "Natural mineral stone pigments", "Cow-hair brushes"],
    context: "Performed by the nomadic Dakkali and Kaki Padagollu storytelling communities who traveled from village to village reciting regional caste epics.",
    matrix: { line: 4, geometry: 3, botanical: 4, narrative: 5, textile: 3, ritual: 4, pattern: 5, material: 4 },
    sources: [
      { name: "Salar Jung Museum, Hyderabad", type: "Permanent Collection", ref: "Cheriyal Nakashi Epic Scroll Collection" },
      { name: "GI Registry Government of India", type: "GI Protection", ref: "Cheriyal Paintings GI #42" }
    ]
  },
  {
    id: "kangra",
    name: "Kangra / Pahari Miniature",
    community: "Master Miniature Guilds (Pandit Seu / Nainsukh Lineage)",
    region: "Kangra Valley & Guler / Himachal Pradesh",
    period: "18th Century CE (Raja Sansar Chand era)",
    tag: "Courtly · Lyrical Miniature & Romance",
    colors: ["#f5ede1", "#194a38", "#8b2019", "#d4a742", "#243c5a"],
    paletteNames: ["Vasli Layered Paper", "Lush Mountain Emerald", "Deep Lac Red", "Pure Gold Powder (Purva)", "Soft River Ultramarine"],
    motifs: ["pahari_radha_krishna", "willow_tree_breeze", "mountain_pavilion", "lotus_creek", "pahari_court_lady"],
    grammar: "Delicate, razor-fine rhythmic linework, soft poetic treatment of nature (undulating green hills, blooming creepers), translucent veil drapery.",
    materials: ["Layered handmade Sialkot paper (Vasli)", "Finely ground precious stones and 24k gold wash", "Single-hair squirrel brushes", "Agate burnisher"],
    context: "Epitome of Indian miniature painting, expressing divine romance (Geeta Govinda, Rasikapriya) against the serene backdrop of the Himalayan foothills.",
    matrix: { line: 5, geometry: 2, botanical: 5, narrative: 5, textile: 3, ritual: 4, pattern: 4, material: 5 },
    sources: [
      { name: "National Museum, New Delhi", type: "Miniature Gallery", ref: "Nainsukh of Guler Masterpiece Collection" },
      { name: "Dr. B.N. Goswamy", type: "Pioneering Monograph", ref: "Nainsukh of Guler: A Great Indian Painter from a Small Hill-State (1997)" }
    ]
  },
  {
    id: "mughal",
    name: "Mughal Miniature",
    community: "Imperial Karkhana Painters (Akbar, Jahangir, Shah Jahan)",
    region: "Agra, Delhi & Lahore",
    period: "16th–17th Century CE (Mughal Empire)",
    tag: "Courtly · Hyper-Refined Botanical & Durbar",
    colors: ["#f4ecde", "#1e3752", "#99221a", "#bfa043", "#284a32"],
    paletteNames: ["Handmade Vasli Sheet", "Lapis Lazuli (Badakhshan)", "Vermilion Cinnabar", "Burnished Shell Gold", "Verdigris Malachite"],
    motifs: ["mughal_floral_hashiya", "imperial_falcon", "chinar_tree", "durbar_pavilion_arch", "court_portrait_profile"],
    grammar: "Hyper-realistic flora and fauna studies, ornate illuminated margin borders (Hashiya), aerial perspective, sophisticated three-quarter shading.",
    materials: ["Burnished Vasli paper", "Ground lapis, gold, silver, crushed pearl", "Kitten and squirrel hair brushes"],
    context: "Synthesized Persian lyrical line with indigenous Indian vibrant color and European naturalistic modeling in royal imperial manuscripts.",
    matrix: { line: 5, geometry: 4, botanical: 5, narrative: 5, textile: 4, ritual: 2, pattern: 5, material: 5 },
    sources: [
      { name: "British Library, London", type: "Royal Manuscript Vault", ref: "Akbarnama and Jahangirnama Illustrated Folios" },
      { name: "Metropolitan Museum of Art, New York", type: "Islamic Art Collection", ref: "Mughal Court Painting Archive" }
    ]
  },
  {
    id: "deccani",
    name: "Deccani Miniature",
    community: "Sultanate Court Guilds",
    region: "Bijapur, Golconda & Ahmadnagar / Deccan Plateau",
    period: "16th–17th Century CE (Deccan Sultanates)",
    tag: "Courtly · Mystical Opulence & Gold",
    colors: ["#f2e7d3", "#142d4a", "#a43324", "#d1a83e", "#2a523e"],
    paletteNames: ["Sultanate Ivory Paper", "Persian Lapis Lazuli", "Ruby Crimson", "Heavily Embossed Gold", "Deccan Palm Green"],
    motifs: ["deccani_cypress_tree", "sultan_equestrian", "flowing_chintz_robe", "mystic_garden_terrace", "gilded_cloud_scroll"],
    grammar: "Elongated, graceful human figures with heavy gold ornamentation, atmospheric mood, surrealist swirling clouds, rich luminous turquoise skies.",
    materials: ["Polished hemp paper", "Crushed lapis, cinnabar, liquid leaf gold", "Fine camel hair brushes"],
    context: "Blended Persian, Ottoman Turkish, Deccani indigenous, and European influences into an otherworldly, sensual courtly aesthetic.",
    matrix: { line: 5, geometry: 3, botanical: 4, narrative: 4, textile: 5, ritual: 3, pattern: 5, material: 5 },
    sources: [
      { name: "National Museum, New Delhi", type: "Deccani Collection", ref: "Bijapur and Golconda Master Miniature Folios" },
      { name: "Mark Zebrowski", type: "Critical Study", ref: "Deccani Painting (Sotheby Publications 1983)" }
    ]
  },
  {
    id: "kerala_mural",
    name: "Kerala Mural Painting",
    community: "Temple Wall Guilds & Chitrakaras",
    region: "Thrissur, Padmanabhapuram & Kottayam / Kerala",
    period: "15th–18th Century CE (Living temple tradition)",
    tag: "Fresco · Sinuous & Panchavarna",
    colors: ["#ebd4ab", "#a42918", "#c88e28", "#174338", "#1c1813"],
    paletteNames: ["Lime Plaster Ground", "Chavittu Red Ochre", "Manayola Yellow Ochre", "Neela Indigo Green", "Kari Lampblack"],
    motifs: ["kerala_dhyana_deity", "sinuous_makara_wave", "ornate_crown_kireedam", "kerala_temple_flower", "sacred_conch_fan"],
    grammar: "Adherence to the Panchavarna (5 natural colors only), rhythmic contour lines with stippled shading, highly stylized curved anatomy, serene dhyana expressions.",
    materials: ["Laterite stone wall treated with lime and tender coconut water", "Vegetal and mineral pigments", "Neem bark resin binders", "Grass root brushes"],
    context: "Covers walls of temple sanctums (Srikovil) and royal palaces (Mattancherry) depicting Puranic iconography governed by the Shilparatna treatise.",
    matrix: { line: 5, geometry: 4, botanical: 4, narrative: 5, textile: 2, ritual: 5, pattern: 5, material: 5 },
    sources: [
      { name: "Mattancherry Dutch Palace, Kochi", type: "State Monument", ref: "Ramayana and Krishna Temple Mural Walls (16th C.)" },
      { name: "Guruvayur Devaswom Institute of Mural Painting", type: "Academic Lineage", ref: "Traditional Panchavarna Transmission Files" }
    ]
  },
  {
    id: "bhil",
    name: "Bhil Painting",
    community: "Bhil & Bhilala Tribal Communities",
    region: "Jhabua & Dhar / Madhya Pradesh & Gujarat Border",
    period: "Centuries of Pithora ritual walls – Modern canvas art",
    tag: "Tribal · Polka-Dot Rhythm & Nature",
    colors: ["#f5ebd7", "#bd2f1f", "#1f568a", "#dca732", "#24613b"],
    paletteNames: ["Earthen Mud Ground", "Vibrant Coral Red", "Peacock Sky Blue", "Sunburst Yellow", "Forest Green Dot"],
    motifs: ["bhil_pithora_horse", "bhil_dotted_tree", "bhil_sun_bird", "multi_dot_fish", "tribal_harvest_circle"],
    grammar: "Forms outlined and filled entirely with vibrant, multicolored pointillist dots that map out spiritual energies, ancestral memory, and nature spirits.",
    materials: ["Neem twig nibs", "Bamboo twigs with cotton wrap", "Natural clay, cowdung ground, modern acrylics"],
    context: "Derived from the sacred Pithora mural rituals, created as joyous prayers celebrating harvest abundance, healing, and nature kinship.",
    matrix: { line: 3, geometry: 3, botanical: 4, narrative: 4, textile: 2, ritual: 5, pattern: 5, material: 4 },
    sources: [
      { name: "Indira Gandhi Rashtriya Manav Sangrahalaya (IGRMS), Bhopal", type: "National Museum", ref: "Bhil Tribal Art Repository" },
      { name: "Bhuri Bai", type: "Pioneering Artist", ref: "First Bhil Canvas Pioneer (Padma Shri 2021)" }
    ]
  },
  {
    id: "roghan",
    name: "Roghan Art",
    community: "Khatri Muslim Artisan Family (Sole surviving masters)",
    region: "Nirona / Kutch, Gujarat",
    period: "300+ year old living craft lineage",
    tag: "Textile · Stylus-Drawn Metallic Arabesque",
    colors: ["#eddcb7", "#b82b1d", "#d1a129", "#1b4c38", "#172b47"],
    paletteNames: ["Khadi Cotton Base", "Saffron Red Paste", "Metallic Gold Yellow", "Emerald Mineral", "Castor Royal Blue"],
    motifs: ["roghan_tree_of_life", "roghan_peacock_medallion", "symmetrical_mirror_arch", "floral_arabesque_band", "roghan_mandala"],
    grammar: "Viscous castor-oil colored paste spun into delicate threads off a metal stylus in mid-air, pressed into fabric, and folded symmetrically to mirror.",
    materials: ["Boiled castor oil paste (Roghan)", "Natural mineral pigments", "Brass stylus needle (Kalam)", "Cotton and silk fabrics"],
    context: "Historically used to decorate bridal skirts (Ghagra) and bedspreads of nomadic Kutchi communities, now celebrated globally as master diplomatic art.",
    matrix: { line: 5, geometry: 5, botanical: 5, narrative: 2, textile: 5, ritual: 3, pattern: 5, material: 5 },
    sources: [
      { name: "Crafts Council of India", type: "Heritage Archive", ref: "Master Abdul Gafur Khatri Roghan Documentation" },
      { name: "National Crafts Museum", type: "Living Master Collection", ref: "Kutch Roghan Textiles (Padma Shri)" }
    ]
  },
  {
    id: "chamba_rumal",
    name: "Chamba Rumal Painting",
    community: "Pahari Women & Court Miniature Master Collaborations",
    region: "Chamba Valley / Himachal Pradesh",
    period: "17th–18th Century CE (Chamba Kingdom)",
    tag: "Textile · Double-Satin Embroidered Miniature",
    colors: ["#f5ede1", "#8b2019", "#24523a", "#c99a38", "#2c4866"],
    paletteNames: ["Mulmul Raw Silk Ground", "Pahari Crimson Thread", "Hillside Willow Green", "Pollen Yellow", "Yamuna Sky Blue"],
    motifs: ["chamba_rasaleela_circle", "pahari_floral_border", "hunting_equestrian_chamba", "chamba_parrot_creeper", "radha_krishna_pavilion"],
    grammar: "Circular Rasaleela compositions enclosed by dense four-sided floral borders, perfectly reversible double-satin stitch matching miniature painting.",
    materials: ["Unbleached malmal cotton", "Untwisted silk floss (Patt)", "Charcoal tracing drawn by master miniature painters"],
    context: "Presented as auspicious gifts during weddings and royal alliances, seamlessly marrying Pahari miniature drawing with textile needlecraft.",
    matrix: { line: 4, geometry: 4, botanical: 5, narrative: 5, textile: 5, ritual: 4, pattern: 5, material: 5 },
    sources: [
      { name: "Bhuri Singh Museum, Chamba", type: "State Heritage Museum", ref: "Royal Chamba Rumal Archive" },
      { name: "GI Registry Government of India", type: "GI Protection", ref: "Chamba Rumal GI Registration #79" }
    ]
  },
  {
    id: "sanjhi",
    name: "Sanjhi Art",
    community: "Braj Vaisnava Temple Artists",
    region: "Mathura & Vrindavan / Uttar Pradesh",
    period: "16th Century CE (Bhakti Movement) – Living tradition",
    tag: "Papercraft · Stencil Lattice & Water Art",
    colors: ["#fbf6ec", "#1a1612", "#b38938", "#1e3d59"],
    paletteNames: ["Handmade Paper Stencil", "Shadow Charcoal", "Pure Turmeric Gold", "Yamuna Blue Water"],
    motifs: ["sanjhi_peacock_tree", "sanjhi_lotus_mandala", "vrindavan_creeper_lattice", "yamuna_river_fish", "gopi_procession"],
    grammar: "Negative-space filigree cut entirely by hand using miniature curved scissors (Kainti), casting intricate shadows or floating pigments over water.",
    materials: ["Handmade butter paper", "Custom curved scissors (Banka Kainti)", "Natural dry pigment powders for water floating"],
    context: "Created in Vaishnava temples in Braj to decorate temple floors with dry powders during evening Aarti, swept away each day representing impermanence.",
    matrix: { line: 5, geometry: 5, botanical: 5, narrative: 4, textile: 2, ritual: 5, pattern: 5, material: 4 },
    sources: [
      { name: "Braj Sanskriti Shodh Sansthan, Vrindavan", type: "Cultural Institute", ref: "Sanjhi Stencil Craft Preservation File" },
      { name: "Crafts Museum, New Delhi", type: "Master Artisan Archive", ref: "Sanjhi Paper Cutting Master Collection" }
    ]
  },
  {
    id: "tikuli",
    name: "Tikuli Art",
    community: "Patna Artisans & Women Collectives",
    region: "Patna / Bihar",
    period: "800-year-old royal bindi craft · Revived in 20th C.",
    tag: "Folk · Gold Leaf & Enamel Glass Roundel",
    colors: ["#f5ede0", "#9b2319", "#d4a737", "#1d4e3e", "#1b1815"],
    paletteNames: ["Hardboard Enamel Ground", "Sindoor Red", "22k Gold Leaf Inlay", "Forest Emerald", "Lampblack Enamel"],
    motifs: ["tikuli_peacock_medallion", "tikuli_village_woman", "mithila_tree_roundel", "tikuli_circular_mandala", "fish_pair_circle"],
    grammar: "Intricate circular miniature motifs executed with gold foil (Varq) and enamel paints over layered hardboard discs with glossy protective lacquer.",
    materials: ["Cut hardboard discs", "Liquid gold leaf", "Enamel paints", "Glass lacquer finish", "Sable hair fine brushes"],
    context: "Originally ornamental glass forehead bindis worn by royal queens of Magadha, revived as fine decorative miniature art by master Upendra Maharathi.",
    matrix: { line: 4, geometry: 5, botanical: 4, narrative: 4, textile: 2, ritual: 4, pattern: 5, material: 4 },
    sources: [
      { name: "Upendra Maharathi Shilp Anusandhan Sansthan, Patna", type: "Research Institute", ref: "Tikuli Art Revival and Master Collection" },
      { name: "Ashok Kumar Biswas", type: "Master Revivalist", ref: "National Master Awardee for Tikuli Miniature Craft" }
    ]
  }
];

export const MATERIALS = [
  {
    id: "khadi_cloth",
    name: "Unbleached Cotton Cloth (Khadi)",
    icon: "TEXTILE",
    physics: { particleDensity: 5, opacity: 7, texture: 8, edgeDiffusion: 6 },
    description: "Handspun, handwoven cotton treated with myrobalan (harda) and buffalo milk to prevent dye bleeding while accepting natural iron and alum mordants.",
    traditions: ["kalamkari", "pattachitra", "phad", "pichwai", "cheriyal", "roghan"],
    bgClass: "ground-khadi-cloth"
  },
  {
    id: "mud_wall",
    name: "Terracotta Earth & Cowdung Wall",
    icon: "EARTH",
    physics: { particleDensity: 9, opacity: 9, texture: 10, edgeDiffusion: 2 },
    description: "Red ochre mud wall (Geru) blended with cowdung and river silt, providing a rich textured porous ground for sacred tribal iconography.",
    traditions: ["warli", "saura", "bhil", "madhubani"],
    bgClass: "ground-mud-wall"
  },
  {
    id: "handmade_paper",
    name: "Tamarind-Treated Handmade Paper (Vasli)",
    icon: "PAPER",
    physics: { particleDensity: 6, opacity: 8, texture: 6, edgeDiffusion: 4 },
    description: "Cotton-rag and hemp pulp paper seasoned with tamarind seed gum or cowdung wash, offering a smooth yet toothy surface for calligraphic line work.",
    traditions: ["madhubani", "gond", "kangra", "mughal", "kalighat"],
    bgClass: "ground-handmade-paper"
  },
  {
    id: "gold_panel",
    name: "Gesso-Layered Jackwood Panel (Palagai)",
    icon: "GOLD",
    physics: { particleDensity: 9, opacity: 10, texture: 9, edgeDiffusion: 1 },
    description: "Rigid seasoned jackwood board coated with unboiled limestone gesso relief (sukkan), layered with pure 22k gold foil and faceted glass gems.",
    traditions: ["thanjavur", "deccani", "tikuli"],
    bgClass: "ground-gold-panel"
  },
  {
    id: "talapatra",
    name: "Palm Leaf Strip (Tala-patra)",
    icon: "PALM",
    physics: { particleDensity: 8, opacity: 9, texture: 8, edgeDiffusion: 2 },
    description: "Cured palmyra palm leaves stitched with thread, etched with a sharp iron stylus, and rubbed with lampblack to make incisions permanent.",
    traditions: ["pattachitra", "saura"],
    bgClass: "ground-talapatra"
  },
  {
    id: "temple_fresco",
    name: "Lime Plaster Fresco Ground",
    icon: "FRESCO",
    physics: { particleDensity: 9, opacity: 10, texture: 9, edgeDiffusion: 3 },
    description: "Laterite stone wall coated with lime plaster seasoned with tender coconut water, providing an archival surface for Panchavarna natural frescoes.",
    traditions: ["kerala_mural"],
    bgClass: "ground-temple-fresco"
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
  "Lyrical Romance & Mountain Melody",
  "Imperial Splendor & Illuminated Nature",
  "Pointillist Cosmic Rhythms",
  "Negative Space Filigree & Impermanence"
];

export const COMPOSITIONS = [
  "Central Icon & Hierarchical Enclosure",
  "Circular Spiral & Centrifugal Dance",
  "Continuous Horizontal Narrative Band",
  "Symmetrical Sacred Tree & Flanking Guardians",
  "Horror Vacui (Interlocking Negative Space)",
  "Arched Sanctum & Processional Frieze",
  "Radial Mandala & Orbiting Wildlife",
  "Tantrik Yantra & Concentric Border Framing"
];

export const ROUTES = [
  { id: "textile_geometric", name: "Textile × Tribal Geometric Synthesis", styles: ["kalamkari", "warli"], desc: "Calligraphic organic botanicals meeting minimalist tribal stick figures." },
  { id: "folk_ritual", name: "Folk Nuptial × Shamanic Forest", styles: ["madhubani", "gond"], desc: "Dual-line kachni hatching merged with pulsating pointillist animal forms." },
  { id: "sacred_gold", name: "Gilded Courtly × Classical Temple Scroll", styles: ["thanjavur", "pattachitra"], desc: "Embossed 22k gold relief framing razor-sharp devotional deities." },
  { id: "epic_ancestor", name: "Epic Bardic Scroll × Tribal Spirit House", styles: ["phad", "saura"], desc: "Heroic narrative panels converging with ancestral spirit ladders." },
  { id: "devotion_lyricism", name: "Pichwai Lotus Pond × Pahari Mountain Melody", styles: ["pichwai", "kangra"], desc: "Stepped sacred waters, holy Kamadhenu cows and delicate Himalayan hill slopes." },
  { id: "imperial_mystic", name: "Mughal Floral Margin × Deccani Golden Terrace", styles: ["mughal", "deccani"], desc: "Illuminated botanical Hashiya borders meeting elongated mystic sultanate robes." },
  { id: "fresco_tribal", name: "Kerala Temple Mural × Bhil Polka-Dot Fauna", styles: ["kerala_mural", "bhil"], desc: "Panchavarna sinuous deity contours filled with vibrant dotted energy fields." },
  { id: "filigree_textile", name: "Sanjhi Stencil Filigree × Roghan Metal Stylus", styles: ["sanjhi", "roghan"], desc: "Paper-cut negative space lattices blended with mirrored castor-oil arabesques." }
];

export const RUBRIC = [
  { id: "geometry", label: "Geometric Coherence & Proportions", weight: 0.2, desc: "Evaluates whether triangular, circular, and rectilinear forms maintain harmonic structural integrity." },
  { id: "linework", label: "Brush & Calligraphic Line Discipline", weight: 0.2, desc: "Analyzes fluid modulation, tapering, and pressure sensitivity of the brushwork." },
  { id: "palette", label: "Authentic Mineral & Vegetal Palette", weight: 0.15, desc: "Evaluates historical accuracy and harmonic balance of natural pigments." },
  { id: "spatial", label: "Spatial Composition & Balance", weight: 0.15, desc: "Assesses focal hierarchy, rhythmic repetition, and negative space distribution." },
  { id: "safeguards", label: "Cultural Sensitivity & Sacred Context", weight: 0.15, desc: "Ensures sacred deities and ritual symbols are combined with scholarly respect." },
  { id: "material", label: "Support Material Interaction", weight: 0.15, desc: "Assesses authenticity of pigment adherence to the selected material ground." }
];

export const QUESTIONS = [
  {
    id: 1,
    tradition: "warli",
    question: "In Warli tribal painting, what cosmic balance is represented by the two triangles joined at the apex to form human torsos?",
    options: [
      "The union of solar and lunar masculine/feminine cosmic energies (Prakriti & Purusha)",
      "The division of tribal hunting territories between clans",
      "A geometric representation of local mountain peaks",
      "A simplification introduced by modern paper art collectors"
    ],
    correct: 0,
    explanation: "Warli human figures are constructed from two equilateral triangles: the upper triangle represents masculine fire/sun energy, and the lower triangle represents feminine earth/water energy."
  },
  {
    id: 2,
    tradition: "kalamkari",
    question: "What essential chemical mordant is traditionally applied to unbleached khadi cloth before painting with madder root crimson in Srikalahasti Kalamkari?",
    options: [
      "Natural Alum (Phatkari) solution applied with bamboo stylus",
      "Concentrated synthetic copper sulfate",
      "Lime water and salt paste",
      "Pure mustard oil glaze"
    ],
    correct: 0,
    explanation: "Natural alum acts as the vital chemical mordant that binds with alizarin in madder root (Rubia cordifolia) during river boiling to develop deep crimson."
  },
  {
    id: 3,
    tradition: "madhubani",
    question: "What is the key technical distinction between the 'Kachni' and 'Bharni' styles of Mithila / Madhubani painting?",
    options: [
      "Kachni uses fine parallel hatched lines; Bharni uses solid flat pigment fills",
      "Kachni is painted only on mud walls; Bharni is exclusively on palm leaves",
      "Kachni uses synthetic acrylics; Bharni uses cowdung paste",
      "Kachni depicts royal battles; Bharni depicts domestic pets"
    ],
    correct: 0,
    explanation: "Kachni relies on monochrome or two-tone ultra-fine hatched linework (parallel and cross-hatching), while Bharni is characterized by vibrant, flat color fills."
  },
  {
    id: 4,
    tradition: "pichwai",
    question: "What is the primary ritual function of a Pichwai painting in Nathdwara temple practice?",
    options: [
      "Serving as a devotional seasonal textile backdrop behind the Shrinathji idol",
      "Used as royal wedding floor carpets",
      "Painted on shields carried by Rajput warriors",
      "Given as coins in temple transactions"
    ],
    correct: 0,
    explanation: "Pichwai literally translates to 'hanging at the back' and refers to large cloth hangings behind the Shrinathji idol that change with each festival and season."
  },
  {
    id: 5,
    tradition: "kerala_mural",
    question: "The traditional Kerala temple mural painting palette is strictly governed by the 'Panchavarna' rule, meaning it uses only:",
    options: [
      "Five specific natural colors: Red, Yellow, Green, Black, and White (Lime)",
      "Any five acrylic colors mixed with oil",
      "Gold leaf and four gemstone pastes",
      "Only primary colors without black or white"
    ],
    correct: 0,
    explanation: "Panchavarna comprises five sacred mineral and vegetal pigments: Red ochre, Yellow ochre, Indigo/herb Green, Lampblack, and pure Lime plaster White."
  }
];

export const FUSION_MATRIX_DIMENSIONS = [
  { id: "form", name: "Form & Geometry", icon: "📐" },
  { id: "line", name: "Line & Calligraphy", icon: "🖋️" },
  { id: "colour", name: "Color & Pigments", icon: "🎨" },
  { id: "material", name: "Material Ground", icon: "🖼️" },
  { id: "space", name: "Spatial Composition", icon: "🌌" },
  { id: "iconography", name: "Sacred Iconography", icon: "🪷" },
  { id: "patronage", name: "Guild & Lineage", icon: "🏛️" },
  { id: "ritual", name: "Ritual & Sacred Context", icon: "🕯️" },
  { id: "contemporary", name: "Contemporary Evolution", icon: "✨" }
];

export const VIVA_QUESTIONS_TEMPLATE = [
  {
    id: "tradition_selection",
    question: "Why did you choose to pair these two specific painting traditions?",
    guidance: "Defend the historical, philosophical, or aesthetic dialogue between the two chosen traditions."
  },
  {
    id: "visual_transformation",
    question: "What specific visual principles did you extract from each tradition, and how did you transform them?",
    guidance: "Explain your formal grammar transformation rather than direct copy-pasting."
  },
  {
    id: "material_logic",
    question: "How does your choice of support ground relate to the physical ontology of these traditions?",
    guidance: "Reference traditional physical grounds (Khadi, mud, paper, gold panel) and natural pigments."
  },
  {
    id: "synthesis_vs_collage",
    question: "How does your final artwork achieve genuine synthesis rather than a superficial collage?",
    guidance: "Articulate how motifs interact, share perspective, or merge their visual vocabularies."
  },
  {
    id: "cultural_respect",
    question: "How does your work ensure respectful treatment of living indigenous and sacred traditions?",
    guidance: "Reference verified community lineage, avoiding sacred desecration and adhering to GI documentation."
  }
];