import React, { useEffect, useState } from 'react';
import MyToysSingleRow from './MyToysSingleRow';


const MyToys = () => {
    const [toys, setToys] = useState([]);
    const [searchBYText, setSearchByText] = useState("");
    useEffect(() => {
        fetch("http://localhost:5000/allToys")
            .then(res => res.json())
            .then(result => {
                setToys(result);
            })

    }, [toys])

    const handleSearch = () => {
        // fetch(`http://localhost:5000/getJobsByText/${searchText}`)
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //     setJobs(data);
        //   });

    };
    console.log(searchBYText);
    return (
        <>
            <p>{toys.length}</p>
            <div className='mt-3 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
                <h1 className="text-center text-3xl font-semibold mb-3">My Toys</h1>
                <div className=" w-1/3 p-2 text-center bg-gray-200 mx-auto rounded-lg">
                    <input
                        onChange={(e) => setSearchByText(e.target.value)}
                        type="text"
                        className="p-2 m-2 rounded"
                    />{" "}
                    <button className='btn btn-success' onClick={handleSearch}>Search</button>
                </div>

            </div>
            <div className='mt-3 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* table head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
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
            </div>
        </>
    );
};

export default MyToys;