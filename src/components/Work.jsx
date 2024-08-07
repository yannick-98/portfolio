import React, { useState } from 'react'
import HousePriceImg from '../assets/housePrice.JPG'
import PowerBi1 from '../assets/powerbi1.JPG'
import PowerBi1_2 from '../assets/powerbi1(2).JPG'
import PowerBi1_3 from '../assets/powerbi1(3).JPG'
import PowerBi2 from '../assets/powerbi2.JPG'
import PowerBi2_2 from '../assets/powerbi2(2).JPG'
import PowerBi2_3 from '../assets/powerbi2(3).JPG'
import PowerBi2_4 from '../assets/powerbi2(4).JPG'
import PowerBi2_5 from '../assets/powerbi2(5).JPG'
import PowerBi3 from '../assets/powerbi3.JPG'
import Tableau1 from '../assets/tableau1.JPG'


const Work = () => {
    return (
        <div className=' bg-white bg-opacity-50 text-[rgb(40,50,78)] w-full p-8 sm:p-16'>
            <a id='Work' className='block relative top-[-60px] '></a>

            <section className='w-full max-w-[1500px] mx-auto space-y-12 '>
                <h2 className='text-3xl font-bold text-center'>Work</h2>

                <div className='flex flex-wrap justify-center items-center w-full gap-12'>
                    {tarjetas.map((tarjeta, index) => (
                        <Tarjeta key={index} {...tarjeta} />
                    ))}
                </div>
            </section>


        </div>
    )
}

const Tarjeta = ({ titulo, imagen, imagenes, enlace, plataforma }) => {
    const [selected, setSelected] = useState(false)
    const [imagenPrincipal, setImagenPrincipal] = useState(imagen)

    const handleClick = () => {
        setSelected(!selected)
        setImagenPrincipal(imagen)
    }
    const handleMouseOver = (imagen) => {
        setImagenPrincipal(imagen)
    }
    const imagesMenu = imagenes.map((imagen, index) => (
        <img key={index} src={imagen} alt="" className='h-16 hover:scale-105 border-2 border-black' onClick={() => handleMouseOver(imagen)} />
    ))
    const menu = imagenes.length > 0 ? true : false

    return (
        <div className={` ${selected ? ' w-full flex flex-col items-center justify-center ' : 'w-full md:w-auto hover:scale-105'}`}  >
            <div>
                <h3 className={`text-lg font-semibold`}>{titulo}</h3>
                <img src={selected ? imagenPrincipal : imagen} alt="" onClick={handleClick}
                    className={`  shadow-xl ${selected ? 'h-full max-h-[500px] ' : ' h-full md:max-h-60 '}`} />
            </div>

            {selected && menu &&
                <div className='flex flex-wrap gap-2 pt-6'>
                    {imagesMenu}
                </div>
            }

            {selected &&
                <div className='pt-6 hover:scale-105'>
                    <a href={enlace} target='_blank' className='bg-blue-400 text-white p-2 rounded-md'>
                        View on: {plataforma}</a>
                </div>
            }
        </div>
    )
}

const tarjetas = [
    {
        titulo: 'House Price Prediction',
        imagen: HousePriceImg,
        imagenes: [],
        plataforma: 'Web',
        enlace: '/house-price-prediction'
    },
    {
        titulo: 'S&P-500 Companies Analysis',
        imagen: PowerBi2,
        imagenes: [PowerBi2, PowerBi2_2, PowerBi2_3, PowerBi2_4, PowerBi2_5],
        plataforma: 'Power BI',
        enlace: 'https://app.powerbi.com/links/qpRc4PN_46?ctid=77821fee-81c2-49bb-95a7-97d5841419ef&pbi_source=linkShare'
    },
    {
        titulo: 'Sales & Profit Dashboard',
        imagen: PowerBi1,
        imagenes: [PowerBi1, PowerBi1_2, PowerBi1_3],
        plataforma: 'Power BI',
        enlace: 'https://app.powerbi.com/links/xP_CCvv_vz?ctid=77821fee-81c2-49bb-95a7-97d5841419ef&pbi_source=linkShare'
    },
    {
        titulo: 'Resumen ejecutivo - Rentabilidad',
        imagen: Tableau1,
        imagenes: [],
        plataforma: 'Tableau',
        enlace: 'https://public.tableau.com/views/Resumenejecutivo-Rentabilidad_17187491298320/Resumenejecutivo-Rentabilidad?:language=es-ES&:sid=&:display_count=n&:origin=viz_share_link'
    },
    {
        titulo: 'Sales by Gross Income Dashboard',
        imagen: PowerBi3,
        imagenes: [],
        plataforma: 'Power BI',
        enlace: 'https://app.powerbi.com/links/2mlF2_xtR3?ctid=77821fee-81c2-49bb-95a7-97d5841419ef&pbi_source=linkShare'
    }
]

export default Work
