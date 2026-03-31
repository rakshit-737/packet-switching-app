import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Concepts from './pages/Concepts'
import Visualizer from './pages/Visualizer'
import Numericals from './pages/Numericals'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concepts" element={<Concepts />} />
          <Route path="/visualizer" element={<Visualizer />} />
          <Route path="/numericals" element={<Numericals />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 NetSwitch. Learn networking through interactive simulations.</p>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Documentation
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  )
}
