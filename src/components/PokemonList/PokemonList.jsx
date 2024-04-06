
// import { useEffect, useState } from "react";
// import axios from 'axios';
import './PokemonList.css';
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";

function PokemonList() {

    // const {pokemonListState , setPokemonListState}=usePokemonList();
    const [pokemonListState , setPokemonListState]=usePokemonList( false);


   /*
   manage with the custom hooks
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');

    combine multiple states
    const [pokemonListState, setPokemonListState]=useState({
        pokemonList:[],
        isLoading:true,
        pokedexUrl:'https://pokeapi.co/api/v2/pokemon',
        nextUrl:'',
        prevUrl:''
    });

    async function downloadPokemons() {
        // setIsloading(true);
        setPokemonListState((state) => ({...state, isLoading:true}));
        const response = await axios.get(pokemonListState.pokedexUrl); //this downloads list of 20 pokemons

        const pokemonResults = response.data.results; //we get the array of pokemons from result

        console.log( response.data, response.data.next);
        console.log(pokemonResults);
        // setNextUrl(response.data.next);
        // setPrevUrl(response.data.previous);
        setPokemonListState((state) => ({
            // ...pokemonListState ,
            ...state,
            nextUrl:response.data.next, 
            prevUrl:response.data.previous
        }));
        
        // iterating over the array if pokemons and using their url, to create an array
        // that will download those 20 packages
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));

        // passing that promise array to axios.all
        const pokemonData = await axios.all(pokemonResultPromise); //array of 20 pokemon
        console.log(pokemonData);

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

    useEffect(() => {
        downloadPokemons();
    }, [pokemonListState.pokedexUrl]); 
    */

    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper">
                {(pokemonListState.isLoading) ? 'Loading....' : 
                    pokemonListState.pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)
                }
            </div>
            <div className="controls">
                {/* <button disabled={prevUrl==null} onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
                <button disabled={nextUrl==null} onClick={() => setPokedexUrl(nextUrl)}>Next</button> */}
                 {/* update */}
                 <button disabled={pokemonListState.prevUrl==null} onClick={() => setPokemonListState({...pokemonListState, pokedexUrl:pokemonListState.prevUrl})} >Prev</button>
                 <button disabled={pokemonListState.nextUrl==null} onClick={() => setPokemonListState({...pokemonListState, pokedexUrl:pokemonListState.nextUrl})} >Next</button>

            </div>
        </div>
    )
}

export default PokemonList;


