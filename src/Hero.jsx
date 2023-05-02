// import React from 'react'
import HeroImage from './assets/hero-image.png'
import RedLocator from './assets/location-icon-red.svg'
import Search from './assets/search.svg'

const Hero = () => {
  return (
    <section className='hero--main'>
      <div className='hero--locator'>
        <h1 className='hero--title'>Love to hangout?</h1>
        <p className='hero--text'>Find hangout locations that are accessible near you</p>

        <div className='location--container'>
          <ul className='hangout--category'>
            <li>Lounge</li>
            <li>Bar</li>
            <li>Cafe</li>
            <li>Beach</li>
            <li>Restaurant</li>
            <li>Garden/Park</li>
          </ul>

          <div className='hero--inputbar'>
            <div className='search--location'>
              <img className='red--location-icon' src={RedLocator} />
              <input type='text' placeholder='Enter your location'></input>
            </div>
            <button className='search--button'>
              <img src={Search} />
              <p>Find a hangout location</p>
            </button>
          </div>
        </div>
      </div>
      <div className='hero--image--container'>
        <img className='hero--image' src={HeroImage} />
      </div>
    </section>
  )
}

export default Hero