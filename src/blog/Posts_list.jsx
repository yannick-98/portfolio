import React, { useEffect, useState } from 'react';
import axios from 'axios';

const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
};

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/blog/posts/')
            .then(response => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                setError('Error fetching posts');
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            {posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id} className='bg-white bg-opacity-80 border-2 border-black rounded w-80 mx-auto my-4 px-1 text-start'>
                        <div className='flex items-center justify-between gap-2'>
                            <h2 className='text-xl font-bold'>{post.title}</h2>
                            <p className='text-xs'>{formatDate(post.created_at)}</p>
                        </div>
                        <p>{post.content}</p>
                    </div>
                ))
            ) : (
                <p>No posts available</p>
            )}
        </>
    );
};

export default PostsList;
