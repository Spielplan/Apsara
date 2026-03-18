import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n'

function HomePage() {
  const { t } = useI18n()

  return (
    <>
      <section className="hero-panel">
        <p className="eyebrow">Apsara</p>
        <h1>{t('pages.home.title')}</h1>
        <p className="lead">{t('pages.home.lead')}</p>
        <div className="hero-actions">
          <Link to="/consulting/ai-consulting" className="button button-primary">
            {t('pages.home.ctaAi')}
          </Link>
          <Link to="/consulting" className="button button-secondary">
            {t('pages.home.ctaConsulting')}
          </Link>
          <Link to="/products" className="button button-secondary">
            {t('pages.home.ctaProducts')}
          </Link>
          <Link to="/about" className="button button-secondary">
            {t('pages.home.ctaAbout')}
          </Link>
        </div>
      </section>

      <section className="content-section">
        <h2>{t('pages.home.focusTitle')}</h2>
        <div className="card-grid">
          <article className="card">
            <h3>Owned products</h3>
            <p>
              We ship AI-native and human-centric products for communities,
              professionals, and organizations.
            </p>
          </article>
          <article className="card">
            <h3>Consulting delivery</h3>
            <p>
              We build mobile and web applications with AI-native capabilities,
              tailored for user behavior and measurable business outcomes.
            </p>
          </article>
          <article className="card">
            <h3>Human connection + AI</h3>
            <p>
              We design solutions where human connection and AI intelligence
              reinforce each other across social and event-driven platforms.
            </p>
          </article>
        </div>
      </section>

    </>
  )
}

export default HomePage
