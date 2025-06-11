import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/schemaTypes/queries";

interface IProjectItem {
  sectionTitle: string;
  title: string;
  description: string;
  technologies: string[];
  view: {
    url: string;
    label: string;
  };
}

export const Projects = async () => {
  const { data: projects } = await sanityFetch({ query: PROJECTS_QUERY });

  const sectionTitle = projects?.find(
    (item: IProjectItem) => item.sectionTitle
  )?.sectionTitle;

  const areProjectsPresent = Array.isArray(projects);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div>
        <div className="max-w-5xl mx-auto px-4">
          {sectionTitle && (
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              {sectionTitle}
            </h2>
          )}
          {areProjectsPresent && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project: IProjectItem, index: number) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap items-center gap-2 min-h-16 mb-4">
                    {project.technologies.map((technology: string) => (
                      <span
                        key={technology}
                        className="bg-blue-500/10 text-blue-500 flex item-center justify-center py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.view.url}
                      className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                      target="_blank"
                    >
                      {project.view.label}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
