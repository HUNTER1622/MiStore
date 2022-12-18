import React from 'react'
import '../styles/HotAccessoriesCard.css'

const HotAccessoriesCard = ({ name, price, image, index }) => {
    return (
        <div className='HotAccessoriesCard'>
            <img src={image} />
            <p>{name}</p>
            <span>{price}</span>
        </div>
    )
}

export default HotAccessoriesCard