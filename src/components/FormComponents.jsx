/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Logo from '../assets/hangout-logo.svg'

const FormHeader = () => {
  return (
    <header>
      <nav className='form--nav'>
        <Link to='/'>
          <img className='login--logo' src={Logo} />
        </Link>
      </nav>
    </header>
  )
}

const InputField = (props) => {
  console.log(props)
  return (
    <div className="input--container">
      <div>
        <label className="input--label">{props.label}</label>
        <input className="form--input" type={props.type} placeholder={props.placeholder}></input>
      </div>
    </div>
  )
}

const LogInBTN = (props) => {
  return (
    <div className='BTN--div'>
      <button className={props.className}>{props.text}</button>
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

export {InputField, LogInBTN, AltSignIn, FormHeader}