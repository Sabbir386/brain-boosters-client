import React from 'react';

const SingleToy = ({ toy }) => {
    const { _id, name, photoUrl, sellerName, sellerEmail, subCategory, price, ratings, availableQuantity, detailDescription } = toy || {}
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photoUrl} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Posted By : {sellerName}</h2>
                <p className="text-xl font-normal">Toy Name : {name}</p>
                <p className="text-xl font-normal">Price : {price}</p>
                <p className="text-xl font-normal">Available Quantity : {availableQuantity}</p>
                <div className="card-actions">
                    <button className="btn btn-success">View Details</button>
                </div>
            </div>


        </div>
    );
};

export default SingleToy;