import React from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const Not_Found = () => {
    const navigate = useNavigate()
    return (
        <div className='max-w-400 mx-auto '>
            <Navbar />
            <div className=' max-w-7xl mx-auto flex flex-col justify-center items-center py-10 gap-3 px-4 sm:px-0'>
                <img src={assets.error_404} alt="" />
                <h1 className='font-semibold text-[48px] text-[#001931] text-center'>Oops, page not found!</h1>
                <p className=' text-base text-[#627382] text-[20px] text-center'>The page you are looking for is not available.</p>
                <button onClick={() => navigate('/')} className=' text-white font-bold text-base rounded-sm  bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-4 py-3 cursor-pointer'>Go Back!</button>
            </div>
            <Footer />
        </div>
    )

};

export default Not_Found;