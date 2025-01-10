import React from 'react';
import './NavbarFeedback.css';

function NavbarFeedback() {

    return ( 
        <div className='navbarFeedback'>
         <span className='productLogo'></span>
         <div className='rightNav'>
            <div className='dropdown1'>Learn <span className='dropdownImage'></span></div>
            <div className='dropdown2'>Practice <span className='dropdownImage'></span></div>
            <div className='profile'></div>
         </div>
        </div>
    );

}

export default NavbarFeedback;