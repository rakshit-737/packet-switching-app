import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  BookOpen,
  Calculator,
  Cpu,
  GraduationCap,
  HelpCircle,
  Menu,
  Play,
  Users,
  X,
} from 'lucide-react'
import '../styles/Navbar.css'

const links = [
  { to: '/', label: 'Home', caption: 'Overview', icon: Cpu },
  { to: '/concepts', label: 'Concepts', caption: 'Atlas', icon: BookOpen },
  { to: '/visualizer', label: 'Visualizer', caption: 'Lab', icon: Play },
  { to: '/numericals', label: 'Numericals', caption: 'Solvers', icon: Calculator },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 12)

      // Only hide/show if menu is closed
      if (!isOpen) {
        // Use 6px delta to prevent micro-jitter triggering hide/reveal
        // Require 80px scroll so the nav stays visible near the page top
        if (y > lastScrollY.current + 6 && y > 80) {
          setHidden(true)
        } else if (y < lastScrollY.current - 6) {
          setHidden(false)
        }
      }
      lastScrollY.current = y
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  // Always reveal navbar when mobile menu is open
  const isHidden = hidden && !isOpen

  return (
    <header className={`navbar${scrolled ? ' navbar-scrolled' : ''}${isHidden ? ' navbar-hidden' : ''}`}>
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

          <div className="navbar-shortcuts">
            <NavLink
              to="/learn"
              className={({ isActive }) => `navbar-shortcut-btn${isActive ? ' active' : ''}`}
            >
              <GraduationCap size={14} />
              Learn
            </NavLink>
            <NavLink
              to="/help"
              className={({ isActive }) => `navbar-shortcut-btn${isActive ? ' active' : ''}`}
            >
              <HelpCircle size={14} />
              Help
            </NavLink>
            <NavLink
              to="/developed-by"
              className={({ isActive }) => `navbar-shortcut-btn${isActive ? ' active' : ''}`}
            >
              <Users size={14} />
              Developed By
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}
