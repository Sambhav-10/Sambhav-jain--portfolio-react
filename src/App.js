import logo from "./logo.svg";
import "./App.css";
import Projects from "./Components/Projects";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Home from "./Components/Home";
import Header from "./Components/Header";
import VideoResume from "./Components/VideoResume";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cheak from "./Components/Cheak";

function App() {
  return (
    <>
      <div className="bg-black ">
        {/* <Projects/> */}
       

        <Header />
        <Home />
        <VideoResume />
        <Portfolio />
        <Skills />

        <About />
        <Contact />
        
      </div>
    </>
  );
}

export default App;
