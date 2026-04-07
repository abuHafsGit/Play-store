import React from 'react';
import { useNavigate } from 'react-router';
import { assets } from '../../assets/assets';

const Card = ({ app }) => {
    const navigate = useNavigate()
    return (
        <div className='  mx-auto ' onClick={() => { navigate(`/apps/${app.id}`); scrollTo(0, 0) }}>
            <div className='border flex  flex-col  p-3 gap-4 bg-white rounded-sm border-none hover:shadow-2xl '>
                <div className='w-full'>
                    <img className='w-full' src={app.image} alt="" />
                </div>
                <div ><h2 className=' font-medium text-[20px]'>{app.appName}</h2></div>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-center items-center gap-2 bg-[#F1F5E8] text-[#00D390]  py-1.5 px-2.5 rounded-sm  shadow-2xl font-medium text-[20px]'><img className='w-4 h-4' src={assets.icon_downloads} alt="" />{app.downlood}</div>
                    <div className='flex justify-center items-center gap-2 bg-[#FFF0E1] py-1.5 px-2.5 rounded-sm' ><img className='w-4 h-4' src={assets.star} alt="" /> {app.rating}</div>
                </div>
            </div>
        </div>
    )
};

export default Card;