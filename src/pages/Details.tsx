import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import pokemonList from "../assets/pokemon.json"

function Details(){
    const { id } = useParams();

    const { pokemons } = pokemonList;

    return (
 <>
    <Navbar hasGoBack />

    <h1>{pokemons.find((pokemon) => String(pokemon.id) == id)?.name}</h1>
 </>
    );
}

export default Details;