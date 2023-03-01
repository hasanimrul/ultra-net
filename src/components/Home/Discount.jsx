import React from 'react';
import img from '../../assets/discount.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Discount = () => {
    AOS.init();
    return (
        <div style={{ backgroundImage: `url(${img})` }} className='mb-20 bg-cover grid grid-cols-2 bg-center bg-gradient-to-r from-cyan-500 to-blue-500 backdrop-brightness-50'>
            <div className=" backdrop-brightness-50">
                <div className='p-10 border border-dashed m-20'
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <p className='bg-purple-600 mr-[85%] text-center rounded text-white'>Promo</p>
                    <h2 className='text-4xl text-white font-bold mb-10'>Discount up to 30% <br /> for new members.</h2>
                    <p className='text-white'>Monotonectally seize customer directed paradigms after value-added e-commerce. Assertively target future-proof data.</p>
                    <button className="btn btn-warning mt-10 px-10">Get Started</button>
                </div>
            </div>
            <div className=" backdrop-brightness-50">

            </div>


        </div>
    );
};

export default Discount;