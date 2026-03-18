import { Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/products/ProductDetailPage'
import ConsultingPage from './pages/ConsultingPage'
import AIConsultingPage from './pages/consulting/AIConsultingPage'
import CommunitySoftwarePage from './pages/consulting/CommunitySoftwarePage'
import CloudOptimizationPage from './pages/consulting/CloudOptimizationPage'
import AutomationPage from './pages/consulting/AutomationPage'
import CustomCRMPage from './pages/consulting/CustomCRMPage'
import DevelopersPage from './pages/DevelopersPage'
import APIsPage from './pages/developers/APIsPage'
import OcioDeveloperPlatformPage from './pages/developers/OcioDeveloperPlatformPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import { getProducts } from './data/products'
import { SUPPORTED_LANGUAGES } from './i18n/messages'
import { useI18n } from './i18n/useI18n'

function App() {
  const { language, setLanguage, t } = useI18n()
  const products = getProducts(language)
  const location = useLocation()
  const isProducts = location.pathname.startsWith('/products')
  const isConsulting = location.pathname.startsWith('/consulting')
  const isDevelopers = location.pathname.startsWith('/developers')

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand-block">
          <p className="brand-name">{t('brandName')}</p>
          <p className="brand-tagline">{t('brandTagline')}</p>
        </div>
        <div className="header-actions">
          <div className="language-picker">
            <select
              aria-label={t('languageLabel')}
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              {SUPPORTED_LANGUAGES.map((entry) => (
                <option value={entry.code} key={entry.code}>
                  {entry.code.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <nav className="topnav" aria-label="Main navigation">
            <NavLink to="/" end>
              {t('nav.home')}
            </NavLink>
            <div className="nav-dropdown">
              <Link to="/products" className={isProducts ? 'active' : ''}>
                {t('nav.products')}
              </Link>
              <div className="nav-dropdown-menu">
                {products.map((product) => (
                  <NavLink key={product.slug} to={`/products/${product.slug}`}>
                    {product.name}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav-dropdown">
              <Link to="/consulting" className={isConsulting ? 'active' : ''}>
                {t('nav.consulting')}
              </Link>
              <div className="nav-dropdown-menu">
                <NavLink to="/consulting/ai-consulting">
                  {t('nav.aiConsulting')}
                </NavLink>
                <NavLink to="/consulting/community-software">
                  {t('nav.communitySoftware')}
                </NavLink>
                <NavLink to="/consulting/cloud-optimization">
                  {t('nav.cloudOptimization')}
                </NavLink>
                <NavLink to="/consulting/automation">{t('nav.automation')}</NavLink>
                <NavLink to="/consulting/custom-crm">{t('nav.customCrm')}</NavLink>
              </div>
            </div>
            <div className="nav-dropdown">
              <Link to="/developers" className={isDevelopers ? 'active' : ''}>
                {t('nav.developers')}
              </Link>
              <div className="nav-dropdown-menu">
                <NavLink to="/developers/apis">{t('nav.apis')}</NavLink>
                <NavLink to="/developers/ocio-developer-platform">
                  {t('nav.ocioDeveloperPlatformComingSoon')}
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route
            path="/products/danceclub"
            element={<Navigate to="/products/danceschool-pro" replace />}
          />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/consulting/ai-consulting" element={<AIConsultingPage />} />
          <Route
            path="/consulting/community-software"
            element={<CommunitySoftwarePage />}
          />
          <Route
            path="/consulting/cloud-optimization"
            element={<CloudOptimizationPage />}
          />
          <Route path="/consulting/automation" element={<AutomationPage />} />
          <Route path="/consulting/custom-crm" element={<CustomCRMPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/developers/apis" element={<APIsPage />} />
          <Route
            path="/developers/ocio-developer-platform"
            element={<OcioDeveloperPlatformPage />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ai" element={<Navigate to="/consulting/ai-consulting" replace />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <h2>{t('footer.title')}</h2>
        <p>{t('footer.text')}</p>
        <a href="mailto:hello@apsara.software" className="footer-link">
          {t('footer.email')}
        </a>
        <div className="footer-nav">
          <NavLink to="/about">{t('nav.about')}</NavLink>
          <NavLink to="/contact">{t('nav.contact')}</NavLink>
        </div>
      </footer>
    </div>
  )
}

export default App
