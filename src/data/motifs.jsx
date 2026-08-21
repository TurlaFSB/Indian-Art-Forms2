import React from "react";

/**
 * SYNTHESIS — Curated Digital Motif Studies
 * Academic & Cultural Framing:
 * These vector graphics are original educational studies created to analyze and demonstrate
 * documented visual principles of Indian regional painting traditions. They are NOT claimed
 * to be authentic specimens of living community art.
 */

export const MOTIF_STUDIES = [
  // --- WARLI MOTIFS ---
  {
    id: "tarpa_dance",
    name: "Tarpa Spiral Dance",
    tradition: "warli",
    traditionName: "Warli",
    category: "figure",
    visualPrinciple: "Centrifugal spiral movement representing cyclical time and communal unity without a central master figure.",
    traditionalContext: "Performed during harvest and wedding rituals where men and women intertwine hands, moving in sync with the Tarpa wind instrument.",
    interpretation: "Original vector study analyzing Warli dual-triangle geometric proportions and circular rhythmic repetition.",
    sources: "Dalmia, Y. 'The Painted World of the Warlis' (1988); National Crafts Museum Acc. #NCM-WRL-842",
    defaultScale: 38,
    render: (c, s = 1) => (
      <g stroke={c} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Central Tarpa Player */}
        <circle cx="0" cy="-6" r="3.5" fill={c} />
        <polygon points="0,-2 -4,5 4,5" fill={c} />
        <polygon points="0,11 -4,5 4,5" fill={c} />
        <line x1="-3" y1="2" x2="-8" y2="-3" />
        <line x1="-8" y1="-3" x2="-14" y2="-7" />
        <path d="M-14,-7 Q-20,-12 -22,-3" strokeWidth="3" />
        <line x1="-2" y1="11" x2="-5" y2="18" />
        <line x1="2" y1="11" x2="5" y2="18" />
        {/* Inner Dancing Ring */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const r = 26;
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;
          return (
            <g key={i} transform={`translate(${x}, ${y}) rotate(${deg + 90})`}>
              <circle cx="0" cy="-5" r="2.2" fill={c} />
              <polygon points="0,-3 -3,2 3,2" fill={c} />
              <polygon points="0,7 -3,2 3,2" fill={c} />
              <line x1="-3" y1="0" x2="-7" y2="2" />
              <line x1="3" y1="0" x2="7" y2="2" />
              <line x1="-1.5" y1="7" x2="-3.5" y2="13" />
              <line x1="1.5" y1="7" x2="3.5" y2="13" />
            </g>
          );
        })}
        {/* Outer Interlinked Ring */}
        {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const r = 48;
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;
          return (
            <g key={i} transform={`translate(${x}, ${y}) rotate(${deg + 90})`}>
              <circle cx="0" cy="-6" r="2.8" fill={c} />
              <polygon points="0,-3 -3.5,3 3.5,3" fill={c} />
              <polygon points="0,9 -3.5,3 3.5,3" fill={c} />
              <line x1="-3.5" y1="1" x2="-9" y2="4" />
              <line x1="3.5" y1="1" x2="9" y2="4" />
              <line x1="-2" y1="9" x2="-4" y2="16" />
              <line x1="2" y1="9" x2="4" y2="16" />
            </g>
          );
        })}
        <circle cx="0" cy="0" r="48" strokeDasharray="3 7" opacity="0.4" />
      </g>
    )
  },
  {
    id: "sacred_chowk",
    name: "Sacred Chowk Enclosure",
    tradition: "warli",
    traditionName: "Warli",
    category: "structural",
    visualPrinciple: "Concentric geometric grid enclosing sacred deity figures with triangular border dentils.",
    traditionalContext: "Lagna Chowk painted on wedding chamber walls to invoke Palaghat, the mother goddess of fertility and cosmic order.",
    interpretation: "Original vector study synthesizing Warli rectangular border framing and inner cosmic geometry.",
    sources: "IGNCA Tribal Art Documentation; Dalmia, Y. (1988)",
    defaultScale: 36,
    render: (c) => (
      <g stroke={c} strokeWidth="2.5" fill="none">
        <rect x="-42" y="-42" width="84" height="84" strokeWidth="3" />
        <rect x="-35" y="-35" width="70" height="70" strokeWidth="1.5" strokeDasharray="4 4" />
        <rect x="-24" y="-24" width="48" height="48" strokeWidth="2" />
        {/* Border Dentil Triangles */}
        {[-36, -24, -12, 0, 12, 24, 36].map((p, i) => (
          <React.Fragment key={i}>
            <polygon points={`${p-4},-42 ${p+4},-42 ${p},-35`} fill={c} />
            <polygon points={`${p-4},42 ${p+4},42 ${p},35`} fill={c} />
            <polygon points={`-42,${p-4} -42,${p+4} -35,${p}`} fill={c} />
            <polygon points={`42,${p-4} 42,${p+4} 35,${p}`} fill={c} />
          </React.Fragment>
        ))}
        {/* Central Goddess Palaghat Geometry */}
        <circle cx="0" cy="-12" r="4" fill={c} />
        <polygon points="0,-8 -7,2 7,2" fill={c} />
        <polygon points="0,12 -7,2 7,2" fill={c} />
        <line x1="-7" y1="0" x2="-14" y2="-6" strokeLinecap="round" strokeWidth="2" />
        <line x1="7" y1="0" x2="14" y2="-6" strokeLinecap="round" strokeWidth="2" />
        <line x1="-3" y1="12" x2="-6" y2="20" strokeLinecap="round" strokeWidth="2" />
        <line x1="3" y1="12" x2="6" y2="20" strokeLinecap="round" strokeWidth="2" />
        {/* Sun & Moon */}
        <circle cx="-14" cy="-14" r="2.5" fill={c} />
        <path d="M12,-16 A 3 3 0 0 0 16,-12" strokeWidth="2" />
      </g>
    )
  },
  {
    id: "tree_of_life_warli",
    name: "Warli Branching Tree",
    tradition: "warli",
    traditionName: "Warli",
    category: "botanical",
    visualPrinciple: "Upward branching symmetry with triangular foliage clusters and perching wildlife.",
    traditionalContext: "Symbol of forest abundance, shelter, and nature spirits.",
    interpretation: "Digital structural study of Warli nature morphology.",
    sources: "Jivya Soma Mashe Masterworks Collection; Dalmia (1988)",
    defaultScale: 32,
    render: (c) => (
      <g stroke={c} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="0" y1="40" x2="0" y2="-30" strokeWidth="4" />
        {/* Symmetrical Branches */}
        {[-20, -5, 10, 25].map((y, i) => (
          <React.Fragment key={i}>
            <path d={`M0,${y} Q-${12 + i * 3},${y - 12} -${24 + i * 4},${y - 18}`} strokeWidth="2.5" />
            <path d={`M0,${y} Q${12 + i * 3},${y - 12} ${24 + i * 4},${y - 18}`} strokeWidth="2.5" />
            <polygon points={`-${24 + i * 4},${y - 18} -${30 + i * 4},${y - 24} -${18 + i * 4},${y - 24}`} fill={c} />
            <polygon points={`${24 + i * 4},${y - 18} ${30 + i * 4},${y - 24} ${18 + i * 4},${y - 24}`} fill={c} />
          </React.Fragment>
        ))}
        {/* Apex Foliage */}
        <polygon points="0,-30 -8,-44 8,-44" fill={c} />
        <polygon points="0,-44 -6,-52 6,-52" fill={c} />
        {/* Perched Birds */}
        <circle cx="-14" cy="-18" r="2" fill={c} />
        <line x1="-14" y1="-18" x2="-20" y2="-15" />
        <circle cx="14" cy="-4" r="2" fill={c} />
        <line x1="14" y1="-4" x2="20" y2="-1" />
      </g>
    )
  },

  // --- KALAMKARI MOTIFS ---
  {
    id: "tree_of_life_kalamkari",
    name: "Kalamkari Tree of Life",
    tradition: "kalamkari",
    traditionName: "Kalamkari",
    category: "botanical",
    visualPrinciple: "Calligraphic undulating organic vine structure with multi-layered lotus blossoms and serrated foliage.",
    traditionalContext: "Srikalahasti temple textile depicting cosmic abundance, interlinking earth, waters, and heavens.",
    interpretation: "Original vector study capturing freehand reed pen (Kalam) line variation and vegetal complexity.",
    sources: "Varadarajan, L. 'South Indian Traditions of Kalamkari' (1982); V&A Museum IS.12-1988",
    defaultScale: 40,
    render: (c, s = 1) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Main Trunk */}
        <path d="M0,45 C-12,20 15,5 -5,-20 C-18,-35 8,-42 0,-50" strokeWidth="4" />
        {/* Primary Scrolling Vines */}
        <path d="M-8,15 C-28,10 -35,-5 -22,-20 C-12,-32 -25,-42 -35,-35" strokeWidth="2.5" />
        <path d="M6,2 C28,-2 38,-18 24,-32 C14,-42 30,-50 40,-40" strokeWidth="2.5" />
        {/* Lotus Blossoms */}
        <g transform="translate(0, -50)">
          <path d="M0,0 C-12,-15 -20,-8 -15,5 C-10,12 0,0 0,0" fill={c} fillOpacity="0.3" stroke={c} strokeWidth="1.8" />
          <path d="M0,0 C12,-15 20,-8 15,5 C10,12 0,0 0,0" fill={c} fillOpacity="0.3" stroke={c} strokeWidth="1.8" />
          <path d="M0,-8 C-8,-22 0,-30 0,-30 C0,-30 8,-22 0,-8" fill={c} fillOpacity="0.7" stroke={c} strokeWidth="1.8" />
          <circle cx="0" cy="-2" r="3.5" fill={c} />
        </g>
        <g transform="translate(-35, -35)">
          <path d="M0,0 C-8,-10 -15,-4 -10,6 Z" fill={c} fillOpacity="0.3" stroke={c} strokeWidth="1.5" />
          <path d="M0,0 C8,-10 15,-4 10,6 Z" fill={c} fillOpacity="0.3" stroke={c} strokeWidth="1.5" />
          <circle cx="0" cy="0" r="2.5" fill={c} />
        </g>
        <g transform="translate(40, -40)">
          <path d="M0,0 C-8,-10 -15,-4 -10,6 Z" fill={c} fillOpacity="0.3" stroke={c} strokeWidth="1.5" />
          <path d="M0,0 C8,-10 15,-4 10,6 Z" fill={c} fillOpacity="0.3" stroke={c} strokeWidth="1.5" />
          <circle cx="0" cy="0" r="2.5" fill={c} />
        </g>
        {/* Foliage Hatching */}
        <path d="M-15,30 Q-28,25 -25,18 Q-12,22 -15,30" fill={c} fillOpacity="0.4" stroke={c} strokeWidth="1.5" />
        <path d="M12,22 Q26,18 24,10 Q10,15 12,22" fill={c} fillOpacity="0.4" stroke={c} strokeWidth="1.5" />
      </g>
    )
  },
  {
    id: "kalamkari_paisley",
    name: "Kalamkari Kalga / Paisley Medallion",
    tradition: "kalamkari",
    traditionName: "Kalamkari",
    category: "symbol",
    visualPrinciple: "Curving teardrop contour filled with dense floral tendrils and concentric ornamental borders.",
    traditionalContext: "Courtly and temple textile emblem symbolizing the mango bud, fertility, and divine abundance.",
    interpretation: "Vector analysis of Kalamkari contour line modulation and internal organic fill.",
    sources: "Crafts Council of India; GI Registry #18",
    defaultScale: 35,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer Paisley Outline */}
        <path d="M0,35 C-28,35 -38,10 -30,-12 C-22,-32 0,-45 8,-52 C12,-42 5,-32 -4,-28 C-16,-22 -18,-5 -8,8 C2,20 18,18 24,5 C30,-8 20,-22 10,-28" strokeWidth="3" />
        <path d="M-4,30 C-22,30 -30,12 -24,-6 C-18,-22 0,-34 6,-40" strokeWidth="1.2" strokeDasharray="3 3" />
        {/* Internal Floral Vines */}
        <circle cx="-5" cy="5" r="5" fill={c} fillOpacity="0.6" />
        <path d="M-5,10 Q-15,18 -8,25" strokeWidth="1.5" />
        <path d="M-5,0 Q-15,-8 -12,-16" strokeWidth="1.5" />
        <circle cx="-12" cy="-16" r="3" fill={c} fillOpacity="0.4" />
        <circle cx="-8" cy="25" r="3" fill={c} fillOpacity="0.4" />
      </g>
    )
  },
  {
    id: "kalamkari_peacock",
    name: "Kalamkari Sacred Mayura (Peacock)",
    tradition: "kalamkari",
    traditionName: "Kalamkari",
    category: "figure",
    visualPrinciple: "Graceful S-curved avian silhouette with articulated feathers and flowing crest.",
    traditionalContext: "Associated with temple heraldry, rain blessings, and celestial beauty.",
    interpretation: "Original digital vector study analyzing Kalamkari plumage rhythm.",
    sources: "Jonnalagadda Gurappa Chetty Archives; V&A Collection",
    defaultScale: 38,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Body & Neck */}
        <path d="M-10,12 C-20,5 -22,-15 -12,-28 C-6,-36 2,-40 8,-38 C14,-36 12,-26 5,-20 C-2,-14 -4,-2 0,10 C4,22 -2,32 -10,32 Z" fill={c} fillOpacity="0.3" strokeWidth="2.5" />
        {/* Head, Beak & Eye */}
        <circle cx="9" cy="-35" r="1.8" fill={c} />
        <path d="M12,-38 L18,-36 L12,-34" strokeWidth="1.8" />
        {/* Crest Feathers */}
        <path d="M8,-40 Q10,-48 15,-48" strokeWidth="1.5" />
        <path d="M7,-40 Q5,-50 8,-52" strokeWidth="1.5" />
        <circle cx="15" cy="-48" r="1.5" fill={c} />
        <circle cx="8" cy="-52" r="1.5" fill={c} />
        {/* Plumage Tail Fan */}
        <path d="M-10,15 C-25,18 -42,8 -48,-15 C-52,-32 -38,-48 -20,-50 C-12,-52 -8,-45 -12,-38" strokeWidth="2.2" />
        <path d="M-12,22 C-30,28 -48,15 -52,-5 C-55,-22 -44,-38 -30,-40" strokeWidth="1.8" strokeDasharray="3 4" />
        {/* Eye of the Feather */}
        <circle cx="-35" cy="-20" r="4.5" fill={c} fillOpacity="0.5" />
        <circle cx="-35" cy="-20" r="2" stroke={c} strokeWidth="1.2" />
        <circle cx="-22" cy="-35" r="4" fill={c} fillOpacity="0.5" />
      </g>
    )
  },

  // --- MITHILA / MADHUBANI MOTIFS ---
  {
    id: "sacred_fish",
    name: "Mithila Auspicious Matsya (Fish)",
    tradition: "madhubani",
    traditionName: "Mithila / Madhubani",
    category: "figure",
    visualPrinciple: "Double contour lines with dense Kachni hatching and exaggerated almond eye.",
    traditionalContext: "Painted on Kohbar nuptial chambers as an emblem of fertility, water life, and good fortune.",
    interpretation: "Vector study of Mithila dual-line discipline and internal parallel cross-hatching.",
    sources: "Mithila Museum, Japan; Vequaud, Y. 'Women Painters of Mithila' (1977)",
    defaultScale: 36,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer Body Double Contour */}
        <path d="M-40,0 C-25,-24 20,-24 40,0 C20,24 -25,24 -40,0 Z" strokeWidth="3" />
        <path d="M-36,0 C-22,-20 18,-20 36,0 C18,20 -22,20 -36,0 Z" strokeWidth="1.4" />
        {/* Tail Fin */}
        <path d="M38,0 L52,-18 C46,-6 46,6 52,18 Z" fill={c} fillOpacity="0.3" strokeWidth="2" />
        {/* Almond Eye & Gills */}
        <path d="M-22,-4 Q-16,-10 -10,-4 Q-16,2 -22,-4 Z" fill={c} />
        <circle cx="-16" cy="-4" r="1.5" fill="#fff" />
        <path d="M-6,-18 Q0,0 -6,18" strokeWidth="2" />
        <path d="M-3,-18 Q3,0 -3,18" strokeWidth="1.5" />
        {/* Internal Kachni Fine Hatching */}
        {[-2, 6, 14, 22, 30].map((x, i) => (
          <line key={i} x1={x} y1="-14" x2={x + 4} y2="14" strokeWidth="1.2" strokeDasharray="1 2" />
        ))}
        {/* Dorsal & Ventral Fins */}
        <path d="M-5,-20 Q10,-32 20,-18" strokeWidth="2" />
        <path d="M-5,20 Q10,32 20,18" strokeWidth="2" />
      </g>
    )
  },
  {
    id: "kohbar_sun_moon",
    name: "Kohbar Cosmic Sun-Moon",
    tradition: "madhubani",
    traditionName: "Mithila / Madhubani",
    category: "symbol",
    visualPrinciple: "Concentric radiant solar discs interlaced with floral petals and protective cosmic rays.",
    traditionalContext: "Central celestial blessing in the nuptial chamber ensuring longevity and cosmic harmony.",
    interpretation: "Digital analysis of Mithila horror vacui radial symmetry.",
    sources: "Ganga Devi & Sita Devi Archives; National Museum New Delhi",
    defaultScale: 38,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="0" cy="0" r="16" strokeWidth="2.5" fill={c} fillOpacity="0.2" />
        <circle cx="0" cy="0" r="12" strokeWidth="1.2" />
        {/* Face */}
        <circle cx="-4" cy="-3" r="1.8" fill={c} />
        <circle cx="4" cy="-3" r="1.8" fill={c} />
        <path d="M0,-2 L0,4 L-2,4" strokeWidth="1.5" />
        <path d="M-5,7 Q0,12 5,7" strokeWidth="1.8" />
        {/* Radial Petals */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = Math.cos(rad) * 16;
          const y1 = Math.sin(rad) * 16;
          const x2 = Math.cos(rad) * 32;
          const y2 = Math.sin(rad) * 32;
          const x3 = Math.cos(rad + 0.25) * 24;
          const y3 = Math.sin(rad + 0.25) * 24;
          return (
            <React.Fragment key={i}>
              <polygon points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`} fill={c} fillOpacity={i % 2 === 0 ? "0.6" : "0.2"} stroke={c} strokeWidth="1.2" />
              <line x1={x2} y1={y2} x2={Math.cos(rad) * 44} y2={Math.sin(rad) * 44} strokeWidth="1.5" />
              <circle cx={Math.cos(rad) * 44} cy={Math.sin(rad) * 44} r="1.8" fill={c} />
            </React.Fragment>
          );
        })}
      </g>
    )
  },
  {
    id: "mithila_lotus",
    name: "Mithila Sacred Kamala (Lotus)",
    tradition: "madhubani",
    traditionName: "Mithila / Madhubani",
    category: "botanical",
    visualPrinciple: "Tiered symmetrical lotus petals with internal parallel fine line fills.",
    traditionalContext: "Symbol of spiritual purity, goddess Lakshmi's seat, and cosmic emergence.",
    interpretation: "Study of Mithila floral geometric geometry.",
    sources: "Yves Vequaud Monograph (1977)",
    defaultScale: 34,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="0" cy="0" rx="6" ry="4" fill={c} />
        {/* Tiered Petals */}
        <path d="M0,0 C-14,-20 0,-34 0,-34 C0,-34 14,-20 0,0" fill={c} fillOpacity="0.4" strokeWidth="2" />
        <path d="M0,0 C-26,-15 -28,-30 -28,-30 C-28,-30 -12,-8 0,0" fill={c} fillOpacity="0.25" strokeWidth="1.8" />
        <path d="M0,0 C26,-15 28,-30 28,-30 C28,-30 12,-8 0,0" fill={c} fillOpacity="0.25" strokeWidth="1.8" />
        <path d="M0,0 C-36,5 -38,-10 -38,-10 C-38,-10 -18,2 0,0" strokeWidth="1.8" />
        <path d="M0,0 C36,5 38,-10 38,-10 C38,-10 18,2 0,0" strokeWidth="1.8" />
        {/* Base Water Waves */}
        <path d="M-30,12 Q-15,4 0,12 Q15,4 30,12" strokeWidth="2" />
        <path d="M-30,18 Q-15,10 0,18 Q15,10 30,18" strokeWidth="1.5" />
      </g>
    )
  },

  // --- GOND MOTIFS ---
  {
    id: "gond_deer",
    name: "Gond Dappled Forest Stag",
    tradition: "gond",
    traditionName: "Gond",
    category: "figure",
    visualPrinciple: "Bold dynamic silhouette infused with dense rhythmic Bindiya (stippled dots) and line waves.",
    traditionalContext: "Embodiment of forest spirit, agility, and the sacred harmony of the central Indian wilderness.",
    interpretation: "Original study modeling Jangarh Singh Shyam's signature dot and line graphic field.",
    sources: "Bharat Bhavan Bhopal; Vajpeyi, U. 'Jangarh Kalam' (2008)",
    defaultScale: 42,
    render: (c) => (
      <g stroke={c} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Stag Body Silhouette */}
        <path d="M-30,15 C-40,5 -38,-12 -25,-18 C-10,-24 15,-18 30,-5 C38,2 35,20 22,25 C5,28 -15,22 -30,15 Z" fill={c} fillOpacity="0.25" strokeWidth="3" />
        {/* Long Graceful Neck & Head */}
        <path d="M-25,-18 C-28,-32 -20,-44 -12,-50 C-8,-52 -2,-48 -4,-42 C-6,-35 -8,-25 -10,-18" fill={c} fillOpacity="0.4" strokeWidth="2.5" />
        {/* Antlers with Stylized Birds */}
        <path d="M-12,-50 C-18,-62 -30,-65 -36,-58 M-18,-62 C-22,-74 -15,-78 -8,-70" strokeWidth="2.5" />
        <path d="M-10,-50 C-4,-64 8,-68 15,-60 M-4,-64 C2,-76 12,-74 18,-66" strokeWidth="2.5" />
        {/* Slender Legs */}
        <path d="M-25,18 L-28,45 L-24,45" strokeWidth="2.5" />
        <path d="M-18,22 L-16,45 L-12,45" strokeWidth="2.2" />
        <path d="M18,25 L16,48 L20,48" strokeWidth="2.5" />
        <path d="M24,22 L28,48 L32,48" strokeWidth="2.2" />
        {/* Internal Gond Dot Matrix Patterns */}
        {[-15, -5, 5, 15].map((x, i) => (
          <React.Fragment key={i}>
            <circle cx={x} cy="-5" r="2" fill={c} />
            <circle cx={x - 4} cy="5" r="1.8" fill={c} />
            <circle cx={x + 4} cy="12" r="1.5" fill={c} />
          </React.Fragment>
        ))}
      </g>
    )
  },
  {
    id: "mahua_tree",
    name: "Gond Sacred Mahua Tree",
    tradition: "gond",
    traditionName: "Gond",
    category: "botanical",
    visualPrinciple: "Expanding organic canopy with undulating branch lobes filled with rhythmic textural hatchings.",
    traditionalContext: "Central to Gond tribal economy and ritual life; home to tree spirits and shelter for birds.",
    interpretation: "Digital vector interpretation of Gond organic texture density.",
    sources: "Bhajju Shyam Masterworks; Museum of Archaeology and Anthropology, Cambridge",
    defaultScale: 40,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Trunk */}
        <path d="M-8,45 C-12,20 -15,0 -4,-18 C4,-30 18,-20 8,0 C-2,18 2,45 -8,45 Z" fill={c} fillOpacity="0.4" strokeWidth="3" />
        {/* Organic Canopy Lobes */}
        <path d="M-4,-18 C-25,-25 -42,-10 -40,-35 C-38,-55 -15,-50 -4,-42 C6,-52 35,-55 38,-35 C40,-12 18,-25 -4,-18" fill={c} fillOpacity="0.2" strokeWidth="2.5" />
        {/* Texture Scales Inside Canopy */}
        {[-25, -10, 5, 20].map((x, i) => (
          <path key={i} d={`M${x},-38 Q${x + 6},-46 ${x + 12},-38`} strokeWidth="1.8" />
        ))}
        {[-18, -2, 14].map((x, i) => (
          <path key={i} d={`M${x},-28 Q${x + 6},-35 ${x + 12},-28`} strokeWidth="1.8" />
        ))}
        {/* Nesting Gond Birds */}
        <circle cx="-18" cy="-44" r="3" fill={c} />
        <path d="M-18,-44 Q-24,-48 -28,-40" strokeWidth="1.5" />
        <circle cx="18" cy="-44" r="3" fill={c} />
        <path d="M18,-44 Q24,-48 28,-40" strokeWidth="1.5" />
      </g>
    )
  },

  // --- PATTACHITRA MOTIFS ---
  {
    id: "pattachitra_eye_deity",
    name: "Pattachitra Iconographic Lotus-Eye Deity",
    tradition: "pattachitra",
    traditionName: "Pattachitra",
    category: "figure",
    visualPrinciple: "Sharp profile contour with elongated Meenakshi (fish-shaped) eye, ornamental jewelry, and mukuta crown.",
    traditionalContext: "Puri temple devotional icon embodying Jagannath and Krishna avatar iconography.",
    interpretation: "Study of classical Chitrakara linear discipline and facial proportion canons.",
    sources: "Odisha State Museum; Jyotindra Jain 'Picture Showmen' (1998)",
    defaultScale: 38,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Facial Profile */}
        <path d="M-10,25 C-12,18 -18,12 -16,5 C-14,0 -6,-4 -4,-10 C-2,-14 -12,-18 -10,-24 C-8,-28 -2,-30 4,-32" strokeWidth="3" />
        {/* Elaborate Fish-Shaped Eye */}
        <path d="M-12,-8 C-4,-18 10,-12 14,-6 C8,0 -4,2 -12,-8 Z" fill="#fff" stroke={c} strokeWidth="2.5" />
        <circle cx="2" cy="-7" r="4" fill={c} />
        <circle cx="4" cy="-8" r="1.5" fill="#fff" />
        {/* Eyebrow Arch */}
        <path d="M-16,-14 C-4,-24 12,-18 18,-10" strokeWidth="2.2" />
        {/* Lips & Nose Ornament */}
        <path d="M-14,5 Q-8,3 -12,8" strokeWidth="2" />
        <circle cx="-16" cy="1" r="2" fill={c} />
        {/* Mukuta Crown */}
        <path d="M-4,-32 L15,-55 L28,-32 Z" fill={c} fillOpacity="0.3" strokeWidth="2.5" />
        <circle cx="15" cy="-55" r="3" fill={c} />
        <path d="M0,-32 Q14,-40 28,-32" strokeWidth="2" />
        {/* Earring (Kundala) */}
        <circle cx="14" cy="5" r="6" strokeWidth="2" fill={c} fillOpacity="0.4" />
        <circle cx="14" cy="5" r="2" fill={c} />
      </g>
    )
  },
  {
    id: "prabhavali_arch",
    name: "Pattachitra Temple Prabhavali Arch",
    tradition: "pattachitra",
    traditionName: "Pattachitra",
    category: "structural",
    visualPrinciple: "Symmetrical ornamental halo arch crowned with floral finials and stepped moldings.",
    traditionalContext: "Frames sanctum sanctorum deities, demarcating sacred space from surrounding narrative.",
    interpretation: "Vector architectural study of temple gateway symmetry.",
    sources: "Raghurajpur Heritage Guild Archives",
    defaultScale: 40,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer Arch */}
        <path d="M-42,40 L-42,-5 C-42,-35 42,-35 42,-5 L42,40" strokeWidth="3" />
        {/* Inner Arch */}
        <path d="M-32,40 L-32,-2 C-32,-25 32,-25 32,-2 L32,40" strokeWidth="1.8" strokeDasharray="3 3" />
        {/* Apex Kirtimukha Finial */}
        <circle cx="0" cy="-35" r="6" fill={c} strokeWidth="2" />
        <polygon points="0,-48 -7,-39 7,-39" fill={c} />
        {/* Side Pillars & Brackets */}
        <rect x="-46" y="-5" width="8" height="45" strokeWidth="2" fill={c} fillOpacity="0.2" />
        <rect x="38" y="-5" width="8" height="45" strokeWidth="2" fill={c} fillOpacity="0.2" />
        {/* Floral Rosettes */}
        <circle cx="-37" cy="-22" r="4" fill={c} fillOpacity="0.6" />
        <circle cx="37" cy="-22" r="4" fill={c} fillOpacity="0.6" />
      </g>
    )
  },

  // --- THANJAVUR MOTIFS ---
  {
    id: "kirtimukha_arch",
    name: "Thanjavur Gilded Kirtimukha Canopy",
    tradition: "thanjavur",
    traditionName: "Thanjavur",
    category: "structural",
    visualPrinciple: "High-relief gesso arch crowned with the ferocious protective face of glory and hanging gold leaf tassels.",
    traditionalContext: "Devotional frame for royal court and temple icons designed to catch shimmering lamp light.",
    interpretation: "Vector study of Tanjore three-dimensional gesso relief and gilding geometry.",
    sources: "Thanjavur Maratha Palace Gallery; Sivaramamurti, C. (1968)",
    defaultScale: 42,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Gilded Cusped Arch */}
        <path d="M-45,35 L-45,0 C-45,-25 -20,-30 0,-20 C20,-30 45,-25 45,0 L45,35" strokeWidth="3.5" />
        <path d="M-38,35 L-38,2 C-38,-20 -15,-24 0,-15 C15,-24 38,-20 38,2 L38,35" strokeWidth="1.5" />
        {/* Kirtimukha Crest Face */}
        <circle cx="0" cy="-28" r="8" fill={c} fillOpacity="0.5" strokeWidth="2.5" />
        <circle cx="-3" cy="-30" r="1.5" fill="#fff" />
        <circle cx="3" cy="-30" r="1.5" fill="#fff" />
        <path d="M-5,-24 Q0,-20 5,-24" strokeWidth="2" />
        {/* Inset Gem Studding & Tassels */}
        {[-30, -18, -6, 6, 18, 30].map((x, i) => (
          <React.Fragment key={i}>
            <circle cx={x} cy={-2 - Math.abs(x) * 0.4} r="2.5" fill={c} />
            <line x1={x} y1={-2 - Math.abs(x) * 0.4} x2={x} y2={6 - Math.abs(x) * 0.4} strokeWidth="1.5" />
          </React.Fragment>
        ))}
      </g>
    )
  },
  {
    id: "bejeweled_halo",
    name: "Thanjavur Radiant Halo (Prabha)",
    tradition: "thanjavur",
    traditionName: "Thanjavur",
    category: "symbol",
    visualPrinciple: "Concentric circular gold disc encrusted with simulated rubies, emeralds, and pearl borders.",
    traditionalContext: "Signifies the divine aura and celestial majesty of South Indian deities.",
    interpretation: "Vector representation of Tanjore gold leaf foil and stone-setting geometry.",
    sources: "Government Museum Chennai; GI Tag #11 File",
    defaultScale: 36,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="0" cy="0" r="32" strokeWidth="3" fill={c} fillOpacity="0.2" />
        <circle cx="0" cy="0" r="26" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="0" cy="0" r="18" strokeWidth="2" fill={c} fillOpacity="0.4" />
        {/* Radial Gem Settings */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <g key={i} transform={`translate(${Math.cos(rad) * 26}, ${Math.sin(rad) * 26})`}>
              <polygon points="-2.5,-2.5 2.5,-2.5 2.5,2.5 -2.5,2.5" fill={c} />
            </g>
          );
        })}
      </g>
    )
  },

  // --- SAURA MOTIFS ---
  {
    id: "saura_spirit_house",
    name: "Saura Idital Spirit House",
    tradition: "saura",
    traditionName: "Saura",
    category: "structural",
    visualPrinciple: "Rectangular architectural sanctuary framing stick figures, ancestor ladders, and animal guardians.",
    traditionalContext: "Painted on domestic walls by the shaman (Kudang) to house ancestral spirits (Labasum).",
    interpretation: "Original study of Saura linear geometry and stacked vertical hierarchy.",
    sources: "Tribal Research Institute Museum, Bhubaneswar; Elwin, V. (1955)",
    defaultScale: 38,
    render: (c) => (
      <g stroke={c} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer Frame with Triangular Fringe */}
        <rect x="-38" y="-38" width="76" height="76" strokeWidth="3" />
        {[-28, -14, 0, 14, 28].map((p, i) => (
          <React.Fragment key={i}>
            <polygon points={`${p-4},-38 ${p+4},-38 ${p},-44`} fill={c} />
            <polygon points={`${p-4},38 ${p+4},38 ${p},44`} fill={c} />
          </React.Fragment>
        ))}
        {/* Shamanic Ancestor Ladder */}
        <line x1="-20" y1="-28" x2="-20" y2="28" strokeWidth="2" />
        <line x1="-10" y1="-28" x2="-10" y2="28" strokeWidth="2" />
        {[-20, -10, 0, 10, 20].map((y, i) => (
          <line key={i} x1="-20" y1={y} x2="-10" y2={y} strokeWidth="2" />
        ))}
        {/* Saura Trapeze Figures */}
        {[
          { x: 12, y: -16 },
          { x: 12, y: 12 }
        ].map((pos, i) => (
          <g key={i} transform={`translate(${pos.x}, ${pos.y})`}>
            <circle cx="0" cy="-6" r="2.8" fill={c} />
            {/* Saura Single Trapeze Torso (unlike Warli dual triangles) */}
            <polygon points="-5,-2 5,-2 2,8 -2,8" fill={c} />
            <line x1="-5" y1="0" x2="-10" y2="-4" strokeWidth="2" />
            <line x1="5" y1="0" x2="10" y2="-4" strokeWidth="2" />
            <line x1="-2" y1="8" x2="-5" y2="16" strokeWidth="2" />
            <line x1="2" y1="8" x2="5" y2="16" strokeWidth="2" />
          </g>
        ))}
      </g>
    )
  },
  {
    id: "ancestor_procession",
    name: "Saura Linked Ancestor Line",
    tradition: "saura",
    traditionName: "Saura",
    category: "figure",
    visualPrinciple: "Horizontal rhythmic procession of linked trapezoidal figures marching in celebration.",
    traditionalContext: "Celebrates community harvests, marriage alliances, and shamanic healing.",
    interpretation: "Vector study of Saura linear rhythm.",
    sources: "IGNCA Eastern Centre; GI Tag #417 File",
    defaultScale: 36,
    render: (c) => (
      <g stroke={c} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {[-28, 0, 28].map((x, i) => (
          <g key={i} transform={`translate(${x}, 0)`}>
            <circle cx="0" cy="-12" r="3" fill={c} />
            <polygon points="-6,-6 6,-6 3,6 -3,6" fill={c} />
            <line x1="-5" y1="-3" x2="-14" y2="0" strokeWidth="2" />
            <line x1="5" y1="-3" x2="14" y2="0" strokeWidth="2" />
            <line x1="-3" y1="6" x2="-6" y2="18" strokeWidth="2" />
            <line x1="3" y1="6" x2="6" y2="18" strokeWidth="2" />
          </g>
        ))}
        {/* Interlinking hand line */}
        <line x1="-36" y1="0" x2="36" y2="0" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.6" />
      </g>
    )
  },

  // --- PHAD MOTIFS ---
  {
    id: "pabuji_steed",
    name: "Phad Epic Mare (Kesar Kalmi)",
    tradition: "phad",
    traditionName: "Phad",
    category: "figure",
    visualPrinciple: "Stately caparisoned steed with heroic rider, sweeping reins, and hierarchical scaling.",
    traditionalContext: "Central narrative hero Pabuji Rathore on his legendary black mare embarking on the epic quest.",
    interpretation: "Vector study of Rajasthani scroll narrative figurative conventions.",
    sources: "National Museum New Delhi; Smith, J. D. 'The Epic of Pabuji' (1991)",
    defaultScale: 40,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Horse Body */}
        <path d="M-30,10 C-40,-5 -35,-22 -18,-25 C0,-26 22,-20 30,-5 C35,10 28,25 15,22 C-5,22 -20,20 -30,10 Z" fill={c} fillOpacity="0.3" strokeWidth="2.8" />
        {/* Arched Neck & Head */}
        <path d="M22,-20 C28,-35 24,-45 16,-50 C12,-52 8,-48 10,-42 C12,-35 15,-25 18,-18" fill={c} fillOpacity="0.4" strokeWidth="2.5" />
        {/* Legs with Armor / Bells */}
        <path d="M-22,18 L-26,45 L-20,45" strokeWidth="2.5" />
        <path d="M-14,20 L-12,45 L-6,45" strokeWidth="2.2" />
        <path d="M14,22 L18,48 L24,48" strokeWidth="2.5" />
        <path d="M22,18 L28,48 L34,48" strokeWidth="2.2" />
        {/* Rider Hero Silhouette */}
        <g transform="translate(0, -32)">
          <circle cx="0" cy="-12" r="3.5" fill={c} />
          <path d="M0,-8 L-6,8 L6,8 Z" fill={c} />
          <line x1="-5" y1="0" x2="-18" y2="-15" strokeWidth="2.5" />
          <line x1="-18" y1="-15" x2="-24" y2="-22" strokeWidth="3" />
        </g>
      </g>
    )
  },
  {
    id: "phad_court_pavilion",
    name: "Phad Royal Chhatri Pavilion",
    tradition: "phad",
    traditionName: "Phad",
    category: "structural",
    visualPrinciple: "Rajasthani cusped arch pavilion with dome and decorative battlements framing narrative encounters.",
    traditionalContext: "Demarcates royal courts, encampments, and mythological assemblies on the continuous scroll.",
    interpretation: "Vector architectural study of Rajasthani scroll framing.",
    sources: "Jawahar Kala Kendra Folk Archive; Shree Lal Joshi Masterworks",
    defaultScale: 38,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Dome & Finial */}
        <path d="M-32,-15 C-32,-35 0,-44 0,-44 C0,-44 32,-35 32,-15 Z" fill={c} fillOpacity="0.3" strokeWidth="2.8" />
        <line x1="0" y1="-44" x2="0" y2="-52" strokeWidth="2.5" />
        <circle cx="0" cy="-52" r="2.5" fill={c} />
        {/* Cusped Arch Opening */}
        <path d="M-28,-15 C-28,0 -14,-4 0,4 C14,-4 28,0 28,-15" strokeWidth="2.2" />
        {/* Pillars */}
        <line x1="-28" y1="-15" x2="-28" y2="35" strokeWidth="3" />
        <line x1="28" y1="-15" x2="28" y2="35" strokeWidth="3" />
        {/* Base Plinth */}
        <rect x="-35" y="35" width="70" height="8" fill={c} fillOpacity="0.4" strokeWidth="2" />
      </g>
    )
  }
];

export const getMotifById = (id) => MOTIF_STUDIES.find((m) => m.id === id);
export const getMotifsByTradition = (traditionId) => MOTIF_STUDIES.filter((m) => m.tradition === traditionId);
