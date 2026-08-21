import React, { useState } from "react";
import {
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ChevronRight,
  Printer,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { QUESTIONS } from "../data/content";

export default function Quiz({ studentName = "Pranav Verma" }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [customName, setCustomName] = useState(studentName);

  const q = QUESTIONS[currentIdx];

  const handleSelect = (idx) => {
    setSelectedOpt(idx);
    if (idx === q.ans) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx === QUESTIONS.length - 1) {
      setIsCompleted(true);
    } else {
      setCurrentIdx((i) => i + 1);
      setSelectedOpt(null);
    }
  };

  const handleRetake = () => {
    setCurrentIdx(0);
    setScore(0);
    setSelectedOpt(null);
    setIsCompleted(false);
  };

  if (isCompleted) {
    const isMaster = score >= 6;
    return (
      <section className="quiz-section completed-view" id="quiz">
        <div className="certificate-wrapper">
          <div className="museum-certificate-card">
            <div className="cert-border">
              <div className="cert-inner-frame">
                {/* Institutional Seal */}
                <div className="cert-seal-top">
                  <ShieldCheck size={36} color="#c9a96c" />
                  <h3>NATIONAL GALLERY OF DIGITAL HUMANITIES</h3>
                  <small>CURATORIAL CERTIFICATION IN INDIAN VISUAL TRADITIONS</small>
                </div>

                <div className="cert-body">
                  <p className="cert-preamble">This is to certify that</p>
                  <input
                    type="text"
                    className="cert-student-name"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="Enter Your Name"
                  />
                  <p className="cert-text">
                    has demonstrated academic rigor in the analysis, material ontology, and responsible creative synthesis of regional Indian painting traditions.
                  </p>

                  <div className="cert-score-box">
                    <span className="cert-status-badge">
                      {isMaster ? "MASTER CURATOR OF SYNTHESIS" : "CURATORIAL SCHOLAR"}
                    </span>
                    <b>
                      SCORE: {score} / {QUESTIONS.length}
                    </b>
                  </div>
                </div>

                {/* Signatures & Seal */}
                <div className="cert-footer">
                  <div className="cert-sig">
                    <div className="sig-line">Dr. Y. Dalmia / J. Jain</div>
                    <small>Faculty Reviewer</small>
                  </div>
                  <div className="cert-center-stamp">
                    <div className="stamp-circle">
                      <Sparkles size={16} />
                      <span>OFFICIAL 2026</span>
                    </div>
                  </div>
                  <div className="cert-sig">
                    <div className="sig-line">{new Date().toLocaleDateString()}</div>
                    <small>Date of Certification</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cert-actions">
            <button className="gold-btn" onClick={() => window.print()}>
              <Printer size={13} /> PRINT CERTIFICATE
            </button>
            <button className="outline-btn" onClick={handleRetake}>
              <RotateCcw size={13} /> RETAKE ASSESSMENT
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="quiz-section" id="quiz">
      <div className="section-head">
        <div>
          <div className="kicker">
            <Award size={13} /> CURATOR CERTIFICATION EXAM
          </div>
          <h2>
            Curatorial<br />
            <em>Reasoning.</em>
          </h2>
        </div>
        <p>
          Demonstrate your understanding of visual grammar, material physics, and cultural responsibility to earn your official Curator Certification.
        </p>
      </div>

      <div className="quiz-stage-container">
        {/* Progress Bar */}
        <div className="quiz-progress-bar">
          <span className="progress-label">
            QUESTION {currentIdx + 1} OF {QUESTIONS.length}
          </span>
          <div className="bar-track">
            <i style={{ width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%` }} />
          </div>
        </div>

        {/* Active Question */}
        <div className="question-card">
          <h3>{q.q}</h3>

          <div className="quiz-options-grid">
            {q.opts.map((opt, idx) => {
              let optClass = "quiz-opt-btn";
              if (selectedOpt !== null) {
                if (idx === q.ans) optClass += " correct";
                else if (selectedOpt === idx) optClass += " wrong";
              }

              return (
                <button
                  key={idx}
                  className={optClass}
                  disabled={selectedOpt !== null}
                  onClick={() => handleSelect(idx)}
                >
                  <span className="opt-letter">{String.fromCharCode(65 + idx)}</span>
                  <span className="opt-text">{opt}</span>
                  {selectedOpt !== null && idx === q.ans && (
                    <CheckCircle2 size={16} className="status-icon correct" />
                  )}
                  {selectedOpt === idx && idx !== q.ans && (
                    <XCircle size={16} className="status-icon wrong" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Feedback */}
          {selectedOpt !== null && (
            <div className="quiz-feedback-drawer">
              <div className="feedback-status">
                {selectedOpt === q.ans ? (
                  <b className="correct-text">✓ Correct Curatorial Reasoning</b>
                ) : (
                  <b className="wrong-text">✕ Review Curatorial Principle</b>
                )}
              </div>
              <p>{q.exp}</p>
              <button className="gold-btn continue-btn" onClick={handleNext}>
                {currentIdx === QUESTIONS.length - 1 ? "FINALIZE & VIEW CERTIFICATE" : "NEXT QUESTION"}{" "}
                <ChevronRight size={13} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
