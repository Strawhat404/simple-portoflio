export default function Skills() {
    const skills = ["python","Django","Flask","AiOgram","JavaScript","React Js","Next Js", "Angular","Node Js", "Tailwind CSS", "MySQL", "MongoDB","PostgreSQL","Docker","Linux", "Making Bad Jokes"];
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="px-6 py-3 bg-purple-500 text-white rounded-full">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }