import React from 'react';
import '../styles/Navbar.css';
import { searchIcon } from '../svg/svg'; 
import data from '../data';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <div>
                <div className='logodiv'>
                    <a href="/">
                        <img src={data.logo} alt="" id="logoimg" />
                    </a>

                </div>
            </div>

            <div >
                <a href="/miphone" className='navlinks'>Mi Phones</a>
                <a href="/redmiphones"className='navlinks'>Redmi Phones</a>
                <a href="/tv"className='navlinks'>TV</a>
                <a href="/laptops"className='navlinks'>Laptops</a>
                <a href="/fitness"className='navlinks'>Fitness & Lifestyle</a>
                <a href="/home"className='navlinks'>Home</a>
                <a href="/radio"className='navlinks'>Radio</a>
                <a href="/accessories"className='navlinks'>Accessories</a>
            </div>
            <div>
                <input type="text" name="search" id="search" placeholder='Search Product' />{searchIcon}
            </div>

        </div>
    )
}

export default Navbar
