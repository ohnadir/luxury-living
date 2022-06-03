import React from 'react';

const RemoveUserModal = ({ id, refetch }) => {
    console.log(id);
    return (
        <div>
            
            <input type="checkbox" id="userRemoveModal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <h3 class="text-lg font-bold mb-3">Remove User {id}</h3>
                    <div className='bg-red-100 px-4'>
                        <p class="py-4 text-red-700 font-semibold">After you remove this user, it's permanently remove. User Can't be recover . </p>
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