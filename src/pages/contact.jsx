import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-16 bg-white text-black">
      <div className="max-w-4xl w-full px-4 sm:px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 uppercase text-center">Contact Us</h1>
        <p className="text-center text-gray-500 font-light mb-16 max-w-xl mx-auto">
          We are here to assist you. Reach out for any inquiries regarding our collections, orders, or general questions.
        </p>
        
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2 space-y-10">
            <div>
              <h2 className="text-lg font-bold uppercase tracking-widest mb-4 border-b border-black pb-2 inline-block">Client Services</h2>
              <p className="text-gray-700 font-light mt-2">Mon - Fri: 9:00 AM - 6:00 PM (EST)</p>
              <p className="text-gray-700 font-light mt-1">support@zexs.com</p>
              <p className="text-gray-700 font-light mt-1">+1 (800) 123-4567</p>
            </div>
            
            <div>
              <h2 className="text-lg font-bold uppercase tracking-widest mb-4 border-b border-black pb-2 inline-block">Headquarters</h2>
              <p className="text-gray-700 font-light mt-2">123 Minimalist Avenue</p>
              <p className="text-gray-700 font-light mt-1">Suite 400</p>
              <p className="text-gray-700 font-light mt-1">New York, NY 10001</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <form className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium uppercase tracking-wider mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-black transition-colors" placeholder="Jane Doe" required />
              </div>
              <div>
                <label className="block text-sm font-medium uppercase tracking-wider mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-black transition-colors" placeholder="jane@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium uppercase tracking-wider mb-2" htmlFor="message">Message</label>
                <textarea id="message" rows="4" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-black transition-colors resize-none" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="mt-4 bg-black text-white uppercase tracking-widest font-medium py-4 px-8 hover:bg-gray-900 transition-colors w-full md:w-auto self-start">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact