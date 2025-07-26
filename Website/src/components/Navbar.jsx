export default function Navbar() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Planets', path: '/planets' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-cosmic-primary/80 border-b border-cosmic-accent/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cosmic-accent to-purple-400 bg-clip-text text-transparent">
              SpaceSight
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-gray-300 hover:text-cosmic-accent transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}