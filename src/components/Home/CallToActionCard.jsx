import React from 'react';
import img1 from '../../assets/cloud-wifi.gif'
import img2 from '../../assets/smart-tv.gif'
import img3 from '../../assets/voip-coverage.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';

const CallToActionCard = () => {
    AOS.init();
    return (
        <div className='mb-28'>
            <div className='grid grid-cols-3 gap-5 -mt-36 mx-10'>
                <div className="card  bg-base-100 shadow-xl pb-5" data-aos="zoom-in-up">
                    <div className="flex flex-col justify-center items-center">
                        <img src={img1} alt='wifi' className='w-1/2' />
                        <h2 className="card-title">Internet</h2>
                        <p className='text-center mx-2'>Distinctively repurpose principle-centered metrics for distinctive niche markets.  process-centric metrics vis-a-vis wireless methods.</p>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl pb-5" data-aos="zoom-in-up">
                    <div className="flex flex-col justify-center items-center">
                        <img src={img2} alt='wifi' className='w-1/2' />
                        <h2 className="card-title">Satelite TV</h2>
                        <p className='text-center mx-2'>Proactively incentivize future-proof alignments with tactical catalysts for change. Efficiently utilize strategic benefits for bleeding-edge.</p>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl pb-5" data-aos="zoom-in-up">
                    <div className="flex flex-col justify-center items-center">
                        <img src={img3} alt='wifi' className='w-1/2' />
                        <h2 className="card-title">VOIP</h2>
                        <p className='text-center mx-2'>Appropriately maintain team building e-services before real-time methods of empowerment. Uniquely maintain long-term high-impact users after.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToActionCard;