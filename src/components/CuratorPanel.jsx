import React from "react";
import {
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  Compass,
  Activity,
  Award,
  Eye
} from "lucide-react";
import { generateCuratorCritique } from "../utils/engine";

export default function CuratorPanel({
  styleA,
  styleB,
  concept,
  composition,
  score,
  elements = [],
  strokes = []
}) {
  const overallIndex = Math.round(
    ((score.balance || 75) + (score.coherence || 75) + (score.diversity || 75) + (score.compatibility || 80)) / 4
  );

  const { tag: critiqueTag, critique: critiqueText } = generateCuratorCritique(
    elements,
    strokes,
    styleA,
    styleB,
    concept,
    composition,
    score
  );

  return (
    <aside className="curator-panel">
      <div className="dock-head">
        <div className="dock-title">
          <Sparkles size={13} />
          <span>CURATORIAL DIAGNOSTICS</span>
        </div>
        <span className="live-telemetry-badge">LIVE EVALUATION</span>
      </div>

      {/* Main Score Index */}
      <div className="curator-main-metric">
        <span className="metric-kicker">SYNTHESIS COMPATIBILITY INDEX</span>
        <div className="index-display">
          <b>{overallIndex}</b>
          <small>/ 100</small>
        </div>
        <div className="overall-gauge-bar">
          <i style={{ width: `${overallIndex}%` }} />
        </div>
      </div>

      {/* Telemetry Sub-Gauges */}
      <div className="telemetry-grid">
        <div className="telemetry-item">
          <div className="item-head">
            <span>SOURCE BALANCE</span>
            <b>{score.balance}%</b>
          </div>
          <div className="sub-gauge">
            <i style={{ width: `${score.balance}%` }} />
          </div>
        </div>

        <div className="telemetry-item">
          <div className="item-head">
            <span>GRAMMAR DIVERSITY</span>
            <b>{score.diversity}%</b>
          </div>
          <div className="sub-gauge">
            <i style={{ width: `${score.diversity}%` }} />
          </div>
        </div>

        <div className="telemetry-item">
          <div className="item-head">
            <span>STRUCTURAL COHERENCE</span>
            <b>{score.coherence}%</b>
          </div>
          <div className="sub-gauge">
            <i style={{ width: `${score.coherence}%` }} />
          </div>
        </div>

        <div className="telemetry-item">
          <div className="item-head">
            <span>MATERIAL HARMONY</span>
            <b>{score.compatibility}%</b>
          </div>
          <div className="sub-gauge">
            <i style={{ width: `${score.compatibility}%` }} />
          </div>
        </div>
      </div>

      {/* CURATOR'S EYE CRITIQUE */}
      <article className="curators-eye-card">
        <div className="eye-card-head">
          <Eye size={13} color="#c9a96c" />
          <strong>CURATOR&apos;S EYE CRITIQUE</strong>
          <span className="critique-tag">{critiqueTag}</span>
        </div>
        <p>{critiqueText}</p>
      </article>

      {/* Conceptual Framing */}
      <article className="intent-card">
        <div className="intent-head">
          <Compass size={13} />
          <strong>CONCEPTUAL ARCHITECTURE</strong>
        </div>
        <h3>{concept}</h3>
        <p>
          Organized around <b>{composition}</b>, synthesizing {styleA.name} structural logic with {styleB.name} visual vocabulary.
        </p>
      </article>

      {/* Cultural Responsibility Safeguard */}
      <article className="cultural-safeguard-card">
        <div className="safeguard-head">
          <ShieldCheck size={14} color="#617555" />
          <strong>CULTURAL PRACTICE SAFEGUARD</strong>
        </div>
        <p>
          Attribution is explicitly maintained. This work is evaluated as a scholarly student transformation of documented visual principles, respecting {styleA.community} and {styleB.community} living heritage.
        </p>
      </article>
    </aside>
  );
}
