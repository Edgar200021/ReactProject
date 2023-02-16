import '../style.css'

import product from '../../../data/Product.json'

export default function Product() {
  return (
    <section className="products">
      <div className="container">
        <div className="products__inner">
          <h2 className="second-title">ВЫБЕРИ СВОЙ ЦВЕТ</h2>
          <div className="products__box">
            {product.map((product) => {
              return (
                <div key={product.id} className="product__box">
                  <a href=".">
                    <img
                      className="product__img"
                      alt="Iphone"
                      src={product.img}
                    />
                  </a>
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
