import React, { useContext, useEffect, useState } from 'react';
import MyToysSingleRow from './MyToysSingleRow';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const MyToys = () => {
    const [selectedtoys, setSelectedToys] = useState([]);
    const { user, toys } = useContext(AuthContext);
    // const [searchBYText, setSearchByText] = useState("");
    useEffect(() => {
        fetch("http://localhost:5000/allToys")
            .then(res => res.json())
            .then(data => {
                const useradded = data.filter(singleUser => (singleUser.sellerEmail) == user.email)
                setSelectedToys(useradded);
            })

    }, [])
    const handleDelete = (id) => {
        const ok = confirm('Are you sure Want to delete');
        if (ok) {
            fetch(`http://localhost:5000/allToys/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {


                    if (data.deletedCount > 0) {
                        const reamaining = selectedtoys.filter(toy => toy._id != id)
                        setSelectedToys(reamaining)
                        toast('Deleted Successfully')
                    }
                })
        }
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