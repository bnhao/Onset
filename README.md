# Onset — Sleep Duration Management

> **Stop tracking sleep. Start engineering it.**  
> The first smart alarm that counts forward from when you actually fall asleep — not when you set it. Powered by biometric data and circadian science.

---

## ⚡ The Paradigm Shift

Traditional alarms make an assumption that is biologically broken: **that you fall asleep the instant your head hits the pillow.**

* **The Sleep Latency Gap:** The average human takes 10 to 20 minutes to transition from wakefulness to genuine sleep. Fixed-time alarms ignore this gap, creating an accumulated weekly sleep deficit of ~2.3 hours.
* **Orthosomnia (Sleep Math Anxiety):** Lying in bed calculating *"If I fall asleep right now, I'll get 6 hours and 43 minutes"* spikes cortisol, engages the sympathetic nervous system, and pushes sleep onset even further away.
* **The Onset Solution:** Onset passively lowers cortisol by stripping the clock from your pre-sleep routine. It waits for biometric confirmation of sleep onset before initiating your target biological duration.
* **Circadian Anchoring:** A configurable hard-ceiling wake-up time prevents schedule drift and jetlag-like phase delays, ensuring you remain anchored to your natural circadian rhythm.

---

## 📱 Features

- **Interactive Live Demo:** Experience the 5 stages of the biological sleep lifecycle in-browser:
  1. *Setup:* Target sleep duration + Circadian Anchor fail-safe.
  2. *Latency Gap:* Clock suppressed, cortisol dropping, awaiting loss of consciousness.
  3. *Sleep Onset Detected:* Biometrics confirm sleep via sliding window algorithm; timer engages.
  4. *Sliding Window:* Monitors sleep stages to avoid Slow-Wave Sleep (SWS) awakenings, protecting Human Growth Hormone (HGH) release.
  5. *Optimal Wake:* Gentle haptic wake sequence during light sleep.
- **Pure OLED Black Minimalist UI:** One input, one button, pure black screen (`#000000`) with zero visual light pollution to prevent melatonin suppression.
- **Priority Waitlist System:** Submittable waitlist with real email validation, persona selection (*Overloaded Developer*, *Shift Worker*, *Biohacker*), hardware preference, and browser local storage persistence.
- **Internationalization (i18n):** Complete runtime English (`en`) and French (`fr`) translations powered by `react-i18next`.
- **High Performance:** Below-the-fold components are lazy loaded via `React.lazy` and `Suspense` into distinct production chunks.

---

## 🛠️ MVP Hardware Architecture

* **Primary Sensor (Wearable):** **Xiaomi Band (Mi Band) via BLE 5.0**
  * Continuously streams Heart Rate Variability (HRV) and tri-axis actigraphy motion data over Bluetooth Low Energy.
  * Powers a 15-minute sliding window algorithm for optimal light-sleep awakening.
* **Plan B Fail-Safe (Local Smartphone):** **iPhone CoreMotion + Acoustic Classifier**
  * Fallback to iPhone accelerometer, gyroscope, and ambient microphone breathing analysis.
  * 100% on-device ML inference — zero cloud latency or privacy exposure.

---

## 🚀 Tech Stack

* **Framework:** [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **i18n:** `react-i18next` + `i18next-browser-languagedetector`
* **Icons:** Inline optimized SVG icons

---

## 💻 Getting Started

### Prerequisites

* Node.js 18+
* npm or pnpm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/bnhao/Onset.git
cd Onset

# Install dependencies
npm install
```

### Development

```bash
# Start Vite development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
# Compile and bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📄 License

MIT License © 2027 Onset. Engineered for sleep.
