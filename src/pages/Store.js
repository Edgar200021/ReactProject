import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Button from '../components/button/Button'
import Productsparams from '../components/products/Productsparams'
// import { products } from '../components/products/Product'
import '../styles/main.css'

export default function Store() {

  const [data, setData]  = useState([])

  const { id } = useParams()
  useEffect(() => {
	
	fetch(`http://localhost:3001/product/${id}`)
	.then(res => res.json())
	.then(res => setData(res))
  })

  
//   const product = products[id]
  return (
    <main>
      <section className="products-store">
        <div className="container">
          <h2 className="second-title">Характеристики</h2>
          <div className="products__container">
            <img className="products__img" src={data.img} alt="img" />
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
