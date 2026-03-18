const products = [
  {
    name: 'Ocio',
    description:
      'An AI-native app for connecting people in real-life public events and helping communities discover each other in person.',
  },
  {
    name: 'HangOut',
    description:
      'An AI-native app for organizing social gatherings offline and online for interest groups and communities with people-first coordination tools.',
  },
  {
    name: 'SportCenter',
    description:
      'An AI-first platform for sport centre management, reservations, booking, event operations, partner matching, coaching, tournaments, and leagues.',
  },
  {
    name: 'DanceSchool Pro',
    description:
      'A platform for dance schools with workflows for classes, student operations, schedules, performances, and school-level event management.',
  },
  {
    name: 'Player',
    description:
      'An AI-native app for sportspeople to find locations, discover partners, organize games, and grow through stats and leaderboards.',
  },
  {
    name: 'Dancer',
    description:
      'An AI-native app for dancers to find partners, explore classes, discover festivals, and connect with relevant dance communities.',
  },
]

function ProductsPage() {
  return (
    <>
      <section className="hero-panel compact">
        <p className="eyebrow">Products</p>
        <h1>AI-native, human-centric products by Apsara</h1>
        <p className="lead">
          We build and release products where AI-first capabilities support
          stronger human outcomes in communities, events, and everyday
          coordination.
        </p>
      </section>

      <section className="content-section">
        <div className="card-grid">
          {products.map((product) => (
            <article className="card" key={product.name}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default ProductsPage
