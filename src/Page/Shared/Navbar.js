import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomLink from '../Login/Login/CustomLink';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    const menuLists = <>
        <CustomLink to='/home'>Home</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
        <CustomLink to='/projects'>Projects</CustomLink>
        <CustomLink to='/contact'>Contact</CustomLink>
        <CustomLink to='/admin'>Admin</CustomLink>
        <CustomLink to='/login'>Login</CustomLink>
    </>
    return (
        <div className='max-w-7xl mx-auto px-4'>
            <div className='flex items-center h-14 justify-between text-black  relative z-50'>
                <FontAwesomeIcon
                    icon={open ? faTimes : faBars}
                    onClick={() => setOpen(!open)}
                    className="text-black w-6 h-6 cursor-pointer md:hidden"/>
                <div className=''>
                    <span className='cursor-pointer' onClick={()=>navigate('/home')}>Luxury Living</span>
                </div>
                <div className='flex gap-6 items-center hidden md:flex'>
                    {menuLists}
                </div>
               
                {open && (
                    <div className="bg-slate-600 absolute top-full left-0 flex flex-col w-full pb-8 md:hidden">
                        <div className=" flex gap-4 flex-col items-center text-xl">
                            {menuLists}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;