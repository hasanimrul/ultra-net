import React from 'react';
import wifi from '../../assets/wifil.gif'
import signal from '../../assets/signal-strength.gif'
import device from '../../assets/devices.gif'
import speed from '../../assets/speed-meter.gif'

const TopIcons = () => {
    return (
        <div className='my-16'>
            <h2 className='text-5xl text-center font-bold font-serif'>We are Internet Service <br />Provider company</h2>
            <div className='text-center mt-5 text-gray-400'>
                <p>Progressively harness innovative synergy via impactful models. <br />Progressively conceptualize  robust solutions before economically sound users.</p>
            </div>
            <div className='flex justify-center gap-10 my-20'>
                <div className='flex flex-col items-center gap-3 text-3xl'>
                    <img src={wifi} alt='wifi' className='w-1/3' />
                    <h3 >Wifi seamless</h3>
                    <p className='text-sm text-center'>Uniquely implement empowered intellectual capital rather than standards compliant processes.</p>
                </div>
                <div className='flex flex-col items-center gap-3 text-3xl'>
                    <img src={signal} alt='wifi' className='w-1/3' />
                    <h3 >Reliable connection</h3>
                    <p className='text-sm text-center'>Uniquely implement empowered intellectual capital rather than standards compliant processes.</p>
                </div>
                <div className='flex flex-col items-center gap-3 text-3xl'>
                    <img src={device} alt='wifi' className='w-1/3' />
                    <h3 >Protect your devices</h3>
                    <p className='text-sm text-center'>Uniquely implement empowered intellectual capital rather than standards compliant processes.</p>
                </div>
                <div className='flex flex-col items-center gap-3 text-3xl'>
                    <img src={speed} alt='wifi' className='w-1/3' />
                    <h3 >Download 1Gbps</h3>
                    <p className='text-sm text-center'>Uniquely implement empowered intellectual capital rather than standards compliant processes.</p>
                </div>
            </div>
        </div>
    );
};

export default TopIcons;