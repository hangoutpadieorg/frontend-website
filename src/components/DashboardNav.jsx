import Logo from "../assets/hangout-logo.svg"
import User from '../assets/user.svg'

const DashboardNav = () => {
  return (
    <header>
      <nav className='dashboard--nav'>
        <img className='logo' src={Logo} />
        <div className='nav--links--main'>
          <ul>
            <li className='nav--items'><a href='#' className='link'>Home</a></li>
            <li className='nav--items'><a href='#' className='link'>About Us</a></li>
            <li className='nav--items'><a href='#' className='link'>Events</a></li>
            <li className='nav--items'><a href='#' className='link'>Hangout Center</a></li>
            <UserBadge />
          </ul>
        </div>
      </nav>
    </header>
  )
}

const UserBadge = () => {
  return(
    <div className="active--badge">
      <img className="user--img" src={User} />
      <p>Welcome User</p>
    </div>
  )
}

export default DashboardNav