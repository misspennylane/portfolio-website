import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
    return (
        <div className="App">
            <Header />
          <main>
            <Hero />
            {/*other sections*/}
          </main>
        </div>
    );
}

export default App;