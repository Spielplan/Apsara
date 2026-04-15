export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-ornament" aria-hidden="true">
        <img
          src="/images/apsara.jpg"
          alt=""
          className="hero-apsara"
          width="240"
          height="288"
        />
      </div>
      <h1 className="hero-title">Apsara Software</h1>
      <div className="hero-line" aria-hidden="true" />
      <p className="hero-tagline">Where technology meets grace</p>
    </section>
  )
}
