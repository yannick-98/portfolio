import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import EmailIcon from '../assets/email-icon.png'
import WhatsappIcon from '../assets/whatsapp-icon.png'
import Linkedin from '../assets/linkedin.svg'
import Github from '../assets/github_icon.png'
import { CopyToClipboard } from "react-copy-to-clipboard";


const Home = () => {
    const [copiedWa, setCopiedWa] = useState(false);
    const [copiedE, setCopiedE] = useState(false);

    const handleCopyWa = () => {
        setCopiedWa(true);
        setTimeout(() => setCopiedWa(false), 2000);
    };
    const handleCopyE = () => {
        setCopiedE(true);
        setTimeout(() => setCopiedE(false), 2000);
    };

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
            <div className='flex flex-col gap-2 justify-center items-center text-center'>
                <div className='w-full flex items-center justify-center gap-5'>
                    <div className='flex items-center gap-1'>
                        <img src={Linkedin} alt="" className='w-4 h-4 bg-white ' />
                        <NavLink to={'https://www.linkedin.com/in/yannick-casta%C3%B1o-david-2bb9052b6/'} target='_blank'>LinkedIn</NavLink>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={Github} alt="" className='w-4 h-4 bg-white ' />
                        <NavLink to={'https://www.linkedin.com/in/yannick-casta%C3%B1o-david-2bb9052b6/'} target='_blank'>GitHub</NavLink>
                    </div>
                </div>

                <div className='flex items-center gap-1'>
                    <img src={WhatsappIcon} alt="" className='w-4 h-4' />
                    <CopyToClipboard text="+34 613 030 850" onCopy={handleCopyWa}>
                        <p className='hover:cursor-pointer'>+34 613 030 850</p>
                    </CopyToClipboard>
                    {copiedWa && <p className='text-xs px-4 text-green-500'>Copied!</p>}
                </div>

                <div className='flex items-center gap-1'>
                    <img src={EmailIcon} alt="" className='w-4 h-4' />
                    <CopyToClipboard text="Yannick9862@gmail.com" onCopy={handleCopyE}>
                        <p className='hover:cursor-pointer'>Yannick9862@gmail.com</p>
                    </CopyToClipboard>
                    {copiedE && <p className='text-xs px-4 text-green-500'>Copied!</p>}
                </div>
            </div>
        </section>

    )
}

export default Home
