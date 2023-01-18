import React from 'react';
import Aboute from '../../Pages/Aboute/Aboute';
import Gallery from '../../Pages/Gallery/Gallery';
import Banner from '../../Pages/Home/Banner';
import Services from '../../Pages/Services/Services';
import TestMonial from '../../Pages/TestMonial/TestMonial';

const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <Aboute></Aboute>
            <Services></Services>
            <Gallery></Gallery>
            <TestMonial></TestMonial>
        </div>
    );
};

export default Main;