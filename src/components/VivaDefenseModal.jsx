import React, { useState } from "react";
import {
  ShieldAlert,
  Award,
  BookOpen,
  CheckCircle2,
  Printer,
  Sparkles,
  HelpCircle
} from "lucide-react";
import { VIVA_QUESTIONS_TEMPLATE } from "../data/content";

export default function VivaDefenseModal({
  isOpen,
  onClose,
  styleA,
  styleB,
  concept,
  composition,
  groundId,
  artistName = "Student Artist",
  vivaAnswers = {},
  setVivaAnswers
}) {
  if (!isOpen) return null;

  const handleAnswerChange = (qId, text) => {
    setVivaAnswers((prev) => ({ ...prev, [qId]: text }));
  };

  const getDefaultAnswer = (qId) => {
    switch (qId) {
      case "tradition_selection":
        return `I selected ${styleA.name} and ${styleB.name} to explore the intersection of ${styleA.name}'s minimal geometric human rhythm with ${styleB.name}'s flowing botanical complexity around the theme of ${concept}.`;
      case "visual_transformation":
        return `From ${styleA.name}, I extracted the dual-triangle structural geometry for spatial layout. From ${styleB.name}, I transformed the calligraphic scrolling vines into an interlacing border and focal backdrop.`;
      case "material_logic":
        return `I selected the ${groundId} support because its porous texture and pigment absorption behavior naturally ground the mineral and plant color palette.`;
      case "synthesis_vs_collage":
        return `Rather than splitting the canvas into separate halves, the motifs actively modify each other: ${styleA.name} figures inhabit the botanical fields of ${styleB.name} within a unified ${composition} framework.`;
      case "cultural_context":
        return `I consulted archives from the ${styleA.sources[0]?.name || "National Crafts Museum"} and ensured that sacred/ritual motifs were treated with pedagogical context rather than commercial decoration.`;
      case "challenges_solutions":
        return `Balancing the high-density horror-vacui of ${styleB.name} with the open negative space of ${styleA.name} was challenging. I resolved this by using scale modulation and opacity layering.`;
      case "future_iteration":
        return `In Version 2, I would like to experiment further with freehand kalam brush pressure and multi-layered mordant resist dyeing simulations.`;
      default:
        return "";
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card viva-defense-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-top">
          <div className="modal-header-title">
            <Award size={14} color="#c9a96c" />
            <span>ACADEMIC VIVA & PRESENTATION DEFENSE</span>
          </div>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <h2>
          Defend Your <em>Synthesis.</em>
        </h2>
        <p className="modal-subtext">
          Prepare for your assignment defense, jury review, or oral presentation. These dynamic questions are generated directly from your chosen traditions, materials, and composition.
        </p>

        {/* Dynamic Questions List */}
        <div className="viva-questions-list">
          {VIVA_QUESTIONS_TEMPLATE.map((item, idx) => {
            const currentAns = vivaAnswers[item.id] !== undefined ? vivaAnswers[item.id] : getDefaultAnswer(item.id);
            return (
              <div key={item.id} className="viva-item">
                <div className="viva-q-head">
                  <span className="viva-num">0{idx + 1}</span>
                  <h4>{item.prompt}</h4>
                </div>
                <small className="viva-guidance">
                  <HelpCircle size={10} /> {item.guidance}
                </small>
                <textarea
                  rows={3}
                  value={currentAns}
                  onChange={(e) => handleAnswerChange(item.id, e.target.value)}
                  placeholder="Record your oral defense talking points..."
                />
              </div>
            );
          })}
        </div>

        {/* Modal Actions */}
        <div className="modal-actions viva-actions">
          <button className="outline-btn" onClick={() => window.print()}>
            <Printer size={13} /> PRINT DEFENSE SHEET
          </button>
          <button className="gold-btn" onClick={onClose}>
            <CheckCircle2 size={13} /> SAVE DEFENSE TALKING POINTS
          </button>
        </div>
      </div>
    </div>
  );
}
