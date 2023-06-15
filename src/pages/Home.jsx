import Navbar from "../components/Nav"
import Hero from "../components/Hero"
import Steps from "../components/Steps"
import Category from "../components/Categories"
import Install from "../components/AppInstall"
import Review from "../components/ReviewCard"
import HangoutCTA from "../components/Hangout-CTA"
import Footer from "../components/Footer"

const Home = () => {
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

export default Home