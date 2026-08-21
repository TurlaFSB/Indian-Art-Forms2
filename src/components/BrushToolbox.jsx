import React from "react";
import {
  PenTool,
  Paintbrush,
  Sparkles,
  Droplet,
  CircleDot,
  Eraser,
  Sliders,
  RotateCcw
} from "lucide-react";

export const BRUSH_TYPES = [
  {
    id: "kalam",
    name: "Bamboo Reed Kalam",
    tradition: "Kalamkari / Warli",
    icon: PenTool,
    desc: "Rigid nib with dynamic pressure tapering for crisp calligraphic contours.",
    defaultWidth: 3,
    minWidth: 1,
    maxWidth: 12
  },
  {
    id: "rice_paste",
    name: "Rice Paste Nib (Chawal Pittha)",
    tradition: "Warli / Madhubani",
    icon: Sparkles,
    desc: "Thick textured opaque stroke simulating ground rice flour paste.",
    defaultWidth: 4,
    minWidth: 2,
    maxWidth: 16
  },
  {
    id: "squirrel_hair",
    name: "Fine Squirrel-Hair Brush",
    tradition: "Gond / Pattachitra",
    icon: Paintbrush,
    desc: "Ultra-fine continuous flowing line for delicate internal micro-detailing.",
    defaultWidth: 2,
    minWidth: 1,
    maxWidth: 8
  },
  {
    id: "stippler",
    name: "Earth Ochre Stippler",
    tradition: "Gond / Saura",
    icon: CircleDot,
    desc: "Repeated stipple dot clusters with pressure-sensitive particle density.",
    defaultWidth: 6,
    minWidth: 3,
    maxWidth: 24
  },
  {
    id: "dye_wash",
    name: "Natural Mordant Dye Wash",
    tradition: "Kalamkari / Textile",
    icon: Droplet,
    desc: "Translucent layering wash that bleeds softly into the textile fiber ground.",
    defaultWidth: 14,
    minWidth: 6,
    maxWidth: 40
  },
  {
    id: "gold_gesso",
    name: "Gold Gesso Embosser",
    tradition: "Thanjavur",
    icon: Sparkles,
    desc: "Dimensional raised relief line with simulated 22k metallic luster.",
    defaultWidth: 5,
    minWidth: 2,
    maxWidth: 18
  },
  {
    id: "eraser",
    name: "Precision Eraser",
    tradition: "Correction Tool",
    icon: Eraser,
    desc: "Removes individual brush strokes cleanly without altering underlying vector motifs.",
    defaultWidth: 12,
    minWidth: 4,
    maxWidth: 36
  }
];

export default function BrushToolbox({
  activeBrush,
  setActiveBrush,
  strokeColor,
  setStrokeColor,
  strokeWidth,
  setStrokeWidth,
  strokeOpacity,
  setStrokeOpacity,
  colorPalette = [],
  onClearStrokes,
  strokeCount = 0
}) {
  const currentBrush = BRUSH_TYPES.find((b) => b.id === activeBrush) || BRUSH_TYPES[0];

  return (
    <div className="brush-toolbox">
      <div className="toolbox-header">
        <div className="toolbox-title">
          <Paintbrush size={13} />
          <span>TRADITIONAL BRUSH ENGINE</span>
        </div>
        <span className="pressure-badge" title="Dynamic pointer pressure supported">
          STYLUS PRESSURE ACTIVE
        </span>
      </div>

      {/* Brush Type Selector */}
      <div className="brush-list">
        {BRUSH_TYPES.map((b) => {
          const Icon = b.icon;
          const isSelected = activeBrush === b.id;
          return (
            <button
              key={b.id}
              className={`brush-chip ${isSelected ? "active" : ""}`}
              onClick={() => {
                setActiveBrush(b.id);
                setStrokeWidth(b.defaultWidth);
              }}
              title={`${b.name} (${b.tradition}): ${b.desc}`}
            >
              <Icon size={13} />
              <div className="brush-info">
                <b>{b.name}</b>
                <small>{b.tradition}</small>
              </div>
            </button>
          );
        })}
      </div>

      {/* Brush Controls (Width & Opacity) */}
      <div className="brush-controls">
        <div className="control-row">
          <label>
            <span>STROKE WIDTH</span>
            <b>{strokeWidth}px</b>
          </label>
          <input
            type="range"
            min={currentBrush.minWidth}
            max={currentBrush.maxWidth}
            value={strokeWidth}
            onChange={(e) => setStrokeWidth(Number(e.target.value))}
          />
        </div>

        <div className="control-row">
          <label>
            <span>OPACITY & DENSITY</span>
            <b>{Math.round(strokeOpacity * 100)}%</b>
          </label>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.05"
            value={strokeOpacity}
            onChange={(e) => setStrokeOpacity(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Natural Mineral / Plant Pigment Swatches */}
      <div className="pigment-palette">
        <span className="palette-label">NATURAL PIGMENTS:</span>
        <div className="swatches">
          {colorPalette.map((col, idx) => (
            <button
              key={idx}
              className={`swatch ${strokeColor === col ? "selected" : ""}`}
              style={{ backgroundColor: col }}
              onClick={() => setStrokeColor(col)}
              title={`Natural Pigment: ${col}`}
            />
          ))}
          {/* Default traditional pigment additions */}
          {["#ebd9b6", "#82221b", "#16453b", "#c49232", "#1c1813", "#2d2a45"].map((col, idx) => (
            <button
              key={"def_" + idx}
              className={`swatch ${strokeColor === col ? "selected" : ""}`}
              style={{ backgroundColor: col }}
              onClick={() => setStrokeColor(col)}
              title={`Traditional Pigment: ${col}`}
            />
          ))}
        </div>
      </div>

      {/* Stroke History Summary & Clear */}
      <div className="brush-footer">
        <span>{strokeCount} BRUSHSTROKES</span>
        {strokeCount > 0 && (
          <button className="clear-strokes-btn" onClick={onClearStrokes} title="Clear all hand-painted strokes">
            <RotateCcw size={11} /> CLEAR STROKES
          </button>
        )}
      </div>
    </div>
  );
}
