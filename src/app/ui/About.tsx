import { Fragment } from "react";
import { sanityFetch } from "@/sanity/lib/live";
import { ABOUT_QUERY } from "@/sanity/schemaTypes/queries";

type ItemType = {
  children: {
    text: string;
  };
};

export const About = async () => {
  const { data } = await sanityFetch({ query: ABOUT_QUERY });
  const { description, header, skills_header, skills } = data;

  const descriptionTexts = description.map(
    (item: ItemType) => item?.children?.text
  );

  const renderDescriptionText = (description: string, isLastIndex: boolean) => {
    const descriptionTag = <p>{description}</p>;

    if (!isLastIndex) {
      return (
        <>
          {descriptionTag}
          <br />
        </>
      );
    }

    return descriptionTag;
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div>
        <div className="max-w-3xl mx-auto px-4">
          {header && (
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              {header}
            </h2>
          )}
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            {descriptionTexts && (
              <div className="text-gray-300 text-justify mb-6">
                {descriptionTexts.map((text: string, index: number) => (
                  <Fragment key={index}>
                    {renderDescriptionText(
                      text,
                      index === descriptionTexts.length - 1
                    )}
                  </Fragment>
                ))}
              </div>
            )}
            {skills_header && (
              <h3 className="mb-4 font-semibold">{skills_header}</h3>
            )}
            {skills && (
              <div className="flex items-center flex-wrap gap-2">
                {skills.map((text: string, key: number) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-300 py-2 px-3 rounded-full text-lg hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                  >
                    {text}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
