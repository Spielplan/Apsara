import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Products() {
  const ref = useScrollReveal()

  return (
    <section id="products" className="section reveal" ref={ref}>
      <h2 className="section-heading">Products</h2>
      <div className="product-card">
        <h3 className="product-name">Ocio</h3>
        <p className="product-description">
          A platform for discovering shared interests and connecting with people
          in your community &mdash; for sports, culture, music, and everything
          in between.
        </p>
        <a
          href="https://www.ocioapp.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Visit Ocio
        </a>
      </div>
      <p className="products-future">
        We are building more products for communities, venues, and live
        experiences. Stay tuned.
      </p>
    </section>
  )
}
