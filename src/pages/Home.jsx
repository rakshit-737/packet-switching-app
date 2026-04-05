import { useNavigate } from 'react-router-dom'
import { ArrowRight, BookOpen, Calculator, ExternalLink, HelpCircle, Network, Play, Shield, Users, Youtube, Zap } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import ScrollMetricsCounter from '../components/ScrollMetricsCounter'
import '../styles/Home.css'

// Motion variants — all animate transform/opacity only
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

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

const gettingStartedSteps = [
  {
    step: '01',
    title: 'Watch the Video',
    desc: 'Start with the embedded tutorial to build a solid understanding of packet switching and how it relates to real-world networking.',
  },
  {
    step: '02',
    title: 'Explore Concepts',
    desc: 'Visit the Concept Atlas to review switching models, multiplexing techniques, and transmission fundamentals with interactive cards.',
  },
  {
    step: '03',
    title: 'Run Simulations',
    desc: 'Launch the Live Visualizer and watch packets in action. Experiment with different parameters to see how they affect behavior.',
  },
  {
    step: '04',
    title: 'Solve Problems',
    desc: 'Use the Numerical Solvers to practice calculating delay, SNR, and throughput and solidify your understanding.',
  },
  {
    step: '05',
    title: 'Review References',
    desc: 'Consult the recommended textbooks and technical resources below to deepen your knowledge and prepare for exams.',
  },
  {
    step: '06',
    title: 'Share Knowledge',
    desc: 'Use this tool to teach others. The interactive simulations make it easy to explain complex concepts visually.',
  },
]

const textbookRefs = [
  {
    title: 'Computer Networking: A Top-Down Approach (8th Ed.)',
    authors: 'James F. Kurose, Keith W. Ross',
    chapters: 'Chapter 1.3 & Chapter 4 — Packet Switching and Circuit Switching',
    href: 'https://www.pearson.com/en-us/subject-catalog/p/computer-networking-a-top-down-approach/P200000003427',
    tags: ['Essential', 'Theory'],
  },
  {
    title: 'Data Communications and Networking (5th Ed.)',
    authors: 'Behrouz A. Forouzan',
    chapters: 'Chapter 2 & 3 — Network Models and Switching Techniques',
    href: 'https://www.mheducation.com/highered/product/data-communications-networking-forouzan-5e.html',
    tags: ['Comprehensive', 'Reference'],
  },
  {
    title: 'Computer Networks (5th Ed.)',
    authors: 'Andrew S. Tanenbaum, David J. Wetherall',
    chapters: 'Chapter 1 & 3 — Introduction and Data Link Layer',
    href: 'https://www.pearson.com/en-us/subject-catalog/p/computer-networks/P200000003433',
    tags: ['Advanced', 'Deep Dive'],
  },
]

const onlineRefs = [
  {
    title: 'RFC 791 — Internet Protocol (IPv4)',
    desc: 'Official IETF specification for packet-based communication',
    href: 'https://tools.ietf.org/html/rfc791',
    tag: 'Official Spec',
  },
  {
    title: 'Cisco Learning Network',
    desc: 'Comprehensive networking tutorials and certification materials',
    href: 'https://learningnetwork.cisco.com/',
    tag: 'Industry Standard',
  },
  {
    title: 'MIT OpenCourseWare — Computer Networks',
    desc: 'Free educational materials from MIT covering network fundamentals',
    href: 'https://ocw.mit.edu/search/?q=computer%20networks',
    tag: 'Free Course',
  },
  {
    title: 'Virtual Lab — SWE2002 Packet Switching',
    desc: 'Interactive virtual lab for hands-on packet switching experiments developed alongside this project',
    href: 'https://sites.google.com/view/swe2002/virtual-lab?authuser=0',
    tag: 'Virtual Lab',
  },
]

const faqItems = [
  {
    q: 'How does packet switching differ from circuit switching?',
    a: 'Packet switching dynamically routes individual packets through shared resources, while circuit switching reserves a dedicated connection for the full session. This makes packet switching more efficient for bursty traffic and circuit switching better for consistent real-time communication.',
  },
  {
    q: 'What are the main advantages of packet switching?',
    a: 'Better resource utilization, no wasted bandwidth on idle connections, automatic rerouting around failures, and cost efficiency. Packets can take different routes and be reassembled correctly at the destination.',
  },
  {
    q: 'How do routers handle packet routing?',
    a: 'Routers use routing tables and protocols such as OSPF and BGP to determine the best path for each packet. Each router independently makes decisions based on destination IP and current network topology.',
  },
  {
    q: 'What is network delay and how is it calculated?',
    a: 'Total delay includes transmission delay (packet length ÷ link bandwidth), propagation delay (distance ÷ signal speed), and queuing delay. Use the Numerical Solvers above to compute these values for specific scenarios.',
  },
  {
    q: 'How can I improve network throughput?',
    a: 'Increase bandwidth capacity, reduce congestion, optimize routing protocols, implement traffic prioritization, and monitor performance regularly. Packet loss directly reduces effective throughput.',
  },
  {
    q: 'Where can I learn more advanced topics?',
    a: "Check the references section for textbooks and research papers. MIT OpenCourseWare and Cisco Learning Network offer comprehensive courses on networking and advanced routing protocols.",
  },
]

