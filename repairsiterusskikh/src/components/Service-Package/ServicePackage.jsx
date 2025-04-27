import "./ServicePackage.css"
import Line from "../Line/Line"

export default function ServicePackage({ forWhat, children, price }) {
  return(
    <div className="serviceBlock">
      <Line />
      <span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 0L18 9L9 18L0 9L9 0Z" fill="#0A0A0A"/>
        </svg>
        <p>{forWhat}</p>
      </span>

      <h2>{children}</h2>

      <p className="price">{price}</p>

      <a href="#">Подробнее</a>
      <Line className="LineBottom" />
    </div>
  )
}