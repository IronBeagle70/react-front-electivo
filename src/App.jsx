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

  //modal
  const [open, setOpen] = useState(false); //modal state

  const handleModal=()=>{
    setOpen(!open);
  };
  
  const [productos, setProductos] = useState([]); // Data state

  useEffect(()=>{
    const producto = Data.map(data=>{
      return {...data, cantidad: 1}
    });
    if(producto){
      setProductos(producto);
    } else {
      setProductos([]);
    };
  },[]);

  const value = {
    productos : [productos]
  }

  const [getProductos] = value.productos; //get all Data 
  
  //shopping cart

  const [carrito, setCarrito] = useState([]); //shopping cart state

  const addCarrito=(id)=>{
    const check = carrito.every(item =>{
      return item.id !==id;
    })
    if (check) {
      const data = getProductos.filter(producto => {
        // producto.cantidad =1;
        return producto.id === id
      })
        setCarrito([...carrito, ...data]);
        // console.log(data);
    } else {
      alert('El producto ya está añadido en el carrito')
    }
  }

  const removeCarrito=(id)=>{
    if(window.confirm('¿Desea eliminar el producto?')){
      carrito.forEach((item, index)=>{
        if(item.id === id){
          item.cantidad=1;
          carrito.splice(index,1)
        }
      })
      setCarrito([...carrito]);
    }
  }

  const sumCantidad = (id) => {
    carrito.forEach(item=>{
      if(item.id === id){
        item.cantidad += 1;
      }
      setCarrito([...carrito]);
    })
  }

  const resCantidad = (id) => {
    carrito.forEach(item=>{
      if(item.id === id){
        item.cantidad===1 ? item.cantidad=1 :item.cantidad -= 1;
      }
      setCarrito([...carrito]);
    })
  }

  const [total, setTotal] = useState(0);

  useEffect(()=>{
    const getTotal = () => {
      const res = carrito.reduce((prev, item)=>{
        return prev + (parseInt(item.precio)*parseInt(item.cantidad))
      },0)
      setTotal(res)
    }
    getTotal()
  },[carrito])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />}  />
      <Route path='/signup' element={<Signup />} />
      <Route path='/catalogue' element={<Catalogue dataProducts={getProductos} handleModal={handleModal} openModal={open} carrito={carrito} addCarrito={addCarrito} removeCarrito={removeCarrito} sumCantidad={sumCantidad} resCantidad={resCantidad} />} />
      <Route path='/shopping' element={<ShoppingCart carrito={carrito} removeCarrito={removeCarrito} sumCantidad={sumCantidad} resCantidad={resCantidad} handleModal={handleModal} openModal={open} total={total} />} />
      <Route path='/catalogue/:id' element={<ProductView dataProducts={value} handleModal={handleModal} openModal={open} carrito={carrito} addCarrito={addCarrito} removeCarrito={removeCarrito} sumCantidad={sumCantidad} resCantidad={resCantidad} />}   />
    </Routes>
  )
}

export default App
