import React from 'react'
import logo from '../assets/logo.png'

const footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
     <div>
      <img src={logo} className='mb-5 w-32 ' alt=' ' />
        <p className='w-full md:w-2/3 text-gray-600'>"Your trusted destination for quality fashion."</p>
     </div>
     <div>
      <p className='text-xl font-medium mb-3'>Company</p>
      <ul className='flex flex-col gap-1  text-gray-600 '>
        
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy</li>




      </ul>
     </div>
     <div>
        <p className='text-xl font-medium mb-2'>Contact Info</p>
      <ul className='flex flex-col gap-1 text-gray-600'>
       <li>+1-232-790-5391</li>
       <li>contact@fzexsyou.com</li>
      </ul>
      </div>

     </div>
   
    <div>
      <hr />
      <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - ALL RIGHT RESERVED</p>
         <p className='text-gray-600 text-sm text-center'>Made by Nilesh</p>
    </div>
    </div>


  )
}

export default footer