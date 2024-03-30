import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            window.location.reload()
        })
    }
    return (
        <button
            className='px-6 py-2 duration-200 bg-[#14213D] text-white rounded-full border-2 border-[#14213D] hover:bg-transparent hover:text-black font-normal ml-1'
            onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn