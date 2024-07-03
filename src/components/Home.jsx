import React from 'react'
import TypingEffect from '../efectos/typing'
import backgroundImage from 'C:/Users/USUARIO/Desktop/Programacion/web/projects/YAPP/src/assets/background.jpg'

const Home = () => {
    return (
        <div id='Home' className='w-full h-screen flex justify-center items-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='flex flex-col justify-center items-center text-center gap-20 w-full max-w-[900px]'>

                <div className='mx-3'>
                    <h1 className='text-6xl font-bold'>Yannick Castaño</h1>
                    <br />
                    <TypingEffect text='Daata Scientist | Web Developer | Business Intelligence' speed={100} />
                </div>

                <div className='flex flex-wrap justify-around w-full gap-4 '>
                    <section className='flex flex-col justify-center items-center w-1/4 gap-5 shadow-black shadow-lg
                     hover:bg-black hover:bg-opacity-10 hover:scale-105'>
                        <img src="/src/assets/icons8-analysis-50.png" alt="" className='w-14 ' />
                        <p className='xl:text-lg font-bold'>Data <br className='xl:hidden' /> Analytics</p>
                    </section>
                    <section className='flex flex-col justify-center items-center w-1/4 gap-5 shadow-black shadow-lg
                     hover:bg-black hover:bg-opacity-10 hover:scale-105'>
                        <img src="/src/assets/icons8-machine-learning-64.png" alt="" className='w-14 ' />
                        <p className='xl:text-lg font-bold'>Machine <br className='xl:hidden' /> Learning</p>
                    </section>
                    <section className='flex flex-col justify-center items-center w-1/4 gap-5 shadow-black shadow-lg
                     hover:bg-black hover:bg-opacity-10 hover:scale-105'>
                        <img src="/src/assets/icons8-web-64.png" alt="" className='w-14 ' />
                        <p className='xl:text-lg font-bold'>Web <br className='xl:hidden' /> Development</p>
                    </section>
                </div>

                <a href='#About' className='flex justify-center items-center w-24 h-12 bg-[rgb(40,50,78)] text-white 
                rounded-full shadow-lg hover:bg-white hover:text-[rgb(40,50,78)]'>
                    <p className='text-gray-400'>About me</p>
                </a>

            </div>
        </div>
    )
}



export default Home


