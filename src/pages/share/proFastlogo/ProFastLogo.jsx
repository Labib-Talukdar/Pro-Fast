import React from 'react';
import logo from '../../../assets/logo.png'

const ProFastLogo = () => {
    return (
        <div className='flex items-end'>
            <img className='mb-2' src={logo}></img>
            <p className='text-3xl -ml-4'>ProFast</p>
        </div>
    );
};

export default ProFastLogo;