import React, { useState } from 'react';


const MyToys = () => {
    const [searchBYText, setSearchByText] = useState("");
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
                        {/* head */}
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

                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>

                        </tbody>


                    </table>
                </div>
            </div>
        </>
    );
};

export default MyToys;