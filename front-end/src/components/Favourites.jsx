import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookCard from './BookCard'
import Loader from './Loader'

const Favourites = () => {

  const [Fav, setFav] = useState()

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  }

  const fetch = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/getfavbooks`, { headers });
    setFav(response.data.data);
    // console.log(response.data.data);
  };

  useEffect(() => {
    fetch();
  }, [])

  return (
    <div className=''>
      <p className='text-2xl font-semibold mx-2 my-4 '>My Favourites</p>
      {!Fav &&
        <div className='w-full h-screen flex items-center justify-center'><Loader /></div>
      }
      {Fav && Fav.length === 0 &&
        <div className='w-full mt-16 text-zinc-700 flex items-center justify-center'>
          <p >No Favourite Books</p>
        </div>
      }
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 m-2'>
        {Fav && Fav.map((item, index) =>
          <div key={index}><BookCard data={item} fav={true} update={fetch} /></div>)
        }
      </div>
    </div>)
}

export default Favourites