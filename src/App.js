import React from 'react';
import Pokecard from './Pokecard'
import Pokedex from './Pokedex';
import './App.css';

function App({pokedex=Pokedex}) {
  return (
    <div className='App'>
      <h1 className ='App-title'>Pokedex</h1>
        {pokedex.map(p =>(
        <Pokecard pokemon={p} />
        ))}  
    </div>
  );
}

export default App;
