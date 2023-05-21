import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SingleCategoryToys = ({ toys }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, photoUrl, price, ratings } = toys || {}
    const handleAlert = () => {
        Swal.fire({
            title: 'Alert!',
            text: 'You have to log in first to view details',
            icon: 'warning',
            confirmButtonText: 'Go to login Page'
        })
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='w-1/2'><img src={photoUrl} alt="Album" /></figure>
            <div className="card-body">
                <p className="text-xl font-semibold">{name}</p>
                <p className="text-xl font-normal">Price : {price}</p>
                <p className="text-xl font-normal">Ratings : {ratings}</p>
                <div className="card-actions justify-center">

                    {
                        user ? <Link to={`/singleToyDetailsRoutes/${_id}`}>
                            <button className="btn btn-success">View Details</button>
                        </Link> :
                            <button onClick={handleAlert} className="btn btn-success">View Details</button>


                    }


                </div>
            </div>
        </div>
    );
};

export default SingleCategoryToys;