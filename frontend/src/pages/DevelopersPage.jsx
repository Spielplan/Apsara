import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n'

function DevelopersPage() {
  const { t } = useI18n()

  return (
    <>
      <section className="hero-panel compact">
        <p className="eyebrow">Developers</p>
        <h1>{t('pages.developers.title')}</h1>
        <p className="lead">{t('pages.developers.lead')}</p>
      </section>

      <section className="content-section">
        <div className="card-grid">
          <article className="card">
            <h3>
              <Link to="/developers/apis" className="inline-link">
                APIs
              </Link>
            </h3>
            <p>
              API access is available on request for teams building
              human-connection software with social and event-driven use cases.
            </p>
          </article>
          <article className="card">
            <h3>
              <Link
                to="/developers/ocio-developer-platform"
                className="inline-link"
              >
                Ocio Developer Platform (Coming soon)
              </Link>
            </h3>
            <p>
              Ocio Developer Platform is an AI-enabled app development platform
              (coming soon), focused on building customized applications with social
              networking, event management, ticketing, and bookings.
            </p>
          </article>
          <article className="card">
            <h3>Evolving developer ecosystem</h3>
            <p>
              We are expanding the platform surface area over time. Additional
              capability details and integration options will be added soon.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default DevelopersPage
