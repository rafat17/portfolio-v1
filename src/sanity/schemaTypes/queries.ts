import { defineQuery } from "next-sanity";

export const INTRO_QUERY = defineQuery(
  `*[_type == "introduction"][0]{header, description}`
);

export const ABOUT_QUERY = defineQuery(
  `*[_type == "about"]{ header, description[_type == "block"]{ children[0]{ text } }, skills_header, skills }[0]`
);

export const CAREER_QUERY = defineQuery(
  `*[_type == "career_timeline"] | order(tenure.from desc) {
  sectionTitle,
  position, 
  organization{ label, url }, 
  tenure{ from, to }, 
  responsibilities }`
);

export const PROJECTS_QUERY = defineQuery(`*[_type == "projects"]{
  sectionTitle,
  title,
  description,
  technologies,
  view {
    label,
    url
  }
}`);

export const CONTACT_QUERY = defineQuery(
  `*[_type == "contact"]{header, description, contactEmail }[0]`
);
