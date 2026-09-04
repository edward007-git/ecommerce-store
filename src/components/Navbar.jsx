import React, { useState, useRef, useEffect, useContext } from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import searchIcon from '../assets/search (1).png'
import profileIcon from '../assets/user.png'
import cartIcon from '../assets/market.png'
import menuIcon from '../assets/menu.png'
import dropDown from '../assets/down-arrow.png'
import { ShopContext } from './ShopContext'
import CartDrawer from './CartDrawer'

const Navbar = () => {
  const [Visible, setVisible] = useState(false)
  const [searchVisible, setSearchVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [cartOpen, setCartOpen] = useState(false)
  const inputRef = useRef(null)

  const { getCartCount } = useContext(ShopContext)
  const cartCount = getCartCount()

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const q = params.get('q') || ''
    setSearchTerm(q)
  }, [location.search])

  useEffect(() => {
    if (searchVisible && inputRef.current) inputRef.current.focus()
  }, [searchVisible])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSearchVisible(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const submitSearch = (e) => {
    if (e) e.preventDefault()
    const q = (searchTerm || '').trim()
    if (q === '') {
      navigate('/', { replace: false })
    } else {
      const params = new URLSearchParams()
      params.set('q', q)
      navigate(`/?${params.toString()}`)
    }
    setSearchVisible(false)
    setVisible(false)
  }

  return (
    <>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <div className='relative flex items-center justify-between py-5 font-medium cursor-pointer'>
        <Link to='/'><img src={logo} className='w-20' alt='logo' /></Link>

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
              className={`absolute right-0 top-9 z-50 transition-all ${searchVisible ? 'block' : 'hidden'}`}
            >
              <div className='flex items-center gap-2 bg-white border border-gray-200 rounded px-3 py-2 shadow-lg min-w-[220px] max-w-xs'>
                <input
                  ref={inputRef}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder='Search products...'
                  className='outline-none text-sm w-full'
                  aria-label='Search products'
                />
                <button
                  type='submit'
                  className='text-xs px-2 py-1 border border-black uppercase tracking-wider hover:bg-black hover:text-white transition-colors'
                  aria-label='Submit search'
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* profile */}
          <div className='group relative z-50'>
            <Link to='/login'><img src={profileIcon} className='w-5 cursor-pointer' alt='profile' /></Link>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50'>
              <div className='flex flex-col gap-3 w-36 py-4 px-5 bg-white border border-gray-200 text-gray-600 rounded shadow-lg'>
                <Link to='/profile' className='cursor-pointer hover:text-black uppercase text-xs tracking-wider'>My Profile</Link>
                <Link to='/orders' className='cursor-pointer hover:text-black uppercase text-xs tracking-wider'>Orders</Link>
                <Link to='/login' className='cursor-pointer hover:text-black uppercase text-xs tracking-wider'>Logout</Link>
              </div>
            </div>
          </div>

          {/* Cart icon — opens drawer */}
          <button
            onClick={() => setCartOpen(true)}
            className='relative'
            aria-label='Open cart'
          >
            <img src={cartIcon} className='w-5 min-w-5' alt='cart' />
            {cartCount > 0 && (
              <span className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </button>

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
    </>
  )
}

export default Navbar
