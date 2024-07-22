import React from 'react'
import searchIcon from '../assets/searchIcon.gif'

const Menu = ({ showCreatePost, setShowCreatePost }) => {
    const handleClick = () => {
        setShowCreatePost(!showCreatePost)
    }

    return (
        <div className='w-full flex justify-center gap-4 '>
            <div className='flex items-center bg-white border-2 border-black rounded'>
                <input type="text" placeholder="Search" className="px-1" />
                <button className=' px-1'>
                    <img src={searchIcon} alt="search" className='w-5' />
                </button>
            </div>

            <button onClick={handleClick} className='flex items-center font-bold uppercase bg-white border-2 border-black rounded px-1'>create post</button>
        </div>
    )
}

export default Menu
