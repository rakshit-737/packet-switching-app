import { networkConcepts, formulas } from '../utils/formulas'
import { BookOpen, Code2, Radio, Zap } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import EnhancedConceptCard from '../components/EnhancedConceptCard'
import '../styles/pages/Concepts.css'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }
const viewOnce = { once: true, margin: '-50px' }

const formulaOrder = ['delay', 'throughput', 'snr', 'bandwidth']

const summaryStats = [
  { value: '8', label: 'comparison angles' },
  { value: String(networkConcepts.length), label: 'core concepts' },
  { value: String(formulaOrder.length), label: 'formula cards' },
]

const quickFacts = [
  {
    icon: Zap,
    title: 'Store-and-forward',
    description:
      'Packet switching stores each packet at an intermediate router before forwarding it to the next hop.',
  },
  {
    icon: Radio,
    title: 'Resource reservation',
    description:
      'Circuit switching keeps capacity reserved for the whole session, even when no data is flowing for a moment.',
  },
  {
    icon: Code2,
    title: 'Routing behavior',
    description:
      'Packets may take different routes and arrive out of order, which is why headers and sequencing matter.',
  },
  {
    icon: BookOpen,
    title: 'Modern usage',
    description:
      'The internet is packet-switched, while dedicated circuits still matter where timing guarantees are critical.',
  },
]

const formulaCards = formulaOrder.map((key) => ({
  key,
  ...formulas[key],
}))

export default function Concepts() {
  const prefersReducedMotion = useReducedMotion()
  const mv = (variants) => (prefersReducedMotion ? {} : { initial: 'hidden', whileInView: 'visible', viewport: viewOnce, variants })

  return (
    <div className="concepts-page">
      <motion.section
        className="page-hero concepts-hero"
        {...(prefersReducedMotion ? {} : { initial: 'hidden', animate: 'visible', variants: stagger })}
      >
        <motion.span className="section-eyebrow" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>Concept atlas</motion.span>
        <motion.h1 {...(prefersReducedMotion ? {} : { variants: fadeUp })}>Understand when each switching model actually wins.</motion.h1>
        <motion.p {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          Use this page as the mental map for the whole app: compare behaviors, scan the formulas, then jump into the
          simulator or solver when you want to see the ideas in action.
        </motion.p>

        <motion.div className="concepts-stat-row" {...(prefersReducedMotion ? {} : { variants: stagger })}>
          {summaryStats.map((item) => (
            <motion.div key={item.label} className="data-pill" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="comparison-section card" {...mv(fadeUp)}>
        <div className="section-heading">
          <span className="section-eyebrow">Main comparison</span>
          <h2>Circuit switching optimizes predictability. Packet switching optimizes sharing.</h2>
          <p>
            Read the table as a tradeoff matrix: one model reserves a path for smooth real-time delivery, the other
            keeps links flexible and efficient for bursty traffic.
          </p>
        </div>

        <div className="comparison-intro-grid">
          <article className="comparison-intro-card">
            <h3>Circuit switching</h3>
            <p>Reserve the lane first, then enjoy steady transfer with predictable timing.</p>
          </article>
          <article className="comparison-intro-card">
            <h3>Packet switching</h3>
            <p>Split the message into packets and let the network share links dynamically as conditions change.</p>
          </article>
        </div>

        <div className="comparison-table-shell">
          <table>
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Circuit Switching</th>
                <th>Packet Switching</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Connection Type</td>
                <td>Dedicated channel</td>
                <td>Connectionless or connection-oriented</td>
              </tr>
              <tr>
                <td>Bandwidth</td>
                <td>Guaranteed</td>
                <td>Dynamic allocation</td>
              </tr>
              <tr>
                <td>Latency</td>
                <td>Predictable and low</td>
                <td>Variable under load</td>
              </tr>
              <tr>
                <td>Setup Time</td>
                <td>Required before transfer</td>
                <td>Minimal or none</td>
              </tr>
              <tr>
                <td>Resource Utilization</td>
                <td>Lower during idle periods</td>
                <td>Higher through sharing</td>
              </tr>
              <tr>
                <td>Best For</td>
                <td>Real-time sessions</td>
                <td>General data transfer</td>
              </tr>
              <tr>
                <td>Examples</td>
                <td>Phone networks, ISDN</td>
                <td>Internet, TCP/IP</td>
              </tr>
              <tr>
                <td>Scalability</td>
                <td>Limited by reserved resources</td>
                <td>Highly scalable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      <motion.section className="concepts-section" {...mv(stagger)}>
        <motion.div className="section-heading" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          <span className="section-eyebrow">Core ideas</span>
          <h2>Use the cards below as your conceptual checklist.</h2>
          <p>Each card distills the definition, the important characteristics, and a few memorable examples.</p>
        </motion.div>

        <motion.div className="concepts-grid" {...(prefersReducedMotion ? {} : { variants: stagger })}>
          {networkConcepts.map((concept) => (
            <EnhancedConceptCard key={concept.id} concept={concept}>
              <div className="concept-card-header">
                <span className="concept-index">{String(concept.id).padStart(2, '0')}</span>
                <h3>{concept.title}</h3>
              </div>

              <p className="concept-description">{concept.description}</p>

              <div className="concept-section">
                <h4>Key characteristics</h4>
                <ul>
                  {concept.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>

              {concept.examples && (
                <div className="concept-section">
                  <h4>Examples</h4>
                  <div className="examples-list">
                    {concept.examples.map((example) => (
                      <span key={example} className="example-tag">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </EnhancedConceptCard>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="formulas-section" {...mv(stagger)}>
        <motion.div className="section-heading" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          <span className="section-eyebrow">Formula reference</span>
          <h2>Keep the equations nearby while you work the numbers.</h2>
          <p>These cards are designed to bridge the conceptual page and the numerical solver page.</p>
        </motion.div>

        <motion.div className="formulas-grid" {...(prefersReducedMotion ? {} : { variants: stagger })}>
          {formulaCards.map((formula, index) => (
            <motion.article key={formula.key} className="formula-card card" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
              <div className="formula-card-header">
                <span className="formula-index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{formula.title}</h3>
                  <p>{formula.description}</p>
                </div>
              </div>

              <code className="formula">{formula.formula}</code>

              <ul>
                {formula.components.map((component) => (
                  <li key={component}>{component}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="quick-facts card" {...mv(stagger)}>
        <motion.div className="section-heading" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          <span className="section-eyebrow">Quick facts</span>
          <h2>Memorable reminders for revision day.</h2>
          <p>Use these as short verbal cues when you want to recall the core behavior fast.</p>
        </motion.div>

        <motion.div className="facts-grid" {...(prefersReducedMotion ? {} : { variants: stagger })}>
          {quickFacts.map(({ icon: Icon, title, description }) => (
            <motion.article key={title} className="fact-item" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
              <span className="fact-icon">
                <Icon size={20} />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>
    </div>
  )
}
