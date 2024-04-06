import React, { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import './Pokedex.css';
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex() {
    const[searchTerm, setSearchterm]=useState("");

    return (
        <div className="pokedex-wrapper">
            {/* <h1 id="pokedex-heading">Pokedex</h1> */}
            <Search updateSearchTerm={setSearchterm} />
            {/* {searchTerm} */}
           {(!searchTerm )? <PokemonList /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm} />}
        </div>
    )
}

export default Pokedex;