import { useI18n } from '../../i18n/useI18n'

function CloudOptimizationPage() {
  const { t } = useI18n()

  return (
    <>
      <section className="hero-panel compact">
        <p className="eyebrow">Consulting</p>
        <h1>{t('pages.cloudOptimization.title')}</h1>
        <p className="lead">
          We help businesses run reliable infrastructure at low cost using open
          APIs, high-quality infra software, and architecture patterns that
          prevent provider lock-in.
        </p>
      </section>

      <section className="content-section">
        <div className="card-grid">
          <article className="card">
            <h3>Reliability with low cost</h3>
            <p>
              We optimize capacity, workloads, and observability so systems stay
              stable while cloud spend stays lean.
            </p>
          </article>
          <article className="card">
            <h3>Open stack strategy</h3>
            <p>
              We adopt open-source and open-API compatible components to avoid
              lock-in and preserve architectural flexibility.
            </p>
          </article>
          <article className="card">
            <h3>Margin improvement</h3>
            <p>
              We transfer our best practices to your teams to improve gross
              margins through cost-aware engineering and platform governance.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default CloudOptimizationPage
