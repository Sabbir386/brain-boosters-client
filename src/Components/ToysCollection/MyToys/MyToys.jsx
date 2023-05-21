import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import MyToysSingleRow from './MyToysSingleRow';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    useTitle('MyToys')
    const [selectedtoys, setSelectedToys] = useState([]);
    const { user, toys } = useContext(AuthContext);
    // const [searchBYText, setSearchByText] = useState("");
    useEffect(() => {
        fetch("https://brain-boosters-server-side.vercel.app/allToys")
            .then(res => res.json())
            .then(data => {
                const useradded = data.filter(singleUser => (singleUser.sellerEmail) == user.email)
                setSelectedToys(useradded);
            })

    }, [])
    const handleDelete = (id) => {
        // const ok = confirm('Are you sure Want to delete');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brain-boosters-server-side.vercel.app/allToys/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {


                        if (data.deletedCount > 0) {
                            const reamaining = selectedtoys.filter(toy => toy._id != id)
                            setSelectedToys(reamaining)
                            Swal.fire({
                                title: 'success!',
                                text: 'Deleted Successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        }
                    })
            }
        })



    }


    return (
        <>

            <div className='mt-3 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        {/* table head */}
                        <thead>
                            <tr className='text-center'>

                                <th>Delete Option</th>
                                <th>Image</th>
                                <th>Toy Name</th>
                                <th>Sller Name</th>
                                <th>Price</th>
                                <th>Product Details</th>
                                <th > Available Quantity</th>
                                <th> Edit Option</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectedtoys.map((toy, index) => <MyToysSingleRow
                                    key={index}
                                    toy={toy}
                                    handleDelete={handleDelete}
                                ></MyToysSingleRow>)
                            }


                        </tbody>


                    </table>
                </div>
            </div >
        </>
    );
};

export default MyToys;