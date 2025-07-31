import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import nebulaHero from '../assets/nebula-hero.jpg';
import nebula1 from '../assets/nebula1.jpg';
import nebula2 from '../assets/nebula2.jpg';
import nebula3 from '../assets/nebula3.jpg';

export default function Nebula() {
  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nebulas = [
    {
      name: "Orion Nebula",
      description: "A stellar nursery visible to the naked eye, located in Orion's sword.",
      image: nebula1,
      facts: [
        "Distance: 1,344 light-years",
        "Age: About 3 million years",
        "Contains the Trapezium star cluster"
      ]
    },
    {
      name: "Helix Nebula",
      description: "One of the closest planetary nebulae to Earth, resembling a giant eye.",
      image: nebula2,
      facts: [
        "Distance: 655 light-years",
        "Age: About 10,600 years",
        "Span: 2.5 light-years across"
      ]
    },
    {
      name: "Crab Nebula",
      description: "Supernova remnant with a pulsar at its center, first observed in 1054 AD.",
      image: nebula3,
      facts: [
        "Distance: 6,500 light-years",
        "Expanding at 1,500 km/s",
        "Pulsar rotates 30 times per second"
      ]
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src={nebulaHero} 
          alt="Cosmic Nebula" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/30 to-black/80"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Cosmic Nebulas
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Explore the most spectacular stellar nurseries in the universe
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/planets" 
              className="inline-block px-6 py-2 border-2 border-purple-400 text-purple-400 rounded-full font-medium hover:bg-purple-400/10 transition-all transform hover:scale-105 hover:text-white hover:border-purple-300"
            >
              Explore Planets Instead
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Nebula Gallery Section */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Stellar Wonders
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {nebulas.map((nebula, index) => (
              <motion.div
                key={nebula.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-purple-900/30 hover:border-purple-400/50 transition-all duration-300 shadow-xl hover:shadow-purple-500/20"
              >
                <img 
                  src={nebula.image} 
                  alt={nebula.name}
                  className="w-full h-64 object-cover brightness-75 group-hover:brightness-90 transition-all duration-500 transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                <div className="relative z-10 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {nebula.name}
                  </h3>
                  <p className="text-purple-200 mb-4">{nebula.description}</p>
                  <ul className="space-y-2 text-gray-300">
                    {nebula.facts.map((fact, i) => (
                      <motion.li 
                        key={i}
                        whileHover={{ x: 5 }} 
                        className="flex items-start"
                      >
                        <svg className="w-5 h-5 mr-2 text-purple-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {fact}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-900/80 backdrop-blur-lg rounded-xl p-8 border border-purple-900/30"
          >
            <h2 className="text-3xl font-bold mb-6 text-purple-300">The Science of Nebulas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">How Nebulas Form</h3>
                <p className="text-gray-300 mb-4">
                  Nebulas are formed when portions of the interstellar medium collapse under their own gravity, 
                  often triggered by supernova explosions or galactic collisions.
                </p>
                <p className="text-gray-300">
                  They consist of hydrogen, helium, and other ionized gases, along with cosmic dust.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Types of Nebulas</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span> Emission Nebulas (glow from ionized gases)
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span> Reflection Nebulas (reflect light from nearby stars)
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span> Dark Nebulas (absorb light, appearing as silhouettes)
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span> Planetary Nebulas (formed from dying stars)
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}