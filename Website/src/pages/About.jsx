export default function About() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cosmic-accent to-purple-400 bg-clip-text text-transparent">
          About SpaceSight
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover the wonders of our universe through stunning visuals and engaging content.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-cosmic-accent">Our Mission</h2>
          <p className="text-lg text-gray-300 mb-6">
            At SpaceSight, we're dedicated to bringing the beauty and mystery of space closer to you. 
            Our team of astronomy enthusiasts curates the most fascinating content about our universe.
          </p>
          <p className="text-lg text-gray-300">
            From breathtaking nebulas to mysterious black holes, we aim to educate and inspire the next 
            generation of space explorers.
          </p>
        </div>
        <div className="bg-cosmic-secondary/50 p-8 rounded-xl border border-cosmic-accent/20">
          <h3 className="text-2xl font-bold mb-4 text-cosmic-accent">Why Space?</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-cosmic-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300">Updated daily with the latest cosmic discoveries</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-cosmic-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              <span className="text-gray-300">Expert-verified information you can trust</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-cosmic-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              <span className="text-gray-300">Beautifully organized content for easy exploration</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}