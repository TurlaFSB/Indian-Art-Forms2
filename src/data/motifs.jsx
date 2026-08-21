import React from "react";

/**
 * SYNTHESIS — Comprehensive Digital Motif Studies (20 Regional Indian Traditions)
 * Curated vector grammar studies for educational analysis and hybrid synthesis.
 */

export const MOTIF_STUDIES = [
  // ==========================================
  // 1. WARLI MOTIFS
  // ==========================================
  {
    id: "tarpa_dance",
    name: "Tarpa Spiral Dance",
    tradition: "warli",
    traditionName: "Warli",
    category: "figure",
    visualPrinciple: "Centrifugal spiral movement representing cyclical time and communal unity without a central hierarchy.",
    traditionalContext: "Performed during harvest and wedding rituals where dancers link hands moving to the Tarpa horn.",
    interpretation: "Vector study of Warli dual-triangle geometric proportions and circular rhythmic repetition.",
    defaultScale: 38,
    render: (c) => (
      <g stroke={c} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="0" cy="-6" r="3.5" fill={c} />
        <polygon points="0,-2 -4,5 4,5" fill={c} />
        <polygon points="0,11 -4,5 4,5" fill={c} />
        <line x1="-3" y1="2" x2="-8" y2="-3" />
        <line x1="-8" y1="-3" x2="-14" y2="-7" />
        <path d="M-14,-7 Q-20,-12 -22,-3" strokeWidth="3" />
        <line x1="-2" y1="11" x2="-5" y2="18" />
        <line x1="2" y1="11" x2="5" y2="18" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x = Math.cos(rad) * 26;
          const y = Math.sin(rad) * 26;
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
        <circle cx="0" cy="0" r="46" strokeDasharray="3 6" opacity="0.4" />
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
    traditionalContext: "Lagna Chowk painted on wedding walls invoking Palaghat, mother goddess of fertility.",
    defaultScale: 42,
    render: (c) => (
      <g stroke={c} strokeWidth="2.5" fill="none">
        <rect x="-40" y="-40" width="80" height="80" strokeWidth="3" />
        <rect x="-32" y="-32" width="64" height="64" strokeWidth="1.5" strokeDasharray="4 4" />
        <rect x="-22" y="-22" width="44" height="44" strokeWidth="2" />
        {[-30, -18, -6, 6, 18, 30].map((p, i) => (
          <React.Fragment key={i}>
            <polygon points={`${p - 4},-40 ${p + 4},-40 ${p},-34`} fill={c} />
            <polygon points={`${p - 4},40 ${p + 4},40 ${p},34`} fill={c} />
            <polygon points={`-40,${p - 4} -40,${p + 4} -34,${p}`} fill={c} />
            <polygon points={`40,${p - 4} 40,${p + 4} 34,${p}`} fill={c} />
          </React.Fragment>
        ))}
        <g transform="translate(0, 0)">
          <circle cx="0" cy="-10" r="3.5" fill={c} />
          <polygon points="0,-6 -6,3 6,3" fill={c} />
          <polygon points="0,11 -6,3 6,3" fill={c} />
        </g>
      </g>
    )
  },
  {
    id: "tree_of_life_warli",
    name: "Warli Tree of Life",
    tradition: "warli",
    traditionName: "Warli",
    category: "botanical",
    visualPrinciple: "Fractal branch bifurcation with triangular leaves and nesting birds.",
    traditionalContext: "Represents sacred groves and the interdependence of forest life.",
    defaultScale: 38,
    render: (c) => (
      <g stroke={c} strokeWidth="2.2" fill="none" strokeLinecap="round">
        <line x1="0" y1="40" x2="0" y2="-15" strokeWidth="3.5" />
        <path d="M0,15 Q-15,5 -28,8" />
        <path d="M0,15 Q15,5 28,8" />
        <path d="M0,-2 Q-18,-15 -32,-10" />
        <path d="M0,-2 Q18,-15 32,-10" />
        <path d="M0,-15 Q-14,-28 -20,-38" />
        <path d="M0,-15 Q14,-28 20,-38" />
        {[-28, 28, -32, 32, -20, 20].map((x, i) => (
          <polygon key={i} points={`${x},${i % 2 === 0 ? 8 : -10} ${x + 4},${i % 2 === 0 ? 3 : -15} ${x - 4},${i % 2 === 0 ? 3 : -15}`} fill={c} />
        ))}
      </g>
    )
  },

  // ==========================================
  // 2. KALAMKARI MOTIFS
  // ==========================================
  {
    id: "tree_of_life_kalamkari",
    name: "Kalamkari Kalpavriksha (Tree of Life)",
    tradition: "kalamkari",
    traditionName: "Kalamkari",
    category: "botanical",
    visualPrinciple: "Sinewy scrolling trunk with bifurcating arabesque branches and dense multi-petaled lotuses.",
    traditionalContext: "Sacred wish-fulfilling cosmic tree symbolizing abundance and ecological vitality.",
    defaultScale: 44,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-4,45 C-12,20 8,-5 -2,-30 C-6,-40 0,-48 0,-48" strokeWidth="3.5" />
        <path d="M4,45 C-4,20 16,-5 6,-30 C2,-40 0,-48 0,-48" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M-1,10 C-18,6 -28,-8 -24,-24 C-20,-40 -6,-35 -4,-28" strokeWidth="2" />
        <path d="M1,5 C18,0 30,-12 26,-28 C22,-42 8,-38 5,-28" strokeWidth="2" />
        <g transform="translate(-24, -24) scale(0.6)">
          <circle cx="0" cy="0" r="10" fill={c} fillOpacity="0.2" strokeWidth="1.8" />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <path key={deg} d="M0,0 C6,-12 12,-6 0,-18 C-12,-6 -6,-12 0,0" transform={`rotate(${deg})`} fill={c} fillOpacity="0.5" />
          ))}
        </g>
        <g transform="translate(26, -28) scale(0.6)">
          <circle cx="0" cy="0" r="10" fill={c} fillOpacity="0.2" strokeWidth="1.8" />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <path key={deg} d="M0,0 C6,-12 12,-6 0,-18 C-12,-6 -6,-12 0,0" transform={`rotate(${deg})`} fill={c} fillOpacity="0.5" />
          ))}
        </g>
      </g>
    )
  },
  {
    id: "kalamkari_paisley",
    name: "Kalamkari Kalga (Paisley)",
    tradition: "kalamkari",
    traditionName: "Kalamkari",
    category: "symbol",
    visualPrinciple: "Curvilinear mango teardrop with internal micro-floral scrolls and serrated leaf contours.",
    traditionalContext: "Auspicious symbol of fertility, seasonal renewal, and courtly textile elegance.",
    defaultScale: 38,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0,35 C-24,35 -35,15 -35,-8 C-35,-28 -15,-40 0,-48 C5,-36 15,-28 10,-12 C7,-2 18,2 20,-8 C22,-18 10,-32 15,-40 C28,-24 35,5 25,22 C18,32 8,35 0,35 Z" fill={c} fillOpacity="0.15" strokeWidth="2.8" />
        <path d="M0,25 C-15,25 -22,10 -22,-4 C-22,-18 -8,-28 0,-34" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="-5" cy="5" r="7" fill={c} fillOpacity="0.3" />
      </g>
    )
  },
  {
    id: "kalamkari_peacock",
    name: "Kalamkari Sacred Mayura",
    tradition: "kalamkari",
    traditionName: "Kalamkari",
    category: "figure",
    visualPrinciple: "Sinuous peacock profile with flamboyant multi-layered plume fan.",
    traditionalContext: "Symbol of divine beauty, rainfall, and devotion in temple hangings.",
    defaultScale: 40,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-15,10 C-25,0 -20,-20 -5,-25 C5,-30 15,-20 18,-8 C22,8 5,20 -15,10 Z" fill={c} fillOpacity="0.3" />
        <path d="M-5,-25 C-8,-35 -4,-45 4,-48 C8,-42 5,-35 0,-28" strokeWidth="2.2" />
        <path d="M-15,10 C-35,15 -48,-5 -45,-30 C-35,-25 -25,-15 -20,-5" strokeWidth="2" fill={c} fillOpacity="0.2" />
        <path d="M-15,10 C-38,25 -52,10 -55,-15 C-42,-12 -30,-5 -22,0" strokeWidth="1.8" strokeDasharray="2 3" />
      </g>
    )
  },

  // ==========================================
  // 3. MITHILA / MADHUBANI MOTIFS
  // ==========================================
  {
    id: "sacred_fish",
    name: "Mithila Auspicious Matsya (Fish)",
    tradition: "madhubani",
    traditionName: "Mithila / Madhubani",
    category: "figure",
    visualPrinciple: "Almond-shaped contour with dual-line boundary and ultra-fine Kachni hatching.",
    traditionalContext: "Auspicious symbol of fertility, water bounty, and good fortune in Kohbar nuptial chambers.",
    defaultScale: 38,
    render: (c) => (
      <g stroke={c} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-40,0 C-20,-22 20,-22 40,0 C20,22 -20,22 -40,0 Z" strokeWidth="2.5" fill={c} fillOpacity="0.2" />
        <path d="M-36,0 C-18,-18 18,-18 36,0 C18,18 -18,18 -36,0 Z" strokeWidth="1.2" />
        <circle cx="24" cy="-4" r="3.5" fill={c} />
        <circle cx="25" cy="-5" r="1" fill="#ffffff" />
        {[-18, -10, -2, 6, 14].map((x, i) => (
          <line key={i} x1={x} y1={-12 + Math.abs(x) * 0.2} x2={x} y2={12 - Math.abs(x) * 0.2} strokeWidth="1" strokeDasharray="2 2" />
        ))}
        <path d="M-40,0 L-50,-12 L-44,0 L-50,12 Z" fill={c} strokeWidth="1.8" />
      </g>
    )
  },
  {
    id: "kohbar_sun_moon",
    name: "Mithila Sun-Moon Mandala",
    tradition: "madhubani",
    traditionName: "Mithila / Madhubani",
    category: "symbol",
    visualPrinciple: "Concentric radiant circle with radiating flame rays and alternating floral petals.",
    traditionalContext: "Cosmic witnesses painted on wedding chamber walls blessing the union with longevity.",
    defaultScale: 40,
    render: (c) => (
      <g stroke={c} strokeWidth="1.8" fill="none">
        <circle cx="0" cy="0" r="18" strokeWidth="2.5" fill={c} fillOpacity="0.2" />
        <circle cx="0" cy="0" r="24" strokeWidth="1.2" strokeDasharray="2 3" />
        <circle cx="0" cy="0" r="32" strokeWidth="2" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <g key={deg} transform={`rotate(${deg})`}>
            <line x1="0" y1="-32" x2="0" y2="-44" strokeWidth="2" strokeLinecap="round" />
            <circle cx="0" cy="-44" r="2" fill={c} />
          </g>
        ))}
      </g>
    )
  },
  {
    id: "mithila_lotus",
    name: "Mithila Sacred Kamala (Lotus)",
    tradition: "madhubani",
    traditionName: "Mithila / Madhubani",
    category: "botanical",
    visualPrinciple: "Radial layered lotus petals with fine interior Kachni line infill.",
    traditionalContext: "Represents the cosmic womb, spiritual purity, and divine seat.",
    defaultScale: 36,
    render: (c) => (
      <g stroke={c} strokeWidth="1.8" fill="none">
        <circle cx="0" cy="0" r="8" fill={c} />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <g key={deg} transform={`rotate(${deg})`}>
            <path d="M0,-8 C6,-20 14,-22 0,-32 C-14,-22 -6,-20 0,-8" fill={c} fillOpacity="0.3" strokeWidth="1.8" />
            <line x1="0" y1="-8" x2="0" y2="-28" strokeWidth="1" strokeDasharray="1 2" />
          </g>
        ))}
      </g>
    )
  },

  // ==========================================
  // 4. GOND MOTIFS
  // ==========================================
  {
    id: "gond_deer",
    name: "Gond Dappled Forest Stag",
    tradition: "gond",
    traditionName: "Gond",
    category: "figure",
    visualPrinciple: "Sweeping organic silhouette filled with pulsating Bindiya dot textures.",
    traditionalContext: "Forest spirit deer embodying the vitality and grace of central Indian woodlands.",
    defaultScale: 42,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-25,12 C-35,-5 -25,-25 -5,-25 C15,-25 25,-5 28,12 C20,25 -15,25 -25,12 Z" fill={c} fillOpacity="0.25" strokeWidth="2.5" />
        <path d="M22,-10 C26,-28 20,-42 12,-48 C8,-45 10,-32 16,-20" strokeWidth="2.2" />
        <path d="M12,-48 Q20,-58 28,-62" strokeWidth="2" />
        <path d="M12,-48 Q5,-58 0,-62" strokeWidth="2" />
        {[-15, -5, 5, 15].map((x, i) => (
          <circle key={i} cx={x} cy="0" r="2.5" fill={c} />
        ))}
        <path d="M-18,18 L-22,42" strokeWidth="2.5" />
        <path d="M18,18 L22,42" strokeWidth="2.5" />
      </g>
    )
  },
  {
    id: "mahua_tree",
    name: "Gond Sacred Mahua Tree",
    tradition: "gond",
    traditionName: "Gond",
    category: "botanical",
    visualPrinciple: "Expanding bulbous canopy covered in rhythmic scale-like dashes and vibrant birds.",
    traditionalContext: "The sacred Mahua tree provides food, wine, and medicine, revered as mother nature.",
    defaultScale: 44,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none">
        <path d="M-6,45 L-2,5 L2,5 L6,45 Z" fill={c} />
        <path d="M0,5 C-35,0 -48,-35 -20,-50 C0,-60 20,-60 35,-42 C48,-25 35,5 0,5 Z" fill={c} fillOpacity="0.25" strokeWidth="2.5" />
        {[-20, -10, 0, 10, 20].map((x, i) => (
          <path key={i} d={`M${x},-40 C${x-5},-30 ${x+5},-20 ${x},-10`} strokeWidth="1.5" strokeDasharray="3 3" />
        ))}
      </g>
    )
  },

  // ==========================================
  // 5. PATTACHITRA MOTIFS
  // ==========================================
  {
    id: "prabhavali_arch",
    name: "Pattachitra Temple Prabhavali Arch",
    tradition: "pattachitra",
    traditionName: "Pattachitra",
    category: "structural",
    visualPrinciple: "Monumental cusped temple arch with floral borders framing the central icon.",
    traditionalContext: "Sacred architectural gateway framing Lord Jagannath in temple sanctums.",
    defaultScale: 46,
    render: (c) => (
      <g stroke={c} strokeWidth="2.2" fill="none">
        <path d="M-40,40 L-40,-10 C-40,-35 0,-48 0,-48 C0,-48 40,-35 40,-10 L40,40" strokeWidth="3" />
        <path d="M-32,40 L-32,-8 C-32,-28 0,-38 0,-38 C0,-38 32,-28 32,-8 L32,40" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="0" cy="-48" r="4" fill={c} />
      </g>
    )
  },
  {
    id: "pattachitra_eye_deity",
    name: "Pattachitra Sacred Meenakshi Profile",
    tradition: "pattachitra",
    traditionName: "Pattachitra",
    category: "figure",
    visualPrinciple: "Exaggerated fish-shaped eye, sharp nose bridge, and stylized traditional headdress.",
    traditionalContext: "Classical depiction of Vaishnava temple deities and celestial nayikas.",
    defaultScale: 38,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-10,-35 C-5,-45 10,-42 15,-30 C18,-18 5,-8 -8,-5 L-12,20 L5,20" strokeWidth="2.5" />
        <path d="M-2,-18 C5,-22 15,-18 18,-14 C12,-10 5,-10 -2,-18 Z" fill={c} />
        <circle cx="8" cy="-14" r="2.5" fill="#ffffff" />
        <path d="M-10,-35 C-20,-38 -28,-28 -25,-15 L-10,-5" fill={c} fillOpacity="0.3" />
      </g>
    )
  },

  // ==========================================
  // 6. THANJAVUR (TANJORE) MOTIFS
  // ==========================================
  {
    id: "kirtimukha_arch",
    name: "Thanjavur Gilded Kirtimukha Canopy",
    tradition: "thanjavur",
    traditionName: "Thanjavur",
    category: "structural",
    visualPrinciple: "Gilded face of glory (Kirtimukha) flanked by cascading pearl tassels and heavy relief gesso.",
    traditionalContext: "Protective crowning element positioned at apex of royal Tanjore temple icons.",
    defaultScale: 42,
    render: (c) => (
      <g stroke={c} strokeWidth="2.2" fill="none">
        <circle cx="0" cy="-28" r="8" fill={c} fillOpacity="0.4" strokeWidth="2" />
        <path d="M-8,-28 C-25,-32 -38,-15 -35,5 L-25,5 C-28,-8 -18,-18 -8,-20" fill={c} fillOpacity="0.3" />
        <path d="M8,-28 C25,-32 38,-15 35,5 L25,5 C28,-8 18,-18 8,-20" fill={c} fillOpacity="0.3" />
        <line x1="-30" y1="5" x2="-30" y2="35" strokeWidth="3" />
        <line x1="30" y1="5" x2="30" y2="35" strokeWidth="3" />
      </g>
    )
  },
  {
    id: "bejeweled_halo",
    name: "Thanjavur Radiant Halo (Prabha)",
    tradition: "thanjavur",
    traditionName: "Thanjavur",
    category: "symbol",
    visualPrinciple: "Concentric gilded discs with faceted gem setting simulation.",
    traditionalContext: "Denotes divine aura and royal dignity around temple icons.",
    defaultScale: 38,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none">
        <circle cx="0" cy="0" r="22" strokeWidth="3" fill={c} fillOpacity="0.2" />
        <circle cx="0" cy="0" r="28" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="0" cy="0" r="34" strokeWidth="2" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <circle key={deg} cx={Math.cos((deg * Math.PI) / 180) * 28} cy={Math.sin((deg * Math.PI) / 180) * 28} r="2.5" fill={c} />
        ))}
      </g>
    )
  },

  // ==========================================
  // 7. SAURA MOTIFS
  // ==========================================
  {
    id: "saura_spirit_house",
    name: "Saura Spirit House (Anital)",
    tradition: "saura",
    traditionName: "Saura",
    category: "structural",
    visualPrinciple: "Enclosed shrine chamber housing stylized stick deities with pointed roofs.",
    traditionalContext: "Created by village shamans (Kudangs) to welcome ancestral spirits.",
    defaultScale: 40,
    render: (c) => (
      <g stroke={c} strokeWidth="2.2" fill="none" strokeLinecap="round">
        <polygon points="0,-40 -35,-15 35,-15" strokeWidth="2.8" fill={c} fillOpacity="0.2" />
        <rect x="-30" y="-15" width="60" height="50" strokeWidth="2.5" />
        <line x1="0" y1="-15" x2="0" y2="35" strokeWidth="1.8" strokeDasharray="3 3" />
        <circle cx="-12" cy="0" r="3" fill={c} />
        <circle cx="12" cy="0" r="3" fill={c} />
      </g>
    )
  },
  {
    id: "saura_ladder",
    name: "Saura Cosmic Ladder",
    tradition: "saura",
    traditionName: "Saura",
    category: "structural",
    visualPrinciple: "Vertical linear ladder connecting earthly realm with ancestral sky realm.",
    traditionalContext: "Guides spirits between realms during harvest and birth rituals.",
    defaultScale: 36,
    render: (c) => (
      <g stroke={c} strokeWidth="2.5" fill="none" strokeLinecap="round">
        <line x1="-12" y1="-45" x2="-12" y2="45" />
        <line x1="12" y1="-45" x2="12" y2="45" />
        {[-35, -20, -5, 10, 25, 40].map((y, i) => (
          <line key={i} x1="-12" y1={y} x2="12" y2={y} strokeWidth="2" />
        ))}
      </g>
    )
  },

  // ==========================================
  // 8. PHAD MOTIFS
  // ==========================================
  {
    id: "pabuji_steed",
    name: "Phad Epic Mare (Kesar Kalmi)",
    tradition: "phad",
    traditionName: "Phad",
    category: "figure",
    visualPrinciple: "Caparisoned heroic steed with sweeping reins and hierarchical scaling.",
    traditionalContext: "Mount of legendary Rajasthani folk hero Pabuji Rathore.",
    defaultScale: 42,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-28,10 C-38,-5 -32,-20 -15,-22 C0,-24 20,-18 28,-5 C32,10 25,22 12,20 Z" fill={c} fillOpacity="0.3" strokeWidth="2.8" />
        <path d="M20,-18 C26,-32 22,-42 14,-46 C10,-48 6,-45 8,-38" strokeWidth="2.5" />
        <path d="M-20,18 L-24,42" strokeWidth="2.5" />
        <path d="M12,20 L16,45" strokeWidth="2.5" />
      </g>
    )
  },

  // ==========================================
  // 9. PICHWAI MOTIFS
  // ==========================================
  {
    id: "sacred_kamadhenu_cow",
    name: "Pichwai Sacred Kamadhenu Cow",
    tradition: "pichwai",
    traditionName: "Pichwai",
    category: "figure",
    visualPrinciple: "Curved white bovine contour with decorative red handprints and beaded garland.",
    traditionalContext: "Revered cows of Vrindavan turning towards Shrinathji in adoration.",
    defaultScale: 42,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-30,5 C-40,-10 -30,-25 -10,-25 C15,-25 25,-10 32,5 C25,20 -10,20 -30,5 Z" fill={c} fillOpacity="0.25" strokeWidth="2.8" />
        <path d="M22,-10 C28,-25 24,-38 15,-42 C10,-44 8,-38 12,-28" strokeWidth="2.5" />
        <circle cx="20" cy="-32" r="2.5" fill={c} />
        <path d="M-22,12 L-26,38" strokeWidth="2.5" />
        <path d="M18,15 L22,40" strokeWidth="2.5" />
      </g>
    )
  },
  {
    id: "pichwai_lotus_pond",
    name: "Pichwai Stepped Lotus Pond",
    tradition: "pichwai",
    traditionName: "Pichwai",
    category: "botanical",
    visualPrinciple: "Stepped aquatic waves with blooming pink lotuses and floating pads.",
    traditionalContext: "Sacred Yamuna river waters surrounding Shrinathji temple sanctum.",
    defaultScale: 40,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none">
        <path d="M-40,20 Q-20,10 0,20 Q20,30 40,20" strokeWidth="2.5" />
        <path d="M-40,30 Q-20,20 0,30 Q20,40 40,30" strokeWidth="2" strokeDasharray="3 3" />
        <g transform="translate(0, 0)">
          <path d="M0,0 C6,-12 14,-14 0,-24 C-14,-14 -6,-12 0,0" fill={c} fillOpacity="0.4" strokeWidth="2" />
        </g>
      </g>
    )
  },

  // ==========================================
  // 10. KALIGHAT MOTIFS
  // ==========================================
  {
    id: "kalighat_cat_prawn",
    name: "Kalighat Cat with Prawn",
    tradition: "kalighat",
    traditionName: "Kalighat",
    category: "figure",
    visualPrinciple: "Sweeping bold black calligraphic contour with outer tonal shaded wash.",
    traditionalContext: "Satirical allegory of false asceticism and hypocritical babu culture.",
    defaultScale: 40,
    render: (c) => (
      <g stroke={c} strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-25,20 C-35,0 -25,-25 -5,-30 C15,-30 25,-15 28,10 C20,25 -10,25 -25,20 Z" strokeWidth="3.5" fill={c} fillOpacity="0.2" />
        <path d="M15,-20 C22,-35 15,-45 5,-48" strokeWidth="3" />
        <circle cx="12" cy="-30" r="3" fill={c} />
        <path d="M12,-10 C25,-5 35,-15 38,-2" strokeWidth="2.5" stroke="#b83324" />
      </g>
    )
  },

  // ==========================================
  // 11. CHERIYAL MOTIFS
  // ==========================================
  {
    id: "cheriyal_tree_scroll",
    name: "Cheriyal Narrative Tree Panel",
    tradition: "cheriyal",
    traditionName: "Cheriyal Scroll Painting",
    category: "structural",
    visualPrinciple: "Bold scarlet red panel border with theatrical folk storytelling figures.",
    traditionalContext: "Performed by traveling bards singing community epics in Telangana.",
    defaultScale: 42,
    render: (c) => (
      <g stroke={c} strokeWidth="2.5" fill="none">
        <rect x="-36" y="-36" width="72" height="72" strokeWidth="3" fill={c} fillOpacity="0.15" />
        <line x1="-30" y1="30" x2="30" y2="30" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="0" cy="-10" r="14" fill={c} fillOpacity="0.3" />
      </g>
    )
  },

  // ==========================================
  // 12. KANGRA / PAHARI MOTIFS
  // ==========================================
  {
    id: "willow_tree_breeze",
    name: "Pahari Weeping Willow",
    tradition: "kangra",
    traditionName: "Kangra / Pahari Miniature",
    category: "botanical",
    visualPrinciple: "Gracefully cascading delicate willow tendrils swaying in Himalayan breezes.",
    traditionalContext: "Sets the poetic mood (Rasa) for Radha and Krishna lyrical romances.",
    defaultScale: 42,
    render: (c) => (
      <g stroke={c} strokeWidth="1.8" fill="none" strokeLinecap="round">
        <line x1="0" y1="40" x2="0" y2="-10" strokeWidth="3" />
        {[-30, -18, -6, 6, 18, 30].map((x, i) => (
          <path key={i} d={`M0,-10 C${x * 0.5},-25 ${x},-5 ${x},25`} strokeWidth="1.5" />
        ))}
      </g>
    )
  },

  // ==========================================
  // 13. MUGHAL MOTIFS
  // ==========================================
  {
    id: "mughal_floral_hashiya",
    name: "Mughal Illuminated Margin Hashiya",
    tradition: "mughal",
    traditionName: "Mughal Miniature",
    category: "structural",
    visualPrinciple: "Hyper-refined botanical border with iris, poppy, and gold arabesques.",
    traditionalContext: "Illuminated imperial folio margins executed with ground lapis and shell gold.",
    defaultScale: 44,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none">
        <rect x="-42" y="-42" width="84" height="84" strokeWidth="2.8" />
        <rect x="-34" y="-34" width="68" height="68" strokeWidth="1.2" strokeDasharray="3 3" />
        {[-25, 0, 25].map((p, i) => (
          <circle key={i} cx={p} cy="-38" r="2.5" fill={c} />
        ))}
      </g>
    )
  },

  // ==========================================
  // 14. DECCANI MOTIFS
  // ==========================================
  {
    id: "deccani_cypress_tree",
    name: "Deccani Slender Cypress",
    tradition: "deccani",
    traditionName: "Deccani Miniature",
    category: "botanical",
    visualPrinciple: "Elongated, elegant vertical cypress spire wrapped in flowering creepers.",
    traditionalContext: "Symbol of eternity and mystical sultanate garden paradises in Golconda.",
    defaultScale: 44,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none">
        <path d="M0,45 C-12,20 -10,-20 0,-48 C10,-20 12,20 0,45 Z" fill={c} fillOpacity="0.3" strokeWidth="2.5" />
        <line x1="0" y1="45" x2="0" y2="-45" strokeWidth="1.5" strokeDasharray="2 3" />
      </g>
    )
  },

  // ==========================================
  // 15. KERALA MURAL MOTIFS
  // ==========================================
  {
    id: "kerala_dhyana_deity",
    name: "Kerala Mural Dhyana Shloka Icon",
    tradition: "kerala_mural",
    traditionName: "Kerala Mural Painting",
    category: "figure",
    visualPrinciple: "Sinuous Panchavarna curves with stippled volumetric shading and crown (Kireedam).",
    traditionalContext: "Temple sanctum frescoes painted strictly according to the Shilparatna treatise.",
    defaultScale: 42,
    render: (c) => (
      <g stroke={c} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="0,-48 -14,-25 14,-25" fill={c} strokeWidth="2.5" />
        <circle cx="0" cy="-12" r="12" fill={c} fillOpacity="0.25" strokeWidth="2.2" />
        <path d="M-8,-12 C-4,-8 4,-8 8,-12" strokeWidth="2" />
        <path d="M-15,10 C-22,25 22,25 15,10 Z" fill={c} fillOpacity="0.3" />
      </g>
    )
  },

  // ==========================================
  // 16. BHIL MOTIFS
  // ==========================================
  {
    id: "bhil_pithora_horse",
    name: "Bhil Sacred Pithora Horse",
    tradition: "bhil",
    traditionName: "Bhil Painting",
    category: "figure",
    visualPrinciple: "Dotted pointillist horse silhouette rendered with multicolour energy dots.",
    traditionalContext: "Painted on home walls to invite Baba Pithora's blessings for family health.",
    defaultScale: 42,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none">
        <path d="M-25,8 C-35,-8 -25,-22 -5,-22 C15,-22 25,-8 28,8 Z" strokeWidth="2.5" />
        {[-20, -10, 0, 10, 20].map((x, i) => (
          <React.Fragment key={i}>
            <circle cx={x} cy="-6" r="2.2" fill={c} />
            <circle cx={x} cy="2" r="2.2" fill={c} />
          </React.Fragment>
        ))}
        <line x1="-18" y1="8" x2="-22" y2="35" strokeWidth="2.5" />
        <line x1="18" y1="8" x2="22" y2="35" strokeWidth="2.5" />
      </g>
    )
  },

  // ==========================================
  // 17. ROGHAN MOTIFS
  // ==========================================
  {
    id: "roghan_tree_of_life",
    name: "Roghan Stylus Tree of Life",
    tradition: "roghan",
    traditionName: "Roghan Art",
    category: "botanical",
    visualPrinciple: "Symmetrical metallic castor-oil paste floral threads spun with a metal stylus.",
    traditionalContext: "Master bridal textile craft preserved by the Khatri family of Kutch.",
    defaultScale: 42,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none">
        <line x1="0" y1="40" x2="0" y2="-15" strokeWidth="3" />
        <path d="M0,15 C-25,10 -35,-15 -20,-30 C-10,-40 0,-25 0,-15" strokeWidth="2" fill={c} fillOpacity="0.2" />
        <path d="M0,15 C25,10 35,-15 20,-30 C10,-40 0,-25 0,-15" strokeWidth="2" fill={c} fillOpacity="0.2" />
      </g>
    )
  },

  // ==========================================
  // 18. CHAMBA RUMAL MOTIFS
  // ==========================================
  {
    id: "chamba_rasaleela_circle",
    name: "Chamba Rasaleela Dance Circle",
    tradition: "chamba_rumal",
    traditionName: "Chamba Rumal Painting",
    category: "figure",
    visualPrinciple: "Circular reversible double-satin embroidered Rasaleela ring.",
    traditionalContext: "Presented at royal Himalayan weddings as auspicious ceremonial cloths.",
    defaultScale: 40,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none">
        <circle cx="0" cy="0" r="32" strokeWidth="2.5" strokeDasharray="4 4" />
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <circle key={deg} cx={Math.cos((deg * Math.PI) / 180) * 32} cy={Math.sin((deg * Math.PI) / 180) * 32} r="4" fill={c} />
        ))}
      </g>
    )
  },

  // ==========================================
  // 19. SANJHI MOTIFS
  // ==========================================
  {
    id: "sanjhi_lotus_mandala",
    name: "Sanjhi Stencil Filigree Mandala",
    tradition: "sanjhi",
    traditionName: "Sanjhi Art",
    category: "symbol",
    visualPrinciple: "Handcut negative-space paper filigree lattice created with curved scissors.",
    traditionalContext: "Created in Braj Vaishnava temples to float dry natural pigments over water.",
    defaultScale: 42,
    render: (c) => (
      <g stroke={c} strokeWidth="1.8" fill="none">
        <circle cx="0" cy="0" r="35" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="22" strokeWidth="1.5" strokeDasharray="3 3" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <path key={deg} d="M0,0 L10,-22 L0,-35 L-10,-22 Z" transform={`rotate(${deg})`} fill={c} fillOpacity="0.2" />
        ))}
      </g>
    )
  },

  // ==========================================
  // 20. TIKULI MOTIFS
  // ==========================================
  {
    id: "tikuli_circular_mandala",
    name: "Tikuli 22k Gold Enamel Roundel",
    tradition: "tikuli",
    traditionName: "Tikuli Art",
    category: "symbol",
    visualPrinciple: "Intricate circular enamel disc detailed with gold leaf (Varq) and lacquer finish.",
    traditionalContext: "Evolved from ancient Magadha royal forehead bindis into fine miniature art.",
    defaultScale: 40,
    render: (c) => (
      <g stroke={c} strokeWidth="2" fill="none">
        <circle cx="0" cy="0" r="36" strokeWidth="3" fill={c} fillOpacity="0.2" />
        <circle cx="0" cy="0" r="26" strokeWidth="1.5" strokeDasharray="2 3" />
        <circle cx="0" cy="0" r="14" fill={c} />
      </g>
    )
  }
];

export const getMotifById = (id) => MOTIF_STUDIES.find((m) => m.id === id);
export const getMotifsByTradition = (traditionId) => MOTIF_STUDIES.filter((m) => m.tradition === traditionId);
