import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({ start }) => {
    return (
        <div>
            <Carousel >
                {
                    start.map((x) => (
                        <Carousel.Item>
                            <img className="d-block w-100" src={x} alt="First slide"  />
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default Slider;
