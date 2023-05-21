import React from 'react';

import banner from '../../../assets/banner.webp'
import banner1 from '../../../assets/banner1.webp'
import banner2 from '../../../assets/banner2.webp'
import banner3 from '../../../assets/banner3.webp'

const Banner = () => {

    return (
        <>

            <div className=' px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
                <div className="carousel w-full ">
                    <div id="item1" className="carousel-item w-full" >
                        <img src={banner} className="w-full h-80  rounded-lg" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={banner1} className="w-full h-80  rounded-lg" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={banner2} className="w-full h-80" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={banner3} className="w-full h-80 rounded-lg" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>

        </>

    );
};

export default Banner;