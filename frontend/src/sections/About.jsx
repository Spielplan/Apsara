import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="section reveal" ref={ref}>
      <h2 className="section-heading">The Spirit of Apsara</h2>
      <p>
        In ancient mythology, Apsaras are celestial beings of extraordinary beauty,
        elegance, and eternal youth &mdash; able to take any form, moving effortlessly
        between worlds. They embody grace that transcends time.
      </p>
      <blockquote className="pull-quote">
        Youth is a matter of spirit, not age.
      </blockquote>
      <p>
        We carry this spirit into everything we build. Software should be beautiful
        to use, thoughtfully crafted, and pleasant at every interaction. No rough
        edges, no unnecessary complexity &mdash; just clarity and delight.
      </p>
      <p className="company-line">
        Apsara Software AG is a technology company registered in Switzerland.
      </p>
    </section>
  )
}
