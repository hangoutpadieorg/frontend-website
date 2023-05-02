/* eslint-disable react/prop-types */
// import guide from './guide'
// import Location from '../assets/location-icon-orange.svg'

const Steps = (props) => {
  return (
    <div className='step--cards'>
      <img className='step--icons' src={props.icon} />
      <div className='step--description'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Steps