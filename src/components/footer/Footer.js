import logo from '../header/img/appleLogo.svg'
import "./style.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="nav footer__nav">
          <a
            style={{ fontWeight: '400', fontSize: '1.4rem' }}
            href="."
            className="footer__link"
          >
            Политика конфиденциальности
          </a>
          <div className="footer__logo logo">
            <img src={logo} alt="Логотип айфона" />
          </div>
          <div className="footer__contact contact">
            <a href="tel:380504565656">+38 050-456-56-56</a>
          </div>
        </nav>
      </div>
    </footer>
  )
}
