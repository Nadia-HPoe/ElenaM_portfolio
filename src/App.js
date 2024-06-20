import { Main } from "./components/screens/Main";
import { Header } from "./components/Header";
import { AboutMe } from "./components/screens/AboutMe";
import { Education } from "./components/screens/Education";
import { Portfolio } from "./components/screens/Portfolio";
import { WorkMethod } from "./components/screens/WorkMethod";
import { Footer } from "./components/Footer";
import { useRef } from "react";
import "../src/assets/styles/global.scss";
import { ScrollToTopButton } from "./components/scrollToTopButton";

function App() {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const portfolioRef = useRef(null);
  const workRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div className='App'>
      <ScrollToTopButton />
      <Header
        about={aboutRef}
        education={educationRef}
        portfolio={portfolioRef}
        work={workRef}
        footer={footerRef}
      />

      <Main ref={mainRef} />
      <AboutMe ref={aboutRef} />
      <Education ref={educationRef} />
      <Portfolio ref={portfolioRef} />
      <WorkMethod ref={workRef} />
      <Footer
        ref={footerRef}
        main={mainRef}
        about={aboutRef}
        education={educationRef}
        portfolio={portfolioRef}
        work={workRef}
      />
    </div>
  );
}

export default App;
