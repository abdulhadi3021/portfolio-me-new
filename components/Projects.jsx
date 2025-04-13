export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A high-performance online store with payment integration",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/placeholder-project1.jpg"
    },
    {
      title: "AI Dashboard",
      description: "Real-time analytics dashboard with machine learning",
      tags: ["Next.js", "TensorFlow", "Firebase"],
      image: "/placeholder-project2.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-950 to-indigo-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          My <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl overflow-hidden fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-64 bg-blue-800/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="text-blue-100 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-600/20 text-blue-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-6 text-blue-300 hover:text-white flex items-center gap-2">
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}