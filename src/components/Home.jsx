import React from 'react'
import { NavLink } from 'react-router-dom'
import EmailIcon from '../assets/email-icon.png'
import WhatsappIcon from '../assets/whatsapp-icon.png'

const Home = () => {
    return (
        <section id='home' className='flex flex-col items-center justify-center mx-auto gap-12 
            min-h-[92vh]'>
            <div className=' text-center space-y-6 text-4xl '>
                <p>{"Hi, I'm Yannick :)"}</p>
                <p>I'm a self-taugth fullstack developer</p>
            </div>
            <div className='flex gap-3 text-lg'>
                <NavLink to='/About' className='border rounded p-2 bg-black'>About me</NavLink>
                <NavLink to='/Projects' className='border rounded p-2 bg-black'>My projects</NavLink>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center'>
                <div className='flex items-center gap-1'>
                    <img src={WhatsappIcon} alt="" className='w-4 h-4' />
                    <p>+34 613 030 850</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={EmailIcon} alt="" className='w-4 h-4' />
                    <p>Yannick9862@gmail.com</p>
                </div>
            </div>
        </section>

    )
}

export default Home
