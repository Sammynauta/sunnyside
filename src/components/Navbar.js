import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import Arrow from '../assets/icon-arrow-down.svg';
import '../styles/navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);
    const openClose = () => setClick(!click);

    return (
        <div className='header'>
            <div className='navbar'>
                <div className='ladoesquerdo'>
                    <img src={Logo} className='logo' alt='logo' />
                </div>
                <div className='ladodireito'>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a>About</a>
                        </li>
                        <li className='nav-item'>
                            <a>Services</a>
                        </li>
                        <li className='nav-item'>
                            <a>Projects</a>
                        </li>
                        <li className='nav-item'>
                            <a>Contact</a>
                        </li>
                    </ul>

                    <div className='menu-icon' onClick={openClose}>
                        <i className={click ? ' fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
            </div>

            <div className='title'>
                <span>WE ARE CREATIVES</span>
                <img src={Arrow} className='arrow' alt='setinha' />
            </div>
        </div>
    )
}

export default Navbar;