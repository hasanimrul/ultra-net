import React from 'react';
import HeaderBottom from '../../components/Shared/HeaderBottom';
import HeaderTop from '../../components/Shared/HeaderTop';

const Header = () => {
    return (
        <div className='bg-white shadow'>
            <HeaderTop />
            <div className="divider mx-14"></div>
            <HeaderBottom />
        </div>
    );
};

export default Header;