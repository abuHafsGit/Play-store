import React from 'react';
import { assets } from '../../assets/assets';

const Hero = () => {
    return (
        <div className='max-w-400 mx-auto'>
            <div className='min-h-screen'>
                <div className='max-w-7xl mx-auto flex flex-col justify-center items-center pt-20 px-4'>
                    <div className='w-auto text-center flex flex-col justify-center items-center px-4 gap-4'>
                        <h1 className='md:w-2/4 font-black text-[#001931] text-[40px] md:text-[72px] leading-15 md:leading-21'>We Build <span className='text-[#632EE3] '>Productive</span> Apps</h1>
                        <p className=' md:w-3/4 text-[20px] text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                        <div className=' flex flex-col sm:flex-row gap-4 pb-10'>
                            <button className='font-semibold text-[20px] px-6 py-4 border border-gray-500 rounded-sm flex gap-2 cursor-pointer'><img src={assets.play} alt="" />Google Play</button>
                            <button className='font-semibold text-[20px] px-6 py-4 border border-gray-500 rounded-sm flex gap-2 cursor-pointer'> <img src={assets.app} alt="" />App Store</button>
                        </div>
                    </div>
                    <div className='top-0'><img src={assets.hero} alt="" /></div>
                </div>
                <div className=' bg-linear-to-r from-[#632EE3] to-[#9F62F2] gap-10 py-20 px-4'>
                    <h2 className=' text-[32px] text-center text-white font-bold md:text-[48px] '>Trusted by Millions, Built for You</h2>
                    <div className=' flex flex-col sm:flex-row justify-center items-center text-center gap-6'>
                        <div>
                            <p className='text-base text-gray-400 '>Total Downloads</p>
                            <h2 className='font-extrabold text-white text-[40px] md:text-[64px] '>29.6M</h2>
                            <p className='text-base text-gray-400 '>21% more than last month</p>
                        </div>
                        <div>
                            <p className='text-base text-gray-400 '>Total Reviews</p>
                            <h2 className='font-extrabold text-white text-[40px] md:text-[64px] '>906K</h2>
                            <p className='text-base text-gray-400 '>46% more than last month</p>
                        </div>
                        <div>
                            <p className='text-base text-gray-400 '>Active Apps</p>
                            <h2 className='font-extrabold text-white text-[40px] md:text-[64px] '>132+</h2>
                            <p className='text-base text-gray-400 '>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero;