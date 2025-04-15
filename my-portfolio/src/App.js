import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
    return (
        <div className="App">
            <Header />
          <main>
            <Hero />
              <Projects />
              <Skills />
            {/*other sections*/}
          </main>
        </div>
    );
}

export default App;