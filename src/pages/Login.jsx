/* eslint-disable react/prop-types */
import Logo from '../assets/hangout-logo.svg'
import darkApple from "../assets/Apple dark.svg"
import Google from "../assets/Google.svg"
import '../App.css'
import { Link } from 'react-router-dom'

const InputField = (props) => {
  console.log(props)
  return (
    <div className="input--container">
      <label className="input--label">{props.label}</label>
      <input className="form--input" type={props.type} placeholder={props.placeholder}></input>
    </div>
  )
}

const LogInBTN = (props) => {
  return (
    <div className='BTN--div'>
      <button className="SignIn--BTN">{props.text}</button>
    </div>
  )
}

const AltSignIn = (props) =>{
  return (
    <div className='sign-in--external'>
      <a href="#">
        <button>
          {props.text}
          <img className='service--icons' src={props.img} />
        </button>
      </a>
    </div>
  )
}

const Login = () => {
  return (
    <div className='login--main'>
      <header>
        <nav>
          <img className='login--logo' src={Logo} />
        </nav>
      </header>

      <section>
        <h2 className='header--text'>Welcome Back</h2>
        <div className='login--form'>
          <InputField 
            label = "Email Address"
            type = "email"
            placeholder = "johndoe@gmail.com"
          />
          <InputField label = "Password" type = "password" />
          <Link to="/resetPassword">
            <p className='password--reset'>Forgot Password?</p>
          </Link>

          <LogInBTN text = "Login" />
          <h4 className='divider'>or</h4>
          <AltSignIn text = "Log in with Google" img = {Google} />
          <AltSignIn text = "Log in with Apple" img = {darkApple} />
          <div className='signup--container'>
            <p className='no-account--CTA'>Don't have an account?</p>
            <Link to="/signup">
              <p className='signup--BTN'>Sign Up</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login