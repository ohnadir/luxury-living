import React, { useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Loading from './Shared/Loading';

const AllServices = () => {
    const [booking, setBooking] = useState(null);
    const {data:AllServices , isLoading} = useQuery('allServices', () =>
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
        <div className='max-w-7xl mx-auto px-4 my-16'>
            <div className='bg-white p-6  rounded-lg'>
                <div className="overflow-x-auto">
                    <table className="table border border- w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Images</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AllServices?.map((service, index) => <tr key={service._id}>
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
                                            onClick={()=>setBooking(service)}
                                            htmlFor="bookingModal"
                                            className='bg-slate-800 cursor-pointer rounded-lg text-white px-4 py-[9px]'
                                            >Booking
                                        </label>
                                    </td>
                                </tr>)
                            }

                            {
                                booking && <BookingModal
                                    setBooking={setBooking}
                                    booking={booking}
                                >
                                </BookingModal>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllServices;