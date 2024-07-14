import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Trending() {
    const [data, setData] = useState();
    let trending;
    if (data) {
        trending = data[Math.floor(Math.random() * data.length)];
    }
    const fetch = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/getallbooks`)
        setData(response.data.data);
    }
    useEffect(() => {
        fetch();
    }, [])

    return (
        <div className=' bg-zinc-800 p-5 my-5 mx-auto sm:w-[50%] rounded'>



            {
                data &&
                <div>
                    <p className='text-4xl lg:text-6xl font-semibold text-yellow-100 text-left lg:text tracking-widest flex items-center mb-8' >Trending Book</p>
                    <Link to={`/getdetails/${trending._id}`}>
                        <div>
                            <div>
                                <img src={trending.url} alt="" className='h-[45vh] rounded m-auto ' />
                            </div>
                            <div>
                                <p className='text-zinc-400 text-center'>( {trending.title} )</p>
                            </div>
                        </div>
                    </Link>
                </div>
            }

        </div>
    );
}

export default Trending;
