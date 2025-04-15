import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from "./components/Projects/Projects";

function App() {
    return (
        <div className="App">
            <Header />
          <main>
            <Hero />
              <Projects />
            {/*other sections*/}
          </main>
        </div>
    );
}

export default App;