export default function Projects() {
    const projects = [
      { name: "Project 1", description: "A project so cool, it broke the internet (temporarily)." },
      { name: "Project 2", description: "This project made my cat finally respect me." },
      { name: "Project 3", description: "A project that’s still in progress because I got distracted by memes." },
    ];
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }