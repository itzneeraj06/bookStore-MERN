import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard.jsx';
import axios from 'axios'
import Loader from '../components/Loader.jsx';
const Allbooks = () => {

  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:4000/api/v1/getallbooks")
      setData(response.data.data);
    }
    fetch();

  }, [])

  return (
    <div className='bg-zinc-900 h-auto px-12 py-8'>
      <h4 className='text-3xl text-yellow-100'>All Books</h4>
      {!data &&
        <div className='flex item-center justify-center'>
          <Loader />
        </div>
      }
      <div className='my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8'>

        {
          data && data.map((item, index) =>
            <div key={index}>
              <BookCard data={item} />
            </div>)
        }

      </div>
    </div>

  )
}

export default Allbooks;