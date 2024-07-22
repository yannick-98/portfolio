import React, { useState } from 'react';
import { scrapeAliexpress, scrapeAmazon } from '../scrapers/ScrapeProducts';
import ProductCard from './ProductCard';

const ProductScraper = () => {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);

    const handleSearch = async () => {
        try {
            const aliexpressProducts = await scrapeAliexpress(query).catch(error => {
                console.error('Error scraping Aliexpress:', error);
                return [];
            });

            const amazonProducts = await scrapeAmazon(query).catch(error => {
                console.error('Error scraping Amazon:', error);
                return [];
            });

            setProducts([...aliexpressProducts, ...amazonProducts]);
        } catch (error) {
            console.error('Unexpected error:', error);
        }
    };

    console.log(products);

    return (
        <div className='w-full min-h-screen'>
            <div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for products"
                    className='text-black'
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className='flex flex-wrap'>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductScraper
