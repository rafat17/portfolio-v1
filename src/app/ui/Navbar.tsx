import { sanityFetch } from "@/sanity/lib/live";
import Link from "next/link";
import ResumeButton from "./components/ResumeButton";
import MobileMenu from "./components/MobileMenu";
import {
  HEADER_QUERY,
  LINKS_QUERY,
  RESUME_QUERY,
} from "@/sanity/schemaTypes/queries";
import { linkItemType } from "../utilities/types";

const NavBar = async () => {
  const [headerData, pageLinksData, resumeDocument] = await Promise.all([
    sanityFetch({ query: HEADER_QUERY }),
    sanityFetch({ query: LINKS_QUERY }),
    sanityFetch({ query: RESUME_QUERY }),
  ]);

  const headerDetails = headerData?.data;
  const pageLinks = pageLinksData?.data;
  const resumeDownloadUrl = resumeDocument?.data?.cvFile?.asset?.url;

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {headerDetails && (
            <a href="#home" className="font-mono text-2xl font-bold text-white">
              <span>{headerDetails?.label1}</span>
              <span className="text-blue-500">{headerDetails?.label2}</span>
            </a>
          )}
          {pageLinks && (
            <div className="hidden md:flex items-center space-x-8">
              {pageLinks.map(({ label, url = "#" }: linkItemType) => (
                <Link
                  key={label}
                  href={url}
                  className="text-gray-300 font-bold hover:text-white transition-colors md:text-sm xl:text-base"
                >
                  {label}
                </Link>
              ))}
              <ResumeButton
                downloadUrl={resumeDownloadUrl}
                className="hidden mx-[28px] my-[12px] border border-blue-500/50 text-blue-500 py-2 px-4 rounded text-sm transition-all duration-200 
                 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500 hover:text-white md:block xl:hidden"
              />
            </div>
          )}
          <MobileMenu resumeDownloadUrl={resumeDownloadUrl} />
        </div>
      </div>
      {resumeDownloadUrl && (
        <ResumeButton
          downloadUrl={resumeDownloadUrl}
          className="hidden absolute top-0 right-0 mx-[28px] my-[12px] border border-blue-500/50 text-blue-500 py-2 px-4 rounded text-sm transition-all duration-200 
                 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500 hover:text-white xl:block"
        />
      )}
    </nav>
  );
};

export default NavBar;
