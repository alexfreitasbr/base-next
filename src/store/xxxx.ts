import { create } from 'zustand';

import {
  devtools,
  persist,
} from 'zustand/middleware';

import { pokemonService } from '@/service/pokemon.service'

import {
  Pokemon,
  PokemonResponse,
} from '@/interfaces/pokemon';

interface PokemonState {
  data: PokemonResponse | null;

  pokemon: Pokemon | null;

  loading: boolean;

  error: string | null;

  limit: number;

  offset: number;

  totalPages: number;

  currentPage: number;

  fetchPokemons: (
    limit?: number,
    offset?: number
  ) => Promise<void>;

  fetchPokemon: (
    name: string
  ) => Promise<void>;

  updateCurrentPage: (
    currentPage: number
  ) => void;
}

export const usePokemonStore =
  create<PokemonState>()(
    devtools(
      persist(
        (set) => ({
          data: null,

          pokemon: null,

          loading: false,

          error: null,

          limit: 20,

          offset: 0,

          totalPages: 0,

          currentPage: 0,

          fetchPokemons: async (
            limit = 20,
            offset = 0
          ) => {
            set({
              loading: true,

              error: null,
            });

            try {
              const data =
                await pokemonService.getAll(
                  limit,
                  offset
                );

              set({
                data,

                loading: false,

                limit,

                offset,

                totalPages: Math.ceil(
                  data.count / limit
                ),

                currentPage: offset / limit,
              });
            } catch (error) {
              set({
                loading: false,

                error:
                  error instanceof Error
                    ? error.message
                    : 'Erro desconhecido',
              });
            }
          },

          fetchPokemon: async (
            name: string
          ) => {
            set({
              loading: true,

              error: null,
            });

            try {
              const pokemon =
                await pokemonService.getByName(
                  name
                );

              set({
                pokemon,

                loading: false,
              });
            } catch (error) {
              set({
                loading: false,

                error:
                  error instanceof Error
                    ? error.message
                    : 'Erro desconhecido',
              });
            }
          },

          updateCurrentPage: (
            currentPage
          ) =>
            set({
              currentPage,
            }),
        }),

        {
          name: 'pokemon-storage',
        }
      )
    )
  );