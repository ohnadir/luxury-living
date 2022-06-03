import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Service from './Service';

const Services = () => {

    const {data:services , isLoading, error } = useQuery('services', () =>
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

    if (error) return 'An error has occurred: ' + error.message
    
    return (
        <div className='max-w-7xl mx-auto px-4 my-16'>
            
            <div>
                <h1 className='text-center text-xl'>Service</h1>
                <h1 className='text-[34px] font-bold text-center'>We're an agency tailored to all <br /> clients' needs that always delivers</h1>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-[80px]">
                    {
                        services?.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
                <div className='text-center'>
                    <button className='mt-[68px] bg-[#251D58] w-[170px] h-[50px]  text-white'>Explore more</button>
                </div>
            </div>
        </div>
    );
};

export default Services;