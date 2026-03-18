const consultingAreas = [
  {
    title: 'Custom CRM',
    body: 'We design and implement custom CRM systems that fit your operations while adding AI-native workflows for triage, personalization, and decision support.',
  },
  {
    title: 'Connecting People',
    body: 'We work with founders, community builders, businesses, and voluntary organizations building apps for hobbies, professions, and shared missions. Our approach combines human-centric interaction design with AI-first recommendations, matching, and engagement flows.',
  },
  {
    title: 'AI Consulting',
    body: 'We help teams define practical AI roadmaps and deliver production systems, including AI agents, custom RAG implementations, model integration, and model hosting setups. This section is intentionally prepared for your future content additions.',
  },
]

function ConsultingPage() {
  return (
    <>
      <section className="hero-panel compact">
        <p className="eyebrow">Consulting</p>
        <h1>AI-native and human-centric consulting</h1>
        <p className="lead">
          Apsara partners with organizations that need mobile, web, and AI
          platforms that are technically strong and deeply aligned with human
          behavior, trust, and adoption.
        </p>
      </section>

      <section className="content-section">
        <div className="card-grid">
          {consultingAreas.map((area) => (
            <article className="card" key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default ConsultingPage
