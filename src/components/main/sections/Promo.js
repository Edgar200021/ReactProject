import '../style.css'
import iphones from '../img/iphones.png'

export default function Promo() {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__inner">
          <h1 className="first-title">IPHONE 14 PRO</h1>
          <div className="promo__img-box">
            <a href="">
              <img src={iphones} alt="promog-iphone" />
            </a>
          </div>
          <a href="" className="promo__link">
            ВЫБРАТЬ
          </a>
        </div>
      </div>
    </section>
  )
}
