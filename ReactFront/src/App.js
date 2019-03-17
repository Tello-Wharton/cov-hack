import React, { Component } from 'react';
import './App.css';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Files from "./Pages/Files";
import Upload from "./Pages/Upload";
import Home from "./Pages/Home";
import Login from "./Login";



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="App">
          </div>

          <div className="content">
           <Route exact path="/" component={Login}/>
           <Route path="/files" component={Files}/>
           <Route path="/upload" component={Upload}/>
            <Route path="/home" component={Home}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
