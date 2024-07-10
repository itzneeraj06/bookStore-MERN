import React from 'react'
import Hero from '../components/Hero'
import Recently from '../components/Recently'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div className="bg-zinc-900">
      <Hero />
      <Trending />
      <Recently />
    </div>
  )
}

export default Home