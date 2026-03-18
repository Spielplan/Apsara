import { useI18n } from '../../i18n/useI18n'

function AutomationPage() {
  const { t } = useI18n()

  return (
    <>
      <section className="hero-panel compact">
        <p className="eyebrow">Consulting</p>
        <h1>{t('pages.automation.title')}</h1>
        <p className="lead">
          We help teams automate repeated work across delivery, operations, and
          quality engineering so they can ship faster with confidence.
        </p>
      </section>

      <section className="content-section">
        <div className="card-grid">
          <article className="card">
            <h3>Workflow automation</h3>
            <p>
              We automate recurring business and engineering workflows including
              triage, reporting, orchestration, and handoff steps.
            </p>
          </article>
          <article className="card">
            <h3>Test automation</h3>
            <p>
              We design practical test automation strategies across unit,
              integration, and end-to-end layers to reduce regressions.
            </p>
          </article>
          <article className="card">
            <h3>Release reliability</h3>
            <p>
              We improve CI/CD guardrails, release checks, and quality gates so
              teams can scale deployment velocity safely.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default AutomationPage
