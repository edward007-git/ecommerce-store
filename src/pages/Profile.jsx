import React from 'react'

const Profile = () => {
  return (
    <div className="py-16 bg-white text-black min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-12 border-b border-black pb-4">My Profile</h1>
        
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/3">
            <div className="bg-gray-100 aspect-square w-full flex items-center justify-center mb-6">
              <span className="text-4xl font-light text-gray-400">JD</span>
            </div>
            <button className="w-full border border-black py-3 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors">
              Edit Avatar
            </button>
          </div>
          
          <div className="w-full md:w-2/3 space-y-10">
            <div>
              <h2 className="text-lg font-medium uppercase tracking-wide mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">First Name</p>
                  <p className="font-medium">Jane</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Last Name</p>
                  <p className="font-medium">Doe</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="font-medium">jane.doe@example.com</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <button className="mt-6 text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 transition-colors">Edit Details</button>
            </div>
            
            <div className="border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium uppercase tracking-wide mb-6">Security</h2>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Password</p>
                  <p className="font-medium">••••••••</p>
                </div>
                <button className="text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 transition-colors">Change Password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
