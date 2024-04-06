
 import react ,{useEffect, useState} from "react";
 import axios  from "axios";
 

 function usePokemonList(){
    const [pokemonListState, setPokemonListState]=useState({
        pokemonList:[],
        isLoading:true,
        pokedexUrl:'https://pokeapi.co/api/v2/pokemon',
        nextUrl:'',
        prevUrl:'',
    });

    async function downloadPokemons() {
        
        setPokemonListState((state) => ({...state, isLoading:true}));
        const response = await axios.get(pokemonListState.pokedexUrl); //this downloads list of 20 pokemons

        const pokemonResults = response.data.results; //we get the array of pokemons from result

        // console.log("response ise", response.data.pokemon);
        // console.log(pokemonListState);
        // setNextUrl(response.data.next);
        // setPrevUrl(response.data.previous);
        setPokemonListState((state) => ({
            // ...pokemonListState ,
            ...state,
            nextUrl:response.data.next, 
            prevUrl:response.data.previous
        }));
        

        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));

        // passing that promise array to axios.all
        const pokemonData = await axios.all(pokemonResultPromise); //array of 20 pokemon
        // console.log(pokemonData);

        // now iterate on the data of each pokemon, and extract id , name, image,types
        const pokeListResult = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                types: pokemon.types
            }
        });
        // console.log(pokeListResult);

        // setPokemonListState(pokeListResult);
        // setIsLoading(false);
        // update this with object
        setPokemonListState((state) =>({
            // ...pokemonListState,
            ...state,
            pokemonList:pokeListResult,
             isLoading:false
            }));
    }

    useEffect(() =>{
        downloadPokemons();
    },[pokemonListState.pokedexUrl]);

    // return {pokemonListState, setPokemonListState }
    // we can also return in the form of array
    return [pokemonListState , setPokemonListState]

}
 export default usePokemonList;