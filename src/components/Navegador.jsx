import React from 'react'
import { NavLink } from 'react-router-dom'

const Navegador = () => {
    return (
        <section id='nav1' className='flex items-center justify-center w-full h-[8vh] mx-auto gap-3 p-4 fixed top-0 
        bg-gradient-to-b from-black via-black to-transparent text-white text-xl '>

            <div className='flex justify-center gap-8 w-full max-w-[1000px] items-center '>
                <NavLink to="/Home" className={({ isActive }) => (isActive ? "text-orange-600" : "")}>Home</NavLink>
                <NavLink to="/About" className={({ isActive }) => (isActive ? "text-orange-600" : "")}>About</NavLink>
                <NavLink to="/Projects" className={({ isActive }) => (isActive ? "text-orange-600" : "")}>Projects</NavLink>
            </div>
        </section>
    )
}

export default Navegador
