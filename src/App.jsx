import Navbar from './components/Nav'
import Hero from './components/Hero'
import Steps from './components/Steps'
import guide from './components/guide'
import category from './components/category'
import Category from './components/Categories'
import Install from './components/AppInstall'
import ArrowButton from './components/ArrowButton'
import RightArrow from './assets/ArrowRightOrange.svg'
import {ReviewDiv} from './components/ReviewCard'
import HangoutCTA from './components/Hangout-CTA'
import Footer from './components/Footer'

export default function App() {

  const StepCards = guide.map( mapData => {
    return (
      <Steps 
        key={mapData.id}
        icon = {mapData.icon}
        title = {mapData.title}
        description = {mapData.description}
      />
    )
  })

  const CategoryCircle = category.map( catCard => {
    return (
      <Category 
        key={catCard.id}
        image={catCard.image}
        category={catCard.category}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <h1 className='guide--header'>How does it work?</h1>
        <div className='steps'>
          {StepCards}
        </div>
      </div>
      <div className='category--main'>
        <h2 className='category--title'>Top Categories</h2>
        <div className='category--flex'>
          {CategoryCircle}
        </div>
        <ArrowButton text = 'View All' />
      </div>
      <Install />
      <div className='reviews--main'>
        <div className='reviews--top'>
          <h3>Reviews</h3>
          <a href='#'>
            <div className='reviews--header'>
              <p>View All</p>
              <img src={RightArrow} />
            </div>
          </a>
        </div>
        <ReviewDiv />
      </div>
      <HangoutCTA />
      <Footer />
    </div>
  )
}