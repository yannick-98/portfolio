import React from 'react'

const ProductCard = ({ product, index }) => {
    return (
        <div className='w-96 p-2 rounded-lg bg-blue-400 mx-2'>
            <img src={product.image} alt={product.title} className='mx-auto' />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <a href={product.link} target="_blank" rel="noopener noreferrer">View product</a>
        </div>
    )
}

export default ProductCard
