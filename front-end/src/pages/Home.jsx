import React from 'react'
import Hero from '../components/Hero'
import Recently from '../components/Recently'

const Home = () => {
  return (
    <div className="bg-zinc-900">
      <Hero />
      <Recently/>
    </div>
  )
}

export default Home