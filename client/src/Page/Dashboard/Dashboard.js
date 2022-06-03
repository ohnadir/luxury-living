import React from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { GiConfirmed } from 'react-icons/gi';
import { RiMessage2Line } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiUserAdd } from 'react-icons/hi';
import { MdMiscellaneousServices } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Page/Login/firebase.init';
import useAdmin from '../../Page/Hook/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className=' max-w-7xl mx-auto bg-[#F4F7FC]'>
            <div className="drawer drawer-mobile ">
                <input id="dashBoardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-10 ">
                    <Outlet />
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashBoardDrawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        {
                            !admin && <>
                                <li><Link to='/dashboard/book'>< CgShoppingCart/>Book</Link></li>
                                <li><Link to='/dashboard/bookList'><GiConfirmed /> Booking List</Link></li>
                                <li><Link to='/dashboard/review'><RiMessage2Line/>Review</Link></li>
                            </>
                        }
                        {
                            admin && <>
                               <li><Link to='/dashboard/orderList'><CgShoppingCart/>Order List</Link></li>
                               <li><Link to='/dashboard/addService'><AiOutlinePlus/>Add Service</Link></li>
                               <li><Link to='/dashboard/makeAdmin'><HiUserAdd/>Make Admin</Link></li>
                               <li><Link to='/dashboard/manageService'><MdMiscellaneousServices/>Manage Service</Link></li>
                            </>
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;