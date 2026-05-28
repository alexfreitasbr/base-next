import { Pokemon } from "@/interfaces/pokemon"
import { Item } from "@/app/components/pokemon/item"

interface Props{
    pokemons: Pokemon[]
}

export const PokemonList = ({pokemons}:Props) =>    {
    return (
        <ul className="flex  flex-1 flex-col gap-1 " aria-label="list" test-id="list">
            {pokemons?.map((pokemon) => (
                <Item key={pokemon.name} pokemon={pokemon} />
            ))}
        </ul>       
    )
}