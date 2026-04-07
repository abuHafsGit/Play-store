import React from 'react';
import Hero from '../../components/homepage/Hero';
import Trading from '../../components/homepage/Trading';
import { UseAppContext } from '../../AppContext/AppContext';

const HomePage = () => {
    const { count } = UseAppContext()
    console.log(count)
    return (
        <div>
            <Hero />
            <Trading />
        </div>
    );
};

export default HomePage;