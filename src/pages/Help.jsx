import { motion, useReducedMotion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Calculator,
  Cpu,
  HelpCircle,
  Info,
  LifeBuoy,
  Play,
  Users,
} from 'lucide-react'
import '../styles/Home.css'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const features = [
  {
    icon: BookOpen,
    title: 'Concept Atlas',
    route: '/concepts',
    tone: 'cyan',
    desc: 'Browse structured concept cards covering packet switching, circuit switching, delay models, and key formulas. Great for quick revision before exams.',
    steps: [
      'Open the Concepts page from the nav or the Learn shortcut.',
      'Browse or search for a concept card.',
      'Expand a card to read the full explanation and formula breakdown.',
    ],
  },
  {
    icon: Play,
    title: 'Visualizer Lab',
    route: '/visualizer',
    tone: 'emerald',
    desc: 'Watch an animated side-by-side simulation of packet switching and circuit switching. Adjust parameters and observe how the network behaves in real time.',
    steps: [
      'Click "Open Lab" in the header or navigate to Visualizer.',
      'Select a switching mode (Packet or Circuit).',
      'Press Play to start the simulation and watch packets travel.',
      'Compare modes to see the trade-offs visually.',
    ],
  },
  {
    icon: Calculator,
    title: 'Numericals / Solvers',
    route: '/numericals',
    tone: 'amethyst',
    desc: 'Solve delay, throughput, and SNR problems with step-by-step calculator tools. Enter your values and get instant, formatted results with formula context.',
    steps: [
      'Go to the Numericals page.',
      'Pick a calculator (Delay, SNR, or Throughput).',
      'Enter the required values in the input fields.',
      'The result and formula breakdown appear instantly.',
    ],
  },
  {
    icon: BookOpen,
    title: 'Learn Resources',
    route: '/learn',
    tone: 'rose',
    desc: 'Access curated video tutorials and textbook references handpicked for this course. Perfect for supplementing lab work with theory.',
    steps: [
      'Click "Learn" in the header shortcuts.',
      'Watch the embedded video tutorial on packet switching.',
      'Explore textbook and online references for deeper study.',
    ],
  },
]

const faqs = [
  {
    q: 'Where do I start if I am new to the app?',
    a: 'Begin with the Concept Atlas (/concepts) to read the theory, then open the Visualizer to see it in action, and finally practise calculations in the Numericals section.',
  },
  {
    q: 'Can I use this app on my phone?',
    a: 'Yes. The interface is fully responsive and works on phones, tablets, and desktops. The navigation collapses into a mobile menu on smaller screens.',
  },
  {
    q: 'The simulation is running slowly — what should I do?',
    a: 'Try reducing the number of packets or slowing the animation speed in the Visualizer controls. Enabling "Reduce motion" in your operating system settings also simplifies transitions.',
  },
  {
    q: 'Who built this app?',
    a: 'NetSwitch Lab was built by student developers at VIT Chennai as part of the SWE2002 Computer Networks Lab course. See the "Developed By" page for full credits.',
  },
  {
    q: 'How do I report a bug or request a feature?',
    a: 'Open an issue on the GitHub repository linked in the "Developed By" page, or reach out to the developer team through their VIT Chennai contact.',
  },
]

