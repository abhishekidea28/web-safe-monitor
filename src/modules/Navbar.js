import BellIcon from '@/assets/icons/BellIcon'
import UserIcon from '@/assets/icons/UserIcon'
import React from 'react'

const NavBar = ({ title }) => {
    return (
        <header className="bg-white py-3 w-full flex items-center justify-between px-5 pr-8">
            <h1 className=" font-bold text-xl capitalize">{title}</h1>
            <span className='flex gap-4 items-center'>
                <BellIcon />
                <div className='flex items-center gap-2 text-black'>
                    <UserIcon/>
                    Admin
                </div>
            </span>
        </header>
    )
}

export default NavBar