const teamMembers = [
  {
    name: 'Dr. Swaminathan Annadurai',
    role: 'Faculty Advisor',
    details: ['Assistant Professor', 'VIT Chennai'],
  },
  {
    name: 'Rakshit Rameshbabu',
    role: 'Student Developer',
    details: ['Reg. No: 24BYB1117', 'B.Tech CSE in Cybersecurity', 'VIT Chennai'],
  },
  {
    name: 'Harish Naganathan K',
    role: 'Student Developer',
    details: ['Reg. No: 24BYB1086', 'B.Tech CSE in Cybersecurity', 'VIT Chennai'],
  },
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
  const prefersReducedMotion = useReducedMotion()

  // When reduced motion is preferred, skip all animations
  const motionProps = prefersReducedMotion
    ? {}
    : { initial: 'hidden', animate: 'visible', variants: staggerContainer }

  const itemProps = prefersReducedMotion ? {} : { variants: fadeUp }

  const viewportProps = prefersReducedMotion
    ? {}
    : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, margin: '-60px' } }

  return (
    <div className="home-page">
      <motion.section className="home-hero card" style={{ position: 'relative', overflow: 'hidden' }} {...motionProps}>
        <motion.div className="home-hero-copy" style={{ position: 'relative', zIndex: 1 }} {...itemProps}>
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

          <ScrollMetricsCounter
            stats={heroStats.map((s) => ({ ...s }))}
            className="home-stat-row"
          />
        </motion.div>

        <motion.div
          className="home-hero-visual"
          aria-hidden="true"
          style={{ position: 'relative', zIndex: 1 }}
          {...(prefersReducedMotion ? {} : { variants: scaleIn })}
        >
          <div className="radar-board">
            <div className="radar-topology" aria-hidden="true">
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

              {/* Minimal animated hub in the centre of the radar */}
              <div className="radar-hub">
                <div className="radar-hub-outer-ring" />
                <div className="radar-hub-inner-ring" />
                <div className="radar-hub-core" />
              </div>
            </div>

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
        </motion.div>
      </motion.section>

      <motion.section
        className="home-section"
        {...(prefersReducedMotion ? {} : { ...viewportProps, variants: staggerContainer })}
      >
        <motion.div className="section-heading" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          <span className="section-eyebrow">Learning paths</span>
          <h2>Move from intuition to mastery without leaving the app.</h2>
          <p>Each path is designed to answer a different question: what it is, how it behaves, and how to solve it.</p>
        </motion.div>

        <motion.div
          className="home-card-grid"
          {...(prefersReducedMotion ? {} : { variants: staggerContainer })}
        >
          {cards.map(({ icon: Icon, title, desc, to, badge, tone }) => (
            <motion.article key={to} className={`journey-card journey-card-${tone}`} {...itemProps}>
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
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="home-lower-grid"
        {...(prefersReducedMotion ? {} : { ...viewportProps, variants: staggerContainer })}
      >
        <motion.div className="home-story card" {...itemProps}>
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
        </motion.div>

        <motion.div className="home-compare card" {...itemProps}>
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
        </motion.div>
      </motion.section>

      {/* Getting Started */}
      <section>
        <motion.div
          className="home-section"
          {...(prefersReducedMotion ? {} : { ...viewportProps, variants: staggerContainer })}
        >
          <motion.div className="section-heading" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
            <span className="section-eyebrow">Getting started</span>
            <h2>Six steps from zero to fluent in switching theory.</h2>
            <p>Follow this path to move from watching to understanding to solving — without losing momentum.</p>
          </motion.div>

          <motion.div
            className="home-steps-grid"
            {...(prefersReducedMotion ? {} : { variants: staggerContainer })}
          >
            {gettingStartedSteps.map(({ step, title, desc }) => (
              <motion.article key={step} className="step-card card" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
                <span className="step-number">{step}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Video Tutorial */}
      <motion.section
        className="home-section"
        {...(prefersReducedMotion ? {} : { ...viewportProps, variants: staggerContainer })}
      >
        <motion.div className="section-heading" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          <span className="section-eyebrow">
            <Youtube size={13} />
            Video tutorial
          </span>
          <h2>Watch packet switching in action before diving into the lab.</h2>
          <p>This video covers packet structure, routing, store-and-forward, delay analysis, and comparison with circuit switching.</p>
        </motion.div>

        <motion.div className="home-video-card card" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          <div className="home-video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/G7n8thqwO2c"
              title="Understanding Packet Switching Concepts"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="home-video-info">
            <h3>Understanding Packet Switching Concepts</h3>
            <p>
              A comprehensive walkthrough explaining how packets are transmitted, routed through networks, and
              reassembled at the destination — with real-world tradeoffs compared to circuit switching.
            </p>
            <ul className="home-video-topics">
              {['Packet structure and formatting', 'Routing algorithms and protocols', 'Store-and-forward mechanism', 'Network delay and throughput analysis', 'Comparison with circuit switching'].map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* References */}
      <motion.section
        className="home-section"
        {...(prefersReducedMotion ? {} : { ...viewportProps, variants: staggerContainer })}
      >
        <motion.div className="section-heading" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          <span className="section-eyebrow">Further reading</span>
          <h2>The textbooks and sites worth bookmarking.</h2>
          <p>Start with the textbook references for theoretical foundations, then explore technical websites for implementation depth.</p>
        </motion.div>

        <motion.div className="home-refs-block" {...(prefersReducedMotion ? {} : { variants: staggerContainer })}>
          <motion.div {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
            <h3 className="refs-group-heading">
              <BookOpen size={16} />
              Textbook references
            </h3>
            <ul className="home-ref-list">
              {textbookRefs.map(({ title, authors, chapters, href, tags }) => (
                <li key={title} className="home-ref-item">
                  <div className="home-ref-body">
                    <strong>{title}</strong>
                    <span className="home-ref-authors">{authors}</span>
                    <span className="home-ref-chapters">{chapters}</span>
                    <div className="home-ref-tags">
                      {tags.map((tag) => (
                        <span key={tag} className="home-ref-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="home-ref-link">
                    View resource
                    <ExternalLink size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
            <h3 className="refs-group-heading">
              <Network size={16} />
              Online resources
            </h3>
            <ul className="home-ref-list">
              {onlineRefs.map(({ title, desc, href, tag }) => (
                <li key={title} className="home-ref-item">
                  <div className="home-ref-body">
                    <strong>{title}</strong>
                    <span className="home-ref-authors">{desc}</span>
                    <div className="home-ref-tags">
                      <span className="home-ref-tag">{tag}</span>
                    </div>
                  </div>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="home-ref-link">
                    View resource
                    <ExternalLink size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        className="home-section"
        {...(prefersReducedMotion ? {} : { ...viewportProps, variants: staggerContainer })}
      >
        <motion.div className="section-heading" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          <span className="section-eyebrow">
            <HelpCircle size={13} />
            FAQ
          </span>
          <h2>Quick answers to the questions that come up most.</h2>
          <p>Common stumbling blocks and clarifications for the concepts covered in this lab.</p>
        </motion.div>

        <motion.div
          className="home-faq-grid"
          {...(prefersReducedMotion ? {} : { variants: staggerContainer })}
        >
          {faqItems.map(({ q, a }) => (
            <motion.article key={q} className="faq-item card" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
              <h3>{q}</h3>
              <p>{a}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      {/* Team */}
      <motion.section
        className="home-section"
        {...(prefersReducedMotion ? {} : { ...viewportProps, variants: staggerContainer })}
      >
        <motion.div className="section-heading" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          <span className="section-eyebrow">
            <Users size={13} />
            Developed by
          </span>
          <h2>Computer Networks Lab project — VIT Chennai.</h2>
          <p>Built for the SWE2002 course as an interactive educational tool for switching theory.</p>
        </motion.div>

        <motion.div
          className="home-team-grid"
          {...(prefersReducedMotion ? {} : { variants: staggerContainer })}
        >
          {teamMembers.map(({ name, role, details }) => (
            <motion.article key={name} className="team-member-card card" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
              <img
  className="team-avatar"
  src={`/images/${name.toLowerCase().includes("swaminathan") 
    ? "dr-swaminathan.jpg" 
    : name.toLowerCase().includes("harish") 
    ? "harish.jpg" 
    : "rakshit.jpg"}`}
  alt={name}
/>
              <h3>{name}</h3>
              <span className="team-role">{role}</span>
              <ul className="team-details">
                {details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>
    </div>
  )
}
