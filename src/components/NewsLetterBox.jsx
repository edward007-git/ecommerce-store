import React, { useState, useContext } from 'react'
import { ShopContext } from './ShopContext'

const NewsLetterBox = () => {
  const { showToast } = useContext(ShopContext)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email.', 'error')
      return
    }
    setSubmitted(true)
    setEmail('')
    showToast("You're on the list.", 'success')
  }

  return (
    <div className='text-center py-20 border-t border-gray-100'>
      {!submitted ? (
        <>
          <p className='text-xs uppercase tracking-widest text-gray-400 mb-3'>Newsletter</p>
          <p className='text-2xl font-medium text-black mb-2'>Subscribe &amp; Get 20% Off</p>
          <p className='text-gray-400 text-sm font-light mt-2 mb-8'>
            Be the first to know about new arrivals and exclusive offers.
          </p>
          <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-0 mx-auto border border-gray-300 focus-within:border-black transition-colors'>
            <input
              className='w-full flex-1 outline-none px-4 py-4 text-sm bg-transparent'
              type='email'
              placeholder='Your email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type='submit' className='bg-black text-white text-xs px-8 py-4 uppercase tracking-widest hover:bg-gray-900 transition-colors shrink-0'>
              Subscribe
            </button>
          </form>
        </>
      ) : (
        <div className='py-10'>
          <p className='text-2xl font-medium text-black mb-3'>You&apos;re on the list.</p>
          <p className='text-gray-400 text-sm font-light'>Expect something good in your inbox soon.</p>
        </div>
      )}
    </div>
  )
}

export default NewsLetterBox