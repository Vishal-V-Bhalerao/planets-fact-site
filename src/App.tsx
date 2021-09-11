import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav-bar" >
          <div>
            <ul>
              <li>Universe</li>
              <li>Galaxies</li>
              <li>Solar system</li>
              <li>Earth</li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="starry-background"></div>
      <div className="twinkling" ></div>
      <div className="earth-container" ></div>
    </div>
  );
}

export default App;
