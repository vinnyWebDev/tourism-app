import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Destinations from './components/Destinations';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element= {<Home/>}></Route>
        <Route path="/destinations" element= {<Destinations/>}></Route>
        <Route path="/about" element= {<About/>}></Route>
        <Route path="/contact" element= {<Contact/>}></Route>
      </Routes>
    </div>

  );
}

export default App;
