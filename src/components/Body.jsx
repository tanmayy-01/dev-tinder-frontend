import { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userData = useSelector((store) => store.user);
  const fetchUserProfile = async () => {
    try {
      const res = await axios.get(BASE_URL +  'profile/view',{
        withCredentials: true
      });
      const {status,data} = res.data
      if(status) {
        dispatch(addUser(data));
      }
    } catch (error) {
      if(error.status == 401) {
        return navigate('/login')
      }
      console.error(error)
    }
  }

  useEffect(() => {
    if(!userData) fetchUserProfile();
  },[])

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body
