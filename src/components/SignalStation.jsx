import React from 'react'
import { NavLink } from 'react-router-dom'

const SignalStation = () => {
    return (
        <div className='p-8 space-y-12'>
            <section className='flex flex-col items-center'>
                <NavLink to={'/Projects'} className='w-full text-xs items-start underline'>
                    Back
                </NavLink>
                <p className='text-2xl pb-4'>Signal Station</p>
                <div className='md:flex md:gap-3'>
                    <img src="/src/img/Desktop1.png" alt="" className='rounded w-full max-w-[600px] mx-auto ' />
                    <div className='flex flex-col justify-between'>
                        <div className='space-y-3'>
                            <p className='text-sm text-slate-300'>Frontend: </p>
                            <p>HTML, CSS, JavaScript, React, Tailwindcss</p>
                            <p className='text-sm text-slate-300'>Backend: </p>
                            <p>NodeJS, Python, PyNode </p>
                            <p className='text-sm text-slate-300'>Database: </p>
                            <p>MongoDB, Alpha Vantage API</p>
                        </div>
                        <NavLink className='mt-12 underline text-sm text-center '>Visit web</NavLink>
                    </div>
                </div>
            </section>
            <section className='space-y-4'>
                <p className='text-lg'>The goal of this project is to create a website that allows users to save time
                    analyzing market data. The website will provide real-time and historical data
                    from a variety of sources, as well as tools for automated tracking.</p>
                <p></p>
            </section>
        </div>
    )
}

export default SignalStation