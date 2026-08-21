import React, { useState } from "react";
import {
  Maximize2,
  Minimize2,
  Sparkles,
  Volume2,
  VolumeX,
  Download,
  Info,
  Layers,
  ArrowLeft,
  Share2,
  ShieldCheck
} from "lucide-react";
import { SoundEngine } from "../utils/audio";
import { exportArtworkAsPNG } from "../utils/exportHelper";

export default function MuseumExhibition({
  isOpen,
  onClose,
  svgElement,
  metadata = {},
  styleA,
  styleB,
  concept,
  groundId,
  artistName = "Pranav Verma",
  onOpenDossier
}) {
  const [audioActive, setAudioActive] = useState(false);
  const [hotspotsActive, setHotspotsActive] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);

  if (!isOpen) return null;

  const toggleSound = () => {
    const next = SoundEngine.toggle();
    setAudioActive(next);
  };

  const HOTSPOTS = [
    {
      id: 1,
      top: "32%",
      left: "30%",
      title: `${styleA.name} Structural Grammar`,
      category: "Source Tradition",
      desc: `Direct lineage from ${styleA.community}. Establishes geometric division of the visual field without single-point perspective.`
    },
    {
      id: 2,
      top: "28%",
      left: "72%",
      title: `${styleB.name} Botanical Foliage`,
      category: "Transformative Motifs",
      desc: `Derived from ${styleB.community}. Freehand calligraphic scrolling vines transformed into rhythmic border framing.`
    },
    {
      id: 3,
      top: "52%",
      left: "50%",
      title: "Student Creative Synthesis",
      category: "Synthesis Centerpiece",
      desc: `Harmonizes ${concept} by allowing ${styleB.name} delicate motifs to interlock with ${styleA.name} iconic figures.`
    },
    {
      id: 4,
      top: "84%",
      left: "18%",
      title: "Support & Pigment Ontology",
      category: "Material Ground",
      desc: `Simulated texture responding to traditional pigment behavior and natural binder chemistry.`
    }
  ];

  return (
    <div className="museum-exhibition-overlay">
      {/* Top Floating Gallery Bar */}
      <header className="exhibition-header">
        <button className="exit-exhibition-btn" onClick={onClose}>
          <ArrowLeft size={14} /> RETURN TO ATELIER
        </button>

        <div className="gallery-title-badge">
          <Sparkles size={13} color="#c9a96c" />
          <span>NATIONAL GALLERY OF SYNTHETIC ARTS · PAVILION 01</span>
        </div>

        <div className="exhibition-actions">
          <button
            className={`gallery-tool-btn ${audioActive ? "on" : ""}`}
            onClick={toggleSound}
            title="Toggle Ambient Museum Soundscape"
          >
            {audioActive ? <Volume2 size={14} /> : <VolumeX size={14} />}
            <span>{audioActive ? "SOUND: ON" : "SOUND: OFF"}</span>
          </button>

          <button
            className={`gallery-tool-btn ${hotspotsActive ? "on" : ""}`}
            onClick={() => {
              setHotspotsActive(!hotspotsActive);
              setActiveHotspot(null);
            }}
          >
            <Info size={14} />
            <span>{hotspotsActive ? "HIDE HOTSPOTS" : "EXPLORE WORK"}</span>
          </button>

          <button
            className="gold-btn export-plaque-btn"
            onClick={() =>
              exportArtworkAsPNG(svgElement, {
                title: metadata.title || "COMMUNITY SYNTHESIS",
                styleA: styleA.name,
                styleB: styleB.name,
                concept,
                artist: artistName,
                year: "2026"
              })
            }
          >
            <Download size={13} /> EXPORT FRAMED (PNG)
          </button>
        </div>
      </header>

      {/* Main Exhibition Hall */}
      <main className="gallery-hall">
        {/* Spotlight Effect */}
        <div className="gallery-spotlight" />

        {/* Framed Artwork Display */}
        <div className="framed-artwork-container">
          <div className="luxury-wooden-frame">
            <div className="museum-matte-linen">
              {/* Mounted Artwork View */}
              <div className="mounted-svg-wrapper">
                {svgElement ? (
                  <div
                    className="cloned-artwork-svg"
                    dangerouslySetInnerHTML={{ __html: svgElement.outerHTML }}
                  />
                ) : (
                  <div className="artwork-placeholder">Artwork Render</div>
                )}

                {/* Hotspot Markers Overlay */}
                {hotspotsActive &&
                  HOTSPOTS.map((hp) => (
                    <button
                      key={hp.id}
                      className={`gallery-hotspot-pin ${activeHotspot?.id === hp.id ? "active" : ""}`}
                      style={{ top: hp.top, left: hp.left }}
                      onClick={() => setActiveHotspot(hp)}
                    >
                      <span className="pin-pulse" />
                      <span className="pin-num">{hp.id}</span>
                    </button>
                  ))}
              </div>
            </div>

            {/* Brass Engraved Plaque */}
            <div className="brass-engraved-plaque">
              <div className="plaque-screw top-left" />
              <div className="plaque-screw top-right" />
              <div className="plaque-screw bottom-left" />
              <div className="plaque-screw bottom-right" />

              <h4>{metadata.title || "COMMUNITY / 2026"}</h4>
              <p className="plaque-lineage">
                {styleA.name.toUpperCase()} × {styleB.name.toUpperCase()}
              </p>
              <p className="plaque-sub">
                Digital mixed-media study · Artist: <b>{artistName}</b>
              </p>
              <small className="plaque-mat">
                Digital interpretation of {styleA.materials[0]} and {styleB.materials[0]} vocabulary
              </small>
            </div>
          </div>
        </div>

        {/* Hotspot Detail Card Popup */}
        {activeHotspot && (
          <aside className="hotspot-detail-card">
            <div className="detail-card-head">
              <span className="detail-tag">HOTSPOT 0{activeHotspot.id} · {activeHotspot.category}</span>
              <button className="detail-close" onClick={() => setActiveHotspot(null)}>
                ✕
              </button>
            </div>
            <h3>{activeHotspot.title}</h3>
            <p>{activeHotspot.desc}</p>
          </aside>
        )}
      </main>

      {/* Exhibition Footer */}
      <footer className="exhibition-footer">
        <span>EXHIBITION REF: SYN-2026-CO1</span>
        <span>ACADEMIC CURATION: PRANAV VERMA</span>
        <button className="view-dossier-link" onClick={onOpenDossier}>
          OPEN COMPLETE EXHIBITION DOSSIER →
        </button>
      </footer>
    </div>
  );
}
