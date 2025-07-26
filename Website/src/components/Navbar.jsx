import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-lg border-b border-gray-800 shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center mb-2 md:mb-0"
        >
          <div className="w-8 h-8 mr-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </div>
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            SpaceSight
          </Link>
        </motion.div>
        
        <div className="flex space-x-6">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link 
              to="/" 
              className={`text-gray-300 transition-all ${
                location.pathname === '/' ? 'text-blue-400 font-medium' : ''
              }`}
            >
              Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link 
              to="/planets" 
              className={`text-gray-300 transition-all ${
                location.pathname === '/planets' ? 'text-blue-400 font-medium' : ''
              }`}
            >
              Planets
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link 
              to="/about" 
              className={`text-gray-300 transition-all ${
                location.pathname === '/about' ? 'text-blue-400 font-medium' : ''
              }`}
            >
              About
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link 
              to="/contact" 
              className={`text-gray-300 transition-all ${
                location.pathname === '/contact' ? 'text-blue-400 font-medium' : ''
              }`}
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}