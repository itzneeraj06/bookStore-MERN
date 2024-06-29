import React, { useEffect,useState } from 'react'
import Loader from './Loader'
import axios from 'axios'
const OrderHistory = () => {
  const [orderhistory, setorderhistory] = useState()
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:4000/api/v1/orderhistory", { headers });
      setorderhistory(response.data.data);
      console.log(response.data.data);

    };
    fetch();


  },[]);
  return (
    <div className=''>

    </div>
  )
}

export default OrderHistory
