import React, { useState } from 'react'
import briks from '../assets/briks_bg.jpg'
import PostsList from './Posts_list'
import CreatePost from './CreatePost'
import Menu from './Menu'

const Blog = () => {
    const [showCreatePost, setShowCreatePost] = useState(false)
    return (
        <div className='w-full h-screen min-h-[600px] flex flex-col justify-start items-center overflow-hidden bg-cover bg-center'
            style={{ backgroundImage: `url(${briks})` }}>
            <div className='flex flex-col gap-5 w-full p-8'>
                <h1 className='text-7xl font-bold text-center font-dancing'>The Free Blog</h1>
                <Menu showCreatePost={showCreatePost} setShowCreatePost={setShowCreatePost} />
                {showCreatePost && <CreatePost />}

                <div className='flex flex-wrap w-full text-center'>
                    <PostsList />
                </div>
            </div>
        </div>
    )
}

export default Blog
