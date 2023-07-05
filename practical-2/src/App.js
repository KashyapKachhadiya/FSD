import './App.css';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import { Home } from './Components/Home/Home';

function App() {
  return (
    <Routers>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/about" element={<About/>} />
      </Routes>
      <Routes>
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>    
      
    </Routers>
  );
}

export default App;