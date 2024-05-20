import React from 'react'
import Carousel from '../../../components/site/Carousel/Carousel'
import Crud from '../../../components/site/CrudSect/Crud'
import Review from '../../../components/site/Review/Review'
import Welcome from '../../../components/site/WelcomSection/Welcome'

const Home = () => {
  return (
    <div>
    <Carousel/>
    <Welcome/>
    <Crud/>
    <Review/>
    </div>
  )
}

export default Home
