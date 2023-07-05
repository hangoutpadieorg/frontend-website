// import InputField from "../pages/Login"
import {InputField, LogInBTN, AltSignIn} from "../components/FormComponents"
import { FormHeader } from "../components/FormComponents"
import { Link } from "react-router-dom"
import darkApple from "../assets/Apple dark.svg"
import Google from "../assets/Google.svg"

const Signup = () => {
  return (
    <div className='login--main'>
      <FormHeader />

      <section>
        <h2 className='header--text'>Welcome Back</h2>
        <div className='login--form'>
          <InputField 
            label = "Full Name"
            type = "text"
            placeholder = "John Doe"
          />
          <InputField
            label = "Emaill Address"
            type = "email"
            placeholder="johndoe@gmail.com"   
          />
          <InputField 
            label = "Password"
            type = "password"
          />

          <LogInBTN text = "Sign Up" className = "SignIn--BTN" />
          <h4 className='divider'>or</h4>
          <AltSignIn text = "Log in with Google" img = {Google} />
          <AltSignIn text = "Log in with Apple" img = {darkApple} />
          <div className='signup--container'>
            <p className='no-account--CTA'>Already have an account?</p>
            <Link to="/">
              <p className='signup--BTN'>Login</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Signup