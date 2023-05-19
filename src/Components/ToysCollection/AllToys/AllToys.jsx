import React, { useEffect, useState } from 'react';
import SingleToy from './singleToy';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allToys")
            .then(res => res.json())
            .then(result => {
                setToys(result);
            })

    }, [toys])
    return (
        <div className=' mt-3 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    toys.map(toy => <SingleToy
                        toy={toy}
                        key={toy._id}


                    ></SingleToy>)
                }
            </div>


        </div>
    );
};

export default AllToys;