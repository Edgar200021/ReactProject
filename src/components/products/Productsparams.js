import './style.css'

const productsInfo = [
  {
    paramsTitle: 'Процессор',
    paramsDescr: '	Apple A15 Bionic',
  },
  {
    paramsTitle: 'Оперативная память	',
    paramsDescr: '	6 Гб',
  },
  {
    paramsTitle: 'Встроенная память',
    paramsDescr: '	128, 256 или 512 Гб',
  },
  {
    paramsTitle: 'Батарея',
    paramsDescr: '	3279 мА·ч',
  },
  {
    paramsTitle: 'Экран',
    paramsDescr: '6,1 дюйма, AMOLED, 60 Гц',
  },
  {
    paramsTitle: 'Основная камера	',
    paramsDescr: '	12 Мп с f/1,5 + 12 Мп с f/2,4 (сверхширокоугольная)',
  },
  {
    paramsTitle: 'Фронтальная камера	',
    paramsDescr: '	12 Мп с автофокусомc',
  },
  {
    paramsTitle: 'Цена в рознице	',
    paramsDescr: '	От 85 000 Р по параллельному импорту',
  },
]

export default function Productsparams() {
  return (
    <>
      {productsInfo.map((info, index) => {
        return (
          <li key={index} className="product__item">
            <h3 className="third-title product__title">{info.paramsTitle}</h3>
            <p className="product__descr">{info.paramsDescr}</p>
          </li>
        )
      })}
    </>
  )
}
