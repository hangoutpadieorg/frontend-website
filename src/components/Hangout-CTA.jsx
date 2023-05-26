import ArrowButton from "./ArrowButton"
import Glass from "../assets/Glass.png"
import Fries from "../assets/Chops.png"

const HangoutCTA = () => {
  return (
    <div className="hangout--main">
      <div className="hangout--image-left">
        <img src={Glass} alt=""/>
      </div>
      <div className="hangout--image-right">
        <img src={Fries} alt="" />
      </div>
      <div className="hangout--CTA">
        <h3 className="CTA--title">Are you ready to hangout and connect?</h3>
        <ArrowButton 
          className = 'CTA-Btn'
          text = 'BOOK NOW'
        />
      </div>
    </div>
  )
}

export default HangoutCTA