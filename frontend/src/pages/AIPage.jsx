import { Link } from 'react-router-dom'

function AIPage() {
  return (
    <>
      <section className="hero-panel compact">
        <p className="eyebrow">AI</p>
        <h1>AI Consulting</h1>
        <p className="lead">
          Apsara helps teams move from AI ideas to production systems with a
          practical, human-centric, and measurable delivery approach.
        </p>
      </section>

      <section className="content-section">
        <div className="card-grid">
          <article className="card">
            <h3>AI agents</h3>
            <p>
              We design and deploy task-focused AI agents that support business
              workflows, customer support, and internal operations.
            </p>
          </article>
          <article className="card">
            <h3>Custom RAG systems</h3>
            <p>
              We implement retrieval pipelines, evaluation frameworks, and
              domain-specific knowledge layers for accurate AI responses.
            </p>
          </article>
          <article className="card">
            <h3>Model integration and hosting</h3>
            <p>
              We help with model selection, integration, security, and hosting
              strategy for reliable production readiness.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section">
        <p>
          Want to discuss your AI roadmap? <Link to="/contact">Contact Apsara</Link>.
        </p>
      </section>
    </>
  )
}

export default AIPage
