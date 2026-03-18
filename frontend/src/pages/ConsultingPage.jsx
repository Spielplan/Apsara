import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n'

const consultingAreas = [
  {
    title: 'AI Consulting',
    to: '/consulting/ai-consulting',
    body: 'Our consulting story starts from our own hands-on experience using AI to build, market, and optimize products before applying those practices to client environments.',
  },
  {
    title: 'Community Software',
    to: '/consulting/community-software',
    body: 'We build community-focused software for founders, businesses, and organizations where human engagement is strengthened with AI-native recommendations and workflows.',
  },
  {
    title: 'Cloud Optimization',
    to: '/consulting/cloud-optimization',
    body: 'We help teams run reliable infrastructure at low cost with open APIs, quality infra software, and patterns that avoid cloud lock-in.',
  },
  {
    title: 'Automation',
    to: '/consulting/automation',
    body: 'We design delivery automation across product, operations, and test automation so teams ship faster with fewer regressions.',
  },
  {
    title: 'Custom CRM',
    to: '/consulting/custom-crm',
    body: 'We deliver custom CRM implementations that fit real processes, with AI-native workflows for triage, personalization, and decision support.',
  },
]

function ConsultingPage() {
  const { t } = useI18n()

  return (
    <>
      <section className="hero-panel compact">
        <p className="eyebrow">Consulting</p>
        <h1>{t('pages.consulting.title')}</h1>
        <p className="lead">{t('pages.consulting.lead')}</p>
      </section>

      <section className="content-section">
        <div className="card-grid">
          {consultingAreas.map((area) => (
            <article className="card" key={area.title}>
              <h3>
                <Link to={area.to} className="inline-link">
                  {area.title}
                </Link>
              </h3>
              <p>{area.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default ConsultingPage
