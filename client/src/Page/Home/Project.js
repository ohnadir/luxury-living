import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';

const Project = ({ project }) => {
    const { img, name, location } = project;
    return (
        <div className='mx-auto'>
            <div className='text-center'>
                <img className='w-[350px] md:w-[400px] h-[300px]'  src={img} alt="" />
                <p className='text-xl font-bold my-[12px]'>{name}</p>
                <p className='flex justify-center items-center gap-1 text-[#4D4F55] text-lg'><HiLocationMarker/> {location}</p>
            </div>
        </div>
    );
};

export default Project;