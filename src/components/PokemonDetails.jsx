import React, { useState, useEffect } from 'react';

const PokemonDetails = ({ pokemonId, onClose }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        if (response.ok) {
          const data = await response.json();
          setPokemonDetails(data);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [pokemonId]);

  return (
    <div>
      <h2>Pokemon Details</h2>
      {pokemonDetails ? (
        <div>
          <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
          <p>Name: {pokemonDetails.name}</p>
          <p>Height: {pokemonDetails.height}</p>
          <p>Weight: {pokemonDetails.weight}</p>
          <p>Id: {pokemonDetails.id}</p>
          

          <button onClick={onClose}>Close</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonDetails;
