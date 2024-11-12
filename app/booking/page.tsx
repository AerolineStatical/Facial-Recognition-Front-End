'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function BookingPage() {
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Booking & Amenities</h1> {/* Darkened */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Modify Booking</h2> {/* Darkened */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900 mb-1">Select New Dates</label> {/* Darkened */}
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="space-y-2 mb-6">
            <h3 className="font-medium text-gray-900">Add Amenities</h3> {/* Darkened */}
            <label className="flex items-center text-gray-900"> {/* Darkened */}
              <input type="checkbox" className="mr-2" />
              Extra Towels
            </label>
            <label className="flex items-center text-gray-900"> {/* Darkened */}
              <input type="checkbox" className="mr-2" />
              Luxury Toiletries
            </label>
            <label className="flex items-center text-gray-900"> {/* Darkened */}
              <input type="checkbox" className="mr-2" />
              Minibar Access
            </label>
          </div>
          <div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mr-2">Save Changes</button>
            <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">Cancel Booking</button>
          </div>
        </div>
        <Link href="/dashboard" className="mt-4 inline-block text-blue-600 hover:underline">Back to Dashboard</Link>
      </div>
    </div>
  )
}
