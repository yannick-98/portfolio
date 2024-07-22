import React, { useState } from 'react';
import axios from 'axios';

const ScrapeNews = () => {
    const [query, setQuery] = useState('');
    const [articles, setArticles] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/scrape/news/', { query });
            setArticles(response.data.articles);
        } catch (error) {
            console.error('Error scraping articles:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter search terms"
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {articles.map((article, index) => (
                    <li key={index}>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                            {article.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScrapeNews;
