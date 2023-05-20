import React, { useEffect, useState } from 'react';
import MyToysSingleRow from './MyToysSingleRow';


const MyToys = () => {
    const [toys, setToys] = useState([]);
    // const [searchBYText, setSearchByText] = useState("");
    useEffect(() => {
        fetch("http://localhost:5000/allToys")
            .then(res => res.json())
            .then(result => {
                setToys(result);
            })

    }, [toys])


    return (
        <>

            <div className='mt-3 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <h>{toys.length}</h>
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
                                toys.map(toy => <MyToysSingleRow
                                    key={toy._id}
                                    toy={toy}
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