/* eslint-disable react/prop-types */
import guide from './guide'

const StepCards = (props) => {
  return (
    <div className='step--cards'>
      <img className='step--icons' src={props.icon} />
      <div className='step--description'>
        <h2 className="step--title">{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

const MappedItems = guide.map( mapData => {
  return (
    <StepCards 
      key={mapData.id}
      icon = {mapData.icon}
      title = {mapData.title}
      description = {mapData.description}
    />
  )
})

const Steps = () => {
  return (
    <div>
      <h1 className='guide--header'>How does it work?</h1>
      <div className='steps'>
        {MappedItems}
      </div>
    </div>
  )
}

export default Steps