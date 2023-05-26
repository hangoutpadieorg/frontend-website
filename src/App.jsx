import Navbar from './components/Nav'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Install from './components/AppInstall'
import HangoutCTA from './components/Hangout-CTA'
import Footer from './components/Footer'
import Category from './components/Categories'
import Review from './components/ReviewCard'

export default function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Steps />
      <Category />
      <Install />
      <Review />
      <HangoutCTA />
      <Footer />
    </div>
  )
}