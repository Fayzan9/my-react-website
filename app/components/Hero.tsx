export default function Hero() {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Frontend Developer
        </h1>
  
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
          I build fast, scalable, and accessible web applications
          using modern React architecture and performance-first design.
        </p>
  
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
          >
            View Projects
          </a>
  
          <a
            href="#contact"
            className="px-6 py-3 border border-white rounded-lg font-medium hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    );
  }