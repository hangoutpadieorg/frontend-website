/* eslint-disable react/prop-types */
import category from "./category"
import ArrowButton from "./ArrowButton"

const TopCategory = (props) => {
  return (
    <div className='category--card'>
      <img className='category--image' src={props.image} />
      <h4 className='category--subtitle'>{props.category}</h4>
    </div>
  )
}

const CategoryCircle = category.map( catCard => {
  return (
    <TopCategory 
      key={catCard.id}
      image={catCard.image}
      category={catCard.category}
    />
  )
})

const Category = () => {
  return (
    <div className='category--main'>
      <h2 className='category--title'>Top Categories</h2>
      <div className='category--flex'>
        {CategoryCircle}
      </div>
      <ArrowButton text = 'View All' />
    </div>
  )
}

export default Category