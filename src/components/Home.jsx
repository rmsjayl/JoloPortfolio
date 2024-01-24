import Navbar from "@common/Navbar";
import LandingPage from "@sections/LandingPage";
import Highlights from "@sections/Highlights";
import Techstacks from "@sections/Techstacks";
import Projects from "@sections/Projects";
import Contact from "@sections/Contact";
import Footer from "@sections/Footer";

const Home = () => {
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
