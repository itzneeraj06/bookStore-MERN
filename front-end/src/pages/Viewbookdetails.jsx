import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../components/Loader.jsx';
import { GrLanguage } from "react-icons/gr";
import { useParams } from 'react-router-dom'

const Viewbookdetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`http://localhost:4000/api/v1/getbook/${id}`)
      // console.log(response);
      setData(response.data.data);

    }
    fetch();


  })
  // console.log(data);
  return (
    <>
      {
        !data && (
          <div className='h-screen bg-zinc-900 flex items-center justify-center'><Loader /></div>

        )
      }
      {
        data && (
          <div className='px-4 sm:px-12 py-8 bg-zinc-900 flex flex-col sm:flex-row'>
            <div className='bg-zinc-800 rounded p-4  w-full sm:w-3/6 flex items-center justify-center'><img src={data.url} alt="" className='h-[70vh]' /></div>
            <div className='p-4 w-full sm:w-3/6'>
              <h1 className='text-4xl text-zinc-300 font-semibold'>{data.title}</h1>
              <p className='text-zinc-400 mt-1'>by {data.author}</p>
              <p className='flex mt-1 items-center justify-start text-zinc-400'><GrLanguage className='me-2' /> {data.language}</p>
              <p className='mt-4 text-zinc-100 text-3xl font-semibold'>Price : ₹ {data.price} {" "}</p>
              <p className='text-zinc-500 mt-4 text-xl'>{data.desc}</p>

            </div>

          </div>

        )
      }
    </>

  )
}

export default Viewbookdetails