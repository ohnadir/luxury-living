import React from 'react';
import { toast } from 'react-toastify';

const RemoveUserModal = ({ removeUser, setRemoveUser, refetch }) => {
    const { email, _id } = removeUser;
    const handelRemoveUser = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            refetch();
            toast('Delete Successfully');
            setRemoveUser(null);
        })
    }
    return (
        <div>
            
            <input type="checkbox" id="userRemoveModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h3 className="text-lg font-bold mb-3">Remove User</h3>
                    <div className='bg-red-100 px-4'>
                        <p className="py-4 text-red-700 font-semibold">After you remove this user, it's permanently remove. User Can't be recover . </p>
                    </div>
                    <p className='mt-5 text-[14px]'>User Account</p>
                    <p className='mt-1 text-lg'>{email}</p>

                    <div className='flex justify-end items-center gap-5 mt-3'>
                        <label htmlFor="userRemoveModal" className="cursor-pointer">Cancel</label>
                        <button onClick={()=>handelRemoveUser(_id)} className='bg-red-700 px-3 py-1 rounded-lg text-white'>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemoveUserModal;