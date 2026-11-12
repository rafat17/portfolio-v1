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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight tracking-tight">
              {header}
            </h1>
          )}
          {description && (
            <p className="text-muted text-lg mb-8 max-w-lg mx-auto">
              {description}
            </p>
          )}
          <div className="flex justify-center space-x-4">
            <a
              href="#about"
              className="bg-accent text-on-accent py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(var(--accent)/0.4)]"
            >
              About Me
            </a>

            <a
              href="#contact"
              className="border border-accent text-accent py-3 px-6 rounded font-medium transition-all duration-200 
                 hover:-translate-y-0.5 hover:bg-accent/10"
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
