import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import "./PokemonDetails.css";
// import usePokemonList from "../../hooks/usePokemonList";
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails(){
    const {id}=useParams();
    console.log(id);
    const [pokemon]=usePokemonDetails(id);


    return(
        <div className="pokemon-details-wrapper">
        <img className="pokemon-details-image" src={pokemon.image} />
        <div className="pokemon-details-name"> <span>{pokemon.name}</span> </div>
        <div className="pokemon-details-name">Height: {pokemon.height} </div>
        <div className="pokemon-details-name">Weight: {pokemon.weight} </div>
        <div className="pokemon-details-types">
            {pokemon.types && pokemon.types.map((t) => <div key={t}>{t} </div>)}
        </div>

        {
            pokemon.types && pokemon.similarPokemons &&
        <div>
        More {pokemon.types[0]} type pokemons
        <ul>
        {pokemon.similarPokemons.map((p, index) => {
    // Check if p.pokemon.id is defined, otherwise fallback to using index
    const key = p.pokemon.id !== undefined ? p.pokemon.id : index;
    return <li key={key}>{p.pokemon.name}</li>;
})}

            {/* {pokemon.similarPokemons.map((p) =>(
             <li key={p.pokemon.id}>{p.pokemon.name} (ID:{p.pokemon.id})</li>
             ))} */}
        </ul>
        </div>
        }
     </div>
    );
}
export default PokemonDetails;