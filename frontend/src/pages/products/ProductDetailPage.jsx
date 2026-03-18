import { Navigate, useParams } from 'react-router-dom'
import { getProducts } from '../../data/products'
import { useI18n } from '../../i18n/useI18n'

function ProductDetailPage() {
  const { language } = useI18n()
  const products = getProducts(language)
  const { slug } = useParams()
  const product = products.find((entry) => entry.slug === slug)

  if (!product) {
    return <Navigate to="/products" replace />
  }

  return (
    <>
      <section className="hero-panel compact">
        <p className="eyebrow">Product</p>
        <h1>{product.name}</h1>
        <p className="lead">{product.overview ?? product.description}</p>
      </section>

      <section className="content-section">
        <div className="card-grid">
          <article className="card">
            <h3>{product.name}</h3>
            <p>
              {product.description}
            </p>
          </article>
          <article className="card">
            <h3>More details coming</h3>
            <p>
              This product page will be expanded with deeper feature, workflow,
              and use-case detail in future updates.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default ProductDetailPage
