// import Image from "next/image";
import NavBar from "./ui/Navbar";
import Home from "./ui/Home";
import About from "./ui/About";
import Experience from "./ui/Experience";
import Projects from "./ui/Projects";
import Contact from "./ui/Contact";

const Sections = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Sections;
