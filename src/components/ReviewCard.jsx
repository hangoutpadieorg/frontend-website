import ArrowButton from "./ArrowButton"
// import ReviewImage from '../assets/Cubana_Full.png'
const ReviewCard = (props) => {
  return(
    <div className="review--card">
      <div className="review--left">
        <h3 className="review--title">{props.title}</h3>
        <h3 className="reviewer">{props.reviewer}</h3>
        <p className="review--description">{props.description}</p>
        <ArrowButton text = 'Explore Now'/>
      </div>

      <div className="review--right">
        <img className="review--image" src={props.image} />
      </div>
    </div>
  )
}

const ReviewCardReverse = (props) => {
  return(
    <div className="review--card--reverse">
      <div className="review--left">
        <h3 className="review--title">{props.title}</h3>
        <h3 className="reviewer">{props.reviewer}</h3>
        <p className="review--description">{props.description}</p>
        <ArrowButton text = 'Explore Now'/>
      </div>

      <div className="review--right">
        <img className="review--image--reverse" src={props.image} />
      </div>
    </div>
  )
}

const ReviewDiv = () => {
  return (
    <div>
      <ReviewCard 
        title = 'Best lounge ever visited...'
        reviewer = 'Anita Sanchez, Lagos'
        description = 'Cubana is an exciting place to be. Situated at the heartbeat of Lagos with cool and serene view...'
        image = './src/assets/Cubana_Full.png'
      />
      <ReviewCardReverse 
        title = 'Celebrate with friends and family with ease...'
        reviewer = 'Olawale, Abuja'
        description = "Enjoy the cool breeze from the Atlantic Ocean as you celebrate with frineds and family at the Sailor's Lounge."
        image = './src/assets/Sea-bar.png'
      />
      <ReviewCard 
        title = 'Wanna eat hot & spicy Pizza?'
        reviewer = 'Anon'
        description = 'Pair up with a friend and enjoy the hot and crispy pizza pops at Hard Rock Cafe'
        image = './src/assets/Hard-rock.png'
      />
    </div>
  )
}

export {ReviewDiv}