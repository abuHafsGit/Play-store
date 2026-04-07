import React, { useEffect, useState } from 'react';

const useApps = () => {
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
    return { apps, isLoding };
};

export default useApps;