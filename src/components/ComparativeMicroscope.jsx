import React, { useState } from "react";
import {
  Layers,
  Sparkles,
  Search,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import { FUSION_MATRIX_DIMENSIONS } from "../data/content";

const COMPARISON_DIMENSIONS = [
  { id: "form", name: "FORM & GEOMETRY" },
  { id: "line", name: "LINE & CONTOUR" },
  { id: "colour", name: "COLOUR & PIGMENT" },
  { id: "material", name: "MATERIAL SUPPORT" },
  { id: "space", name: "SPATIAL GRAMMAR" },
  { id: "iconography", name: "ICONOGRAPHY" },
  { id: "patronage", name: "PATRONAGE & GUILD" },
  { id: "ritual", name: "RITUAL & SOCIAL ROLE" },
  { id: "contemporary", name: "CONTEMPORARY STATUS" }
];

export default function ComparativeMicroscope({ styleA, styleB, onSelectStyleA, onSelectStyleB, allStyles = [] }) {
  const [activeDim, setActiveDim] = useState("form");

  // Detailed comparative dimension data
  const getDimensionComparison = (dimId, style) => {
    switch (dimId) {
      case "form":
        return style.grammar.split(",")[0] || "Distinct formal geometry";
      case "line":
        if (style.id === "warli") return "Economical stick lines and joined apex triangles.";
        if (style.id === "kalamkari") return "Freehand calligraphic contour with modulated ink thickness.";
        if (style.id === "madhubani") return "Double contour lines with ultra-fine Kachni hatching.";
        if (style.id === "gond") return "Sweeping silhouettes filled with rhythmic Bindiya dots.";
        if (style.id === "pattachitra") return "Strict iconographic profile lines and Meenakshi eyes.";
        if (style.id === "thanjavur") return "Raised three-dimensional gesso relief and embossed contours.";
        if (style.id === "saura") return "Trapezoidal elongated stick torsos and stepped ladders.";
        return "Continuous bold narrative contour with hierarchical scaling.";
      case "colour":
        return `Palette includes: ${style.paletteNames?.join(", ") || style.colors.join(", ")}.`;
      case "material":
        return `Traditional supports: ${style.materials.join(" · ")}.`;
      case "space":
        if (style.id === "warli") return "Centrifugal radial circles and horizontal processional bands without single-point perspective.";
        if (style.id === "kalamkari") return "Undulating organic foliage filling spatial voids with textile borders.";
        if (style.id === "madhubani") return "Horror vacui: total saturation of negative space with auspicious micro-motifs.";
        if (style.id === "thanjavur") return "Symmetrical frontal hierarchy enclosed by gilded architectural arches.";
        if (style.id === "phad") return "Continuous horizontal epic scroll packed with simultaneous scene encounters.";
        return "Dynamic compositional field balancing figure and ornamental border.";
      case "iconography":
        return `Key motifs: ${style.motifs.map((m) => m.replace(/_/g, " ")).join(", ")}.`;
      case "patronage":
        return `${style.community} · ${style.period}.`;
      case "ritual":
        return style.context.split(".")[0] + ".";
      case "contemporary":
        return `Living contemporary practice documented by institutions like ${style.sources[0]?.name || "National Crafts Museum"}.`;
      default:
        return style.grammar;
    }
  };

  // Synthesis compatibility evaluation
  const matrixA = styleA.matrix || { line: 4, geometry: 4, botanical: 3, ritual: 4 };
  const matrixB = styleB.matrix || { line: 4, geometry: 4, botanical: 3, ritual: 4 };

  const hasGeometricRepetition = matrixA.geometry >= 4 || matrixB.geometry >= 4;
  const hasBotanicalDetail = matrixA.botanical >= 4 || matrixB.botanical >= 4;
  const hasHighRitual = matrixA.ritual === 5 && matrixB.ritual === 5;

  return (
    <section className="comparative-microscope-section" id="compare">
      <div className="section-head">
        <div>
          <div className="kicker">
            <Search size={13} /> INTERACTIVE COMPARATIVE MICROSCOPE
          </div>
          <h2>
            Structural<br />
            <em>Dissection.</em>
          </h2>
        </div>
        <p>
          Before blending, understand the underlying generative rules. Compare stylistic grammar, line behavior, pigment chemistry, and ritual contexts to discover authentic synthesis opportunities.
        </p>
      </div>

      {/* Style Switcher Bar */}
      <div className="microscope-style-bar">
        <div className="style-select-box">
          <small>PRIMARY SOURCE</small>
          <select value={styleA.id} onChange={(e) => onSelectStyleA(allStyles.find((s) => s.id === e.target.value))}>
            {allStyles.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.region})
              </option>
            ))}
          </select>
        </div>

        <span className="fusion-cross">×</span>

        <div className="style-select-box">
          <small>SECONDARY SOURCE</small>
          <select value={styleB.id} onChange={(e) => onSelectStyleB(allStyles.find((s) => s.id === e.target.value))}>
            {allStyles.filter((s) => s.id !== styleA.id).map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.region})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Dimension Selector Tabs */}
      <div className="dim-tabs">
        {COMPARISON_DIMENSIONS.map((dim) => (
          <button
            key={dim.id}
            className={`dim-tab-btn ${activeDim === dim.id ? "active" : ""}`}
            onClick={() => setActiveDim(dim.id)}
          >
            {dim.name}
          </button>
        ))}
      </div>

      {/* Side-by-Side Comparison Dual Card View */}
      <div className="microscope-dual-view">
        <article className="tradition-compare-card">
          <div className="card-header" style={{ borderTopColor: styleA.colors[1] }}>
            <span className="tradition-tag">{styleA.tag}</span>
            <h3>{styleA.name}</h3>
            <small>{styleA.region}</small>
          </div>
          <div className="card-body">
            <span className="dimension-label">{COMPARISON_DIMENSIONS.find((d) => d.id === activeDim)?.name}</span>
            <p>{getDimensionComparison(activeDim, styleA)}</p>
            <div className="swatch-row">
              {styleA.colors.map((c, i) => (
                <span key={i} className="mini-swatch" style={{ background: c }} title={styleA.paletteNames?.[i] || c} />
              ))}
            </div>
          </div>
        </article>

        <article className="tradition-compare-card">
          <div className="card-header" style={{ borderTopColor: styleB.colors[1] }}>
            <span className="tradition-tag">{styleB.tag}</span>
            <h3>{styleB.name}</h3>
            <small>{styleB.region}</small>
          </div>
          <div className="card-body">
            <span className="dimension-label">{COMPARISON_DIMENSIONS.find((d) => d.id === activeDim)?.name}</span>
            <p>{getDimensionComparison(activeDim, styleB)}</p>
            <div className="swatch-row">
              {styleB.colors.map((c, i) => (
                <span key={i} className="mini-swatch" style={{ background: c }} title={styleB.paletteNames?.[i] || c} />
              ))}
            </div>
          </div>
        </article>
      </div>

      {/* FUSION MATRIX VISUALIZATION */}
      <div className="fusion-matrix-box">
        <div className="matrix-head">
          <h4>FUSION ATTRIBUTE MATRIX</h4>
          <span>COMPARATIVE ATTRIBUTE INTENSITY</span>
        </div>
        <div className="matrix-grid">
          {FUSION_MATRIX_DIMENSIONS.map((dim) => {
            const valA = matrixA[dim.key] || 3;
            const valB = matrixB[dim.key] || 3;
            return (
              <div key={dim.key} className="matrix-row">
                <div className="attr-name">{dim.name}</div>
                <div className="gauge-side">
                  <span className="style-name">{styleA.name}</span>
                  <div className="dot-gauge">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <i key={dot} className={dot <= valA ? "filled" : ""} style={{ background: dot <= valA ? styleA.colors[1] : "#29241e" }} />
                    ))}
                  </div>
                </div>
                <div className="gauge-side">
                  <span className="style-name">{styleB.name}</span>
                  <div className="dot-gauge">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <i key={dot} className={dot <= valB ? "filled" : ""} style={{ background: dot <= valB ? styleB.colors[1] : "#29241e" }} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* WHAT CAN BE SAFELY SYNTHESIZED */}
      <div className="synthesis-opportunities-grid">
        <div className="opportunity-card high">
          <div className="opp-header">
            <CheckCircle2 size={15} color="#617555" />
            <b>HIGH SYNTHESIS COMPATIBILITY</b>
          </div>
          <h4>
            {hasGeometricRepetition && hasBotanicalDetail
              ? "Geometric Rhythm × Botanical Repetition"
              : "Linear Structure × Surface Ornament"}
          </h4>
          <p>
            Combining {styleA.name}&apos;s structural visual grammar as a spatial foundation while transforming {styleB.name}&apos;s organic motifs produces strong harmony between void and intricate texture.
          </p>
        </div>

        <div className="opportunity-card caution">
          <div className="opp-header">
            <AlertTriangle size={15} color="#b9855b" />
            <b>CONTEXTUAL & SACRED CAUTION</b>
          </div>
          <h4>
            {hasHighRitual ? "Ritual-Specific & Deific Imagery" : "Community Attribution Discipline"}
          </h4>
          <p>
            Both traditions possess sacred ceremonial lineages. When incorporating symbols (e.g. Chowk shrines, temple deities, or shamanic spirit houses), explicitly document their cultural role in your Artist Statement rather than reducing them to generic decorative clip art.
          </p>
        </div>
      </div>
    </section>
  );
}
