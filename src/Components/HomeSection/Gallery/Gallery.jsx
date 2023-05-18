import React from 'react';

const Gallery = () => {
    return (
        <div className=' px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/colorful-wooden-toy-building-blocks_155165-168.jpg?w=740")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-xl font-bold">Educational Toys Center</h1>
                        <p className="mb-5 text-normal font-medium">Educational toys are objects of play, generally designed for children, which are expected to stimulate learning. They are often intended to meet an educational purpose such as helping a child develop</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gallery;