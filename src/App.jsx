import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import ProductView from './components/ProductView'
import Catalogue from './pages/Catalogue'
import Home from './pages/Home'
import Login from './pages/Login'
import ShoppingCart from './pages/ShoppingCart'
import Signup from './pages/Signup'
// import './App.css'

import Data from './Data.js'; //DB simulator

function App() {
  
  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    const producto = Data;
    if(producto){
      setProductos(producto);
    } else {
      setProductos([]);
    };
  });

  const value = {
    productos : [productos]
  } 

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />}  />
      <Route path='/signup' element={<Signup />} />
      <Route path='/catalogue' element={<Catalogue dataProducts={value} />} />
      <Route path='/shopping' element={<ShoppingCart />} />
      <Route path='/catalogue/:id' element={<ProductView dataProducts={value} />}   />
    </Routes>
  )
}

export default App
