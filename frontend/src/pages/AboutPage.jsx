import { useI18n } from '../i18n/useI18n'

function AboutPage() {
  const { t } = useI18n()

  return (
    <>
      <section className="hero-panel compact">
        <p className="eyebrow">About</p>
        <h1>{t('pages.about.title')}</h1>
        <p className="lead">{t('pages.about.lead')}</p>
      </section>

      <section className="content-section about-monolith">
        <article className="about-chapter">
          <h2>Mission</h2>
          <p>
            We create AI-native, human-centric software that helps people
            discover opportunities, connect with others, and take meaningful
            action in the real world.
          </p>
        </article>

        <article className="about-chapter">
          <h2>Inspiration and outlook</h2>
          <p>
            In celestial Hindu mythology, Apsaras are associated with grace,
            presence, and connection. We carry that inspiration into software
            design by prioritizing elegance, clarity, and emotional ease.
          </p>
          <p>
            Our work aims to spread joy, support constructive collaboration, and
            promote a positive outlook in the communities and organizations that
            use our products.
          </p>
        </article>

        <article className="about-chapter">
          <h2>What we build</h2>
          <p>
            We build and evolve products such as Ocio, HangOut, SportCenter,
            DanceSchool Pro, Player, and Dancer across social networking,
            events, and domain-specific operations.
          </p>
          <p>
            We also partner with organizations on consulting across AI systems,
            community software, cloud optimization, automation, and custom CRM.
          </p>
          <p>
            For developers, we provide API access on request and are expanding
            the Ocio Developer Platform (coming soon) for AI-enabled custom
            application development.
          </p>
        </article>

        <article className="about-chapter">
          <h2>Team</h2>
          <p>
            Our team blends product strategy, engineering depth, and design
            discipline.
          </p>
          <ul className="about-team-list">
            <li>
              <strong>Product and Strategy:</strong> We shape roadmaps with
              equal focus on AI capability, human outcomes, and business value.
            </li>
            <li>
              <strong>Engineering and AI Systems:</strong> We deliver reliable
              software across mobile, web, AI agents, and custom RAG pipelines.
            </li>
            <li>
              <strong>Design and Experience:</strong> We focus on readability,
              elegance, and intuitive interactions.
            </li>
          </ul>
        </article>
      </section>
    </>
  )
}

export default AboutPage
