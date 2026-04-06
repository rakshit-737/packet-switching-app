import { motion, useReducedMotion } from 'framer-motion'
import NumericalsSolver from '../numericals/components/NumericalsSolver'
import '../styles/pages/Numericals.css'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

export default function Numericals() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="numericals-page">
      <motion.section
        className="page-hero numericals-hero"
        {...(prefersReducedMotion ? {} : { initial: 'hidden', animate: 'visible', variants: stagger })}
      >
        <motion.span className="section-eyebrow" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          Problem solving lab
        </motion.span>
        <motion.h1 {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          Practice the formulas without losing the intuition behind them.
        </motion.h1>
        <motion.p {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          Choose a problem type, enter values with units, and get a step-by-step solution you can download.
        </motion.p>
      </motion.section>

      <motion.section className="numericals-shell" {...(prefersReducedMotion ? {} : { initial: 'hidden', whileInView: 'visible', variants: fadeUp })}>
        <NumericalsSolver />
      </motion.section>
    </div>
  )
}
