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

        <div>
          <ul>
            <li>Lounge</li>
            <li>Bar</li>
            <li>Cafe</li>
            <li>Beach</li>
            <li>Restaurant</li>
            <li>Garden/Park</li>
          </ul>

          <div>
            <div>
              <img src={RedLocator} />
              <input type='text'></input>
            </div>
            <button>
              <img src={Search} />
              <p>Find a hangout location</p>
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={HeroImage} />
      </div>
    </section>
  )
}

export default Hero