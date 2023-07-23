import './App.css';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import { Home } from './Components/Home/Home';
import NavBar from './Components/Header.js';


function App() {
  return (
     <>
     
      <NavBar/>
    </>
  );
}

export default App;