import { useEffect, useRef } from 'react';
import blackholeVideo from '../assets/blackhole.mp4';
import blackholeFallback from '../assets/blackhole.jpg';
import nebula from '../assets/nebula.jpg';
import planet1 from '../assets/planet1.jpg';
import planet2 from '../assets/planet2.jpg';
import planet3 from '../assets/planet3.jpg';

export default function Home() {
  const videoRef = useRef(null);

  // Enhanced video loading
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('error', () => {
        console.log("Video failed to load, using fallback");
        const fallback = document.getElementById('video-fallback');
        if (fallback) fallback.style.display = 'block';
      });
      
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play().catch(e => console.log("Autoplay prevented:", e));
      });
    }
  }, []);

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  const planets = [
    { 
      name: "Jupiter", 
      description: "The largest planet in our solar system, Jupiter's massive gravity influences the orbits of other planets. Its Great Red Spot is a storm larger than Earth that has raged for centuries.",
      image: planet1,
      facts: [
        "Largest planet (11x Earth's diameter)",
        "79 known moons (including volcanic Io)",
        "11.86 Earth years to orbit the Sun"
      ],
      colorClass: "from-amber-600 to-yellow-800"
    },
    { 
      name: "Saturn", 
      description: "Known for its stunning rings made of ice and rock, Saturn is a gas giant with a density so low it could float in water. Its hexagonal polar storm is one of the solar system's most mysterious features.",
      image: planet2,
      facts: [
        "Second largest planet",
        "82 moons (Titan has liquid methane lakes)",
        "29.4 Earth years per orbit"
      ],
      colorClass: "from-yellow-300 to-amber-500"
    },
    { 
      name: "Mars", 
      description: "Mars, the Red Planet, has the tallest volcano (Olympus Mons) and deepest canyon (Valles Marineris) in the solar system. Evidence suggests it once had flowing water and may harbor microbial life.",
      image: planet3,
      facts: [
        "Thin CO₂ atmosphere",
        "2 moons (Phobos and Deimos)",
        "687 Earth days per year"
      ],
      colorClass: "from-red-700 to-orange-600"
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover brightness-[0.4]"
          >
            <source src={blackholeVideo} type="video/mp4" />
          </video>
          <img 
            id="video-fallback"
            src={blackholeFallback}
            alt="Black Hole Fallback"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.3] hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-on-scroll">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Explore the Cosmos
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Dive into the universe's most fascinating phenomena - from black holes to galaxies and beyond.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium text-white hover:opacity-90 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20 hover:shadow-purple-500/40">
            Begin Exploration
          </button>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce flex flex-col items-center">
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span className="text-blue-300 text-sm mt-1">Scroll Down</span>
          </div>
        </div>
      </section>

      {/* Planets Section with Enhanced Descriptions */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center animate-on-scroll">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Our Planetary Neighbors
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {planets.map((planet, index) => (
              <div 
                key={planet.name}
                className="animate-on-scroll group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-blue-400/30 transition-all duration-300 shadow-xl hover:shadow-blue-500/10"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${planet.colorClass} opacity-20 z-0`} />
                <img 
                  src={planet.image} 
                  alt={planet.name}
                  className="w-full h-64 object-cover brightness-75 group-hover:brightness-90 transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="relative z-10 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {planet.name}
                  </h3>
                  <p className="text-blue-200 mb-4">{planet.description}</p>
                  <ul className="space-y-2 text-gray-300">
                    {planet.facts.map((fact, i) => (
                      <li key={i} className="flex items-start transition-transform hover:translate-x-1">
                        <svg className="w-5 h-5 mr-2 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nebula Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <img 
          src={nebula} 
          alt="Nebula" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-purple-900/40 to-black/70" />
        
        <div className="relative z-10 max-w-6xl mx-auto animate-on-scroll">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Cosmic <span className="text-blue-300">Nebulas</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
            Nebulas are stellar nurseries where stars are born. These magnificent clouds of gas and dust create the most spectacular light shows in the universe.
          </p>
          <button className="px-6 py-2 border-2 border-blue-400 text-blue-400 rounded-full font-medium hover:bg-blue-400/10 transition-all transform hover:scale-105 hover:text-white hover:border-blue-300">
            Discover Nebulas
          </button>
        </div>
      </section>
    </div>
  );
}