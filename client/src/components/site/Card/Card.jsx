import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import CardItem from '../CardItem/CardItem'

const Card = () => {
    const { data }=useContext(MainContext)
    return (
        <div className='container d-flex mt-5'>
        {
            data.map((item,index)=>(
                    <CardItem key={index} item={item}/>
            ))
        }
        </div>
      )
}

export default Card
