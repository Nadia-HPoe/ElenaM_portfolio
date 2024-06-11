import { Main } from "./Main";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { Education } from "./components/Education";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
import { useRef } from "react";
import "../src/assets/styles/global.scss";

function App() {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const portfolioRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div className='App'>
      <Header
        main={mainRef}
        about={aboutRef}
        education={educationRef}
        portfolio={portfolioRef}
      />

      <Main ref={mainRef} footer={footerRef} />
      <AboutMe ref={aboutRef} />
      <Education ref={educationRef} />
      <Portfolio ref={portfolioRef} />
      <Footer
        ref={footerRef}
        main={mainRef}
        about={aboutRef}
        education={educationRef}
        portfolio={portfolioRef}
      />
    </div>
  );
}

export default App;
