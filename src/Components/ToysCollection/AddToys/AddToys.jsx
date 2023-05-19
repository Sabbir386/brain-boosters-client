import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../AuthProvider/AuthProvider';



const AddToys = () => {
    const { user } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch("http://localhost:5000/addToy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='bg-gray-200 text-center mt-3 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.exampleRequired && <span>This field is required</span>}

                <input
                    className='p-2 m-2 rounded'

                    {...register("name", { required: true })}
                    placeholder='Name'
                    defaultValue=""

                />
                <input
                    className='p-2 m-2 rounded'

                    {...register("photoUrl", { required: true })}
                    placeholder='Photo Url'
                    defaultValue={user?.photoUrl}

                />
                <br />
                <input
                    className='p-2 m-2 rounded'

                    {...register("sellerName", { required: true })}
                    placeholder='Seller Name'
                    defaultValue={user?.displayName}

                />
                <input
                    className='p-2 m-2 rounded'

                    {...register("sellerEmail", { required: true })}
                    placeholder='Seller Email'
                    defaultValue={user?.email}

                />
                <br />

                <select
                    className='pr-16  m-2 py-2 ps-0 rounded'
                    {...register("subCategory")}
                >
                    <option value="engineering-toy">engineering-toy</option>
                    <option value="math-toy">math-toy</option>

                    <option value="language-toy">language-toy</option>
                </select>
                <input
                    className='p-2 m-2 rounded'

                    {...register("price", { required: true })}
                    placeholder='Price'
                    defaultValue=""

                />
                <br />
                <input
                    className='p-2 m-2 rounded'

                    {...register("ratings", { required: true })}
                    placeholder='Ratings'
                    defaultValue=""

                />
                <input
                    className='p-2 m-2 rounded'

                    {...register("availableQuantity", { required: true })}
                    placeholder='Available quantity'
                    defaultValue=""

                />
                <br />
                <input
                    className='p-2 m-2 rounded text-center'

                    {...register("detailDescription", { required: true })}
                    placeholder='Detail description'
                    defaultValue=""

                />
                <br />
                <input className="btn btn-success btn-tiny btn-xs sm:btn-sm md:btn-md lg:btn-lg" value="Add Toy" type="submit" />
            </form>

        </div>
    );
};

export default AddToys;