import React, { useState, useEffect } from "react";
import { History, Play, Pause, ChevronLeft, ChevronRight, Compass } from "lucide-react";

export const ERAS = [
  {
    name: "Origins & Prehistoric Mark-Making",
    time: "12,000 BCE – 1500 BCE",
    desc: "Bhimbetka rock shelters and early indigenous earth-pigment mark-making. Earthen walls, geometric stick figures, and seasonal ritual enclosures.",
    activeTraditions: ["Warli", "Saura"]
  },
  {
    name: "Ancient Murals & Canonical Texts",
    time: "600 BCE – 600 CE",
    desc: "Ajanta and Bagh Buddhist/classical murals, Chitrasutra iconographic canons, and early continuous narrative sequences.",
    activeTraditions: ["Mithila / Madhubani", "Early Temple Guilds"]
  },
  {
    name: "Medieval Temple & Scroll Guilds",
    time: "600 – 1300 CE",
    desc: "Jagannath temple rituals, Tala-patra palm leaf manuscripts, and early South Indian Chola temple textile traditions.",
    activeTraditions: ["Pattachitra", "Kalamkari", "Mithila"]
  },
  {
    name: "Early Modern Courts & Bardic Epics",
    time: "1300 – 1800 CE",
    desc: "Vijayanagara and Nayaka courtly patronage, Rajasthani mobile Bhopa performance scrolls, and Nayaka/Maratha Thanjavur gold gesso panels.",
    activeTraditions: ["Kalamkari", "Thanjavur", "Phad"]
  },
  {
    name: "Colonial Transformations & Print",
    time: "1800 – 1947 CE",
    desc: "Shifts in artisan patronage, introduction of paper and commercial pigments, Kalighat urban scrolls, and preservation of domestic mural practices.",
    activeTraditions: ["Warli", "Pattachitra", "Phad"]
  },
  {
    name: "Post-Independence Modern Art",
    time: "1947 – 2000 CE",
    desc: "Re-discovery of Mithila wall painting in 1968, Jivya Soma Mashe pioneering contemporary Warli on canvas, and Jangarh Singh Shyam founding Gond modernism (Bharat Bhavan 1981).",
    activeTraditions: ["Mithila", "Warli", "Gond"]
  },
  {
    name: "Contemporary Living Digital Ateliers",
    time: "2000 – 2026 CE",
    desc: "GI tag registrations, international museum retrospectives, and contemporary digital humanities synthesis exploring cross-traditional dialogues.",
    activeTraditions: ["All 8 Living Traditions"]
  }
];

export default function Timeline({ onSelectEra }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveIdx((idx) => {
          const next = (idx + 1) % ERAS.length;
          if (onSelectEra) onSelectEra(ERAS[next]);
          return next;
        });
      }, 3200);
    }
    return () => clearInterval(timer);
  }, [isPlaying, onSelectEra]);

  const currentEra = ERAS[activeIdx];

  const handleSelect = (idx) => {
    setActiveIdx(idx);
    if (onSelectEra) onSelectEra(ERAS[idx]);
  };

  return (
    <section className="timeline-section" id="timeline">
      <div className="section-head">
        <div>
          <div className="kicker">
            <History size={13} /> CHRONO-SPATIAL TIMELINE
          </div>
          <h2>
            Lineage Across<br />
            <em>Millennia.</em>
          </h2>
        </div>
        <div className="timeline-play-toggle">
          <button
            className={`timeline-play-btn ${isPlaying ? "playing" : ""}`}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={13} /> : <Play size={13} />}
            <span>{isPlaying ? "PAUSE LINEAGE" : "AUTO-PLAY LINEAGE"}</span>
          </button>
        </div>
      </div>

      {/* Active Era Spotlight Card */}
      <div className="era-spotlight-card">
        <div className="era-meta-bar">
          <span className="era-period-tag">{currentEra.time}</span>
          <span className="era-index">
            EPOCH 0{activeIdx + 1} / 0{ERAS.length}
          </span>
        </div>
        <h3>{currentEra.name}</h3>
        <p>{currentEra.desc}</p>
        <div className="era-traditions-row">
          <span>ACTIVE TRADITIONS:</span>
          {currentEra.activeTraditions.map((t, i) => (
            <span key={i} className="tradition-pill">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Timeline Steps Track */}
      <div className="timeline-track">
        {ERAS.map((era, idx) => (
          <button
            key={idx}
            className={`timeline-step-btn ${idx === activeIdx ? "active" : ""}`}
            onClick={() => handleSelect(idx)}
          >
            <span className="step-dot" />
            <span className="step-time">{era.time.split("–")[0]}</span>
            <span className="step-title">{era.name.split(" ")[0]}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
