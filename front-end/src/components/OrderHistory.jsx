import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import axios from 'axios'
const OrderHistory = () => {

  const [orderhistory, setorderhistory] = useState()

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  }

  const fetch = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/orderhistory`, { headers });
    setorderhistory(response.data.data);
    // console.log(response.data.data);
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div >

      {!orderhistory &&
        <div className='w-full h-screen flex items-center justify-center'><Loader /></div>
      }
      <p className='text-2xl font-semibold mx-2 my-4 '>My Orders</p>
      <div className='overflow-scroll sm:overflow-hidden'>
        <div className='grid grid-cols-9 font-semibold bg-zinc-800 py-1 px-2 m-2  text-zinc-500 text-xs sm:text-sm w-[150%] sm:w-auto' >
          <p >Sr.</p>
          <p className="col-start-2 col-span-2 ...">Books</p>
          <p className="col-start-4 col-span-3 ...">Desription</p>
          <p>Price</p>
          <p>Status</p>
          <p>Mode</p>
        </div>
        {
          orderhistory && orderhistory.length === 0 &&
          <div className='w-full mt-16 text-zinc-700 flex items-center justify-center'>
            <p >No Order History</p>
          </div>
        }
        {
          orderhistory && orderhistory.length > 0 &&
          orderhistory.map((item, index) => (
            <>
              <div className='grid grid-cols-9 px-2 mx-2 py-1 bg-zinc-800 text-xs sm:text-sm w-[150%] sm:w-auto '>

                {(item.book) ? (<>
                  <p >{index + 1}.</p>
                  <p className="col-start-2 col-span-2 ">{item.book.title}</p>
                  <p className="col-start-4 col-span-3">{item.book.desc.slice(0, 50)}...</p>
                  <p>₹ {item.book.price}</p>
                  {(item.status === "delivered") ? (<p className='text-green-500'>{item.status}</p>) : (<p className='text-red-500'>{item.status}</p>)}
                  <p>COD</p>
                </>) : (<p className='col-start-1 col-span-9  flex justify-center text-zinc-700 py-1'>Book Deleted - Data Not Found</p>)}

              </div>
            </>
          ))}
      </div>
    </div>
  )
}

export default OrderHistory