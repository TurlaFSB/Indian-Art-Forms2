import React, { useState } from "react";
import { Compass, Sparkles, Check, ArrowRight } from "lucide-react";

export default function RationaleModal({
  isOpen,
  onClose,
  styleA,
  styleB,
  rationale,
  setRationale
}) {
  if (!isOpen) return null;

  const handleChange = (field, val) => {
    setRationale((prev) => ({ ...prev, [field]: val }));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card rationale-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top">
          <div className="modal-header-title">
            <Compass size={14} color="#c9a96c" />
            <span>DESIGN RATIONALE & INTENT</span>
          </div>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <h2>
          Why This <em>Fusion?</em>
        </h2>
        <p className="modal-subtext">
          Before creating on the canvas, articulate your artistic intent. Your answers will be integrated into the Final Exhibition Dossier and academic Viva defense record.
        </p>

        <div className="rationale-form">
          <div className="form-group">
            <label>
              1. I SELECTED <b>{styleA.name.toUpperCase()}</b> + <b>{styleB.name.toUpperCase()}</b> BECAUSE:
            </label>
            <textarea
              rows={3}
              value={
                rationale.whySelected ||
                `I wanted to explore the dynamic contrast between ${styleA.name}'s economical geometric human forms and ${styleB.name}'s elaborate botanical and calligraphic vine systems.`
              }
              onChange={(e) => handleChange("whySelected", e.target.value)}
              placeholder="Explain the conceptual or visual reason for pairing these two traditions..."
            />
          </div>

          <div className="form-group">
            <label>2. THE CENTRAL THEMATIC / VISUAL QUESTION I WANT TO INVESTIGATE:</label>
            <textarea
              rows={3}
              value={
                rationale.investigation ||
                `How can tribal rhythmic circular movement inhabit a structured textile ground without losing its communal spontaneity?`
              }
              onChange={(e) => handleChange("investigation", e.target.value)}
              placeholder="What specific artistic or cultural problem are you testing?"
            />
          </div>

          <div className="form-group">
            <label>3. MY INTENDED SYNTHESIS STRATEGY:</label>
            <textarea
              rows={3}
              value={
                rationale.strategy ||
                `Use ${styleA.name}'s geometric framework for spatial division, while transforming ${styleB.name}'s foliage motifs into internal textural and ornamental fills.`
              }
              onChange={(e) => handleChange("strategy", e.target.value)}
              placeholder="Which elements will provide structure, and which will provide texture/detail?"
            />
          </div>
        </div>

        <div className="modal-actions">
          <button className="gold-btn" onClick={onClose}>
            <Check size={13} /> CONFIRM RATIONALE & ENTER ATELIER
          </button>
        </div>
      </div>
    </div>
  );
}
