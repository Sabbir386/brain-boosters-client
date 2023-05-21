import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const SingleToyDetailsRoute = () => {
    const { id } = useParams();
    const [detailsToy, setDetailsToy] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => {

                const reamining = data.filter(toyData => (toyData._id) == id);
                setDetailsToy(reamining);
            })
    }, [id]);
    useTitle('Details')
    return (
        <div className='mt-3 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
            <div className="card w-3/4 bg-base-100 shadow-xl mx-auto">
                <figure ><img className='rounded-lg' src={detailsToy[0]?.photoUrl} alt="Album" /></figure>
                <div className="card-body">
                    <p className="text-xl font-semibold ">{detailsToy[0]?.name}</p>
                    <p className="text-xl font-normal ">Category : {detailsToy[0]?.subCategory}</p>
                    <p className="text-xl font-semibold ">Contact : {detailsToy[0]?.sellerEmail}</p>
                    <p className="text-xl font-normal "> Available Quantity : {detailsToy[0]?.availableQuantity}</p>
                    <p className="text-xl font-semibold ">Price : {detailsToy[0]?.price}</p>
                    <p className="text-xl font-normal">Ratings : {detailsToy[0]?.ratings}</p>
                    <p className="text-xl font-normal">Description: {detailsToy[0]?.detailDescription}</p>

                    <div className="card-actions justify-center">
                        <button className="btn btn-success">Buy Product</button>
                    </div>
                </div>
            </div>




        </div>



    );
};

export default SingleToyDetailsRoute;