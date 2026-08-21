import React, { useState, useEffect } from "react";
import {
  History,
  Play,
  Pause,
  RotateCcw,
  FastForward,
  CheckCircle2,
  Clock
} from "lucide-react";

export const DEFAULT_MILESTONES = [
  { time: "10:21", action: "Initialized dual-tradition composition study" },
  { time: "10:24", action: "Set structural geometric ground enclosure" },
  { time: "10:27", action: "Introduced botanical vine foliage vectors" },
  { time: "10:31", action: "Configured unbleached Khadi cloth material ground" },
  { time: "10:35", action: "Applied freehand traditional brushwork detailing" },
  { time: "10:39", action: "Adjusted focal hierarchy & radial balance" },
  { time: "10:43", action: "Completed curatorial synthesis study" }
];

export default function TimeMachine({
  milestones = [],
  elements = [],
  strokes = [],
  onReplayStep
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(elements.length);

  const activeMilestones = milestones.length > 0 ? milestones : DEFAULT_MILESTONES;
  const totalSteps = Math.max(1, elements.length);

  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStep((step) => {
          if (step >= totalSteps) {
            setIsPlaying(false);
            return totalSteps;
          }
          const next = step + 1;
          if (onReplayStep) onReplayStep(next);
          return next;
        });
      }, 1400);
    }
    return () => clearInterval(timer);
  }, [isPlaying, totalSteps, onReplayStep]);

  const handleStartReplay = () => {
    setCurrentStep(1);
    if (onReplayStep) onReplayStep(1);
    setIsPlaying(true);
  };

  const handleStopReplay = () => {
    setIsPlaying(false);
    setCurrentStep(totalSteps);
    if (onReplayStep) onReplayStep(totalSteps);
  };

  return (
    <div className="time-machine-dock">
      <div className="dock-head">
        <div className="dock-title">
          <History size={13} />
          <span>CREATION TIMELINE</span>
        </div>
        <span className="live-telemetry-badge">PROVENANCE LOG</span>
      </div>

      {/* Replay Control Bar */}
      <div className="replay-controls-bar">
        {isPlaying ? (
          <button className="gold-btn replay-btn" onClick={() => setIsPlaying(false)}>
            <Pause size={12} /> PAUSE REPLAY
          </button>
        ) : (
          <button className="gold-btn replay-btn" onClick={handleStartReplay}>
            <Play size={12} /> REPLAY CREATION
          </button>
        )}

        <button className="reset-replay-btn" onClick={handleStopReplay} title="Jump to Final Artwork">
          <FastForward size={12} /> FINAL STATE
        </button>
      </div>

      {/* Replay Step Indicator Slider */}
      <div className="replay-scrubber">
        <div className="scrubber-label">
          <span>PROGRESSION</span>
          <b>
            STAGE {currentStep} / {totalSteps}
          </b>
        </div>
        <input
          type="range"
          min="1"
          max={totalSteps}
          value={currentStep}
          onChange={(e) => {
            const step = Number(e.target.value);
            setCurrentStep(step);
            if (onReplayStep) onReplayStep(step);
          }}
        />
      </div>

      {/* Historical Milestones List */}
      <div className="milestone-timeline-list">
        {activeMilestones.map((m, idx) => (
          <div key={idx} className="milestone-item">
            <div className="milestone-time">
              <Clock size={10} />
              <span>{m.time}</span>
            </div>
            <div className="milestone-dot" />
            <div className="milestone-desc">
              <b>{m.action}</b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
