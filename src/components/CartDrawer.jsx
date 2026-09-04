import React, { useContext, useEffect } from 'react'
import { ShopContext } from './ShopContext'

const CartDrawer = ({ isOpen, onClose }) => {
  const { getCartLines, getCartTotal, currency, removeFromCart, updateCartQty } = useContext(ShopContext)
  const lines = getCartLines()
  const total = getCartTotal()

  // Close on ESC
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-[998] ${isOpen ? 'opacity-40' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[999] flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <p className="text-xs font-medium uppercase tracking-widest">
            Your Bag
            {lines.length > 0 && (
              <span className="ml-2 text-gray-400">({lines.reduce((s, l) => s + l.qty, 0)})</span>
            )}
          </p>
          <button onClick={onClose} className="text-gray-400 hover:text-black transition-colors text-xl leading-none" aria-label="Close cart">✕</button>
        </div>

        {/* Body */}
        <div className="flex-grow overflow-y-auto px-6 py-6">
          {lines.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <p className="text-4xl text-gray-200">—</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Your bag is empty</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {lines.map(({ product, size, qty }) => (
                <div key={`${product._id}-${size}`} className="flex gap-4 border-b border-gray-100 pb-6">
                  <div className="w-20 h-24 bg-gray-100 shrink-0 overflow-hidden">
                    <img src={Array.isArray(product.image) ? product.image[0] : product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-between flex-grow min-w-0">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide truncate">{product.name}</p>
                      <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Size: {size}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-200">
                        <button
                          onClick={() => updateCartQty(product._id, size, qty - 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-black transition-colors text-sm"
                        >−</button>
                        <span className="w-7 h-7 flex items-center justify-center text-xs">{qty}</span>
                        <button
                          onClick={() => updateCartQty(product._id, size, qty + 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-black transition-colors text-sm"
                        >+</button>
                      </div>
                      <p className="text-xs font-medium">{currency}{(product.price * qty).toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(product._id, size)}
                    className="text-gray-300 hover:text-black transition-colors self-start text-xs mt-0.5"
                    aria-label="Remove item"
                  >✕</button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <div className="px-6 py-6 border-t border-gray-200">
            <div className="flex justify-between items-center mb-5">
              <p className="text-xs uppercase tracking-widest text-gray-500">Subtotal</p>
              <p className="text-base font-medium">{currency}{total.toFixed(2)}</p>
            </div>
            <p className="text-xs text-gray-400 mb-5 text-center">Shipping & taxes calculated at checkout</p>
            <a href="/place-order" className="block text-center bg-black text-white uppercase tracking-widest text-xs font-medium py-4 hover:bg-gray-900 transition-colors w-full">
              Checkout
            </a>
            <button onClick={onClose} className="block w-full text-center text-xs uppercase tracking-widest text-gray-400 hover:text-black mt-3 transition-colors py-2">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
