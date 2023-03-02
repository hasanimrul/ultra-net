import React from 'react';

const Package = () => {
    return (
        <div className='grid grid-cols-3'>
            <div className='text-center'>
                <p>Basic</p>
                <h3 className='text-3xl font-bold'><span className='text-purple-900'>Broadband</span> Only</h3>
                <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 70 }}>70%</div>
            </div>
        </div>
    );
};

export default Package;