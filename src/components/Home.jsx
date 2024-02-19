import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <section id='home' className='flex flex-col items-center mx-auto space-y-8 
            min-h-[92vh]'>
            <img src="../../public/Photo.png" alt="" className='pt-20 ' />
            <div className=' text-center space-y-2 text-3xl '>
                <p>Hi, I'm Yannick</p>
                <p>I'm a self-taugth fullstack developer</p>
            </div>
            <div className='flex gap-3 text-sm'>
                <NavLink to='/About' className='border rounded p-1'>About me</NavLink>
                <NavLink to='/Projects' className='border rounded p-1'>My projects</NavLink>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center'>
                <div className='flex items-center gap-1'>
                    <img src="../../public/whatsapp-icon.png" alt="" className='w-4 h-4' />
                    <p>+34 613 030 850</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src="../../public/email-icon.png" alt="" className='w-4 h-4' />
                    <p>Yannick9862@gmail.com</p>
                </div>
            </div>
        </section>

    )
}

export default Home
