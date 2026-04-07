import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Card from '../Card/Card';

// const fecthApp = fetch('/data.json').then(res => res.json())
const Trading = () => {
    const [apps, setApps] = useState([])
    const [isLoding, setIsLoding] = useState(true)
    useEffect(() => {
        const fecthApp = async () => {
            const res = await fetch('/data.json')
            const data = await res.json()

            setTimeout(() => {
                setApps(data)
                setIsLoding(false)
            }, 3500);
        }
        fecthApp()
    }, [])

    const navigate = useNavigate()
    console.log(apps)
    return (
        <div className='max-w-400 mx-auto bg-[#F1F5E8]  '>
            <div className='max-w-7xl mx-auto '>
                <div className='pt-20  text-center gap-4  '>
                    <h1 className='text-[#001931] text-[32px] md:text-5xl font-bold pb-4'>Trending Apps</h1>
                    <p className='text-[#627382] text-[20px]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className=' grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-18 hover:cursor-pointer'>
                    {
                        isLoding ? <h1>loding</h1> : apps.slice(0, 8).map((app, index) => (
                            <Card key={index} app={app} />
                        ))
                    }
                </div>
                <div className='flex justify-center items-center pt-10 pb-20'>
                    <button onClick={() => { navigate('/appnotfound'); scrollTo(0, 0) }} className='text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-4 py-3 rounded-sm font-semibold text-base cursor-pointer '>Show All</button>
                </div>
            </div>
        </div>
    )
};

export default Trading;