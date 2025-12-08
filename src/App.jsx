import React, { useState } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar/Navbar'
import Portfolio from './pages/Portfolio'
import img14 from './assets/Artsify-Client-Details/img14.jpg'
import img1 from './assets/Artsify-Client-Details/img1.jpg'
import img2 from './assets/Artsify-Client-Details/img2.jpg'
import img3 from './assets/Artsify-Client-Details/img3.jpg'
import img4 from './assets/Artsify-Client-Details/img4.jpg'
import img5 from './assets/Artsify-Client-Details/img5.jpg'
import img6 from './assets/Artsify-Client-Details/img6.jpg'
import img7 from './assets/Artsify-Client-Details/img7.jpg'
import img8 from './assets/Artsify-Client-Details/img8.jpg'
import img9 from './assets/Artsify-Client-Details/img9.jpg'
import img10 from './assets/Artsify-Client-Details/img10.jpg'
import img11 from './assets/Artsify-Client-Details/img11.jpg'

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
                  src={img14}
                  alt="Portrait sketch"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src={img1}
                  alt="Couple portrait"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src={img2}
                  alt="Sketch detail"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src={img3}
                  alt="Portrait study"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src={img4}
                  alt="Graphite artwork"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src={img5}
                  alt="Character sketch"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src={img6}
                  alt="Detailed portrait"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src={img7}
                  alt="Fine-line sketch"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src={img8}
                  alt="Monochrome art"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src={img9}
                  alt="Creative composition"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src={img10}
                  alt="Creative portrait"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-base"
                  src={img11}
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
