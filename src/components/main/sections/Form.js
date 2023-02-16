import '../style.css'
import formImage from '../img/form-img.jpg'

export default function Form() {
  return (
    <section className="form">
      <div className="container">
        <div className="form__inner">
          <div className="form__field">
            <div className="form__field-box">
              <h2 className="second-title white">ХОЧЕШЬ IPHONE 14 PRO?</h2>
              <form className="form__form">
                <input
                  className="form__input form__input-text"
                  type="text"
                  placeholder="Ваше имя"
                  required
                />
                <input
                  className="form__input form__input-number"
                  type="text"
                  placeholder="Номер телефона"
                  required
                />
                <p className="form__descr">
                  В ближайшее время наш менеджер свяжется с Вами
                </p>
                <button className="form__btn">Заказать</button>
              </form>
            </div>
          </div>
          <div className="form__img-box">
            <img alt="Iphone" src={formImage}></img>
          </div>
        </div>
      </div>
    </section>
  )
}
