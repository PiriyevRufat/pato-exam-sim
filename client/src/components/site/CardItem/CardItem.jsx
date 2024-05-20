import React, { useContext, useState } from 'react'
import MainContext from '../../../context/context'
import './CardItem.css'
const CardItem = ({item}) => {
    const [data,setData]=useState([])
    const {addToBasket}=useContext(MainContext)
  return (
    <div className='col-4'>
      <div className='mycard-img'>
      <a href=""><img src={item.image} width="370px" height="220px" alt="" /></a>
      </div>
      <div className='my-card-text'>
      <a href=""><h4>{item.name}</h4></a>
      <a href=""><p>{item.subtitle}</p></a>
      <p>{item.price}</p>
      <a href="">Learn More</a><br />
      <button onClick={() => addToBasket(item)} className='btn btn-primary'>Add to Basket</button>
      </div>
    </div>
  )
}

export default CardItem
 
