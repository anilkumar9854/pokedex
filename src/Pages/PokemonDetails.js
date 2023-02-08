import React, { useState, useEffect } from "react";
import "../App.css";

function PokemonDetails({ match }) {
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchName();
    
    // console.log(match);
  }, []);

  const fetchName = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.pokemon}`)
      .then(response => response.json())
      // .then(detail => console.log(detail));
      .then(detail => {
        setPokemonDetail([{
            'key': 'ID','value':detail.id
          },{
            'key': 'Name','value':detail.name
          },{
            'key': 'Height','value':detail.height
          },{
            'key': 'Weight','value':detail.weight
          },{
            'key': 'Type','value':detail.types && detail.types[0].type.name
          },{
           'key': 'Abilities','value':detail.abilities && detail.abilities[0].ability.name
          },]);
        setLoading(false);
      });
      
  };

  return (
    <div className="App">
      <div className="pokemon_img">
      <img
          src="https://i.imgur.com/2dQXjNk.png"
          alt=""
          width="40%"
          height="10%"
        />
      </div>
      <div>
        <img
          className="detail-img tc dib pa1 ma2 "
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            match.params.pokemon
          }.png`}
          alt=""
          width="200px"
          height="200px"
        />
      </div>
     {loading ? 
      <img
        src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
        alt=""
        className="loading_icon"
        width='50px'
        height='50px' />
      :
      <div className="details dib">
        {pokemonDetail.map( (item, index) => {
          return <div className="detail_info">
              <label>{item.key} </label><div>:  &nbsp; &nbsp;{item.value}</div>
            </div>
        })}
      </div>}
    </div> 
  );
}

export default PokemonDetails;
