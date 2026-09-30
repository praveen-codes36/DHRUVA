import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Radio, CloudRain, Cpu, History, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface DataVector {
  id: string;
  name: string;
  nameHindi: string;
  subtitle: string;
  subtitleHindi: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  radius: number;
  speed: number;
  initialAngle: number;
  specs: string;
  specsHindi: string;
  telemetrySample: string;
}

const DATA_VECTORS: DataVector[] = [
  {
    id: 'rtis',
    name: 'RTIS GPS / NavIC',
    nameHindi: 'आरटीआईएस जीपीएस / नाविक',
    subtitle: 'Real-time Train Information System',
    subtitleHindi: 'वास्तविक समय ट्रेन सूचना प्रणाली',
    icon: Radio,
    radius: 110,
    speed: 1.2,
    initialAngle: 0,
    specs: 'Dual-frequency IRNSS receiver on locomotive roof; 0.8s update cycle',
    specsHindi: 'इंजन छत पर द्वि-आवृत्ति नाविक रिसीवर; 0.8s आंतरिक अपडेट चक्र',
    telemetrySample: 'LAT 28.5822°N · LON 77.2415°E · 128.4 km/h · LOCK: 9 SAT',
  },
  {
    id: 'weather',
    name: 'IMD Doppler & Microclimate',
    nameHindi: 'मौसम रडार व तापमान',
    subtitle: 'Track Visibility & Temperature',
    subtitleHindi: 'पटरी दृश्यता व तापीय विस्तार',
    icon: CloudRain,
    radius: 170,
    speed: 0.8,
    initialAngle: 1.6,
    specs: 'Station transmissometer and rail thermal sensors along 40km section',
    specsHindi: '40 किमी खंड में स्टेशन ट्रांसमिसोमीटर और रेल थर्मल सेंसर',
    telemetrySample: 'RVR: 850m (CLEAR) · RAIL TEMP: 38.2°C · HEADWIND: 11 KT',
  },
  {
    id: 'congestion',
    name: 'COA Signalling Graph',
    nameHindi: 'सीओए सिग्नलिंग ग्राफ',
    subtitle: 'Control Office Automation',
    subtitleHindi: 'कंट्रोल ऑफिस ऑटोमेशन',
    icon: Cpu,
    radius: 230,
    speed: 0.6,
    initialAngle: 3.2,
    specs: 'Continuous block-section occupancy graph across Baroda House division',
    specsHindi: 'बड़ौदा हाउस मंडल में सतत ब्लॉक-सेक्शन ऑक्यूपेंसी ग्राफ',
    telemetrySample: 'BLOCK 142/B: OCCUPIED (BOXNHL 82012) · HEADWAY: 4.8 MIN',
  },
  {
    id: 'history',
    name: '8-Year Trajectory Engine',
    nameHindi: '8-वर्षीय विलंब पैटर्न',
    subtitle: 'Historical Delay Patterns',
    subtitleHindi: 'ऐतिहासिक विलंब प्रक्षेपवक्र',
    icon: History,
    radius: 290,
    speed: 0.4,
    initialAngle: 4.8,
    specs: 'Trained on 1.2 billion historical station crossings across 4 seasons',
    specsHindi: 'चारों मौसमों में 1.2 अरब ऐतिहासिक स्टेशन क्रॉसिंग पर प्रशिक्षित',
    telemetrySample: 'PATTERN MATCH: NZM ARRIVAL #489 · DRIFT SIGMA: ±2.4 MIN',
  },
];

