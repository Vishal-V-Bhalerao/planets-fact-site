import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { PlanetList } from '../src/pages/PlanetList'
/*
* install react-router-dom for routing
*/
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <nav className="nav-bar" >
            <div>
              <ul>
                <li> <Link to="/universe">Universe</Link> </li>
                <li> <Link to="/galaxies">Galaxies</Link> </li>
                <li> <Link to="/solarSystem">Solar system</Link></li>
                <li> <Link to="/earth">Earth</Link></li>
              </ul>
            </div>
          </nav>
        </header>
        <Switch>
          <Route path="/universe">
            <span>Universe page</span>
          </Route>
          <Route path="/galaxies">
            <span>Galaxies page</span>
          </Route>
          <Route path="/solarSystem">
            <PlanetList />
          </Route>
          <Route path="/earth">
            <span>Earth page</span>
          </Route>
          <Route path="/">
            <span>Home page</span>
          </Route>
        </Switch>
      </Router>
      <div className="starry-background">
        <div className="twinkling" ></div>
      </div>
    </div >
  );
}

export default App;
