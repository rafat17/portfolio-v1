import { sanityFetch } from "@/sanity/lib/live";
import { INTRO_QUERY } from "@/sanity/schemaTypes/queries";

const Home = async () => {
  const { data } = await sanityFetch({ query: INTRO_QUERY });
  const { header, description } = data;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div>
        <div className="text-center z-10 px-4">
          {header && (
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
              {header}
            </h1>
          )}
          {description && (
            <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
              {description}
            </p>
          )}
          <div className="flex justify-center space-x-4">
            <a
              href="#about"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              About Me
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
