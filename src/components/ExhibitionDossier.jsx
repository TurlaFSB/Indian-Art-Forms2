import React from "react";
import {
  Download,
  Printer,
  BookOpen,
  Sparkles,
  ShieldCheck,
  Award,
  Layers,
  Calendar,
  Compass,
  FileText
} from "lucide-react";
import { generateExhibitionQR, exportArtworkAsPNG } from "../utils/exportHelper";
import { RUBRIC } from "../data/content";

export default function ExhibitionDossier({
  svgElement,
  styleA,
  styleB,
  concept,
  composition,
  groundId,
  artistStatement,
  setArtistStatement,
  artistName = "Pranav Verma",
  rationale = {},
  score = {},
  vivaAnswers = {}
}) {
  return (
    <section className="exhibition-dossier-section" id="dossier">
      <div className="section-head">
        <div>
          <div className="kicker">
            <BookOpen size={13} /> OFFICIAL EXHIBITION DOSSIER
          </div>
          <h2>
            From Studio to<br />
            <em>Curatorial Catalogue.</em>
          </h2>
        </div>
        <div className="dossier-actions-top">
          <button className="outline-btn" onClick={() => window.print()}>
            <Printer size={13} /> PRINT / EXPORT DOSSIER (PDF)
          </button>
          <button
            className="gold-btn"
            onClick={() =>
              exportArtworkAsPNG(svgElement, {
                title: "COMMUNITY SYNTHESIS",
                styleA: styleA.name,
                styleB: styleB.name,
                concept,
                artist: artistName,
                year: "2026"
              })
            }
          >
            <Download size={13} /> EXPORT FRAMED (PNG)
          </button>
        </div>
      </div>

      {/* CATALOGUE RECORD CONTAINER */}
      <div className="catalogue-record-sheet">
        {/* Top Institutional Header */}
        <div className="catalogue-header">
          <div>
            <h3>NATIONAL GALLERY OF DIGITAL HUMANITIES</h3>
            <p>REGIONAL PAINTING FUSION CURATORIAL ARCHIVE · CO1 SUBMISSION</p>
          </div>
          <div className="archive-ref-box">
            <span>CATALOGUE ENTRY #</span>
            <b>SYN-2026-{styleA.id.toUpperCase()}-{styleB.id.toUpperCase()}</b>
          </div>
        </div>

        {/* Mounted Artwork View */}
        <div className="dossier-artwork-mount">
          <div className="mount-frame">
            {svgElement ? (
              <div
                className="mount-svg"
                dangerouslySetInnerHTML={{ __html: svgElement.outerHTML }}
              />
            ) : (
              <div className="artwork-placeholder">Artwork View</div>
            )}
          </div>

          <div className="dossier-plaque-strip">
            <div>
              <b>{concept.toUpperCase()} — {styleA.name.toUpperCase()} × {styleB.name.toUpperCase()}</b>
              <small>Artist: {artistName} · Year: 2026 · Format: Digital Mixed-Media Synthesis</small>
            </div>
            <span>EXHIBITION COPY</span>
          </div>
        </div>

        {/* Structured Exhibition Metadata Table */}
        <div className="catalogue-meta-grid">
          <div className="meta-cell">
            <label>PROJECT TITLE</label>
            <b>{concept}</b>
          </div>
          <div className="meta-cell">
            <label>CREATIVE ARTIST / CURATOR</label>
            <b>{artistName}</b>
          </div>
          <div className="meta-cell">
            <label>SOURCE TRADITIONS</label>
            <b>{styleA.name} ({styleA.region}) × {styleB.name} ({styleB.region})</b>
          </div>
          <div className="meta-cell">
            <label>SPATIAL COMPOSITION</label>
            <b>{composition}</b>
          </div>
          <div className="meta-cell">
            <label>MATERIAL GROUND</label>
            <b>{groundId.toUpperCase()} (Textile / Earthen Simulation)</b>
          </div>
          <div className="meta-cell">
            <label>TECHNIQUE & MEDIUM</label>
            <b>Curated Vector Studies & Freehand Traditional Brushwork</b>
          </div>
        </div>

        {/* Artist Statement Section */}
        <div className="dossier-statement-box">
          <div className="box-title">
            <FileText size={13} />
            <span>ARTIST STATEMENT & DESIGN RATIONALE</span>
          </div>
          <textarea
            className="dossier-statement-input"
            rows={5}
            value={
              artistStatement ||
              `My synthesis artwork combines the visual grammars of ${styleA.name} and ${styleB.name} around the concept of '${concept}'. I utilized ${styleA.name}'s structural geometry as a foundational spatial framework while transforming ${styleB.name}'s calligraphic botanical motifs into dynamic internal foliage and framing borders. The simulated ${groundId} support grounds the mineral and plant pigment palette, establishing an authentic dialogue between tribal brevity and textile ornamentation.`
            }
            onChange={(e) => setArtistStatement(e.target.value)}
          />
        </div>

        {/* "Why This Fusion?" Intent Notes */}
        {rationale.whySelected && (
          <div className="dossier-rationale-summary">
            <h4>RESEARCH & SYNTHESIS INTENT</h4>
            <p>
              <b>Rationale:</b> {rationale.whySelected}
            </p>
            <p>
              <b>Investigation:</b> {rationale.investigation}
            </p>
            <p>
              <b>Strategy:</b> {rationale.strategy}
            </p>
          </div>
        )}

        {/* Sources & Citations Table */}
        <div className="dossier-sources-section">
          <h4>DOCUMENTED SOURCES & CITATIONS</h4>
          <div className="sources-table">
            <div className="source-col">
              <b>{styleA.name} Lineage Sources:</b>
              <ul>
                {styleA.sources.map((s, i) => (
                  <li key={i}>
                    <span>{s.name}</span> — <small>{s.ref}</small>
                  </li>
                ))}
              </ul>
            </div>
            <div className="source-col">
              <b>{styleB.name} Lineage Sources:</b>
              <ul>
                {styleB.sources.map((s, i) => (
                  <li key={i}>
                    <span>{s.name}</span> — <small>{s.ref}</small>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Academic Rubric Evaluation Matrix */}
        <div className="dossier-rubric-section">
          <h4>ACADEMIC EVALUATION RUBRIC (10 MARKS)</h4>
          <div className="rubric-table">
            {RUBRIC.map(([title, desc], idx) => (
              <div key={idx} className="rubric-item-row">
                <div className="rubric-criterion">
                  <span>0{idx + 1}</span>
                  <b>{title}</b>
                </div>
                <p>{desc}</p>
                <span className="rubric-mark">EXEMPLARY</span>
              </div>
            ))}
          </div>
        </div>

        {/* Exhibition QR & Verification Card */}
        <div className="dossier-qr-card">
          <div className="qr-box">
            {generateExhibitionQR(`SYNTHESIS-${styleA.id}-${styleB.id}-2026`)}
          </div>
          <div className="qr-details">
            <h4>EXHIBITION ACCESSION CARD</h4>
            <p>
              This verified digital dossier certifies completion of the Regional Painting Fusion curatorial curriculum.
            </p>
            <small>Scan QR code for digital provenance verification</small>
          </div>
          <div className="institution-seal">
            <ShieldCheck size={28} color="#c9a96c" />
            <span>CURATORIALLY CERTIFIED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
