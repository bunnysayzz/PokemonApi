import React, { useState } from 'react';
import './App.css'; 
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleSelectPokemon = (pokemonId) => {
    setSelectedPokemon(pokemonId);
  };

  const handleCloseDetails = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="App">
      <h1>Pokemon</h1>
      {selectedPokemon ? (
        <PokemonDetails pokemonId={selectedPokemon} onClose={handleCloseDetails} />
      ) : (
        <PokemonList onSelectPokemon={handleSelectPokemon} />
      )}
    </div>
  );
}

export default App;
