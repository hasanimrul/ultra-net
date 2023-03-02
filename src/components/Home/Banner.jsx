import React from 'react';
import { AiOutlineWifi } from 'react-icons/ai';
import img from '../../assets/internet.jpg'


const Banner = () => {
    return (
        <div className='bg-cover bg-top pt-32 pb-14' style={{ backgroundImage: `url(${img})` }}>
            <div className='ml-16'>
                <p className='flex items-center gap-3'><AiOutlineWifi className='text-purple-900 text-xl' />Welcome to UltraNet</p>
                <h3 className=' text-left text-5xl font-bold leading-normal' >Connect Faster And <br /> Easier With <span className='text-purple-900'>Ultra</span>Net.</h3>
            </div>
            <div className='ml-28 mt-36'>
                <h3 className=' text-left text-xl '>GET A FASTER FIBER DEAL FROM ONLY-</h3>
                <h3 className='text-purple-800 text-left text-3xl  flex items-center gap-2 ml-10'>$<span className='text-5xl font-extrabold'>24.99</span>/month</h3>
            </div>
            <button className="btn btn-outline btn-primary rounded ml-56 mt-5 px-5">Get Started</button>

        </div >
    );
};

export default Banner;