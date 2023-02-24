import { useParams } from 'react-router-dom'
import Button from '../components/button/Button'
import Productsparams from '../components/products/Productsparams'
import { products } from '../components/products/Product'
import '../styles/main.css'

export default function Store() {
  const { id } = useParams()
  const product = products[id]
  return (
    <main>
      <section className="products-store">
        <div className="container">
          <h2 className="second-title">Характеристики</h2>
          <div className="products__container">
            <img className="products__img" src={product.img} alt="img" />
            <ul className="products__list">
              <Productsparams />
            </ul>
          </div>
          <Button />
        </div>
      </section>
    </main>
  )
}
