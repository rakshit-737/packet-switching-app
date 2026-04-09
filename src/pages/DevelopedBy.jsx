import { useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import '../styles/Home.css'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const teamMembers = [
  {
    name: 'Dr. Swaminathan Annadurai',
    role: 'Faculty Advisor',
    details: ['Assistant Professor', 'VIT Chennai'],
    image: `${import.meta.env.BASE_URL}images/dr-swaminathan.jpg`,
  },
  {
    name: 'Rakshit Rameshbabu',
    role: 'Student Developer',
    details: ['Reg. No: 24BYB1117', 'B.Tech CSE in Cybersecurity', 'VIT Chennai'],
    image: `${import.meta.env.BASE_URL}images/rakshit.jpg`,
  },
  {
    name: 'Harish Naganathan K',
    role: 'Student Developer',
    details: ['Reg. No: 24BYB1086', 'B.Tech CSE in Cybersecurity', 'VIT Chennai'],
    image: `${import.meta.env.BASE_URL}images/harish.jpg`,
  },
]

function TeamAvatar({ src, name }) {
  const [imgFailed, setImgFailed] = useState(false)
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
  if (imgFailed) {
    return <div className="team-avatar">{initials}</div>
  }
  return (
    <div className="team-avatar">
      <img src={src} alt={name} loading="lazy" onError={() => setImgFailed(true)} />
    </div>
  )
}

export default function DevelopedBy() {
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
      {/* Hero Section */}
      <motion.section className="home-hero card" {...motionProps}>
        <motion.div className="home-hero-copy" {...itemProps}>
          <span className="section-eyebrow">Project Team</span>
          <h1>Meet the people behind NetSwitch Lab.</h1>
          <p>
            Built as an interactive educational project for the SWE2002 Computer Networks Lab course at VIT Chennai,
            this tool represents the dedication of faculty and students to making complex networking concepts
            accessible and intuitive.
          </p>
        </motion.div>
      </motion.section>

      {/* Team Section */}
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
          {teamMembers.map(({ name, role, details, image }) => (
            <motion.article key={name} className="team-member-card card" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
              <TeamAvatar src={image} name={name} />
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

      {/* About the Project */}
      <motion.section
        className="home-section"
        {...(prefersReducedMotion ? {} : { ...viewportProps, variants: staggerContainer })}
      >
        <motion.div className="section-heading" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          <span className="section-eyebrow">About this project</span>
          <h2>Why we built this.</h2>
          <p>Switching theory is abstract until you see it in motion. This lab was created to change that.</p>
        </motion.div>

        <motion.div
          className="home-card-grid"
          {...(prefersReducedMotion ? {} : { variants: staggerContainer })}
        >
          {[
            {
              title: 'Interactive Learning',
              desc: 'Replace passive reading with simulations that let you change parameters and immediately see the impact on network behavior.',
            },
            {
              title: 'Integrated Problem Solving',
              desc: 'Move seamlessly from visual understanding to calculating delays, throughputs, and SNR values in a single interface.',
            },
            {
              title: 'Educational Focus',
              desc: 'Every feature was designed with exam preparation and concept retention in mind, following proven learning frameworks.',
            },
            {
              title: 'Open and Accessible',
              desc: 'Built on modern web technologies and deployed freely so students everywhere can benefit from better tools.',
            },
          ].map(({ title, desc }) => (
            <motion.article key={title} className="journey-card journey-card-cyan" {...itemProps}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>
    </div>
  )
}
