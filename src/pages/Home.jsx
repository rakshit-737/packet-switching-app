import { useNavigate } from 'react-router-dom'
import { ArrowRight, BookOpen, Calculator, Network, Play, Shield, Zap } from 'lucide-react'
import '../styles/Home.css'

const cards = [
  {
    icon: BookOpen,
    title: 'Concept Atlas',
    desc: 'Compare switching models, multiplexing, and transmission ideas with concise explanations and exam-ready examples.',
    to: '/concepts',
    badge: '4 core topics',
    tone: 'cyan',
  },
  {
    icon: Play,
    title: 'Live Visualizer',
    desc: 'Watch packets and dedicated circuits move across the network so the tradeoffs feel obvious instead of abstract.',
    to: '/visualizer',
    badge: 'Interactive lab',
    tone: 'amber',
  },
  {
    icon: Calculator,
    title: 'Numerical Solvers',
    desc: 'Work through delay, SNR, throughput, and bandwidth formulas with a cleaner interface built for quick practice.',
    to: '/numericals',
    badge: '3 fast solvers',
    tone: 'green',
  },
]

const features = [
  {
    icon: Zap,
    title: 'Behavior first',
    desc: 'See store-and-forward, reserved lanes, and traffic bursts before jumping into theory.',
  },
  {
    icon: Network,
    title: 'Side-by-side intuition',
    desc: 'Put packet and circuit switching next to each other to understand where each approach wins.',
  },
  {
    icon: Shield,
    title: 'Exam-focused practice',
    desc: 'Move from concept recap to formula solving without changing context or mental mode.',
  },
]

const heroStats = [
  { value: '2', label: 'switching models' },
  { value: 'Live', label: 'simulations' },
  { value: '4', label: 'formula families' },
]

const compareCards = [
  {
    title: 'Packet switching',
    summary: 'Best when utilization and adaptability matter more than perfectly predictable timing.',
    points: ['Shared links', 'Adaptive routes', 'Great for bursty traffic'],
  },
  {
    title: 'Circuit switching',
    summary: 'Best when steady timing matters and reserving a dedicated path is worth the setup cost.',
    points: ['Reserved capacity', 'Fixed path', 'Great for real-time sessions'],
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-page">
      <section className="home-hero card">
        <div className="home-hero-copy">
          <span className="section-eyebrow">Computer Networks · Switching lab</span>
          <h1>Step inside the network and watch switching choices unfold.</h1>
          <p>
            Learn packet switching and circuit switching through motion, comparison, and guided problem solving instead
            of static notes alone.
          </p>

          <div className="home-actions">
            <button type="button" className="btn btn-primary" onClick={() => navigate('/visualizer')}>
              Launch Visualizer
              <ArrowRight size={16} />
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/concepts')}>
              Explore Concepts
            </button>
          </div>

          <div className="home-stat-row">
            {heroStats.map((stat) => (
              <div key={stat.label} className="data-pill">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="home-hero-visual" aria-hidden="true">
          <div className="radar-board">
            <div className="radar-ring radar-ring-one" />
            <div className="radar-ring radar-ring-two" />
            <div className="radar-link radar-link-one" />
            <div className="radar-link radar-link-two" />
            <div className="radar-link radar-link-three" />
            <div className="radar-link radar-link-four" />

            <div className="radar-node radar-node-a">S</div>
            <div className="radar-node radar-node-b">R1</div>
            <div className="radar-node radar-node-c">R2</div>
            <div className="radar-node radar-node-d">D</div>

            <div className="signal-card signal-card-packet">
              <span>Packet path</span>
              <strong>Adaptive routing</strong>
              <small>Packets may split and regroup at the destination.</small>
            </div>

            <div className="signal-card signal-card-circuit">
              <span>Circuit lane</span>
              <strong>Reserved channel</strong>
              <small>Traffic stays on one pre-established route.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <span className="section-eyebrow">Learning paths</span>
          <h2>Move from intuition to mastery without leaving the app.</h2>
          <p>Each path is designed to answer a different question: what it is, how it behaves, and how to solve it.</p>
        </div>

        <div className="home-card-grid">
          {cards.map(({ icon: Icon, title, desc, to, badge, tone }) => (
            <article key={to} className={`journey-card journey-card-${tone}`}>
              <div className="journey-card-top">
                <span className="journey-icon">
                  <Icon size={22} />
                </span>
                <span className="badge">{badge}</span>
              </div>

              <h3>{title}</h3>
              <p>{desc}</p>

              <button type="button" className="journey-link" onClick={() => navigate(to)}>
                Open {title}
                <ArrowRight size={15} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="home-lower-grid">
        <div className="home-story card">
          <div className="section-heading">
            <span className="section-eyebrow">Why it clicks</span>
            <h2>Turn lecture points into visible network behavior.</h2>
            <p>
              The interface is built like a guided lab: start with the mental model, check the behavior, then solve the
              numbers while the tradeoffs are still fresh.
            </p>
          </div>

          <div className="signal-grid">
            {features.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="signal-feature">
                <span className="signal-feature-icon">
                  <Icon size={18} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="home-compare card">
          <span className="section-eyebrow">Quick lens</span>
          <h2>Know what changes when the network gets busy.</h2>

          <div className="compare-card-grid">
            {compareCards.map((item) => (
              <article key={item.title} className="compare-card">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
