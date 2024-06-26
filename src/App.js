
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ProjectSlider from './components/Project';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
     <Skills/>
     <ProjectSlider/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
