import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-[85vh]  bg-zinc-900 px-12 py-8 flex items-center justify-center'>
      <div className='bg-zinc-800 rounded-lg px-8 py-5 w-full sm:w-4/6  md:w-3/6 lg:w-2/6'>
        <p className='text-zinc-200 text-xl'>Login </p>
        <div className='mt-4'>
          <div className='mt-4'>
            <label htmlFor="username" className='text-zinc-400'>Username</label>
            <input type="text" id='username' placeholder='username' name='username' className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' required/>
          </div>
          <div className='mt-4'>
            <label htmlFor="password" className='text-zinc-400'>Password</label>
            <input type="text" name='password' placeholder='*********' className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' required/>
          </div>
          <div className='mt-4'>
            <button className='w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 '>
              Login
            </button>
          </div>
          <p className='flex mt-4 items-center justify-center text-zinc-200 font-semibold'>or</p>
          <p className='flex mt-4 items-center justify-center text-zinc-500 font-semibold  text-sm'>Don't  have an account ? &nbsp;<Link to='/signup' className='hover:text-blue-500 underline'>Signup</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login