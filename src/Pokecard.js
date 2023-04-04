import React from 'react';
import './Pokecard.css';

const Pokecard = ({pokemon}) => {
    return (
        <div className='Pokecard'>
            <h2>{pokemon.name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="" />
            <p>type: {pokemon.type}</p>
            <p>EXP: {pokemon.base_experience}</p>
        </div>
    );
} 

export default Pokecard