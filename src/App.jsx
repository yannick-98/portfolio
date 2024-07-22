import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Index from './components/Index'
import HousePrice from './house price/HousePrice'
import Product_scraper from './product_scraper/Product_scraper'
import Blog from './blog/Blog'
import './app.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/house-price-prediction' element={<HousePrice />} />
        <Route path='/product-scraper' element={<Product_scraper />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
