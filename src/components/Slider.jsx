import { createPortal } from "react-dom"
import "../styles/Slider.scss"


const Slider = () => {
  return createPortal(
    <div className="slider"></div>, document.getElementById("slider")
  )
}

export default Slider