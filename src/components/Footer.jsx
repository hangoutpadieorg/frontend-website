import Facebook from "../assets/facebook.svg"
// import Instagram from "../assets/instagram.svg"
import Twitter from "../assets/twitter.svg"
import Envelope from "../assets/envelope.svg"

let getDate = new Date();
let currentYear = getDate.getFullYear();
// console.log(currentYear);

const Cities = (props) => {
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
          <Cities 
            city1 = "Abuja" city2 = "Lafia"
            city3 = "Lokoja" city4 = "Minna"
            city5 = "Ilorin"
          />
          <Cities 
            city1 = "Lagos" city2 = "Ibadan"
            city3 = "Akure" city4 = "Oshogbo"
            city5 = "Abeokuta"
          />
          <Cities 
            city1 = "Port Harcourt" city2 = "Asaba"
            city3 = "Benin" city4 = "Bayelsa"
            city5 = "Uyo"
          />
          <Cities 
            city1 = "Calabar" city2 = "Enugu"
            city3 = "Abia" city4 = "Awka"
            city5 = "Owerri"
          />
          <Cities 
            city1 = "Keffi" city2 = "Bauchi"
            city3 = "Kano" city4 = "Kaduna"
            city5 = "Kebbi"
          />
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
                <img className="social--icons" src={Instagram} />
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
                <input type="text" id="lname" name="lname" placeholder="Enter your Email" />
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