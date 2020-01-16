import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import Logs from './components/logs';
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom'
import Presentation from './components/presentation';
import Howto from './components/howto';
import Demo from './components/demo';
import Biblio from './components/biblio';
function App() {
  return (
    <div className="container">
      <header className="App-header">
        <Presentation/>
        <Demo/>
        <Howto/>
        <Biblio/>
      </header>
    </div>
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/logs" exact component={Logs}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
