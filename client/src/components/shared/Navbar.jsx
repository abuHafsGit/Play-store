import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { assets } from "../../assets/assets"
const Navbar = () => {
    const [open, setOpen] = useState()
    const navigate = useNavigate()
    return (
        <div className='max-w-400 mx-auto bg-white sticky top-0'>
            <div className=' max-w-7xl bg-white mx-auto flex  justify-between items-center py-4 px-4 lg:px-0'>
                <img className='w-8 h-8 cursor-pointer' onClick={() => { navigate("/"); scrollTo(0, 0) }} src={assets.logo} alt="" />
                <nav className='hidden md:flex' >
                    <ul className='flex items-center justify-between gap-8'>
                        <li onClick={(() => { navigate('/'); scrollTo(0, 0) })} className=' hover:text-[#632EE3] hover:underline cursor-pointer active:underline underline-offset-8 '>Home</li>
                        <li onClick={(() => { navigate('/apps'); scrollTo(0, 0) })} className=' hover:text-[#632EE3] hover:underline cursor-pointer active:underline underline-offset-8 '>App</li>
                        <li onClick={(() => { navigate('/installapp'); scrollTo(0, 0) })} className=' hover:text-[#632EE3] hover:underline cursor-pointer active:underline underline-offset-8 '>Installation</li>
                        <li onClick={(() => { navigate('/dashboard'); scrollTo(0, 0) })} className=' hover:text-[#632EE3] hover:underline cursor-pointer active:underline underline-offset-8 '>Dashboard</li>
                    </ul>
                </nav>
                <button onClick={(() => navigate('/about'))} className='hidden md:flex bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-3 px-4 text-white font-bold text-base items-center justify-center gap-2.5 rounded-sm cursor-pointer '><img className='w-5 h-5' src={assets.git} alt="" /> Contribute</button>

                <img onClick={() => setOpen(!open)} className='flex md:hidden' src={open ? assets.close_icon : assets.menu_icon} alt="" />
                {/* mobile and nav bar */}
                <ul className={`flex flex-col fixed top-16  items-center w-1/2 h-screen ${open ? "right-0" : '-right-164'}  bg-linear-to-r from-[#632EE3] to-[#9F62F2] gap-4 py-4 md:hidden transition-all duration-300 text-white`}>
                    <li to={'/'}><li onClick={() => { setOpen(!open); navigate('/'); scrollTo(0, 0) }} className='cursor-pointer'>Home</li></li>
                    <li onClick={() => { setOpen(!open); navigate('/apps'); scrollTo(0, 0) }} className='cursor-pointer'>App</li>
                    <li onClick={() => { setOpen(!open); navigate('/installapp'); scrollTo(0, 0) }} className='cursor-pointer'>Installation</li>
                    <li onClick={() => { setOpen(!open); navigate('/dashboard'); scrollTo(0, 0) }} className='cursor-pointer'>Dashboard</li>
                </ul>
            </div>
            <hr className='bg-gray-500 h-0.5  border-none' />
        </div>
    )
};

export default Navbar;