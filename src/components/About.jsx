import React from 'react'
import { NavLink } from 'react-router-dom'
import HtmlIcon from '../assets/html5-logo.png'
import CssIcon from '../assets/css3-logo.png'
import TailwindIcon from '../assets/tailwindcss.svg'
import JsIcon from '../assets/js-logo.png'
import ReactIcon from '../assets/react-logo.png'
import NodeIcon from '../assets/node_icon.png'
import PythonIcon from '../assets/python_icon.png'
import PyNodeIcon from '../assets/html5-logo.png'
import MongodbIcon from '../assets/mongodb_icon.png'
import FigmaIcon from '../assets/figma.png'
import SpaIcon from '../assets/spa-icon.png'
import FrIcon from '../assets/fr-icon.png'
import EnIcon from '../assets/en-icon.png'

const About = () => {
    const stars = (num) => {
        return Array.from({ length: num }, (_, index) => (
            <img
                src="../assets/star-icon.png"
                alt="star" key={index}
                className='w-[12px] '
            />
        ));
    };

    return (
        <div className='pt-12 px-3 space-y-20 '>
            <section className='space-y-6'>
                <p className=''>About me:</p>
                <div className='space-y-4 p-4 bg-black bg-opacity-45 rounded-lg text-xl'>
                    <p>I learned web development self-taught, and now I continue my education at the Next Business School,
                        pursuing an online master's degree in Big Data and Business Intelligence. </p>
                    <p> I love challenges, and one of them was working in the Netherlands and Belgium, where I learned
                        to navigate in English, in addition to discovering my passion for exploring other cultures.</p>
                    <p>I enjoy road trips, boxing, and algorithmic trading, which has led me to the exciting project I
                        dedicate my free time to: <NavLink to='/projects/signal station' className='text-orange-600'>Signal Station</NavLink></p>
                </div>
            </section>

            <section className='space-y-8'>
                <p className=''>My skills:</p>
                <div className='flex flex-wrap justify-start text-xl p-4 bg-black bg-opacity-45 rounded-lg'>
                    <section className='space-y-1 w-1/2 sm:w-1/4 pb-10'>
                        <h1 className='text-center text-sm pb-3 underline'>Frontend</h1>
                        <section className='flex  items-center gap-1'>
                            <img src={HtmlIcon} alt="" className='w-5' />
                            <p>HTML5 </p>
                        </section>
                        <section className='flex  items-center gap-1'>
                            <img src={CssIcon} alt="" className='w-5' />
                            <p>CSS3 </p>
                        </section>
                        <section className='flex  items-center gap-1'>
                            <img src={TailwindIcon} alt="" className='w-5' />
                            <p>TailwindCss </p>
                        </section>
                        <section className='flex  items-center gap-1'>
                            <img src={JsIcon} alt="" className='w-5' />
                            <p>Javascript </p>
                        </section>
                        <section className='flex  items-center gap-1'>
                            <img src={ReactIcon} alt="" className='w-5' />
                            <p>React </p>
                        </section>
                    </section>

                    <section className='space-y-1 w-1/2 sm:w-1/4 pb-10'>
                        <h1 className='text-center text-sm pb-3 underline'>Backend</h1>
                        <section className='flex  items-center gap-1'>
                            <img src={JsIcon} alt="" className='w-5' />
                            <p>Javascript </p>
                        </section>
                        <section className='flex  items-center gap-1'>
                            <img src={NodeIcon} alt="" className='w-5' />
                            <p>Node.js </p>
                        </section>
                        <section className='flex  items-center gap-1'>
                            <img src={PythonIcon} alt="" className='w-5' />
                            <p>Python </p>
                        </section>
                        <section className='flex  items-center gap-1'>
                            <img src={MongodbIcon} alt="" className='w-5' />
                            <p>MongoDB </p>
                        </section>
                    </section>

                    <section className='space-y-1 w-1/2 sm:w-1/4 pb-10'>
                        <h1 className='text-center text-sm pb-3 underline'>Others</h1>
                        <section className='flex  items-center gap-1'>
                            <img src={FigmaIcon} alt="" className='w-5' />
                            <p>Git </p>
                        </section>
                        <section className='flex  items-center gap-1'>
                            <img src={PyNodeIcon} alt="" className='w-5' />
                            <p>GitHub </p>
                        </section>
                        <section className='flex  items-center gap-1'>
                            <img src={FigmaIcon} alt="" className='w-5' />
                            <p>Figma </p>
                        </section>
                    </section>

                    <section className='space-y-1 w-1/2 sm:w-1/4 pb-10'>
                        <h1 className='text-center text-sm pb-3 underline'>Languages</h1>
                        <section className='flex items-center gap-1'>
                            <img src={SpaIcon} alt="" className='w-5' />
                            <p>Spanish </p>
                        </section>
                        <section className='flex items-center gap-1'>
                            <img src={FrIcon} alt="" className='w-5' />
                            <p>French </p>
                        </section>
                        <section className='flex items-center gap-1'>
                            <img src={EnIcon} alt="" className='w-5' />
                            <p>English </p>
                        </section>
                    </section>
                </div>
            </section>

        </div>
    )
}


export default About
