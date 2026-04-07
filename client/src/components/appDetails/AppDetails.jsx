import React from 'react';
import { useParams } from 'react-router';
import useexpectedDatas from '../../hooks/useApps';
import { assets } from '../../assets/assets';
import { HashLoader } from 'react-spinners';

const AppDetails = () => {
    const { id } = useParams()
    console.log(id)
    const { apps, isLoading } = useexpectedDatas()
    const expectedData = apps.find((app) => app.id == id)
    console.log(expectedData)
    return (
        <div>
         {
            isLoading? <HashLoader/>
            :
              <div className='max-w-400 mx-auto bg-[#F1F5E8]'>
                <div className='max-w-7xl mx-auto min-h-screen px-4 '>
                    <div className=" flex flex-col md:flex md:flex-row gap-10  items-center pt-20">
                        <div className='w-87.5 h-87.5 '><img className='w-full' src={expectedData?.image} alt="" /></div>

                        <div className=' p-4 flex flex-col gap-7.5 items-center sm:items-start'>
                            <div className='flex flex-col gap-2 '><h2 className='font-bold text-[32px] text-[#001931]'>{expectedData?.expectedDataName}</h2><p><span className='text-[#627382] text-[20px'>Developed by</span> <span className='font-semibold text-[20px]'>productive.io</span></p></div>
                            <hr className='w-full' />
                            <div className='flex  items-center gap-6 p-4'>
                                <div>
                                    <img className='w-10 h-10' src={assets.icon_downloads} alt="" />
                                    <p>Downloads</p>
                                    <h2>{expectedData?.downlood}</h2>
                                </div>
                                <div>
                                    <img className='w-10 h-10' src={assets.icon_ratings} alt="" />
                                    <p>Average Ratings</p>
                                    <h2>{expectedData?.rating}</h2>
                                </div>
                                <div>
                                    <img className='w-10 h-10' src={assets.icon_review} alt="" />
                                    <p>Total Reviews</p>
                                    <h2>{expectedData?.review}</h2>
                                </div>
                            </div>
                            <div><button className='bg-[#00D390] px-5 py-3.5 rounded-sm text-white font-semibold text-[20px] cursor-pointer'>Install Now (291 MB)</button></div>
                        </div>
                    </div>
                    <hr className=' bg-[#001931] border-none outline-none w-full h-0.5 my-10' />
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-[#001931] font-semibold text-2xl'>Ratings</h2>
                        <div className='text-[#627382] font-normal text-[18px] gap-4'>
                            <div className=' flex items-center gap-4 text-center '>
                                <h3>5 Star</h3>
                                <div className='w-[80%] h-4 bg-[#FF8811]'></div>
                            </div>
                            <div className=' flex items-center gap-4 text-center '>
                                <h3>4 Star</h3>
                                <div className='w-[50%] h-4 bg-[#FF8811]'></div>
                            </div>
                            <div className=' flex items-center gap-4 text-center '>
                                <h3>3 Star</h3>
                                <div className='w-[33.33%] h-4 bg-[#FF8811]'></div>
                            </div>
                            <div className=' flex items-center gap-4 text-center '>
                                <h3>2 Star</h3>
                                <div className='w-[25%] h-4 bg-[#FF8811]'></div>
                            </div>
                            <div className=' flex items-center gap-4 text-center '>
                                <h3>1 Star</h3>
                                <div className='w-[15%] h-4 bg-[#FF8811]'></div>
                            </div>

                        </div>
                        <div className='flex justify-between pl-15 text-[#627382] font-normal text-[18px]'>
                            <h3>0</h3>
                            <h3>3000</h3>
                            <h3>6000</h3>
                            <h3>9000</h3>
                            <h3>12000</h3>
                        </div>
                    </div>
                    <hr className=' bg-[#001931] border-none outline-none w-full h-0.5 my-10' />
                    <div>
                        <h2 className='text-[#001931] font-semibold text-2xl'>Description</h2>
                        <div className='text-[#627382] font-normal text-[20px] text-justify flex flex-col gap-8 pt-6 pb-20'>
                            <p>This focus expectedData takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.</p>

                            <p>A unique feature of this expectedData is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The expectedData also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.</p>

                            <p>For people who struggle with procrastination, the expectedData provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified expectedDataroach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the expectedData adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro expectedData ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>

                        </div>
                    </div>
                </div>
            </div>
         } 
        </div>
    );
};

export default AppDetails;