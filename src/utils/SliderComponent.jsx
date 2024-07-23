import React from 'react';
import Slider from 'react-slick';
import './Slider.css'

const SliderComponent = ({ items, itemsNum }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: itemsNum || 1,
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
        <div className="slider-container w-full max-w-[700px]">
            <Slider {...settings}>
                {items.map(item => (
                    <div key={item.id} className="slide w-full">
                        <img src={item.src} alt={item.alt} className="mx-auto w-full h-full" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SliderComponent
