import blackhole from '../assets/blackhole.jpg';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section with Dark Overlay */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src={blackhole} 
          alt="Black Hole" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"  // Reduced brightness
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Explore the Cosmos
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Dive into the universe's most fascinating phenomena - from black holes to galaxies and beyond.
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium text-white transition-colors shadow-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* Nebula Section */}
      <div className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">The Beauty of Nebulas</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Nebulas are vast clouds of gas and dust in space, often the birthplaces of stars. These cosmic wonders come in spectacular colors and shapes, created by the interplay of stellar winds, radiation, and gravity.
          </p>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 mt-12 border-t border-gray-700 pt-8">
            {['Home', 'Planets', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href="#"
                className="px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}