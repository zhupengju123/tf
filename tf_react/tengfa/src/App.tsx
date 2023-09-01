import React from 'react'
import "./App.css"

import { Routes, Route, Navigate } from "react-router-dom"

import Index from './pages/Index'
import TwoCar from './pages/TwoCar'
import Top from './components/Top'
import Details from './pages/Details'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Top />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/twocar' element={<TwoCar />} />
        <Route path='/detail/:id' element={<Details />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
