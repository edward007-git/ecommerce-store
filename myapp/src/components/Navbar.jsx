import React, { useState, useRef, useEffect } from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import searchIcon from '../assets/search (1).png'
import profileIcon from '../assets/user.png'
import cartIcon from '../assets/market.png'
import menuIcon from '../assets/menu.png'
import dropDown from '../assets/down-arrow.png'

const Navbar = () => {
  const [Visible, setVisible] = useState(false)
  const [searchVisible, setSearchVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const inputRef = useRef(null)

  const navigate = useNavigate()
  const location = useLocation()

  // If there's a ?q= in the URL, populate the input (keeps input synced when user navigates)
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const q = params.get('q') || ''
    setSearchTerm(q)
  }, [location.search])

  // Focus the input when it becomes visible
  useEffect(() => {
    if (searchVisible && inputRef.current) {
      inputRef.current.focus()
    }
  }, [searchVisible])

  // Navigate to home with query param
  const submitSearch = (e) => {
    if (e) e.preventDefault()
    const q = (searchTerm || '').trim()
    // If empty, just navigate home without query param
    if (q === '') {
      navigate('/', { replace: false })
    } else {
      const params = new URLSearchParams()
      params.set('q', q)
      navigate(`/?${params.toString()}`)
    }
  
    setSearchVisible(false)
    // close mobile menu if open
    setVisible(false)
  }

  return (
    <div className='flex items-center justify-between py-5 font-medium cursor-pointer'>
      <Link to='/'><img src={logo} className='w-8' alt='logo' /></Link>

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

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        
        <div className='relative'>
          <button
            className='p-1'
            onClick={() => setSearchVisible((s) => !s)}
            aria-label='Open search'
          >
            <img src={searchIcon} className='w-5 cursor-pointer' alt='search' />
          </button>

          
          <form
            onSubmit={submitSearch}
            className={`absolute right-0 top-full mt-2 transition-all ${searchVisible ? 'block' : 'hidden'}`}
          >
            <div className='flex items-center gap-2 bg-white border rounded px-2 py-1 shadow-sm'>
              <input
                ref={inputRef}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Search products...'
                className='outline-none text-sm'
                aria-label='Search products'
              />
              <button
                type='submit'
                className='text-sm px-2 py-1 border rounded'
                aria-label='Submit search'
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className='group relative'>
          <img src={profileIcon} className='w-5 cursor-pointer' alt='profile' />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        <Link to='/cart' className='relative'>
          <img src={cartIcon} className='w-5 min-w-5' alt='cart' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            10
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={menuIcon}
          className='w-5 cursor-pointer block sm:hidden'
          alt='menu'
        />
      </div>

      {/* sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${Visible ? 'w-full' : 'w-0'}`}
      >
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 cursor-pointer p-3'>
            <img className='h-4 rotate-90' src={dropDown} alt='back' />
            <p>Back</p>
          </div>

          <NavLink onClick={() => { setVisible(false); navigate('/'); }} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={() => { setVisible(false); navigate('/collection'); }} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => { setVisible(false); navigate('/about'); }} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => { setVisible(false); navigate('/contact'); }} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
