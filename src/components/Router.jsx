import React from 'react'
import Navegador from './Navegador'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Project from './Project'
import SignalStation from './SignalStation'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const Router = () => {
    return (
        <BrowserRouter>
            <Navegador />
            <div className='pt-[8vh] w-full max-w-[1000px] mx-auto'>
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Projects/*" element={<Projects />} />
                    <Route path="/Projects/Signal Station" element={<SignalStation />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Router