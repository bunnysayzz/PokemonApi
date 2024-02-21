import React, { useState, useEffect } from 'react';

const PokemonList = ({ onSelectPokemon }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        if (response.ok) {
          const data = await response.json();
          setPokemonList(data.results);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pokemon-container">
      {pokemonList.map((pokemon, index) => (
        <div key={index} className="pokemon-card">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
          <p>{pokemon.name}</p>
          <button className="know-more-button" onClick={() => onSelectPokemon(index + 1)}>Know More</button>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
