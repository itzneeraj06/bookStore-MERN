import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Loader from '../components/Loader'
const Profile = () => {
  const [Profile, setProfile] = useState()
  const isLoggedIn = useSelector((state) => (state.auth.isLoggedIn));
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`
  }
  // console.log(headers);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/getuserinfo`, { headers })
      setProfile(response.data);
      // console.log(response.data);
    }
    fetch()
  }, [])

  return (
    <div className='bg-zinc-900 px-2 py-2 flex flex-col  gap-4 text-white '>
      {!Profile &&
        <div className='w-full h-screen flex items-center justify-center'><Loader /></div>
      }
      {Profile &&
        <div className='flex flex-col sm:flex-row'>
          <div className='w-fulls sm:w-2/6 lg:w-1/6 sm:h-screen'>
            <Sidebar data={Profile} />
          </div>
          <div className='w-full sm:w-4/6 lg:w-5/6 '>
            <Outlet />
          </div>
        </div>}

    </div>
  )
}

export default Profile