import React from 'react'
import Home from '../components/Home'
import Nav from '../components/Nav'
import About from '../components/About'
import Contact from '../components/Contact'
import Work from '../components/Work'
import Map from '../components/Map'
import backgroundImage from 'C:/Users/USUARIO/Desktop/Programacion/web/projects/YAPP/src/assets/web-3706563_1920.jpg'


const Index = () => {
    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        fontFamily: 'Ubuntu'
    };

    return (
        <div className='w-full text-white scroll-smooth ' style={divStyle} >
            <Nav />
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
