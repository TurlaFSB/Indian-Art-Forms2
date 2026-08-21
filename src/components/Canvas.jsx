import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import {
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Copy,
  Trash2,
  Layers,
  Sparkles,
  Move,
  RotateCw,
  Sliders,
  Grid,
  Check,
  Plus,
  Eraser,
  RefreshCw,
  FlipHorizontal,
  ChevronUp,
  ChevronDown
} from "lucide-react";
import { getMotifById } from "../data/motifs";
import { MATERIALS } from "../data/content";

export default function Canvas({
  elements,
  setElements,
  strokes,
  setStrokes,
  selectedId,
  setSelectedId,
  groundId,
  setGroundId,
  mode, // 'select' | 'brush'
  setMode,
  activeBrush,
  strokeColor,
  strokeWidth,
  strokeOpacity,
  isolationFilter = "all",
  onRecordMilestone,
  svgRef,
  onOpenFullCatalog,
  styleA,
  styleB
}) {
  const [zoom, setZoom] = useState(1);
  const [snapToGrid, setSnapToGrid] = useState(false);
  const [activeHandle, setActiveHandle] = useState(null);
  const isDrawing = useRef(false);
  const currentStroke = useRef(null);

  const selectedEl = elements.find((e) => e.id === selectedId);
  const selectedMaterial = MATERIALS.find((m) => m.id === groundId) || MATERIALS[0];

  // Helper to commit element updates safely
  const updateElement = useCallback((id, updates) => {
    setElements((prev) => prev.map((el) => (el.id === id ? { ...el, ...updates } : el)));
  }, [setElements]);

  // Convert Screen (clientX, clientY) to exact SVG ViewBox Coordinates (0..800, 0..550)
  const getSvgPoint = useCallback((clientX, clientY) => {
    const svg = svgRef.current;
    if (!svg) return { x: 400, y: 275, pctX: 50, pctY: 50 };
    try {
      const pt = svg.createSVGPoint();
      pt.x = clientX;
      pt.y = clientY;
      const svgP = pt.matrixTransform(svg.getScreenCTM().inverse());
      return {
        x: svgP.x,
        y: svgP.y,
        pctX: Math.max(0, Math.min(100, (svgP.x / 800) * 100)),
        pctY: Math.max(0, Math.min(100, (svgP.y / 550) * 100))
      };
    } catch (err) {
      const rect = svg.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 800;
      const y = ((clientY - rect.top) / rect.height) * 550;
      return {
        x,
        y,
        pctX: Math.max(0, Math.min(100, (x / 800) * 100)),
        pctY: Math.max(0, Math.min(100, (y / 550) * 100))
      };
    }
  }, [svgRef]);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;

      if ((e.key === "Delete" || e.key === "Backspace") && selectedId) {
        e.preventDefault();
        deleteElement();
      } else if (e.key === "v" || e.key === "V") {
        setMode("select");
      } else if (e.key === "b" || e.key === "B") {
        setMode("brush");
      } else if (e.key === "Escape") {
        setSelectedId(null);
      } else if (selectedId && selectedEl) {
        const step = e.shiftKey ? 5 : 1;
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          updateElement(selectedId, { x: Math.max(5, selectedEl.x - step) });
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          updateElement(selectedId, { x: Math.min(95, selectedEl.x + step) });
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          updateElement(selectedId, { y: Math.max(5, selectedEl.y - step) });
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          updateElement(selectedId, { y: Math.min(95, selectedEl.y + step) });
        } else if (e.key === "[") {
          stepScale(-4);
        } else if (e.key === "]") {
          stepScale(4);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, selectedEl, mode, updateElement]);

  // Clear Canvas
  const handleStartBlank = () => {
    setElements([]);
    setStrokes([]);
    setSelectedId(null);
    if (onRecordMilestone) onRecordMilestone("Started Blank Canvas");
  };

  // Duplicate Selected Element
  const duplicateElement = () => {
    if (!selectedEl) return;
    const newEl = {
      ...selectedEl,
      id: "obj_" + Math.random().toString(36).slice(2, 9) + "_" + Date.now().toString(36),
      name: `${selectedEl.name} (Copy)`,
      x: Math.min(88, selectedEl.x + 4),
      y: Math.min(88, selectedEl.y + 4),
      zIndex: elements.length + 1,
      created: Date.now()
    };
    setElements((prev) => [...prev, newEl]);
    setSelectedId(newEl.id);
    if (onRecordMilestone) onRecordMilestone(`Duplicated ${selectedEl.name}`);
  };

  // Delete Selected Element
  const deleteElement = () => {
    if (!selectedEl) return;
    setElements((prev) => prev.filter((e) => e.id !== selectedEl.id));
    setSelectedId(null);
    if (onRecordMilestone) onRecordMilestone(`Removed ${selectedEl.name}`);
  };

  // Flip Horizontal
  const flipHorizontal = () => {
    if (!selectedEl) return;
    updateElement(selectedEl.id, { scaleX: (selectedEl.scaleX || 1) * -1 });
    if (onRecordMilestone) onRecordMilestone(`Flipped ${selectedEl.name}`);
  };

  // Step Rotate
  const stepRotate = (deltaDeg) => {
    if (!selectedEl) return;
    const newR = ((selectedEl.r || 0) + deltaDeg) % 360;
    updateElement(selectedEl.id, { r: newR });
  };

  // Step Scale
  const stepScale = (deltaScale) => {
    if (!selectedEl) return;
    const newS = Math.max(10, Math.min(160, (selectedEl.s || 35) + deltaScale));
    updateElement(selectedEl.id, { s: newS });
  };

  // Z-Order
  const bringForward = () => {
    if (!selectedEl) return;
    const maxZ = Math.max(...elements.map((e) => e.zIndex), 0);
    updateElement(selectedEl.id, { zIndex: maxZ + 1 });
  };

  const sendBackward = () => {
    if (!selectedEl) return;
    const minZ = Math.min(...elements.map((e) => e.zIndex), 1);
    updateElement(selectedEl.id, { zIndex: Math.max(0, minZ - 1) });
  };

  // --- FREEHAND BRUSH ENGINE ---
  const handlePointerDownCanvas = (ev) => {
    if (mode === "brush") {
      ev.preventDefault();
      const pt = getSvgPoint(ev.clientX, ev.clientY);
      const pressure = ev.pressure > 0 ? ev.pressure : 0.6;

      isDrawing.current = true;
      currentStroke.current = {
        id: "stroke_" + Date.now(),
        brush: activeBrush,
        color: strokeColor,
        width: strokeWidth,
        opacity: strokeOpacity,
        points: [{ x: pt.x, y: pt.y, pressure }]
      };
      setStrokes((prev) => [...prev, currentStroke.current]);
    } else {
      // In select mode: clicking empty canvas deselects
      if (ev.target.tagName === "svg" || ev.target.classList.contains("canvas-ground-rect")) {
        setSelectedId(null);
      }
    }
  };

  const handlePointerMoveCanvas = (ev) => {
    if (mode === "brush" && isDrawing.current && currentStroke.current) {
      ev.preventDefault();
      const pt = getSvgPoint(ev.clientX, ev.clientY);
      const pressure = ev.pressure > 0 ? ev.pressure : 0.6;

      currentStroke.current.points.push({ x: pt.x, y: pt.y, pressure });
      setStrokes((prev) => [...prev.slice(0, -1), { ...currentStroke.current }]);
    }
  };

  const handlePointerUpCanvas = () => {
    if (mode === "brush" && isDrawing.current) {
      isDrawing.current = false;
      if (onRecordMilestone && currentStroke.current?.points?.length > 2) {
        onRecordMilestone(`Added ${activeBrush} brushwork`);
      }
      currentStroke.current = null;
    }
  };

  // --- GLITCH-FREE OBJECT TRANSFORM DRAGGER ---
  const handleObjectDown = (el, ev, action = "drag") => {
    if (mode !== "select") return;
    ev.preventDefault();
    ev.stopPropagation();

    setSelectedId(el.id);
    if (el.locked && action !== "select_only") return;

    setActiveHandle(action);

    const startPt = getSvgPoint(ev.clientX, ev.clientY);
    const initialEl = { ...el };

    const onPointerMove = (e) => {
      e.preventDefault();
      const curPt = getSvgPoint(e.clientX, e.clientY);
      const dxPct = curPt.pctX - startPt.pctX;
      const dyPct = curPt.pctY - startPt.pctY;

      if (action === "drag") {
        let nx = initialEl.x + dxPct;
        let ny = initialEl.y + dyPct;
        if (snapToGrid) {
          nx = Math.round(nx / 5) * 5;
          ny = Math.round(ny / 5) * 5;
        }
        updateElement(el.id, {
          x: Math.max(5, Math.min(95, nx)),
          y: Math.max(5, Math.min(95, ny))
        });
      } else if (action === "rotate") {
        const centerSvgX = (initialEl.x / 100) * 800;
        const centerSvgY = (initialEl.y / 100) * 550;
        const rad = Math.atan2(curPt.y - centerSvgY, curPt.x - centerSvgX);
        let deg = Math.round((rad * 180) / Math.PI) - 90;
        if (snapToGrid) deg = Math.round(deg / 15) * 15;
        updateElement(el.id, { r: deg });
      } else if (action.startsWith("scale")) {
        const centerSvgX = (initialEl.x / 100) * 800;
        const centerSvgY = (initialEl.y / 100) * 550;
        const distInitial = Math.hypot(startPt.x - centerSvgX, startPt.y - centerSvgY);
        const distCurrent = Math.hypot(curPt.x - centerSvgX, curPt.y - centerSvgY);
        const ratio = distInitial > 0 ? distCurrent / distInitial : 1;
        const newScale = Math.max(10, Math.min(160, Math.round(initialEl.s * ratio)));
        updateElement(el.id, { s: newScale });
      }
    };

    const onPointerUp = () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      setActiveHandle(null);
      if (onRecordMilestone) onRecordMilestone(`Adjusted ${el.name}`);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
  };

  // Smooth SVG stroke renderer
  const renderStrokePath = (stroke) => {
    if (!stroke.points || stroke.points.length === 0) return null;
    if (stroke.points.length === 1) {
      return (
        <circle
          cx={stroke.points[0].x}
          cy={stroke.points[0].y}
          r={(stroke.width * (stroke.points[0].pressure || 0.6)) / 2}
          fill={stroke.color}
          opacity={stroke.opacity}
        />
      );
    }

    if (stroke.brush === "stippler") {
      return (
        <g opacity={stroke.opacity}>
          {stroke.points.map((p, i) => (
            <circle
              key={i}
              cx={p.x + (Math.sin(i) * stroke.width) / 2}
              cy={p.y + (Math.cos(i) * stroke.width) / 2}
              r={Math.max(1, (p.pressure || 0.6) * 2.5)}
              fill={stroke.color}
            />
          ))}
        </g>
      );
    }

    let d = `M ${stroke.points[0].x} ${stroke.points[0].y}`;
    for (let i = 1; i < stroke.points.length - 1; i++) {
      const xc = (stroke.points[i].x + stroke.points[i + 1].x) / 2;
      const yc = (stroke.points[i].y + stroke.points[i + 1].y) / 2;
      d += ` Q ${stroke.points[i].x} ${stroke.points[i].y}, ${xc} ${yc}`;
    }
    const last = stroke.points[stroke.points.length - 1];
    d += ` L ${last.x} ${last.y}`;

    return (
      <path
        d={d}
        fill="none"
        stroke={stroke.color}
        strokeWidth={stroke.width}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={stroke.opacity}
      />
    );
  };

  return (
    <div className="canvas-container">
      {/* Top Action Bar */}
      <div className="canvas-header-bar">
        {/* Support Ground Selector */}
        <div className="ground-selector">
          <span className="ground-label">SUPPORT GROUND:</span>
          <select value={groundId} onChange={(e) => setGroundId(e.target.value)}>
            {MATERIALS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name} ({m.icon})
              </option>
            ))}
          </select>
        </div>

        {/* Quick Design Action Buttons */}
        <div className="canvas-quick-actions">
          <button className="tool-btn master-cat-btn" onClick={onOpenFullCatalog} title="Browse All 40+ Indian Painting Motifs">
            <Sparkles size={12} color="#b38938" /> <b>BROWSE ALL MOTIFS</b>
          </button>
          <button className="tool-btn start-blank-btn" onClick={handleStartBlank} title="Start with a blank canvas">
            <Eraser size={12} /> BLANK CANVAS
          </button>
          <button
            className={`tool-btn ${snapToGrid ? "active" : ""}`}
            onClick={() => setSnapToGrid(!snapToGrid)}
            title="Snap to 5% Grid"
          >
            <Grid size={12} /> GRID SNAP
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="canvas-zoom-group">
          <button onClick={() => setZoom((z) => Math.max(0.7, z - 0.15))} title="Zoom Out">
            <ZoomOut size={12} />
          </button>
          <span>{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom((z) => Math.min(2.5, z + 0.15))} title="Zoom In">
            <ZoomIn size={12} />
          </button>
          <button onClick={() => setZoom(1)} title="Reset Zoom">
            <Maximize2 size={12} />
          </button>
        </div>
      </div>

      {/* SVG Canvas Area */}
      <div className="canvas-viewport" style={{ overflow: zoom > 1 ? "auto" : "hidden" }}>
        <div
          className={`canvas-artboard ${selectedMaterial.bgClass}`}
          style={{ transform: `scale(${zoom})`, transformOrigin: "center center" }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 800 550"
            className="main-svg-stage"
            onPointerDown={handlePointerDownCanvas}
            onPointerMove={handlePointerMoveCanvas}
            onPointerUp={handlePointerUpCanvas}
            onPointerLeave={handlePointerUpCanvas}
          >
            {/* Base Textured Background Rect */}
            {(() => {
              const GROUND_COLORS = {
                khadi_cloth: "#f5eee0",
                mud_wall: "#7b3829",
                handmade_paper: "#eee2cb",
                gold_panel: "#2d2417",
                talapatra: "#d8be8d",
                khadi: "#f5eee0",
                mud: "#7b3829",
                paper: "#eee2cb",
                gold: "#2d2417"
              };
              const gFill = GROUND_COLORS[groundId] || "#f5eee0";
              return <rect x="0" y="0" width="800" height="550" fill={gFill} className="canvas-ground-rect" />;
            })()}

            {/* Grid Overlay Guide (if enabled) */}
            {snapToGrid && (
              <g opacity="0.15" pointerEvents="none">
                {[...Array(19)].map((_, i) => (
                  <line key={`gx_${i}`} x1={(i + 1) * 40} y1="0" x2={(i + 1) * 40} y2="550" stroke="#1c1814" strokeWidth="1" strokeDasharray="3 3" />
                ))}
                {[...Array(13)].map((_, i) => (
                  <line key={`gy_${i}`} x1="0" y1={(i + 1) * 40} x2="800" y2={(i + 1) * 40} stroke="#1c1814" strokeWidth="1" strokeDasharray="3 3" />
                ))}
              </g>
            )}

            {/* Render Freehand Strokes Layer */}
            {isolationFilter === "all" || isolationFilter === "brushwork" ? (
              <g className="strokes-layer" pointerEvents="none">
                {strokes.map((s) => (
                  <React.Fragment key={s.id}>{renderStrokePath(s)}</React.Fragment>
                ))}
              </g>
            ) : null}

            {/* Render Vector Motifs Layers */}
            {elements
              .filter((el) => el.visible)
              .sort((a, b) => a.zIndex - b.zIndex)
              .map((el) => {
                const motif = getMotifById(el.motifId);
                const isSelected = selectedId === el.id;
                const isIsolated =
                  isolationFilter === "all" ||
                  isolationFilter === el.source.toLowerCase() ||
                  (isolationFilter === "brushwork" && false);

                if (!isIsolated) return null;

                const cx = (el.x / 100) * 800;
                const cy = (el.y / 100) * 550;
                const transformStr = `translate(${cx} ${cy}) rotate(${el.r || 0}) scale(${(el.s / 35) * (el.scaleX || 1)} ${(el.s / 35) * (el.scaleY || 1)})`;
                const hitBound = 48;

                return (
                  <g
                    key={el.id}
                    id={el.id}
                    transform={transformStr}
                    opacity={el.opacity}
                    style={{
                      mixBlendMode: el.blendMode || "normal",
                      cursor: mode === "select" ? (isSelected ? "move" : "pointer") : "crosshair"
                    }}
                    className={`motif-object ${isSelected ? "selected" : ""} ${el.locked ? "locked" : ""}`}
                    onPointerDown={(ev) => handleObjectDown(el, ev, "drag")}
                  >
                    {/* Transparent Solid Hit Area to make every single click register flawlessly */}
                    <rect
                      x={-hitBound}
                      y={-hitBound}
                      width={hitBound * 2}
                      height={hitBound * 2}
                      fill="transparent"
                      pointerEvents={mode === "select" ? "all" : "none"}
                    />

                    {/* Render Motif Geometry */}
                    {motif ? (
                      motif.render(el.color || "#1b1712", el.s)
                    ) : (
                      <circle r={el.s} fill={el.color || "#82221b"} />
                    )}
                  </g>
                );
              })}

            {/* Transform Handles Overlay for Selected Object */}
            {selectedEl && selectedEl.visible && mode === "select" && (
              <g className="transform-hud" transform={`translate(${(selectedEl.x / 100) * 800} ${(selectedEl.y / 100) * 550}) rotate(${selectedEl.r || 0})`}>
                {(() => {
                  const bSize = (selectedEl.s / 35) * 44;
                  return (
                    <>
                      {/* Bounding Box */}
                      <rect
                        x={-bSize}
                        y={-bSize}
                        width={bSize * 2}
                        height={bSize * 2}
                        fill="none"
                        stroke="#b38938"
                        strokeWidth="1.8"
                        strokeDasharray="4 4"
                        pointerEvents="none"
                      />

                      {/* Center Pivot Point */}
                      <circle cx="0" cy="0" r="3.5" fill="#b38938" pointerEvents="none" />

                      {/* Rotation Stem & Handle */}
                      <line x1="0" y1={-bSize} x2="0" y2={-bSize - 22} stroke="#b38938" strokeWidth="1.8" pointerEvents="none" />
                      <circle
                        cx="0"
                        cy={-bSize - 22}
                        r="7"
                        fill="#ffffff"
                        stroke="#b38938"
                        strokeWidth="2.5"
                        className="rotation-handle"
                        style={{ cursor: "grab" }}
                        onPointerDown={(ev) => handleObjectDown(selectedEl, ev, "rotate")}
                      />

                      {/* 4 Corner Scaling Handles */}
                      <rect
                        x={-bSize - 5}
                        y={-bSize - 5}
                        width="10"
                        height="10"
                        fill="#b38938"
                        stroke="#ffffff"
                        strokeWidth="1.8"
                        className="corner-scale-handle"
                        style={{ cursor: "nwse-resize" }}
                        onPointerDown={(ev) => handleObjectDown(selectedEl, ev, "scale_nw")}
                      />
                      <rect
                        x={bSize - 5}
                        y={-bSize - 5}
                        width="10"
                        height="10"
                        fill="#b38938"
                        stroke="#ffffff"
                        strokeWidth="1.8"
                        className="corner-scale-handle"
                        style={{ cursor: "nesw-resize" }}
                        onPointerDown={(ev) => handleObjectDown(selectedEl, ev, "scale_ne")}
                      />
                      <rect
                        x={bSize - 5}
                        y={bSize - 5}
                        width="10"
                        height="10"
                        fill="#b38938"
                        stroke="#ffffff"
                        strokeWidth="1.8"
                        className="corner-scale-handle"
                        style={{ cursor: "nwse-resize" }}
                        onPointerDown={(ev) => handleObjectDown(selectedEl, ev, "scale_se")}
                      />
                      <rect
                        x={-bSize - 5}
                        y={bSize - 5}
                        width="10"
                        height="10"
                        fill="#b38938"
                        stroke="#ffffff"
                        strokeWidth="1.8"
                        className="corner-scale-handle"
                        style={{ cursor: "nesw-resize" }}
                        onPointerDown={(ev) => handleObjectDown(selectedEl, ev, "scale_sw")}
                      />
                    </>
                  );
                })()}
              </g>
            )}
          </svg>

          {/* Empty Canvas Call to Action */}
          {elements.length === 0 && strokes.length === 0 && (
            <div className="empty-canvas-prompt">
              <Sparkles size={32} color="#b38938" />
              <h3>Blank Fusion Canvas Ready</h3>
              <p>Click any motif from the shelves on the left or click <b>"BROWSE ALL MOTIFS"</b> to start building your fusion masterwork.</p>
              <button className="gold-btn open-cat-btn" onClick={onOpenFullCatalog}>
                <Plus size={13} /> BROWSE &amp; ADD MOTIFS
              </button>
            </div>
          )}
        </div>
      </div>

      {/* FLOATING ACTION TOOLBAR FOR SELECTED ELEMENT */}
      {selectedEl && (
        <div className="active-object-toolbar">
          <div className="toolbar-info">
            <b>{selectedEl.name}</b>
            <small>{selectedEl.source} · Category: {selectedEl.category}</small>
          </div>

          <div className="toolbar-buttons-row">
            {/* Scale Controls */}
            <button className="tb-btn" onClick={() => stepScale(-5)} title="Scale Down ([)">
              [-] SMALLER
            </button>
            <button className="tb-btn" onClick={() => stepScale(5)} title="Scale Up (])">
              [+] LARGER
            </button>

            {/* Rotate Controls */}
            <button className="tb-btn" onClick={() => stepRotate(-15)} title="Rotate Left 15°">
              ⟲ -15°
            </button>
            <button className="tb-btn" onClick={() => stepRotate(15)} title="Rotate Right 15°">
              ⟳ +15°
            </button>

            {/* Flip Horizontal */}
            <button className="tb-btn" onClick={flipHorizontal} title="Flip Horizontally">
              <FlipHorizontal size={12} /> FLIP
            </button>

            {/* Layer Ordering */}
            <button className="tb-btn" onClick={bringForward} title="Bring Forward">
              <ChevronUp size={12} /> FORWARD
            </button>
            <button className="tb-btn" onClick={sendBackward} title="Send Backward">
              <ChevronDown size={12} /> BACK
            </button>

            {/* Duplicate */}
            <button className="tb-btn" onClick={duplicateElement} title="Duplicate Motif (Ctrl+D)">
              <Copy size={12} /> DUPLICATE
            </button>

            {/* Lock */}
            <button
              className={`tb-btn ${selectedEl.locked ? "active" : ""}`}
              onClick={() => updateElement(selectedEl.id, { locked: !selectedEl.locked })}
              title="Lock Element"
            >
              {selectedEl.locked ? <Lock size={12} /> : <Unlock size={12} />}
            </button>

            {/* Opacity Slider */}
            <div className="tb-slider">
              <label>OPACITY: {Math.round(selectedEl.opacity * 100)}%</label>
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.05"
                value={selectedEl.opacity}
                onChange={(e) => updateElement(selectedEl.id, { opacity: parseFloat(e.target.value) })}
              />
            </div>

            {/* Delete */}
            <button className="tb-btn del-btn" onClick={deleteElement} title="Remove from Canvas (Del)">
              <Trash2 size={12} /> DELETE
            </button>
          </div>
        </div>
      )}

      {/* Canvas Footer Bar */}
      <div className="canvas-footer-bar">
        <span>CANVAS: 800 × 550 PX · {selectedMaterial.name.toUpperCase()}</span>
        <span>{elements.length} ACTIVE MOTIFS · {strokes.length} BRUSH STROKES</span>
        <span>DRAG ANYWHERE TO MOVE · USE ARROW KEYS TO NUDGE · DEL TO REMOVE</span>
      </div>
    </div>
  );
}