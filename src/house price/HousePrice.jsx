import React, { useState } from 'react'
import valencia from '../assets/valencia.webp'
import back from '../assets/icons8-return-48.png'
import Selectores from './Selectores'
import pexels from '../assets/pexels-bg.jpg'
import Info from './Info'

const HousePrice = () => {
    const [infoOpen, setInfoOpen] = useState(false)
    const divStyle = {
        backgroundImage: `url(${pexels})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        fontFamily: 'Ubuntu'
    };

    const handleInfo = () => {
        setInfoOpen(!infoOpen)
    }


    return (
        <>
            <div className='min-h-screen h-full w-full scroll-smooth pb-4 flex flex-col ' style={divStyle}>
                <div style={{ backgroundImage: `url(${valencia})` }} className='bg-cover bg-center bg-no-repeat w-full h-[50vh]'>
                    <div className='w-full h-full bg-[rgb(01,50,78)] bg-opacity-70 flex flex-col justify-center items-center text-center'>
                        <a href='/' className='block absolute top-2 left-2 '>
                            <img src={back} alt="" className='w-6 h-6' />
                        </a>

                        <div className='space-y-1'>
                            <h2 className='text-4xl text-white font-bold'>House price prediction</h2>
                            <p className='text-white text-xl'>Predict the price of a house in Valencia</p>
                        </div>
                    </div>
                </div>

                <div className='w-11/12 h-full max-w-[800px] min-h-[350px] bg-[rgb(65,114,143)] -mt-28  mx-auto 
                    rounded-lg border-4 border-white text-start p-3'>
                    <Selectores />
                </div>
            </div>

            <Info />
        </>
    )
}

export default HousePrice
