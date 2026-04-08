import React from 'react';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';
import { UseAppContext } from '../../AppContext/AppContext';


const InstallCard = ({ appInstall }) => {
    const { isInstalled, setIsInstalled } = UseAppContext()
    const handleUninstall = (appInstall) => {
        // Logic to uninstall the app
        console.log(`Uninstalling ${appInstall.appName}`);
        toast.success('App uninstalled successfully!')
        const updatedInstalledApps = isInstalled.filter((app) => app.id !== appInstall.id);
        setIsInstalled(updatedInstalledApps);
    }
    return (
        <div className='max-w-400 mx-auto bg-[#F1F5E8]'>
            <div className='max-w-7xl mx-auto w-full bg-white p-4 flex items-center justify-between gap-4'>
                <div className=' flex gap-4 items-center justify-center'>
                    <img className='w-20 h-20' src={appInstall.image} alt="" />
                    <div>
                        <h3 className=' font-medium text-[#001931] text-[20px]'>{appInstall.appName}</h3>
                        <div className='flex gap-4'>
                            <div className='flex items-center justify-center gap-1'>
                                <img className='w-4 h-4' src={assets.icon_downloads} alt="" />
                                <p>{appInstall.download}</p>
                            </div>
                            <div className='flex items-center justify-center gap-1'>
                                <img className='w-4 h-4' src={assets.star} alt="" />
                                <p>{appInstall.rating}</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='text-[#627382]'>{appInstall.size}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={() => handleUninstall(appInstall)} className='font-semibold text-base text-white py-3 px-4 bg-[#00D390] rounded-sm cursor-pointer'>{appInstall.install ? "Installed" : "Uninstall"}</div>
            </div>
        </div>
    );
};

export default InstallCard;