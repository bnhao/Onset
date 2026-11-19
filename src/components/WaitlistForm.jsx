import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export default function WaitlistForm({ compact = false, defaultPersona = 'developer' }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(defaultPersona);
  const [device, setDevice] = useState('nightstand');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [copied, setCopied] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('onset_waitlist_registration');
      if (saved) {
        setSubmittedData(JSON.parse(saved));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const validateEmail = (val) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(val).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError(t('waitlist.validation.emptyEmail'));
      return;
    }

    if (!validateEmail(email.trim())) {
      setError(t('waitlist.validation.invalidEmail'));
      return;
    }

    setIsSubmitting(true);

    // Simulate async submission with network delay
    setTimeout(() => {
      const randomPosition = Math.floor(Math.random() * 400) + 1420;
      const record = {
        email: email.trim(),
        role,
        device,
        position: randomPosition,
        timestamp: new Date().toISOString(),
      };

      try {
        localStorage.setItem('onset_waitlist_registration', JSON.stringify(record));
      } catch {
        // localStorage fallback
      }

      setSubmittedData(record);
      setIsSubmitting(false);
    }, 900);
  };

  const handleCopy = () => {
    const shareUrl = `${window.location.origin}/?ref=${submittedData?.position || 'early'}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleReset = () => {
    try {
      localStorage.removeItem('onset_waitlist_registration');
    } catch {
      // Ignore
    }
    setSubmittedData(null);
    setEmail('');
    setError('');
  };

  // SUCCESS STATE
  if (submittedData) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-violet-950/40 via-slate-900/80 to-slate-950 border border-violet-500/30 shadow-2xl shadow-violet-950/50 text-left"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              CONFIRMED SPOT #{submittedData.position}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t('waitlist.successTitle')}
            </h3>
            <p className="mt-2 text-sm text-gray-300 leading-relaxed">
              {t('waitlist.successSubtitle', { position: submittedData.position })}
            </p>
            <div className="mt-3 text-xs text-gray-400 font-mono bg-white/[0.03] px-3 py-2 rounded-lg border border-white/5 flex items-center justify-between">
              <span>{submittedData.email}</span>
              <span className="text-violet-400">{t(`waitlist.roles.${submittedData.role}`)}</span>
            </div>
          </div>
        </div>

        {/* Share prompt */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            {t('waitlist.sharePrompt')}
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleCopy}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-violet-600/30 hover:bg-violet-600/40 text-violet-200 border border-violet-500/30 text-xs font-medium transition-all flex items-center justify-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              {copied ? t('waitlist.linkCopied') : t('waitlist.copyLink')}
            </button>
            <button
              onClick={handleReset}
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              {t('waitlist.resetForm')}
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  // COMPACT INLINE MODE (Hero)
  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
        <div className="relative flex flex-col sm:flex-row items-stretch gap-2.5 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-2xl shadow-violet-950/40 focus-within:border-violet-accent/60 transition-all">
          <div className="relative flex-1 flex items-center pl-4">
            <svg
              className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
              placeholder={t('waitlist.emailPlaceholder')}
              className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none py-2.5"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative px-6 py-3 bg-gradient-to-r from-violet-accent to-indigo-500 text-white font-semibold rounded-xl text-sm shadow-lg shadow-violet-accent/30 hover:shadow-violet-accent/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 flex-shrink-0"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>{t('waitlist.submitting')}</span>
              </>
            ) : (
              <>
                <span>{t('waitlist.submitButton')}</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            )}
          </button>
        </div>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="mt-2 text-xs text-red-400 font-medium pl-3 text-left"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    );
  }

  // FULL EXPANDED FORM (Footer / Dedicated Section)
  return (
    <form
      id="waitlist-form"
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 backdrop-blur-xl shadow-2xl text-left"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white tracking-tight">
          {t('waitlist.title')}
        </h3>
        <p className="mt-2 text-sm text-gray-400 leading-relaxed">
          {t('waitlist.subtitle')}
        </p>
      </div>

      {/* Role / Persona Selector */}
      <div className="mb-5">
        <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2.5">
          {t('waitlist.roleLabel')}
        </label>
        <div className="grid grid-cols-2 gap-2">
          {['developer', 'shiftWorker', 'biohacker', 'other'].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setRole(item)}
              className={`px-3 py-2.5 rounded-xl text-xs font-medium border text-left transition-all ${
                role === item
                  ? 'border-violet-accent bg-violet-500/15 text-white shadow-sm shadow-violet-500/20'
                  : 'border-white/5 bg-white/[0.02] text-gray-400 hover:border-white/15 hover:text-gray-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{t(`waitlist.roles.${item}`)}</span>
                {role === item && (
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-accent" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Hardware Preference */}
      <div className="mb-6">
        <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2.5">
          {t('waitlist.deviceLabel')}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[
            { id: 'nightstand', label: t('waitlist.devices.nightstand') },
            { id: 'mattress', label: t('waitlist.devices.mattress') },
            { id: 'appleWatch', label: t('waitlist.devices.appleWatch') },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setDevice(item.id)}
              className={`p-2.5 rounded-xl text-[11px] font-medium border text-center transition-all ${
                device === item.id
                  ? 'border-muted-cyan bg-cyan-500/15 text-cyan-200'
                  : 'border-white/5 bg-white/[0.02] text-gray-400 hover:border-white/15 hover:text-gray-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Email Input + Submit */}
      <div className="space-y-3">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError('');
            }}
            placeholder={t('waitlist.emailPlaceholder')}
            className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-gray-500 focus:outline-none transition-all ${
              error
                ? 'border-red-500/80 focus:border-red-500'
                : 'border-white/10 focus:border-violet-accent'
            }`}
          />
        </div>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="text-xs text-red-400 font-medium pl-1"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-violet-accent via-bioluminescent to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-violet-accent/25 hover:shadow-violet-accent/40 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>{t('waitlist.submitting')}</span>
            </>
          ) : (
            <>
              <span>{t('waitlist.submitButton')}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </>
          )}
        </button>
      </div>

      <p className="mt-4 text-[11px] text-gray-500 text-center">
        {t('waitlist.privacyNote')}
      </p>
    </form>
  );
}

