import './App.css';
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'  
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact'
import Porftolio from './components/Portfolio/Porftolio';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

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
    <Footer />
    </>
  );
}

export default App;
