import { useNavigate } from 'react-router-dom'
import { BookOpen, Play, Calculator, ArrowRight, Zap, Network, Shield } from 'lucide-react'
import '../styles/pages/Home.css'

const cards = [
  { icon: BookOpen, title: 'Concepts', desc: 'Deep dive into circuit vs packet switching theory, store-and-forward, multiplexing & more.', to: '/concepts', color: '#3b82f6', badge: '8 Topics' },
  { icon: Play, title: 'Visualizer', desc: 'Watch packets travel across networks in real-time. See both switching methods live.', to: '/visualizer', color: '#8b5cf6', badge: 'Interactive' },
  { icon: Calculator, title: 'Numericals', desc: 'Solve delay, SNR, throughput & bandwidth problems with step-by-step breakdowns.', to: '/numericals', color: '#10b981', badge: '4 Calculators' },
]

const features = [
  { icon: Zap, title: 'Real-time Animation', desc: 'Watch packets hop across routers with live delay simulation' },
  { icon: Network, title: 'Side-by-side Compare', desc: 'Circuit vs Packet switching concepts explained thoroughly' },
  { icon: Shield, title: 'Exam Ready', desc: 'All formulas & numerical types covered for university exams' },
]

export default function Home() {
  const nav = useNavigate()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>

      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '48px 0 0' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#1e3a5f', border: '1px solid #2563eb',
          borderRadius: 999, padding: '6px 16px', marginBottom: 24
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 8px #3b82f6' }} />
          <span style={{ fontSize: 13, color: '#60a5fa', fontWeight: 500 }}>Computer Networks — Unit 2</span>
        </div>

        <h1 style={{
          fontSize: 56, fontWeight: 800, lineHeight: 1.1,
          letterSpacing: '-2px', marginBottom: 20
        }}>
          Master{' '}
          <span style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Switching
          </span>
          <br />Techniques
        </h1>

        <p style={{ fontSize: 18, color: '#64748b', maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.7 }}>
          Visualize, calculate and understand Circuit & Packet Switching — built for students who want to <em style={{ color: '#94a3b8' }}>actually get it</em>.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button className="btn btn-primary" style={{ fontSize: 15, padding: '12px 28px' }} onClick={() => nav('/visualizer')}>
            Launch Visualizer <ArrowRight size={16} style={{ marginLeft: 6, display: 'inline' }} />
          </button>
          <button className="btn btn-secondary" style={{ fontSize: 15, padding: '12px 28px' }} onClick={() => nav('/concepts')}>
            Read Concepts
          </button>
        </div>
      </div>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {cards.map(({ icon: Icon, title, desc, to, color, badge }) => (
          <div key={to} className="card" onClick={() => nav(to)} style={{
            cursor: 'pointer', transition: 'all 0.25s',
            borderColor: 'transparent',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: color + '22', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={22} color={color} />
              </div>
              <span className="badge" style={{ background: color + '22', color }}>{badge}</span>
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{title}</h3>
            <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{desc}</p>
          </div>
        ))}
      </div>

      {/* Features */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, paddingBottom: 32 }}>
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: '#161d35', border: '1px solid #1e2a45', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon size={16} color="#3b82f6" />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{title}</div>
              <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
