import React from 'react'
import './App.css'
import Navbar from './components/layout/Navbar/Navbar'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Placeholder Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center font-serif text-gray-400 mt-20">
          <p>Scroll or resize window to test responsiveness</p>
        </div>
      </main>
    </div>
  )
}

export default App
