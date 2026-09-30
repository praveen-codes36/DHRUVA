import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Compass,
  Gauge,
  Info,
  Layers,
  MapPin,
  RefreshCw,
  SlidersHorizontal,
  Train,
  Wind,
  Sun,
  Moon,
  Shield,
  WifiOff,
  Radio,
  X,
  Sparkles,
} from 'lucide-react';
import { Odometer } from '../motion/Odometer';
import { ConfidenceRing } from '../motion/ConfidenceRing';
import { TrackLine, RouteStation } from '../motion/TrackLine';
import { WeatherLayer, WeatherState } from '../motion/WeatherLayer';
import { ArrivalBurst } from '../motion/ArrivalBurst';
import { useApp } from '../../context/AppContext';

export interface TrainOption {
  number: string;
  name: string;
  nameHindi: string;
  from: string;
  fromHindi: string;
  to: string;
  toHindi: string;
  terminalStation: string;
  terminalStationHindi: string;
  scheduledTime: string;
  locoType: string;
  locoTypeHindi: string;
  rakeType: string;
  normalSpeed: number;
  stations: RouteStation[];
}

const TRAINS: TrainOption[] = [
  {
    number: '12951',
    name: 'Mumbai Rajdhani Express',
    nameHindi: 'मुंबई राजधानी एक्सप्रेस',
    from: 'Mumbai Central (MMCT)',
    fromHindi: 'मुंबई सेंट्रल',
    to: 'New Delhi (NDLS)',
    toHindi: 'नई दिल्ली',
    terminalStation: 'New Delhi (NDLS)',
    terminalStationHindi: 'नई दिल्ली जंक्शन',
    scheduledTime: '08:32 AM',
    locoType: 'WAP-7 #30421 (Ghaziabad Shed)',
    locoTypeHindi: 'WAP-7 #30421 (गाजियाबाद शेड)',
    rakeType: 'LHB Tejas Sleeper',
    normalSpeed: 128,
    stations: [
      { code: 'MTJ', name: 'Mathura Jn', scheduledTime: '06:45 AM', predictedTime: '06:45 AM', platform: '1' },
      { code: 'KSV', name: 'Kosi Kalan', scheduledTime: '07:18 AM', predictedTime: '07:18 AM', platform: '2' },
      { code: 'PWL', name: 'Palwal', scheduledTime: '07:44 AM', predictedTime: '07:44 AM', platform: '4' },
      { code: 'FDB', name: 'Faridabad', scheduledTime: '08:04 AM', predictedTime: '08:04 AM', platform: '3' },
      { code: 'NZM', name: 'H. Nizamuddin', scheduledTime: '08:18 AM', predictedTime: '08:18 AM', platform: '2' },
      { code: 'NDLS', name: 'New Delhi', scheduledTime: '08:32 AM', predictedTime: '08:32 AM', platform: '3', isTerminal: true },
    ],
  },
  {
    number: '22436',
    name: 'Vande Bharat Express',
    nameHindi: 'वंदे भारत एक्सप्रेस',
    from: 'Varanasi Jn (BSB)',
    fromHindi: 'वाराणसी जंक्शन',
    to: 'New Delhi (NDLS)',
    toHindi: 'नई दिल्ली',
    terminalStation: 'New Delhi (NDLS)',
    terminalStationHindi: 'नई दिल्ली जंक्शन',
    scheduledTime: '02:00 PM',
    locoType: 'Train18 Self-Propelled EMU',
    locoTypeHindi: 'ट्रेन 18 सेमी-हाईस्पीड ईएमयू',
    rakeType: 'Vande Bharat 2.0 (16 Coaches)',
    normalSpeed: 130,
    stations: [
      { code: 'PRYJ', name: 'Prayagraj Jn', scheduledTime: '07:30 AM', predictedTime: '07:30 AM', platform: '6' },
      { code: 'CNB', name: 'Kanpur Central', scheduledTime: '09:30 AM', predictedTime: '09:30 AM', platform: '1' },
      { code: 'ALJN', name: 'Aligarh Jn', scheduledTime: '12:35 PM', predictedTime: '12:35 PM', platform: '3' },
      { code: 'GZB', name: 'Ghaziabad Jn', scheduledTime: '01:38 PM', predictedTime: '01:38 PM', platform: '2' },
      { code: 'NDLS', name: 'New Delhi', scheduledTime: '02:00 PM', predictedTime: '02:00 PM', platform: '16', isTerminal: true },
    ],
  },
  {
    number: '12002',
    name: 'New Delhi Shatabdi Express',
    nameHindi: 'भोपाल शताब्दी एक्सप्रेस',
    from: 'Rani Kamalapati (RKMP)',
    fromHindi: 'रानी कमलापति',
    to: 'New Delhi (NDLS)',
    toHindi: 'नई दिल्ली',
    terminalStation: 'New Delhi (NDLS)',
    terminalStationHindi: 'नई दिल्ली जंक्शन',
    scheduledTime: '11:50 AM',
    locoType: 'WAP-5 #30008 (Vadodara Shed)',
    locoTypeHindi: 'WAP-5 #30008 (वडोदरा शेड)',
    rakeType: 'LHB Executive Chair Car',
    normalSpeed: 130,
    stations: [
      { code: 'BPL', name: 'Bhopal Jn', scheduledTime: '03:15 AM', predictedTime: '03:15 AM', platform: '2' },
      { code: 'GWL', name: 'Gwalior Jn', scheduledTime: '07:00 AM', predictedTime: '07:00 AM', platform: '1' },
      { code: 'AGC', name: 'Agra Cantt', scheduledTime: '09:10 AM', predictedTime: '09:10 AM', platform: '1' },
      { code: 'MTJ', name: 'Mathura Jn', scheduledTime: '09:55 AM', predictedTime: '09:55 AM', platform: '3' },
      { code: 'NDLS', name: 'New Delhi', scheduledTime: '11:50 AM', predictedTime: '11:50 AM', platform: '1', isTerminal: true },
    ],
  },
];

