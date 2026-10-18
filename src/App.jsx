import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load secondary sections for performance
const Agitation = lazy(() => import('./components/Agitation'));
const Solution = lazy(() => import('./components/Solution'));
const Personas = lazy(() => import('./components/Personas'));
const TechSpecs = lazy(() => import('./components/TechSpecs'));
const Footer = lazy(() => import('./components/Footer'));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-8 h-8 border-2 border-violet-accent/30 border-t-violet-accent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  const { ready } = useTranslation();

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-slate-darker text-white antialiased">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <Agitation />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Solution />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Personas />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TechSpecs />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}
