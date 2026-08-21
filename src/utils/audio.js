/**
 * SYNTHESIS — Procedural Ambient Museum Soundscape
 * Uses Web Audio API to synthesize a serene Indian classical Tanpura drone (Sa-Pa harmonics)
 * and soft resonant bell harmonics without any external MP3/WAV file dependencies.
 */

let audioCtx = null;
let masterGain = null;
let isPlaying = false;
let droneInterval = null;
let bellInterval = null;

// Base frequencies for meditative D tanpura drone (D3 = 146.83 Hz)
const ROOT = 146.83;
const PA = ROOT * 1.5; // Perfect fifth
const SA_HIGH = ROOT * 2;

function initAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    audioCtx = new AudioContextClass();
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.18, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playDronePluck(freq, delay = 0, duration = 3.5) {
  if (!audioCtx || !masterGain) return;
  const now = audioCtx.currentTime + delay;

  // Primary Oscillator (warm sawtooth filtered)
  const osc = audioCtx.createOscillator();
  osc.type = "sawtooth";
  osc.frequency.setValueAtTime(freq, now);

  // Sub oscillator for deep grounding body
  const sub = audioCtx.createOscillator();
  sub.type = "sine";
  sub.frequency.setValueAtTime(freq / 2, now);

  // Lowpass filter for warm acoustic resonance
  const filter = audioCtx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(420, now);
  filter.frequency.exponentialRampToValueAtTime(180, now + duration);

  // Gain envelope simulating silk string pluck & long sustain
  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.22, now + 0.12);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(filter);
  sub.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);

  osc.start(now);
  sub.start(now);
  osc.stop(now + duration + 0.1);
  sub.stop(now + duration + 0.1);
}

function playTempleChime() {
  if (!audioCtx || !masterGain) return;
  const now = audioCtx.currentTime;
  const chimeFreq = ROOT * 4 * (1 + (Math.random() > 0.5 ? 0.25 : 0.5)); // Harmonic high chime

  const osc = audioCtx.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(chimeFreq, now);

  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.04, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.00001, now + 4.0);

  osc.connect(gain);
  gain.connect(masterGain);

  osc.start(now);
  osc.stop(now + 4.2);
}

export const SoundEngine = {
  start() {
    const ctx = initAudioContext();
    if (!ctx) return;
    isPlaying = true;

    // Tanpura string sequence loop (Pa -> Sa -> Sa -> Sa_low)
    let step = 0;
    const sequence = [PA, SA_HIGH, SA_HIGH, ROOT];

    const triggerCycle = () => {
      if (!isPlaying) return;
      playDronePluck(sequence[step % sequence.length], 0, 3.8);
      step++;
    };

    triggerCycle();
    droneInterval = setInterval(triggerCycle, 1200);

    // Occasional gentle temple chime
    bellInterval = setInterval(() => {
      if (!isPlaying) return;
      if (Math.random() > 0.4) {
        playTempleChime();
      }
    }, 7000);
  },

  stop() {
    isPlaying = false;
    if (droneInterval) clearInterval(droneInterval);
    if (bellInterval) clearInterval(bellInterval);
    droneInterval = null;
    bellInterval = null;
  },

  setVolume(vol) {
    if (masterGain && audioCtx) {
      masterGain.gain.setValueAtTime(Math.max(0, Math.min(1, vol)), audioCtx.currentTime);
    }
  },

  toggle() {
    if (isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  },

  isActive() {
    return isPlaying;
  }
};
