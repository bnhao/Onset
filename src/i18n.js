import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        problem: 'The Problem',
        solution: 'The Solution',
        features: 'Features',
        personas: "Who It's For",
        tech: 'Tech',
      },
      hero: {
        tagline: 'Sleep Duration Management',
        headline: 'Stop Tracking Sleep.',
        headlineAccent: 'Start Engineering It.',
        sub: 'Onset is the first alarm that counts forward from when you actually fall asleep — not when you set it. Powered by biometric data and circadian science.',
        cta: 'Join the Waitlist',
        ctaSub: 'MVP launching Q1 2027 · iOS · Xiaomi Band',
      },
      agitation: {
        badge: 'The Problem',
        headline: 'Your alarm is biologically',
        headlineAccent: 'broken.',
        intro: 'Every fixed-time alarm makes an assumption that is always wrong: that you fell asleep the moment you set it.',
        stats: {
          latency: {
            value: '10–20 min',
            label: 'Average Sleep Latency',
            desc: 'The time it actually takes to fall asleep. Your alarm ignores this entirely.',
          },
          debt: {
            value: '2.3 hrs',
            label: 'Weekly Sleep Debt',
            desc: 'Accumulated deficit from the Sleep Latency Gap alone.',
          },
          orthosomnia: {
            value: '42%',
            label: 'Suffer Orthosomnia',
            desc: 'Clock-watching anxiety that paradoxically delays sleep onset.',
          },
        },
        orthosomnia: {
          title: 'Sleep Math Anxiety (Orthosomnia)',
          desc: "You lie in bed calculating: \"If I fall asleep RIGHT NOW, I'll get 6 hours and 43 minutes.\" This mathematical fixation elevates cortisol, activates your sympathetic nervous system, and pushes sleep onset further away. The harder you try to sleep, the longer it takes.",
        },
        latencyGap: {
          title: 'The Sleep Latency Gap',
          desc: "It takes the average person 10–20 minutes to fall asleep. Your alarm doesn't know this. It counts from when you set it — not from when you actually lost consciousness. You think you're getting 7 hours. You're getting 6 hours and 40 minutes. Every. Single. Night.",
        },
      },
      solution: {
        badge: 'The Solution',
        headline: 'Engineered for how',
        headlineAccent: 'sleep actually works.',
        features: {
          latencyTracking: {
            title: 'Latency-Adjusted Tracking',
            desc: 'Onset monitors your biometrics via the Xiaomi Band over BLE. It detects sleep onset — the actual moment you fall asleep — and only then starts counting your requested duration. No more Sleep Latency Gap.',
            detail: 'By removing the clock from your pre-sleep routine, Onset passively lowers cortisol levels. You stop doing sleep math. You stop watching the clock. You just... sleep.',
          },
          circadianAnchoring: {
            title: 'Circadian Anchoring',
            desc: "Every alarm needs a fail-safe. Onset's Circadian Anchor is a hard-ceiling wake time that prevents your schedule from drifting indefinitely. If sleep onset is delayed too long, the anchor ensures you still wake within your circadian window.",
            detail: 'This prevents permanent schedule misalignment while still respecting your requested sleep duration as the primary goal.',
          },
          minimalistUI: {
            title: 'One Input. One Button. Pure Black.',
            desc: 'Tell Onset how long you want to sleep. Tap one button. The screen goes pure black — zero light pollution, zero distractions. No graphs. No scores. No clock.',
            detail: "The absence of visual information is the feature. Every photon your screen emits suppresses melatonin. Onset's UI is designed to disappear.",
          },
        },
      },
      personas: {
        badge: "Who It's For",
        headline: 'Built for people who',
        headlineAccent: "can't afford bad sleep.",
        cards: {
          developer: {
            title: 'The Overloaded Developer',
            pain: 'You push code until 2 AM, set an alarm for 8 AM, and wonder why you feel wrecked after "6 hours" of sleep.',
            solution: 'Onset guarantees your requested biological recovery time. If you need 7 hours, you get 7 hours — measured from actual sleep onset, not from when you closed your laptop.',
            tag: 'Sprint Recovery',
          },
          shiftWorker: {
            title: 'The Shift Worker',
            pain: "Non-traditional hours mean massive sleep latency. Your body doesn't know when it's supposed to sleep, and the gap between \"lights out\" and \"unconscious\" can be 30+ minutes.",
            solution: "Onset's Circadian Anchoring adapts to your irregular schedule while Latency-Adjusted Tracking ensures every minute of your limited sleep window counts.",
            tag: 'Schedule Flexibility',
          },
          biohacker: {
            title: 'The Biohacker',
            pain: 'Waking up mid-cycle — especially during Slow-Wave Sleep — crushes your Human Growth Hormone release and torpedoes recovery. Standard alarms have no idea where you are in your sleep architecture.',
            solution: "Onset's 15-minute sliding window algorithm uses actigraphy data to find the optimal wake point near your requested duration, avoiding SWS interruptions and maximizing HGH secretion.",
            tag: 'Recovery Optimization',
          },
        },
      },
      tech: {
        badge: 'Under The Hood',
        headline: 'MVP',
        headlineAccent: 'Architecture',
        primary: {
          title: 'Primary: Xiaomi Band via BLE',
          desc: 'The Xiaomi Band (Mi Band) provides continuous heart rate and actigraphy data streamed over Bluetooth Low Energy. Onset uses this data to detect sleep onset and run a 15-minute sliding window algorithm for optimal wake timing.',
          specs: [
            'Heart Rate Variability (HRV) monitoring',
            'Tri-axis accelerometer actigraphy',
            'BLE 5.0 low-power streaming',
            '15-min sliding window wake algorithm',
          ],
        },
        fallback: {
          title: 'Plan B: iPhone Sensors',
          desc: "If the wearable is unavailable, Onset falls back to the iPhone's CoreMotion framework (accelerometer + gyroscope) combined with microphone-based breathing analysis for sleep onset detection.",
          specs: [
            'CoreMotion accelerometer + gyroscope',
            'Ambient microphone breathing detection',
            'On-device ML classification',
            'No cloud dependency — fully local',
          ],
        },
      },
      footer: {
        cta: 'Ready to sleep smarter?',
        button: 'Join the Waitlist',
        copy: '© 2027 Onset. Engineered for sleep.',
      },
    },
  },
  fr: {
    translation: {
      nav: {
        problem: 'Le Problème',
        solution: 'La Solution',
        features: 'Fonctionnalités',
        personas: 'Pour Qui',
        tech: 'Tech',
      },
      hero: {
        tagline: 'Gestion de la Durée de Sommeil',
        headline: 'Arrêtez de Suivre le Sommeil.',
        headlineAccent: "Commencez à l'Ingénierer.",
        sub: "Onset est le premier réveil qui compte à partir du moment où vous vous endormez réellement — pas quand vous le réglez. Propulsé par des données biométriques et la science circadienne.",
        cta: "Rejoindre la Liste d'Attente",
        ctaSub: 'MVP lancement T1 2027 · iOS · Xiaomi Band',
      },
      agitation: {
        badge: 'Le Problème',
        headline: 'Votre réveil est biologiquement',
        headlineAccent: 'défaillant.',
        intro: "Chaque réveil à heure fixe repose sur une hypothèse toujours fausse : que vous vous êtes endormi à l'instant où vous l'avez réglé.",
        stats: {
          latency: {
            value: '10–20 min',
            label: "Latence d'Endormissement Moyenne",
            desc: "Le temps réel pour s'endormir. Votre réveil l'ignore totalement.",
          },
          debt: {
            value: '2,3 h',
            label: 'Dette de Sommeil Hebdomadaire',
            desc: 'Déficit accumulé uniquement par le Fossé de Latence.',
          },
          orthosomnia: {
            value: '42%',
            label: "Souffrent d'Orthosomnie",
            desc: "L'anxiété du calcul du sommeil qui, paradoxalement, retarde l'endormissement.",
          },
        },
        orthosomnia: {
          title: 'Anxiété Mathématique du Sommeil (Orthosomnie)',
          desc: "Vous êtes au lit à calculer : « Si je m'endors MAINTENANT, j'aurai 6 heures et 43 minutes. » Cette fixation mathématique élève le cortisol, active votre système nerveux sympathique et repousse l'endormissement. Plus vous essayez de dormir, plus ça prend du temps.",
        },
        latencyGap: {
          title: 'Le Fossé de Latence du Sommeil',
          desc: "Il faut en moyenne 10 à 20 minutes pour s'endormir. Votre réveil ne le sait pas. Il compte depuis le moment où vous l'avez réglé — pas depuis votre perte de conscience réelle. Vous pensez dormir 7 heures. Vous dormez 6 heures 40. Chaque. Nuit.",
        },
      },
      solution: {
        badge: 'La Solution',
        headline: 'Conçu pour la façon dont',
        headlineAccent: 'le sommeil fonctionne réellement.',
        features: {
          latencyTracking: {
            title: 'Suivi Ajusté à la Latence',
            desc: "Onset surveille vos données biométriques via le Xiaomi Band en BLE. Il détecte l'endormissement réel et ne commence alors qu'à compter la durée demandée. Fini le Fossé de Latence.",
            detail: "En retirant l'horloge de votre routine pré-sommeil, Onset réduit passivement les niveaux de cortisol. Vous arrêtez les calculs. Vous arrêtez de regarder l'heure. Vous... dormez.",
          },
          circadianAnchoring: {
            title: 'Ancrage Circadien',
            desc: "Chaque réveil a besoin d'un filet de sécurité. L'Ancre Circadienne d'Onset est un plafond de réveil qui empêche votre horaire de dériver indéfiniment.",
            detail: "Cela prévient le désalignement permanent de votre emploi du temps tout en respectant votre durée de sommeil demandée comme objectif principal.",
          },
          minimalistUI: {
            title: 'Une Entrée. Un Bouton. Noir Pur.',
            desc: "Dites à Onset combien de temps vous voulez dormir. Appuyez sur un bouton. L'écran devient noir pur — zéro pollution lumineuse, zéro distraction.",
            detail: "L'absence d'information visuelle EST la fonctionnalité. Chaque photon émis par votre écran supprime la mélatonine. L'interface d'Onset est conçue pour disparaître.",
          },
        },
      },
      personas: {
        badge: 'Pour Qui',
        headline: 'Construit pour ceux qui',
        headlineAccent: 'ne peuvent pas se permettre un mauvais sommeil.',
        cards: {
          developer: {
            title: 'Le Développeur Surchargé',
            pain: "Vous codez jusqu'à 2h du matin, réglez le réveil à 8h, et vous demandez pourquoi vous êtes épuisé après « 6 heures » de sommeil.",
            solution: "Onset garantit votre temps de récupération biologique demandé. Si vous avez besoin de 7 heures, vous obtenez 7 heures — mesurées depuis l'endormissement réel.",
            tag: 'Récupération Sprint',
          },
          shiftWorker: {
            title: 'Le Travailleur Posté',
            pain: "Des horaires non traditionnels signifient une latence d'endormissement massive. Votre corps ne sait pas quand il est censé dormir.",
            solution: "L'Ancrage Circadien d'Onset s'adapte à votre emploi du temps irrégulier tandis que le Suivi Ajusté garantit que chaque minute de votre fenêtre de sommeil limitée compte.",
            tag: 'Flexibilité Horaire',
          },
          biohacker: {
            title: 'Le Biohacker',
            pain: "Se réveiller en milieu de cycle — surtout pendant le Sommeil Lent Profond — écrase votre libération d'Hormone de Croissance et torpille la récupération.",
            solution: "L'algorithme de fenêtre glissante de 15 minutes d'Onset utilise les données d'actigraphie pour trouver le point de réveil optimal, évitant les interruptions SLP et maximisant la sécrétion d'HGH.",
            tag: 'Optimisation Récupération',
          },
        },
      },
      tech: {
        badge: 'Sous le Capot',
        headline: 'Architecture',
        headlineAccent: 'MVP',
        primary: {
          title: 'Principal : Xiaomi Band via BLE',
          desc: "Le Xiaomi Band fournit des données continues de fréquence cardiaque et d'actigraphie en Bluetooth Low Energy. Onset utilise ces données pour détecter l'endormissement et exécuter un algorithme de fenêtre glissante de 15 minutes.",
          specs: [
            'Surveillance de la Variabilité de Fréquence Cardiaque (VFC)',
            'Actigraphie par accéléromètre tri-axial',
            'Streaming BLE 5.0 basse consommation',
            'Algorithme de réveil à fenêtre glissante de 15 min',
          ],
        },
        fallback: {
          title: 'Plan B : Capteurs iPhone',
          desc: "Si le bracelet n'est pas disponible, Onset utilise le framework CoreMotion de l'iPhone combiné à l'analyse respiratoire par microphone pour la détection d'endormissement.",
          specs: [
            'Accéléromètre + gyroscope CoreMotion',
            'Détection respiratoire par microphone ambiant',
            "Classification ML sur l'appareil",
            'Aucune dépendance cloud — entièrement local',
          ],
        },
      },
      footer: {
        cta: 'Prêt à mieux dormir ?',
        button: "Rejoindre la Liste d'Attente",
        copy: '© 2027 Onset. Conçu pour le sommeil.',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
