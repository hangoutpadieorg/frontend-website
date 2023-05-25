
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
      
      <section className="footer-bottom">
        <div>
          <div>
            
          </div>

          <div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer