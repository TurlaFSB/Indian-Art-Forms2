import React from "react";
import {
  Layers,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  ArrowUp,
  ArrowDown,
  ChevronsUp,
  ChevronsDown,
  Copy,
  Trash2,
  Sliders,
  Sparkles,
  ShieldAlert
} from "lucide-react";
import { getMotifById } from "../data/motifs";

export default function LayersPanel({
  elements,
  setElements,
  selectedId,
  setSelectedId,
  onRecordMilestone
}) {
  // Sort descending by zIndex for top-to-bottom stack view
  const sortedLayers = [...elements].sort((a, b) => b.zIndex - a.zIndex);

  const updateLayer = (id, updates) => {
    setElements((prev) => prev.map((el) => (el.id === id ? { ...el, ...updates } : el)));
  };

  const bringForward = (id) => {
    const idx = sortedLayers.findIndex((el) => el.id === id);
    if (idx > 0) {
      const current = sortedLayers[idx];
      const above = sortedLayers[idx - 1];
      const tempZ = current.zIndex;
      current.zIndex = above.zIndex;
      above.zIndex = tempZ;
      setElements([...elements]);
      if (onRecordMilestone) onRecordMilestone(`Reordered ${current.name} forward`);
    }
  };

  const sendBackward = (id) => {
    const idx = sortedLayers.findIndex((el) => el.id === id);
    if (idx < sortedLayers.length - 1) {
      const current = sortedLayers[idx];
      const below = sortedLayers[idx + 1];
      const tempZ = current.zIndex;
      current.zIndex = below.zIndex;
      below.zIndex = tempZ;
      setElements([...elements]);
      if (onRecordMilestone) onRecordMilestone(`Reordered ${current.name} backward`);
    }
  };

  const bringToFront = (id) => {
    const maxZ = Math.max(...elements.map((e) => e.zIndex), 0);
    updateLayer(id, { zIndex: maxZ + 1 });
    if (onRecordMilestone) onRecordMilestone(`Brought layer to front`);
  };

  const sendToBack = (id) => {
    const minZ = Math.min(...elements.map((e) => e.zIndex), 1);
    updateLayer(id, { zIndex: Math.max(0, minZ - 1) });
    if (onRecordMilestone) onRecordMilestone(`Sent layer to back`);
  };

  const duplicateLayer = (layer) => {
    const newEl = {
      ...layer,
      id: "obj_" + Math.random().toString(36).slice(2, 9) + "_" + Date.now().toString(36),
      name: `${layer.name} (Copy)`,
      x: Math.min(90, layer.x + 4),
      y: Math.min(90, layer.y + 4),
      zIndex: Math.max(...elements.map((e) => e.zIndex), 0) + 1,
      created: Date.now()
    };
    setElements([...elements, newEl]);
    setSelectedId(newEl.id);
    if (onRecordMilestone) onRecordMilestone(`Duplicated ${layer.name}`);
  };

  const deleteLayer = (id) => {
    const target = elements.find((e) => e.id === id);
    setElements(elements.filter((e) => e.id !== id));
    if (selectedId === id) setSelectedId(null);
    if (onRecordMilestone && target) onRecordMilestone(`Deleted ${target.name}`);
  };

  return (
    <div className="layers-panel">
      <div className="panel-header">
        <div className="panel-title">
          <Layers size={13} />
          <span>NON-DESTRUCTIVE LAYERS</span>
        </div>
        <span className="layer-count">{elements.length} LAYERS</span>
      </div>

      <div className="layer-list">
        {sortedLayers.map((layer, index) => {
          const isSelected = selectedId === layer.id;
          const motif = getMotifById(layer.motifId);

          return (
            <div
              key={layer.id}
              className={`layer-item ${isSelected ? "selected" : ""} ${layer.locked ? "locked" : ""}`}
              onClick={() => setSelectedId(layer.id)}
            >
              {/* Layer Index & Status */}
              <div className="layer-main-row">
                <span className="layer-index">{String(sortedLayers.length - index).padStart(2, "0")}</span>

                {/* Layer Name & Source Badge */}
                <div className="layer-info">
                  <div className="layer-name-title">
                    <b>{layer.name}</b>
                    {layer.locked && <Lock size={10} className="lock-icon" />}
                  </div>
                  <div className="layer-tags">
                    <span className="source-tag">{layer.source}</span>
                    <span className="cat-tag">{layer.category}</span>
                  </div>
                </div>

                {/* Quick Visibility & Lock Toggles */}
                <div className="layer-quick-actions" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => updateLayer(layer.id, { visible: !layer.visible })}
                    title={layer.visible ? "Hide Layer" : "Show Layer"}
                  >
                    {layer.visible ? <Eye size={12} /> : <EyeOff size={12} opacity={0.4} />}
                  </button>
                  <button
                    onClick={() => updateLayer(layer.id, { locked: !layer.locked })}
                    title={layer.locked ? "Unlock Layer" : "Lock Layer"}
                  >
                    {layer.locked ? <Lock size={12} color="#c9a96c" /> : <Unlock size={12} opacity={0.4} />}
                  </button>
                </div>
              </div>

              {/* Expanded Layer Controls if Selected */}
              {isSelected && (
                <div className="layer-expanded-controls" onClick={(e) => e.stopPropagation()}>
                  {/* Layer Reorder Toolbar */}
                  <div className="reorder-bar">
                    <button onClick={() => bringToFront(layer.id)} title="Bring to Front">
                      <ChevronsUp size={11} /> FRONT
                    </button>
                    <button onClick={() => bringForward(layer.id)} title="Bring Forward">
                      <ArrowUp size={11} /> UP
                    </button>
                    <button onClick={() => sendBackward(layer.id)} title="Send Backward">
                      <ArrowDown size={11} /> DOWN
                    </button>
                    <button onClick={() => sendToBack(layer.id)} title="Send to Back">
                      <ChevronsDown size={11} /> BACK
                    </button>
                  </div>

                  {/* Blend Mode & Opacity */}
                  <div className="layer-slider-grid">
                    <label>
                      <span>BLEND:</span>
                      <select
                        value={layer.blendMode || "normal"}
                        onChange={(e) => updateLayer(layer.id, { blendMode: e.target.value })}
                      >
                        <option value="normal">Normal</option>
                        <option value="multiply">Multiply (Dye)</option>
                        <option value="screen">Screen (Light)</option>
                        <option value="overlay">Overlay</option>
                        <option value="luminosity">Luminosity (Gold)</option>
                      </select>
                    </label>

                    <label>
                      <span>OPACITY: {Math.round(layer.opacity * 100)}%</span>
                      <input
                        type="range"
                        min="0.1"
                        max="1"
                        step="0.05"
                        value={layer.opacity}
                        onChange={(e) => updateLayer(layer.id, { opacity: Number(e.target.value) })}
                      />
                    </label>
                  </div>

                  {/* Actions */}
                  <div className="layer-action-buttons">
                    <button onClick={() => duplicateLayer(layer)}>
                      <Copy size={11} /> DUPLICATE
                    </button>
                    <button className="del-btn" onClick={() => deleteLayer(layer.id)}>
                      <Trash2 size={11} /> DELETE
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
