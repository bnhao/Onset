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
        sub: 'Onset is the first alarm that counts forward from when you actually fall asleep — not when you set it. Powered by contactless phone sensing and circadian science, with zero wearables required.',
        cta: 'Join the Waitlist',
        ctaSub: 'MVP launching Q1 2027 · iOS Phone-Only · No Wearable Required',
        tryDemo: 'Try Interactive Demo',
        statSummary: 'Guaranteed 100% of your biological sleep duration.',
      },
      waitlist: {
        title: 'Claim Your Circadian Edge',
        subtitle: 'Be the first to experience latency-adjusted sleep duration management — straight from your phone, nothing on your wrist. Early access batch limited to 2,500 testers.',
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
        deviceLabel: 'Preferred Phone Setup',
        devices: {
          nightstand: 'Nightstand (Acoustic)',
          mattress: 'On-Mattress (CoreMotion)',
          appleWatch: 'Optional Watch (Future)',
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
        privacyNote: 'Zero spam. 100% on-device processing — works completely offline in Airplane Mode.',
      },
      demo: {
        badge: 'Interactive Experience',
        headline: 'Experience the',
        headlineAccent: 'Paradigm Shift.',
        sub: 'Test how Onset eliminates sleep math anxiety and guarantees biological recovery using only your phone — no watch, ring, or band required.',
        phoneHeader: 'Onset Core OS',
        setupTitle: 'Desired Biological Recovery',
        durationLabel: 'Target Sleep Duration',
        circadianAnchorLabel: 'Circadian Anchor (Hard Ceiling)',
        anchorActive: 'Protected: Wake no later than {{time}}',
        anchorTooltip: 'Prevents schedule drift even if onset is delayed.',
        hardwareStatus: 'Phone Sensor Ready · No Wearable',
        airplaneBadge: 'Local ML',
        signalQuality: 'On-Device ML · Zero Wearable Needed',
        startSleepBtn: 'Engage Onset Sleep',
        stopSleepBtn: 'Wake / Exit Sleep Mode',
        oledNotice: 'Pure OLED Black Mode Active · Zero Visual Light Pollution',
        tapToInspect: 'Tap screen to peek at on-device telemetry',
        simulationControls: 'Interactive Simulation Stages',
        stages: {
          setup: {
            name: '1. Setup',
            desc: 'Choose target duration, set your Circadian Anchor, and place your phone on the nightstand — optionally in Airplane Mode.',
          },
          latency: {
            name: '2. Latency Gap',
            desc: 'Clock hidden. Cortisol drops. Onset passively listens to breathing cadence and room stillness, waiting for real sleep onset.',
          },
          onset: {
            name: '3. Sleep Detected',
            desc: 'Breathing rhythm stabilizes and micro-motion settles at +14m. The 7h 30m countdown starts NOW.',
          },
          sliding: {
            name: '4. Sliding Window',
            desc: 'Avoids Slow-Wave Sleep (SWS) interruption by tracking respiratory regularity and light-sleep transitions.',
          },
          wake: {
            name: '5. Optimal Wake',
            desc: 'Gentle progressive acoustic wake-up during light sleep. 100% target duration met with zero sleep debt.',
          },
        },
        telemetry: {
          title: 'On-Device Contactless Telemetry',
          breathingRate: 'Breathing Rate',
          cadenceStability: 'Rhythm Stability',
          actigraphy: 'Bedside Motion',
          sleepState: 'Detected State',
          traditionalComparison: 'Traditional Alarm vs. Onset',
          tradAlarmLoss: 'Traditional Alarm: Loses 14–20 min of sleep every single night.',
          onsetGuaranteed: 'Onset: 100% biological duration delivered — zero wearable needed.',
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
            desc: 'Using only your phone — nothing strapped to your wrist — Onset detects true sleep onset through contactless breathing and micro-motion sensing, then starts counting your requested duration. No more Sleep Latency Gap.',
            detail: 'By removing both the clock and uncomfortable wearables from your pre-sleep routine, Onset passively lowers cortisol levels. You stop doing sleep math. You just... sleep.',
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
            solution: "Onset's 15-minute sliding window algorithm uses contactless respiratory and micro-motion sensing right from your phone to find the optimal wake point, avoiding SWS interruptions and protecting HGH secretion — with nothing worn on your body.",
            tag: 'Recovery Optimization',
          },
        },
      },
      tech: {
        badge: 'Under The Hood',
        headline: 'Phone-Only MVP',
        headlineAccent: 'Architecture',
        noWearableNotice: {
          badge: 'Zero Wearables Required',
          title: 'Built for Your Phone — Not a Xiaomi Band 8 or Wrist Strap',
          desc: 'You should never have to charge or sleep wearing a band, watch, or ring just to wake up rested. The Onset MVP runs 100% natively on your iPhone using contactless sensing — works completely offline in Airplane Mode.',
        },
        primary: {
          badge: 'Primary · Nightstand Mode',
          title: 'Contactless Nightstand Sensing',
          desc: 'Just place your phone on your nightstand — nothing worn on your body. Onset uses passive ambient microphone breathing cadence analysis and on-device ML to lock sleep onset and run the 15-minute sliding wake window.',
          specs: [
            'Passive breathing cadence & respiratory regularity',
            '15-min sliding window optimal wake algorithm',
            '100% on-device ML — works offline in Airplane Mode',
            'Zero audio stored or uploaded to any cloud',
          ],
        },
        fallback: {
          badge: 'Optional Placement',
          title: 'On-Mattress CoreMotion Engine',
          desc: "Prefer placing your phone beside your pillow? Onset seamlessly engages the iPhone's CoreMotion framework (tri-axis accelerometer + gyroscope) to pair micro-movement actigraphy with breathing analysis for even tighter stage detection.",
          specs: [
            'CoreMotion tri-axis accelerometer + gyroscope',
            'Micro-movement actigraphy for SWS avoidance',
            'Ultra-low battery draw with pure OLED blackout',
            'No extra hardware — works with the phone you own',
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
        sub: "Onset est le premier réveil qui compte à partir du moment où vous vous endormez réellement — pas quand vous le réglez. Propulsé par la détection sans contact sur smartphone et la science circadienne, sans aucun bracelet connecté.",
        cta: "Rejoindre la Liste d'Attente",
        ctaSub: 'MVP lancement T1 2027 · iOS Téléphone Seul · Sans Objet Connecté',
        tryDemo: 'Tester la Démo Interactive',
        statSummary: 'Garantie de 100% de votre temps de sommeil biologique.',
      },
      waitlist: {
        title: 'Revendiquez Votre Avantage Circadien',
        subtitle: "Soyez parmi les premiers à tester la gestion de durée ajustée à la latence — directement depuis votre téléphone, rien au poignet. Accès préliminaire limité à 2 500 testeurs.",
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
        deviceLabel: 'Installation Téléphone Préférée',
        devices: {
          nightstand: 'Table de Chevet (Acoustique)',
          mattress: 'Sur Matelas (CoreMotion)',
          appleWatch: 'Montre Optionnelle (Futur)',
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
        privacyNote: 'Zéro spam. Traitement 100% local sur votre téléphone — fonctionne hors ligne en Mode Avion.',
      },
      demo: {
        badge: 'Expérience Interactive',
        headline: 'Vivez le',
        headlineAccent: 'Changement de Paradigme.',
        sub: "Voyez comment Onset supprime l'angoisse du calcul du sommeil et garantit votre récupération biologique avec votre téléphone seul — aucune montre ni bracelet requis.",
        phoneHeader: 'Onset Core OS',
        setupTitle: 'Récupération Biologique Souhaitée',
        durationLabel: 'Durée Cible de Sommeil',
        circadianAnchorLabel: 'Ancre Circadienne (Plafond)',
        anchorActive: 'Protégé : Réveil au plus tard à {{time}}',
        anchorTooltip: "Empêche le décalage de rythme même en cas d'endormissement tardif.",
        hardwareStatus: 'Capteur Téléphone Prêt · Sans Bracelet',
        airplaneBadge: 'ML Local',
        signalQuality: 'ML sur Appareil · Sans Objet Connecté',
        startSleepBtn: 'Engager le Sommeil Onset',
        stopSleepBtn: 'Réveil / Quitter le Mode Sommeil',
        oledNotice: 'Mode Écran Noir OLED Actif · Zéro Pollution Lumineuse',
        tapToInspect: "Touchez l'écran pour afficher la télémétrie locale",
        simulationControls: 'Étapes de la Simulation',
        stages: {
          setup: {
            name: '1. Configuration',
            desc: "Choisissez la durée cible, l'Ancre Circadienne, et posez votre téléphone sur la table de chevet — même en Mode Avion.",
          },
          latency: {
            name: '2. Fossé de Latence',
            desc: "Horloge masquée. Chute du cortisol. Onset écoute passivement la cadence respiratoire et le calme en attendant l'endormissement réel.",
          },
          onset: {
            name: '3. Sommeil Détecté',
            desc: "Le rythme respiratoire se stabilise et les micro-mouvements cessent à +14 min. Le compte à rebours démarre ICI.",
          },
          sliding: {
            name: '4. Fenêtre Glissante',
            desc: 'Évite le Sommeil Lent Profond (SLP) en suivant la régularité respiratoire et les transitions de sommeil léger.',
          },
          wake: {
            name: '5. Réveil Optimal',
            desc: 'Réveil acoustique progressif doux en sommeil léger. 100% de la durée atteinte sans dette de sommeil.',
          },
        },
        telemetry: {
          title: 'Télémétrie Sans Contact sur Appareil',
          breathingRate: 'Rythme Respiratoire',
          cadenceStability: 'Stabilité du Rythme',
          actigraphy: 'Mouvement Chevet',
          sleepState: 'État Détecté',
          traditionalComparison: 'Réveil Traditionnel vs. Onset',
          tradAlarmLoss: 'Réveil Classique : Perd 14 à 20 min de sommeil chaque nuit.',
          onsetGuaranteed: 'Onset : 100% de la durée biologique délivrée — sans bracelet.',
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
            desc: "Uniquement grâce à votre téléphone — sans rien porter au poignet — Onset détecte l'endormissement réel via l'analyse sans contact de la respiration et des micro-mouvements, puis lance votre durée demandée. Fini le Fossé de Latence.",
            detail: "En retirant l'horloge et les objets encombrants de votre routine pré-sommeil, Onset réduit passivement les niveaux de cortisol. Vous arrêtez les calculs. Vous... dormez.",
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
            solution: "L'algorithme de fenêtre glissante de 15 minutes d'Onset utilise la détection respiratoire et de micro-mouvements directement depuis votre téléphone pour trouver le point de réveil optimal, évitant les interruptions SLP et protégeant l'HGH — sans rien porter la nuit.",
            tag: 'Optimisation Récupération',
          },
        },
      },
      tech: {
        badge: 'Sous le Capot',
        headline: 'Architecture MVP',
        headlineAccent: 'Téléphone Seul',
        noWearableNotice: {
          badge: 'Zéro Objet Connecté Requis',
          title: 'Conçu pour Votre Téléphone — Pas pour un Xiaomi Band 8 ni un Bracelet',
          desc: "Vous ne devriez jamais avoir à recharger ou dormir avec une montre, un bracelet ou une bague pour bien récupérer. Le MVP d'Onset fonctionne à 100% en local sur votre iPhone sans contact — même hors ligne en Mode Avion.",
        },
        primary: {
          badge: 'Principal · Table de Chevet',
          title: 'Détection Sans Contact sur Table de Chevet',
          desc: "Posez simplement votre téléphone sur votre table de chevet — rien à porter sur vous. Onset analyse passivement la cadence respiratoire via le microphone et un modèle ML local pour détecter l'endormissement et piloter la fenêtre glissante de 15 minutes.",
          specs: [
            'Analyse passive du rythme et de la régularité respiratoire',
            'Algorithme de réveil optimal à fenêtre glissante de 15 min',
            "ML 100% sur l'appareil — fonctionne en Mode Avion",
            'Aucun enregistrement audio stocké ni envoyé dans le cloud',
          ],
        },
        fallback: {
          badge: 'Placement Optionnel',
          title: 'Moteur CoreMotion sur Matelas',
          desc: "Vous préférez poser votre téléphone au bord du matelas ? Onset active automatiquement le framework CoreMotion de l'iPhone (accéléromètre tri-axial + gyroscope) pour croiser l'actigraphie de micro-mouvements et l'analyse respiratoire.",
          specs: [
            'Accéléromètre tri-axial + gyroscope CoreMotion',
            'Actigraphie de micro-mouvements anti-SLP',
            'Consommation ultra-faible avec écran noir OLED pur',
            'Aucun matériel externe — fonctionne avec votre téléphone actuel',
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
