import React, { useState } from "react";
import { ShieldCheck, CheckSquare, Square, Award, ArrowRight } from "lucide-react";

export default function CulturalChecklistModal({ isOpen, onClose, onProceedToExhibition }) {
  const [checks, setChecks] = useState({
    sourcesIdentified: true,
    historicalContext: true,
    digitalDistinction: true,
    sacredFlagged: true,
    contemporaryLiving: true,
    sourcesRecorded: true
  });

  if (!isOpen) return null;

  const toggle = (key) => {
    setChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allChecked = Object.values(checks).every(Boolean);

  const ITEMS = [
    {
      key: "sourcesIdentified",
      title: "Source Traditions Accurately Identified",
      desc: "Both regional painting styles and their geographical origin centers are explicitly documented."
    },
    {
      key: "historicalContext",
      title: "Historical & Artisan Lineage Acknowledged",
      desc: "The socio-cultural background of hereditary artisan guilds or indigenous communities is recognized."
    },
    {
      key: "digitalDistinction",
      title: "Digital Study Distinguished from Authentic Practice",
      desc: "The artwork is clearly labeled as an original educational vector study, not an authentic traditional ritual artifact."
    },
    {
      key: "sacredFlagged",
      title: "Sacred & Ritual Imagery Contextualized",
      desc: "Deities, spirit houses (Iditals), and auspicious emblems are treated respectfully and explained in the Artist Statement."
    },
    {
      key: "contemporaryLiving",
      title: "Contemporary Community Practice Recognized",
      desc: "Traditions are treated as living, evolving contemporary languages rather than static museum fossils."
    },
    {
      key: "sourcesRecorded",
      title: "Institutional Archives & Sources Cited",
      desc: "Museum collections, GI registry tags, and scholarly monographs are recorded in the final dossier."
    }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card cultural-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top">
          <div className="modal-header-title">
            <ShieldCheck size={14} color="#617555" />
            <span>CULTURAL RESPONSIBILITY PROTOCOL</span>
          </div>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <h2>
          Cultural Context <em>Verification.</em>
        </h2>
        <p className="modal-subtext">
          Before submitting or publicly exhibiting your synthesis artwork, verify compliance with digital humanities ethical standards.
        </p>

        <div className="checklist-container">
          {ITEMS.map((item) => {
            const isChecked = checks[item.key];
            return (
              <div
                key={item.key}
                className={`checklist-item ${isChecked ? "checked" : ""}`}
                onClick={() => toggle(item.key)}
              >
                <div className="check-box-icon">
                  {isChecked ? <CheckSquare size={16} color="#c9a96c" /> : <Square size={16} color="#665f56" />}
                </div>
                <div className="check-item-text">
                  <b>{item.title}</b>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="modal-actions">
          <button
            className={`gold-btn ${!allChecked ? "disabled-btn" : ""}`}
            disabled={!allChecked}
            onClick={() => {
              onClose();
              if (onProceedToExhibition) onProceedToExhibition();
            }}
          >
            <ShieldCheck size={14} /> VERIFIED · ENTER EXHIBITION <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
