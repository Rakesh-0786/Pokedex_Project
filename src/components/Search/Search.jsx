import React from 'react';
import './Search.css';
import useDebounce from '../../hooks/useDebounce';

function Search({updateSearchTerm}) {
    // const [searchTerm, setSearchterm]=useState("");
    // const debounceCallback=useDebounce((e) => updateSearchTerm(e.target.value),500)
    const debounceCallback=useDebounce((e) => updateSearchTerm(e.target.value))

    return (
        <div className="search-wrapper">
            <input 
                id="pokemon-name-search"
                type="text"
                placeholder="pokemon name...."
                onChange={(e) => debounceCallback(e, '123')}
            />
        </div>
    );
}

export default Search;