import Navbar from "@common/Navbar";
import LandingPage from "@sections/LandingPage";
import Highlights from "@sections/Highlights";
import Techstacks from "@sections/Techstacks";
import Projects from "@sections/Projects";
import Contact from "@sections/Contact";
import Footer from "@sections/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Navbar />
      <LandingPage />
      <Highlights />
      <Techstacks />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
