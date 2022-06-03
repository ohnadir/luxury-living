import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Review = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imgKeyStroke = 'abd7b79a50a5c7cfbfaf7b71ee36e9be';


    const onSubmit = data => {
        const images = data.image[0];
        const formData = new FormData();
        formData.append('image', images);

        fetch(`https://api.imgbb.com/1/upload?key=${imgKeyStroke}`, {
            method: "POST",
            body: formData
        })
        .then(res=> res.json())
        .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const review = {
                        name: data.name,
                        img: img,
                        designation: data.designation,
                        ratings: data.ratings,
                        reviews: data.review,
                    }
             // send to database
             fetch('http://localhost:5000/reviews', {
                 method: 'POST',
                 headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
            .then(res=> res.json())
            .then(data => {
                toast('Add Service Successfully')
                reset();
            })
                }
                else {
                toast.error('Failed add Service')
            }
                
        })
        
        
    };
    return (
        <div>
            <div className=' p-6  rounded-lg'>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-4 p-16'>
                <input
                    type='text'
                    className='py-[10px] w-full px-2 bg-white border border-[#CFCFCF] rounded-lg outline-none'
                    placeholder='Your Name'
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is required'
                        }
                    })} />
                    <p>{errors.name?.type === 'required' && <span className='text-red-600 text-sm'>{ errors.name.message}</span>}</p>                  

                    <input
                        type='text'
                        className='py-[10px] w-full px-2 bg-white border border-[#CFCFCF] rounded-lg outline-none'
                        placeholder='Designation'
                        {...register("designation", {
                            required: {
                                value: true,
                                message: 'Designation is required'
                            }
                        })} />
                    <p>{errors.designation?.type === 'required' && <span className='text-red-600 text-sm'>{ errors.designation.message}</span>}  </p>

                    <textarea
                        type='text'
                        rows="4" cols="40"
                        className='py-[5px] w-full px-2 bg-white border border-[#CFCFCF] rounded-lg outline-none'
                        placeholder='Review'
                        {...register("review", {
                            required: {
                                value: true,
                                message: 'Review is required'
                            }
                        })} />
                    <p>{errors.review?.type === 'required' && <span className='text-red-600 text-sm'>{ errors.review.message}</span>}</p>
                    <input
                        type='number'
                        className='py-[10px] w-full px-2 bg-white border border-[#CFCFCF] rounded-lg outline-none'
                        placeholder='Ratings'
                        {...register("ratings", {
                            required: {
                                value: true,
                                message: 'Ratings is required'
                            }
                        })} />
                    <p>{errors.ratings?.type === 'required' && <span className='text-red-600 text-sm'>{ errors.ratings.message}</span>}  </p>
                    <input
                        type='file'
                        className='py-[10px] w-full px-2 bg-white border border-[#CFCFCF] rounded-lg outline-none'
                        placeholder='Image'
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is required'
                            }
                        })} />
                    <p>{errors.image?.type === 'required' && <span className='text-red-600 text-sm'>{ errors.image.message}</span>}  </p>
                    <input className='bg-[#251D58]  w-1/4 text-white  py-[5px] rounded-lg cursor-pointer' value='Submit' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;