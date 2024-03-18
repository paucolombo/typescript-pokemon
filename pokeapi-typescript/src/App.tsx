import { useState } from 'react';
import './App.css';
import Card from './Card';

export interface Pokemon {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}
function App() {
  const [pokemonChosen, setPokemonChosen] = useState<number>();
  const [pokemonSearched, setPokemonSearched] = useState<Pokemon | null>(null);

  const handleSearch = (): void => {
    if (typeof pokemonChosen === 'number' && pokemonChosen < 1100) {
      const fetchData = async (): Promise<void> => {
        const response: Pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonChosen}`
        ).then((res) => res.json());
        setPokemonSearched(response);
      };
      fetchData();
    }
  };

  return (
    <>
      <div className="searchContainer">
        <h2>Search by Pokemon number</h2>
        <input
          type="number"
          placeholder="Pokemon"
          id="pokemonSearched"
          name="pokemonSearched"
          onChange={(e) => setPokemonChosen(parseInt(e.target.value))}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {pokemonSearched != null && <Card pokemonSearched={pokemonSearched} />}
    </>
  );
}
export default App;
