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

function SpecBlock({ badgeKey, titleKey, descKey, specsKey, variant, index }) {
  const { t } = useTranslation();
  const specs = t(specsKey, { returnObjects: true });
  const isPrimary = variant === 'primary';

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="relative group"
    >
      <div className={`relative p-8 rounded-2xl border h-full ${isPrimary
          ? 'border-violet-accent/20 bg-gradient-to-br from-violet-accent/5 to-transparent'
          : 'border-white/5 bg-white/[0.02]'
        }`}>
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isPrimary
              ? 'bg-violet-accent/10 border border-violet-accent/20 text-violet-400'
              : 'bg-muted-cyan/10 border border-muted-cyan/20 text-muted-cyan'
            }`}>
            {isPrimary ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <path d="M9 10c1-1.5 2-1.5 3 0s2 1.5 3 0" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            )}
          </div>
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wider uppercase ${isPrimary
              ? 'bg-violet-accent/10 border border-violet-accent/20 text-violet-400'
              : 'bg-muted-cyan/10 border border-muted-cyan/20 text-muted-cyan'
            }`}>
            {t(badgeKey)}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{t(titleKey)}</h3>
        <p className="text-gray-400 leading-relaxed mb-6">{t(descKey)}</p>

        {/* Specs list */}
        <ul className="space-y-3">
          {Array.isArray(specs) && specs.map((spec, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isPrimary ? 'bg-violet-accent' : 'bg-muted-cyan'
                }`} />
              <span className="text-sm text-gray-300 font-mono">{spec}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function TechSpecs() {
  const { t } = useTranslation();

  return (
    <section id="tech" className="relative py-24 sm:py-32 bg-slate-darker">
      {/* Section divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted-cyan/20 to-transparent" />

      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-muted-cyan/3 rounded-full blur-[120px]" />
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
          <span className="inline-flex items-center px-3 py-1 rounded-full border border-muted-cyan/20 bg-muted-cyan/5 text-muted-cyan text-xs font-medium tracking-widest uppercase">
            {t('tech.badge')}
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
          <span className="text-white">{t('tech.headline')}</span>{' '}
          <span className="bg-gradient-to-r from-muted-cyan to-violet-accent bg-clip-text text-transparent">
            {t('tech.headlineAccent')}
          </span>
        </motion.h2>

        {/* Explicit No-Wearable / No Xiaomi Band 8 Notice */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/[0.06] via-muted-cyan/[0.04] to-transparent"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              </svg>
            </div>
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase tracking-wider mb-2">
                {t('tech.noWearableNotice.badge')}
              </span>
              <h3 className="text-lg font-bold text-white">
                {t('tech.noWearableNotice.title')}
              </h3>
              <p className="mt-1.5 text-sm text-gray-300 leading-relaxed max-w-3xl">
                {t('tech.noWearableNotice.desc')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Spec Blocks */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpecBlock
            badgeKey="tech.primary.badge"
            titleKey="tech.primary.title"
            descKey="tech.primary.desc"
            specsKey="tech.primary.specs"
            variant="primary"
            index={0}
          />
          <SpecBlock
            badgeKey="tech.fallback.badge"
            titleKey="tech.fallback.title"
            descKey="tech.fallback.desc"
            specsKey="tech.fallback.specs"
            variant="fallback"
            index={1}
          />
        </div>
      </div>
    </section>
  );
}
