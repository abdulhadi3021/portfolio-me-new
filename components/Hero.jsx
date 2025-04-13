export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 opacity-95"></div>
      
      {/* Floating Circles Animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 slide-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Hello, I'm <span className="text-white">Abdulhadi</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
          A passionate full-stack developer creating immersive digital experiences
        </p>

        <div className="flex justify-center gap-4">
          <button className="btn-3d bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg">
            View My Work
          </button>
          <button className="glass-card text-white px-8 py-4 rounded-xl font-bold text-lg border border-blue-300/30">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}