import React from 'react'

const PlaceOrder = () => {
  return (
    <div className="py-16 bg-white text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-12 border-b border-black pb-4">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-2/3">
            <form className="space-y-12">
              
              {/* Contact Info */}
              <section>
                <h2 className="text-xl font-medium uppercase tracking-wide mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <input type="email" placeholder="Email Address" className="w-full border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-black transition-colors" required />
                  <div className="flex items-center gap-2 mt-2">
                    <input type="checkbox" id="newsletter" className="accent-black" />
                    <label htmlFor="newsletter" className="text-sm text-gray-600 font-light">Email me with news and offers</label>
                  </div>
                </div>
              </section>

              {/* Shipping Address */}
              <section>
                <h2 className="text-xl font-medium uppercase tracking-wide mb-6">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <input type="text" placeholder="First Name" className="w-full border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-black transition-colors" required />
                  <input type="text" placeholder="Last Name" className="w-full border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-black transition-colors" required />
                  <input type="text" placeholder="Address" className="w-full border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-black transition-colors md:col-span-2" required />
                  <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-black transition-colors md:col-span-2" />
                  <input type="text" placeholder="City" className="w-full border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-black transition-colors" required />
                  <input type="text" placeholder="State" className="w-full border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-black transition-colors" required />
                  <input type="text" placeholder="ZIP code" className="w-full border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-black transition-colors" required />
                  <input type="tel" placeholder="Phone" className="w-full border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-black transition-colors" required />
                </div>
              </section>

              {/* Payment Info */}
              <section>
                <h2 className="text-xl font-medium uppercase tracking-wide mb-6">Payment</h2>
                <div className="border border-gray-200 p-6 space-y-6">
                  <div className="flex gap-4 items-center">
                    <input type="radio" id="credit_card" name="payment_method" className="accent-black" defaultChecked />
                    <label htmlFor="credit_card" className="font-medium uppercase tracking-wider text-sm">Credit Card</label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-8">
                    <input type="text" placeholder="Card number" className="w-full border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-black transition-colors md:col-span-2" required />
                    <input type="text" placeholder="Name on card" className="w-full border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-black transition-colors md:col-span-2" required />
                    <input type="text" placeholder="Expiration date (MM/YY)" className="w-full border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-black transition-colors" required />
                    <input type="text" placeholder="Security code" className="w-full border-b border-gray-300 py-3 px-1 focus:outline-none focus:border-black transition-colors" required />
                  </div>
                </div>
              </section>

              <button type="button" className="w-full bg-black text-white uppercase tracking-widest font-medium py-5 px-8 hover:bg-gray-900 transition-colors mt-8">
                Pay Now
              </button>

            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-50 p-8 sticky top-8">
              <h2 className="text-lg font-medium uppercase tracking-widest mb-6 border-b border-gray-200 pb-4">Order Summary</h2>
              
              <div className="space-y-6 mb-6">
                <div className="flex gap-4">
                  <div className="w-16 h-20 bg-gray-200 shrink-0 relative">
                    <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=100&q=80" alt="Item" className="w-full h-full object-cover grayscale" />
                    <span className="absolute -top-2 -right-2 bg-gray-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">1</span>
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <h3 className="text-sm font-medium uppercase tracking-wide">Essential Tee</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Size: M</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm">$45.00</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-16 h-20 bg-gray-200 shrink-0 relative">
                    <img src="https://images.unsplash.com/photo-1555689502-c4b22d76c56f?auto=format&fit=crop&w=100&q=80" alt="Item" className="w-full h-full object-cover grayscale" />
                    <span className="absolute -top-2 -right-2 bg-gray-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">1</span>
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <h3 className="text-sm font-medium uppercase tracking-wide">Structured Trouser</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Size: 32</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm">$120.00</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-light text-sm">Subtotal</span>
                  <span className="text-sm">$165.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-light text-sm">Shipping</span>
                  <span className="text-sm">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-light text-sm">Taxes</span>
                  <span className="text-sm">$0.00</span>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-6 pt-6 flex justify-between items-center">
                <span className="font-medium uppercase tracking-wider">Total</span>
                <span className="text-2xl font-medium tracking-tight">$165.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder