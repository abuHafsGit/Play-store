import React from 'react';
import { UseAppContext } from '../../AppContext/AppContext';
import InstallCard from '../../components/ui/InstallCard';

const InstallApps = () => {
    const { isInstalled, setIsInstalled } = UseAppContext()
    console.log(isInstalled)
    return (
        <div className='max-w-400 mx-auto bg-[#F1F5E8] pb-20'>
            <div className='max-w-7xl mx-auto w-full px-4'>
                <div className='pt-20 pb-10 text-center gap-4 '>
                    <h1 className='text-[#001931] text-5xl font-bold pb-4'>Your Installed Apps</h1>
                    <p className='text-[#627382] text-[20px]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[#001931] text-2xl font-semibold pb-4'>1 Apps Found</h2>
                    <select className='py-3 px-4 border border-gray-400 rounded-sm text-[#627382]' name="" id="">
                        <option className='pr-4 ' value="">Sort By Size</option>
                    </select>
                </div>
                <div className='pt-4 flex gap-4 w-full flex-col '>
                    {isInstalled.map((app) => (

                        <div key={app.id}>
                            <InstallCard appInstall={app} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InstallApps;