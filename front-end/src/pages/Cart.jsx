import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const [cart, setCart] = useState();
  const [total, settotal] = useState(0);
  const navigate = useNavigate();
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
  useEffect(() => {
    if (cart && cart.length > 0) {
      let Total = 0;
      cart.map((item) => {
        return Total += item.price;
      });
      settotal(Total);
      Total = 0;
    }
  }, [cart])

  const placeorder = async () => {
    const fetch = await axios.post("http://localhost:4000/api/v1/placeorder", { order: cart }, { headers });
    alert(fetch.data.message)
    navigate('/profile/orderhistory')


  }


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
          {
            cart && cart.length > 0 &&
            (
              <div className='flex  justify-end px-12'>
                <div className='bg-zinc-800 text-white px-8 py-4 mx-12 rounded-2xl'>
                  <p className='font-semibold text-2xl'>Total Amount</p>
                  <div className='flex justify-around my-4'>
                    <p>{cart.length} books </p>
                    <p>₹ {total}</p>
                  </div>
                  <div className='flex justify-center'>
                    <button className='bg-white text-zinc-900 px-8 py-2 rounded font-semibold' onClick={placeorder}> Place order</button>
                  </div>
                </div>
              </div>
            )
          }
        </>
      }


    </div>
  )
}

export default Cart