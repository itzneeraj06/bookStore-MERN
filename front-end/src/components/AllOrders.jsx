import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'
import { FaCheck } from "react-icons/fa";

const AllOrders = () => {
    const [values, setValues] = useState();
    const [allorder, setallorder] = useState();
    const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`,
    }
    // select values changes stores
    const change = (e) => {
        const { value } = e.target;
        setValues({ status: value });
        // console.log(value);
    }

    const fetch = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/allorders`, { headers });
        // console.log(response.data.data);
        setallorder(response.data.data);
    };

    useEffect(() => {
        fetch();
    }, [])
    return (
        <div className=''>

            <p className='text-2xl font-semibold mx-2 my-4 '>All Orders</p>
            <div className='overflow-scroll sm:overflow-hidden'>
                <div className='grid grid-cols-9 font-semibold bg-zinc-800 py-4 px-2 m-2  text-zinc-500 text-xs sm:text-sm w-[150%] sm:w-auto' >
                    <p >Sr.</p>
                    <p className="col-start-2 col-span-2 ">Username</p>
                    <p className="col-start-4 col-span-2 ">Bookname</p>
                    <p>Price</p>
                    <p>Status</p>
                    <p className='col-start-8 col-span-2 '>Update Status</p>
                </div>
                {!allorder &&
                    <div className='w-full h-screen flex items-center justify-center'><Loader /></div>
                }
                {
                    allorder && allorder.length === 0 &&
                    <div className='w-full mt-16 text-zinc-700 flex items-center justify-center'>
                        <p >No Orders</p>
                    </div>
                }
                {
                    allorder &&
                    allorder.map((item, index) =>
                        <div key={index} className='grid grid-cols-9 font-semibold bg-zinc-800  mx-2 my-[1px] py-4 px-2 text-zinc-300 text-xs sm:text-sm w-[150%] sm:w-auto'>
                            <p>{index + 1}.</p>
                            <p className="col-start-2 col-span-2 ">{item.user.username}</p>
                            {(item.book) ? (
                                <>
                                    <p className="col-start-4 col-span-2 ">{item.book.title}</p>
                                    <p>₹ {item.book.price}</p>
                                    {
                                        item.status === "placed ?" ? (<p className='text-yellow-700'>{item.status}</p>) : item.status === "cancelled" ? (<p className='text-red-700'>{item.status}</p>) : (<p className='text-green-700'>{item.status}</p>)
                                    }
                                    <p className="col-start-8 col-span-2">
                                        <select className='text-zinc-900 font-normal rounded p-1 bg-zinc-300' onChange={change}>
                                            <option value={item.status}>{item.status}</option>
                                            <option value="placed ?">placed</option>
                                            <option value="out for delivery">out for delivery</option>
                                            <option value="delivered">delievered</option>
                                            <option value="cancelled">cancelled</option>
                                        </select>
                                        <button className='ms-4' onClick={async () => {
                                            const bookid = allorder[index]._id;
                                            console.log(bookid);
                                            await axios.put(`${process.env.REACT_APP_BASE_URL}/updatestatus/${bookid}`, values, { headers });
                                            alert("status updated");
                                            fetch();
                                        }}><FaCheck /></button>
                                    </p>
                                </>) : (<p className='col-start-4 col-span-4  flex justify-center text-zinc-700'>Book Deleted - Data Not Found</p>)
                            }
                        </div>)
                }

            </div>
        </div >)
}


export default AllOrders