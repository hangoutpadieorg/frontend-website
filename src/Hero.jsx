// import React from 'react'
import HeroImage from './assets/hero-image.png'

const Hero = () => {
  return (
    <section className='hero--main'>
      <div>
        <h1>Love to hangout?</h1>

      </div>
      <div>
        <img src={HeroImage} />
      </div>
    </section>
  )
}

export default Hero