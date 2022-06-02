import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Review = ({review}) => {
    const { img, name, designation, reviews, ratings, index } = review;
    
    return (
        <div>
            <div className=' p-5 bg-white'>
                <div className='flex gap-2 items-center mb-3'>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={img} className='w-[90px]' alt="" />
                        </div>
                    </div>
                    <div>
                        <p className='text-[20px] font-semibold'>{name}</p>
                        <p className='text-[16px] font-medium'>{designation}</p>
                    </div>
                </div>
                <p className='text-[#707070] text-[16px]'>{reviews}</p>
                <p className='pt-2'><Rating
                    initialRating={ratings}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                    readonly
                    ></Rating>
                </p>
            </div>
            
        </div>
    );
};

export default Review;
