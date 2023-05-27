/* eslint-disable react/prop-types */
import Facebook from "../assets/facebook.svg"
import Igram from "../assets/1.svg"
import Twitter from "../assets/twitter.svg"
import Envelope from "../assets/envelope.svg"
import cities from "./cities"

let getDate = new Date();
let currentYear = getDate.getFullYear();
// console.log(currentYear);

const CityList = (props) => {
  return (
    <ul className="city--list">
      <li>{props.city1}</li>
      <li>{props.city2}</li>
      <li>{props.city3}</li>
      <li>{props.city4}</li>
      <li>{props.city5}</li>
    </ul>
  )
}

const Cities = cities.map(cityMap => {
  return (
    <CityList 
      key = {cityMap.id}
      city1 = {cityMap.city1}
      city2 = {cityMap.city2}
      city3 = {cityMap.city3}
      city4 = {cityMap.city4}
      city5 = {cityMap.city5}
    />
  )
})

const FooterOptions = (props) => {
  return (
    <div>
      <h4 className="footer--title">{props.title}</h4>
      <div>
        <ul className="footer--links">
          <li><a href="#">{props.item1}</a></li>
          <li><a href="#">{props.item2}</a></li>
          <li><a href="#">{props.item3}</a></li>
          <li><a href="#">{props.item4}</a></li>
        </ul>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="footer">
      <section className="footer--top">
        <h3 className="top--cities">Our top cities</h3>
        <div className="cities">
          {Cities}
        </div>
      </section>
      
      <section className="footer--bottom">
        <div className="bottom--container">
          <div className="footer--options">
            <FooterOptions 
              title = "Company"
              item1 = "About Us"
              item2 = "Team"
              item3 = "Services"
              item4 = "Blog"
            />
            <FooterOptions 
              title = "Contact"
              item1 = "Help & Support"
              item2 = "Partner with us"
            />
            <FooterOptions 
              title = "Legal"
              item1 = "Terms & Conditions"
              item2 = "Refund & Cancellation"
              item3 = "Privacy Policy"
              item4 = "Cookie Policy"
            />
          </div>

          <div className="contact-us">
            <h4 className="contact--title">FOLLOW US</h4>
            <div className="social">
              <a href="#">
                <img className="social--icons" src={Igram} />
              </a>
              <a href="#">
                <img className="social--icons" src={Facebook} />
              </a>
              <a href="#">
                <img className="social--icons" src={Twitter} />
              </a>
            </div>
            
            <p className="offers">Receive exclusive offers in your mailbox</p>
            <form className="mail-in" onSubmit="#">
              <div className="form--input">
                <img className="envelope" src={Envelope} />
                <input type="email" id="lname" name="lname" placeholder="Enter your Email" />
              </div>
              <button className="mail-in--button" type='submit'>Subscribe</button>
            </form>
          </div>
        </div>
      </section>
      
      <div className="copyright">
        <p>All rights Reserved <span>&#169;</span> 
        <span className="copyright--bold">HangoutPaddie, {currentYear}</span>
        </p>
      </div>
    </div>
  )
}

export default Footer