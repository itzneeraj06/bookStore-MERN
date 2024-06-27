import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import { MdDelete } from "react-icons/md";
import axios from 'axios';
const Cart = () => {
  const [cart, setCart] = useState();
  const [total, settotal] = useState(0);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  const removeCart = async (book) => {
    const response = await axios.put(`http://localhost:4000/api/v1/removetocart/${book}`, {}, { headers });
    alert(response.data.message);

  }
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:4000/api/v1/getusercart", { headers });
      setCart(response.data.data);
      // console.log(response.data.data);

    }
    fetch()

  }, [])

  return (
    <div className='bg-zinc-900 py-4'>
      <p className='mx-4 text-3xl font-semibold text-zinc-200 p-2'>Your Cart</p>
      {!cart &&
        <div className='h-screen flex items-center justify-center'>
          <Loader />
        </div>}
      {cart && cart.length === 0 &&
        (

          <div className='h-screen flex items-center justify-center'>
            <h1 className='text-2xl text-zinc-700 font-semibold'>Empty Cart </h1>
          </div>

        )
      }
      {cart && cart.length > 0 &&
        <>

          {
            cart && cart.map((item, index) => (
              <div key={index} className='flex  items-center justify-between bg-zinc-800 text-white m-2 rounded-3xl px-12 mx-12 '>
                <div className='w-1/6'>
                <img src={item.url} alt="" className='h-[20vh] rounded p-2 object-cover' />
                
                </div>
                <div className='flex flex-col items-start w-4/6'>
                  <p className='font-semibold text-xl'>{item.title}</p>
                  <p className='text-zinc-500'>{item.desc.slice(0, 100)}</p>
                </div>
                <div className='flex w-1/6 justify-around'>
                  <p>₹ {item.price}</p>
                  <button onClick={() => removeCart(item._id)} className='text-2xl'><MdDelete /></button>
                </div>
              </div>
            ))
          }
        </>
      }


    </div>
  )
}

export default Cart