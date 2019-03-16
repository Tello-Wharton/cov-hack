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
            <a href="/#">Home</a>
            <a href="/#/files">Files</a>
            <a href="/#/upload">Upload</a>
            <a href="/#/login">Login</a>
          </div>

          <div className="content">
           <Route exact path="/" component={Home}/>
           <Route path="/files" component={Files}/>
           <Route path="/upload" component={Upload}/>
            <Route path="/login" component={Login}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
