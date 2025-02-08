import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
