import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to={`/singleToyDetailsRoutes/${_id}`}>
                    <button className="btn btn-success">View Details</button>
                </Link>
            </div>


        </div>
    );
};

export default SingleToy;