import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { Link } from 'react-router-dom';

const HeaderTop = () => {
    return (
        <div className='flex justify-between bg-base-100 mx-5 pt-6'>
            <div className='flex items-center gap-7'>
                <p className='flex items-center gap-2 '><FiPhoneCall className='text-purple-700' /><span>+622-120-002-852</span></p>
                <p className='flex items-center gap-2'><AiOutlineMail className='text-purple-700' /> <span>support@ultranet.com</span></p>
            </div>
            <div className='flex items-center gap-7'>
                <Link className='flex items-center gap-2 hover:text-yellow-500'><AiOutlineMobile className='text-purple-700' /><p to='#'>Download App</p></Link>
                <Link to='#' className='flex items-center gap-2 hover:text-yellow-500'><BiMap className='text-purple-700' /> <p >Coverage Area</p></Link>
            </div>

        </div>
    );
};

export default HeaderTop;