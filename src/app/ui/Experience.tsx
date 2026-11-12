import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { CAREER_QUERY } from "@/sanity/schemaTypes/queries";
import { IExperienceItem } from "../utilities/interfaces";
import { convertToDateFormat } from "../utilities/helpers";

const Experience = async () => {
  const { data: career } = await sanityFetch({ query: CAREER_QUERY });

  const sectionTitle = career?.find(
    (item: IExperienceItem) => item.sectionTitle
  )?.sectionTitle;

  const areExperiencesPresent = Array.isArray(career);

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div>
        <div className="max-w-3xl mx-auto px-4">
          {sectionTitle && (
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
              {sectionTitle}
            </h2>
          )}
          {areExperiencesPresent && (
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {career.map((careerItem, index) => (
                <div
                  key={index}
                  // The current role (no end date) gets the accent border
                  className={`p-8 rounded-xl border transition hover:-translate-y-1 hover:border-accent hover:shadow-[0_2px_8px_rgb(var(--accent)/0.2)] ${
                    careerItem.tenure.to ? "border-line" : "border-accent"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {careerItem?.position}
                      </h3>
                      <p className="text-accent font-semibold mt-1">
                        {careerItem.organization.label}
                      </p>
                      <p className="text-muted text-sm mt-2.5">
                        {convertToDateFormat(careerItem.tenure.from)}&nbsp;-&nbsp;
                        {convertToDateFormat(careerItem.tenure.to) ?? "Present"}
                      </p>
                    </div>
                    <Link
                      className="shrink-0 p-1 -m-1 text-accent transition-opacity hover:opacity-70"
                      href={careerItem.organization.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${careerItem.organization.label} (opens in a new tab)`}
                      title={`Visit ${careerItem.organization.label}`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <div>
                      <ul className="text-muted flex flex-col gap-4 leading-relaxed [&>li]:relative [&>li]:pl-[20px] [&>li]:before:content-['▹'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-accent">
                        {careerItem.responsibilities.map(
                          (responsibility: string, index: number) => (
                            <li key={index}>{responsibility}</li>
                          )
                        )}
                      </ul>
                    </div>
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

export default Experience;
