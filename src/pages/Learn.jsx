import { useReducedMotion } from 'framer-motion'
import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Network, Youtube } from 'lucide-react'
import '../styles/Home.css'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

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

export default function Learn() {
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
          <span className="section-eyebrow">Learning Resources</span>
          <h1>Master switching theory through videos and references.</h1>
          <p>
            Watch comprehensive video tutorials and explore curated textbooks and online resources to deepen your
            understanding of packet switching and circuit switching concepts.
          </p>
        </motion.div>
      </motion.section>

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
    </div>
  )
}
