import React, { Component } from 'react';
import './App.css';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./Pages/Home";



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="App">
          </div>

          <div className="content">
           <Route exact path="/" component={Home}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
