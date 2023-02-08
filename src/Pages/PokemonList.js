import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import "../App.css";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(response => response.json())
      .then(pokes => setPokemons(pokes.results));
  };


  return (
    <div className="App">
      <div className="pokemon_img">
        <img
          className="pokeimage"
          src="https://i.imgur.com/2dQXjNk.png"
          alt=""
          width="40%"
          height="10%"
        />
      </div>
      {pokemons.map((pokemon, i) => (
        <PokemonCard id={i + 1} key={i} name={pokemon.name} />
      ))}
    </div>
  );
}

export default PokemonList;
