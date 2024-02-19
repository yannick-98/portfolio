import React from 'react'
import { NavLink } from 'react-router-dom';
import desk from '../../public/Desktop1.png';
import { useState } from 'react';



const Projects = () => {
    const [project, setProject] = useState('')

    const ProjectCard = ({ img, title, description }) => {
        const [miDiv, setMiDiv] = useState(false);

        const handleMouseOver = () => {
            setMiDiv(true);
        };

        const handleMouseOut = () => {
            setMiDiv(false);
        };

        const handleOnClick = () => {
            setProject(title)
        }

        return (
            <div id={title}
                className="bg-cover bg-opacity-45 w-64 h-44 border-2 border-zinc-500 rounded "
                style={{ backgroundImage: `url(${img})` }}
                onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

                <div className="flex items-center justify-center text-center w-full h-full bg-black bg-opacity-60 ">
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
        <div className='pt-10 px-3 space-y-8 bg-black bg-opacity-40'>
            <p className=''>My projects:</p>

            <div className='flex flex-wrap gap-5 justify-center'>
                <ProjectCard img={desk} title="Signal Station" description="A market analysis software that generates personalized signals" />
                <ProjectCard img={desk} title="Blog" description="A market analysis software that generates personalized signals" />
                <ProjectCard img={desk} title="Blog" description="A market analysis software that generates personalized signals" />
                <ProjectCard img={desk} title="Blog" description="A market analysis software that generates personalized signals" />
                <ProjectCard img={desk} title="Blog" description="A market analysis software that generates personalized signals" />
                <ProjectCard img={desk} title="Blog" description="A market analysis software that generates personalized signals" />
                <ProjectCard img={desk} title="Blog" description="A market analysis software that generates personalized signals" />
                <ProjectCard img={desk} title="Blog" description="A market analysis software that generates personalized signals" />
            </div>
        </div>
    )
}




export default Projects
