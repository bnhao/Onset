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

function StatCard({ value, label, desc, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="relative group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          {value}
        </p>
        <p className="mt-2 text-sm font-semibold text-white/90 tracking-wide">
          {label}
        </p>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

function ProblemBlock({ title, desc, icon, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="relative p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="mt-3 text-gray-400 leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Agitation() {
  const { t } = useTranslation();

  const stats = [
    {
      value: t('agitation.stats.latency.value'),
      label: t('agitation.stats.latency.label'),
      desc: t('agitation.stats.latency.desc'),
    },
    {
      value: t('agitation.stats.debt.value'),
      label: t('agitation.stats.debt.label'),
      desc: t('agitation.stats.debt.desc'),
    },
    {
      value: t('agitation.stats.orthosomnia.value'),
      label: t('agitation.stats.orthosomnia.label'),
      desc: t('agitation.stats.orthosomnia.desc'),
    },
  ];

  return (
    <section id="problem" className="relative py-24 sm:py-32 bg-slate-darker">
      {/* Section divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 text-xs font-medium tracking-widest uppercase">
            {t('agitation.badge')}
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
          <span className="text-white">{t('agitation.headline')}</span>{' '}
          <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            {t('agitation.headlineAccent')}
          </span>
        </motion.h2>

        {/* Intro */}
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-400 max-w-3xl leading-relaxed"
        >
          {t('agitation.intro')}
        </motion.p>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} index={i} {...stat} />
          ))}
        </div>

        {/* Problem Blocks */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProblemBlock
            index={0}
            title={t('agitation.orthosomnia.title')}
            desc={t('agitation.orthosomnia.desc')}
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            }
          />
          <ProblemBlock
            index={1}
            title={t('agitation.latencyGap.title')}
            desc={t('agitation.latencyGap.desc')}
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l2 2-2 2M19 13l2 2-2 2M21 3l-9 9" />
                <path d="M14 14l-2 2" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
