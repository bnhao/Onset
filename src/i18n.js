import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        problem: 'The Problem',
        solution: 'The Solution',
        demo: 'Interactive Demo',
        features: 'Features',
        personas: "Who It's For",
        tech: 'Tech Specs',
        joinWaitlist: 'Join Waitlist',
      },
      hero: {
        tagline: 'Sleep Duration Management',
        headline: 'Stop Tracking Sleep.',
        headlineAccent: 'Start Engineering It.',
        sub: 'Onset is the first alarm that counts forward from when you actually fall asleep — not when you set it. Powered by biometric data and circadian science.',
        cta: 'Join the Waitlist',
        ctaSub: 'MVP launching Q1 2027 · iOS · Xiaomi Band',
        tryDemo: 'Try Interactive Demo',
        statSummary: 'Guaranteed 100% of your biological sleep duration.',
      },
      waitlist: {
        title: 'Claim Your Circadian Edge',
        subtitle: 'Be the first to experience latency-adjusted sleep duration management. Early access batch limited to 2,500 testers.',
        emailPlaceholder: 'Enter your primary email address',
        submitButton: 'Get Priority Access',
        submitting: 'Securing Your Spot...',
        roleLabel: 'Your Profile',
        roles: {
          developer: 'Overloaded Developer',
          shiftWorker: 'Shift Worker',
          biohacker: 'Biohacker / Athlete',
          other: 'Sleep Optimizer',
        },
        deviceLabel: 'Hardware Preference',
        devices: {
          xiaomi: 'Xiaomi Band (BLE 5.0)',
          appleWatch: 'Apple Watch (Future)',
          phoneOnly: 'iPhone CoreMotion + Mic',
        },
        successTitle: 'You are on the Priority Waitlist!',
        successSubtitle: 'Position #{{position}} reserved. We have locked in your circadian early-access token.',
        sharePrompt: 'Share Onset with fellow developers & sleep hackers:',
        copyLink: 'Copy Referral Link',
        linkCopied: 'Link Copied to Clipboard!',
        resetForm: 'Register another profile',
        validation: {
          invalidEmail: 'Please enter a valid email address.',
          emptyEmail: 'Email address is required.',
        },
        privacyNote: 'Zero spam. Encrypted biometric security. No third-party ad networks.',
      },
      demo: {
        badge: 'Interactive Experience',
        headline: 'Experience the',
        headlineAccent: 'Paradigm Shift.',
        sub: 'Test how Onset eliminates sleep math anxiety and guarantees biological recovery in real time.',
        phoneHeader: 'Onset Core OS',
        setupTitle: 'Desired Biological Recovery',
        durationLabel: 'Target Sleep Duration',
        circadianAnchorLabel: 'Circadian Anchor (Hard Ceiling)',
        anchorActive: 'Protected: Wake no later than {{time}}',
        anchorTooltip: 'Prevents schedule drift even if onset is delayed.',
        hardwareStatus: 'Xiaomi Band 8 Connected',
        signalQuality: 'BLE 5.0 · 98% Link Quality',
        startSleepBtn: 'Engage Onset Sleep',
        stopSleepBtn: 'Wake / Exit Sleep Mode',
        oledNotice: 'Pure OLED Black Mode Active · Zero Visual Light Pollution',
        tapToInspect: 'Tap screen to view biological telemetry',
        simulationControls: 'Interactive Simulation Stages',
        stages: {
          setup: {
            name: '1. Setup',
            desc: 'Choose target duration and set your Circadian Anchor fail-safe.',
          },
          latency: {
            name: '2. Latency Gap',
            desc: 'Clock hidden. Cortisol drops. Onset waits for actual loss of consciousness.',
          },
          onset: {
            name: '3. Sleep Detected',
            desc: 'Biometrics lock sleep onset at +14m. The 7h 30m countdown starts NOW.',
          },
          sliding: {
            name: '4. Sliding Window',
            desc: 'Avoids Slow-Wave Sleep (SWS) interruption. Targets light sleep transition.',
          },
          wake: {
            name: '5. Optimal Wake',
            desc: 'Gentle haptic wake-up. 100% target duration met with zero sleep debt.',
          },
        },
        telemetry: {
          title: 'Live Biometric Telemetry',
          hrv: 'Heart Rate Variability',
          heartRate: 'Heart Rate',
          actigraphy: 'Actigraphy Movement',
          sleepState: 'Detected State',
          traditionalComparison: 'Traditional Alarm vs. Onset',
          tradAlarmLoss: 'Traditional Alarm: Loses 14–20 min of sleep every single night.',
          onsetGuaranteed: 'Onset: 100% biological duration delivered.',
          stateLabels: {
            awake: 'Awake (Relaxing)',
            fallingAsleep: 'Pre-Sleep Drowsiness',
            deepSleep: 'Slow-Wave Sleep (SWS)',
            lightSleep: 'Light Sleep (Optimal Wake Window)',
          },
        },
        presets: {
          power: '6h 00m',
          optimal: '7h 30m',
          deep: '8h 15m',
        },
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
        demo: 'Démo Interactive',
        features: 'Fonctionnalités',
        personas: 'Pour Qui',
        tech: 'Tech',
        joinWaitlist: "Rejoindre l'Attente",
      },
      hero: {
        tagline: 'Gestion de la Durée de Sommeil',
        headline: 'Arrêtez de Suivre le Sommeil.',
        headlineAccent: "Commencez à l'Ingénierer.",
        sub: "Onset est le premier réveil qui compte à partir du moment où vous vous endormez réellement — pas quand vous le réglez. Propulsé par des données biométriques et la science circadienne.",
        cta: "Rejoindre la Liste d'Attente",
        ctaSub: 'MVP lancement T1 2027 · iOS · Xiaomi Band',
        tryDemo: 'Tester la Démo Interactive',
        statSummary: 'Garantie de 100% de votre temps de sommeil biologique.',
      },
      waitlist: {
        title: 'Revendiquez Votre Avantage Circadien',
        subtitle: 'Soyez parmi les premiers à tester la gestion de durée ajustée à la latence. Accès préliminaire limité à 2 500 testeurs.',
        emailPlaceholder: 'Entrez votre adresse email principale',
        submitButton: 'Obtenir mon Accès Prioritaire',
        submitting: 'Réservation en cours...',
        roleLabel: 'Votre Profil',
        roles: {
          developer: 'Développeur Surchargé',
          shiftWorker: 'Travailleur Posté',
          biohacker: 'Biohacker / Athlète',
          other: 'Optimisateur de Sommeil',
        },
        deviceLabel: 'Matériel Préféré',
        devices: {
          xiaomi: 'Xiaomi Band (BLE 5.0)',
          appleWatch: 'Apple Watch (Futur)',
          phoneOnly: 'Capteurs iPhone + Micro',
        },
        successTitle: "Vous êtes sur la Liste d'Attente Prioritaire !",
        successSubtitle: 'Position #{{position}} réservée. Votre jeton d’accès anticipé est verrouillé.',
        sharePrompt: 'Partagez Onset avec vos collègues et optimisateurs de sommeil :',
        copyLink: 'Copier le Lien de Parrainage',
        linkCopied: 'Lien copié dans le presse-papier !',
        resetForm: 'Enregistrer un autre profil',
        validation: {
          invalidEmail: 'Veuillez saisir une adresse email valide.',
          emptyEmail: "L'adresse email est requise.",
        },
        privacyNote: 'Zéro spam. Sécurité biométrique chiffrée. Aucune régie publicitaire tierce.',
      },
      demo: {
        badge: 'Expérience Interactive',
        headline: 'Vivez le',
        headlineAccent: 'Changement de Paradigme.',
        sub: "Voyez comment Onset supprime l'angoisse du calcul du sommeil et garantit votre récupération biologique en temps réel.",
        phoneHeader: 'Onset Core OS',
        setupTitle: 'Récupération Biologique Souhaitée',
        durationLabel: 'Durée Cible de Sommeil',
        circadianAnchorLabel: 'Ancre Circadienne (Plafond)',
        anchorActive: 'Protégé : Réveil au plus tard à {{time}}',
        anchorTooltip: "Empêche le décalage de rythme même en cas d'endormissement tardif.",
        hardwareStatus: 'Xiaomi Band 8 Connecté',
        signalQuality: 'BLE 5.0 · Liaison 98%',
        startSleepBtn: 'Engager le Sommeil Onset',
        stopSleepBtn: 'Réveil / Quitter le Mode Sommeil',
        oledNotice: 'Mode Écran Noir OLED Actif · Zéro Pollution Lumineuse',
        tapToInspect: "Touchez l'écran pour afficher la télémétrie",
        simulationControls: 'Étapes de la Simulation',
        stages: {
          setup: {
            name: '1. Configuration',
            desc: "Choisissez la durée et l'Ancre Circadienne de sécurité.",
          },
          latency: {
            name: '2. Fossé de Latence',
            desc: "Horloge masquée. Chute du cortisol. Onset attend l'endormissement réel.",
          },
          onset: {
            name: '3. Sommeil Détecté',
            desc: "Biométrie confirme l'endormissement à +14 min. Le compte à rebours démarre ICI.",
          },
          sliding: {
            name: '4. Fenêtre Glissante',
            desc: 'Évite le Sommeil Lent Profond (SLP) et cible le sommeil léger.',
          },
          wake: {
            name: '5. Réveil Optimal',
            desc: 'Réveil haptique doux. 100% de la durée atteinte sans dette de sommeil.',
          },
        },
        telemetry: {
          title: 'Télémétrie Biométrique en Direct',
          hrv: 'Variabilité Cardiaque (VFC)',
          heartRate: 'Fréquence Cardiaque',
          actigraphy: 'Mouvements Actigraphiques',
          sleepState: 'État Détecté',
          traditionalComparison: 'Réveil Traditionnel vs. Onset',
          tradAlarmLoss: 'Réveil Classique : Perd 14 à 20 min de sommeil chaque nuit.',
          onsetGuaranteed: 'Onset : 100% de la durée biologique délivrée.',
          stateLabels: {
            awake: 'Éveillé (Détente)',
            fallingAsleep: 'Somnolence Pré-Sommeil',
            deepSleep: 'Sommeil Lent Profond (SLP)',
            lightSleep: 'Sommeil Léger (Fenêtre de Réveil Optimale)',
          },
        },
        presets: {
          power: '6h 00m',
          optimal: '7h 30m',
          deep: '8h 15m',
        },
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
