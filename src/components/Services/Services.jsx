import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    AOS.init();

    const [services, setServices] = useState([])
    console.log(services);

    useEffect(() => {
        fetch('https://ultra-net-server-zeta.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-2 px-10'>
                <div data-aos="fade-right">
                    <p className='bg-purple-600 mr-[80%] p-1 text-center rounded text-white'>What We Offer</p>
                    <h1 className='text-4xl'>We are Professional Internet Service Provider.</h1>
                </div>
                <div data-aos="fade-left">
                    <p className='text-justify'>Efficiently simplify high-payoff communities whereas revolutionary innovation. Monotonectally maximize real-time best practices before superior quality vectors. Interactively supply dynamic.</p>
                    <button className="btn btn-warning hover:btn hover:px-10 rounded hover:rounded mt-10 px-10">Learn More</button>
                </div>

            </div>
            <div className='md:mx-48 md:my-20  lg:mx-20 lg:my-20 mx-28 my-20'>
                <div className='grid lg:grid-cols-3 gap-5'>

                    {
                        services.map(service => <ServicesCard
                            key={service._id}
                            service={service}
                        ></ServicesCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Services;