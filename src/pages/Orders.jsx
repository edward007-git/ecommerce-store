import React from 'react'
import { Link } from 'react-router-dom'

const Orders = () => {
  const orders = [
    {
      id: '#ORD-789012',
      date: 'Aug 24, 2026',
      status: 'Delivered',
      total: 165.00,
      items: [
        {
          name: 'Essential Tee',
          size: 'M',
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=100&q=80'
        },
        {
          name: 'Structured Trouser',
          size: '32',
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?auto=format&fit=crop&w=100&q=80'
        }
      ]
    },
    {
      id: '#ORD-345678',
      date: 'Jul 12, 2026',
      status: 'Processing',
      total: 45.00,
      items: [
        {
          name: 'Classic Cap',
          size: 'OS',
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=100&q=80'
        }
      ]
    }
  ]

  return (
    <div className="py-16 bg-white text-black min-h-[80vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-12 border-b border-black pb-4">Order History</h1>
        
        {orders.length > 0 ? (
          <div className="space-y-12">
            {orders.map((order) => (
              <div key={order.id} className="border border-gray-200">
                {/* Order Header */}
                <div className="bg-gray-50 border-b border-gray-200 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex gap-8">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Order Placed</p>
                      <p className="font-medium text-sm">{order.date}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Total</p>
                      <p className="font-medium text-sm">${order.total.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Order #</p>
                    <p className="font-medium text-sm">{order.id}</p>
                  </div>
                </div>
                
                {/* Order Items */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-sm font-medium uppercase tracking-wide">
                      Status: <span className={order.status === 'Delivered' ? 'text-green-600' : 'text-orange-500'}>{order.status}</span>
                    </h3>
                    <button className="text-xs uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
                      Track Order
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex gap-6">
                        <div className="w-20 h-24 bg-gray-100 shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                        </div>
                        <div className="flex flex-col justify-center flex-grow">
                          <Link to="/product/1" className="text-base font-medium uppercase tracking-wide hover:underline inline-block mb-1">{item.name}</Link>
                          <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Size: {item.size}</p>
                          <p className="text-xs text-gray-500 uppercase tracking-widest">Qty: {item.quantity}</p>
                        </div>
                        <div className="flex items-center">
                           <button className="text-xs uppercase tracking-widest text-gray-500 hover:text-black underline">View Item</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 font-light mb-8">You haven't placed any orders yet.</p>
            <Link to="/" className="border-b border-black pb-1 uppercase tracking-widest text-sm hover:text-gray-600 transition-colors">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Orders
