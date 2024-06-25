import React, { useEffect } from 'react'
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
import Favourites from './components/Favourites'
import OrderHistory from './components/OrderHistory'
import Setting from './components/Setting'
import { useDispatch } from 'react-redux'
import { login, changeRole } from './store/auth'
const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("id") && localStorage.getItem("token") && localStorage.getItem("role")) {
      dispatch(login());
      dispatch(changeRole(localStorage.getItem("role")));
    }

  }, [])

  return (
    <>

      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/allbooks' element={<AllBooks />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/profile' element={<Profile />}>
          <Route index element={<Favourites/>}></Route>
          <Route path='/profile/orderhistory' element={<OrderHistory />}/>
          <Route path='/profile/setting' element={<Setting />}/>
        </Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/getdetails/:id' element={<Viewbookdetails />}></Route>
      </Routes>
      <Footer />

    </>
  )
}

export default App