import React from 'react'
import Home from './pages/Home'
import AllBooks from './pages/AllBooks'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Viewbookdetails from './pages/Viewbookdetails'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>

      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/allbooks' element={<AllBooks />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/getdetails/:id' element={<Viewbookdetails />}></Route>
      </Routes>
      <Footer />

    </>
  )
}

export default App