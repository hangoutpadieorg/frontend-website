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

export {ReviewCard, ReviewCardReverse}