export default function Help() {
  const navigate = useNavigate()
  const prefersReducedMotion = useReducedMotion()

  const motionProps = prefersReducedMotion
    ? {}
    : { initial: 'hidden', animate: 'visible', variants: staggerContainer }

  const itemProps = prefersReducedMotion ? {} : { variants: fadeUp }

  const viewportProps = prefersReducedMotion
    ? {}
    : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, margin: '-60px' } }

  return (
    <div className="home-page">
      {/* Hero */}
      <motion.section className="home-hero card" {...motionProps}>
        <motion.div className="home-hero-copy" {...itemProps}>
          <span className="section-eyebrow">
            <HelpCircle size={13} />
            Help &amp; Guide
          </span>
          <h1>Everything you need to get the most out of NetSwitch Lab.</h1>
          <p>
            NetSwitch Lab is an interactive learning platform for computer networking concepts — focused on packet
            switching, circuit switching, delay analysis, and formula solving. This guide walks you through every
            feature so you can hit the ground running.
          </p>
          <div className="home-actions">
            <button type="button" className="btn btn-primary" onClick={() => navigate('/visualizer')}>
              Open the Lab
              <ArrowRight size={16} />
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/concepts')}>
              Browse Concepts
            </button>
          </div>
        </motion.div>
      </motion.section>

      {/* What the app does */}
      <motion.section
        className="home-section"
        {...(prefersReducedMotion ? {} : { ...viewportProps, variants: staggerContainer })}
      >
        <motion.div className="section-heading" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          <span className="section-eyebrow">
            <Info size={13} />
            Overview
          </span>
          <h2>What NetSwitch Lab does.</h2>
          <p>
            Four tightly integrated tools that take you from concept to calculation without switching tabs.
          </p>
        </motion.div>

        <motion.div
          className="home-card-grid"
          {...(prefersReducedMotion ? {} : { variants: staggerContainer })}
        >
          {features.map(({ icon: Icon, title, desc, route, tone }) => (
            <motion.article
              key={title}
              className={`journey-card journey-card-${tone}`}
              {...itemProps}
            >
              <div className="journey-card-top">
                <span className="journey-icon">
                  <Icon size={22} />
                </span>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <button type="button" className="journey-link" onClick={() => navigate(route)}>
                Open {title}
                <ArrowRight size={15} />
              </button>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      {/* Step-by-step usage */}
      <motion.section
        className="home-section"
        {...(prefersReducedMotion ? {} : { ...viewportProps, variants: staggerContainer })}
      >
        <motion.div className="section-heading" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          <span className="section-eyebrow">
            <LifeBuoy size={13} />
            How to use each feature
          </span>
          <h2>Step-by-step usage guide.</h2>
          <p>Follow these steps for each module to get the full benefit of the lab.</p>
        </motion.div>

        <motion.div
          className="home-card-grid"
          {...(prefersReducedMotion ? {} : { variants: staggerContainer })}
        >
          {features.map(({ icon: Icon, title, steps, tone }) => (
            <motion.article
              key={`steps-${title}`}
              className={`journey-card journey-card-${tone}`}
              {...(prefersReducedMotion ? {} : { variants: fadeUp })}
            >
              <div className="journey-card-top">
                <span className="journey-icon">
                  <Icon size={22} />
                </span>
              </div>
              <h3>{title}</h3>
              <ol className="help-steps">
                {steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        className="home-section"
        {...(prefersReducedMotion ? {} : { ...viewportProps, variants: staggerContainer })}
      >
        <motion.div className="section-heading" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          <span className="section-eyebrow">FAQ</span>
          <h2>Common questions, answered.</h2>
        </motion.div>

        <motion.div
          className="help-faq-list"
          {...(prefersReducedMotion ? {} : { variants: staggerContainer })}
        >
          {faqs.map(({ q, a }) => (
            <motion.div
              key={q}
              className="help-faq-item card"
              {...(prefersReducedMotion ? {} : { variants: fadeUp })}
            >
              <h3>{q}</h3>
              <p>{a}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Credits/Support */}
      <motion.section
        className="home-section"
        {...(prefersReducedMotion ? {} : { ...viewportProps, variants: staggerContainer })}
      >
        <motion.div className="section-heading" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          <span className="section-eyebrow">
            <Users size={13} />
            Credits &amp; support
          </span>
          <h2>Where to go for more help.</h2>
          <p>
            For bug reports, feature requests, or credits, visit the Developed By page or the GitHub repository.
          </p>
        </motion.div>

        <motion.div
          className="home-card-grid"
          {...(prefersReducedMotion ? {} : { variants: staggerContainer })}
        >
          {[
            {
              icon: Cpu,
              title: 'GitHub Repository',
              desc: 'View the source code, open issues, or contribute improvements on GitHub.',
              action: () => window.open('https://github.com/rakshit-737/packet-switching-app', '_blank', 'noopener,noreferrer'),
              label: 'Open GitHub',
              tone: 'cyan',
            },
            {
              icon: Users,
              title: 'Developed By',
              desc: 'See the full team credits, course details, and project background.',
              action: () => navigate('/developed-by'),
              label: 'View Team',
              tone: 'emerald',
            },
          ].map(({ icon: Icon, title, desc, action, label, tone }) => (
            <motion.article
              key={title}
              className={`journey-card journey-card-${tone}`}
              {...(prefersReducedMotion ? {} : { variants: fadeUp })}
            >
              <div className="journey-card-top">
                <span className="journey-icon">
                  <Icon size={22} />
                </span>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <button type="button" className="journey-link" onClick={action}>
                {label}
                <ArrowRight size={15} />
              </button>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>
    </div>
  )
}
