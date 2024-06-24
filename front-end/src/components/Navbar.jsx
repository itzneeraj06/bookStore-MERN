import React from 'react'
import logo from '../asset/logo.png'
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {

  const isLoggedIn= useSelector((state)=>state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div className='flex bg-zinc-800 text-white px-4 py-2 items-center justify-between'>
      <Link to='/'>
        <div className="flex items-center me-3">
          <img src={logo} alt={logo} className="h-20" />
          <h1 className='text-2xl font-semibold'>BookStore</h1>
        </div>
      </Link>
      <div className="flex ">
        <ul className="hidden gap-2 items-center me-2 sm:flex">
          <li className=' hover:text-blue-500 transition-all duration-500'>Home</li>
          <li className=' hover:text-blue-500 transition-all duration-500'><Link to={'/allbooks'}>All Books</Link></li>
          <li className=' hover:text-blue-500 transition-all duration-500'>Cart</li>
          <li className=' hover:text-blue-500 transition-all duration-500'>Profile</li>
        </ul>
        <ul className="hidden items-center gap-4 sm:flex">
          <li className='px-2 py-1 border border-blue-500 rounded hover:bg-zinc-200 hover:text-zinc-800 transition-all duration-300 '><Link to={'/login'}><button>Login</button></Link></li>
          <li className='px-2 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'><Link to={'/signup'}><button>Signup</button></Link></li>
        </ul>
        <ul className='flex sm:hidden'>
          <li><button><FiMenu /></button></li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar