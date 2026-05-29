import {
  Pokemon,
  PokemonApiResponse,
  PokemonCard,
  PokemonList,
  PokemonListApiResponse,
} from "./pokemon.types";
/* ADAPTER DETALHE */ 
export function pokemonAdapter(
  pokemon: PokemonApiResponse,
): Pokemon {
  return {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    types: pokemon.types.map((item) => item.type.name),
    height: pokemon.height,
    weight: pokemon.weight,
  };
}
/* ADAPTER LISTAGEM */ export function pokemonListAdapter(
  response: PokemonListApiResponse,
): PokemonList {
  const pokemons: PokemonCard[] = response.results.map((pokemon) => {
    const id = Number(pokemon.url.split("/").filter(Boolean).pop());
    return {
      id,
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  });
  return { count: response.count, pokemons };
}
