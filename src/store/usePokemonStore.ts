import { PokemonResponse } from '@/interfaces/pokemon';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface PokemonState {
  data: PokemonResponse | null;
  loading: boolean;
  error: string | null;
  fetchPokemons: () => Promise<void>;
}

export const usePokemonStore = create<PokemonState>()(
  devtools(
    persist(
      (set) => ({
        data: null,
        loading: false,
        error: null,

        // Ação assíncrona (similar ao Thunk)
        fetchPokemons: async () => {
          set({ loading: true, error: null }, false, 'pokemon/fetch_start');
          try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon');
            
            if (!response.ok) {
              throw new Error('Falha ao carregar os dados da PokeAPI');
            }

            const data: PokemonResponse = await response.json();
            set({ data, loading: false }, false, 'pokemon/fetch_success');
          } catch (err: any) {
            set({ error: err.message, loading: false }, false, 'pokemon/fetch_error');
          }
        },
      }),
      { name: 'pokemon-storage' } // Nome da chave no localStorage
    )
  )
);