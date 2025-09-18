import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import search from '../assets/search (1).png'
import profileIcon from '../assets/user.png'
import cartIcon from '../assets/market.png'
import menuIcon from '../assets/menu.png'
import dropDown from '../assets/down-arrow.png'
const Navbar = () => {
  const [ Visible, setVisible ]=useState(false)
  return (
    <div className='flex items-center justify-between py-5 font-medium cursor-pointer'>
    <Link to ='/'><img src={logo}  className ="w-8" alt=''/></Link>

    <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
      <NavLink to='/' className='flex flex-col items-center gap-1'>

       <p>Home</p>
       <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
     </NavLink> 


       <NavLink to='/about' className='flex flex-col items-center gap-1'>

       <p>About</p>
       <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
      
      </NavLink>
       
       
       <NavLink to='/collection' className='flex flex-col items-center gap-1'>

       <p>Collection</p>
       <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
      
      </NavLink>

      
       <NavLink to='/contact' className='flex flex-col items-center gap-1 '>

       <p>Contact</p>
       <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
      
      </NavLink>


    </ul>
    <div className='flex items-center gap-6'>
        <img src={search} className='w-5 cursor-pointer' alt="" />
       
       <div className='group realtive'>
        <img src={profileIcon} className='w-5 cursor-pointer' alt='' />
        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
         <div className=' flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
        <p className='cursor-pointer hover:text-black'>My Profile</p>       
        <p className='cursor-pointer hover:text-black'>Orders</p> 
        <p className='cursor-pointer hover:text-black'>Logout</p>             
           
        </div>
        </div>
          
       </div>
      <Link to='/cart' className='relative'>
        <img src={cartIcon} className='w-5 min-w-5' alt=''/>
       <p className='absolute right-[-5px]  bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
      </Link>
      <img onClick={()=>setVisible(true)} src={menuIcon} className='w-5 cursor-pointer block sm:hidden' alt=''/>
    </div>
    {/* sidebar menu for small screen */}
    <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all 
              ${Visible ? 'w-full' : 'w-0'}`}>

    <div className='flex flex-col text-gray-600'>

      <div onClick={()=>setVisible(false)} className='flex items-center gap-4 cursor-pointer p-3'>
        <img className='h-4 rotate-90 'src={dropDown} alt=''/>
        <p>Back</p>
        </div>
        <NavLink onClick={()=>setVisible(false)}  className='py-2 pl-6 border' to='/'>HOME</NavLink>
         <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
           <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>

      </div>

    </div>





   
    
  )
}

export default Navbar