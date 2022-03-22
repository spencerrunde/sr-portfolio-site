//icon imports
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { VscClose, VscMail, VscMenu } from "react-icons/vsc";

//component imports
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header VscClose={VscClose} VscMenu={VscMenu} />
      <main>
        <Hero />
        <About />
        <Projects FaExternalLinkAlt={FaExternalLinkAlt} FaGithub={FaGithub} />
        <Contact />
      </main>
      <Footer FaGithub={FaGithub} FaLinkedin={FaLinkedin} VscMail={VscMail} />
    </>
  );
}

export default App;
