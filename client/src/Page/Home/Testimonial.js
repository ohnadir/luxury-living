import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Reviews';

const Testimonial = () => {
    const { data:reviews , isLoading } = useQuery('reviews', () =>
        fetch('http://localhost:5000/reviews').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading/>
    } 
    return (
        <div className='bg-base-200 '>
            <div className='max-w-7xl mx-auto px-4 pb-[80px]'>
                <h1 className='pt-[80px] pb-[60px] text-center text-4xl font font-bold'>Testimonial</h1>
                <div className='grid gap-5 grid-cols-3'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                   }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;