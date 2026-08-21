import React, { useState } from "react";
import { Map, MapPin, Compass, Sparkles, ArrowRight, BookOpen, Layers, Check } from "lucide-react";
import { STYLES } from "../data/content";

export default function Atlas({ activeStyle, onSelectTradition, onJumpToAtelier }) {
  const [selectedId, setSelectedId] = useState(activeStyle?.id || "warli");

  // Geographic coordinates mapped to SVG viewport (800 x 650)
  const PIN_POSITIONS = {
    warli: { x: 310, y: 340, state: "Maharashtra", coords: "19.99° N, 72.82° E" },
    kalamkari: { x: 430, y: 450, state: "Andhra Pradesh", coords: "13.75° N, 79.70° E" },
    madhubani: { x: 490, y: 220, state: "Bihar (Mithila)", coords: "26.35° N, 86.07° E" },
    gond: { x: 390, y: 330, state: "Madhya Pradesh", coords: "22.97° N, 78.65° E" },
    pattachitra: { x: 500, y: 340, state: "Odisha (Raghurajpur)", coords: "19.81° N, 85.83° E" },
    thanjavur: { x: 410, y: 520, state: "Tamil Nadu", coords: "10.78° N, 79.13° E" },
    saura: { x: 460, y: 370, state: "Southern Odisha", coords: "19.08° N, 83.82° E" },
    phad: { x: 310, y: 240, state: "Rajasthan (Bhilwara)", coords: "25.35° N, 74.63° E" }
  };

  const currentDisplay = STYLES.find((s) => s.id === selectedId) || activeStyle || STYLES[0];
  const pinMeta = PIN_POSITIONS[currentDisplay.id] || { state: "India", coords: "20.59° N, 78.96° E" };

  const handlePinClick = (style) => {
    setSelectedId(style.id);
    if (onSelectTradition) onSelectTradition(style);
  };

  return (
    <section className="atlas-section" id="atlas">
      {/* Section Header */}
      <div className="section-head">
        <div>
          <div className="kicker">
            <Map size={13} /> GEOGRAPHIC LINEAGE & REGIONAL ATLAS
          </div>
          <h2>
            Geography of<br />
            <em>Visual Traditions.</em>
          </h2>
        </div>
        <p>
          Indian painting traditions evolved in direct response to local geology, river systems, temple patronages, and tribal forest ecologies. Select any tradition pin or chip to inspect its lineage.
        </p>
      </div>

      {/* Tradition Selector Chips Bar */}
      <div className="atlas-chips-bar">
        {STYLES.map((s) => {
          const isSelected = s.id === currentDisplay.id;
          return (
            <button
              key={s.id}
              className={`atlas-chip-btn ${isSelected ? "active" : ""}`}
              onClick={() => handlePinClick(s)}
            >
              <span className="chip-dot" style={{ background: s.colors[1] || "#b38938" }} />
              <b>{s.name}</b>
              <small>{PIN_POSITIONS[s.id]?.state}</small>
            </button>
          );
        })}
      </div>

      <div className="atlas-layout">
        {/* Interactive SVG Cultural Map */}
        <div className="map-viewport">
          <div className="map-badge">
            <Compass size={12} />
            <span>INTERACTIVE CULTURAL TOPOGRAPHY · INDIA</span>
          </div>

          <svg viewBox="0 0 800 650" className="india-cultural-map">
            <defs>
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fdfbf7" />
                <stop offset="100%" stopColor="#f4eee1" />
              </linearGradient>
              <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e8e0d0" strokeWidth="0.8" />
              </pattern>
            </defs>

            {/* Background Grid */}
            <rect width="800" height="650" fill="url(#gridPattern)" />

            {/* Detailed India Geographic Outline */}
            <path
              d="M 330 65
                 C 350 50, 390 50, 410 75
                 L 435 95 L 455 125 L 475 145 L 530 160 L 590 165 L 620 190 L 600 220 L 550 220 L 520 235
                 L 510 270 L 550 300 L 530 350 L 510 390 L 490 440 L 480 490 L 440 550 L 420 595 L 400 580
                 L 380 540 L 350 490 L 300 460 L 270 420 L 250 380 L 265 340 L 240 300 L 260 250 L 250 200
                 L 285 170 L 305 130 Z"
              fill="url(#mapGradient)"
              stroke="#cfa859"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Major River Arteries (Ganga, Narmada, Godavari, Krishna, Kaveri) */}
            <path
              d="M 370 140 Q 430 200 500 220 T 540 240
                 M 280 340 Q 360 330 460 340
                 M 330 380 Q 400 400 480 420
                 M 350 450 Q 400 460 460 480
                 M 370 510 Q 410 520 440 550"
              fill="none"
              stroke="#6b9ebd"
              strokeWidth="1.5"
              strokeOpacity="0.6"
              strokeLinecap="round"
            />

            {/* Cultural Trade & Diffusion Corridors */}
            <path
              d="M 310 240 L 390 330 L 490 220
                 M 310 340 L 390 330 L 500 340 L 430 450 L 410 520
                 M 460 370 L 500 340"
              fill="none"
              stroke="#b38938"
              strokeOpacity="0.45"
              strokeDasharray="5 7"
              strokeWidth="1.8"
            />

            {/* Tradition Hotspot Pins (Glitch-Free Solid Hit Areas) */}
            {STYLES.map((s) => {
              const pos = PIN_POSITIONS[s.id] || { x: 400, y: 300 };
              const isSelected = currentDisplay.id === s.id;

              return (
                <g
                  key={s.id}
                  transform={`translate(${pos.x}, ${pos.y})`}
                  className={`map-pin-anchor ${isSelected ? "selected" : ""}`}
                  onClick={() => handlePinClick(s)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Invisible Solid Hit Target */}
                  <circle r="24" fill="transparent" />

                  {/* Pulsing Selection Halo */}
                  {isSelected && (
                    <>
                      <circle r="18" fill="none" stroke="#b38938" strokeWidth="1.5" opacity="0.4" />
                      <circle r="12" fill="#fbf5e6" stroke="#b38938" strokeWidth="2" />
                    </>
                  )}

                  {/* Pin Dot */}
                  <circle
                    r={isSelected ? "7" : "5.5"}
                    fill={isSelected ? "#b38938" : s.colors[1] || "#2b2014"}
                    stroke="#ffffff"
                    strokeWidth="2"
                  />

                  {/* Pin Label Card */}
                  <rect
                    x="12"
                    y="-10"
                    width={s.name.length * 7.5 + 16}
                    height="20"
                    rx="4"
                    fill={isSelected ? "#b38938" : "#ffffff"}
                    stroke={isSelected ? "#8c6720" : "#d8cfbf"}
                    strokeWidth="1"
                  />

                  <text
                    x="20"
                    y="4"
                    fill={isSelected ? "#ffffff" : "#1c1814"}
                    fontSize="10"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                    fontWeight={isSelected ? "bold" : "600"}
                  >
                    {s.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Center Info Sidebar */}
        <aside className="atlas-info-card">
          <div className="info-head">
            <span className="source-kicker">SELECTED TRADITION CENTER</span>
            <h3>{currentDisplay.name}</h3>
            <div className="info-region">
              {pinMeta.state} · <b>{pinMeta.coords}</b>
            </div>
          </div>

          <div className="info-section">
            <label>HEREDITARY GUILD / INDIGENOUS COMMUNITY</label>
            <p>
              <b>{currentDisplay.community}</b> · {currentDisplay.period}
            </p>
          </div>

          <div className="info-section">
            <label>STRUCTURAL & VISUAL GRAMMAR</label>
            <p>{currentDisplay.grammar}</p>
          </div>

          <div className="info-section">
            <label>INDIGENOUS MINERAL & VEGETAL MATERIALS</label>
            <div className="material-tags">
              {currentDisplay.materials.map((m, idx) => (
                <span key={idx} className="mat-tag">
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="info-section">
            <label>HISTORICAL DOCUMENTATION & SCHOLARLY CITATION</label>
            <small className="citation-text">
              {currentDisplay.sources[0]?.name} ({currentDisplay.sources[0]?.ref})
            </small>
          </div>

          <button className="gold-btn set-primary-btn" onClick={onJumpToAtelier}>
            LOAD {currentDisplay.name.toUpperCase()} INTO ATELIER <ArrowRight size={13} />
          </button>
        </aside>
      </div>
    </section>
  );
}
