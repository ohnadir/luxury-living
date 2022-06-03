import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import RemoveServiceModal from './RemoveServiceModal';

const ManageService = () => {
    const [removeService, setRemoveService] = useState(null);
    const {data:services , isLoading, refetch } = useQuery('services', () =>
        fetch('http://localhost:5000/services', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading/>  
    } 
    return (
        <div>
            <div>
            <div className='bg-white p-6  rounded-lg'>
                <div className="overflow-x-auto">
                    <table className="table border border- w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Images</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Criteria</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services?.map((service, index) => <tr key={service._id}>
                                    <th>{index + 1}</th>
                                    
                                    <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
                                                <img src={service?.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>  
                                    </td>
                                    <td>{service.name}</td>
                                    <td>${service.price}</td>
                                    <td>
                                        <label
                                            onClick={()=>setRemoveService(service?._id)}
                                            htmlFor="removeServiceModal"
                                            className='bg-[#251D58] cursor-pointer rounded-lg text-white px-3 py-[5px]'
                                            >Remove
                                        </label>
                                    </td>
                                </tr>)
                            }

                            {
                                removeService && <RemoveServiceModal
                                    setRemoveService={setRemoveService}
                                    removeService={removeService}
                                    refetch={refetch}
                                >
                                </RemoveServiceModal>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ManageService;