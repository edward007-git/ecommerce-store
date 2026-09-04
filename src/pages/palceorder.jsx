import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../components/ShopContext'

const PlaceOrder = () => {
  const { getCartLines, getCartTotal, currency, showToast } = useContext(ShopContext)
  const lines = getCartLines()
  const subtotal = getCartTotal()

  const handlePay = () => {
    showToast('Order placed successfully!', 'success')
  }

  return (
    <div className="py-16 bg-white text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-12 border-b border-black pb-4">Checkout</h1>

        {lines.length === 0 ? (
          <div className="text-center py-28">
            <p className="text-4xl text-gray-100 mb-6">—</p>
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">Your bag is empty.</p>
            <Link to="/collection" className="border-b border-black pb-1 uppercase tracking-widest text-xs hover:text-gray-600 transition-colors">
              Explore Collection
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-2/3">
              <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); handlePay() }}>

                {/* Contact Info */}
                <section>
                  <h2 className="text-xs font-medium uppercase tracking-widest mb-6 pb-3 border-b border-gray-100">Contact Information</h2>
                  <div className="space-y-4">
                    <input type="email" placeholder="Email Address" className="w-full border-b border-gray-200 py-3 px-1 focus:outline-none focus:border-black transition-colors text-sm" required />
                    <div className="flex items-center gap-2 mt-2">
                      <input type="checkbox" id="newsletter" className="accent-black" />
                      <label htmlFor="newsletter" className="text-xs text-gray-500 font-light">Email me with news and offers</label>
                    </div>
                  </div>
                </section>

                {/* Shipping Address */}
                <section>
                  <h2 className="text-xs font-medium uppercase tracking-widest mb-6 pb-3 border-b border-gray-100">Shipping Address</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                    <input type="text" placeholder="First Name" className="w-full border-b border-gray-200 py-3 px-1 focus:outline-none focus:border-black transition-colors text-sm" required />
                    <input type="text" placeholder="Last Name" className="w-full border-b border-gray-200 py-3 px-1 focus:outline-none focus:border-black transition-colors text-sm" required />
                    <input type="text" placeholder="Address" className="w-full border-b border-gray-200 py-3 px-1 focus:outline-none focus:border-black transition-colors text-sm md:col-span-2" required />
                    <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full border-b border-gray-200 py-3 px-1 focus:outline-none focus:border-black transition-colors text-sm md:col-span-2" />
                    <input type="text" placeholder="City" className="w-full border-b border-gray-200 py-3 px-1 focus:outline-none focus:border-black transition-colors text-sm" required />
                    <input type="text" placeholder="State / Province" className="w-full border-b border-gray-200 py-3 px-1 focus:outline-none focus:border-black transition-colors text-sm" required />
                    <input type="text" placeholder="ZIP / Postal code" className="w-full border-b border-gray-200 py-3 px-1 focus:outline-none focus:border-black transition-colors text-sm" required />
                    <input type="tel" placeholder="Phone" className="w-full border-b border-gray-200 py-3 px-1 focus:outline-none focus:border-black transition-colors text-sm" required />
                  </div>
                </section>

                {/* Payment */}
                <section>
                  <h2 className="text-xs font-medium uppercase tracking-widest mb-6 pb-3 border-b border-gray-100">Payment</h2>
                  <div className="border border-gray-200 p-6 space-y-6">
                    <div className="flex gap-3 items-center">
                      <input type="radio" id="credit_card" name="payment_method" className="accent-black" defaultChecked />
                      <label htmlFor="credit_card" className="font-medium uppercase tracking-wider text-xs">Credit / Debit Card</label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pl-6">
                      <input type="text" placeholder="Card number" className="w-full border-b border-gray-200 py-3 px-1 focus:outline-none focus:border-black transition-colors text-sm md:col-span-2" required />
                      <input type="text" placeholder="Name on card" className="w-full border-b border-gray-200 py-3 px-1 focus:outline-none focus:border-black transition-colors text-sm md:col-span-2" required />
                      <input type="text" placeholder="Expiry (MM/YY)" className="w-full border-b border-gray-200 py-3 px-1 focus:outline-none focus:border-black transition-colors text-sm" required />
                      <input type="text" placeholder="CVV" className="w-full border-b border-gray-200 py-3 px-1 focus:outline-none focus:border-black transition-colors text-sm" required />
                    </div>
                  </div>
                </section>

                <button type="submit" className="w-full bg-black text-white uppercase tracking-widest text-xs font-medium py-5 px-8 hover:bg-gray-900 transition-colors">
                  Place Order — {currency}{subtotal.toFixed(2)}
                </button>

              </form>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-50 p-8 sticky top-8">
                <h2 className="text-xs font-medium uppercase tracking-widest mb-6 border-b border-gray-200 pb-4">Order Summary</h2>

                <div className="space-y-5 mb-6">
                  {lines.map(({ product, size, qty }) => (
                    <div key={`${product._id}-${size}`} className="flex gap-4">
                      <div className="w-14 h-18 bg-gray-200 shrink-0 relative overflow-hidden" style={{ height: '72px' }}>
                        <img
                          src={Array.isArray(product.image) ? product.image[0] : product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute -top-1.5 -right-1.5 bg-gray-400 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">{qty}</span>
                      </div>
                      <div className="flex-grow flex flex-col justify-center">
                        <p className="text-xs font-medium uppercase tracking-wide">{product.name}</p>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Size: {size}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs">{currency}{(product.price * qty).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-5 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-light text-xs">Subtotal</span>
                    <span className="text-xs">{currency}{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-light text-xs">Shipping</span>
                    <span className="text-xs text-gray-400">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-light text-xs">Taxes</span>
                    <span className="text-xs text-gray-400">Calculated at checkout</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-5 pt-5 flex justify-between items-center">
                  <span className="text-xs font-medium uppercase tracking-wider">Total</span>
                  <span className="text-xl font-medium">{currency}{subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PlaceOrder