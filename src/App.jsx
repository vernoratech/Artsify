import React, { useState } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar/Navbar'
import Portfolio from './pages/Portfolio'

const App = () => {
  const [activePage, setActivePage] = useState('Home')

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavClick={setActivePage} />

      {/* Placeholder Content */}
      {activePage === 'Portfolio' ? (
        <Portfolio />
      ) : (
        <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src="/Artsify-Client-Details/img14.jpg"
                  alt="Portrait sketch"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src="/Artsify-Client-Details/img1.jpg"
                  alt="Couple portrait"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src="/Artsify-Client-Details/img2.jpg"
                  alt="Sketch detail"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src="/Artsify-Client-Details/img3.jpg"
                  alt="Portrait study"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src="/Artsify-Client-Details/img4.jpg"
                  alt="Graphite artwork"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src="/Artsify-Client-Details/img5.jpg"
                  alt="Character sketch"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src="/Artsify-Client-Details/img6.jpg"
                  alt="Detailed portrait"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src="/Artsify-Client-Details/img7.jpg"
                  alt="Fine-line sketch"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src="/Artsify-Client-Details/img8.jpg"
                  alt="Monochrome art"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src="/Artsify-Client-Details/img9.jpg"
                  alt="Creative composition"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src="/Artsify-Client-Details/img10.jpg"
                  alt="Creative portrait"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src="/Artsify-Client-Details/img11.jpg"
                  alt="Concept sketch"
                />
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  )
}

export default App
