import React from 'react';
import { toast } from 'react-toastify';


const RemoveServiceModal = ({ removeService, setRemoveService, refetch }) => {
    const { name, _id } = removeService;

    const handelRemoveService = (_id) => {
        fetch(`http://localhost:5000/services/${_id}`, {
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
            setRemoveService(null);
        })
    }
    return (
        <div>
            
            <input type="checkbox" id="removeServiceModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h3 className="text-lg font-bold mb-3">Remove {name}</h3>
                    <div className='bg-red-100 px-4'>
                        <p className="py-4 text-red-700 font-semibold">After you remove this service, it's permanently remove. User Can't be recover . </p>
                    </div>
                    <p className='mt-5 text-[14px]'>Service Name</p>
                    <p className='mt-1 text-lg'>{name}</p>

                    <div className='flex justify-end gap-5 mt-3'>
                        <label htmlFor="removeServiceModal" className="cursor-pointer">Cancel</label>
                        <button onClick={()=>handelRemoveService(_id)} className='bg-red-700 px-3 py-1 rounded-lg text-white'>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemoveServiceModal;