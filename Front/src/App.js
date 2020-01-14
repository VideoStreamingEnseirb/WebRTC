import React from 'react';
import logo from './logo.svg';
import './App.css';

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
  );
}

export default App;
