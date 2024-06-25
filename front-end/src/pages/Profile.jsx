import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Loader from '../components/Loader'
const Profile = () => {
  const [Profile, setProfile] = useState()
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => (state.auth.isLoggedIn));
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`
  }
  // console.log(headers);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:4000/api/v1/getuserinfo", { headers })
      setProfile(response.data);
      console.log(response.data);
    }
    fetch()
  }, [])

  return (
    <div className='bg-zinc-900 px-2 py-2 flex flex-col h-screen gap-4 text-white '>
      {!Profile &&
        <div className='w-full h-full flex items-center justify-center'><Loader /></div>
      }
      {Profile &&
        <div className='flex flex-row'>
          <div className='w-1/6'>
            <Sidebar data={Profile} />
          </div>
          <div className='w-5/6'>
            <Outlet />
          </div>
        </div>}

    </div>
  )
}

export default Profile