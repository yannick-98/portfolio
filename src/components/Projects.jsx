import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Projects = () => {
    const ProjectCard = ({ title, description }) => {
        const [miDiv, setMiDiv] = useState(false);

        const handleMouseOver = () => {
            setMiDiv(true);
        };

        const handleMouseOut = () => {
            setMiDiv(false);
        };


        return (
            <div id={title}
                className="w-80 h-44 border-2 p-1 border-zinc-500 rounded "
                onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

                <div className="flex items-center justify-center text-center w-full h-full bg-black bg-opacity-10 ">
                    {miDiv ? (
                        <div className='flex flex-col items-center'>
                            <p className="text-white text-sm mb-3">{description}</p>
                            <NavLink to={`/Projects/${title}`} className='text-xs underline '>Know more</NavLink>

                        </div>
                    ) : <>
                        <p className="text-white text-lg font-bold">{title}</p>
                    </>}
                </div>
            </div>
        );
    };

    return (
        <div className='flex flex-col justify-center items-center mx-auto min-h-[92vh] py-12'>

            <div className='flex flex-wrap gap-5 justify-center '>
                <ProjectCard title="Signal Station" description="A market analysis software that generates personalized signals" />
                <ProjectCard title="Kaly" description="A personal agenda to organize both scheduled events and daily tasks and notes" />
                <ProjectCard title="Roomfinder" description="A room rental platform where you can filter by areas, price and size" />
                <ProjectCard title="Emprenet" description="A social network designed for entrepreneurs to share their business ideas" />
                <ProjectCard title="OrdersNow" description="A small order CRM to speed up work for small businesses" />
                <ProjectCard title="Blog" description="My personal blog, where I share my ideas, projects and curiosities" />
            </div>
        </div>
    )
}




export default Projects
