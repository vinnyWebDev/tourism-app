import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Destinations from './components/Destinations';
import Activities from './components/Activities';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/destinations" element={<Destinations />}></Route>
        <Route path="/activities" element={<Activities />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
