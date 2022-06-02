import React from 'react';

const Response = () => {
    return (
        <div className='my-[80px]'>
            <h1 className='text-center font-bold mb-[6px]'>Contact</h1>
            <p className='text-3xl font-bold text-center mb-[80px]'>Let us handle your <br /> project, professionally.</p>
            <div className='w-[300px] sm:w-[500px] md:w-[600px] mx-auto '>
                <form action="" className='grid grid-cols-2 gap-[25px]'>
                    <input placeholder='First Name' className='bg-[#F1F3F6] py-[12px] px-3' type="text" />
                    <input placeholder='Last Name' className='bg-[#F1F3F6] py-[12px] px-3' type="text" />
                    <input placeholder='Email Address' className='bg-[#F1F3F6] py-[12px] px-3' type="text" />
                    <input placeholder='Phone Number' className='bg-[#F1F3F6] py-[12px] px-3' type="text" />
                    <textarea placeholder='Your Message' className='bg-[#F1F3F6] px-3 py-[16px] w-[300px] sm:w-[500px] md:w-[600px]' name="" id="" cols="30" rows="10"></textarea>
                </form>
                <div className='mt-[25px] mx-auto flex justify-center'>
                    <button className='bg-[#251D58] p-[13px] text-white rounded-md'>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Response;