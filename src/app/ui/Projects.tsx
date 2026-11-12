import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/schemaTypes/queries";
import { IProjectItem } from "../utilities/interfaces";

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
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
              {sectionTitle}
            </h2>
          )}
          {areProjectsPresent && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project: IProjectItem, index: number) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-line hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_2px_8px_rgb(var(--accent)/0.2)] transition"
                >
                  <h3 className="text-xl font-bold mb-4 text-foreground">{project.title}</h3>
                  <p className="text-muted mb-4">{project.description}</p>
                  <div className="flex flex-wrap items-center gap-2 min-h-16 mb-4">
                    {project.technologies.map((technology: string) => (
                      <span
                        key={technology}
                        className="bg-chip text-chip-foreground flex items-center justify-center py-1 px-3 rounded-full text-sm hover:bg-accent/15 hover:text-accent transition-all
                    "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.view.url}
                      className="text-accent hover:underline transition-colors my-4"
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
