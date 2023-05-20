import React from 'react';
import { toast } from 'react-toastify';

const MyToysSingleRow = ({ toy }) => {
    const { _id, name, photoUrl, sellerName, sellerEmail, subCategory, price, ratings, availableQuantity, detailDescription } = toy || {}
    const handleDelete = (id) => {
        const ok = confirm('Are you sure Want to delete');
        if (ok) {
            fetch(`http://localhost:5000/allToys/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    toast('Deleted Successfully')
                })
        }
    }
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
                {price}
            </td>
            <td >
                {availableQuantity}
            </td>
            <th>
                <button onClick={() => handleUpdate(_id)} className="btn btn-success">Update</button>
            </th>
        </tr>
    );
};

export default MyToysSingleRow;