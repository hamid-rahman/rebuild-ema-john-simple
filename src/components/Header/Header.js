import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <img src={logo} alt="" />
                <div className='list-item'>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;