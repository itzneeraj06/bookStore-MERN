import React from 'react'
import { FaArrowRightFromBracket } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const Sidebar = (props) => {
  return (
    <div className='bg-zinc-800 py-4 px-4 rounded flex flex-col items-center justify-around h-[95vh] '>
      <div className='flex flex-col items-center'>
        <img src={props.data.avatar} alt="" className='h-12' />
        <p className='mt-3 text:xl sm:text-3xl text-zinc-100 font-semibold'>{props.data.username}</p>
        <p className='mt-1 text-sm sm:text-normals text-zinc-300'>{props.data.email}</p>
        <hr className='mt-2 h-[0.01vh] border-none w-full bg-zinc-600' />
      </div>
      <div className='flex flex-col items-center'>
        <Link index to="/profile" className='text-zinc-100 hover:font-semibold w-full py-2   text-center transition-all p-1 hover:tracking-wider'>Favourites</Link>
        <Link to="/profile/orderhistory" className='text-zinc-100 hover:font-semibold w-full py-2   text-center transition-all p-1 hover:tracking-wider'>Order History</Link>
        <Link to="/profile/setting" className='text-zinc-100 hover:font-semibold w-full py-2   text-center transition-all p-1 hover:tracking-wider' >Setting</Link>
      </div>
      <button className='bg-zinc-800 text-white font-semibold flex items-center justify-center w-full py-2  rounded hover:bg-zinc-900 transition-all duration-500 mx-4 hover:tracking-wider'>Logout <FaArrowRightFromBracket className='ms-4' /></button>

    </div>
  )
}

export default Sidebar