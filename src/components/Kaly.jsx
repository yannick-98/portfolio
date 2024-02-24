import React from 'react'
import { NavLink } from 'react-router-dom'
import Kalyimg from '../assets/Kaly.png'

const Kaly = () => {
    return (
        <div className='p-8 space-y-12'>
            <section className='flex flex-col items-center'>
                <NavLink to={'/Projects'} className='w-full text-xl items-start underline'>
                    <i className='fas fa-arrow-alt-circle-left'></i>
                </NavLink>
                <p className='text-2xl pb-4'>Kaly</p>
                <div className='lg:flex md:gap-3'>
                    <img src={Kalyimg} alt="" className=' rounded w-auto max-w-[600px] h-auto mx-auto ' />
                    <div className='flex flex-col justify-between'>
                        <div className='space-y-3 text-xl pt-4'>
                            <p className='text-sm text-slate-300'>Frontend: </p>
                            <p>HTML, CSS, JavaScript, React, Tailwindcss</p>
                            <p className='text-sm text-slate-300'>Backend: </p>
                            <p>JavaScript, NodeJS, Express.js</p>
                            <p className='text-sm text-slate-300'>Database: </p>
                            <p>MongoDB</p>
                            <p className='text-sm text-slate-300'>Hosting: </p>
                            <p>Heroku, Netlify</p>
                        </div>
                    </div>
                </div>
                <NavLink to={'https://kalyapp.netlify.app/'} target="_blank" className='mt-12 bg-orange-700 
                            border-2 border-black rounded-lg mx-auto p-2 text-sm text-center '
                >Go to website
                </NavLink>
            </section>
            <section className='space-y-4 text-xl'>
                <p>This website is a personal organizer that allows you to plan events, tasks, and daily notes.</p>
                <p></p>
            </section>
        </div>
    )
}

export default Kaly
