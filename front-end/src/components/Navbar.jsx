import React, { useState, useEffect } from 'react'
import logo from '../asset/logo.png'
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { cartCount } from '../store/cart';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const checkrole = useSelector((state) => state.auth.role);
  const dispatch = useDispatch();
  const cartcount = useSelector((state) => state.cart.cart);

  const Sidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  }

  const fetch = async () => {
    try {
      const cartValue = await axios.get(`${process.env.REACT_APP_BASE_URL}/getuserinfo`, { headers });
      dispatch(cartCount(cartValue.data.cart.length));
    } catch (error) {
      console.log("cart not found please login!!!");
    }

  }
  useEffect(() => {
    fetch()
  }, [])

  return (
    <>
      <div className='hidden sm:flex bg-zinc-800 text-white px-4 py-2 items-center justify-between'>
        <Link to='/'>
          <div className="flex items-center me-3">
            <img src={logo} alt={logo} className="h-20" />
            <h1 className='text-2xl font-semibold'>BookStore</h1>
          </div>
        </Link>
        <div className="flex ">
          <ul className="flex gap-4 items-center me-4">

            <li className=' hover:text-blue-500 transition-all duration-500'><Link to={'/'}>Home</Link></li>
            <li className=' hover:text-blue-500 transition-all duration-500'><Link to={'/allbooks'}>All Books</Link></li>
            {isLoggedIn &&
              <li className=' hover:text-blue-500 transition-all duration-500 flex'><Link to={'/cart'}>Cart</Link><p className=' rounded-full text-red-400 text-xs ms-[1px]'>{cartcount}</p></li>
            }
          </ul>
          {!isLoggedIn &&
            <ul className="hidden items-center gap-4 sm:flex">
              <li className='px-2 py-1 border border-blue-500 rounded hover:bg-blue-500  transition-all duration-300 '><Link to={'/login'}><button>Login</button></Link></li>
              <li className='px-2 py-1 bg-blue-400 rounded hover:bg-blue-500  transition-all duration-300'><Link to={'/signup'}><button>Signup</button></Link></li>
            </ul>
          }
          {isLoggedIn &&
            <ul className="hidden items-center gap-4 sm:flex">
              <li className='px-2 py-1 border border-blue-500 rounded hover:bg-blue-500  transition-all duration-300 '><Link to={'/profile'}><button>Profile</button></Link></li>
            </ul>
          }

        </div>
      </div>

      {/* responsive navbar */}
      <div className='flex sm:hidden bg-zinc-800 text-white px-1 py-1 items-center justify-between h-[10vh]'>
        <Link to='/'>
          <div className="flex items-center me-3">
            <img src={logo} alt={logo} className="h-20" />
            <h1 className='text-2xl font-semibold'>BookStore</h1>
          </div>
        </Link>
        <div className="flex">
          {
            !isSidebarOpen && (
              (isLoggedIn) ? (
                <Link to='/Cart' className='me-2 text-zinc-400 flex' >Cart <p className='text-xs text-red-400'>{cartcount}</p></Link>) : (
                <Link to='/login' className='px-2 py-1 me-2 border border-blue-500 rounded hover:bg-blue-500  transition-all duration-300 '>Login</Link>))
          }

          {!isSidebarOpen &&
            (< ul className='flex sm:hidden items-center text-xl mx-1'>
              <li><button onClick={() => Sidebar()}><FiMenu /></button></li>
            </ul>)
          }
          {isSidebarOpen && (

            <div className='absolute bg-zinc-700 right-2 top-4 p-4'>

              <button onClick={Sidebar} className='flex justify-end w-full'><RxCross1 /></button>

              <ul className='flex flex-col items-center mt-4'>

                <li><Link to='/' onClick={() => Sidebar()} >Home</Link></li>
                <hr className='bg-zinc-200 w-4 mb-2' />
                <li><Link to='/allbooks' onClick={() => Sidebar()}  >All Books</Link></li>
                <hr className='bg-zinc-200 w-4 mb-2' />
                {!isLoggedIn && isSidebarOpen &&
                  (<li><Link to='/login' onClick={() => Sidebar()}  >Login</Link></li>)
                }
                {
                  isLoggedIn && isSidebarOpen &&
                  (<li><Link to='/cart' onClick={() => Sidebar()}  >Cart</Link></li>)
                }
                <hr className='bbg-zinc-200 w-4 mb-2' />
                {
                  isLoggedIn &&
                  (
                    <><li><Link to='/profile' onClick={() => Sidebar()}  >Profile</Link></li><hr className='bbg-zinc-200 w-4 mb-2' /></>
                  )
                }

              </ul>

            </div>
          )}

        </div>
      </div >
    </>


  )
}

export default Navbar