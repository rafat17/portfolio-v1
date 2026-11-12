import { sanityFetch } from "@/sanity/lib/live";
import Link from "next/link";
import ResumeButton from "./components/ResumeButton";
import MobileMenu from "./components/MobileMenu";
import ThemeToggle from "./components/ThemeToggle";
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
    <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-lg border-b border-line/60">
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {headerDetails && (
            <a href="#home" className="font-mono text-2xl font-bold text-foreground">
              <span>{headerDetails?.label1}</span>
              <span className="text-accent">{headerDetails?.label2}</span>
            </a>
          )}
          {pageLinks && (
            <div className="hidden md:flex items-center space-x-8">
              {pageLinks.map(({ label, url = "#" }: linkItemType) => (
                <Link
                  key={label}
                  href={url}
                  className="text-muted font-bold hover:text-accent transition-colors md:text-sm xl:text-base"
                >
                  {label}
                </Link>
              ))}
              <ThemeToggle />
              <ResumeButton
                downloadUrl="/resume"
                className="hidden mx-[28px] my-[12px] border border-accent text-accent py-2 px-4 rounded text-sm transition-all duration-200 
                 hover:-translate-y-0.5 hover:bg-accent hover:text-on-accent md:block xl:hidden"
              />
            </div>
          )}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <MobileMenu resumeDownloadUrl={resumeDownloadUrl} />
          </div>
        </div>
      </div>
      {resumeDownloadUrl && (
        <ResumeButton
          downloadUrl="/resume"
          className="hidden absolute top-0 right-0 mx-[28px] my-[12px] border border-accent text-accent py-2 px-4 rounded text-sm transition-all duration-200 
                 hover:-translate-y-0.5 hover:bg-accent hover:text-on-accent xl:block"
        />
      )}
    </nav>
  );
};

export default NavBar;
