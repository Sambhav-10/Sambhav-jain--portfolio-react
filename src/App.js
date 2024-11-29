import logo from "./logo.svg";
import "./App.css";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Home from "./Components/Home";
import VideoResume from "./Components/VideoResume";
import About from "./Components/About";
import Contact from "./Components/Contact";
// import Cheak from "./Components/Cheak";
import Humberger from "./Components/Humberger";

function App() {
  return (
    <>
      <div className="bg-black ">
        {/* <Projects/> */}
       

        {/* <Header /> */}
        <Humberger/>
        <Home />
        <VideoResume />
        <Projects/>
        <Skills />
         <About />
        <Contact />
        
      </div>
    </>
  );
}

export default App;
