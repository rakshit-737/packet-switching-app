import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { BookOpen, Calculator, Cpu, Menu, Play, X } from 'lucide-react'
import '../styles/Navbar.css'

const links = [
  { to: '/', label: 'Home', caption: 'Overview', icon: Cpu },
  { to: '/concepts', label: 'Concepts', caption: 'Atlas', icon: BookOpen },
  { to: '/visualizer', label: 'Visualizer', caption: 'Lab', icon: Play },
  { to: '/numericals', label: 'Numericals', caption: 'Solvers', icon: Calculator },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header className="navbar">
      <div className="navbar-shell">
        <Link to="/" className="navbar-brand">
          <span className="brand-mark">
            <Cpu size={18} />
          </span>
          <span className="brand-copy">
            <span className="brand-title">NetSwitch</span>
            <span className="brand-subtitle">Interactive switching lab</span>
          </span>
        </Link>

        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className={`navbar-panel ${isOpen ? 'open' : ''}`}>
          <nav className="navbar-links" aria-label="Primary">
            {links.map(({ to, label, caption, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <span className="nav-icon">
                  <Icon size={15} />
                </span>
                <span className="nav-copy">
                  <strong>{label}</strong>
                  <small>{caption}</small>
                </span>
              </NavLink>
            ))}
          </nav>

          <Link to="/visualizer" className="btn btn-primary navbar-cta">
            Open Lab
          </Link>
        </div>
      </div>
    </header>
  )
}
