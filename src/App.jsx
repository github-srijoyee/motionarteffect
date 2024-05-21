import './App.css';
import React from 'react';
import MagicWandCursor from './components/MagicWandCursor';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AnimatedCursor from 'react-animated-cursor';

const App = () => {
  return (
    <div>
     
      <NavBar />
      <Hero />
      <Footer />
      <MagicWandCursor
       />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      />
    </div>
  );
};

export default App;

