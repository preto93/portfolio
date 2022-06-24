import './App.css';
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'  
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact'
import Porftolio from './components/Portfolio/Porftolio';


function App() {
  return (
    <>
    <NavBar />
    <Home />
    <About />
    <Porftolio />
    <Experience />
    <Contact />
    </>
  );
}

export default App;
