import { Link } from 'react-router-dom'
import { getProducts } from '../data/products'
import { useI18n } from '../i18n/useI18n'

function ProductsPage() {
  const { t, language } = useI18n()
  const products = getProducts(language)

  return (
    <>
      <section className="hero-panel compact">
        <p className="eyebrow">Products</p>
        <h1>{t('pages.products.title')}</h1>
        <p className="lead">{t('pages.products.lead')}</p>
      </section>

      <section className="content-section">
        <div className="card-grid">
          {products.map((product) => (
            <article className="card" key={product.name}>
              <h3>
                <Link to={`/products/${product.slug}`} className="inline-link">
                  {product.name}
                </Link>
              </h3>
              <p>{product.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default ProductsPage
