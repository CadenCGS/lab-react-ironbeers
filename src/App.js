import React from 'react';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Components/Home.js'
import AllBeers from './Components/AllBeers.js'
import SingleBeer from './Components/SingleBeer.js'

function App() {
  //useState Variables

  //Variables

  //HTML
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/AllBeers" component={AllBeers} />
          <Route exact path="/SingleBeer/:_id" component={SingleBeer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
