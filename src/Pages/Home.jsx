import React from 'react'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import Testimonials from '../components/Testimonials'
import LatestNews from '../components/LatestNews'


const Home = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <LatestNews />
      <Testimonials />
    </div>
  )
}

export default Home
