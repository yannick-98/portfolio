import React from 'react'

const Project = ({ title }) => {
    return (
        <div className='pt-12 bg-black bg-opacity-35'>
            <img src="./src/asets/Desktop1.png" alt="" className='w-96 mx-auto rounded' />
            <p>{title}</p>
        </div>
    )
}

export default Project
