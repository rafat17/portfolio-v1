export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Some things I&apos;ve built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4">
                Sorting Algorithm Visualiser
              </h3>
              <p className="text-gray-400 mb-4">
                An interactive web application that helps users visualise and
                learn the widely used sorting algorithms
              </p>
              <div className="flex flex-wrap items-center gap-2 min-h-16 mb-4">
                {[
                  "React",
                  "TypeScript",
                  "JavaScript (ES6+)",
                  "Redux Toolkit",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 flex item-center justify-center py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://sorting-algorithm-visualiser2-0.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-4">COVID-19 Tracker</h3>
              <p className="text-gray-400 mb-4">
                A Single Page Application (SPA) that tracks the statistics of
                COVID-19 worldwide.
              </p>
              <div className="flex flex-wrap items-center gap-2 min-h-16 mb-4">
                {["JavaScript (ES6+)", "React", "HTML", "CSS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://zealous-pike-92c37e.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
