import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Destinations from './components/Destinations';
import Weather from './components/Weather';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/destinations" element={<Destinations />}></Route>
        <Route path="/Weather" element={<Weather />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
