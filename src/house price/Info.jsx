import React from 'react'

const Info = () => {
    return (
        <div id='Info' className='w-full bg-[rgb(01,50,78)] text-white'>
            <div className='w-full max-w-[1200px] mx-auto p-8 '>
                <h2 className='text-2xl font-bold mb-8'>About this project</h2>

                <div className='flex flex-col gap-6 text-lg'>
                    <p>This project is a simple prediction model to estimate the selling price range of a house in the city of Valencia. The model is built in python using a decision tree algorithm with a dataset containing 1,734 examples of properties listed on idealista.com.</p>
                    <p>The frontend is developed with React.js and TailwindCSS, and the model is integrated into a backend created with Django. The data was extracted from the web using Octoparse.</p>

                    <div className='flex flex-wrap justify-center'>
                        {images.map((image, index) => (
                            <img key={index} src={image.src} alt={image.alt} className='lg:w-1/2' />
                        ))}
                    </div>

                    <img src='/src/assets/Heatmap.png' alt='Valencia' className='w-full max-w-[800px] mx-auto p-4' />
                </div>
            </div>
        </div>
    )
}

const images = [
    {
        src: '/src/assets/Distribucion_Tipo_Vivienda_Pizza.png',
        alt: 'tipo'
    },
    {
        src: '/src/assets/Distribucion_Top10_Municipios.png',
        alt: 'Municpios'
    },
    {
        src: '/src/assets/Distribucion_Metros.png',
        alt: 'Metros'
    },
    {
        src: '/src/assets/Distribucion_Habitaciones.png',
        alt: 'Habitaciones'
    },
    {
        src: '/src/assets/Distribucion_Garaje_Ascensor_Exterior.png',
        alt: 'Garaje, ascensor, exterior'
    },
    {
        src: '/src/assets/Relacion_Metros_Precio.png',
        alt: 'Garaje, ascensor, exterior'
    }
]

export default Info
