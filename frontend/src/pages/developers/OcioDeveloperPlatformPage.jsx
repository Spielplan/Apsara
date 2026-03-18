import { useI18n } from '../../i18n/useI18n'

function OcioDeveloperPlatformPage() {
  const { t } = useI18n()

  return (
    <>
      <section className="hero-panel compact">
        <p className="eyebrow">Developers</p>
        <h1>{t('pages.ocioDeveloperPlatform.title')}</h1>
        <p className="lead">
          Ocio Developer Platform is a coming-soon AI-enabled app development
          platform for building customized products across social networking,
          event management, ticketing, and bookings with human-centric user
          journeys.
        </p>
      </section>

      <section className="content-section">
        <div className="card-grid">
          <article className="card">
            <h3>Platform intent</h3>
            <p>
              Enable faster delivery of vertical and community products without
              rebuilding core social and event primitives from scratch.
            </p>
          </article>
          <article className="card">
            <h3>AI-enabled capabilities</h3>
            <p>
              Support assisted workflows, smart matching, recommendations, and
              operational automation in product-specific implementations.
            </p>
          </article>
          <article className="card">
            <h3>Roadmap status</h3>
            <p>
              This offering is currently in pre-release. Additional capability
              details, onboarding tracks, and integration models will be shared
              in upcoming releases.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default OcioDeveloperPlatformPage
