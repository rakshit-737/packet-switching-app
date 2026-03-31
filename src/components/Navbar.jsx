import { NavLink } from 'react-router-dom'
import { Cpu, BookOpen, Play, Calculator } from 'lucide-react'

const links = [
  { to: '/', label: 'Home', icon: Cpu },
  { to: '/concepts', label: 'Concepts', icon: BookOpen },
  { to: '/visualizer', label: 'Visualizer', icon: Play },
  { to: '/numericals', label: 'Numericals', icon: Calculator },
]

export default function Navbar() {
  return (
    <nav style={{
      background: '#0f1628',
      borderBottom: '1px solid #1e2a45',
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 64,
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(12px)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <Cpu size={18} color="#fff" />
        </div>
        <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.5px' }}>
          Net<span style={{ color: '#3b82f6' }}>Switch</span>
        </span>
      </div>

      <div style={{ display: 'flex', gap: 4 }}>
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} end={to === '/'} style={({ isActive }) => ({
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '8px 16px', borderRadius: 8,
            textDecoration: 'none', fontSize: 14, fontWeight: 500,
            transition: 'all 0.2s',
            background: isActive ? '#1e3a5f' : 'transparent',
            color: isActive ? '#60a5fa' : '#64748b',
          })}>
            <Icon size={15} />
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}