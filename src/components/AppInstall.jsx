/* eslint-disable react/prop-types */
import Vector from '../../public/Bg-curve.svg'
import Phone from '../assets/phone.png'
import Play from '../assets/play-logo.svg'
import Apple from '../assets/apple-logo.svg'

const Install = () => {
  return (
    <div className="vector--container">
      <div className="vector--main">
        <div className='color--adjust'></div>
        <img className='vector' src={Vector} />
        <div className='vector--absolute'>
          <img className='phone' src={Phone} />
          <div className='install--options'>
            <h1 className='install--header'>Install the app</h1>
            <h3 className='install--text'>It's never been easier to hang out. Look for the finest and cool places to have fun and connect within clicks.</h3>
            <div className='install-btn--flex'>
              <InstallButton 
                icon = {Play}
                action = "GET IT ON"
                store = "Google Play"
                link = '#'
              />
              <InstallButton 
                icon = {Apple}
                action = "DOWNLOAD FROM THE "
                store = "App Store"
                link = '#'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const InstallButton = (props) => {
  return (
    <a href={props.link}>
      <button className='install--btn'>
        <img className='play--icon' src={props.icon} />
        <div>
          <h5 className='btn--text1'>{props.action}</h5>
          <h4 className='btn--text2'>{props.store}</h4>
        </div>
      </button>
    </a>
  )
}

export default Install