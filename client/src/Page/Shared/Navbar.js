import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomLink from '../Login/Login/CustomLink';
import Logo from '../../assests/Group 33069.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Login/firebase.init';
import { signOut } from 'firebase/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { BsArrowDownShort } from 'react-icons/bs';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const  [user]  = useAuthState(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    
    const handleProfile = async(data) => {
        await updateProfile({photoURL: data.url})
    }
    const menuLists = <>
        <CustomLink to='/home'>Home</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
        <CustomLink to='/projects'>Projects</CustomLink>
        <CustomLink to='/contact'>Contact</CustomLink>
        <CustomLink to='/dashboard'>Dashboard</CustomLink>
        <label htmlFor="dashBoardDrawer" className="btn btn-primary drawer-button lg:hidden">Open</label>
        {
            user ?
            
            <div className="dropdown dropdown-end">
                <label tabIndex="0" className="flex items-center gap-1">{user.displayName} <BsArrowDownShort/></label>
                <ul tabIndex="0" className="menu dropdown-content p-2 shadow bg-base-200 rounded-box w-52 mt-4">
                <li><button onClick={handleProfile}>Update Profile Picture</button></li>
                <li><button onClick={handleSignOut}>Sign Out</button></li>
                </ul>
            </div>
            :
            <CustomLink to='/login'>Login</CustomLink>
        }
        
    </>
    return (
        <div className='max-w-7xl mx-auto px-4'>
            <div className='flex items-center h-14 justify-between text-black  relative z-50'>
                <FontAwesomeIcon
                    icon={open ? faTimes : faBars}
                    onClick={() => setOpen(!open)}
                    className="text-black w-6 h-6 cursor-pointer md:hidden"/>
                <div className=''>
                    <img onClick={()=>navigate('/home')} className='w-20 h-8 cursor-pointer' src={Logo} alt="" />
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