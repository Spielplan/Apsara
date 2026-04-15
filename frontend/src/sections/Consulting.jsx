import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Consulting() {
  const ref = useScrollReveal()

  return (
    <section id="consulting" className="section reveal" ref={ref}>
      <h2 className="section-heading">Consulting</h2>
      <p>
        We help companies build elegant, reliable software &mdash; from AI-powered
        systems and community platforms to cloud infrastructure and automation.
        If you value craft and clarity, we should talk.
      </p>
      <div className="consulting-cta">
        <a
          href="https://wa.me/41787042572"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Start a conversation
        </a>
        <a href="mailto:hello@apsara.software" className="cta-link">
          hello@apsara.software
        </a>
      </div>
    </section>
  )
}
