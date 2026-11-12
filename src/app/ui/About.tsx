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
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
              {header}
            </h2>
          )}
          <div className="rounded-xl p-8 border-line border hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_2px_8px_rgb(var(--accent)/0.2)] transition-all">
            {descriptionTexts && (
              <div className="text-muted text-justify mb-8">
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
              <h3 className="mb-6 font-semibold text-foreground">{skills_header}</h3>
            )}
            {skills && (
              <div className="flex items-center flex-wrap gap-3">
                {skills.map((text: string, key: number) => (
                  <span
                    key={key}
                    className="bg-chip text-chip-foreground py-2 px-3 rounded-full text-base hover:bg-accent/15 hover:text-accent transition
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
