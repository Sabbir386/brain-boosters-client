
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const UpdatedToy = () => {
    const { user } = useContext(AuthContext);
    useTitle('Update')
    const [toySingleData, setToySingleData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    // console.log(id);
    // const singleUserData = useLoaderData();
    // console.log('got data', singleUserData);
    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => {

                const reamining = data.filter(toyData => (toyData._id) == id);
                setToySingleData(reamining);
            })
    }, [id]);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch(`http://localhost:5000/allToys/${toySingleData[0]?._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/mytoys');
                }
            })
    };
    // console.log(toySingleData);
    return (
        <div className='bg-gray-200 text-center mt-3 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>

            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.exampleRequired && <span>This field is required</span>}
                {/* <input
                    className='p-2 m-2 rounded'

                    {...register("id", { required: true })}
                    placeholder='id'
                    defaultValue={toySingleData[0]?._id}

                />
                <br /> */}

                <input
                    className='p-2 m-2 rounded'

                    {...register("name", { required: true })}
                    placeholder='Toy Name'
                    defaultValue={toySingleData[0]?.name}

                />

                <input
                    className='p-2 m-2 rounded'

                    {...register("photoUrl", { required: true })}
                    placeholder='Photo Url'
                    defaultValue={toySingleData[0]?.photoUrl}

                />
                <br />
                <input
                    className='p-2 m-2 rounded'

                    {...register("sellerName")}
                    placeholder='Seller Name'
                    defaultValue={user?.displayName}

                />
                <input
                    className='p-2 m-2 rounded'

                    {...register("sellerEmail")}
                    placeholder='Seller Email'
                    defaultValue={user?.email}

                />
                <br />

                <select
                    className='pr-16  m-2 py-2 ps-0 rounded'
                    {...register("subCategory")}
                >
                    <option value="EngineeringToys">EngineeringToys</option>
                    <option value="MathToys">MathToys</option>

                    <option value="LanguageToys">LanguageToys</option>
                </select>
                <input
                    className='p-2 m-2 rounded'

                    {...register("price", { required: true })}
                    placeholder='Price'
                    defaultValue={toySingleData[0]?.price}

                />
                <br />
                <input
                    className='p-2 m-2 rounded'

                    {...register("ratings", { required: true })}
                    placeholder='Ratings'
                    defaultValue={toySingleData[0]?.ratings}

                />
                <input
                    className='p-2 m-2 rounded'

                    {...register("availableQuantity", { required: true })}
                    placeholder='Available quantity'
                    defaultValue={toySingleData[0]?.availableQuantity}

                />
                <br />
                <input
                    className='p-2 m-2 rounded text-center'

                    {...register("detailDescription", { required: true })}
                    placeholder='Detail description'
                    defaultValue={toySingleData[0]?.detailDescription}

                />
                <br />
                <input className="btn btn-success btn-tiny btn-xs sm:btn-sm md:btn-md lg:btn-lg" value="Update Toy" type="submit" />
            </form>

        </div>
    );
};

export default UpdatedToy;