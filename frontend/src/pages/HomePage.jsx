import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/profile')
        const data = await response.json()
        setProfile(data)
      } catch {
        setProfile({
          status: 'Backend offline',
          message:
            'NestJS API is not reachable. Start the backend to enable dynamic status.',
        })
      }
    }

    fetchProfile()
  }, [])

  return (
    <>
      <section className="hero-panel">
        <p className="eyebrow">Apsara</p>
        <h1>Apsara - AI native, Human Centric software</h1>
        <p className="lead">
          We build AI-first and AI-native products while staying deeply focused
          on human context, trust, and real-world adoption. Across products and
          consulting, we combine human-centric design with practical AI systems.
        </p>
        <div className="hero-actions">
          <Link to="/products" className="button button-primary">
            Explore Products
          </Link>
          <Link to="/consulting" className="button button-secondary">
            Explore Consulting
          </Link>
          <Link to="/about" className="button button-secondary">
            About Apsara
          </Link>
        </div>
      </section>

      <section className="content-section">
        <h2>Focus areas</h2>
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
              We build mobile and web applications with AI-first capabilities,
              tailored for user behavior and business outcomes.
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

      <section className="content-section status-panel">
        <h2>Live backend status</h2>
        <p>
          <strong>Status:</strong> {profile?.status ?? 'Checking...'}
        </p>
        <p>{profile?.message ?? 'Loading profile from NestJS API.'}</p>
      </section>
    </>
  )
}

export default HomePage
