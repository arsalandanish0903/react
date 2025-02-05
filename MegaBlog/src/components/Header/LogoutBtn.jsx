import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth.js'
import {logout} from '../../store/authSlice.js'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
      authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button onClick={logoutHandler}
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-md'
    >Logout</button>
  )
}

export default LogoutBtn