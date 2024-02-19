import React from 'react'
import { NavLink } from 'react-router-dom'


const About = () => {
    const stars = (num) => {
        return Array.from({ length: num }, (_, index) => (
            <img
                src="/src/img/star-icon.png"
                alt="star" key={index}
                className='w-[12px] '
            />
        ));
    };

    return (
        <div className='pt-12 px-3 space-y-20 '>
            <section className='space-y-6'>
                <p className=''>About me:</p>
                <div className='space-y-4 p-4 bg-black bg-opacity-45 rounded-lg text-lg'>
                    <p>I learned web development self-taught, and now I continue my education at the Next Business School,
                        pursuing a master's degree in Big Data and Business Intelligence. </p>
                    <p> I love challenges, and one of them was working in the Netherlands and Belgium, where I learned
                        to navigate in English, in addition to discovering my passion for exploring other cultures.</p>
                    <p>I enjoy road trips, boxing, and algorithmic trading, which has led me to the exciting project I
                        dedicate my free time to: <NavLink to='/projects/signal station' className='text-orange-600'>Signal Station</NavLink></p>
                </div>
            </section>

            <section className='space-y-8'>
                <p className=''>My skills:</p>
                <div className='flex flex-wrap justify-start text-lg p-4 bg-black bg-opacity-45 rounded-lg'>
                    <section className='space-y-1 w-1/2 sm:w-1/4 pb-10'>
                        <h1 className='text-center text-sm pb-3 underline'>Frontend</h1>
                        <section className='flex  items-center gap-1'>
                            <img src="/src/img/html5-logo.png" alt="" className='w-5' />
                            <p>HTML5 </p>
                        </section>
                        <section className='flex  items-center gap-1'>
                            <img src="/src/img/css3-logo.png" alt="" className='w-5' />
                            <p>CSS3 </p>
                        </section>
                        <section className='flex  items-center gap-1'>
                            <img src="/src/img/tailwindcss.svg" alt="" className='w-5' />
                            <p>TailwindCss </p>
                        </section>
                        <section className='flex  items-center gap-1'>
                            <img src="/src/img/js-logo.png" alt="" className='w-5' />
                            <p>Javascript </p>
                        </section>
                        <section className='flex  items-center gap-1'>
                            <img src="/src/img/react-logo.png" alt="" className='w-5' />
                            <p>React </p>
                        </section>
                    </section>

                    <section className='space-y-1 w-1/2 sm:w-1/4 pb-10'>
                        <h1 className='text-center text-sm pb-3 underline'>Backend</h1>
                        <section className='flex  items-center gap-1'>
                            <img src="/src/img/node_icon.png" alt="" className='w-5' />
                            <p>Node.js </p>
                        </section>
                        <section className='flex  items-center gap-1'>
                            <img src="/src/img/python_icon.png" alt="" className='w-5' />
                            <p>Python </p>
                        </section>
                        <section className='flex  items-center gap-1'>
                            <img src="/src/img/html5-logo.png" alt="" className='w-5' />
                            <p>PyNode </p>
                        </section>
                        <section className='flex  items-center gap-1'>
                            <img src="/src/img/mongodb_icon.png" alt="" className='w-5' />
                            <p>MongoDB </p>
                        </section>
                    </section>

                    <section className='space-y-1 w-1/2 sm:w-1/4 pb-10'>
                        <h1 className='text-center text-sm pb-3 underline'>Design</h1>
                        <section className='flex  items-center gap-1'>
                            <img src="/src/img/figma.png" alt="" className='w-5' />
                            <p>Figma </p>
                        </section>
                        <section className='flex  items-center gap-1'>
                            <img src="/src/img/python_icon.png" alt="" className='w-5' />
                            <p>Adobe </p>
                        </section>
                    </section>

                    <section className='space-y-1 w-1/2 sm:w-1/4 pb-10'>
                        <h1 className='text-center text-sm pb-3 underline'>Languages</h1>
                        <section className='flex items-center gap-1'>
                            <img src="/src/img/spa-icon.png" alt="" className='w-5' />
                            <p>Spanish </p>
                        </section>
                        <section className='flex items-center gap-1'>
                            <img src="/src/img/fr-icon.png" alt="" className='w-5' />
                            <p>French </p>
                        </section>
                        <section className='flex items-center gap-1'>
                            <img src="/src/img/en-icon.png" alt="" className='w-5' />
                            <p>English </p>
                        </section>
                    </section>
                </div>
            </section>

        </div>
    )
}


export default About
