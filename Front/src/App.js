import React from 'react';
import './App.css';
import Home from './home';
import Logs from './components/logs';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import Presentation from './components/presentation';
import Howto from './components/howto';
import Demo from './components/demo';
import Biblio from './components/biblio';
function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/logs" exact component={Logs} />


      <div className="container">
        <header className="App-header">
          <Presentation />
          <Demo />
          <Howto />
          <Biblio />
        </header>
      </div>
      </Switch>

    </BrowserRouter>


  )
}

export default App;
