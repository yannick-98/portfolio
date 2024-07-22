import React from 'react';
import Slider from 'react-slick';
import './Slider.css'

const SliderComponent = ({ items }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Pantallas medianas (tablets)
                settings: {
                    slidesToShow: 1, // Mostrar 2 diapositivas
                    slidesToScroll: 1
                }
            },
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {items.map(item => (
                    <div key={item.id} className="slide">
                        <img src={item.src} alt={item.alt} className="slide-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SliderComponent
