/* RESPONSE DA API */ 
export interface PokemonListApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}
export interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
}
/* FORMATO DA UI */ export interface PokemonCard {
  name: string;
  image: string;
  id: number;
}
export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
  height: number;
  weight: number;
}
export interface PokemonList {
  count: number;
  pokemons: PokemonCard[];
}
