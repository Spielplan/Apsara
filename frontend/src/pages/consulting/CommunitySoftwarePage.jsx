import { useI18n } from '../../i18n/useI18n'

function CommunitySoftwarePage() {
  const { t } = useI18n()

  return (
    <>
      <section className="hero-panel compact">
        <p className="eyebrow">Consulting</p>
        <h1>{t('pages.communitySoftware.title')}</h1>
        <p className="lead">
          We build community software for businesses, founders, and
          organizations that need meaningful human engagement supported by AI.
        </p>
      </section>

      <section className="content-section">
        <div className="card-grid">
          <article className="card">
            <h3>Member journeys</h3>
            <p>
              We design onboarding, discovery, and retention flows for social
              participation, events, and recurring engagement.
            </p>
          </article>
          <article className="card">
            <h3>AI-assisted matching</h3>
            <p>
              We implement matching and recommendation patterns for people,
              activities, and groups while keeping human relevance central.
            </p>
          </article>
          <article className="card">
            <h3>Operational tooling</h3>
            <p>
              We build admin and analytics workflows so community operators can
              run programs at scale with better visibility.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default CommunitySoftwarePage
