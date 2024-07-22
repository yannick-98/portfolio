import React from 'react'
import pizzaPlot from '../assets/Distribucion_Tipo_Vivienda_Pizza.png'
import municipiosPlot from '../assets/Distribucion_Top10_Municipios.png'
import metrosPlot from '../assets/Distribucion_Metros.png'
import habitacionesPlot from '../assets/Distribucion_Habitaciones.png'
import garajeAscensorExteriorPlot from '../assets/Distribucion_Garaje_Ascensor_Exterior.png'
import metrosPrecioPlot from '../assets/Relacion_Metros_Precio.png'
import heatmap from '../assets/Heatmap.png'
import SliderComponent from '../utils/SliderComponent.jsx'

const Info = () => {
    return (
        <div id='Info' className='w-full bg-[rgb(01,50,78)] text-white'>
            <div className='w-full max-w-[1500px] mx-auto p-8 space-y-16'>
                <h2 className='text-2xl font-bold text-center'>About this project</h2>

                <div className='flex flex-col gap-6 text-lg'>
                    <p>This project is a simple prediction model to estimate the selling price range of a house in the city of Valencia. The model is built in python using a decision tree algorithm with a dataset containing 1,734 examples of properties listed on idealista.com.</p>
                    <p>The frontend is developed with React.js and TailwindCSS, and the model is integrated into a backend created with Django. The data was extracted from the web using Octoparse.</p>
                </div>

                <SliderComponent items={images} />

                <img src={heatmap} alt='Heatmap' className='w-full max-w-[800px] mx-auto p-4' />
            </div>
        </div>
    )
}

const images = [
    {
        src: pizzaPlot,
        alt: 'Distribución de tipo de vivienda en Valencia'
    },
    {
        src: municipiosPlot,
        alt: 'Distribución de los 10 municipios con más viviendas en Valencia'
    },
    {
        src: metrosPlot,
        alt: 'Distribución de los metros cuadrados de las viviendas en Valencia'
    },
    {
        src: habitacionesPlot,
        alt: 'Distribución del número de habitaciones en las viviendas en Valencia'
    },
    {
        src: garajeAscensorExteriorPlot,
        alt: 'Distribución de las viviendas con garaje, ascensor y exterior en Valencia'
    },
    {
        src: metrosPrecioPlot,
        alt: 'Relación entre los metros cuadrados y el precio de las viviendas en Valencia'
    }
]

export default Info
