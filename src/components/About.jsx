import React from 'react'
import stars5 from '../assets/5stars.png'
import stars3 from '../assets/3stars.png'

const About = () => {
    return (
        <div className='w-full bg-[rgb(01,50,78)]'>
            <a id='About' className='block relative top-[-45px] '></a>

            <section className='bg-gray-200 text-[rgb(40,50,78)] w-full p-8 flex flex-col items-center text-center'>
                <div className='w-full max-w-[1200px] '>
                    <h2 className='text-2xl font-bold'>About me</h2>
                    <br />
                    <p className='text-xl'>Passionate about technology, challenges, and learning new skills. I taught myself web development, which provided me with a foundation in programming and motivated me to become interested in data science and focus my career in this field.</p>
                </div>
            </section>

            <section className=' flex flex-col justify-center items-center w-full mx-auto space-y-12 p-8'>
                <h2 className='text-2xl font-bold text-center'>My skills</h2>
                <div className='flex flex-wrap justify-between gap-3 w-full max-w-[1200px]'>
                    <div className='mb-12 w-full sm:w-auto'>
                        <h3 className=" font-semibold mb-4">Programming languages</h3>
                        <ul className='text-lg'>
                            <li>· Python</li>
                            <li>· R</li>
                            <li>· JavaScript</li>
                            <li>· SQL</li>
                            <li>· DAX</li>
                        </ul>
                    </div>
                    <div className='mb-12 w-full sm:w-auto'>
                        <h3 className=" font-semibold mb-4">Business Intelligence</h3>
                        <ul className='text-lg'>
                            <li>· Tableau</li>
                            <li>· Microsoft PowerBI</li>
                            <li>· Google Analytics</li>
                            <li>· Web scraping</li>
                            <li>· Machine Learning</li>
                        </ul>
                    </div>
                    <div className='mb-12 w-full sm:w-auto'>
                        <h3 className=" font-semibold mb-4">Web development</h3>
                        <ul className='text-lg'>
                            <li>· Django</li>
                            <li>· React.js</li>
                            <li>· TailwindCSS</li>
                            <li>· HTML5 & CSS3</li>
                            <li>· Git / GitHub</li>
                        </ul>
                    </div>
                    <div className='mb-12 '>
                        <h3 className=' font-semibold mb-4'>Languages</h3>
                        <ul className='text-lg'>
                            <li className='flex items-center justify-between gap-2'>· Spanish <img src={stars5} className='h-3'></img></li>
                            <li className='flex items-center justify-between gap-2'>· English <img src={stars3} className='h-3'></img></li>
                            <li className='flex items-center justify-between gap-2'>· French <img src={stars3} className='h-3'></img></li>
                            <li className='flex items-center justify-between gap-2'>· Catalan <img src={stars5} className='h-3'></img></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
