/* eslint-disable react/prop-types */

const Category = (props) => {
  return (
    <div className='category--card'>
      <img className='category--image' src={props.image} />
      <h4 className='category--subtitle'>{props.category}</h4>
    </div>
  )
}

export default Category