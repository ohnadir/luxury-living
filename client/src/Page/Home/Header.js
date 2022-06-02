import React from 'react';
import Banner from '../../assests/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png'

const Header = () => {
    return (
        <div className='bg-base-200'>
            <div className=" max-w-7xl mx-auto px-4 py-[80px]">
                <div className="flex flex-col gap-6 lg:flex-row-reverse justify-between items-center">
                    <img src={Banner} className=" md:max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold ">We Build  Your Dream</h1>
                        <p className="py-6">Online East Agency, the modern way to sell your own home,  You can use Griffin Residential to market your property</p>

                        <button type="button"
                            className='bg-[#251D58] text-white px-6 py-3 rounded-md'>
                            Booking
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;