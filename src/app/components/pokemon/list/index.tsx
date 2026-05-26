import { Pokemon } from "@/interfaces/pokemon"
import { Item } from "@/app/components/pokemon/item"

interface Props{
    pokemons: Pokemon[]
}

export const PokemonList = ({pokemons}:Props) =>    {
    return (
        <ul>
            {pokemons?.map((pokemon) => (
                <Item key={pokemon.name} pokemon={pokemon} />
            ))}
        </ul>    
    )
}