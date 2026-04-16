import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Products() {
  const ref = useScrollReveal()

  return (
    <section id="products" className="section reveal" ref={ref}>
      <h2 className="section-heading">Products</h2>
      <div className="product-card">
        <h3 className="product-name">Ocio</h3>
        <p className="product-description">
          The API-first platform behind activity and community solutions &mdash;
          booking, payments, events, and social features for sports venues, dance
          studios, social clubs, and any business that brings people together.
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
