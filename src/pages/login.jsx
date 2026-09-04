import React, { useState } from 'react'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-16 bg-white text-black">
      <div className="max-w-md w-full px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 uppercase text-center">
          {isLogin ? 'Sign In' : 'Create Account'}
        </h1>
        <p className="text-center text-gray-500 font-light mb-10">
          {isLogin ? 'Access your personal account.' : 'Join ZEXS for exclusive access.'}
        </p>

        <form className="flex flex-col gap-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium uppercase tracking-wider mb-2" htmlFor="name">Full Name</label>
              <input type="text" id="name" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-black transition-colors" placeholder="Jane Doe" required />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium uppercase tracking-wider mb-2" htmlFor="email">Email Address</label>
            <input type="email" id="email" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-black transition-colors" placeholder="email@example.com" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium uppercase tracking-wider mb-2" htmlFor="password">Password</label>
            <input type="password" id="password" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-black transition-colors" placeholder="••••••••" required />
          </div>

          {isLogin && (
            <div className="flex justify-end">
              <a href="#" className="text-xs text-gray-500 uppercase tracking-wide hover:text-black transition-colors">Forgot Password?</a>
            </div>
          )}

          <button type="submit" className="mt-4 bg-black text-white uppercase tracking-widest font-medium py-4 px-8 hover:bg-gray-900 transition-colors w-full">
            {isLogin ? 'Sign In' : 'Register'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              type="button" 
              onClick={() => setIsLogin(!isLogin)} 
              className="ml-2 text-black font-medium uppercase tracking-wider hover:underline"
            >
              {isLogin ? 'Register' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login