import React from 'react'
import img1 from '../asset/img2.png'

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row w-full  sm:w-5/6 mx-aut0 '>
            <div className='hidden sm:flex border-box w-full flex-col justify-center px-3  mt-4 sm:mx-4 sm:w-3/6 sm:mt-0 '>
                <h1 className='text-4xl lg:text-6xl font-semibold text-yellow-100 text-left lg:text'>Discover Our Next Great Read</h1>
                <p className='mt-4 text-md sm:text-xl text-zinc-300 py-0 sm:py-4 border-box'>Embark on a literary adventure with [Bookstore Name]! We curate a diverse collection of stories waiting to ignite your imagination.</p>
                <button className='text-yellow-100 text-lg sm:text-2xl font-semibold border border-yellow-100 sm:px-10 py-2 hover:bg-zinc-800 rounded-full inline w-3/6 my-2'>Discover Books</button>
            </div>
            <div className='w-full flex sm:w-3/6 '>
                <img src={img1} alt="" className=' flex h-full' />
            </div>
            <div className='flex sm:hidden border-box w-full  flex-col justify-center px-3 items-center mt-4 sm:mx-4 sm:w-3/6 sm:mt-0 '>
                <h1 className='text-4xl lg:text-6xl font-semibold text-yellow-100 text-left lg:text'>Discover Our Next Great Read</h1>
                <p className='mt-4 text-sm sm:text-xl text-zinc-300 py-2 border-box '>Embark on a literary adventure with [Bookstore Name]! We curate a diverse collection of stories waiting to ignite your imagination.</p>
                <button className='text-yellow-100 text-lg sm:text-2xl font-semibold border border-yellow-100 sm:px-10 py-2 hover:bg-zinc-800 rounded-full inline w-3/6 my-2 '>Discover Books</button>
            </div>
        </div>
    )
}


export default Hero