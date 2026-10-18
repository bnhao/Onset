import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative py-24 sm:py-32 bg-slate-darker">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-accent/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* CTA Block */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {t('footer.cta')}
          </h2>

          <div className="mt-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-accent to-indigo-500 text-white font-semibold rounded-2xl text-lg shadow-lg shadow-violet-accent/25 hover:shadow-violet-accent/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]">
              <span className="relative z-10">{t('footer.button')}</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-accent to-indigo-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
            </button>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-accent to-muted-cyan flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-white/60">Onset</span>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-600">
              {t('footer.copy')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
