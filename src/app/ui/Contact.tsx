import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { CONTACT_QUERY } from "@/sanity/schemaTypes/queries";

const Contact = async () => {
  const { data: contact } = await sanityFetch({ query: CONTACT_QUERY });
  const { header, description, contactEmail } = contact;

  console.log("contact", contact);

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div>
        <div className="text-center z-10 px-4">
          {header && (
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
              {header}
            </h2>
          )}
          {description && (
            <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
              {description}
            </p>
          )}
          {contactEmail && (
            <div className="flex justify-center space-x-4">
              <Link
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
               hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500 hover:text-black"
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
