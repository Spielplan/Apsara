import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ConsultingPage from './pages/ConsultingPage'
import DevelopersPage from './pages/DevelopersPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand-block">
          <p className="brand-name">Apsara</p>
          <p className="brand-tagline">AI native, Human Centric software</p>
        </div>
        <nav className="topnav" aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/consulting">Consulting</NavLink>
          <NavLink to="/developers">Developers</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <h2>Build with Apsara</h2>
        <p>
          From product strategy to delivery execution, we build software that is
          useful, reliable, and human-centered.
        </p>
        <a href="mailto:hello@apsara.software" className="footer-link">
          hello@apsara.software
        </a>
      </footer>
    </div>
  )
}

export default App
