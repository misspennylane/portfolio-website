import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header />
          <main>
            <Hero />
              <Projects />
              <Skills />
              <Contact />
            {/*other sections*/}
          </main>
            <Footer />
        </div>
    );
}

export default App;