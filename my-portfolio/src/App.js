import React from 'react';
import './App.scss';
import Header from './components/Header/Header';

function App() {
    return (
        <div className="App">
            <Header />
          <main>
            {/*other sections*/}
            <section id="home" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h1>Welcome to my Portfolio</h1>
            </section>
          </main>
        </div>
    );
}

export default App;