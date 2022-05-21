import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import LatestArticles from './components/LatestArticles';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="overflow-hidden">
          <Navbar />
          <HeroSection />
          <Features />
          <LatestArticles />
          <Footer />
        </div>
    )
}

export default App;