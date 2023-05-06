import Navbar from './components/Nav'
import Hero from './components/Hero'
import Steps from './components/Steps'
import guide from './components/guide'
import category from './components/category'
import Category from './components/Categories'
import Install from './components/AppInstall'
import ArrowButton from './components/ArrowButton'
import RightArrow from './assets/ArrowRightOrange.svg'
import {ReviewCard, ReviewCardReverse } from './components/ReviewCard'

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
    </div>
  )
}