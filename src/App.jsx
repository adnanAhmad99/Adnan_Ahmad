import Header from "./components/header/Header";
import MainUpperDiv from "./components/mainUpperDiv/MainUpperDiv";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import IntroDiv from "./components/introDiv/IntroDiv";
import CourseraCertificates from "./components/coursera/CourseraCertificates";
import Footer from "./components/footer/Footer";
import "./App.css";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <section>
        <MainUpperDiv />
        <IntroDiv />
        <Skills />
        <CourseraCertificates />
        <Projects />
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
