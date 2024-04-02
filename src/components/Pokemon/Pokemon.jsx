import './Pokemon.css'; // Import CSS file for styling

function Pokemon({ name, image }) {
    return (
        <div className='pokemon'> {/* Add className to the outer div */}
            <div className='pokemon-name'>{name}</div> {/* Render Pokémon's name */}
            <div>
                <img className='pokemon-image' src={image} alt={name} /> {/* Render Pokémon's image */}
            </div>
        </div>
    );
}

export default Pokemon; // Export the component
