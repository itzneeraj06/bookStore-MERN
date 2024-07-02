import React from 'react'
import { FaArrowRightFromBracket } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { changeRole, logout } from '../store/auth'
const Sidebar = (props) => {
  const role = useSelector((state) => (state.auth.role));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutbtn = () => {
    dispatch(logout());
    dispatch(changeRole());
    localStorage.clear("id")
    localStorage.clear("token")
    localStorage.clear("role")
    navigate("/")
  }
  return (
    <>
      <div className='bg-zinc-800 py-4 px-4 rounded flex flex-col items-center justify-around h-auto sm:h-[95vh] '>
        <div className='flex flex-col items-center'>
          <img src={props.data.avatar} alt="" className='h-12' />
          <p className='mt-3 text:xl sm:text-3xl text-zinc-100 font-semibold'>{props.data.username}</p>
          <p className='mt-1 text-sm sm:text-normals text-zinc-300'>{props.data.email}</p>
          <hr className='mt-2 h-[0.01vh] border-none w-full bg-zinc-600' />
        </div>
        <div className='hidden sm:flex flex-row sm:flex-col items-center w-full'>
          {role === "user" &&
            (<Link index to="/profile" className='text-zinc-100 hover:font-semibold w-full py-2   text-center transition-all p-1 hover:tracking-wider'>Favourites</Link>)}
          {role === "user" &&
            (<Link to="/profile/orderhistory" className='text-zinc-100 hover:font-semibold w-full py-2   text-center transition-all p-1 hover:tracking-wider'>Order History</Link>)}
          {role === "admin" &&
            (<Link index to="/profile" className='text-zinc-100 hover:font-semibold w-full py-2   text-center transition-all p-1 hover:tracking-wider'>All Orders</Link>)}
          {role === "admin" &&
            (<Link to="/profile/addbooks" className='text-zinc-100 hover:font-semibold w-full py-2   text-center transition-all p-1 hover:tracking-wider'>Add Book</Link>)}
          <Link to="/profile/setting" className='text-zinc-100 hover:font-semibold w-full py-2   text-center transition-all p-1 hover:tracking-wider' >Setting</Link>
        </div>
        <button className='bg-zinc-800 text-white font-semibold flex items-center justify-center w-auto sm:w-full  rounded hover:bg-zinc-900 transition-all duration-500 my-6 p-2 hover:tracking-wider' onClick={logoutbtn}>Logout <FaArrowRightFromBracket className='ms-4' /></button>
      </div>
      {/* responsive sidebar */}
      <div className='flex sm:hidden  flex-row sm:flex-col items-center w-full'>
        {role === "user" &&
          (<Link index to="/profile" className='text-zinc-100 hover:font-semibold w-full py-2   text-center transition-all p-1 hover:tracking-wider'>Favourites</Link>)}
        {role === "user" &&
          (<Link to="/profile/orderhistory" className='text-zinc-100 hover:font-semibold w-full py-2   text-center transition-all p-1 hover:tracking-wider'>Order History</Link>)}
        {role === "admin" &&
          (<Link index to="/profile" className='text-zinc-100 hover:font-semibold w-full py-2   text-center transition-all p-1 hover:tracking-wider'>All Orders</Link>)}
        {role === "admin" &&
          (<Link to="/profile/addbooks" className='text-zinc-100 hover:font-semibold w-full py-2   text-center transition-all p-1 hover:tracking-wider'>Add Book</Link>)}
        <Link to="/profile/setting" className='text-zinc-100 hover:font-semibold w-full py-2   text-center transition-all p-1 hover:tracking-wider' >Setting</Link>

      </div>
      <hr className='sm:hidden w-[50%] flex mx-auto mt-6 ' />
    </>
  )
}

export default Sidebar