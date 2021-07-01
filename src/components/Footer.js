import React from 'react';
import '../styles/Footer.css';
import Logo from '../assets/logo.svg';

function Footer() {
    return (
        <>
            <div className='cards-footer'>
                <div className='img-1'></div>
                <div className='img-2'></div>
                <div className='img-3'></div>
                <div className='img-4'></div>
            </div>

            <div className='Footer'>
                <img src={Logo} className='logo' alt='logo' />
                <div className='links'>
                    <span>About</span>
                    <span>Services</span>
                    <span>Projects</span>
                </div>

                <div className='icons'>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-pinterest"></i>
                </div>
            </div>
        </>
    )
}

export default Footer;