import Hero from './sections/Hero'
import About from './sections/About'
import Products from './sections/Products'
import Consulting from './sections/Consulting'
import Footer from './sections/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <nav className="nav">
        <span className="nav-wordmark">Apsara</span>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#consulting">Consulting</a>
        </div>
      </nav>
      <main>
        <Hero />
        <About />
        <Products />
        <Consulting />
      </main>
      <Footer />
    </>
  )
}
