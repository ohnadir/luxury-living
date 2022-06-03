import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddService = () => {
    const { register, formState: { errors }, handleSubmit, reset  } = useForm();

    const imgKeyStroke='abd7b79a50a5c7cfbfaf7b71ee36e9be'
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
                    const service = {
                        name: data.title,
                        info: data.description,
                        price: data.price,
                        img: img
                    
                }
             // send to database
             fetch('http://localhost:5000/services', {
                 method: 'POST',
                 headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(service)
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
            <div className='bg-white p-6  rounded-lg'>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-5 p-16'>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-10'>
                        <div className=''>
                            <label htmlFor="" className='mb-2'>Service Name</label><br />
                            <input
                                type='text'
                                className='py-[5px] w-full px-2 bg-slate-100 border border-[#CFCFCF] rounded-lg outline-none'
                                placeholder='Enter Title'
                                {...register("title", {
                                    required: {
                                        value: true,
                                        message: 'Title is required'
                                    }
                                })} />
                            <p>{errors.title?.type === 'required' && <span className='text-red-600 text-sm'>{ errors.title.message}</span>}</p>       
                        </div>
                        <div className=''>
                            <label htmlFor="">Image</label><br />
                            <input
                                type='file'
                                className='py-[5px] w-full px-2 bg-slate-100 border border-[#CFCFCF] rounded-lg outline-none'
                                placeholder='Upload image'
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is required'
                                    }
                                })} />
                            <p>{errors.image?.type === 'required' && <span className='text-red-600 text-sm'>{ errors.image.message}</span>}  </p>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-10'>
                        <div className=''>
                            <label htmlFor="">Description</label><br />
                            <textarea
                                type='text'
                                rows="3" cols="40"
                                className='py-[5px] w-full px-2 bg-slate-100 border border-[#CFCFCF] rounded-lg outline-none'
                                placeholder='Enter Description'
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is required'
                                    }
                                })} />
                            <p>{errors.description?.type === 'required' && <span className='text-red-600 text-sm'>{ errors.description.message}</span>}</p>
                        </div>
                        <div className=''>
                            <label htmlFor="">Price</label><br />
                            <input
                                type='number'
                                rows="4" cols="60"
                                className='py-[5px] w-full px-2 bg-slate-100 border border-[#CFCFCF] rounded-lg outline-none'
                                placeholder='Enter Price'
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is required'
                                    }
                                })} />
                            <p>{errors.price?.type === 'required' && <span className='text-red-600 text-sm'>{ errors.price.message}</span>}</p>
                        </div>
                    </div>

                    <div className='flex justify-center mt-5'>
                        <input className='bg-[#251D58]  w-2/4 text-white  py-[5px] rounded-lg cursor-pointer' value='Submit' type="submit" />
                    </div>
            </form>
            </div>
        </div>
    );
};

export default AddService;