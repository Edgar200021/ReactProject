import Navbar from './Navbar'
import Burgermenu from './burger-menu/Burgermenu'
import './style.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Navbar/>
				 <Burgermenu/> 
      </div>
    </header>
  )
}
