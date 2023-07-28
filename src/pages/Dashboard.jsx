import "../Dashboard.css"
import DashboardNav from "../components/DashboardNav"
import { Link } from 'react-router-dom'
import DashIcon from '../assets/dashboard.svg'
import Calendar from '../assets/calendar.svg'
import AshLocator from '../assets/location.svg'
import DashButtonUser from '../assets/profile-circled.svg'

const Dashboard = () => {
  return (
    <div>
      <DashboardNav />
      <div className="container">
        <div className="sidebar">
          <SideButton img = {DashIcon} text = "Dashboard" link = '/' />
          <SideButton img = {AshLocator} text = "Hangout Center" />
          <SideButton img = {Calendar} text = "Events" />
          <SideButton img = {DashButtonUser} text = "Profile" />
        </div>
        <div className="main-section" id="mainSection">
          {/* Main section content */}
          <p>Your Dashboard</p>
          <div>
            <p>Hangout Centers</p>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SideButton = (props) => {
  return (
    <div className="side-button--container">
      <Link to={props.link}>
        <button className="sidebar--button">
          <img className="sidebar--icons" src={props.img} />
          <p>{props.text}</p>
        </button>
      </Link>
    </div>
  )
}

export default Dashboard