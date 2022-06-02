import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, name, info, price, _id } = service;
    return (
        <div>
            <Link to='/home'>
            <div className=' max-w-fit text-center p-4 hover:shadow-lg hover:rounded-lg'>
                <img className='w-[80px] mx-auto' src={img} alt="" />
                <p className='font-bold text-xl'>{name}</p>
                <p className='font-bold text-xl'>${price}</p>
                <p className='text-[#606268]'>{info}</p>
            </div>
            </Link>
        </div>
    );
};

export default Service;