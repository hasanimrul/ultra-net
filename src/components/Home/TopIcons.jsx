import React from 'react';
import wifi from '../../assets/wifil.gif'
import signal from '../../assets/signal-strength.gif'
import device from '../../assets/devices.gif'
import speed from '../../assets/speed-meter.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TopIcons = () => {
    AOS.init();
    return (
        <div className='my-16'>
            <h2 className='text-5xl text-center font-bold font-serif' data-aos="fade-down">We are Internet Service <br />Provider company</h2>
            <div className='text-center mt-5 text-gray-400'>
                <p>Progressively harness innovative synergy via impactful models. <br />Progressively conceptualize  robust solutions before economically sound users.</p>
            </div>
            <div className='flex justify-center gap-10 my-20'>
                <div className='flex flex-col items-center gap-3 text-3xl' data-aos="zoom-in-up">
                    <img src={wifi} alt='wifi' className='w-1/3' />
                    <h3 >Wifi seamless</h3>
                    <p className='text-sm text-center'>Energistically exploit seamless collaboration and idea-sharing before stand-alone process.</p>
                </div>
                <div className='flex flex-col items-center gap-3 text-3xl' data-aos="zoom-in-up">
                    <img src={signal} alt='wifi' className='w-1/3' />
                    <h3 >Reliable connection</h3>
                    <p className='text-sm text-center'>Conveniently deploy ethical processes through fully researched users. Dynamically.</p>
                </div>
                <div className='flex flex-col items-center gap-3 text-3xl' data-aos="zoom-in-up">
                    <img src={device} alt='wifi' className='w-1/3' />
                    <h3 >Protect your devices</h3>
                    <p className='text-sm text-center'>Uniquely implement empowered intellectual capital rather than standards compliant processes.</p>
                </div>
                <div className='flex flex-col items-center gap-3 text-3xl' data-aos="zoom-in-up">
                    <img src={speed} alt='wifi' className='w-1/3' />
                    <h3 >Download 1Gbps</h3>
                    <p className='text-sm text-center'>Efficiently enhance functional quality vectors through interactive leadership skills.</p>
                </div>
            </div>
        </div>
    );
};

export default TopIcons;