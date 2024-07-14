import React from 'react'
import '../app.css'

const Nav = () => {
    return (
        <section className='flex fixed w-full h-12 bg-color-blue z-50'>
            <nav className='flex justify-between items-center w-full shadow-sm font-mono font-bold ' role='navigation'>
                <div className=''>
                    <a href='#Home' className='p-3 md:p-4'>Home</a>
                    <a href='#Work' className='p-3 md:p-4'>Work</a>
                    <a href='#About' className='p-3 md:p-4'>About</a>
                    <a href='#Contact' className='p-3 md:p-4'>Contact</a>
                </div>
                <div className='w-full flex justify-end px-2'>
                    <a href="https:www.linkedin.com/in/yannick-castaño-david" target="_blank">
                        <img src="/src/assets/icons8-linkedin-50.png" alt="" className='w-5 md:w-6' />
                    </a>
                </div>
            </nav>
        </section>
    )
}

export default Nav
