import '../style.css'
import iphone from '../img/iphone14.jpg'

import text from '../../../data/Text.json'

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="second-title">ЧТО НОВОГО</h2>
        <div className="about__inner">
          <div className="about__texts">
            {text.map((text, index) => (
              <p key={index} className="about__text">
                {text.text}
              </p>
            ))}
          </div>
          <div className="about__img-box">
            <img alt="Iphone" src={iphone} />
          </div>
        </div>
      </div>
    </section>
  )
}
