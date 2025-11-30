import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/collection'
import  About from './pages/about'
import Product from './pages/product'
import Login from './pages/login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'




const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collection />} />
       <Route path='./about' element={<About/>} />
       <Route path='./product' element={<Product />} />
       <Route path='./login' element={<Login />} />
     </Routes>
     <Footer />
     

    </div>
  )
}

export default App