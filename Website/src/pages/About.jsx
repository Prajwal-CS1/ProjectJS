import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About SpaceSight
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the wonders of our universe through stunning visuals and engaging content.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Created with passion by Prajwal Adhikari
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              At SpaceSight, we're dedicated to bringing the beauty and mystery of space closer to you. 
              Our team of astronomy enthusiasts, led by Prajwal Adhikari, curates the most fascinating content about our universe.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From breathtaking nebulas to mysterious black holes, we aim to educate and inspire the next 
              generation of space explorers.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-800/40 p-8 rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all duration-500 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Why Space?
            </h3>
            <ul className="space-y-4">
              {[
                {
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "Updated daily with the latest cosmic discoveries by Prajwal's team"
                },
                {
                  icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
                  text: "Expert-verified information you can trust"
                },
                {
                  icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
                  text: "Beautifully organized content for easy exploration"
                }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start p-3 rounded-lg hover:bg-gray-700/30 transition-all"
                >
                  <svg className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <span className="text-gray-300">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center text-gray-400"
        >
          <p>SpaceSight © {new Date().getFullYear()} | Created by Prajwal Adhikari</p>
        </motion.div>
      </div>
    </motion.section>
  );
}