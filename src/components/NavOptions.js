import React, { useState, useEffect } from 'react'
import NavCard from './NavCard.js'
import '../styles/NavOptions.css'

const NavOptions = ({ miPhones, redmiPhones, tv, laptops, fitnessAndLifestyles, home, audio, accessories }) => {

    const [miPhoneToggle, setMiPhoneToggle] = useState(false);
    const [redmiPhonesToggle, setRedmiPhonesToggle] = useState(false);
    const [tvToggle, setTvToggle] = useState(false);
    const [laptopsToggle, setLaptopsToggle] = useState(false);
    const [fitnessAndLifestylesToggle, setFitnessAndLifestylesToggle] = useState(false);
    const [homeToggle, setHomeToggle] = useState(false);
    const [audioToggle, setAudioToggle] = useState(false);
    const [accessoriesToggle, setAccessoriesToggle] = useState(false);

    useEffect(() => {

        if (window.location.pathname === '/miphone')
            setMiPhoneToggle(true);

        if (window.location.pathname === '/redmiphones')
            setRedmiPhonesToggle(true);

        if (window.location.pathname === '/tv')
            setTvToggle(true);

        if (window.location.pathname === '/laptops')
            setLaptopsToggle(true);

        if (window.location.pathname === '/fitness')
            setFitnessAndLifestylesToggle(true);

        if (window.location.pathname === '/home')
            setHomeToggle(true);

        if (window.location.pathname === '/radio')
            setAudioToggle(true);

        if (window.location.pathname === '/accessories')
            setAccessoriesToggle(true);

    }, [])

    return (
        <div className='navoptions'>
            {
                miPhoneToggle ? miPhones.map((item) => (
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />

                )) : null
            }
            {
                redmiPhonesToggle ? redmiPhones.map((item) => (
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />

                )) : null
            }
            {
                tvToggle ? tv.map((item) => (
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />


                )) : null
            }
            {
                laptopsToggle ? laptops.map((item) => (
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />


                )) : null
            }
            {
                fitnessAndLifestylesToggle ? fitnessAndLifestyles.map((item) => (
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />


                )) : null
            }
            {
                homeToggle ? home.map((item) => (
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />


                )) : null
            }
            {
                audioToggle ? audio.map((item) => (
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />

                )) : null
            }
            {
                accessoriesToggle ? accessories.map((item) => (
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />

                )) : null
            }

        </div>
    )
}

export default NavOptions