import { api } from './api';

import {
  Pokemon,
  PokemonResponse,
} from '@/interfaces/pokemon';

const BASE_URL =
  'https://pokeapi.co/api/v2/pokemon';

export const pokemonService = {
  getAll: (
    limit: number,
    offset: number
  ) =>
    api.get<PokemonResponse>(
      `${BASE_URL}?limit=${limit}&offset=${offset}`
    ),

  getByName: (name: string) =>
    api.get<Pokemon>(
      `${BASE_URL}/${name}`
    ),
};