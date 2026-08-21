import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Palette,
  Search,
  Compass,
  Map,
  History,
  BookOpen,
  Download,
  Sparkles,
  ShieldCheck,
  Award,
  Layers,
  Save,
  Upload,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
  Menu,
  X,
  FileText,
  Sliders,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Maximize2,
  HelpCircle,
  Clock,
  Eye,
  Move,
  LayoutGrid,
  Shuffle,
  Wand2,
  Brush,
  Info,
  Plus,
  Eraser,
  Grid,
  Check
} from "lucide-react";

import {
  STYLES,
  MATERIALS,
  CONCEPTS,
  COMPOSITIONS,
  ROUTES,
  RUBRIC,
  QUESTIONS
} from "./data/content";
import { MOTIF_STUDIES, getMotifById } from "./data/motifs";
import {
  createInitialArtwork,
  generateDynamicFusion,
  CURATED_PRESETS,
  evaluateSynthesis,
  formatTimestamp,
  saveProjectToLocalStorage,
  loadProjectFromLocalStorage
} from "./utils/engine";
import { SoundEngine } from "./utils/audio";
import { exportProjectAsJSON } from "./utils/exportHelper";

import Canvas from "./components/Canvas";
import BrushToolbox from "./components/BrushToolbox";
import LayersPanel from "./components/LayersPanel";
import ReferenceDock from "./components/ReferenceDock";
import CuratorPanel from "./components/CuratorPanel";
import ComparativeMicroscope from "./components/ComparativeMicroscope";
import TimeMachine from "./components/TimeMachine";
import ProjectManager from "./components/ProjectManager";
import Atlas from "./components/Atlas";
import Timeline from "./components/Timeline";
import Quiz from "./components/Quiz";
import ExhibitionDossier from "./components/ExhibitionDossier";

import RationaleModal from "./components/RationaleModal";
import MuseumExhibition from "./components/MuseumExhibition";
import InspectionModal from "./components/InspectionModal";
import VivaDefenseModal from "./components/VivaDefenseModal";
import CulturalChecklistModal from "./components/CulturalChecklistModal";
import MotifCatalogModal from "./components/MotifCatalogModal";

import "./styles.css";

const STAGES = [
  { id: "atelier", number: "01", name: "CREATIVE ATELIER" },
  { id: "microscope", number: "02", name: "MICROSCOPE" },
  { id: "atlas", number: "03", name: "ATLAS & LINEAGE" },
  { id: "quiz", number: "04", name: "CERTIFICATION" },
  { id: "dossier", number: "05", name: "MASTER DOSSIER" }
];

