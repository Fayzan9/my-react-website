export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Faizan</h1>
  
          <div className="space-x-6 text-sm">
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>
        </div>
      </nav>
    );
  }