import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';


function App(){

    const [cart,setCart] = useState([]);
    console.log(cart);

    useEffect(() => {
      console.log(111)
      },[])

      function addToCart(product){
        setCart(prev => [...prev, product])
      }

      return(
        <div className='bg-amber-50'>
          <Header cart={cart.length}/>
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products onAddToCart={addToCart} />} />
          </Routes>
          <ContactForm/>
          <Footer/>
        </div>
      )
    }

export default App;