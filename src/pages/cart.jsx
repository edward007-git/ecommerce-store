import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Essential Tee',
      price: 45.00,
      size: 'M',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'Structured Trouser',
      price: 120.00,
      size: '32',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?auto=format&fit=crop&w=200&q=80'
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="py-16 bg-white text-black min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-12 border-b border-black pb-4">Shopping Bag</h1>
        
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-2/3">
              <div className="flex flex-col gap-10">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-6 border-b border-gray-200 pb-10">
                    <div className="w-24 h-32 md:w-32 md:h-40 bg-gray-100 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-medium uppercase tracking-wide">{item.name}</h3>
                          <span className="text-lg font-light">${item.price.toFixed(2)}</span>
                        </div>
                        <p className="text-sm text-gray-500 uppercase tracking-widest">Size: {item.size}</p>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border border-gray-300">
                          <button className="px-3 py-1 text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">-</button>
                          <span className="px-4 text-sm">{item.quantity}</span>
                          <button className="px-3 py-1 text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">+</button>
                        </div>
                        <button className="text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors underline">Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-50 p-8">
                <h2 className="text-lg font-medium uppercase tracking-widest mb-6 border-b border-gray-200 pb-4">Order Summary</h2>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600 font-light">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600 font-light">Shipping</span>
                  <span className="text-sm">Calculated at checkout</span>
                </div>
                <div className="border-t border-gray-200 mt-6 pt-6 flex justify-between items-center mb-8">
                  <span className="font-medium uppercase tracking-wider">Total</span>
                  <span className="text-xl font-medium">${subtotal.toFixed(2)}</span>
                </div>
                
                <Link to="/place-order" className="block text-center bg-black text-white uppercase tracking-widest font-medium py-4 px-8 hover:bg-gray-900 transition-colors w-full">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 font-light mb-8">Your shopping bag is empty.</p>
            <Link to="/" className="border-b border-black pb-1 uppercase tracking-widest text-sm hover:text-gray-600 transition-colors">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart