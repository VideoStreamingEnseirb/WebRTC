import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import Logs from './components/logs';
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/logs" exact component={Logs}/>
    </Switch>
    </BrowserRouter>
    // <div className="container">
    //   <header className="App-header">
    //     <Presentation/>
    //     <Demo/>
    //     <Howto/>
    //   </header>
    // </div>
  );
}

export default App;
