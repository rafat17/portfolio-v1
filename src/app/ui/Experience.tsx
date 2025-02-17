import Link from "next/link";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Where I&apos;ve Worked
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Software Engineer&nbsp;
                <Link
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
                  href="https://synesisit.com.bd/"
                  target="_blank"
                >
                  @ Synesis IT PLC
                </Link>
              </h3>
              <p className="text-gray-400 font-semibold text-sm mb-4">
                July 2024 - Present
              </p>
              <div>
                <div>
                  <ul className="[&>li]:relative [&>li]:pl-[20px] [&>li]:mb-[10px] [&>li]:before:content-['▹'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-blue-500">
                    <li>
                      Engineered numerous key frontend features across two major
                      microservices for the organization&apos;s video
                      conferencing platform
                    </li>
                    <li>
                      Refactored legacy code, performed critical internal
                      package updates, and successfully migrated unit tests for
                      their in-house travel management platform.
                    </li>
                    <li>
                      Maintained their internal monorepo of UI components
                      through documentation and refactoring ensuring
                      optimization and reusability
                    </li>
                    <li>
                      Conducted code reviews, mentored junior developers, and
                      contributed to hiring assessments, fostering a
                      high-quality engineering culture.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Software Engineer&nbsp;
                <Link
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
                  href="https://www.welldev.io/"
                  target="_blank"
                >
                  @ WellDev
                </Link>
              </h3>
              <p className="text-gray-400 font-semibold text-sm mb-4">
                February 2021 - June 2024
              </p>
              <div>
                <div>
                  <ul className="[&>li]:relative [&>li]:pl-[20px] [&>li]:mb-[10px] [&>li]:before:content-['▹'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-blue-500">
                    <li>
                      Engineered key features for the organization&apos;s travel
                      management platform, performed complex UI revamps,
                      improving usability and performance.
                    </li>
                    <li>
                      Refactored legacy code, performed critical internal
                      package updates, and successfully migrated unit tests for
                      their in-house travel management platform.
                    </li>
                    <li>
                      Maintained their internal monorepo of UI components
                      through documentation and refactoring ensuring
                      optimization and reusability
                    </li>
                    <li>
                      Conducted code reviews, mentored junior developers, and
                      contributed to hiring assessments, fostering a
                      high-quality engineering culture.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all
              "
            >
              <h3 className="text-xl font-bold mb-2">
                Frontend Developer&nbsp;
                <Link
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
                  href="https://planetnine.com/"
                  target="_blank"
                >
                  @ PlanetNine B.V.
                </Link>
              </h3>
              <p className="text-gray-400 font-semibold text-sm mb-4">
                December 2019 - January 2021
              </p>
              <div>
                <div>
                  <ul className="[&>li]:relative [&>li]:pl-[20px] [&>li]:mb-[10px] [&>li]:before:content-['▹'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-blue-500">
                    <li>
                      Created dynamic HTML5 banners for multiple platforms,
                      enhancing ad engagement and performance.
                    </li>
                    <li>
                      Built and optimized creatives for Google DV360, DCM,
                      Studio, Weborama, and Xandr, ensuring cross-platform
                      compatibility.
                    </li>
                    <li>
                      Leveraged data-driven creative banners implementing our
                      clients&apos; strategies to personalize and optimize ad
                      creatives for Google platforms.
                    </li>
                    <li>
                      Gathered requirements and tailored ad solutions to meet
                      diverse client specifications across multiple industries.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
