import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function PokemonCard({ id, name }) {
  return (
    <div className=" pokemons ma1 tc dib ">
      <Link to={`${id}`}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt=""
          width="150px"
          height="150px"
        />
        <br />
        <div className="pokemon_names tc dib pa1">{name}</div>
      </Link>
    </div>
  );
}

export default PokemonCard;
