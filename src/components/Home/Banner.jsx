import React from 'react';
import img from '../../assets/internet.jpg'

const Banner = () => {
    return (
        <div className='bg-cover bg-center md:py-20' style={{ backgroundImage: `url(${img})` }}>
            <div className='ml-16'>
                <h3 className='text-white text-left text-5xl font-bold '>The Internet is Better <br /> When it’s Fast.</h3>
            </div>
            <div className='ml-28 pt-20'>
                <h3 className='text-white text-left text-xl '>GET A FASTER FIBER DEAL FROM ONLY-</h3>
                <h3 className='text-purple-400 text-left text-3xl  flex items-center gap-2'>$<span className='text-5xl font-extrabold'>24.99</span>/month</h3>
            </div>
            <button className="btn btn-outline btn-warning ml-48 mt-5 px-5">Get Started</button>

        </div >
    );
};

export default Banner;