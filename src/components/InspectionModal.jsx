import React, { useState } from "react";
import {
  Search,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Filter,
  Eye,
  Layers,
  ArrowLeft
} from "lucide-react";

export default function InspectionModal({
  isOpen,
  onClose,
  svgElement,
  styleA,
  styleB,
  isolationFilter,
  setIsolationFilter
}) {
  const [zoomLevel, setZoomLevel] = useState(2); // 200% default inspection
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  if (!isOpen) return null;

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  };

  const handlePointerUp = () => setIsDragging(false);

  return (
    <div className="modal-overlay inspection-overlay">
      <div className="inspection-modal-box">
        {/* Top Inspection Bar */}
        <div className="inspection-header">
          <div className="header-left">
            <Search size={14} color="#c9a96c" />
            <span>MICROSCOPIC ARTWORK INSPECTION</span>
          </div>

          {/* Zoom Selector */}
          <div className="zoom-chips">
            {[1, 2, 4, 8].map((z) => (
              <button
                key={z}
                className={`zoom-chip ${zoomLevel === z ? "active" : ""}`}
                onClick={() => {
                  setZoomLevel(z);
                  setPan({ x: 0, y: 0 });
                }}
              >
                {z * 100}%
              </button>
            ))}
          </div>

          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Middle Canvas Viewport with Pan & Zoom */}
        <div
          className="inspection-viewport"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <div
            className="inspection-content"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
              transformOrigin: "center center"
            }}
          >
            {svgElement ? (
              <div
                className="inspection-svg-render"
                dangerouslySetInnerHTML={{ __html: svgElement.outerHTML }}
              />
            ) : null}
          </div>
        </div>

        {/* Bottom Source Isolation Filter Bar */}
        <div className="inspection-footer">
          <div className="isolation-group">
            <span className="isolation-label">
              <Filter size={11} /> LAYER ISOLATION:
            </span>
            <div className="filter-buttons">
              <button
                className={`iso-btn ${isolationFilter === "all" ? "active" : ""}`}
                onClick={() => setIsolationFilter("all")}
              >
                SHOW ALL
              </button>
              <button
                className={`iso-btn ${isolationFilter === styleA.id ? "active" : ""}`}
                onClick={() => setIsolationFilter(styleA.id)}
              >
                {styleA.name.toUpperCase()} ONLY
              </button>
              <button
                className={`iso-btn ${isolationFilter === styleB.id ? "active" : ""}`}
                onClick={() => setIsolationFilter(styleB.id)}
              >
                {styleB.name.toUpperCase()} ONLY
              </button>
              <button
                className={`iso-btn ${isolationFilter === "brushwork" ? "active" : ""}`}
                onClick={() => setIsolationFilter("brushwork")}
              >
                BRUSHWORK ONLY
              </button>
            </div>
          </div>

          <span className="pan-hint">CLICK & DRAG TO PAN HIGH-RESOLUTION VIEWPORT</span>
        </div>
      </div>
    </div>
  );
}
