import { Link } from "react-router-dom"
import Badge from "./Badge";
import "./CardPokemon.css";

type PokemonTypeProps = {
    type: {
        name: string;
    }
}

export type CardPokemonProps= {
    id: number;
    name: string;
    types: PokemonTypeProps[]
};

function CardPokemon(props: CardPokemonProps) {
    return (
    <Link to={`/details/${props.id}`}>
      <div className={`card type--${props.types[0].type.name.toLowerCase()}`}>
      <div className="info">
        <span className="info__number">#{String(props.id).padStart(3, "0")}</span>
        <p className="info__name">{props.name}</p>
        {props.types.map((item, index) => {
            return <Badge key={index} name={item.type.name} />
        })}
        </div>
        <img
            className="card__img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`} alt={props.name}/>
    </div>
</Link>)
}

export default CardPokemon;