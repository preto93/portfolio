import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'  
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact'


function App() {
  return (
    <>
    <NavBar />
    <Home />
    <Experience />
    <Contact />
    </>
  );
}

export default App;
