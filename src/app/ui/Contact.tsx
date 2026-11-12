import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { CONTACT_QUERY } from "@/sanity/schemaTypes/queries";

const Contact = async () => {
  const { data: contact } = await sanityFetch({ query: CONTACT_QUERY });
  const { header, description, contactEmail } = contact;

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div>
        <div className="text-center z-10 px-4">
          {header && (
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              {header}
            </h2>
          )}
          {description && (
            <p className="text-muted text-lg mb-8 max-w-lg mx-auto">
              {description}
            </p>
          )}
          {contactEmail && (
            <div className="flex justify-center space-x-4">
              <Link
                className="border border-accent text-accent py-3 px-6 rounded font-medium transition-all duration-200 
               hover:-translate-y-0.5 hover:bg-accent hover:text-on-accent"
                href={`mailto:${contactEmail.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactEmail?.label}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
