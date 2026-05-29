import { api } from "@/service/api"
import {
  Pokemon,
  PokemonApiResponse,
  PokemonList,
  PokemonListApiResponse,
} from "./pokemon.types";
import { pokemonAdapter, pokemonListAdapter } from "./pokemon.adapter";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
export const pokemonService = {
  async getAll(limit: number, offset: number): Promise<PokemonList> {
    const response = await api.get<PokemonListApiResponse>(
      `${BASE_URL}?limit=${limit}&offset=${offset}`,
    );
    return pokemonListAdapter(response);
  },
  async getByName(name: string): Promise<Pokemon> {
    const response = await api.get<PokemonApiResponse>(`${BASE_URL}/${name}`);
    return pokemonAdapter(response);
  },
};
