import React from 'react'
import exchange from '../assets/return-box.png'
import quality from '../assets/quality-assurance.png'
import support from '../assets/support.png'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-600'>
      <div>

     <img src={exchange} className='w-12 m-auto mb-5' alt=''/>
      <p className='font-semibold'>Easy Exchange Policy</p>
      <p className='text-gray-400'>we offer hassle free exchange</p>
      </div>

       <div>

     <img src={quality} className='w-12 m-auto mb-5' alt=''/>
      <p className='font-semibold'>7 Days Return Policy</p>
      <p className='text-gray-400'>we provide 7 days free return policy</p>
      </div>


       <div>

     <img src={support} className='w-12 m-auto mb-5' alt=''/>
      <p className='font-semibold'>Best customer Support</p>
      <p className='text-gray-400'>WE provide 24 hours customer support</p>
      </div>

      



    </div>
  )
}

export default OurPolicy