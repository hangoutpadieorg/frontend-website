import RightArrow from '../assets/ArrowRight.svg'
/* eslint-disable react/prop-types */

function ArrowButton(props) {
  return (
    <a href='#'>
      <button className='btn'>
        <p>{props.text}</p> <img className='rightArrow' src={RightArrow} />
      </button>
    </a>
  )
}

export default ArrowButton