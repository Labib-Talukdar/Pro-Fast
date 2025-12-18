import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banarImag1 from '../../../assets/banner/banner1.png'
import banarImag2 from '../../../assets/banner/banner2.png'
import banarImag3 from '../../../assets/banner/banner3.png'


const Bannar = () => {
    return (
         <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img src={banarImag1} />
                    <p className="legend">Parcel Arrives</p>
                </div>
                <div>
                    <img src={banarImag2}/>
                    <p className="legend">Delivery</p>
                </div>
                <div>
                    <img src={banarImag3} />
                    <p className="legend">Few Minutes</p>
                </div>
            </Carousel>
    );
};

export default Bannar;