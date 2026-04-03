import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Membership from './components/Membership';
import Game from './components/Game';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Membership />
        <Reviews />
        <Game />
        <Contact />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
