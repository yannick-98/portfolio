import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Index from './components/Index'
import HousePrice from './house price/HousePrice'
import Blog from './blog/Blog'
import './app.css'


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/house-price-prediction' element={<HousePrice />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
