import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import img from '../../assets/bg.jpg'

const CallToAction = () => {
    return (
        <div className='flex justify-between items-center px-20 pb-48 pt-16 bg-center bg-fixed bg-blend-darken' style={{ backgroundImage: `url(${img})` }}>
            <div>
                <h2 className='text-3xl font-bold text-white font-serif'>Call Us Now And Connect Ultranet <br />+123-234-1234</h2>
            </div>
            <div>
                <button className="btn btn-outline btn-warning">Check Coverage in Your Area <BsArrowRight /></button>
            </div>
        </div>
    );
};

export default CallToAction;