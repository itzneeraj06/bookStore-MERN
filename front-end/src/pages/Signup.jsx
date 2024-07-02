import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {
  const [Values, setValue] = useState({
    username: "",
    email: "",
    password: "",
    address: ""
  });
  const navigate = useNavigate();

  //input par onchange use kiya h or onchange par change function call kiya h 
  const change = (e) => {
    const { name, value } = e.target;//take values from input
    setValue({ ...Values, [name]: value })//pass values to the useState (Values)
  }
  //onsubmit par call kiya h 
  const submit = async () => {
    try {
      if (Values.username === "" || Values.email === "" || Values.password === "" || Values.address === "") {
        alert("all fiels are required");

      }
      else {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/signup`, Values);
        console.log(response.data);
        alert("Signup Successfull Please Login!!!")
        navigate('/login');

      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);

    }
  }
  return (
    <div className='h-[85vh] sm:h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center'>
      <div className='bg-zinc-800 rounded-lg px-8 py-5 w-full sm:w-4/6  md:w-3/6 lg:w-2/6'>
        <p className='text-zinc-200 text-xl'>Sign Up</p>
        <div className='mt-4'>
          <div className='mt-4'>
            <label htmlFor="" className='text-zinc-400'>Username</label>
            <input type="text" id='username' placeholder='username' name='username' className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' required value={Values.username} onChange={change} />
          </div>
          <div className='mt-4'>
            <label htmlFor="email" className='text-zinc-400'>Email</label>
            <input type="text" name='email' placeholder='name@example.com' className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' required value={Values.email} onChange={change} />
          </div>
          <div className='mt-4'>
            <label htmlFor="password" className='text-zinc-400'>Password</label>
            <input type="text" name='password' placeholder='enter passsword' className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' required value={Values.password} onChange={change} />
          </div>
          <div className='mt-4'>
            <label htmlFor="adddress" className='text-zinc-400'>Address</label>
            <textarea id="address" name='address' placeholder='address' className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' required value={Values.address} onChange={change}></textarea>
          </div>
          <div className='mt-4'>
            <button className='w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600' onClick={submit}>
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