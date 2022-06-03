import React from 'react';

const RemoveUserModal = ({ id, refetch }) => {
    console.log(id);
    return (
        <div>
            
            <input type="checkbox" id="userRemoveModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h3 className="text-lg font-bold mb-3">Remove User {id}</h3>
                    <div className='bg-red-100 px-4'>
                        <p className="py-4 text-red-700 font-semibold">After you remove this user, it's permanently remove. User Can't be recover . </p>
                    </div>
                    <p className='mt-5 text-[14px]'>User Account</p>
                    <p className='mt-1 text-lg'>Email</p>

                    <div className='flex justify-end gap-5 mt-3'>
                        <label htmlFor="userRemoveModal" className="">Cancel</label>
                        <button className='bg-red-700 px-3 py-1 rounded-lg text-white'>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemoveUserModal;