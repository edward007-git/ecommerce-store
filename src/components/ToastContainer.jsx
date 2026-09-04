import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'

const ToastContainer = () => {
  const { toasts, dismissToast } = useContext(ShopContext)

  return (
    <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-center justify-between gap-6 px-5 py-4 min-w-[240px] max-w-xs shadow-lg border transition-all duration-300 animate-slide-in
            ${toast.type === 'error'
              ? 'bg-white border-black text-black'
              : 'bg-black text-white border-black'
            }`}
        >
          <div className="flex items-center gap-3">
            {toast.type === 'error' ? (
              <span className="text-lg leading-none">✕</span>
            ) : (
              <span className="text-lg leading-none">✓</span>
            )}
            <p className="text-xs uppercase tracking-widest font-medium">{toast.message}</p>
          </div>
          <button
            onClick={() => dismissToast(toast.id)}
            className="text-xs opacity-50 hover:opacity-100 transition-opacity leading-none shrink-0"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )
}

export default ToastContainer
