import { Pokemon } from "@/interfaces/pokemon"

interface Props{
    pokemon: Pokemon
}

export const Item = ({pokemon}:Props) =>    {
    return (
    <li style={{ textTransform: 'capitalize' }}>
        {pokemon.name}
    </li>
    )
}