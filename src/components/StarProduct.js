import React from 'react'
import '../styles/StarProduct.css'

const StarProduct = ({ StarProduct }) => {
    return (
        <div className='starproduct'>
            <div>
                <a href={StarProduct[0].url}><img className='p1' src={StarProduct[0].image}/></a>
            </div>
            <div>
                <a href={StarProduct[1].url}><img  src={StarProduct[1].image}/></a>
                <a href={StarProduct[2].url}><img src={StarProduct[2].image}/></a>
                <a href={StarProduct[3].url}><img src={StarProduct[3].image}/></a>
            </div>
        </div>
    )
}

export default StarProduct