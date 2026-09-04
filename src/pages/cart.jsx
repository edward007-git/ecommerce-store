import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../components/ShopContext'

const Cart = () => {
  const { getCartLines, getCartTotal, currency, updateCartQty, removeFromCart } = useContext(ShopContext)
  const lines = getCartLines()
  const subtotal = getCartTotal()

  return (
    <div className="py-16 bg-white text-black min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-12 border-b border-black pb-4">
          Shopping Bag
          {lines.length > 0 && <span className="font-light text-gray-400 ml-3 text-2xl">({lines.reduce((s, l) => s + l.qty, 0)})</span>}
        </h1>

        {lines.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-2/3">
              <div className="flex flex-col gap-10">
                {lines.map(({ product, size, qty }) => (
                  <div key={`${product._id}-${size}`} className="flex gap-6 border-b border-gray-100 pb-10">
                    <Link to={`/product/${product._id}`} className="w-24 h-32 md:w-32 md:h-40 bg-gray-100 shrink-0 block overflow-hidden">
                      <img
                        src={Array.isArray(product.image) ? product.image[0] : product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </Link>
                    <div className="flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <Link to={`/product/${product._id}`} className="text-sm font-medium uppercase tracking-wide hover:underline">{product.name}</Link>
                          <span className="text-sm font-light">{currency}{(product.price * qty).toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Size: {size}</p>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border border-gray-200">
                          <button
                            onClick={() => updateCartQty(product._id, size, qty - 1)}
                            className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-black transition-colors"
                          >−</button>
                          <span className="w-9 h-9 flex items-center justify-center text-xs">{qty}</span>
                          <button
                            onClick={() => updateCartQty(product._id, size, qty + 1)}
                            className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-black transition-colors"
                          >+</button>
                        </div>
                        <button
                          onClick={() => removeFromCart(product._id, size)}
                          className="text-[10px] uppercase tracking-widest text-gray-300 hover:text-black transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="bg-gray-50 p-8">
                <h2 className="text-xs font-medium uppercase tracking-widest mb-6 border-b border-gray-200 pb-4">Order Summary</h2>
                <div className="flex justify-between mb-4 text-sm">
                  <span className="text-gray-500 font-light">Subtotal</span>
                  <span>{currency}{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4 text-sm">
                  <span className="text-gray-500 font-light">Shipping</span>
                  <span className="text-gray-400">Free</span>
                </div>
                <div className="border-t border-gray-200 mt-6 pt-6 flex justify-between items-center mb-8">
                  <span className="text-xs font-medium uppercase tracking-wider">Total</span>
                  <span className="text-xl font-medium">{currency}{subtotal.toFixed(2)}</span>
                </div>
                <Link to="/place-order" className="block text-center bg-black text-white uppercase tracking-widest text-xs font-medium py-4 px-8 hover:bg-gray-900 transition-colors w-full">
                  Checkout
                </Link>
                <Link to="/collection" className="block text-center text-xs uppercase tracking-widest text-gray-400 hover:text-black mt-4 transition-colors py-2">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-28">
            <p className="text-4xl text-gray-100 mb-6">—</p>
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">Your bag is empty.</p>
            <Link to="/collection" className="border-b border-black pb-1 uppercase tracking-widest text-xs hover:text-gray-600 transition-colors">
              Explore Collection
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart