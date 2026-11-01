import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function LiveDemo() {
  const { t } = useTranslation();

  // App & Simulation state
  const [durationMinutes, setDurationMinutes] = useState(450); // 7h 30m default
  const [anchorEnabled, setAnchorEnabled] = useState(true);
  const [anchorTime, setAnchorTime] = useState('08:00');
  const [isAsleep, setIsAsleep] = useState(false);
  const [currentStage, setCurrentStage] = useState('setup'); // 'setup' | 'latency' | 'onset' | 'sliding' | 'wake'
  const [showTelemetryHUD, setShowTelemetryHUD] = useState(false);
  const [simulatedMinutes, setSimulatedMinutes] = useState(0);

  // Quick duration presets
  const presets = [
    { label: '6h 00m', minutes: 360 },
    { label: '7h 00m', minutes: 420 },
    { label: '7h 30m', minutes: 450 },
    { label: '8h 00m', minutes: 480 },
    { label: '8h 30m', minutes: 510 },
  ];

  // Format minutes into "7h 30m"
  const formatDuration = (mins) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h}h ${m < 10 ? '0' : ''}${m}m`;
  };

  // Stage details based on current stage
  const stageData = {
    setup: {
      step: 1,
      name: t('demo.stages.setup.name'),
      desc: t('demo.stages.setup.desc'),
      hr: 74,
      hrv: 42,
      motion: 'Active (Setting alarm)',
      sleepState: t('demo.telemetry.stateLabels.awake'),
      elapsedBedTime: '0 min',
      elapsedSleepTime: '0 min',
    },
    latency: {
      step: 2,
      name: t('demo.stages.latency.name'),
      desc: t('demo.stages.latency.desc'),
      hr: 63,
      hrv: 58,
      motion: 'Subtle tossing (settling)',
      sleepState: t('demo.telemetry.stateLabels.fallingAsleep'),
      elapsedBedTime: '11 min',
      elapsedSleepTime: '0 min (Clock hidden)',
    },
    onset: {
      step: 3,
      name: t('demo.stages.onset.name'),
      desc: t('demo.stages.onset.desc'),
      hr: 54,
      hrv: 76,
      motion: 'Still (Actigraphy threshold met)',
      sleepState: t('demo.telemetry.stateLabels.deepSleep'),
      elapsedBedTime: '15 min',
      elapsedSleepTime: '0 min 12s (TIMER INITIATED)',
    },
    sliding: {
      step: 4,
      name: t('demo.stages.sliding.name'),
      desc: t('demo.stages.sliding.desc'),
      hr: 51,
      hrv: 82,
      motion: 'Zero movement (protecting HGH)',
      sleepState: t('demo.telemetry.stateLabels.deepSleep'),
      elapsedBedTime: '5h 42m',
      elapsedSleepTime: '5h 27m (SWS avoided)',
    },
    wake: {
      step: 5,
      name: t('demo.stages.wake.name'),
      desc: t('demo.stages.wake.desc'),
      hr: 62,
      hrv: 64,
      motion: 'Light restlessness detected',
      sleepState: t('demo.telemetry.stateLabels.lightSleep'),
      elapsedBedTime: '7h 45m',
      elapsedSleepTime: `${formatDuration(durationMinutes)} (100% Guaranteed)`,
    },
  };

  const current = stageData[currentStage];

  // Set stage helper
  const handleSelectStage = (stageKey) => {
    setCurrentStage(stageKey);
    if (stageKey === 'setup') {
      setIsAsleep(false);
    } else {
      setIsAsleep(true);
    }
  };

  const handleStartSleep = () => {
    setIsAsleep(true);
    setCurrentStage('latency');
  };

  const handleWakeUp = () => {
    setIsAsleep(false);
    setCurrentStage('setup');
  };

  return (
    <section id="demo" className="relative py-24 sm:py-32 bg-slate-darker overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-violet-900/10 via-indigo-950/5 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-accent/30 bg-violet-accent/5 text-violet-400 text-xs font-medium tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-accent animate-pulse" />
              {t('demo.badge')}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            <span className="text-white">{t('demo.headline')}</span>{' '}
            <span className="bg-gradient-to-r from-violet-accent via-bioluminescent to-muted-cyan bg-clip-text text-transparent">
              {t('demo.headlineAccent')}
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed"
          >
            {t('demo.sub')}
          </motion.p>
        </div>

        {/* Stage Timeline Navigation */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <div className="p-2 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md grid grid-cols-2 sm:grid-cols-5 gap-1.5">
            {[
              { id: 'setup', num: '01' },
              { id: 'latency', num: '02' },
              { id: 'onset', num: '03' },
              { id: 'sliding', num: '04' },
              { id: 'wake', num: '05' },
            ].map(({ id, num }) => (
              <button
                key={id}
                onClick={() => handleSelectStage(id)}
                className={`px-3 py-3 rounded-xl text-left transition-all relative ${
                  currentStage === id
                    ? 'bg-violet-600/20 border border-violet-500/40 text-white shadow-lg shadow-violet-950/60'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.03] border border-transparent'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span className={currentStage === id ? 'text-violet-300' : 'text-gray-500'}>
                    {num}
                  </span>
                  {currentStage === id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping" />
                  )}
                </div>
                <div className="text-xs font-semibold truncate">
                  {t(`demo.stages.${id}.name`)}
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Grid: Phone Mockup + Telemetry HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left: Interactive Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/19] rounded-[48px] p-3 bg-gradient-to-b from-slate-800 via-slate-900 to-black border-[5px] border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(124,58,237,0.15)] ring-1 ring-white/10 overflow-hidden">
              {/* Dynamic Island / Speaker */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-end px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700/60" />
              </div>

              {/* OLED Screen Canvas */}
              <div
                className={`relative w-full h-full rounded-[38px] overflow-hidden flex flex-col transition-colors duration-700 ${
                  isAsleep ? 'bg-black text-white' : 'bg-slate-950 text-white'
                }`}
              >
                {/* Status Bar */}
                <div className="pt-3 px-6 flex justify-between items-center text-[11px] font-mono text-gray-500 z-20">
                  <span>23:30</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>BLE 98%</span>
                  </div>
                </div>

                {/* APP VIEW 1: PRE-SLEEP SETUP MODE */}
                {!isAsleep && (
                  <div className="flex-1 px-5 pt-8 pb-6 flex flex-col justify-between">
                    <div>
                      {/* App Title */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-[10px] uppercase font-mono tracking-widest text-violet-400">
                            ONSET v1.0
                          </p>
                          <h4 className="text-lg font-bold text-white tracking-tight">
                            {t('demo.setupTitle')}
                          </h4>
                        </div>
                        <div className="w-7 h-7 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
                          </svg>
                        </div>
                      </div>

                      {/* Giant Duration Display */}
                      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-center mb-4">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">
                          {t('demo.durationLabel')}
                        </p>
                        <div className="flex items-center justify-center gap-3">
                          <button
                            onClick={() => setDurationMinutes(Math.max(300, durationMinutes - 15))}
                            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white font-mono text-base flex items-center justify-center transition-colors"
                          >
                            -
                          </button>
                          <span className="text-3xl font-extrabold tracking-tight font-mono text-white">
                            {formatDuration(durationMinutes)}
                          </span>
                          <button
                            onClick={() => setDurationMinutes(Math.min(600, durationMinutes + 15))}
                            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white font-mono text-base flex items-center justify-center transition-colors"
                          >
                            +
                          </button>
                        </div>

                        {/* Preset buttons */}
                        <div className="mt-3 flex items-center justify-center gap-1.5 flex-wrap">
                          {presets.map((p) => (
                            <button
                              key={p.minutes}
                              onClick={() => setDurationMinutes(p.minutes)}
                              className={`px-2 py-1 rounded-md text-[10px] font-mono transition-all ${
                                durationMinutes === p.minutes
                                  ? 'bg-violet-600 text-white font-bold'
                                  : 'bg-white/5 text-gray-400 hover:text-white'
                              }`}
                            >
                              {p.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Circadian Anchor Toggle */}
                      <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 mb-4">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-medium text-white flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            {t('demo.circadianAnchorLabel')}
                          </span>
                          <input
                            type="checkbox"
                            checked={anchorEnabled}
                            onChange={(e) => setAnchorEnabled(e.target.checked)}
                            className="accent-violet-600 rounded cursor-pointer"
                          />
                        </div>
                        <p className="text-[10px] text-gray-400 leading-relaxed">
                          {t('demo.anchorActive', { time: anchorTime })}
                        </p>
                      </div>

                      {/* BLE Wearable Status */}
                      <div className="px-3 py-2 rounded-xl bg-violet-950/20 border border-violet-500/20 flex items-center justify-between text-[10px] text-gray-400">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{t('demo.hardwareStatus')}</span>
                        </div>
                        <span className="font-mono text-violet-300">72 bpm</span>
                      </div>
                    </div>

                    {/* Single Engage Button */}
                    <button
                      onClick={handleStartSleep}
                      className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-violet-accent to-indigo-500 hover:from-violet-500 hover:to-indigo-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-violet-900/60 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                      {t('demo.startSleepBtn')}
                    </button>
                  </div>
                )}

                {/* APP VIEW 2: ACTIVE SLEEP (PURE OLED BLACK SCREEN) */}
                {isAsleep && (
                  <div
                    onClick={() => setShowTelemetryHUD(!showTelemetryHUD)}
                    className="flex-1 p-5 flex flex-col justify-between items-center text-center cursor-pointer select-none bg-black"
                  >
                    {/* Minimalist Breathing Bioluminescent Orb */}
                    <div className="flex-1 flex flex-col items-center justify-center w-full">
                      <motion.div
                        animate={{
                          scale: [1, 1.35, 1],
                          opacity: [0.15, 0.45, 0.15],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 5,
                          ease: 'easeInOut',
                        }}
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-600 via-bioluminescent to-cyan-400 blur-md"
                      />

                      <p className="mt-8 text-[11px] text-gray-500 font-mono tracking-widest uppercase">
                        {currentStage === 'latency'
                          ? 'Absorbing Latency Gap...'
                          : currentStage === 'onset'
                          ? 'Sleep Onset Locked'
                          : currentStage === 'sliding'
                          ? 'Optimizing Sleep Architecture'
                          : 'Optimal Wake Sequence'}
                      </p>

                      <p className="mt-1 text-[10px] text-gray-600">
                        {t('demo.tapToInspect')}
                      </p>
                    </div>

                    {/* Minimalist Action: Wake / Cancel */}
                    <div className="w-full">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWakeUp();
                        }}
                        className="w-full py-2.5 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.02] text-xs text-gray-400 hover:text-white transition-all font-mono"
                      >
                        {t('demo.stopSleepBtn')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Biological Telemetry & Logic HUD */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Active Stage Description Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <span className="text-8xl font-mono font-black text-white">0{current.step}</span>
              </div>

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                  PHASE 0{current.step} OF 05
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {current.name}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
                  {current.desc}
                </p>

                {/* Telemetry Metrics Grid */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/5">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] uppercase font-mono text-gray-400 block mb-1">
                      {t('demo.telemetry.heartRate')}
                    </span>
                    <span className="text-lg font-bold font-mono text-violet-300">
                      {current.hr} <span className="text-xs text-gray-500">BPM</span>
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] uppercase font-mono text-gray-400 block mb-1">
                      {t('demo.telemetry.hrv')}
                    </span>
                    <span className="text-lg font-bold font-mono text-cyan-300">
                      {current.hrv} <span className="text-xs text-gray-500">ms</span>
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] uppercase font-mono text-gray-400 block mb-1">
                      Bed Elapsed
                    </span>
                    <span className="text-sm font-bold font-mono text-gray-300">
                      {current.elapsedBedTime}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] uppercase font-mono text-gray-400 block mb-1">
                      Onset Counter
                    </span>
                    <span className="text-sm font-bold font-mono text-emerald-400">
                      {current.elapsedSleepTime}
                    </span>
                  </div>
                </div>

                {/* Biological Comparison Breakdown */}
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-red-500/5 via-violet-500/5 to-emerald-500/5 border border-white/5">
                  <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    {t('demo.telemetry.traditionalComparison')}
                  </h4>
                  <div className="space-y-1.5 text-xs">
                    <p className="text-red-400/90 flex items-start gap-2">
                      <span className="font-bold">✕</span>
                      <span>{t('demo.telemetry.tradAlarmLoss')}</span>
                    </p>
                    <p className="text-emerald-400 flex items-start gap-2">
                      <span className="font-bold">✓</span>
                      <span>{t('demo.telemetry.onsetGuaranteed')}</span>
                    </p>
                  </div>
                </div>

                {/* Interactive Stage Step Controls */}
                <div className="mt-6 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const keys = ['setup', 'latency', 'onset', 'sliding', 'wake'];
                        const idx = keys.indexOf(currentStage);
                        const prevKey = keys[Math.max(0, idx - 1)];
                        handleSelectStage(prevKey);
                      }}
                      disabled={currentStage === 'setup'}
                      className="px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 text-xs text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                      ← Previous Stage
                    </button>
                    <button
                      onClick={() => {
                        const keys = ['setup', 'latency', 'onset', 'sliding', 'wake'];
                        const idx = keys.indexOf(currentStage);
                        const nextKey = keys[Math.min(keys.length - 1, idx + 1)];
                        handleSelectStage(nextKey);
                      }}
                      disabled={currentStage === 'wake'}
                      className="px-4 py-1.5 rounded-lg bg-violet-600/30 hover:bg-violet-600/40 border border-violet-500/30 text-xs text-violet-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-medium"
                    >
                      Next Stage →
                    </button>
                  </div>

                  <button
                    onClick={() => handleSelectStage('setup')}
                    className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    Reset Simulation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

