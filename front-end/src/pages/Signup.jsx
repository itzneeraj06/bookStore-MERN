import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='h-[85vh] sm:h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center'>
      <div className='bg-zinc-800 rounded-lg px-8 py-5 w-full sm:w-4/6  md:w-3/6 lg:w-2/6'>
        <p className='text-zinc-200 text-xl'>Sign Up</p>
        <div className='mt-4'>
          <div className='mt-4'>
            <label htmlFor="username" className='text-zinc-400'>Username</label>
            <input type="text" id='username' placeholder='username' name='username' className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' required/>
          </div>
          <div className='mt-4'>
            <label htmlFor="email" className='text-zinc-400'>Email</label>
            <input type="text" name='email' placeholder='name@example.com' className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' required/>
          </div>
          <div className='mt-4'>
            <label htmlFor="password" className='text-zinc-400'>Password</label>
            <input type="text" name='password' placeholder='enter passsword' className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' required/>
          </div>
          <div className='mt-4'>
            <label htmlFor="adddress" className='text-zinc-400'>Address</label>
            <textarea  id="address" name='address' placeholder='address' className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' required></textarea>
          </div>
          <div className='mt-4'>
            <button className='w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-white hover:text-blue-500'>
              Signup
            </button>
          </div>
          <p className='flex mt-4 items-center justify-center text-zinc-200 font-semibold'>or</p>
          <p className='flex mt-4 items-center justify-center text-zinc-500 font-semibold text-sm'>Already have an account ? &nbsp;<Link to='/login' className='hover:text-blue-500 underline'>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signup