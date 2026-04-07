import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className='max-w-400 mx-auto bg-[#001931]'>
            <div className=' max-w-7xl mx-auto flex flex-col pt-8.75 px-4 lg:px-0'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-1'>
                        <img className='w-6 h-6' src={assets.logo} alt="" />
                        <h2 className='font-bold text-base text-white'>HERO.IO</h2>
                    </div>
                    <div className='flex justify-around items-center flex-col gap-4 '>
                        <p className='text-white text-[20px] font-medium'>Social Links</p>
                        <div className='flex gap-4 pb-2 '>
                            <img className="w-4 h-4 cursor-pointer" src={assets.twiter} alt="" />
                            <img className="w-4 h-4 cursor-pointer" src={assets.linkdin} alt="" />
                            <img className="w-4 h-4 cursor-pointer" src={assets.facebook} alt="" />
                        </div>
                    </div>
                </div>
                <hr className='bg-[#E5E7EB] h-0.5 border-none' />
                <div className='text-center text-white text-base py-8.75'>
                    <p>Copyright © 2025 - All right reserved</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;