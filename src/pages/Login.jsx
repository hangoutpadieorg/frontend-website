/* eslint-disable react/prop-types */
import darkApple from "../assets/Apple dark.svg"
import Google from "../assets/Google.svg"
import '../App.css'
import { Link } from 'react-router-dom'
import {InputField, LogInBTN, AltSignIn, FormHeader} from "../components/FormComponents"

const Login = () => {
  return (
    <div className='login--main'>
      <FormHeader />

      <section>
        <h2 className='header--text'>Welcome Back</h2>
        <form name="login" action="#" method="POST" className='login--form'>
          <InputField 
            label = "Email Address"
            type = "email"
            placeholder = "johndoe@gmail.com"
          />
          <InputField label = "Password" type = "password" />
          <Link to="/resetPassword">
            <p className='password--reset'>Forgot Password?</p>
          </Link>

          <LogInBTN text = "Login" className = "SignIn--BTN" />
          <h4 className='divider'>or</h4>
          <AltSignIn text = "Log in with Google" img = {Google} />
          <AltSignIn text = "Log in with Apple" img = {darkApple} />
          <div className='signup--container'>
            <p className='no-account--CTA'>Don&apos;t have an account?</p>
            <Link to="/signup">
              <p className='signup--BTN'>Sign Up</p>
            </Link>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login