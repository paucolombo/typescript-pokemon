import React from 'react';
import { Pokemon } from './App';

function Card({ pokemonSearched }: { pokemonSearched: Pokemon }) {
  return (
    <div className="card">
      <div className="pokemonCard">
        <img
          src={pokemonSearched.sprites.other.dream_world.front_default}
          alt={pokemonSearched.name}
        />
        <h2>{pokemonSearched.name}</h2>
        <span>Number: {pokemonSearched.id}</span>
        <span>
          Type: {pokemonSearched.types.map((type) => type.type.name + ' ')}
        </span>
      </div>
    </div>
  );
}

export default Card;
