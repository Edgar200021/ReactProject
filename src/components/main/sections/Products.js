import '../style.css'
import { NavLink } from 'react-router-dom'

import {products} from '../../products/Product.js'

export default function Product() {
  return (
    <section className="products">
      <div className="container">
        <div className="products__inner">
          <h2 className="second-title">ВЫБЕРИ СВОЙ ЦВЕТ</h2>
          <div className="products__box">
            {products.map((product, index) => {
              return (
                <div key={index} className="product__box">
                  <NavLink to={`/product/${index}`}>
                    <img
                      className="product__img"
                      alt="Iphone"
                      src={product.img}
                    />
                  </NavLink>

                  <h3 className="third-title">{product.title}</h3>
                  <p className="product__description">{product.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
