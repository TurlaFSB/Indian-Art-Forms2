import React, { useState } from "react";
import {
  Search,
  BookOpen,
  Plus,
  Info,
  Sparkles,
  ShieldCheck,
  Grid,
  Filter,
  Layers,
  X,
  Check
} from "lucide-react";
import { MOTIF_STUDIES } from "../data/motifs";
import { STYLES } from "../data/content";

export default function MotifCatalogModal({
  isOpen,
  onClose,
  onAddMotif,
  currentStyleA,
  currentStyleB
}) {
  const [selectedTradition, setSelectedTradition] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProvenance, setSelectedProvenance] = useState(null);

  if (!isOpen) return null;

  // Filter motifs based on tradition, category, and search query
  const filteredMotifs = MOTIF_STUDIES.filter((m) => {
    const matchTradition = selectedTradition === "all" || m.tradition === selectedTradition;
    const matchCategory = selectedCategory === "all" || m.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch =
      !q ||
      m.name.toLowerCase().includes(q) ||
      m.traditionName.toLowerCase().includes(q) ||
      m.category.toLowerCase().includes(q) ||
      m.visualPrinciple.toLowerCase().includes(q);

    return matchTradition && matchCategory && matchSearch;
  });

  const handleSelectMotif = (motif) => {
    const traditionObj = STYLES.find((s) => s.id === motif.tradition) || currentStyleA;
    const color = traditionObj?.colors?.[1] || "#1b1712";

    onAddMotif({
      motifId: motif.id,
      name: `${motif.traditionName} ${motif.name}`,
      source: motif.traditionName,
      category: motif.category,
      materialAssociation: traditionObj?.materials?.[0] || "Natural Mineral Pigment",
      color: color,
      s: motif.defaultScale || 45
    });
    onClose();
  };

  return (
    <div className="catalog-modal-overlay" onClick={onClose}>
      <div className="catalog-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Header */}
        <div className="catalog-modal-header">
          <div className="catalog-title-area">
            <div className="kicker">
              <Sparkles size={13} color="#b38938" />
              <span>DIGITAL HUMANITIES MASTER ARCHIVE</span>
            </div>
            <h2>
              Comprehensive Motif &amp; Visual Grammar Catalog
            </h2>
            <p>
              Choose from over 40 authenticated vector motifs across all 8 Indian painting traditions. Click any motif to insert it directly onto your synthesis canvas.
            </p>
          </div>

          <button className="catalog-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="catalog-filters-strip">
          {/* Tradition Filter Tabs */}
          <div className="catalog-tradition-pills">
            <button
              className={`cat-pill ${selectedTradition === "all" ? "active" : ""}`}
              onClick={() => setSelectedTradition("all")}
            >
              ALL 8 TRADITIONS ({MOTIF_STUDIES.length})
            </button>
            {STYLES.map((s) => {
              const count = MOTIF_STUDIES.filter((m) => m.tradition === s.id).length;
              return (
                <button
                  key={s.id}
                  className={`cat-pill ${selectedTradition === s.id ? "active" : ""}`}
                  onClick={() => setSelectedTradition(s.id)}
                >
                  <span className="pill-dot" style={{ background: s.colors[1] }} />
                  {s.name} ({count})
                </button>
              );
            })}
          </div>

          {/* Category Filter Pills & Search */}
          <div className="catalog-secondary-row">
            <div className="category-pills-group">
              {[
                { id: "all", label: "ALL CATEGORIES" },
                { id: "figure", label: "FIGURES & DANCERS" },
                { id: "botanical", label: "FLORA & TREES" },
                { id: "symbol", label: "FAUNA & SYMBOLS" },
                { id: "structural", label: "SACRED GEOMETRY" }
              ].map((c) => (
                <button
                  key={c.id}
                  className={`sub-cat-pill ${selectedCategory === c.id ? "active" : ""}`}
                  onClick={() => setSelectedCategory(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="catalog-search-input">
              <Search size={14} className="cat-search-icon" />
              <input
                type="text"
                placeholder="Search by name, motif, or principle (e.g. Lotus, Tarpa, Peacock)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="clear-cat-search" onClick={() => setSearchQuery("")}>
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Motifs Grid */}
        <div className="catalog-motifs-grid">
          {filteredMotifs.map((motif) => {
            const traditionObj = STYLES.find((s) => s.id === motif.tradition);
            const motifColor = traditionObj?.colors?.[1] || "#1c1814";

            return (
              <div key={motif.id} className="catalog-motif-card">
                {/* SVG Vector Preview */}
                <div
                  className="catalog-card-preview"
                  onClick={() => handleSelectMotif(motif)}
                  title="Click to insert onto canvas"
                >
                  <svg viewBox="-50 -50 100 100" className="cat-preview-svg">
                    {motif.render(motifColor, 1)}
                  </svg>
                  <div className="hover-add-badge">
                    <Plus size={16} />
                    <span>INSERT ON CANVAS</span>
                  </div>
                </div>

                {/* Card Meta & Details */}
                <div className="catalog-card-body">
                  <div className="card-top-row">
                    <span className="trad-label" style={{ color: motifColor }}>
                      {motif.traditionName}
                    </span>
                    <span className="cat-tag">{motif.category.toUpperCase()}</span>
                  </div>

                  <h4>{motif.name}</h4>
                  <p className="principle-text">{motif.visualPrinciple}</p>

                  <div className="card-actions-row">
                    <button
                      className="provenance-link"
                      onClick={() => setSelectedProvenance(motif)}
                    >
                      <Info size={11} /> SCHOLARLY CONTEXT
                    </button>
                    <button
                      className="gold-btn insert-btn"
                      onClick={() => handleSelectMotif(motif)}
                    >
                      <Plus size={12} /> INSERT
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scholarly Provenance Flyout Modal */}
        {selectedProvenance && (
          <div className="provenance-modal-overlay" onClick={() => setSelectedProvenance(null)}>
            <div className="provenance-modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-top">
                <span className="modal-tag">CURATED DIGITAL MOTIF STUDY</span>
                <button className="modal-close" onClick={() => setSelectedProvenance(null)}>
                  ✕
                </button>
              </div>

              <h3>{selectedProvenance.name}</h3>
              <div className="provenance-sub">
                TRADITION: <b>{selectedProvenance.traditionName}</b> · CATEGORY: <b>{selectedProvenance.category.toUpperCase()}</b>
              </div>

              <div className="provenance-field">
                <label>DOCUMENTED VISUAL PRINCIPLE</label>
                <p>{selectedProvenance.visualPrinciple}</p>
              </div>

              <div className="provenance-field">
                <label>TRADITIONAL CULTURAL CONTEXT</label>
                <p>{selectedProvenance.traditionalContext}</p>
              </div>

              <div className="provenance-field highlight">
                <label>
                  <ShieldCheck size={12} /> DIGITAL INTERPRETATION NOTICE
                </label>
                <p>{selectedProvenance.interpretation}</p>
              </div>

              <div className="provenance-field sources">
                <label>ACADEMIC & MUSEUM SOURCES</label>
                <p>{selectedProvenance.sources}</p>
              </div>

              <button
                className="gold-btn modal-add-btn"
                onClick={() => {
                  handleSelectMotif(selectedProvenance);
                  setSelectedProvenance(null);
                }}
              >
                <Plus size={13} /> INSERT THIS MOTIF ONTO CANVAS
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
