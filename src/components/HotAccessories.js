import React from 'react'
import HotAccessoriesCard from '../components/HotAccessoriesCard.js'
import '../styles/HotAccessories.css'

const HotAccessories = ({ music, musicCover, smartDevice, smartDeviceCover, home, homeCover, lifestyles, lifeStylesCover, mobileAccessories, mobileAccessoriesCover }) => {
    return (
        <div className='hotaccessories'>
            <div>
                <img src={musicCover || smartDeviceCover || homeCover || lifeStylesCover || mobileAccessoriesCover}></img>
            </div>
            <div>
                {
                    music && music.map((item, index) => (
                        <HotAccessoriesCard key={item.Image} name={item.name} price={item.price} image={item.image} index={item.index} />
                    ))

                }
                {

                    smartDevice && smartDevice.map((item, index) => (
                        <HotAccessoriesCard key={item.Image} name={item.name} price={item.price} image={item.image} index={item.index} />
                    ))

                }
                {

                    home && home.map((item, index) => (
                        <HotAccessoriesCard key={item.Image} name={item.name} price={item.price} image={item.image} index={item.index} />
                    ))

                }
                {

                    lifestyles && lifestyles.map((item, index) => (
                        <HotAccessoriesCard key={item.Image} name={item.name} price={item.price} image={item.image} index={item.index} />
                    ))

                }
                {

                    mobileAccessories && mobileAccessories.map((item, index) => (
                        <HotAccessoriesCard key={item.Image} name={item.name} price={item.price} image={item.image} index={item.index} />
                    ))

                }
               
            </div>
        </div>
    )
}

export default HotAccessories