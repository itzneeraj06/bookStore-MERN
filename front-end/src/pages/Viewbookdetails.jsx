import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../components/Loader.jsx';
import { GrLanguage } from "react-icons/gr";
import { useNavigate, useParams } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { cartCount } from '../store/cart';
import { useDispatch } from 'react-redux';

const Viewbookdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const role = useSelector((state) => state.auth.role);
  const dispatch = useDispatch();

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: id,
  }

  const fetch = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/getbook/${id}`)
    // console.log(response);
    setData(response.data.data);
  }

  useEffect(() => {
    fetch();
  }, [])
  // console.log(data);

  const handleFav = async () => {
    const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/addfav`, {}, { headers });
    alert(response.data.message);
  }

  const handleCart = async () => {
    const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/addtocart`, {}, { headers });
    const cartValue = await axios.get(`${process.env.REACT_APP_BASE_URL}/getuserinfo`, { headers });
    // console.log(cartValue.data.cart.length);
    dispatch(cartCount(cartValue.data.cart.length));
    alert(response.data.message);
  }

  const deletebook = async () => {

    let confirm = prompt("write confirm");
    if (confirm === "confirm") {
      const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/deletebook`, { headers });
      alert(response.data.message);
      navigate("/allbooks");
    }
    else {
      return (alert("failed "))

    }
  }
  const updatebook = () => {
    navigate(`/updatebook/${id}`);
  }

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
            <div className='bg-zinc-800 rounded p-4 w-full sm:w-3/6 flex justify-center flex-col sm:flex-row items-center sm:items-start'>
              <img src={data.url} alt="" className='h-[30vh] sm:h-[70vh]' />
              {isLoggedIn && role === "user" &&
                <div className='flex flex-row sm:flex-col   p-2'>
                  <button className='bg-white text-red-500 rounded-full text-xl p-2 w-auto mx-2 sm:mx-0 ' onClick={handleFav}><FaHeart /></button>
                  <button className='bg-white text-blue-300 rounded-full text-xl p-2 mt-0 sm:mt-2 w-auto' onClick={handleCart}><FaCartShopping /></button>
                </div>
              }
              {isLoggedIn && role === "admin" &&
                <div className='flex flex-row sm:flex-col   p-2'>
                  <button className='bg-white text-zinc-800 rounded-full text-xl p-2 w-auto mx-2 sm:mx-0' onClick={deletebook}><MdDelete /></button>
                  <button className='bg-white text-zinc-800 rounded-full text-xl p-2 mt-0 sm:mt-2 w-auto' onClick={updatebook}><FaEdit /></button>
                </div>
              }
            </div>
            <div className='p-4 w-full sm:w-3/6'>
              <h1 className='text-4xl text-zinc-300 font-semibold'>{data.title}</h1>
              <p className='text-zinc-400 mt-1'>by {data.author}</p>
              <p className='flex mt-1 items-center justify-start text-zinc-400'><GrLanguage className='me-2' /> {data.language}</p>
              <p className='mt-4 text-zinc-100 text-3xl font-semibold'>Price : ₹ {data.price} {" "}</p>
              <p className='mt-6 text-zinc-400 text-xl font-semibold'>Description</p>
              <p className='text-zinc-100 mt-1 text-xs  sm:text-sm'>{data.desc}</p>

            </div>

          </div>

        )
      }
    </>

  )
}

export default Viewbookdetails