import RightArrow from '../assets/ArrowRight.svg'
/* eslint-disable react/prop-types */

export default function ArrowButton(props) {
  return (
    <div className='btn--container'>
      <a href='#'>
        <button className='btn'>
          <p>{props.text}</p> <img className='rightArrow' src={RightArrow} />
        </button>
      </a>
    </div>
  )
}