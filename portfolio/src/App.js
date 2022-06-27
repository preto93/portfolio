import './App.css';
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'  
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact'
import Porftolio from './components/Portfolio/Porftolio';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <>
    <NavBar />
    <Home />
    <About />
    <Porftolio />
    <Experience />
    <Skills />
    <Contact />
    </>
  );
}

export default App;
