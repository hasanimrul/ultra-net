import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import img from '../../assets/hero.jpg'
import img2 from '../../assets/heroImage.jpg'
import img3 from '../../assets/wifi-activated.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';

const MiddleHero = () => {
    AOS.init();
    return (
        <div className=" bg-purple-100">
            <div className="grid grid-cols-2 flex-col lg:flex-row-reverse items-center p-14 ">
                <div className="text-center lg:text-left mr-5" data-aos="fade-right">
                    <h1 className="text-5xl font-bold mb-5 font-serif">Experience The Magic</h1>
                    <h1 className="text-5xl font-bold font-serif">Of Technology</h1>
                    <p className="py-6 text-justify mr-5 leading-7">Synergistically coordinate long-term high-impact action items with synergistic e-commerce. Conveniently envisioneer revolutionary niche markets whereas low-risk high-yield leadership. Compellingly benchmark magnetic growth strategies and out-of-the-box web-readiness. </p>

                    <div className='flex gap-14'>
                        <div>
                            <p className='flex items-center text-red-700 gap-2'><AiOutlineCheckCircle /><span className='text-black font-bold'>Donec bibendum erat non</span></p>
                            <p className='flex items-center text-red-700 gap-2'><AiOutlineCheckCircle /><span className='text-black font-bold'>Aenean tincidunt convallis</span></p>
                        </div>
                        <div>
                            <p className='flex items-center text-red-700 gap-2'><AiOutlineCheckCircle /><span className='text-black font-bold'>Donec bibendum erat non</span></p>
                            <p className='flex items-center text-red-700 gap-2'><AiOutlineCheckCircle /><span className='text-black font-bold'>Aenean tincidunt convallis</span></p>
                        </div>
                    </div>
                </div>
                <div className="" data-aos="fade-left">
                    <div style={{ backgroundImage: `url(${img})` }} className='rounded-lg h-96 relative'>
                        <img src={img3} className='rounded-full absolute w-1/5 -top-5 -right-5 shadow-2xl' alt='hero' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleHero;