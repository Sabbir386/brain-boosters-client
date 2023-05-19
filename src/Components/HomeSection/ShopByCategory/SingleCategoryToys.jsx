import React from 'react';

const SingleCategoryToys = ({ toys }) => {
    const { _id, name, photoUrl, price, ratings } = toys || {}
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='w-1/2'><img src={photoUrl} alt="Album" /></figure>
            <div className="card-body">
                <p className="text-xl font-semibold">{name}</p>
                <p className="text-xl font-normal">Price : {price}</p>
                <p className="text-xl font-normal">Ratings : {ratings}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-success">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCategoryToys;