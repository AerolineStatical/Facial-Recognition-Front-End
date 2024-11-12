'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const SignUpLogin = ({ onSkipLogin }: { onSkipLogin: () => void }) => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded-lg shadow-md w-[350px] z-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <p className="text-gray-900 mb-6">Welcome to our hotel management system</p>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-900 mb-1">Username</label>
            <input id="username" type="text" placeholder="Enter your username" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-1">Password</label>
            <input id="password" type="password" placeholder="Enter your password" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <button type="button" onClick={onSkipLogin} className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mb-2">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <button onClick={() => setIsLogin(!isLogin)} className="w-full bg-gray-200 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-300 mb-2">
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
        </button>
        {isLogin && (
          <button className="w-full text-blue-600 hover:underline">Forgot Password?</button>
        )}
        {!isLogin && (
          <button className="w-full border border-gray-300 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-100">
            Register Facial Data
          </button>
        )}
        <button onClick={onSkipLogin} className="w-full mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
          Skip Login (Demo)
        </button>
      </div>
    </div>
  )
}

const Dashboard = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <button onClick={onLogout} className="text-gray-900 hover:text-gray-800">Logout</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Account Overview */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Account Overview</h2>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john@example.com</p>
            <p><strong>Current Booking:</strong> Room 101, 3 nights</p>
            <button className="mt-4 bg-gray-200 text-gray-900 py-2 px-4 rounded hover:bg-gray-300">Change Password</button>
          </div>
          {/* Booking Management */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Booking Management</h2>
            <Link href="/booking" className="block w-full bg-blue-600 text-white py-2 px-4 rounded mb-2 hover:bg-blue-700 text-center">Modify Booking</Link>
            <button className="w-full bg-gray-200 text-gray-900 py-2 px-4 rounded hover:bg-gray-300">Cancel Booking</button>
          </div>
          {/* Room Preferences */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Room Preferences</h2>
            <div className="space-y-2">
              <label className="flex items-center text-gray-900">
                <input type="checkbox" className="mr-2" />
                King-size bed
              </label>
              <label className="flex items-center text-gray-900">
                <input type="checkbox" className="mr-2" />
                Ocean view
              </label>
              <label className="flex items-center text-gray-900">
                <input type="checkbox" className="mr-2" />
                Quiet room
              </label>
            </div>
          </div>
          {/* Facial ID Settings */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Facial ID Settings</h2>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-900">Enable Facial Recognition</span>
              <input type="checkbox" />
            </div>
            <button className="w-full bg-gray-200 text-gray-900 py-2 px-4 rounded hover:bg-gray-300">Update Facial Data</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const GuestInterface: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check localStorage on component mount to see if the user is logged in
  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn')
    if (storedLoginState === 'true') {
      setIsLoggedIn(true)
    }
  }, [])

  const handleSkipLogin = () => {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', 'true') // Store login state
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.setItem('isLoggedIn', 'false') // Clear login state
  }

  return (
    <div>
      {isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <SignUpLogin onSkipLogin={handleSkipLogin} />}
    </div>
  )
}

export default GuestInterface
