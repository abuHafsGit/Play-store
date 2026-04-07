import { HashLoader } from 'react-spinners';
import Card from '../../components/ui/Card';
import useApps from '../../hooks/useApps';

const Apps = () => {
    const { apps, isLoding } = useApps()
    return (
        <div className=' grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-18 hover:cursor-pointer'>
            {
                isLoding ? <HashLoader /> : apps.map((app, index) => (
                    <Card key={index} app={app} />
                ))
            }
        </div>
    );
};

export default Apps;