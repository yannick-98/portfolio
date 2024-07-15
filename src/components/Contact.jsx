import React from 'react'

const Contact = () => {
    return (
        <div id='Contact' className='flex flex-col justify-center items-center w-full px-8 py-6
         bg-[rgb(01,50,78)]'>
            <h2 className='text-2xl font-bold'>Get in touch!</h2>
            <br />
            <div className='flex flex-col md:flex-row gap-3 md:gap-12 max-w-[1200px] w-full'>
                <div>
                    <h3 className='text-lg font-thin mb-1'>Email:</h3>
                    <p className='text-md font-semibold'>Yannick98cd@gmail.com</p>
                </div>

                <div>
                    <h3 className='text-lg font-thin mb-1'>LinkedIn:</h3>
                    <a href="https:www.linkedin.com/in/yannick-castaño-david" target="_blank"
                        className='text-md font-semibold'>Yannick Castaño David</a>
                </div>

                <div>
                    <h3 className='text-lg font-thin mb-1'>Tableau Public:</h3>
                    <a href="https://www.linkedin.com/in/yannick-castaño-david" target="_blank"
                        className='text-md font-semibold'>Yannick Castaño David</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
