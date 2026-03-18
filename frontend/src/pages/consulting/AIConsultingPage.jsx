import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/useI18n'

function AIConsultingPage() {
  const { t } = useI18n()

  return (
    <>
      <section className="hero-panel compact">
        <p className="eyebrow">Consulting</p>
        <h1>{t('pages.aiConsulting.title')}</h1>
        <p className="lead">
          Our AI consulting starts from real operating experience. We use AI
          extensively to build and market our own products, and to optimize
          internal workflows across delivery, support, and decision-making.
        </p>
      </section>

      <section className="content-section">
        <div className="card-grid">
          <article className="card">
            <h3>Experience-first advisory</h3>
            <p>
              We advise from proven practice, not theory. We apply the same
              patterns we use internally, then adapt them to your domain,
              systems, and team maturity.
            </p>
          </article>
          <article className="card">
            <h3>Production AI systems</h3>
            <p>
              We deliver AI agents, custom RAG pipelines, orchestration logic,
              and measurable evaluation workflows for production reliability.
            </p>
          </article>
          <article className="card">
            <h3>Human-centric AI adoption</h3>
            <p>
              We keep AI outcomes aligned with human behavior, trust, and
              operational clarity so systems are useful in real workflows.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section">
        <h2>Related consulting areas</h2>
        <div className="card-grid">
          <article className="card">
            <h3>
              <Link to="/consulting/cloud-optimization" className="inline-link">
                Cloud Optimization
              </Link>
            </h3>
            <p>
              Reduce infra costs while maintaining reliability and avoiding
              lock-in.
            </p>
          </article>
          <article className="card">
            <h3>
              <Link to="/consulting/automation" className="inline-link">
                Automation
              </Link>
            </h3>
            <p>
              Add delivery and test automation practices that improve speed and
              consistency.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default AIConsultingPage
