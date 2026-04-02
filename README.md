# NetSwitch — Interactive Networking Lab

A modern, educational web application for learning packet switching and circuit switching through interactive simulations, formula solvers, and concept breakdowns.

## Features

 **Interactive Visualizations**
- Unified visualizer: switch between packet and circuit modes in one view
- Canvas-based real-time animation of dedicated lanes and independent packet flows
- Live playback speed control, configurable packet/call parameters

 **Educational Content**
- Concept Atlas: comparison table, core concept cards, formula reference, quick-fact reminders
- Numerical Solvers: delay, SNR, and throughput calculators with instant recompute
- Side-by-side tradeoff summaries on the Home page

 **Modern UI/UX**
- Cinematic BootSequence entry overlay (`prefers-reduced-motion` aware)
- Scroll-reactive navbar (hides on scroll-down, reveals on scroll-up)
- Staggered Framer Motion page entries and scroll-triggered section reveals on all four pages
- Dark theme, CSS custom-property design tokens, responsive layout

 **Performance**
- Vite build with automatic code splitting
- All motion uses `transform`/`opacity` only (GPU composited)
- Canvas rendering isolated from React re-renders

## Tech Stack

- **Frontend**: React 18
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Styling**: CSS3 + CSS custom properties
- **Canvas**: Vanilla JS Canvas API

## Getting Started

### Prerequisites
- Node.js 16+
- npm

### Installation

```bash
# Clone repository
git clone <repo-url>
cd packet-switching-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/              # Reusable React components
│   ├── BootSequence.jsx     # Cinematic entry overlay
│   ├── CircuitCanvas.jsx    # Canvas renderer — circuit switching
│   ├── PacketCanvas.jsx     # Canvas renderer — packet switching
│   ├── Navbar.jsx           # Scroll-reactive top navigation
│   ├── DelayCalculator.jsx  # Transmission + propagation delay solver
│   ├── SNRCalculator.jsx    # SNR / Shannon capacity solver
│   └── ThroughputCalculator.jsx  # Loss-aware throughput solver
├── pages/                   # Route-level page components
│   ├── Home.jsx             # Landing page with hero + learning-path cards
│   ├── Concepts.jsx         # Concept Atlas: comparison, cards, formulas, facts
│   ├── Visualizer.jsx       # Combined packet / circuit switching simulator
│   └── Numericals.jsx       # Numerical solver lab (3 calculators)
├── styles/                  # Component-scoped CSS
│   ├── Navbar.css
│   ├── Home.css
│   ├── DelayCalculator.css
│   ├── SNRCalculator.css
│   ├── ThroughputCalculator.css
│   └── pages/               # Page-level CSS
│       ├── Concepts.css
│       ├── Numericals.css
│       └── Visualizer.css
├── utils/                   # Canvas drawing utilities & data
│   ├── circuitVisualizer.js
│   ├── packetVisualizer.js
│   └── formulas.js          # Concept definitions and formula metadata
├── App.jsx                  # Root: routing, BootSequence, footer
├── App.css                  # App shell layout
├── main.jsx                 # React entry point
└── styles.css               # Global tokens, typography, keyframes
```

## Pages

### Home (`/`)
Entry point with animated hero, switching-model comparison, three learning-path cards, and a feature highlight section.

### Concept Atlas (`/concepts`)
Full concept reference: packet vs. circuit comparison table, core concept cards (circuit switching, packet switching, message switching, multiplexing), formula cards, and quick-fact reminders.

### Visualizer (`/visualizer`)
Unified interactive simulator. Toggle between **Packet Switching** (shared mesh, dynamic routing) and **Circuit Switching** (dedicated lanes, reserved capacity). Configurable speed, data size, packet size, and number of calls. Playback and reset controls.

### Numericals (`/numericals`)
Three tab-based solvers:
- **Delay** — transmission + propagation delay breakdown
- **SNR** — linear SNR, dB conversion, Shannon capacity
- **Throughput** — effective throughput with configurable packet loss

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Contributing
Contributions welcome! Please feel free to submit a PR.

## License
MIT

---

Built with ❤️ for students learning Computer Networks
