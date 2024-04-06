
import { useEffect,useState } from "react";
import axios from "axios";
import usePokemonList from "./usePokemonList";

function usePokemonDetails(id){
    // const {id}=useParams();
    // console.log(id);
    const [pokemon,setPokemon]=useState({});
    async function downloadPokemon(){
        const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        // const pokemonType = response.data.types ? response.data.types[0].type.name : '';
        // const similarPokemonsResponse = await axios.get(`https://pokeapi.co/api/v2/type/${pokemonType}`);
    
        const pokemonOfSameTypes=await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ''}`)
        // console.log(response.data);
        // console.log("s",pokemonOfSameTypes);

        setPokemon( {
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            weight:response.data.weight,
            height:response.data.height,
            types:response.data.types.map((t) =>t.type.name),
            similarPokemons: pokemonOfSameTypes.data.pokemon
        });
        console.log(response.data.types);
        // setPokemonListState({...pokemonListState, type: pokemonType});
        setPokemonListState({...pokemonListState, type:response.data.types ? response.data.types[0].type.name : ''})

    }

     const [pokemonListState,setPokemonListState]=usePokemonList();

    useEffect(() => {
        downloadPokemon();
        console.log("List" , pokemon.types, pokemonListState);
    },[]);

    return [pokemon];

}
export default usePokemonDetails;