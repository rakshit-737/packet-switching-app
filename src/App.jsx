import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { ArrowRight, Compass, Network, PlayCircle } from 'lucide-react'
import Navbar from './components/Navbar'
import BootSequence from './components/BootSequence'
import Home from './pages/Home'
import Concepts from './pages/Concepts'
import Visualizer from './pages/Visualizer'
import Numericals from './pages/Numericals'
import Learn from './pages/Learn'
import DevelopedBy from './pages/DevelopedBy'
import Help from './pages/Help'
import './App.css'

export default function App() {
  const [booted, setBooted] = useState(false)

  return (
    <>
      <BootSequence onDone={() => setBooted(true)} />
      <div className={`app${booted ? ' app-booted' : ''}`}>
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concepts" element={<Concepts />} />
          <Route path="/visualizer" element={<Visualizer />} />
          <Route path="/numericals" element={<Numericals />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/developed-by" element={<DevelopedBy />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-kicker">NetSwitch Lab</span>
            <h2>Learn switching the way it behaves in real networks.</h2>
            <p>
              Interactive simulations, formula solvers, and concept breakdowns designed to turn abstract theory into
              intuition you can actually reuse.
            </p>
          </div>

          <div className="footer-column">
            <span className="footer-heading">Explore</span>
            <Link to="/">Home</Link>
            <Link to="/concepts">Concept Atlas</Link>
            <Link to="/visualizer">Visualizer</Link>
            <Link to="/numericals">Numericals</Link>
            <Link to="/learn">Learn</Link>
            <Link to="/help">Help</Link>
            <Link to="/developed-by">Developed By</Link>
          </div>

          <div className="footer-column">
            <span className="footer-heading">Best For</span>
            <div className="footer-pill">
              <Network size={16} />
              Packet and circuit tradeoffs
            </div>
            <div className="footer-pill">
              <PlayCircle size={16} />
              Visual walk-throughs before exams
            </div>
            <div className="footer-pill">
              <Compass size={16} />
              Fast revision with live formulas
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-content card">
        <span className="section-eyebrow">404 · Route lost</span>
        <h1>This route fell off the network map.</h1>
        <p>The page you requested does not exist, but the main learning paths are all still online.</p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            Go Home
            <ArrowRight size={16} />
          </Link>
          <Link to="/visualizer" className="btn btn-secondary">
            Open Visualizer
          </Link>
        </div>
      </div>
    </section>
  )
}
