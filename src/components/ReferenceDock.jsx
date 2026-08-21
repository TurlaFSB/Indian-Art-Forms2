import React, { useState } from "react";
import {
  BookOpen,
  Plus,
  Info,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Search,
  Grid,
  Filter,
  Maximize2
} from "lucide-react";
import { MOTIF_STUDIES } from "../data/motifs";
import { STYLES } from "../data/content";

export default function ReferenceDock({
  styleA,
  styleB,
  onAddMotif,
  onOpenFullCatalog
}) {
  const [selectedProvenance, setSelectedProvenance] = useState(null);
  const [activeTab, setActiveTab] = useState("paired"); // 'paired' | 'styleA' | 'styleB' | 'all'
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter motifs based on tab, category, and search query
  const getMotifsForDisplay = () => {
    let list = [];
    if (activeTab === "styleA") {
      list = MOTIF_STUDIES.filter((m) => m.tradition === styleA.id);
    } else if (activeTab === "styleB") {
      list = MOTIF_STUDIES.filter((m) => m.tradition === styleB.id);
    } else if (activeTab === "paired") {
      list = MOTIF_STUDIES.filter((m) => m.tradition === styleA.id || m.tradition === styleB.id);
    } else {
      list = MOTIF_STUDIES;
    }

    if (categoryFilter !== "all") {
      list = list.filter((m) => m.category === categoryFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.traditionName.toLowerCase().includes(q) ||
          m.category.toLowerCase().includes(q) ||
          m.visualPrinciple.toLowerCase().includes(q)
      );
    }

    return list;
  };

  const displayedMotifs = getMotifsForDisplay();

  const handleQuickAdd = (motif) => {
    const isA = motif.tradition === styleA.id;
    const styleObj = isA ? styleA : STYLES.find((s) => s.id === motif.tradition) || styleB;
    const fallbackColor = styleObj ? styleObj.colors[1] : "#1b1712";

    onAddMotif({
      motifId: motif.id,
      name: `${motif.traditionName} ${motif.name}`,
      source: motif.traditionName,
      category: motif.category,
      materialAssociation: styleObj?.materials?.[0] || "Natural Mineral Pigment",
      color: fallbackColor,
      s: motif.defaultScale || 45
    });
  };

  return (
    <aside className="reference-dock">
      {/* Dock Header */}
      <div className="dock-head">
        <div className="dock-title">
          <BookOpen size={13} />
          <span>MOTIF &amp; SHAPE SHELVES</span>
        </div>
        <span className="dock-sub">{displayedMotifs.length} AVAILABLE</span>
      </div>

      {/* Full Catalog Trigger Banner */}
      <button
        className="full-catalog-trigger-btn"
        onClick={onOpenFullCatalog}
        title="Open Full Screen Master Motif Catalog"
      >
        <Sparkles size={13} color="#b38938" />
        <b>EXPLORE MASTER CATALOG (40+ MOTIFS)</b>
        <Maximize2 size={11} />
      </button>

      {/* Tradition Shelf Tabs */}
      <div className="shelf-tabs-row">
        <button
          className={`shelf-tab-btn ${activeTab === "paired" ? "active" : ""}`}
          onClick={() => setActiveTab("paired")}
          title="Show paired traditions"
        >
          DUAL FUSION ({styleA.name.slice(0, 5)} + {styleB.name.slice(0, 5)})
        </button>
        <button
          className={`shelf-tab-btn ${activeTab === "styleA" ? "active" : ""}`}
          onClick={() => setActiveTab("styleA")}
        >
          {styleA.name.toUpperCase()}
        </button>
        <button
          className={`shelf-tab-btn ${activeTab === "styleB" ? "active" : ""}`}
          onClick={() => setActiveTab("styleB")}
        >
          {styleB.name.toUpperCase()}
        </button>
        <button
          className={`shelf-tab-btn ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
          title="Browse all 8 regional traditions"
        >
          ALL 8 STYLES
        </button>
      </div>

      {/* Search Bar */}
      <div className="motif-search-bar">
        <Search size={12} className="search-icon" />
        <input
          type="text"
          placeholder="Filter motifs (lotus, dancer, deer, arch...)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button className="clear-search" onClick={() => setSearchQuery("")}>
            ✕
          </button>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="motif-filter-tabs">
        {["all", "structural", "botanical", "figure", "symbol"].map((cat) => (
          <button
            key={cat}
            className={`filter-pill ${categoryFilter === cat ? "active" : ""}`}
            onClick={() => setCategoryFilter(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Motifs Cards Grid */}
      <div className="motif-cards-container">
        {displayedMotifs.map((motif) => {
          const isA = motif.tradition === styleA.id;
          const traditionObj = isA ? styleA : STYLES.find((s) => s.id === motif.tradition) || styleB;
          const motifColor = traditionObj?.colors?.[1] || "#1c1814";

          return (
            <div key={motif.id} className="motif-card">
              {/* Vector Preview with Click-to-Add */}
              <div
                className="motif-preview-box"
                onClick={() => handleQuickAdd(motif)}
                title="Click to place on canvas"
              >
                <svg viewBox="-50 -50 100 100" className="preview-svg">
                  {motif.render(motifColor, 1)}
                </svg>
                <div className="add-overlay">
                  <Plus size={18} />
                  <span>ADD TO WORK</span>
                </div>
              </div>

              {/* Information & Actions */}
              <div className="motif-card-info">
                <div className="motif-card-head">
                  <span className="tradition-badge">{motif.traditionName}</span>
                  <button
                    className="provenance-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProvenance(motif);
                    }}
                    title="View historical sources and visual grammar principles"
                  >
                    <Info size={11} /> CONTEXT
                  </button>
                </div>
                <b>{motif.name}</b>
                <p className="principle-snip">{motif.visualPrinciple}</p>

                <button className="direct-add-btn" onClick={() => handleQuickAdd(motif)}>
                  <Plus size={12} /> ADD MOTIF TO CANVAS
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Educational Provenance Modal */}
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
                handleQuickAdd(selectedProvenance);
                setSelectedProvenance(null);
              }}
            >
              <Plus size={13} /> ADD STUDY TO ATELIER
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
