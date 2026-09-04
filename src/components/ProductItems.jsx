import React, { useContext, useState } from 'react'
import { ShopContext } from './ShopContext'
import { Link } from 'react-router-dom'

const ProductItems = ({ id, name, price, image }) => {
  const { currency, addToCart } = useContext(ShopContext)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [hovered, setHovered] = useState(false)

  const imgSrc = Array.isArray(image) ? image[0] : image

  return (
    <div
      className='group relative cursor-pointer text-gray-700'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${id}`} className='block'>
        <div className='overflow-hidden h-64 relative bg-gray-100'>
          {/* Skeleton */}
          {!imgLoaded && <div className='skeleton absolute inset-0 w-full h-full' />}
          <img
            className={`h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            src={imgSrc}
            alt={name}
            onLoad={() => setImgLoaded(true)}
          />
        </div>
      </Link>

      {/* Quick-Add overlay — appears on hover */}
      <div className={`absolute bottom-[72px] left-0 right-0 flex justify-center transition-all duration-200 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <button
          onClick={() => addToCart(id, 'M')}
          className='bg-black text-white text-[10px] uppercase tracking-widest px-4 py-2.5 hover:bg-gray-900 transition-colors shadow-md'
          title='Quick add in size M'
        >
          + Quick Add
        </button>
      </div>

      {/* Info */}
      <Link to={`/product/${id}`} className='block'>
        <p className='pt-3 pb-1 text-sm truncate'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
      </Link>
    </div>
  )
}

export default ProductItems