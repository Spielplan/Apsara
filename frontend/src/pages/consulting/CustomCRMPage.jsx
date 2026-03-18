import { useI18n } from '../../i18n/useI18n'

function CustomCRMPage() {
  const { t } = useI18n()

  return (
    <>
      <section className="hero-panel compact">
        <p className="eyebrow">Consulting</p>
        <h1>{t('pages.customCrm.title')}</h1>
        <p className="lead">
          We build custom CRM systems around your real customer lifecycle,
          internal processes, and operational constraints.
        </p>
      </section>

      <section className="content-section">
        <div className="card-grid">
          <article className="card">
            <h3>Process-fit design</h3>
            <p>
              We map existing workflows and design CRM features that reduce
              friction for sales, support, and operations teams.
            </p>
          </article>
          <article className="card">
            <h3>AI-native workflow support</h3>
            <p>
              We add AI-assisted triage, response drafting, prioritization, and
              personalization where it creates measurable value.
            </p>
          </article>
          <article className="card">
            <h3>Data and reporting foundations</h3>
            <p>
              We structure reporting and decision views so leadership can act on
              clear, trustworthy operational intelligence.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default CustomCRMPage
