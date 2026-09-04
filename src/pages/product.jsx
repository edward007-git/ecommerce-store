import React, { useState, useContext, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../components/ShopContext'
import ProductItems from '../components/ProductItems'

const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)

  const [selectedSize, setSelectedSize] = useState(null)
  const [mainImage, setMainImage] = useState(0)
  const [stickyVisible, setStickyVisible] = useState(false)
  const addBtnRef = useRef(null)

  const product = products?.find(p => p._id === productId) || {
    _id: productId,
    name: 'Essential Tee',
    price: 45,
    description: 'The foundational piece for any wardrobe. Crafted from heavyweight organic cotton, featuring a relaxed fit, dropped shoulders, and a ribbed crewneck. Designed for longevity and everyday wear.',
    category: 'men',
    image: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'],
    sizes: ['S', 'M', 'L', 'XL']
  }

  const images = Array.isArray(product.image) ? product.image : [product.image]
  const sizes = product.sizes || ['XS', 'S', 'M', 'L', 'XL']

  const related = products
    ? products.filter(p => p._id !== product._id && p.category === product.category).slice(0, 4)
    : []

  // Show sticky bar when add button scrolls out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    if (addBtnRef.current) observer.observe(addBtnRef.current)
    return () => observer.disconnect()
  }, [])

  const handleAddToCart = () => {
    addToCart(product._id, selectedSize)
  }

  return (
    <div className="bg-white text-black min-h-screen">

      {/* Sticky Add-to-Cart Bar */}
      <div className={`fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 transition-all duration-300 ${stickyVisible ? 'translate-y-0 shadow-md' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-3 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest font-medium truncate max-w-xs">{product.name}</p>
            <p className="text-sm font-light">{currency}{product.price}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              {sizes.map(s => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`w-9 h-9 flex items-center justify-center border text-xs font-medium transition-colors ${selectedSize === s ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-black'}`}
                >
                  {s}
                </button>
              ))}
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-black text-white uppercase tracking-widest text-xs font-medium py-3 px-6 hover:bg-gray-900 transition-colors whitespace-nowrap"
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">

          {/* Image Gallery */}
          <div className="w-full md:w-1/2 flex flex-col-reverse sm:flex-row gap-4">
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:w-20 shrink-0 no-scrollbar">
              {images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setMainImage(i)}
                  className={`bg-gray-100 aspect-[3/4] w-16 sm:w-full flex-shrink-0 cursor-pointer border-2 transition-colors ${mainImage === i ? 'border-black' : 'border-transparent hover:border-gray-300'}`}
                >
                  <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="bg-gray-100 aspect-[3/4] w-full flex-grow overflow-hidden">
              <img src={images[mainImage]} alt={product.name} className="w-full h-full object-cover transition-opacity duration-300" />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">ZEXS — {product.category}</p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-3">{product.name}</h1>
            <p className="text-2xl font-light mb-8">{currency}{product.price}.00</p>

            <p className="text-gray-600 font-light leading-relaxed mb-10 max-w-lg text-sm">
              {product.description || 'The foundational piece for any wardrobe. Crafted from heavyweight organic cotton, featuring a relaxed fit, dropped shoulders, and a ribbed crewneck. Designed for longevity and everyday wear.'}
            </p>

            {/* Size Selector */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-medium uppercase tracking-wider">Select Size</span>
                <button className="text-xs text-gray-400 uppercase tracking-wide hover:text-black underline transition-colors">Size Guide</button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center border text-xs font-medium transition-all duration-150 ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300 bg-transparent text-black hover:border-black'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-3">Please select a size to continue.</p>
              )}
            </div>

            {/* Add to Cart Button — observed for sticky bar */}
            <button
              ref={addBtnRef}
              onClick={handleAddToCart}
              className="bg-black text-white uppercase tracking-widest font-medium py-5 px-8 hover:bg-gray-900 transition-colors w-full mb-4"
            >
              Add to Bag
            </button>

            <button className="border border-black text-black uppercase tracking-widest font-medium py-4 px-8 hover:bg-black hover:text-white transition-colors w-full mb-10">
              Save to Wishlist
            </button>

            {/* Accordion Details */}
            <div className="border-t border-gray-100">
              <details className="border-b border-gray-100 group">
                <summary className="flex justify-between items-center py-5 cursor-pointer list-none">
                  <span className="text-xs font-medium uppercase tracking-wider">Details &amp; Care</span>
                  <span className="text-lg font-light text-gray-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="pb-5 text-sm text-gray-600 font-light leading-relaxed space-y-2">
                  <p>100% Heavyweight Organic Cotton · 240 GSM</p>
                  <p>Relaxed fit · Dropped shoulders · Ribbed crewneck</p>
                  <p>Machine wash cold · Do not tumble dry</p>
                  <p>Made in Portugal</p>
                </div>
              </details>
              <details className="border-b border-gray-100 group">
                <summary className="flex justify-between items-center py-5 cursor-pointer list-none">
                  <span className="text-xs font-medium uppercase tracking-wider">Shipping &amp; Returns</span>
                  <span className="text-lg font-light text-gray-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="pb-5 text-sm text-gray-600 font-light leading-relaxed space-y-2">
                  <p>Free standard shipping on orders over $100.</p>
                  <p>Delivery within 3–5 business days.</p>
                  <p>Free returns within 30 days of purchase.</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {related.length > 0 && (
          <div className="mt-24 border-t border-gray-100 pt-16">
            <h2 className="text-xs uppercase tracking-widest font-medium mb-10 text-center">You May Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 gap-y-6">
              {related.map(item => (
                <ProductItems key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Product