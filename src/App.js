import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    // <div id='appContainer'>
    //   <Navbar/>
    //   <Intro/>
    //   <About/>
    //   <Projects/>
    //   <Contact/>
    //   <Footer/>
    // </div>
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/intro" element={<Intro/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />

    </Routes>
    <Footer/>
    </>
  );
}

export default App;
