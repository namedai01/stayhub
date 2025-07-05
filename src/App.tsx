import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isBeating, setIsBeating] = useState(false)
  const [heartSize, setHeartSize] = useState(1)
  const [clickCount, setClickCount] = useState(0)

  // Auto-beat animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBeating(true)
      setTimeout(() => setIsBeating(false), 600)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Handle heart click
  const handleHeartClick = () => {
    setClickCount(clickCount + 1)
    setIsBeating(true)
    setHeartSize(1.2)
    
    setTimeout(() => {
      setIsBeating(false)
      setHeartSize(1)
    }, 300)
  }

  return (
    <div className="love-container">
      <div className="background-hearts">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            💕
          </div>
        ))}
      </div>
      
      <div className="main-content">
        <h1 className="love-title">Dynamic Heart for Love</h1>
        
        <div 
          className={`main-heart ${isBeating ? 'beating' : ''}`}
          style={{ transform: `scale(${heartSize})` }}
          onClick={handleHeartClick}
        >
          ❤️
        </div>
        
        <p className="love-message">
          Click the heart to show your love!
        </p>
        
        <div className="love-counter">
          <span className="counter-text">Love clicks: </span>
          <span className="counter-number">{clickCount}</span>
        </div>
        
        <div className="love-quotes">
          <p className="quote">
            "Love is not just looking at each other, it's looking in the same direction." 💖
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
