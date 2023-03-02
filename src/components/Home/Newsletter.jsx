import React from 'react';
import { FaMailBulk } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import img from '../../assets/gift.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Newsletter = () => {
    AOS.init();
    return (
        <div className=' grid grid-cols-2 p-20 rounded bg-center bg-cover bg-fixed' style={{ backgroundImage: `url(${img})` }}>
            <div data-aos="fade-right">
                <div className='mb-5'>
                    <h3 className='text-2xl font-bold text-white'>Get exclusive deals by signing up to our <br /> Newsletter.</h3>
                </div>
                <div>
                    <input type="text" placeholder="Email" className="input input-bordered w-1/2 rounded-full" />
                    <button className="btn btn-warning hover:btn hover:rounded-full rounded-full ml-10">sign up</button>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-5 my-3 mr-3'>
                <div className='flex items-center gap-4 text-white border p-2' data-aos="fade-down">
                    <div className='text-6xl'>
                        <FaMailBulk />
                    </div>
                    <div>
                        <p className='uppercase text-md'>sales support</p>
                        <p className='text-2xl font-bold'>1205-888-123</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 text-white border p-2' data-aos="fade-up">
                    <div className='text-6xl'>
                        <BiSupport />
                    </div>
                    <div>
                        <p className='uppercase text-md'>call center</p>
                        <p className='text-2xl font-bold'>1205-888-123</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;