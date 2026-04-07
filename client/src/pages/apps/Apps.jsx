import { HashLoader } from 'react-spinners';
import Card from '../../components/ui/Card';
import useApps from '../../hooks/useApps';

const Apps = () => {
    const { apps, isLoding } = useApps()
    return (
        <div className=' grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-18 hover:cursor-pointer'>
            {
                isLoding ? <div className='flex justify-center items-center h-screen'><HashLoader color="#00D390" size={50} /></div> : apps.map((app, index) => (
                    <Card key={index} app={app} />
                ))
            }
        </div>
    );
};

export default Apps;