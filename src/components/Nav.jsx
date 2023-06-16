/* eslint-disable react/prop-types */
import '../App.css'
import Logo from '../assets/hangout-logo.svg'
import User from '../assets/user.svg'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className='navbar--main'>
        <img className='logo' src={Logo} />
        <div className='nav--links--main'>
          <ul>
            <li className='nav--items'><a href='#' className='link'>Home</a></li>
            <li className='nav--items'><a href='#' className='link'>About Us</a></li>
            <li className='nav--items'><a href='#' className='link'>Events</a></li>
            <li className='nav--items'><a href='#' className='link'>Categories</a></li>
            <NavButton 
              btnText = "Signup"
              user = "Signup as user"
              vendor = "Signup as vendor"
              link = '/signup'
            />
            <NavButton 
              img = {User}
              btnText = "Login"
              user = "Login as user"
              vendor = "Login as vendor"
              link = '/login'
            />
          </ul>
        </div>
      </nav>
    </header>
  )
}

const NavButton = (props) => {
  return (
    <div className='nav--items link nav--login'>
      <img className='nav--userLogo' src={props.img} />
      <p>{props.btnText}</p>

      <div className='nav--login--hidden' id='xx'>
        <Link to={props.link}><p className='nav--login--user'>{props.user}</p></Link>
        <Link to={props.link}><p className='nav--login--vendor'>{props.vendor}</p></Link>
      </div>
    </div>
  )
}

export default Navbar