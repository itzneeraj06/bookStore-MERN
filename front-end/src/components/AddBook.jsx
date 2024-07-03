import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loader from './Loader'

const AddBook = () => {

    const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`,
    }
    const navigate = useNavigate();
    const [Values, setValues] = useState({
        url: "",
        price: "",
        desc: "",
        title: "",
        author: "",
        language: ""
    });
    const change = (e) => {
        const { name, value } = e.target;//take values from input
        setValues({ ...Values, [name]: value })//pass values to the useState (Values)
    }
    const submit = async () => {
        try {
            if (Values.url === "" || Values.price === "" || Values.desc === "" || Values.title === "" || Values.author === "" || Values.language === "") {
                alert("all fiels are required");
            }
            else {
                const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/addbook`, Values, { headers });
                console.log(response.data);
                alert("book added !!!")
                navigate('/allbooks');
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);

        }
    }
    return (
        <div className='grid gap-4'>
            <p className='text-2xl font-semibold mx-2 my-4 '>Add Book</p>
            <form action="" onSubmit={submit} className='flex flex-col bg-zinc-800 mx-4 p-6 rounded'>

                <label htmlFor="url" className='text-zinc-400 font-semibold'>Url :</label>
                <input type="text" id='url' name='url' onChange={change} className='bg-zinc-900 rounded mb-2 ms-1 mt-1' />
                <label htmlFor="title" className='text-zinc-400 font-semibold'>Title :</label>
                <input type="text" id='title' name='title' onChange={change} className='bg-zinc-900 rounded mb-2 ms-1 mt-1' />
                <label htmlFor="author" className='text-zinc-400 font-semibold'>Author :</label>
                <input type="text" id='author' name='author' onChange={change} className='bg-zinc-900 rounded mb-2 ms-1 mt-1' />
                <label htmlFor="price" className='text-zinc-400 font-semibold'>Price :</label>
                <input type="text" id='price' name='price' onChange={change} className='bg-zinc-900 rounded mb-2 ms-1 mt-1' />
                <label htmlFor="desc" className='text-zinc-400 font-semibold'>Description :</label>
                <input type="text" id='desc' name='desc' onChange={change} className='bg-zinc-900 rounded mb-2 ms-1 mt-1' />
                <label htmlFor="language" className='text-zinc-400 font-semibold'>Language :</label>
                <input type="text" id='language' name='language' onChange={change} className='bg-zinc-900 rounded mb-2 ms-1 mt-1' />

                <button type='submit' className='mt-4 py-2  bg-blue-700 hover:bg-blue-800 w-[12%] mx-auto'>Add Book</button>

            </form>
        </div>
    )
}

export default AddBook