import './App.css'
import Logo from '../src/assets/hangout-logo.svg'
import User from './assets/user.svg'

const Navbar = () => {
  return (
    <header>
      <nav className='navbar--main'>
        <img className='logo' src={Logo} />
        <div className='nav--links'>
          <ul>
            <a href='#'>
              <li className='nav--items'>Home</li>
            </a>
            <a href='#'>
              <li className='nav--items'>About Us</li>
            </a>
            <a href='#'>
              <li className='nav--items'>Events</li>
            </a>
            <a href='#'>
              <li className='nav--items'>Categories</li>
            </a>
            <a href='#'>
              <li className='nav--items'>Sign Up</li>
            </a>
            <a href='#'>
              <div className='nav--items nav--login'>
                <img className='nav--userLogo' src={User} />
                <p>Login</p>
              </div>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar