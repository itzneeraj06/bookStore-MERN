import React from 'react'
import { Link } from 'react-router-dom';

const BookCard = (props) => {
  return (
    <>
      <Link to={`/getdetails/${props.data._id}`}>
        <div className='bg-zinc-800 rounded p-1 flex flex-col'>
          <div className='bg-zinc-900 rounded flex items-center justify-center'>
            <img src={props.data.url} alt="" className='h-[25vh] rounded' />
          </div>
          <h2 className='mt-4 text-xl  text-zinc-200 font-semibold'>{props.data.title}</h2>
          <p className='text-zinc-400 font-semibold'>{props.data.author}</p>

          <p className='text-zinc-200 font-semibold'>Rs. {props.data.price}</p>
        </div>
      </Link>
    </>
  )
}

export default BookCard