import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]


    return (
        <header className='h-16 flex items-center shadow-white bg-white fixed w-full z-50'>
            <Container>
                <nav className='flex items-center justify-center mx-3'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo classes='text-2xl font-semibold text-[#14213D]' />

                        </Link>
                    </div>
                    <ul className='flex ml-auto '>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name} className='flex items-center'>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className='text-[#14213D] inline-block px-2 mx-4 text-base duration-200 rounded-full hover:text-[#999999]'
                                    >{item.name}</button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header