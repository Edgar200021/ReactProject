import logo from '../img/appleLogo.svg'
import { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import "../style.css"

const navItems = [
  { value: 'Что нового', href: '/news' },
  { value: 'Цвет', href: '/color' },
  { value: 'Заказать', href: '/Products' },
]


export default function Burgermenu() {
	const [nav, setNav] = useState(false)
  return (
    <nav className="nav-burger">
		  <div className="nav-burger__inner">
			<div className="burger__logo logo">
        <img src={logo} alt="Логотип айфона" />
      </div>
			<div className ={nav ?  'burger__list-box active' : ' burger__list-box '}>
        <ul className="burger__list" >
          {navItems.map((item, index) => {
            return (
              <li key={index} className="header__item">
                <a className="header__link" href={item.href}>
                  {item.value}
                </a>
              </li>
            )
          })}
        </ul>
				</div>
			<div className="burger__btn" onClick={() => setNav(!nav) }>
			   {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
      </div>
			</div>
    </nav>
  )
}