export type SurfaceMode = 'showcase' | 'passenger' | 'station_board' | 'control_room';
export type SimulationType = 'normal' | 'signal_halt' | 'winter_fog' | 'freight_precedence' | 'gps_lost';

export const TrainArrivalHud: React.FC = () => {
  const { theme, setTheme, tokens, language, t } = useApp();
  const [selectedTrain, setSelectedTrain] = useState<TrainOption>(TRAINS[0]);
  const [activeSimulation, setActiveSimulation] = useState<SimulationType>('normal');
  const [surfaceMode, setSurfaceMode] = useState<SurfaceMode>('showcase');
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showDataSourceInfo, setShowDataSourceInfo] = useState(false);
  const [triggerBurst, setTriggerBurst] = useState(false);
  const [secondsAgo, setSecondsAgo] = useState(3);

  // Counter simulation for "Updated Xs ago"
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsAgo((prev) => (prev >= 28 ? 2 : prev + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Force day theme if station_board is active
  useEffect(() => {
    if (surfaceMode === 'station_board') {
      setTheme('day');
    }
  }, [surfaceMode, setTheme]);

  // Simulation parameter definitions
  const simulationStates = {
    normal: {
      eta: selectedTrain.scheduledTime,
      delayMinutes: 0,
      confidence: 96,
      status: 'On Time',
      statusHindi: 'समय पर',
      statusColor: tokens.onTimeFg,
      statusFill: tokens.onTimeFill,
      signalAspect: 'GREEN (CLEAR)',
      signalAspectHindi: 'हरा (स्पष्ट)',
      speed: selectedTrain.normalSpeed,
      source: 'Dual RTIS GPS/NavIC transponder · Lock: 9 Satellites',
      sourceHindi: 'डुअल आरटीआईएस नाविक उपग्रह ट्रांसपोंडर · 9 उपग्रह लॉक',
      explanation:
        'Line clear across all 6 block sections. RTIS transponder confirms nominal 128 km/h cruise; timetable buffer remains intact.',
      explanationHindi:
        'सभी 6 ब्लॉक सेक्शनों में लाइन पूर्णतः साफ है। आरटीआईएस ट्रांसपोंडर सामान्य 128 किमी/घंटे की गति की पुष्टि करता है; समय सारिणी बफर सुरक्षित है।',
      currentStationIndex: 3,
      progressFraction: 0.72,
      weather: 'clear' as WeatherState,
      stale: false,
    },
    signal_halt: {
      eta: '08:50 AM',
      delayMinutes: 18,
      confidence: 78,
      status: '+18 min (Caution)',
      statusHindi: '+18 मिनट (विलंब)',
      statusColor: tokens.cautionFg,
      statusFill: tokens.cautionFill,
      signalAspect: 'RED (DWELL)',
      signalAspectHindi: 'लाल (रखरखाव ठहराव)',
      speed: 0,
      source: 'RTIS GPS 0 km/h telemetry + COA Block Relay #142',
      sourceHindi: 'आरटीआईएस जीपीएस 0 किमी/घंटा + सीओए ब्लॉक रिले #142',
      explanation:
        'Single-aspect caution at Okhla Outer due to track maintenance; 18 min headway buffer consumed. Recalculated from 14km RTIS transponder.',
      explanationHindi:
        'पटरी रखरखाव के कारण ओखला आउटर पर सिंगल-आस्पेक्ट रुकना पड़ा; 18 मिनट का बफर समाप्त हुआ। 14 किमी आरटीआईएस ट्रांसपोंडर से पुनर्गणना की गई।',
      currentStationIndex: 4,
      progressFraction: 0.81,
      weather: 'clear' as WeatherState,
      stale: false,
    },
    winter_fog: {
      eta: '09:06 AM',
      delayMinutes: 34,
      confidence: 64,
      status: '+34 min (Fog Restricted)',
      statusHindi: '+34 मिनट (कोहरा प्रतिबंध)',
      statusColor: tokens.alertFg,
      statusFill: tokens.alertFill,
      signalAspect: 'DOUBLE YELLOW',
      signalAspectHindi: 'डबल येलो (सतर्कता)',
      speed: 58,
      source: 'IMD Station Transmissometer RVR <120m + Fog-Pass Device telemetry',
      sourceHindi: 'आईएमडी ट्रांसमिसोमीटर दृश्यता <120 मी. + फॉग-पास डिवाइस टेलीमेट्री',
      explanation:
        'Dense winter fog in Palwal–Tughlakabad corridor (RVR <120m). Speed restricted to 60 km/h under fog-pass device rules; dynamic dispersion model predicts 34 min delta.',
      explanationHindi:
        'पलवल-तुगलकाबाद गलियारे में घना शीतकालीन कोहरा (RVR <120 मी.)। फॉग-पास डिवाइस नियमों के तहत गति 60 किमी/घंटा तक सीमित; मॉडल 34 मिनट का विचलन दर्शाता है।',
      currentStationIndex: 3,
      progressFraction: 0.65,
      weather: 'fog' as WeatherState,
      stale: false,
    },
    freight_precedence: {
      eta: '08:44 AM',
      delayMinutes: 12,
      confidence: 86,
      status: '+12 min (Crossover)',
      statusHindi: '+12 मिनट (लूप क्रॉसिंग)',
      statusColor: tokens.cautionFg,
      statusFill: tokens.cautionFill,
      signalAspect: 'YELLOW (CAUTION)',
      signalAspectHindi: 'पीला (सावधानी)',
      speed: 42,
      source: 'FOIS Rake Tracker #82012 + Interlocking Turnout 4B Sensor',
      sourceHindi: 'मालगाड़ी ट्रैकर #82012 + इंटरलॉकिंग टर्नआउट 4B सेंसर',
      explanation:
        'BOXNHL freight rake 82012 routing into Chhata loop; 12 min crossover clearance required before main line green aspect restore.',
      explanationHindi:
        'BOXNHL मालगाड़ी 82012 छाता लूप लाइन में जा रही है; मुख्य लाइन पर ग्रीन सिग्नल बहाल होने से पहले 12 मिनट की क्रॉसओवर क्लीयरेंस आवश्यक है।',
      currentStationIndex: 3,
      progressFraction: 0.7,
      weather: 'clear' as WeatherState,
      stale: false,
    },
    gps_lost: {
      eta: '08:46 AM',
      delayMinutes: 14,
      confidence: 52,
      status: 'Signal Lost · Estimating',
      statusHindi: 'सिग्नल बाधित · अनुमानित',
      statusColor: tokens.alertFg,
      statusFill: tokens.alertFill,
      signalAspect: 'UNKNOWN (IN TUNNEL)',
      signalAspectHindi: 'अज्ञात (सुरंग में)',
      speed: 72,
      source: 'Last GPS lock 48s ago. Fallback: Wayside Digital Axle Counter extrapolation',
      sourceHindi: 'अंतिम जीपीएस लॉक 48 से. पूर्व। फॉलबैक: डिजिटल एक्सल काउंटर गणना',
      explanation:
        'Locomotive passed into railway cutting without satellite visibility. Dhruva fell back to wayside axle counters and dead reckoning; confidence interval expanded to ±6 mins.',
      explanationHindi:
        'इंजन उपग्रह दृश्यता के बिना रेलवे कटिंग में प्रवेश कर चुका है। ध्रुवा ने ट्रैकसाइड एक्सल काउंटर और डेड रेकनिंग का सहारा लिया; निश्चितता दायरा ±6 मिनट बढ़ गया।',
      currentStationIndex: 3,
      progressFraction: 0.74,
      weather: 'clear' as WeatherState,
      stale: true,
    },
  };

  const currentSim = simulationStates[activeSimulation];

  const handleTriggerSimulation = (sim: SimulationType) => {
    if (sim === activeSimulation) return;
    setActiveSimulation(sim);
    setSecondsAgo(1);
    if (sim === 'normal') {
      setTriggerBurst(true);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-5 sm:p-8 shadow-2xl transition-colors duration-500 overflow-hidden">
      {/* Weather Layer background sync */}
      <WeatherLayer weather={currentSim.weather} />

      {/* Arrival Burst celebration when nominal arrives */}
      <ArrivalBurst active={triggerBurst} onComplete={() => setTriggerBurst(false)} />

      {/* Surface Selector Tabs & Controls Bar */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 pb-6 border-b border-[var(--border)]">
        {/* Surface Architecture Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-[11px] font-tabular uppercase tracking-widest text-[var(--pole-star-fg)] font-bold">
            {t.hud.surfaceTag}
          </span>
          <div className="flex flex-wrap items-center gap-1 p-1 bg-[var(--surface-2)] rounded-lg border border-[var(--border)]">
            <button
              onClick={() => setSurfaceMode('showcase')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                surfaceMode === 'showcase'
                  ? 'bg-[var(--surface-1)] text-[var(--pole-star-fg)] font-semibold shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
            >
              {t.hud.surfaceShowcase}
            </button>
            <button
              onClick={() => setSurfaceMode('passenger')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                surfaceMode === 'passenger'
                  ? 'bg-[var(--surface-1)] text-[var(--pole-star-fg)] font-semibold shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
            >
              {t.hud.surfacePassenger}
            </button>
            <button
              onClick={() => setSurfaceMode('station_board')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                surfaceMode === 'station_board'
                  ? 'bg-[var(--surface-1)] text-[var(--pole-star-fg)] font-semibold shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
            >
              {t.hud.surfaceStation}
            </button>
            <button
              onClick={() => setSurfaceMode('control_room')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                surfaceMode === 'control_room'
                  ? 'bg-[var(--surface-1)] text-[var(--pole-star-fg)] font-semibold shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
            >
              {t.hud.surfaceControl}
            </button>
          </div>
        </div>

        {/* Live HUD Theme & Privacy Controls */}
        <div className="flex items-center gap-3 self-end xl:self-center">
          {/* Day / Night Theme Toggle inside HUD */}
          <button
            onClick={() => setTheme(theme === 'night' ? 'day' : 'night')}
            disabled={surfaceMode === 'station_board'}
            title={
              surfaceMode === 'station_board'
                ? t.a11y.stationBoardNotice
                : t.a11y.toggleDayNight
            }
            aria-label={t.a11y.toggleDayNight}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-tabular transition-all cursor-pointer ${
              surfaceMode === 'station_board'
                ? 'opacity-50 cursor-not-allowed bg-[var(--surface-2)] border-[var(--border)] text-[var(--text-muted)]'
                : 'bg-[var(--surface-2)] border-[var(--border)] text-[var(--text)] hover:border-[var(--pole-star-fg)]'
            }`}
          >
            {theme === 'night' ? (
              <>
                <Sun className="w-3.5 h-3.5" style={{ color: tokens.poleStarFg }} />
                <span>{t.nav.dayMode}</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5" style={{ color: tokens.poleStarFg }} />
                <span>{t.nav.nightMode}</span>
              </>
            )}
          </button>

          {/* Privacy & Data Governance Modal Trigger */}
          <button
            onClick={() => setShowPrivacyModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors font-tabular cursor-pointer"
          >
            <Shield className="w-3.5 h-3.5 text-[var(--pole-star-fg)]" />
            <span>{t.hud.govNetSpec}</span>
          </button>
        </div>
      </div>

      {/* Surface 3: Station Display Board Mode (Extreme High-Contrast, Legible from 8m, Forced Day Theme) */}
      {surfaceMode === 'station_board' ? (
        <div
          className="my-6 p-6 sm:p-10 rounded-2xl border-4 shadow-2xl space-y-6"
          style={{
            backgroundColor: tokens.surface1,
            borderColor: tokens.text,
            color: tokens.text,
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 pb-4 gap-4" style={{ borderColor: tokens.text }}>
            <div>
              <span className="text-sm font-bold tracking-widest uppercase font-tabular block" style={{ color: tokens.textMuted }}>
                {t.hud.boardHeader}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-tabular tracking-tight">
                {selectedTrain.number} {selectedTrain.name.toUpperCase()}
              </h2>
              <span className="text-xl font-bold font-editorial-indic block mt-1">
                {selectedTrain.nameHindi}
              </span>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs uppercase font-bold block" style={{ color: tokens.textMuted }}>
                {t.hud.boardPlatformLabel}
              </span>
              <span className="text-5xl sm:text-7xl font-black font-tabular" style={{ color: tokens.poleStarFg }}>
                PF 03
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="p-4 rounded-xl border-2" style={{ backgroundColor: tokens.surface2, borderColor: tokens.text }}>
              <span className="text-xs uppercase font-bold block" style={{ color: tokens.textMuted }}>
                {t.hud.boardSchedLabel}
              </span>
              <span className="text-3xl font-black font-tabular" style={{ color: tokens.textMuted }}>
                {selectedTrain.scheduledTime}
              </span>
            </div>

            <div className="p-4 rounded-xl border-2 relative" style={{ backgroundColor: tokens.surface2, borderColor: tokens.text }}>
              <span className="text-xs uppercase font-bold block" style={{ color: tokens.poleStarFg }}>
                {t.hud.boardPredLabel}
              </span>
              <span className="text-4xl sm:text-5xl font-black font-tabular" style={{ color: tokens.text }}>
                {currentSim.eta}
              </span>
            </div>

            <div className="p-4 rounded-xl border-2" style={{ backgroundColor: tokens.surface2, borderColor: tokens.text }}>
              <span className="text-xs uppercase font-bold block" style={{ color: tokens.textMuted }}>
                {t.hud.boardStatusLabel}
              </span>
              <span className="text-2xl sm:text-3xl font-black font-tabular" style={{ color: tokens.onTimeFg }}>
                {language === 'hi' ? currentSim.statusHindi : currentSim.status}
              </span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-tabular gap-2 border-t" style={{ borderColor: tokens.border, color: tokens.textMuted }}>
            <span>{t.hud.boardCoachGuide}</span>
            <span>{t.hud.boardEscalatorNote}</span>
          </div>
        </div>
      ) : surfaceMode === 'passenger' ? (
        /* Surface 2: Passenger Companion View (Lightweight, High Legibility, 2G/Lite Friendly) */
        <div className="my-6 p-6 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[var(--border)] pb-4 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-tabular text-[var(--pole-star-fg)] font-bold">
                <Train className="w-4 h-4" />
                <span>{t.hud.passengerCompanionTag}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] mt-1">
                {selectedTrain.number} {language === 'hi' ? selectedTrain.nameHindi : selectedTrain.name}
              </h3>
              <p className="text-xs text-[var(--text-muted)] font-tabular">
                {language === 'hi' ? selectedTrain.fromHindi : selectedTrain.from} → {language === 'hi' ? selectedTrain.toHindi : selectedTrain.to}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-[var(--text-muted)] block font-tabular">
                {t.hud.passengerPlatformLabel}
              </span>
              <span className="text-2xl sm:text-3xl font-bold font-tabular text-[var(--pole-star-fg)]">
                PF 3
              </span>
            </div>
          </div>

          {/* Core ETA Card */}
          <div className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs text-[var(--text-faint)] uppercase font-tabular block">
                {t.hud.passengerEstArrival.replace('{station}', language === 'hi' ? selectedTrain.terminalStationHindi : selectedTrain.terminalStation)}
              </span>
              <div className="flex items-baseline gap-3 my-2">
                <span className="text-4xl sm:text-5xl font-bold font-tabular text-[var(--text)]">
                  {currentSim.eta}
                </span>
                <span
                  className="text-xs font-bold font-tabular px-2.5 py-1 rounded border"
                  style={{
                    color: currentSim.statusColor,
                    borderColor: `${currentSim.statusColor}40`,
                  }}
                >
                  {language === 'hi' ? currentSim.statusHindi : currentSim.status}
                </span>
              </div>
              <span className="text-xs text-[var(--text-muted)] font-tabular block">
                {t.hud.scheduledPrefix.replace('{time}', selectedTrain.scheduledTime).replace('{pf}', '3')} · 90% Bound: ±2 min
              </span>
            </div>

            <div className="flex flex-col items-center">
              <ConfidenceRing
                confidence={currentSim.confidence}
                size={96}
                strokeWidth={6}
                statusColor={currentSim.statusColor}
                subtitle={t.hud.passengerCertainty}
              />
            </div>
          </div>

          {/* Coach & Luggage Guide */}
          <div className="p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] text-xs font-tabular space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[var(--text-muted)] gap-1">
              <span>{t.hud.passengerCoachComposition}</span>
              <span>{t.hud.passengerEscalatorGuide}</span>
            </div>
            <div className="text-[11px] text-[var(--text-faint)]">
              {t.hud.passengerOfflineCache.replace('{s}', String(secondsAgo))}
            </div>
          </div>
        </div>
      ) : surfaceMode === 'control_room' ? (
        /* Surface 4: Control Room COA Dashboard */
        <div className="my-6 p-6 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[var(--border)] pb-4 gap-2">
            <div>
              <span className="text-xs font-tabular font-bold uppercase tracking-widest text-[var(--pole-star-fg)]">
                {t.hud.controlTerminal}
              </span>
              <h3 className="text-xl font-bold text-[var(--text)]">
                {t.hud.controlSection}
              </h3>
            </div>
            <div className="flex items-center gap-2 font-tabular text-xs text-[var(--text-muted)]">
              <span>{t.hud.controlInterlocking} <strong>{t.hud.controlAutoAbsolute}</strong></span>
              <span>·</span>
              <span>{t.hud.controlPing} <strong className="text-[var(--on-time-fg)]">0.8s</strong></span>
            </div>
          </div>

          {/* Multi-train section tracker */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-tabular text-xs">
            <div className="p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[var(--text)]">12951 MMCT-NDLS</span>
                <span className="text-[var(--on-time-fg)] font-bold">Block 142/A</span>
              </div>
              <div className="text-[var(--text-muted)]">{t.hud.controlSpeedLabel} <strong>{currentSim.speed} km/h</strong></div>
              <div className="text-[var(--text-muted)]">{t.hud.controlAspectLabel} <strong style={{ color: currentSim.statusColor }}>{language === 'hi' ? currentSim.signalAspectHindi : currentSim.signalAspect}</strong></div>
              <div className="text-[11px] text-[var(--text-faint)]">
                {t.hud.controlHeadwayLabel} {language === 'hi' ? '4.8 मिनट हज़रत निज़ामुद्दीन आउटर' : '4.8 min to NZM home'}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] space-y-2 opacity-80">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[var(--text)]">12002 RKMP-NDLS</span>
                <span className="text-[var(--caution-fg)] font-bold">Block 138/B</span>
              </div>
              <div className="text-[var(--text-muted)]">{t.hud.controlSpeedLabel} <strong>92 km/h</strong></div>
              <div className="text-[var(--text-muted)]">{t.hud.controlAspectLabel} <strong>{t.hud.controlAspectDoubleYellow}</strong></div>
              <div className="text-[11px] text-[var(--text-faint)]">{t.hud.controlHeadwayLabel} 6.2 {t.hud.controlFollowing}</div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] space-y-2 opacity-70">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[var(--text)]">BOXNHL 82012 ({language === 'hi' ? 'मालगाड़ी' : 'Freight'})</span>
                <span className="text-[var(--text-faint)] font-bold">{t.hud.controlFreightLoopName}</span>
              </div>
              <div className="text-[var(--text-muted)]">{t.hud.controlSpeedLabel} <strong>0 km/h ({language === 'hi' ? 'लूप' : 'Loop'})</strong></div>
              <div className="text-[var(--text-muted)]">{t.hud.controlAspectLabel} <strong>{t.hud.controlAspectRedLoop}</strong></div>
              <div className="text-[11px] text-[var(--text-faint)]">{t.hud.controlPrecedenceCleared}</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] font-tabular text-xs flex flex-col sm:flex-row sm:items-center justify-between text-[var(--text-muted)] gap-2">
            <span>{t.hud.controlSaturation} <strong className="text-[var(--ember)]">142%</strong></span>
            <span>{t.hud.controlConflictPredictor} <strong className="text-[var(--on-time-fg)]">{language === 'hi' ? 'शून्य टकराव' : 'Zero Route Deadlock'}</strong></span>
            <span>{t.hud.controlConformalBound} <strong>90% {t.hud.confidenceRingLabel}</strong></span>
          </div>
        </div>
      ) : (
        /* Surface 1: Showcase HUD */
        <>
          {/* Top Info Bar: Train Selector + Data Freshness + Telemetry */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 py-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-[var(--pole-star-fg)]">
                <Train className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <select
                    value={selectedTrain.number}
                    onChange={(e) => {
                      const tObj = TRAINS.find((tr) => tr.number === e.target.value);
                      if (tObj) setSelectedTrain(tObj);
                    }}
                    aria-label={t.a11y.trainSelector}
                    className="bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] font-semibold text-sm sm:text-base rounded-lg px-2.5 py-1.5 focus:border-[var(--pole-star-fg)] focus:outline-none cursor-pointer"
                  >
                    {TRAINS.map((tr) => (
                      <option key={tr.number} value={tr.number}>
                        {tr.number} · {language === 'hi' ? tr.nameHindi : tr.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-xs text-[var(--text-muted)] font-tabular mt-1">
                  <span>{language === 'hi' ? selectedTrain.fromHindi : selectedTrain.from}</span>
                  <span className="mx-1">→</span>
                  <span className="text-[var(--text)] font-medium">
                    {language === 'hi' ? selectedTrain.toHindi : selectedTrain.to}
                  </span>
                  <span className="mx-2 text-[var(--text-faint)]">·</span>
                  <span className="text-[var(--text-faint)]">
                    {language === 'hi' ? selectedTrain.locoTypeHindi : selectedTrain.locoType}
                  </span>
                </div>
              </div>
            </div>

            {/* Live Data Freshness & Transparency Badge */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-tabular text-[var(--text-muted)]">
              <button
                onClick={() => setShowDataSourceInfo(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--pole-star-fg)] transition-all cursor-pointer"
                title={t.hud.viewTelemetryHint}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    currentSim.stale
                      ? 'bg-[var(--alert-fg)] animate-ping'
                      : 'bg-[var(--on-time-fg)] animate-pulse'
                  }`}
                />
                <span className="text-[var(--text)] font-semibold">
                  {currentSim.stale ? t.hud.gpsStale : t.hud.liveSync}
                </span>
                <span className="text-[var(--text-faint)]">·</span>
                <span>{t.hud.updatedSecsAgo.replace('{s}', String(secondsAgo))}</span>
                <Info className="w-3.5 h-3.5 text-[var(--pole-star-fg)] ml-1" />
              </button>
            </div>
          </div>

          {/* Main Grid: ETA Odometer Card + Confidence Ring */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-stretch">
            {/* Left: Odometer ETA Card */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)]/60 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-2 font-tabular">
                  <span className="uppercase tracking-widest text-[var(--pole-star-fg)] font-bold">
                    {t.hud.arrivalAt.replace('{station}', language === 'hi' ? selectedTrain.terminalStationHindi : selectedTrain.terminalStation)}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: currentSim.statusColor }}
                    />
                    <span className="font-semibold text-[var(--text)]">
                      {language === 'hi' ? currentSim.statusHindi : currentSim.status}
                    </span>
                  </div>
                </div>

                {/* Big Live ETA with Odometer */}
                <div className="my-4">
                  <span className="text-xs text-[var(--text-faint)] font-tabular block mb-1">
                    {t.hud.scheduledPrefix.replace('{time}', selectedTrain.scheduledTime).replace('{pf}', '3')}
                  </span>
                  <div className="flex items-baseline gap-3">
                    <div className="text-4xl sm:text-6xl font-bold font-tabular tracking-tight text-[var(--text)]">
                      <AnimatePresence mode="popLayout">
                        <motion.div
                          key={currentSim.eta}
                          initial={{ y: 20, opacity: 0, filter: 'blur(3px)' }}
                          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                          exit={{ y: -20, opacity: 0, filter: 'blur(3px)' }}
                          transition={{ duration: 0.4, ease: [0.16, 0.8, 0.2, 1] }}
                        >
                          <Odometer value={currentSim.eta} charClassName="text-[var(--text)]" />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <span
                      className="text-xs sm:text-sm font-semibold font-tabular px-2.5 py-1 rounded border transition-colors duration-500"
                      style={{
                        color: currentSim.statusColor,
                        borderColor: `${currentSim.statusColor}40`,
                        backgroundColor: `${currentSim.statusColor}15`,
                      }}
                    >
                      {currentSim.delayMinutes === 0
                        ? t.hud.onTimeLabel
                        : `+${currentSim.delayMinutes}m`}
                    </span>
                  </div>
                </div>

                {/* Empirical Conformal Range */}
                <div className="mt-2 text-xs text-[var(--text-muted)] flex items-center gap-2 font-tabular">
                  <span className="text-[var(--text-faint)]">{t.hud.conformalInterval}</span>
                  <strong className="text-[var(--text)]">
                    {currentSim.delayMinutes === 0
                      ? '08:31 AM – 08:34 AM'
                      : currentSim.delayMinutes < 20
                      ? '08:48 AM – 08:52 AM'
                      : '09:02 AM – 09:11 AM'}
                  </strong>
                  <span className="text-[var(--text-faint)]">·</span>
                  <span className="text-[var(--on-time-fg)]">{t.hud.zeroHallucination}</span>
                </div>
              </div>

              {/* Mechanism Explanation Sentence */}
              <div className="mt-6 pt-4 border-t border-[var(--border)]">
                <span className="text-[10px] uppercase tracking-wider text-[var(--pole-star-fg)] block mb-1 font-bold">
                  {t.hud.reasoningTag}
                </span>
                <p className="text-xs sm:text-sm text-[var(--text)]/90 leading-relaxed font-sans min-h-[44px]">
                  {language === 'hi' ? currentSim.explanationHindi : currentSim.explanation}
                </p>
              </div>
            </div>

            {/* Right: Confidence Ring & Telemetry */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)]/60 flex flex-col items-center justify-between text-center">
              <div className="w-full flex items-center justify-between text-xs text-[var(--text-muted)] font-tabular mb-2">
                <span>{t.hud.confidenceTitle}</span>
                <span className="text-[var(--pole-star-fg)]">{t.hud.bayesianConformal}</span>
              </div>

              <div className="py-4">
                <ConfidenceRing
                  confidence={currentSim.confidence}
                  size={130}
                  strokeWidth={8}
                  statusColor={currentSim.statusColor}
                  subtitle={t.hud.confidenceRingLabel}
                />
              </div>

              {/* Status pill telemetry */}
              <div className="w-full grid grid-cols-3 gap-2 pt-4 border-t border-[var(--border)] text-left font-tabular">
                <div className="p-2 rounded bg-[var(--surface-1)] border border-[var(--border)]">
                  <span className="text-[10px] text-[var(--text-faint)] block uppercase">{t.hud.speedLabel}</span>
                  <span className="text-xs font-bold text-[var(--text)]">
                    {currentSim.speed} km/h
                  </span>
                </div>
                <div className="p-2 rounded bg-[var(--surface-1)] border border-[var(--border)]">
                  <span className="text-[10px] text-[var(--text-faint)] block uppercase">{t.hud.aspectLabel}</span>
                  <span
                    className="text-xs font-bold truncate block"
                    style={{ color: currentSim.statusColor }}
                  >
                    {language === 'hi' ? currentSim.signalAspectHindi : currentSim.signalAspect}
                  </span>
                </div>
                <div className="p-2 rounded bg-[var(--surface-1)] border border-[var(--border)]">
                  <span className="text-[10px] text-[var(--text-faint)] block uppercase">{t.hud.telemetryLabel}</span>
                  <span className="text-xs font-bold text-[var(--text)] truncate block">
                    {currentSim.stale ? t.hud.controlDeadReckoning : t.hud.controlNavicTelemetry}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Station Trackline */}
          <div className="my-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-2)]/40">
            <TrackLine
              stations={selectedTrain.stations}
              currentStationIndex={currentSim.currentStationIndex}
              progressFraction={currentSim.progressFraction}
              trainSpeedKmH={currentSim.speed}
            />
          </div>
        </>
      )}

      {/* Simulation Scenario Buttons */}
      <div className="mt-8 pt-6 border-t border-[var(--border)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[var(--pole-star-fg)] font-bold">
              {t.hud.chaosTitle}
            </span>
            <h4 className="text-sm font-semibold text-[var(--text)]">
              {t.hud.chaosSub}
            </h4>
          </div>
          <span className="text-[11px] text-[var(--text-muted)] font-tabular">
            {t.hud.recalculateNotice}
          </span>
        </div>

        {/* 5 Scenario Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {/* 1. Clear Section */}
          <button
            onClick={() => handleTriggerSimulation('normal')}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
              activeSimulation === 'normal'
                ? 'border-[var(--on-time-fg)] bg-[var(--surface-2)] shadow-md'
                : 'border-[var(--border)] bg-[var(--surface-1)] hover:border-[var(--border-strong)]'
            }`}
          >
            <div className="flex items-center gap-1.5 mb-1 text-[var(--on-time-fg)]">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-bold text-[var(--text)]">{t.hud.simGreen}</span>
            </div>
            <p className="text-[11px] text-[var(--text-muted)] leading-tight">
              {t.hud.simGreenDesc}
            </p>
          </button>

          {/* 2. Signal Halt */}
          <button
            onClick={() => handleTriggerSimulation('signal_halt')}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
              activeSimulation === 'signal_halt'
                ? 'border-[var(--caution-fg)] bg-[var(--surface-2)] shadow-md'
                : 'border-[var(--border)] bg-[var(--surface-1)] hover:border-[var(--border-strong)]'
            }`}
          >
            <div className="flex items-center gap-1.5 mb-1 text-[var(--caution-fg)]">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-xs font-bold text-[var(--text)]">{t.hud.simHalt}</span>
            </div>
            <p className="text-[11px] text-[var(--text-muted)] leading-tight">
              {t.hud.simHaltDesc}
            </p>
          </button>

          {/* 3. Winter Fog */}
          <button
            onClick={() => handleTriggerSimulation('winter_fog')}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
              activeSimulation === 'winter_fog'
                ? 'border-[var(--alert-fg)] bg-[var(--surface-2)] shadow-md'
                : 'border-[var(--border)] bg-[var(--surface-1)] hover:border-[var(--border-strong)]'
            }`}
          >
            <div className="flex items-center gap-1.5 mb-1 text-[var(--alert-fg)]">
              <Wind className="w-4 h-4" />
              <span className="text-xs font-bold text-[var(--text)]">{t.hud.simFog}</span>
            </div>
            <p className="text-[11px] text-[var(--text-muted)] leading-tight">
              {t.hud.simFogDesc}
            </p>
          </button>

          {/* 4. Freight Crossover */}
          <button
            onClick={() => handleTriggerSimulation('freight_precedence')}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
              activeSimulation === 'freight_precedence'
                ? 'border-[var(--caution-fg)] bg-[var(--surface-2)] shadow-md'
                : 'border-[var(--border)] bg-[var(--surface-1)] hover:border-[var(--border-strong)]'
            }`}
          >
            <div className="flex items-center gap-1.5 mb-1 text-[var(--caution-fg)]">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="text-xs font-bold text-[var(--text)]">{t.hud.simFreight}</span>
            </div>
            <p className="text-[11px] text-[var(--text-muted)] leading-tight">
              {t.hud.simFreightDesc}
            </p>
          </button>

          {/* 5. GPS Loss Tunnel Simulation */}
          <button
            onClick={() => handleTriggerSimulation('gps_lost')}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
              activeSimulation === 'gps_lost'
                ? 'border-[var(--alert-fg)] bg-[var(--surface-2)] shadow-md'
                : 'border-[var(--border)] bg-[var(--surface-1)] hover:border-[var(--border-strong)]'
            }`}
          >
            <div className="flex items-center gap-1.5 mb-1 text-[var(--alert-fg)]">
              <WifiOff className="w-4 h-4" />
              <span className="text-xs font-bold text-[var(--text)]">{t.hud.simSignalLoss}</span>
            </div>
            <p className="text-[11px] text-[var(--text-muted)] leading-tight">
              {t.hud.simSignalLossDesc}
            </p>
          </button>
        </div>
      </div>

      {/* Slide-out Data Source Details Modal */}
      <AnimatePresence>
        {showDataSourceInfo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-lg w-full p-6 rounded-2xl bg-[var(--surface-1)] border border-[var(--border)] shadow-2xl text-left"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                <span className="text-xs font-tabular font-bold uppercase tracking-wider text-[var(--pole-star-fg)]">
                  {t.hud.telemetryLogTitle}
                </span>
                <button
                  onClick={() => setShowDataSourceInfo(false)}
                  className="p-1 rounded hover:bg-[var(--surface-2)] text-[var(--text-muted)] cursor-pointer"
                  aria-label={t.a11y.closeModal}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-4 space-y-3 font-tabular text-xs">
                <div className="p-3 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">
                  <span className="text-[10px] text-[var(--text-faint)] block uppercase">{t.hud.telemetryStreamLabel}</span>
                  <span className="font-semibold text-[var(--text)]">
                    {language === 'hi' ? currentSim.sourceHindi : currentSim.source}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">
                  <span className="text-[10px] text-[var(--text-faint)] block uppercase">{t.hud.telemetryFreshnessLabel}</span>
                  <span className="text-[var(--on-time-fg)] font-semibold">
                    {t.hud.pingIntervalSpec.replace('{s}', String(secondsAgo))}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">
                  <span className="text-[10px] text-[var(--text-faint)] block uppercase">{t.hud.telemetryBasisLabel}</span>
                  <span className="text-[var(--text-muted)]">
                    {t.hud.historicalCorpusSpec}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowDataSourceInfo(false)}
                className="w-full mt-2 py-2.5 rounded-lg bg-[var(--pole-star-fill)] text-[var(--ink-on-paper)] font-bold text-xs cursor-pointer"
              >
                {t.hud.closeInspector}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* GovNet & Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-lg w-full p-6 rounded-2xl bg-[var(--surface-1)] border border-[var(--border)] shadow-2xl text-left"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                <span className="text-xs font-tabular font-bold uppercase tracking-wider text-[var(--pole-star-fg)]">
                  {t.hud.privacyTitle}
                </span>
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="p-1 rounded hover:bg-[var(--surface-2)] text-[var(--text-muted)] cursor-pointer"
                  aria-label={t.a11y.closeModal}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-4 space-y-3 text-xs text-[var(--text-muted)] leading-relaxed font-sans">
                <p>
                  <strong className="text-[var(--text)]">{t.hud.privacyCollectedLabel} </strong>
                  {t.hud.privacyCollectedText}
                </p>
                <p>
                  <strong className="text-[var(--text)]">{t.hud.privacyProhibitedLabel} </strong>
                  {t.hud.privacyProhibitedText}
                </p>
                <p>
                  <strong className="text-[var(--text)]">{t.hud.privacyDeploymentLabel} </strong>
                  {t.hud.privacyDeploymentText}
                </p>
              </div>

              <button
                onClick={() => setShowPrivacyModal(false)}
                className="w-full mt-2 py-2.5 rounded-lg bg-[var(--pole-star-fill)] text-[var(--ink-on-paper)] font-bold text-xs cursor-pointer"
              >
                {t.hud.ackSpec}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
