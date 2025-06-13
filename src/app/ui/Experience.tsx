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
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              {sectionTitle}
            </h2>
          )}
          {areExperiencesPresent && (
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {career.map((careerItem, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  <h3 className="text-xl font-bold mb-2">
                    {careerItem?.position}&nbsp;&nbsp;
                    <Link
                      className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
                      href={careerItem.organization.url}
                      target="_blank"
                    >
                      @{careerItem.organization.label}
                    </Link>
                  </h3>
                  <p className="text-gray-400 font-semibold text-sm mb-4">
                    {convertToDateFormat(careerItem.tenure.from)}&nbsp;-&nbsp;
                    {convertToDateFormat(careerItem.tenure.to) ?? "Present"}
                  </p>
                  <div>
                    <div>
                      <ul className="[&>li]:relative [&>li]:pl-[20px] [&>li]:mb-[10px] [&>li]:before:content-['▹'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-blue-500">
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
