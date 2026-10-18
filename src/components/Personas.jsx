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

const personaStyles = {
  developer: {
    gradient: 'from-blue-500/10 to-violet-500/10',
    border: 'border-blue-500/20',
    tagBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    accent: 'from-blue-400 to-violet-400',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  shiftWorker: {
    gradient: 'from-amber-500/10 to-orange-500/10',
    border: 'border-amber-500/20',
    tagBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    accent: 'from-amber-400 to-orange-400',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
      </svg>
    ),
  },
  biohacker: {
    gradient: 'from-emerald-500/10 to-cyan-500/10',
    border: 'border-emerald-500/20',
    tagBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    accent: 'from-emerald-400 to-cyan-400',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
};

function PersonaCard({ personaKey, index }) {
  const { t } = useTranslation();
  const style = personaStyles[personaKey];

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="group relative h-full"
    >
      <div className={`relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 h-full flex flex-col`}>
        {/* Hover glow */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${style.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="relative flex flex-col flex-1">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-12 h-12 rounded-xl ${style.border} border bg-gradient-to-br ${style.gradient} flex items-center justify-center text-white/80`}>
              {style.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {t(`personas.cards.${personaKey}.title`)}
              </h3>
              <span className={`inline-block mt-1 px-2 py-0.5 rounded-full border text-[10px] font-medium tracking-wider uppercase ${style.tagBg}`}>
                {t(`personas.cards.${personaKey}.tag`)}
              </span>
            </div>
          </div>

          {/* Pain Point */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-wider text-red-400/70 font-medium mb-2">The Pain</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t(`personas.cards.${personaKey}.pain`)}
            </p>
          </div>

          {/* Solution */}
          <div className="mt-auto pt-4 border-t border-white/5">
            <p className="text-xs uppercase tracking-wider text-emerald-400/70 font-medium mb-2">How Onset Helps</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t(`personas.cards.${personaKey}.solution`)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Personas() {
  const { t } = useTranslation();
  const keys = ['developer', 'shiftWorker', 'biohacker'];

  return (
    <section id="personas" className="relative py-24 sm:py-32 bg-slate-darker">
      {/* Section divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bioluminescent/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full border border-bioluminescent/20 bg-bioluminescent/5 text-bioluminescent text-xs font-medium tracking-widest uppercase">
            {t('personas.badge')}
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
          <span className="text-white">{t('personas.headline')}</span>
          <br />
          <span className="bg-gradient-to-r from-bioluminescent to-muted-cyan bg-clip-text text-transparent">
            {t('personas.headlineAccent')}
          </span>
        </motion.h2>

        {/* Persona Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {keys.map((key, i) => (
            <PersonaCard key={key} personaKey={key} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