export const OrbitalConvergence: React.FC = () => {
  const { tokens, t, language } = useApp();
  const [converged, setConverged] = useState(true);
  const [selectedVector, setSelectedVector] = useState<DataVector | null>(DATA_VECTORS[0]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 0.02);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const getVectorColor = (id: string) => {
    switch (id) {
      case 'rtis':
        return tokens.onTimeFg;
      case 'weather':
        return tokens.ember;
      case 'congestion':
        return tokens.poleStarFg;
      case 'history':
      default:
        return tokens.textMuted;
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-8">
      {/* Control bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-[var(--border)]">
        <div>
          <span className="text-xs uppercase tracking-widest text-[var(--pole-star-fg)] font-semibold font-tabular">
            {t.shift.synthesisArch}
          </span>
          <h4 className="text-lg font-semibold text-[var(--text)]">
            {t.shift.synthesisSub}
          </h4>
        </div>

        {/* Toggle between fragmented reality and Dhruva fusion */}
        <div className="flex items-center gap-1 p-1 bg-[var(--surface-2)] border border-[var(--border)] rounded-lg">
          <button
            onClick={() => setConverged(false)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              !converged
                ? 'bg-[var(--surface-1)] text-[var(--text)] font-semibold shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text)]'
            }`}
          >
            {t.shift.btnFragmented}
          </button>
          <button
            onClick={() => setConverged(true)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              converged
                ? 'bg-[var(--pole-star-fill)] text-[var(--ink-on-paper)] font-bold shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text)]'
            }`}
          >
            {t.shift.btnFused}
          </button>
        </div>
      </div>

      {/* Main visualization container */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: The Orbital Canvas / SVG */}
        <div className="lg:col-span-7 relative h-[420px] sm:h-[480px] flex items-center justify-center overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] shadow-xl">
          {/* Subtle radial aura */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background: `radial-gradient(circle at center, ${tokens.poleStarFill}20 0%, transparent 70%)`,
            }}
          />

          {/* SVG Orbit Tracks */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-320 -240 640 480">
            {DATA_VECTORS.map((v) => (
              <circle
                key={`orbit-${v.id}`}
                cx="0"
                cy="0"
                r={converged ? v.radius : v.radius * 1.5 + 40}
                fill="none"
                stroke={converged ? tokens.borderStrong : `${tokens.alertFill}30`}
                strokeWidth={converged ? 1 : 1.5}
                strokeDasharray={converged ? '3 5' : '8 6'}
                className="transition-all duration-1000 ease-out"
              />
            ))}

            {/* Connecting rays to center when converged */}
            {converged &&
              DATA_VECTORS.map((v) => {
                const angle = v.initialAngle + time * v.speed;
                const nodeX = Math.cos(angle) * v.radius;
                const nodeY = Math.sin(angle) * v.radius;
                return (
                  <line
                    key={`ray-${v.id}`}
                    x1="0"
                    y1="0"
                    x2={nodeX}
                    y2={nodeY}
                    stroke={tokens.poleStarFill}
                    strokeWidth="1"
                    strokeDasharray="2 4"
                    opacity="0.3"
                  />
                );
              })}
          </svg>

          {/* Center Anchor: The Dhruva Star Core */}
          <div className="relative z-20 flex flex-col items-center select-none pointer-events-none">
            <div className="relative flex items-center justify-center">
              {/* Outer pulsing glow */}
              <motion.div
                animate={{
                  scale: converged ? [1, 1.35, 1] : [1, 1.1, 1],
                  opacity: converged ? [0.25, 0.5, 0.25] : [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute w-20 h-20 rounded-full blur-xl"
                style={{ backgroundColor: tokens.poleStarFill }}
              />

              {/* Core golden pearl */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-700"
                style={{
                  backgroundColor: converged ? tokens.poleStarFill : tokens.surface2,
                  borderColor: converged ? tokens.poleStarFg : tokens.borderStrong,
                  boxShadow: converged ? `0 0 24px ${tokens.poleStarFill}` : 'none',
                }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: tokens.bg }}
                />
              </div>
            </div>
            <span
              className="mt-2 text-[11px] font-bold tracking-widest uppercase font-tabular"
              style={{ color: tokens.poleStarFg }}
            >
              {converged ? t.shift.dhruvaCore : t.shift.unsynchronized}
            </span>
          </div>

          {/* Orbiting Satellite Data Nodes */}
          {DATA_VECTORS.map((v) => {
            const angle = converged
              ? v.initialAngle + time * v.speed
              : v.initialAngle + 0.3 * Math.sin(time);
            const radius = converged ? v.radius : v.radius * 1.3 + (v.id === 'rtis' ? -60 : 60);

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isSelected = selectedVector?.id === v.id;
            const vColor = getVectorColor(v.id);

            const IconComponent = v.icon;

            return (
              <motion.button
                key={v.id}
                onClick={() => setSelectedVector(v)}
                className={`absolute z-30 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full cursor-pointer transition-all duration-300 ${
                  isSelected ? 'ring-2 scale-110 shadow-lg' : 'hover:scale-105'
                }`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  backgroundColor: tokens.surface1,
                  borderColor: vColor,
                  borderWidth: 1.5,
                  boxShadow: isSelected ? `0 0 16px ${vColor}80` : undefined,
                }}
                title={language === 'hi' ? v.nameHindi : v.name}
              >
                <IconComponent className="w-4 h-4" style={{ color: vColor }} />
              </motion.button>
            );
          })}
        </div>

        {/* Right: Telemetry Inspector Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-tabular font-medium">
                {t.shift.inspectorTitle}
              </span>
              <div className="flex items-center gap-1.5 text-[11px] font-tabular" style={{ color: tokens.onTimeFg }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: tokens.onTimeFill }} />
                <span>{t.shift.liveFeed}</span>
              </div>
            </div>

            {selectedVector ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2.5 rounded-lg border"
                    style={{
                      borderColor: getVectorColor(selectedVector.id),
                      backgroundColor: tokens.surface2,
                    }}
                  >
                    <selectedVector.icon
                      className="w-5 h-5"
                      style={{ color: getVectorColor(selectedVector.id) }}
                    />
                  </div>
                  <div>
                    <h5 className="text-base font-semibold text-[var(--text)]">
                      {language === 'hi' ? selectedVector.nameHindi : selectedVector.name}
                    </h5>
                    <p className="text-xs text-[var(--text-muted)]">
                      {language === 'hi' ? selectedVector.subtitleHindi : selectedVector.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] text-xs text-[var(--text)]/90 leading-relaxed font-sans">
                  {language === 'hi' ? selectedVector.specsHindi : selectedVector.specs}
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[var(--text-faint)] block mb-1 font-tabular">
                    {t.shift.rawBufferLabel}
                  </span>
                  <div
                    className="p-2.5 rounded font-tabular text-[11px] overflow-x-auto whitespace-nowrap border border-[var(--border)]"
                    style={{
                      backgroundColor: tokens.surface2,
                      color: tokens.onTimeFg,
                    }}
                  >
                    {selectedVector.telemetrySample}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: tokens.poleStarFg }} />
                  <span>{t.shift.conformalNotice}</span>
                </div>
              </div>
            ) : (
              <p className="text-sm text-[var(--text-muted)]">
                {t.shift.selectVectorHint}
              </p>
            )}
          </div>

          {/* Quick list of the 4 inputs */}
          <div className="grid grid-cols-2 gap-2">
            {DATA_VECTORS.map((v) => {
              const active = selectedVector?.id === v.id;
              const vColor = getVectorColor(v.id);
              return (
                <button
                  key={`btn-${v.id}`}
                  onClick={() => setSelectedVector(v)}
                  className={`p-2.5 text-left rounded-lg border text-xs transition-all cursor-pointer ${
                    active
                      ? 'border-[var(--pole-star-fg)] bg-[var(--surface-2)] text-[var(--text)] font-semibold shadow-sm'
                      : 'border-[var(--border)] bg-[var(--surface-1)] text-[var(--text-muted)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  <span className="block truncate">
                    {language === 'hi' ? v.nameHindi : v.name}
                  </span>
                  <span className="text-[10px] text-[var(--text-faint)] block font-tabular">
                    {v.speed > 0.8 ? (language === 'hi' ? '0.8s सिंक' : '0.8s sync') : (language === 'hi' ? '30s सिंक' : '30s sync')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
