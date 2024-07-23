import React, { useState, useEffect } from 'react'
import Home from '../components/Home'
import Nav from '../components/Nav'
import About from '../components/About'
import Contact from '../components/Contact'
import Work from '../components/Work'
import Map from '../components/Map'
import backgroundImage from '../assets/web-3706563_1920.jpg'

const Index = () => {
    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        fontFamily: 'Ubuntu'
    };

    const [showNav, setShowNav] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // Scroll hacia abajo
            setShowNav(false);
        } else {
            // Scroll hacia arriba
            setShowNav(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className='w-full text-white scroll-smooth ' style={divStyle} >
            {showNav && <Nav />}
            <div className='w-full flex flex-col items-center'>
                <Home />
                <Work />
                <About />
                <Map />
                <Contact />
            </div>
        </div>
    )
}

export default Index
