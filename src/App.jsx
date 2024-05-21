import './App.css'
import React from 'react';
import MagicWandCursor from './components/MagicWandCursor';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AnimatedCursor from "react-animated-cursor";
import SwirlCursor from './components/SwirlCursor';

const App = () => {
  return (
    <div>
<AnimatedCursor/>
      <NavBar/>
      <Hero/>
      <Footer/>
    </div>
  );
};

export default App;

