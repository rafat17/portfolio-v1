const frontendSkills = [
  "TypeScript",
  "JavaScript (ES6+)",
  "React",
  "Node.js",
  "HTML",
  "CSS",
];

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <div className="text-gray-300 text-justify mb-6">
              <p>
                Hello! My name is Rafatul and I enjoy makings things for the
                internet. My interest in web development began in 2017 when I
                began to make simple UI layouts with HTML & CSS!
              </p>
              <br />
              <p>
                Fast-forward to today, and I&apos;ve had the privilege of working at
                a Dutch-based creative agency and a Swiss-based software
                company. My main focus these days is building accessible, and
                exciting stuffs at SynesisIT for their video conference
                platform.
              </p>
            </div>
            <h3 className="mb-4 font-semibold">
              I have expertise and familiarity with these technologies
            </h3>
            <div className="flex items-center flex-wrap gap-2">
              {frontendSkills.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-300 py-2 px-3 rounded-full text-lg hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
