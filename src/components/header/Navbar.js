import { NavLink } from 'react-router-dom'

import logo from './img/appleLogo.svg'
import './style.css'

const navItems = [
  { value: 'Что нового', href: '/news' },
  { value: 'Цвет', href: '/color' },
  { value: 'Заказать', href: '/product/:id' },
]

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <div className="header__list-box">
          <ul className="header__list">
            {navItems.map((item, index) => {
              return (
                <li key={index} className="header__item">
                  <NavLink to={item.href} className="header__link">
                    {item.value}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="header__logo logo">
          <img src={logo} alt="Логотип айфона" />
        </div>
        <div className="header__contact contact">
          <a href="tel:380504565656">+38 050-456-56-56</a>
        </div>
      </div>
    </nav>
  )
}
