import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const featureIcons = {
  latencyTracking: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M12 6v6l4 2" />
      <path d="M2 12h2M20 12h2M12 2v2M12 20v2" />
    </svg>
  ),
  circadianAnchoring: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
      <path d="M19 3v4M21 5h-4" />
    </svg>
  ),
  minimalistUI: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>
  ),
};

function FeatureCard({ featureKey, index }) {
  const { t } = useTranslation();

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="group relative"
    >
      <div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 h-full">
        {/* Hover glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-accent/5 to-muted-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative">
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-accent/10 to-muted-cyan/10 border border-violet-accent/20 flex items-center justify-center text-violet-400 group-hover:text-muted-cyan transition-colors duration-300">
            {featureIcons[featureKey]}
          </div>

          {/* Title */}
          <h3 className="mt-6 text-xl font-bold text-white">
            {t(`solution.features.${featureKey}.title`)}
          </h3>

          {/* Description */}
          <p className="mt-3 text-gray-400 leading-relaxed">
            {t(`solution.features.${featureKey}.desc`)}
          </p>

          {/* Detail - The "how it helps" */}
          <div className="mt-4 pt-4 border-t border-white/5">
            <p className="text-sm text-gray-500 leading-relaxed italic">
              {t(`solution.features.${featureKey}.detail`)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Solution() {
  const { t } = useTranslation();

  const featureKeys = ['latencyTracking', 'circadianAnchoring', 'minimalistUI'];

  return (
    <section id="solution" className="relative py-24 sm:py-32 bg-slate-darker">
      {/* Section divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-accent/20 to-transparent" />

      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-violet-accent/3 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full border border-violet-accent/20 bg-violet-accent/5 text-violet-400 text-xs font-medium tracking-widest uppercase">
            {t('solution.badge')}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          <span className="text-white">{t('solution.headline')}</span>
          <br />
          <span className="bg-gradient-to-r from-violet-accent via-bioluminescent to-muted-cyan bg-clip-text text-transparent">
            {t('solution.headlineAccent')}
          </span>
        </motion.h2>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureKeys.map((key, i) => (
            <FeatureCard key={key} featureKey={key} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
