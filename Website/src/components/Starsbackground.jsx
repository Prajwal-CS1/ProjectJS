// src/components/StarsBackground.jsx
import { useEffect, useState } from 'react'

export default function StarsBackground() {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const newStars = []
    for (let i = 0; i < 100; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3,
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: Math.random(),
        animationDuration: `${5 + Math.random() * 15}s`,
        animationDelay: `${Math.random() * 5}s`,
      })
    }
    setStars(newStars)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: star.opacity,
            animation: `twinkle ${star.animationDuration} infinite alternate ${star.animationDelay}`,
          }}
        />
      ))}
    </div>
  )
}