export default function App() {
  // Global Interface Mode: 'artist' | 'curator'
  const [interfaceMode, setInterfaceMode] = useState("artist");
  const [activeStage, setActiveStage] = useState("atelier");

  // Traditions & Core Concepts
  const [styleA, setStyleA] = useState(STYLES[0]); // Warli
  const [styleB, setStyleB] = useState(STYLES[1]); // Kalamkari
  const [concept, setConcept] = useState(CONCEPTS[0]);
  const [composition, setComposition] = useState(COMPOSITIONS[0]);
  const [groundId, setGroundId] = useState("khadi_cloth");
  const [artistName, setArtistName] = useState("Pranav Verma");
  const [activePresetId, setActivePresetId] = useState("warli_kalamkari_dance");

  // Active Motif Shelf Tab: 'paired' | 'styleA' | 'styleB' | 'all'
  const [activeShelfTab, setActiveShelfTab] = useState("paired");

  // Artwork Layer Elements & Freehand Strokes
  const [elements, setElements] = useState(() =>
    createInitialArtwork(STYLES[0], STYLES[1], CONCEPTS[0], COMPOSITIONS[0], "khadi_cloth")
  );
  const [strokes, setStrokes] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  // Digital Brush & Canvas Mode: 'select' | 'brush'
  const [canvasMode, setCanvasMode] = useState("select");
  const [activeBrush, setActiveBrush] = useState("kalam");
  const [strokeColor, setStrokeColor] = useState(styleA.colors[1] || "#82221b");
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [strokeOpacity, setStrokeOpacity] = useState(0.95);

  // Version Control & Project Management
  const [versions, setVersions] = useState([
    {
      id: "v1",
      name: "V1 — Initial Study",
      elements: createInitialArtwork(STYLES[0], STYLES[1], CONCEPTS[0], COMPOSITIONS[0], "khadi_cloth"),
      strokes: [],
      groundId: "khadi_cloth",
      concept: CONCEPTS[0],
      composition: COMPOSITIONS[0]
    }
  ]);
  const [activeVersionId, setActiveVersionId] = useState("v1");
  const [lastAutosaved, setLastAutosaved] = useState(formatTimestamp());

  // Creation Time Machine Milestones
  const [milestones, setMilestones] = useState([
    { time: formatTimestamp(Date.now() - 60000), action: "Initialized dual-tradition study" },
    { time: formatTimestamp(), action: "Mounted Khadi material support" }
  ]);

  // Design Rationale & Artist Statement
  const [rationale, setRationale] = useState({
    whySelected: `I wanted to investigate the dynamic dialogue between Warli's minimalist geometric stick figures and Kalamkari's intricate calligraphic botanical vines.`,
    investigation: `How tribal rhythmic circular movement can inhabit an organic textile ground without losing its communal spontaneity.`,
    strategy: `Use Warli geometric figures as the structural ground and transform Kalamkari foliage into a fluid framing border.`
  });
  const [artistStatement, setArtistStatement] = useState("");
  const [vivaAnswers, setVivaAnswers] = useState({});

  // Inspection & Isolation Filter
  const [isolationFilter, setIsolationFilter] = useState("all");

  // Modals
  const [isRationaleOpen, setIsRationaleOpen] = useState(false);
  const [isExhibitionOpen, setIsExhibitionOpen] = useState(false);
  const [isInspectionOpen, setIsInspectionOpen] = useState(false);
  const [isVivaOpen, setIsVivaOpen] = useState(false);
  const [isCulturalChecklistOpen, setIsCulturalChecklistOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const svgRef = useRef(null);

  // Switch Stage
  const handleStageSelect = (stageId) => {
    setActiveStage(stageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Record milestone helper
  const recordMilestone = (action) => {
    setMilestones((prev) => [...prev, { time: formatTimestamp(), action }]);
  };

  // Telemetry Score
  const currentScore = useMemo(
    () => evaluateSynthesis(elements, strokes, styleA, styleB, concept, composition),
    [elements, strokes, styleA, styleB, concept, composition]
  );

  // Motifs for Tradition A and Tradition B
  const motifsA = useMemo(() => MOTIF_STUDIES.filter((m) => m.tradition === styleA.id), [styleA]);
  const motifsB = useMemo(() => MOTIF_STUDIES.filter((m) => m.tradition === styleB.id), [styleB]);

  // Load Preset
  const handleApplyPreset = (preset) => {
    const foundA = STYLES.find((s) => s.id === preset.styleAId) || STYLES[0];
    const foundB = STYLES.find((s) => s.id === preset.styleBId) || STYLES[1];

    setStyleA(foundA);
    setStyleB(foundB);
    setConcept(preset.concept);
    setComposition(preset.composition);
    setGroundId(preset.groundId);
    setActivePresetId(preset.id);

    const generated = preset.build(foundA, foundB);
    setElements(generated);
    setStrokes([]);
    setSelectedId(generated[generated.length - 1]?.id || null);
    recordMilestone(`Generated Preset: ${preset.name}`);
  };

  // Random Synthesis
  const handleRandomSynthesis = () => {
    const randomA = STYLES[Math.floor(Math.random() * STYLES.length)];
    let randomB = STYLES[Math.floor(Math.random() * STYLES.length)];
    while (randomB.id === randomA.id) {
      randomB = STYLES[Math.floor(Math.random() * STYLES.length)];
    }
    const randomConcept = CONCEPTS[Math.floor(Math.random() * CONCEPTS.length)];
    const randomComp = COMPOSITIONS[Math.floor(Math.random() * COMPOSITIONS.length)];
    const randomGround = MATERIALS[Math.floor(Math.random() * MATERIALS.length)].id;

    setStyleA(randomA);
    setStyleB(randomB);
    setConcept(randomConcept);
    setComposition(randomComp);
    setGroundId(randomGround);
    setActivePresetId("custom_random");

    const generated = generateDynamicFusion(randomA, randomB, randomConcept, randomComp);
    setElements(generated);
    setStrokes([]);
    setSelectedId(generated[generated.length - 1]?.id || null);
    recordMilestone(`Synthesized Pair: ${randomA.name} × ${randomB.name}`);
  };

  // Start with Blank Canvas
  const handleStartBlank = () => {
    setElements([]);
    setStrokes([]);
    setSelectedId(null);
    setActivePresetId("blank");
    recordMilestone("Started Blank Canvas");
  };

  // Switch Style A
  const handleSelectStyleA = (newStyle) => {
    if (!newStyle || newStyle.id === styleA.id) return;
    setStyleA(newStyle);
    const initial = createInitialArtwork(newStyle, styleB, concept, composition, groundId);
    setElements(initial);
    setStrokes([]);
    setStrokeColor(newStyle.colors[1] || "#82221b");
    setActivePresetId("custom");
    recordMilestone(`Selected ${newStyle.name} as Primary Source`);
  };

  // Switch Style B
  const handleSelectStyleB = (newStyle) => {
    if (!newStyle || newStyle.id === styleB.id) return;
    setStyleB(newStyle);
    const initial = createInitialArtwork(styleA, newStyle, concept, composition, groundId);
    setElements(initial);
    setStrokes([]);
    setActivePresetId("custom");
    recordMilestone(`Selected ${newStyle.name} as Secondary Source`);
  };

  // Add Motif to Canvas
  const handleAddMotif = (motifConfig) => {
    const newEl = {
      id: "obj_" + Math.random().toString(36).slice(2, 9) + "_" + Date.now().toString(36),
      name: motifConfig.name,
      type: "motif",
      motifId: motifConfig.motifId,
      x: 45 + Math.random() * 10,
      y: 45 + Math.random() * 10,
      s: motifConfig.s || 46,
      scaleX: 1,
      scaleY: 1,
      r: 0,
      opacity: 0.95,
      blendMode: "normal",
      visible: true,
      locked: false,
      zIndex: elements.length + 1,
      source: motifConfig.source,
      category: motifConfig.category,
      materialAssociation: motifConfig.materialAssociation,
      color: motifConfig.color,
      created: Date.now()
    };
    setElements((prev) => [...prev, newEl]);
    setSelectedId(newEl.id);
    recordMilestone(`Added ${motifConfig.name}`);
  };

  // Version Switching
  const handleSwitchVersion = (verId) => {
    const target = versions.find((v) => v.id === verId);
    if (!target) return;
    setActiveVersionId(verId);
    setElements(target.elements || []);
    setStrokes(target.strokes || []);
    setGroundId(target.groundId || "khadi_cloth");
    setConcept(target.concept || CONCEPTS[0]);
    setComposition(target.composition || COMPOSITIONS[0]);
    recordMilestone(`Switched to Version: ${target.name}`);
  };

  // Duplicate Version
  const handleDuplicateVersion = () => {
    const newNum = versions.length + 1;
    const newVer = {
      id: `v${newNum}`,
      name: `V${newNum} — Variation Study`,
      elements: JSON.parse(JSON.stringify(elements)),
      strokes: JSON.parse(JSON.stringify(strokes)),
      groundId,
      concept,
      composition
    };
    setVersions((prev) => [...prev, newVer]);
    setActiveVersionId(newVer.id);
    recordMilestone(`Created Version: ${newVer.name}`);
  };

  // Load Imported Project
  const handleLoadProject = (imported) => {
    if (imported.styleA) {
      const foundA = STYLES.find((s) => s.id === imported.styleA);
      if (foundA) setStyleA(foundA);
    }
    if (imported.styleB) {
      const foundB = STYLES.find((s) => s.id === imported.styleB);
      if (foundB) setStyleB(foundB);
    }
    if (imported.concept) setConcept(imported.concept);
    if (imported.composition) setComposition(imported.composition);
    if (imported.groundId) setGroundId(imported.groundId);
    if (imported.artistName) setArtistName(imported.artistName);
    if (imported.elements) setElements(imported.elements);
    if (imported.strokes) setStrokes(imported.strokes);
    if (imported.versions) setVersions(imported.versions);
    if (imported.milestones) setMilestones(imported.milestones);
    if (imported.rationale) setRationale(imported.rationale);
    if (imported.artistStatement) setArtistStatement(imported.artistStatement);
    if (imported.vivaAnswers) setVivaAnswers(imported.vivaAnswers);
  };

  return (
    <div className={`app-root ${interfaceMode}-mode`}>
      <div className="grain" />

      {/* SINGLE UNIFIED TOP NAVIGATION BAR */}
      <header className="main-nav-header">
        <div className="nav-left">
          <button className="brand-btn" onClick={() => handleStageSelect("atelier")}>
            <b className="brand-monogram">SY</b>
            <div className="brand-text">
              <span>SYNTHESIS</span>
              <small>MUSEUM ATELIER OF INDIAN PAINTING</small>
            </div>
          </button>

          {/* Functional Mode Switcher: Artist Mode vs Curator Mode */}
          <div className="mode-toggle-switch">
            <button
              className={`mode-btn ${interfaceMode === "artist" ? "active" : ""}`}
              onClick={() => setInterfaceMode("artist")}
              title="Artist Mode: Canvas studio, motifs, brushes, colors & layers"
            >
              <Palette size={13} /> ARTIST MODE
            </button>
            <button
              className={`mode-btn ${interfaceMode === "curator" ? "active" : ""}`}
              onClick={() => setInterfaceMode("curator")}
              title="Curator Mode: Curatorial radar, 9D matrix, lineage & viva defense"
            >
              <Search size={13} /> CURATOR MODE
            </button>
          </div>
        </div>

        {/* 5 Dedicated Museum Stages */}
        <nav className="nav-links">
          {STAGES.map((s) => (
            <button
              key={s.id}
              className={activeStage === s.id ? "active" : ""}
              onClick={() => handleStageSelect(s.id)}
            >
              {s.number} · {s.name}
            </button>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="nav-right-actions">
          <button
            className={`audio-btn ${isAudioActive ? "on" : ""}`}
            onClick={() => setIsAudioActive(SoundEngine.toggle())}
            title="Toggle Ambient Tanpura Soundscape"
          >
            {isAudioActive ? <Volume2 size={14} /> : <VolumeX size={14} />}
          </button>

          <button
            className="audio-btn"
            onClick={() => setIsInspectionOpen(true)}
            title="Magnified Inspection (100%-800%)"
          >
            <Eye size={14} />
          </button>

          <button
            className="gold-btn enter-gallery-btn"
            onClick={() => setIsCulturalChecklistOpen(true)}
          >
            <Sparkles size={13} /> ENTER EXHIBITION
          </button>

          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {isMobileMenuOpen && (
          <div className="mobile-nav-drawer">
            {STAGES.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleStageSelect(s.id);
                }}
              >
                {s.number} · {s.name}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* =========================================================================
          STAGE 01: CREATIVE ATELIER
          ========================================================================= */}
      {activeStage === "atelier" && (
        <main className="stage-content-view">
          {/* Active Mode Notice Banner */}
          <div className={`mode-indicator-bar ${interfaceMode}`}>
            {interfaceMode === "artist" ? (
              <span>
                <Palette size={14} /> <b>ARTIST CREATIVE STUDIO</b> — Select motifs from the dual shelves below, draw with authentic digital brushes, and compose your original fusion.
              </span>
            ) : (
              <span>
                <Search size={14} /> <b>SCHOLARLY CURATORIAL LAB</b> — Live telemetry radar, comparative 9D matrix, and viva defense protocol are active.
              </span>
            )}
          </div>

          {/* =====================================================================
              IF IN ARTIST MODE -> FULL INTERACTIVE CREATIVE STUDIO
              ===================================================================== */}
          {interfaceMode === "artist" ? (
            <div className="artist-studio-container">
              {/* Top Fusion Pair & Concept Bar */}
              <section className="fusion-setup-strip">
                <div className="tradition-pair-cards">
                  {/* Primary Tradition Card */}
                  <div className="tradition-source-box primary">
                    <span className="source-badge">TRADITION 1 (PRIMARY)</span>
                    <select
                      value={styleA.id}
                      onChange={(e) => handleSelectStyleA(STYLES.find((s) => s.id === e.target.value))}
                    >
                      {STYLES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.region})
                        </option>
                      ))}
                    </select>
                    <div className="source-swatches">
                      {styleA.colors.map((c, i) => (
                        <span key={i} className="swatch-dot" style={{ background: c }} />
                      ))}
                    </div>
                  </div>

                  {/* Fusion Symbol */}
                  <div className="fusion-cross-symbol">
                    <Sparkles size={16} color="#b38938" />
                    <span>SYNTHESIZE WITH</span>
                  </div>

                  {/* Secondary Tradition Card */}
                  <div className="tradition-source-box secondary">
                    <span className="source-badge">TRADITION 2 (SECONDARY)</span>
                    <select
                      value={styleB.id}
                      onChange={(e) => handleSelectStyleB(STYLES.find((s) => s.id === e.target.value))}
                    >
                      {STYLES.filter((s) => s.id !== styleA.id).map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.region})
                        </option>
                      ))}
                    </select>
                    <div className="source-swatches">
                      {styleB.colors.map((c, i) => (
                        <span key={i} className="swatch-dot" style={{ background: c }} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Concept & Ground Configuration */}
                <div className="concept-ground-config">
                  <div className="config-item">
                    <label>THEMATIC INQUIRY</label>
                    <select value={concept} onChange={(e) => setConcept(e.target.value)}>
                      {CONCEPTS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="config-item">
                    <label>SPATIAL BALANCE</label>
                    <select value={composition} onChange={(e) => setComposition(e.target.value)}>
                      {COMPOSITIONS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </section>

              {/* Quick Action Preset & Blank Canvas Bar */}
              <div className="atelier-quick-bar">
                <div className="preset-buttons-group">
                  <span className="bar-label">
                    <Wand2 size={13} /> CURATED FUSIONS:
                  </span>
                  {CURATED_PRESETS.map((p) => (
                    <button
                      key={p.id}
                      className={`preset-chip-btn ${activePresetId === p.id ? "active" : ""}`}
                      onClick={() => handleApplyPreset(p)}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>

                <div className="canvas-main-actions">
                  <button className="gold-btn random-btn" onClick={handleRandomSynthesis}>
                    <Shuffle size={12} /> RANDOM FUSION
                  </button>
                  <button className="tool-btn blank-btn" onClick={handleStartBlank} title="Clear canvas to create from scratch">
                    <Eraser size={12} /> START BLANK CANVAS
                  </button>
                </div>
              </div>

              {/* Project Manager Bar (Versions, Save, Load) */}
              <ProjectManager
                versions={versions}
                activeVersionId={activeVersionId}
                onSwitchVersion={handleSwitchVersion}
                onDuplicateVersion={handleDuplicateVersion}
                projectState={{
                  styleA: styleA.id,
                  styleB: styleB.id,
                  concept,
                  composition,
                  groundId,
                  artistName,
                  elements,
                  strokes,
                  versions,
                  milestones,
                  rationale,
                  artistStatement,
                  vivaAnswers
                }}
                onLoadProject={handleLoadProject}
                lastAutosavedTime={lastAutosaved}
              />

              {/* 3-Column Atelier Workspace */}
              <div className="atelier-main-workspace">
                {/* Left Column: Visual Motif Shelves with Direct Click-to-Add */}
                <ReferenceDock
                  styleA={styleA}
                  styleB={styleB}
                  onAddMotif={handleAddMotif}
                  onOpenFullCatalog={() => setIsCatalogOpen(true)}
                />

                {/* Center Column: Interactive Physical Canvas & Brush Engine */}
                <div className="atelier-center-column">
                  {/* Mode Switch Bar: Transform vs Digital Brushes */}
                  <div className="canvas-interaction-bar">
                    <div className="interaction-mode-pills">
                      <button
                        className={`int-pill ${canvasMode === "select" ? "active" : ""}`}
                        onClick={() => setCanvasMode("select")}
                      >
                        <Move size={12} /> SELECT & TRANSFORM
                      </button>
                      <button
                        className={`int-pill ${canvasMode === "brush" ? "active" : ""}`}
                        onClick={() => setCanvasMode("brush")}
                      >
                        <Brush size={12} /> TRADITIONAL BRUSHES
                      </button>
                    </div>

                    <div className="canvas-quick-tools">
                      <button className="tool-btn" onClick={() => setIsCatalogOpen(true)} title="Master 40+ Motif Catalog">
                        <Sparkles size={12} color="#b38938" /> <b>CATALOG</b>
                      </button>
                      <button className="tool-btn" onClick={() => setIsInspectionOpen(true)} title="Magnified Inspection (Space)">
                        <Eye size={12} /> INSPECT
                      </button>
                      <button className="tool-btn" onClick={() => setIsRationaleOpen(true)} title="Why This Fusion? Rationale">
                        <Compass size={12} /> RATIONALE
                      </button>
                    </div>
                  </div>

                  {/* If Brush Mode is active, show Traditional Brushes Toolbox */}
                  {canvasMode === "brush" && (
                    <BrushToolbox
                      activeBrush={activeBrush}
                      setActiveBrush={setActiveBrush}
                      strokeColor={strokeColor}
                      setStrokeColor={setStrokeColor}
                      strokeWidth={strokeWidth}
                      setStrokeWidth={setStrokeWidth}
                      strokeOpacity={strokeOpacity}
                      setStrokeOpacity={setStrokeOpacity}
                      colorPalette={[...styleA.colors, ...styleB.colors]}
                      onClearStrokes={() => {
                        setStrokes([]);
                        recordMilestone("Cleared brush strokes");
                      }}
                      strokeCount={strokes.length}
                    />
                  )}

                  {/* Interactive Canvas Mounted on Physical Wood & Linen Easel */}
                  <Canvas
                    elements={elements}
                    setElements={setElements}
                    strokes={strokes}
                    setStrokes={setStrokes}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    groundId={groundId}
                    setGroundId={setGroundId}
                    mode={canvasMode}
                    setMode={setCanvasMode}
                    activeBrush={activeBrush}
                    setActiveBrush={setActiveBrush}
                    strokeColor={strokeColor}
                    setStrokeColor={setStrokeColor}
                    strokeWidth={strokeWidth}
                    setStrokeWidth={setStrokeWidth}
                    strokeOpacity={strokeOpacity}
                    setStrokeOpacity={setStrokeOpacity}
                    isolationFilter={isolationFilter}
                    onRecordMilestone={recordMilestone}
                    svgRef={svgRef}
                    onOpenFullCatalog={() => setIsCatalogOpen(true)}
                    styleA={styleA}
                    styleB={styleB}
                  />

                  {/* Creation History Time Machine Replay */}
                  <TimeMachine
                    milestones={milestones}
                    elements={elements}
                    strokes={strokes}
                    onReplayStep={(step) => {
                      setElements(elements.map((el, i) => ({ ...el, visible: i < step })));
                    }}
                  />
                </div>

                {/* Right Column: Non-Destructive Layers Panel */}
                <div className="atelier-right-column">
                  <LayersPanel
                    elements={elements}
                    setElements={setElements}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    onRecordMilestone={recordMilestone}
                  />

                  {/* Quick Color Palette Deck */}
                  <div className="quick-palette-card">
                    <div className="palette-card-head">
                      <span className="card-kicker">AUTHENTIC MINERAL PIGMENTS</span>
                      <b>{styleA.name} + {styleB.name}</b>
                    </div>
                    <div className="palette-bubbles-grid">
                      {[...styleA.colors, ...styleB.colors].map((c, i) => (
                        <button
                          key={i}
                          className={`pigment-bubble ${strokeColor === c ? "active" : ""}`}
                          style={{ background: c }}
                          onClick={() => {
                            setStrokeColor(c);
                            if (selectedId) {
                              setElements((prev) =>
                                prev.map((el) => (el.id === selectedId ? { ...el, color: c } : el))
                              );
                            }
                          }}
                          title={`Select color ${c}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* =====================================================================
               IF IN CURATOR MODE -> FULL SCHOLARLY CURATORIAL SUITE
               ===================================================================== */
            <div className="curator-suite-container">
              <div className="curator-suite-grid">
                {/* Left: Scholarly Lineage & Provenance */}
                <div className="curator-col-left">
                  <div className="curator-card">
                    <div className="card-top">
                      <BookOpen size={14} color="#b38938" />
                      <span>SCHOLARLY LINEAGE & SOURCES</span>
                    </div>

                    <div className="tradition-provenance-entry">
                      <h3>{styleA.name.toUpperCase()}</h3>
                      <div className="prov-row"><b>Community:</b> {styleA.community}</div>
                      <div className="prov-row"><b>Geographic Center:</b> {styleA.region}</div>
                      <div className="prov-row"><b>Historical Period:</b> {styleA.period}</div>
                      <div className="prov-row"><b>Visual Grammar:</b> {styleA.grammar}</div>
                      <div className="prov-sources">
                        <label>DOCUMENTED ARCHIVES:</label>
                        <ul>
                          {styleA.sources.map((s, idx) => (
                            <li key={idx}><b>{s.name}</b> · {s.ref}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="tradition-provenance-entry">
                      <h3>{styleB.name.toUpperCase()}</h3>
                      <div className="prov-row"><b>Community:</b> {styleB.community}</div>
                      <div className="prov-row"><b>Geographic Center:</b> {styleB.region}</div>
                      <div className="prov-row"><b>Historical Period:</b> {styleB.period}</div>
                      <div className="prov-row"><b>Visual Grammar:</b> {styleB.grammar}</div>
                      <div className="prov-sources">
                        <label>DOCUMENTED ARCHIVES:</label>
                        <ul>
                          {styleB.sources.map((s, idx) => (
                            <li key={idx}><b>{s.name}</b> · {s.ref}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center: Live Artwork View with Telemetry Gauges */}
                <div className="curator-col-center">
                  <div className="curator-card artwork-inspection-mount">
                    <div className="card-top">
                      <Eye size={14} color="#b38938" />
                      <span>CURRENT ARTWORK SYNTHESIS INSPECTION</span>
                    </div>

                    <div className="curator-canvas-mount">
                      {svgRef.current ? (
                        <div
                          className="mounted-curator-svg"
                          dangerouslySetInnerHTML={{ __html: svgRef.current.outerHTML }}
                        />
                      ) : (
                        <div className="empty-mount">Artwork Render</div>
                      )}
                    </div>

                    <div className="curator-quick-links">
                      <button className="gold-btn" onClick={() => setIsVivaOpen(true)}>
                        <Award size={13} /> LAUNCH ORAL VIVA DEFENSE
                      </button>
                      <button className="outline-btn" onClick={() => setIsCulturalChecklistOpen(true)}>
                        <ShieldCheck size={13} /> CULTURAL SAFEGUARDS PROTOCOL
                      </button>
                      <button className="outline-btn" onClick={() => handleStageSelect("dossier")}>
                        <FileText size={13} /> VIEW FULL DOSSIER
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right: Curatorial Telemetry Radar & Critique */}
                <div className="curator-col-right">
                  <CuratorPanel
                    styleA={styleA}
                    styleB={styleB}
                    concept={concept}
                    composition={composition}
                    score={currentScore}
                    elements={elements}
                    strokes={strokes}
                  />
                </div>
              </div>
            </div>
          )}
        </main>
      )}

      {/* =========================================================================
          STAGE 02: COMPARATIVE MICROSCOPE
          ========================================================================= */}
      {activeStage === "microscope" && (
        <main className="stage-content-view">
          <ComparativeMicroscope
            styleA={styleA}
            styleB={styleB}
            onSelectStyleA={handleSelectStyleA}
            onSelectStyleB={handleSelectStyleB}
            allStyles={STYLES}
          />
        </main>
      )}

      {/* =========================================================================
          STAGE 03: REGIONAL ATLAS & CHRONO-TIMELINE
          ========================================================================= */}
      {activeStage === "atlas" && (
        <main className="stage-content-view">
          <Atlas
            activeStyle={styleA}
            onSelectTradition={handleSelectStyleA}
            onJumpToAtelier={() => handleStageSelect("atelier")}
          />
          <Timeline onSelectEra={(era) => recordMilestone(`Explored Era: ${era.name}`)} />
        </main>
      )}

      {/* =========================================================================
          STAGE 04: CURATOR CERTIFICATION EXAM
          ========================================================================= */}
      {activeStage === "quiz" && (
        <main className="stage-content-view">
          <Quiz studentName={artistName} />
        </main>
      )}

      {/* =========================================================================
          STAGE 05: OFFICIAL EXHIBITION DOSSIER & CATALOGUE
          ========================================================================= */}
      {activeStage === "dossier" && (
        <main className="stage-content-view">
          <ExhibitionDossier
            svgElement={svgRef.current}
            styleA={styleA}
            styleB={styleB}
            concept={concept}
            composition={composition}
            groundId={groundId}
            artistStatement={artistStatement}
            setArtistStatement={setArtistStatement}
            artistName={artistName}
            rationale={rationale}
            score={currentScore}
            vivaAnswers={vivaAnswers}
          />
        </main>
      )}

      {/* MODALS */}
      {/* 1. "Why This Fusion?" Design Rationale Modal */}
      <RationaleModal
        isOpen={isRationaleOpen}
        onClose={() => setIsRationaleOpen(false)}
        styleA={styleA}
        styleB={styleB}
        rationale={rationale}
        setRationale={setRationale}
      />

      {/* 2. Fullscreen Black Gallery Museum Exhibition */}
      <MuseumExhibition
        isOpen={isExhibitionOpen}
        onClose={() => setIsExhibitionOpen(false)}
        svgElement={svgRef.current}
        metadata={{ title: concept }}
        styleA={styleA}
        styleB={styleB}
        concept={concept}
        groundId={groundId}
        artistName={artistName}
        onOpenDossier={() => {
          setIsExhibitionOpen(false);
          handleStageSelect("dossier");
        }}
      />

      {/* 3. Microscopic Inspection Modal (100%-800% Zoom & Layer Isolation) */}
      <InspectionModal
        isOpen={isInspectionOpen}
        onClose={() => setIsInspectionOpen(false)}
        svgElement={svgRef.current}
        styleA={styleA}
        styleB={styleB}
        isolationFilter={isolationFilter}
        setIsolationFilter={setIsolationFilter}
      />

      {/* 4. Academic Viva & Presentation Defense Modal */}
      <VivaDefenseModal
        isOpen={isVivaOpen}
        onClose={() => setIsVivaOpen(false)}
        styleA={styleA}
        styleB={styleB}
        concept={concept}
        composition={composition}
        groundId={groundId}
        artistName={artistName}
        vivaAnswers={vivaAnswers}
        setVivaAnswers={setVivaAnswers}
      />

      {/* 5. Cultural Responsibility Pre-Exhibition Verification */}
      <CulturalChecklistModal
        isOpen={isCulturalChecklistOpen}
        onClose={() => setIsCulturalChecklistOpen(false)}
        onProceedToExhibition={() => setIsExhibitionOpen(true)}
      />

      {/* 6. Comprehensive 40+ Master Motif & Shape Catalog */}
      <MotifCatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        onAddMotif={handleAddMotif}
        currentStyleA={styleA}
        currentStyleB={styleB}
      />

      {/* FOOTER */}
      <footer className="main-footer">
        <div className="footer-left">
          <b>SYNTHESIS</b>
          <span>REGIONAL PAINTING FUSION · DIGITAL HUMANITIES ATELIER</span>
        </div>
        <div className="footer-center">
          <span>CO1 CREATIVE SYNTHESIS & RIGOROUS DOCUMENTATION</span>
        </div>
        <div className="footer-right">
          <span>© 2026 NATIONAL GALLERY OF SYNTHETIC ARTS</span>
        </div>
      </footer>
    </div>
  );
}
