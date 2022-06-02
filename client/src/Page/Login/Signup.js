import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './firebase.init'
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const Sign = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword, user, loading, error ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const onSubmit = async data => {
        await  createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({displayName: data.name})
        toast('Updated Name')
    };
    const handleGoogle = () => {
        signInWithGoogle()
    }

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (user || gUser) {
        navigate('/home')
    }

    let signInError;
    if (error || gError || updateError) {
        signInError = <p className='text-red-600'><small>{gError?.message} || {error?.message} || {updateError?.message}</small></p>
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='border w-96 p-10'>
                <form onSubmit={handleSubmit(onSubmit)} className=''>
                    <h1 className='text-center mb-7 text-2xl' >Create an Account</h1>
                    <div className='mb-7'>
                        <input
                            className='py-[5px] w-full px-2 bg-slate-100 border border-[#CFCFCF] rounded-lg outline-none'
                            placeholder='Enter Name'
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })} />
                        <label >
                            {errors.name?.type === 'required' && <span className='text-red-600 text-sm'>{ errors.name.message}</span>}            
                        </label>
                    </div>
                    <div className='mb-7'>
                        <input
                            className='py-[5px] w-full px-2 bg-slate-100 border border-[#CFCFCF] rounded-lg outline-none'
                            placeholder='Enter Email'
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a Valid Email'
                                }
                            })} />
                        <label >
                            {errors.email?.type === 'required' && <span className='text-red-600 text-sm'>{ errors.email.message}</span>}       
                            {errors.email?.type === 'pattern' && <span className='text-red-600 text-sm'>{ errors.email.message}</span>}       
                        </label>
                    </div>

                    <div className='mb-7'>
                        <input
                            className='py-[5px] w-full px-2 bg-slate-100 border border-[#CFCFCF] rounded-lg outline-none'
                            placeholder='Enter Password'
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password contain at lest 6 or longer'
                                }
                            })} />
                        <label >
                            {errors.password?.type === 'required' && <span className='text-red-600 text-sm'>{ errors.password.message}</span>}       
                            {errors.password?.type === 'pattern' && <span className='text-red-600 text-sm'>{ errors.password.message}</span>}       
                        </label> 
                    </div> 
                    {signInError}
                    <input className='bg-[#251D58] text-white w-full py-[5px] rounded-lg cursor-pointer' value='Signup' type="submit" />
                    <div
                        className="flex items-center mt-5 mb-5 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                        <p className="text-center font-semibold mx-4 mb-0">OR</p>
                    </div>
                    <button onClick={handleGoogle} className='border mb-2 w-full py-1 border-[#251D58] text-[#251D58] rounded-lg'>Continue With Google</button>
                    <p className='text-sm text-right'>Already have an Account ? <Link className='text-red-600' to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Sign;