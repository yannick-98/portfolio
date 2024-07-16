import React from 'react'

const Menu = ({ showCreatePost, setShowCreatePost }) => {
    const handleClick = () => {
        setShowCreatePost(!showCreatePost)
    }

    return (
        <div className='w-full flex gap-4'>
            <button onClick={handleClick} className='flex text-lg font-bold uppercase'>+ create post</button>

            <div>
                <input type="text" placeholder="Search" className="" />
            </div>

        </div>
    )
}

export default Menu
