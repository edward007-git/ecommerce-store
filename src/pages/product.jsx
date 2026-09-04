import React, { useState } from 'react'

const Product = () => {
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <div className="py-16 bg-white text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Image Gallery */}
          <div className="w-full md:w-1/2 flex flex-col-reverse sm:flex-row gap-4">
            <div className="flex sm:flex-col gap-4 overflow-x-auto sm:overflow-y-auto sm:w-24 shrink-0 no-scrollbar">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-gray-100 aspect-[3/4] w-20 sm:w-full flex-shrink-0 cursor-pointer border border-transparent hover:border-black transition-colors">
                  <img src={`https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80`} alt="Thumbnail" className="w-full h-full object-cover grayscale" />
                </div>
              ))}
            </div>
            <div className="bg-gray-100 aspect-[3/4] w-full flex-grow relative overflow-hidden">
               <img src={`https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80`} alt="Main Product" className="w-full h-full object-cover grayscale" />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">New Arrival</p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-4">Essential Tee</h1>
            <p className="text-2xl font-light mb-8">$45.00</p>
            
            <p className="text-gray-700 font-light leading-relaxed mb-10 max-w-lg">
              The foundational piece for any wardrobe. Crafted from heavyweight organic cotton, featuring a relaxed fit, dropped shoulders, and a ribbed crewneck. Designed for longevity and everyday wear.
            </p>
            
            {/* Size Selector */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">Size</span>
                <button className="text-xs text-gray-500 uppercase tracking-wide hover:text-black underline">Size Guide</button>
              </div>
              <div className="flex gap-3">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 flex items-center justify-center border text-sm font-medium transition-colors ${
                      selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300 bg-transparent text-black hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <button className="bg-black text-white uppercase tracking-widest font-medium py-5 px-8 hover:bg-gray-900 transition-colors w-full mb-6">
              Add to Cart
            </button>
            
            <div className="border-t border-gray-200 mt-10 pt-10 space-y-6">
              <div className="flex justify-between items-center cursor-pointer group">
                <span className="text-sm font-medium uppercase tracking-wider group-hover:text-gray-600 transition-colors">Details & Care</span>
                <span className="text-lg font-light">+</span>
              </div>
              <div className="flex justify-between items-center cursor-pointer group">
                <span className="text-sm font-medium uppercase tracking-wider group-hover:text-gray-600 transition-colors">Shipping & Returns</span>
                <span className="text-lg font-light">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product