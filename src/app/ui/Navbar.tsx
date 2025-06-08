import Link from "next/link";

type linkItem = {
  label: string;
  href: string;
};

const pageLinks: linkItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => (
  <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <a href="#home" className="font-mono text-2xl font-bold text-white">
          <span>rafatul</span>
          <span className="text-blue-500">.alam</span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {pageLinks.map(({ label, href }: linkItem) => (
            <Link
              key={href}
              href={href}
              className="text-gray-300 font-bold hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
