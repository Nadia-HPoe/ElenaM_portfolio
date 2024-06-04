import { Main } from "./Main";
import { Header } from "./components/Header";
import "../src/assets/styles/global.scss";
import { AboutMe } from "./components/AboutMe";
import { Education } from "./components/Education";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <AboutMe />
      <Education />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
