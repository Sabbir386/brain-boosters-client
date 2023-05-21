import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyToysSingleRow = ({ toy, handleDelete }) => {
    const { _id, name, photoUrl, sellerName, sellerEmail, subCategory, price, ratings, availableQuantity, detailDescription } = toy || {}

    return (
        <tr className='text-center'>

            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-square btn-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>

                <div className="avatar">
                    <div className="w-16 h-16 rounded-full">
                        <img src={photoUrl} />
                    </div>
                </div>

            </td>
            <td>
                {name}

            </td>
            <td>
                {sellerName}

            </td>
            <td>
                <Link to={`/singleToyDetailsRoutes/${_id}`}>
                    <button className="btn btn-ghost">View Details</button>
                </Link>

            </td>

            <td>
                {price}
            </td>
            <td >
                {availableQuantity}
            </td>
            <th>
                <Link to={`/updatedToy/${_id}`}>
                    <button className="btn btn-success">Update</button>
                </Link>
            </th>
        </tr>
    );
};

export default MyToysSingleRow;