import React, { useRef } from "react";
import {
  Save,
  Upload,
  Layers,
  Copy,
  CheckCircle2,
  FileCode,
  FolderOpen,
  Clock
} from "lucide-react";
import { exportProjectAsJSON } from "../utils/exportHelper";

export default function ProjectManager({
  versions = [],
  activeVersionId,
  onSwitchVersion,
  onDuplicateVersion,
  projectState,
  onLoadProject,
  lastAutosavedTime
}) {
  const fileInputRef = useRef(null);

  const handleSaveFile = () => {
    exportProjectAsJSON(projectState, projectState.metadata?.title || "synthesis-project");
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result);
        if (parsed && (parsed.elements || parsed.versions)) {
          onLoadProject(parsed);
          alert("Project successfully imported!");
        } else {
          alert("Invalid .synthesis.json project file format.");
        }
      } catch (err) {
        alert("Failed to parse JSON project file: " + err.message);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="project-manager-bar">
      {/* Version Selector Tabs */}
      <div className="version-selector-group">
        <span className="version-label">
          <Layers size={11} /> VERSIONS:
        </span>
        <div className="version-pills">
          {versions.map((ver) => (
            <button
              key={ver.id}
              className={`version-pill ${activeVersionId === ver.id ? "active" : ""}`}
              onClick={() => onSwitchVersion(ver.id)}
            >
              {ver.name}
            </button>
          ))}
          <button className="duplicate-ver-btn" onClick={onDuplicateVersion} title="Duplicate Current Version">
            <Copy size={11} /> + NEW VERSION
          </button>
        </div>
      </div>

      {/* Save, Import & Autosave Status */}
      <div className="project-io-group">
        {/* Autosave Indicator */}
        <div className="autosave-status" title="Local browser storage synchronized">
          <span className="live-dot" />
          <small>Autosaved · {lastAutosavedTime || "Live"}</small>
        </div>

        {/* Export JSON Button */}
        <button className="io-btn" onClick={handleSaveFile} title="Download .synthesis.json project file">
          <Save size={12} /> SAVE PROJECT (.json)
        </button>

        {/* Import JSON Button */}
        <button
          className="io-btn"
          onClick={() => fileInputRef.current?.click()}
          title="Import .synthesis.json project file"
        >
          <Upload size={12} /> IMPORT PROJECT
        </button>
        <input
          type="file"
          ref={fileInputRef}
          accept=".json,.synthesis.json"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
