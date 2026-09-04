import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'
import { Link } from 'react-router-dom'

const ProductItems = ({id,name,price,image}) => {
    const {currency} =useContext(ShopContext)
  return (
  <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
  <div className='overflow-hidden h-64 flex items-center justify-center'>
    <img
      className='hover:scale-110 transition ease-out h-full w-full object-cover object-top'
      src={image}
      alt={name}
    />
  </div>
  <p className='pt-3 pb-1 text-sm'>{name}</p>
  <p className='text-sm font-medium'>{currency}{price}</p>
</Link>
  )
}

export default ProductItems