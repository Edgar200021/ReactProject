import './style.css'
import Promo from './sections/Promo'
import About from './sections/About'
import Product from './sections/Products'
import Form from './sections/Form'

export default function Main() {
  return (
    <main className="main">
      <Promo />
      <About />
      <Product />
      <Form />
    </main>
  )
}
