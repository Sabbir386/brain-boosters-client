import React from 'react';
import Banner from '../../Components/HomeSection/Banner/Banner';
import Gallery from '../../Components/HomeSection/Gallery/Gallery';
import ShopByCategory from '../../Components/HomeSection/ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;