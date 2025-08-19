import './App.css'
import { useState, useEffect } from 'react'

function Header() {
  return (
    <header className="header">
      <h1>Hello, I'm Sean!</h1>
      <p>Welcome to my page</p>
    </header>
  )
}

function Body() {
  const base = import.meta.env.BASE_URL
  const images = Array.from({ length: 12 }, (_, i) => `${base}images/car${i + 1}.jpg`)
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [paused, images.length])

  const next = () => setCurrent((prev) => (prev + 1) % images.length)
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length)
  const togglePause = () => setPaused((p) => !p)

  return (
    <main className="body">
      <h2>About Me</h2>
      <p>I enjoy working on cars with my Dad, which included restoring a 1970 Ford Mustang in honor of my Wife's Father</p>
      <div style={{ textAlign: 'center', margin: '24px 0' }}>
        <img
          src={images[current]}
          alt="Car hobby"
          className="slideshow-img"
        />
        <div style={{ marginTop: '8px' }}>
          <button onClick={prev}>Prev</button>
          <button onClick={togglePause}>{paused ? 'Play' : 'Pause'}</button>
          <button onClick={next}>Next</button>
        </div>
      </div>
    </main>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Sean M. | Class Introduction</p>
    </footer>
  )
}

function App() {
  return (
    <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App