import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Work id="work" />
      <Experience id="experience" />
      <Footer />
    </div>
  );
}

export default App;
