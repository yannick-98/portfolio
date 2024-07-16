import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/posts/')
            .then(response => {
                setPosts(response.data);
                console.log(response);
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
                    <li key={post.id}>
                        <a href={`/posts/${post.id}`}>{post.title}</a>
                    </li>
                ))
            ) : (
                <p>No posts available</p>
            )}
        </>
    );
};

export default PostsList;
