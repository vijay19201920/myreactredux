import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import store from './store/';

function App() {
      // store is passes as a props into the component

  return (
    <div className="App">
      <Counter  store = {store}/>
    </div>
  );
}

export default App;
