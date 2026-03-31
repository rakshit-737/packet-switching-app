import { networkConcepts, formulas } from '../utils/formulas'
import { BookOpen, Code2, Zap, Radio } from 'lucide-react'
import '../styles/pages/Concepts.css'

export default function Concepts() {
  return (
    <div className="concepts-page">
      <div className="page-header">
        <h1>Network Concepts</h1>
        <p>Understanding data switching and transmission techniques</p>
      </div>

      {/* Main Comparison */}
      <section className="comparison-section card">
        <h2>Circuit vs Packet Switching</h2>
        <div className="comparison-table">
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
                <td>Connectionless/Connection-oriented</td>
              </tr>
              <tr>
                <td>Bandwidth</td>
                <td>Guaranteed</td>
                <td>Dynamic allocation</td>
              </tr>
              <tr>
                <td>Latency</td>
                <td>Predictable, low</td>
                <td>Variable</td>
              </tr>
              <tr>
                <td>Setup Time</td>
                <td>Required</td>
                <td>Minimal/None</td>
              </tr>
              <tr>
                <td>Resource Utilization</td>
                <td>Lower</td>
                <td>Higher</td>
              </tr>
              <tr>
                <td>Best For</td>
                <td>Real-time (voice, video)</td>
                <td>Data transfer, emails</td>
              </tr>
              <tr>
                <td>Examples</td>
                <td>Phone networks, ISDN</td>
                <td>Internet, TCP/IP</td>
              </tr>
              <tr>
                <td>Scalability</td>
                <td>Limited</td>
                <td>Highly scalable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Concepts */}
      <section className="concepts-grid">
        {networkConcepts.map((concept) => (
          <div key={concept.id} className="concept-card card">
            <h3>{concept.title}</h3>
            <p className="description">{concept.description}</p>

            <div className="details-section">
              <h4>Key Characteristics:</h4>
              <ul>
                {concept.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>

            {concept.examples && (
              <div className="examples-section">
                <h4>Examples:</h4>
                <div className="examples-list">
                  {concept.examples.map((example, idx) => (
                    <span key={idx} className="example-tag">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Formulas Reference */}
      <section className="formulas-section">
        <h2>Important Formulas</h2>
        <div className="formulas-grid">
          <div className="formula-card card">
            <h4>{formulas.delay.title}</h4>
            <code className="formula">{formulas.delay.formula}</code>
            <p className="description">{formulas.delay.description}</p>
            <ul>
              {formulas.delay.components.map((comp, idx) => (
                <li key={idx}>{comp}</li>
              ))}
            </ul>
          </div>

          <div className="formula-card card">
            <h4>{formulas.throughput.title}</h4>
            <code className="formula">{formulas.throughput.formula}</code>
            <p className="description">{formulas.throughput.description}</p>
            <ul>
              {formulas.throughput.components.map((comp, idx) => (
                <li key={idx}>{comp}</li>
              ))}
            </ul>
          </div>

          <div className="formula-card card">
            <h4>{formulas.snr.title}</h4>
            <code className="formula">{formulas.snr.formula}</code>
            <p className="description">{formulas.snr.description}</p>
            <ul>
              {formulas.snr.components.map((comp, idx) => (
                <li key={idx}>{comp}</li>
              ))}
            </ul>
          </div>

          <div className="formula-card card">
            <h4>{formulas.bandwidth.title}</h4>
            <code className="formula">{formulas.bandwidth.formula}</code>
            <p className="description">{formulas.bandwidth.description}</p>
            <ul>
              {formulas.bandwidth.components.map((comp, idx) => (
                <li key={idx}>{comp}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="quick-facts card">
        <h2>Quick Facts</h2>
        <div className="facts-grid">
          <div className="fact-item">
            <Zap className="fact-icon" />
            <h4>Store-and-Forward</h4>
            <p>Packet switching uses store-and-forward technique where each packet is stored at intermediate nodes before being forwarded.</p>
          </div>
          <div className="fact-item">
            <Radio className="fact-icon" />
            <h4>Resource Reservation</h4>
            <p>Circuit switching reserves resources exclusively, while packet switching shares resources dynamically.</p>
          </div>
          <div className="fact-item">
            <Code2 className="fact-icon" />
            <h4>Routing</h4>
            <p>Packets can take different routes and may arrive out of order, requiring reassembly at the destination.</p>
          </div>
          <div className="fact-item">
            <BookOpen className="fact-icon" />
            <h4>Modern Networks</h4>
            <p>The internet uses packet switching (TCP/IP), while some VoIP networks combine both techniques.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
