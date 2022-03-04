import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a hre f="">
                    <img src="https://i.ibb.co/vD5YX9y/peque-o-logo.png" alt="Americatel" />
                </a>
            </div>
            <div className='header--user'>
                <a href="http://wa.me/51946324747">
                    <img src="https://i.postimg.cc/282mtmxy/PREUIBALO.png" alt="Usuario" />
                </a>
            </div>
        </header>
    )
}