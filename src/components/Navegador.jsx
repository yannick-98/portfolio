import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navegador = () => {
    const [menu, setMenu] = useState(false)

    return (
        <section id='nav1' className='flex items-center justify-between w-full h-[8vh] mx-auto gap-3 p-4 fixed top-0 
        bg-gradient-to-b from-black via-black to-transparent text-white text-xl '>
            <NavLink to="/Home">
                <i>Yannick Castaño</i>
            </NavLink>

            <div>
                <div className=' justify-center gap-8 items-center text-lg hidden sm:flex'>
                    <NavLink to="/Home" className={({ isActive }) => (isActive ? "text-orange-600" : "")}>
                        <i className=''>{'< Home >'}</i>
                    </NavLink>
                    <NavLink to="/About" className={({ isActive }) => (isActive ? "text-orange-600" : "")}>
                        <i className=''>{'< About >'}</i>
                    </NavLink>
                    <NavLink to="/Projects" className={({ isActive }) => (isActive ? "text-orange-600" : "")}>
                        <i className=''>{'< Projects >'}</i>
                    </NavLink>
                </div>

                <button onClick={() => setMenu(!menu)} className='flex sm:hidden'>
                    <i className='fa fa-bars'></i>
                </button>
            </div>

            {menu &&
                <div className='bg-black w-screen h-screen fixed top-0 right-0 flex flex-col items-center justify-between py-6 px-2'>
                    <div className='w-full text-start flex items-center justify-between px-2'>
                        <NavLink to="/Home" onClick={() => setMenu(!menu)}>
                            <i>Yannick Castaño</i>
                        </NavLink>                        <button onClick={() => setMenu(!menu)} className='flex sm:hidden'>
                            <i className='fa fa-bars'></i>
                        </button>
                    </div>

                    <div className='flex items-stretch'>
                        <div className='flex flex-col mx-4 gap-8 h-36 text-3xl'>
                            <NavLink onClick={() => setMenu(!menu)} to="/Home" className={({ isActive }) => (isActive ? "text-orange-600" : "")}>
                                <i className=''>{'< Home />'}</i>
                            </NavLink>
                            <NavLink onClick={() => setMenu(!menu)} to="/About" className={({ isActive }) => (isActive ? "text-orange-600" : "")}>
                                <i className=''>{'< About />'}</i>
                            </NavLink>
                            <NavLink onClick={() => setMenu(!menu)} to="/Projects" className={({ isActive }) => (isActive ? "text-orange-600" : "")}>
                                <i className=''>{'< Projects />'}</i>
                            </NavLink>
                        </div>
                    </div>

                    <div className=''>
                        <button onClick={() => setMenu(!menu)}>
                            <i className='fa fa-times'></i>
                        </button>
                    </div>
                </div>
            }
        </section>
    )
}

export default Navegador
