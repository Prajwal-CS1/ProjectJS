import { motion } from 'framer-motion';
import planet1 from '../assets/planet1.jpg';
import planet2 from '../assets/planet2.jpg';
import planet3 from '../assets/planet3.jpg';
import mercury from '../assets/mercury.jpg';
import venus from '../assets/venus.jpg';
import earth from '../assets/earth.jpg';
import mars from '../assets/mars.jpg';
import jupiter from '../assets/jupiter.jpg';
import saturn from '../assets/saturn.jpg';
import uranus from '../assets/uranus.jpg';
import neptune from '../assets/neptune.jpg';
import solarSystemBg from '../assets/solarsystem.jpg';
import StarsBackground from '../components/StarsBackground';

const Planets = () => {
  const planets = [
    { 
      name: "Mercury", 
      description: "The smallest planet with extreme temperature variations between day and night.",
      image: mercury,
      facts: [
        "Diameter: 4,880 km (38% of Earth)",
        "Surface Temp: -173°C to 427°C",
        "No atmosphere to retain heat"
      ],
      color: "from-gray-400 to-gray-600",
      stats: {
        distance: "58M km from Sun",
        day: "59 Earth days",
        year: "88 Earth days"
      }
    },
    { 
      name: "Venus", 
      description: "Earth's twin with a toxic atmosphere of thick yellow clouds.",
      image: venus,
      facts: [
        "Hottest planet: 465°C average",
        "Rotates backwards (retrograde rotation)",
        "Day longer than its year"
      ],
      color: "from-yellow-200 to-amber-400",
      stats: {
        distance: "108M km from Sun",
        day: "243 Earth days",
        year: "225 Earth days"
      }
    },
    { 
      name: "Earth", 
      description: "Our home, the only known planet to harbor life.",
      image: earth,
      facts: [
        "Diameter: 12,742 km",
        "71% surface covered in water",
        "Only planet with plate tectonics"
      ],
      color: "from-blue-400 to-emerald-500",
      stats: {
        distance: "150M km from Sun",
        day: "24 hours",
        year: "365.25 days"
      }
    },
    { 
      name: "Mars", 
      description: "The red planet with the largest volcano in the solar system.",
      image: mars,
      facts: [
        "Olympus Mons: 3x Everest's height",
        "Thin CO₂ atmosphere",
        "Two irregular moons"
      ],
      color: "from-red-700 to-orange-600",
      stats: {
        distance: "228M km from Sun",
        day: "24.6 hours",
        year: "687 Earth days"
      }
    },
    { 
      name: "Jupiter", 
      description: "The gas giant with a storm larger than Earth that has raged for centuries.",
      image: jupiter,
      facts: [
        "Diameter: 139,820 km (11x Earth)",
        "79 known moons",
        "Strongest magnetic field"
      ],
      color: "from-amber-500 to-yellow-700",
      stats: {
        distance: "778M km from Sun",
        day: "9.9 hours",
        year: "11.9 Earth years"
      }
    },
    { 
      name: "Saturn", 
      description: "Famous for its spectacular ring system made of ice and rock.",
      image: saturn,
      facts: [
        "Rings span 282,000 km wide",
        "62 confirmed moons",
        "Least dense planet"
      ],
      color: "from-yellow-300 to-amber-400",
      stats: {
        distance: "1.4B km from Sun",
        day: "10.7 hours",
        year: "29.5 Earth years"
      }
    },
    { 
      name: "Uranus", 
      description: "The ice giant that rotates on its side with extreme seasons.",
      image: uranus,
      facts: [
        "Rotates at 98° tilt",
        "13 faint rings",
        "Methane gives blue color"
      ],
      color: "from-teal-300 to-cyan-500",
      stats: {
        distance: "2.9B km from Sun",
        day: "17.2 hours",
        year: "84 Earth years"
      }
    },
    { 
      name: "Neptune", 
      description: "The windiest planet with supersonic storms and icy composition.",
      image: neptune,
      facts: [
        "Wind speeds up to 2,100 km/h",
        "Discovered through math",
        "14 known moons"
      ],
      color: "from-blue-400 to-indigo-600",
      stats: {
        distance: "4.5B km from Sun",
        day: "16.1 hours",
        year: "165 Earth years"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <StarsBackground />
      
      {/* Hero Section with Background Image */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-32 px-6 flex items-center justify-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={solarSystemBg} 
            alt="Solar System Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Solar System
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Explore all 8 planets of our cosmic neighborhood
          </motion.p>
        </div>
      </motion.section>

      {/* Planets Grid */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Our Planetary System
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planets.map((planet, index) => (
              <motion.div
                key={planet.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-blue-400/30 transition-all duration-300 shadow-xl hover:shadow-blue-500/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${planet.color} opacity-20 z-0`} />
                <img 
                  src={planet.image} 
                  alt={planet.name}
                  className="w-full h-48 object-cover brightness-75 group-hover:brightness-90 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                <div className="relative z-10 p-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {planet.name}
                  </h3>
                  <p className="text-blue-200 text-sm mb-3">{planet.description}</p>
                  
                  <ul className="space-y-1 text-xs text-gray-300">
                    {planet.facts.map((fact, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-4 h-4 mr-2 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar System Scale Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Planetary Distances (Scaled)
            </span>
          </h2>
          
          <div className="relative h-4 bg-gray-800 rounded-full mx-4 md:mx-8 overflow-hidden">
            {planets.map((planet, i) => (
              <motion.div
                key={`scale-${planet.name}`}
                className={`absolute top-1/2 transform -translate-y-1/2 rounded-full ${
                  i === 0 ? 'bg-yellow-400' : 
                  i === 1 ? 'bg-orange-300' :
                  i === 2 ? 'bg-blue-400' :
                  i === 3 ? 'bg-red-500' :
                  i === 4 ? 'bg-amber-500' :
                  i === 5 ? 'bg-yellow-200' :
                  i === 6 ? 'bg-teal-300' : 'bg-indigo-500'
                }`}
                style={{
                  left: `${(i / (planets.length - 1)) * 95}%`,
                  width: `${Math.max(4, 12 - i)}px`,
                  height: `${Math.max(4, 12 - i)}px`
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.2 }}
              />
            ))}
          </div>
          
          <div className="mt-8 grid grid-cols-8 gap-2 text-xs text-gray-400">
            {planets.map(planet => (
              <div key={`label-${planet.name}`}>{planet.name}</div>
            ))}
          </div>
          
          <p className="mt-12 text-gray-400 max-w-2xl mx-auto">
            This simplified scale shows the relative positions. Actual distances range from 
            Mercury's 58 million km to Neptune's 4.5 billion km from the Sun!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Planets;