import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const menuList = <>
        <Link to='/home'>Home</Link>
        <Link to='/home'>Home</Link>
        <Link to='/home'>Home</Link>
    </>
    return (
        <div>
            
        </div>
    );
};

export default Navbar;