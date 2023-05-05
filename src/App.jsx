import Navbar from './components/Nav'
import Hero from './components/Hero'
import Steps from './components/Steps'
import guide from './components/guide'
import category from './components/category'
import Category from './components/Categories'
import RightArrow from './components/ArrowButton'
import Install from './components/AppInstall'

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
        <RightArrow text = 'View All' />
      </div>
      <Install />
    </div>
  )
}