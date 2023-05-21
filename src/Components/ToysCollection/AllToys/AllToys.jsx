import React, { useEffect, useState } from 'react';
import SingleToy from './singleToy';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    useTitle('AllToys')
    useEffect(() => {
        fetch("https://brain-boosters-server-side.vercel.app/allToys")
            .then(res => res.json())
            .then(result => {
                setToys(result);
            })

    }, [])
    const handleSearch = () => {
        // fetch(`https://brain-boosters-server-side.vercel.app/getJobsByText/${searchText}`)
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //     setJobs(data);
        //   });

    };
    return (
        <>
            <div className='mt-3 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
                <h1 className="text-center text-3xl font-semibold mb-3">Search By Toy Name</h1>
                <div className=" w-1/3 p-2 text-center bg-gray-200 mx-auto rounded-lg">
                    <input
                        onChange={(e) => setSearchByText(e.target.value)}
                        type="text"
                        className="p-2 m-2 rounded"
                    />{" "}
                    <button className='btn btn-success' onClick={handleSearch}>Search</button>
                </div>

            </div>
            <div className=' mt-3 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        toys.map((toy, index) => <SingleToy
                            toy={toy}
                            key={toy._id}


                        ></SingleToy>)
                    }
                </div>


            </div></>
    );
};

export default AllToys;