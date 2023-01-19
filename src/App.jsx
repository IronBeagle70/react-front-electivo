// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Catalogue from './pages/Catalogue'
import Home from './pages/Home'
import Login from './pages/Login'
import ShoppingCart from './pages/ShoppingCart'
import Signup from './pages/Signup'
// import './App.css'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />}  />
      <Route path='/signup' element={<Signup />} />
      <Route path='/catalogue' element={<Catalogue />} />
      <Route path='/shopping' element={<ShoppingCart />} />
    </Routes>
  )
}

export default App
