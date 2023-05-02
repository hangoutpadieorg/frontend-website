import Navbar from './components/Nav'
import Hero from './components/Hero'
import Steps from './components/Steps'
import guide from './components/guide'

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
    </div>
  )
}