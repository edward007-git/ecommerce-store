import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/about'
import Product from './pages/product'
import Login from './pages/login'
import Contact from './pages/contact'
import Cart from './pages/cart'
import PlaceOrder from './pages/palceorder'
import Profile from './pages/Profile'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collection />} />
      <Route path='/about' element={<About/>} />
      <Route path='/product/:productId' element={<Product />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/place-order' element={<PlaceOrder />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/orders' element={<Orders />} />
     </Routes>
     <Footer />
    </div>
  )
}

export default App