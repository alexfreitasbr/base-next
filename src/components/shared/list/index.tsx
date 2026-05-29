import { Item } from "../item"
import { PokemonCard } from "@/modules/pokemon/pokemon.types"
interface ListProps{
    pokemons: PokemonCard[]
}

export const List = ({pokemons}:ListProps) =>    {
    return (
        <ul className="flex  flex-1 flex-col gap-1 " aria-label="list" test-id="list">
            {pokemons?.map((pokemon) => (
                <Item key={pokemon.name} pokemon={pokemon} />
            ))}
        </ul>       
    )
}