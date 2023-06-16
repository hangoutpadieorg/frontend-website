import {InputField, LogInBTN, FormHeader} from "../components/FormComponents"
import LongArrow from "../assets/long-arrow-left.svg"
import { Link } from 'react-router-dom'

const ResetPassword = () => {
  return (
    <div className="reset--main">
      <FormHeader />
      <h2 className='header--text'>Change Password</h2>
      <div className="reset--form">
        <InputField label = "New Password" type = "password" />
        <InputField label = "Repeat Password" type = "password" />
        <LogInBTN text = "Update Password" className = "Reset--BTN" />
        <Link to="/login">
          <div className="back-to-login">
            <img className="longArrow" src={LongArrow} alt="" />
            <p>Back to login</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ResetPassword