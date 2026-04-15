export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line" aria-hidden="true" />
      <p className="footer-company">Apsara Software AG, Switzerland</p>
      <a href="mailto:hello@apsara.software" className="footer-email">
        hello@apsara.software
      </a>
      <p className="footer-copy">&copy; {new Date().getFullYear()}</p>
    </footer>
  )
}
