import { Main } from "./Main";
import { Header } from "./components/Header";
import "../src/assets/styles/global.scss";
import { AboutMe } from "./components/AboutMe";
import { Education } from "./components/Education";

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <AboutMe />
      <Education />
    </div>
  );
}

export default App;
