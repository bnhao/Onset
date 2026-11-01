import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import WaitlistForm from './WaitlistForm';

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
    <footer id="waitlist" className="relative py-24 sm:py-32 bg-slate-darker">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-accent/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Submittable Waitlist Form Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <WaitlistForm compact={false} />
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-accent to-muted-cyan flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-white/70">Onset</span>
              <span className="text-xs text-gray-500 ml-2 font-mono">v1.0-alpha</span>
            </div>

            {/* Quick links */}
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <a href="#problem" className="hover:text-white transition-colors">{t('nav.problem')}</a>
              <a href="#solution" className="hover:text-white transition-colors">{t('nav.solution')}</a>
              <a href="#demo" className="hover:text-white transition-colors">{t('nav.demo')}</a>
              <a href="#personas" className="hover:text-white transition-colors">{t('nav.personas')}</a>
              <a href="#tech" className="hover:text-white transition-colors">{t('nav.tech')}</a>
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
