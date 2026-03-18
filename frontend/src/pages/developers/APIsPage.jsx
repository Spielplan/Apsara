import { useI18n } from '../../i18n/useI18n'

function APIsPage() {
  const { t } = useI18n()

  return (
    <>
      <section className="hero-panel compact">
        <p className="eyebrow">Developers</p>
        <h1>{t('pages.apis.title')}</h1>
        <p className="lead">
          Ocio APIs are available for developers on request for products focused
          on social networking, shared interests, safe socializing, and human
          participation.
        </p>
      </section>

      <section className="content-section">
        <div className="card-grid">
          <article className="card">
            <h3>Access model</h3>
            <p>
              API access is granted on request so we can align capabilities with
              product fit, scale expectations, and integration goals.
            </p>
          </article>
          <article className="card">
            <h3>Use cases</h3>
            <p>
              Common use cases include event workflows, people matching,
              participation signals, and operational tooling for communities.
            </p>
          </article>
          <article className="card">
            <h3>Integration support</h3>
            <p>
              We support implementation planning and integration guidance during
              onboarding for qualified product teams.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default APIsPage
