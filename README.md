# NetSwitch — Interactive Networking Simulator

A modern, educational web application for understanding circuit and packet switching networks through interactive visualizations.

## Features

✨ **Interactive Visualizations**
- Real-time animation of circuit switching with dedicated channels
- Packet switching simulator showing independent packet routing
- Live delay and latency simulation
- Dynamic network topology rendering

📚 **Educational Content**
- Clear explanations of switching techniques
- Comparison tables
- Key metrics and characteristics

🎨 **Modern UI/UX**
- Dark theme optimized for learning
- Responsive design
- Smooth animations
- Interactive controls

⚡ **Performance**
- Vite for fast development
- Canvas-based rendering
- Optimized bundle size
- Code splitting

## Tech Stack

- **Frontend**: React 18
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Styling**: CSS3 + CSS Variables
- **Canvas**: Vanilla JS Canvas API

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

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
├── components/          # Reusable React components
│   ├── CircuitCanvas.jsx
│   └── PacketCanvas.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── CircuitSwitching.jsx
│   └── PacketSwitching.jsx
├── styles/             # Page-specific styles
│   ├── Home.css
│   ├── CircuitSwitching.css
│   └── PacketSwitching.css
├── utils/              # Utility functions & visualizers
│   ├── circuitVisualizer.js
│   └── packetVisualizer.js
├── App.jsx             # Main app component with routing
├── App.css             # Global app styles
├── main.jsx            # React entry point
└── styles.css          # Global variables & styles
```

## Features Breakdown

### Home Page
- Hero section with gradient text
- Three feature cards (Concepts, Visualizer, Numericals)
- Feature highlights
- Comparison table

### Circuit Switching Simulator
- Dedicated connection visualization
- Adjustable simulation speed
- Multiple simultaneous calls
- Real-time metrics

### Packet Switching Simulator
- Independent packet routing
- Configurable packet sizes
- Network topology with 8 nodes
- Packet tracking

## Keyboard Shortcuts
- Coming soon...

## Performance Optimizations
- Code splitting for vendor libraries
- CSS variables for theming
- Efficient canvas rendering
- Debounced event handlers
- Lazy component loading

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Contributing
Contributions welcome! Please feel free to submit PRs.

## License
MIT

## Support
For issues and questions, please open an issue on GitHub.

---

Built with ❤️ for students learning Computer Networks
