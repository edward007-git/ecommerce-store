import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-16 bg-white text-black">
      <div className="max-w-5xl w-full px-4 sm:px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-16 uppercase text-center">About ZEXS</h1>
        
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <div className="w-full md:w-1/2">
            <div className="bg-gray-100 aspect-[4/5] w-full flex items-center justify-center overflow-hidden">
               {/* Minimal Placeholder or actual image */}
               <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80" alt="About ZEXS" className="w-full h-full object-cover grayscale opacity-90 transition-opacity duration-500 hover:opacity-100" />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-8 text-lg font-light leading-relaxed text-gray-800">
            <p className="text-2xl font-normal text-black leading-snug">
              ZEXS was born out of a desire to create a minimalist canvas for expression. We believe that simplicity is the ultimate sophistication.
            </p>
            <p>
              Our designs are stripped of the non-essential, leaving only what is truly necessary. Every piece in our collection is crafted with intention. We source the finest materials and employ meticulous construction techniques to ensure longevity. 
            </p>
            <p>
              Our aesthetic is timeless, designed to transcend seasonal trends. We are committed to a philosophy of subtraction. By removing the excess, we highlight the beauty of the core form. This is ZEXS.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 uppercase text-center tracking-widest">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold uppercase tracking-wider">Simplicity</h3>
              <p className="text-gray-600 font-light leading-relaxed">We strip away the unnecessary to reveal the essential truth of form.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold uppercase tracking-wider">Longevity</h3>
              <p className="text-gray-600 font-light leading-relaxed">Designed to endure, both in physical quality and timeless style.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold uppercase tracking-wider">Intention</h3>
              <p className="text-gray-600 font-light leading-relaxed">Every stitch, every cut, every detail is considered with purpose.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About