import { PokemonResponse, Pokemon } from '@/interfaces/pokemon';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface PokemonState {
  data: PokemonResponse | null;
  loading: boolean;
  error: string | null;
  limit:number;
  offset:number;
  totalPages:number;
  currentPage:number;
  fetchPokemons: (  limit?:number,offset?:number) => Promise<void>;
  fetchPokemon: (  name:string) => Promise<void>;
  pokemon:Pokemon | null;
}

type Action = {
  updateCurrentPage: (currentPage:number) => void
}

export const usePokemonStore = create<PokemonState & Action>()(
  devtools(
    persist(
      (set) => ({
        data: null,
        loading: false,
        error: null,
        limit:10,
        offset:0,
        totalPages:0,
        currentPage:0,
        pokemon: null,

        // Ação assíncrona (similar ao Thunk)
        fetchPokemons: async (limit:number=20,offset:number=0) => {
          set({ loading: true, error: null, limit, offset}, false, "pokemons/fetch_start");
          try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            
            if (!response.ok) {
              throw new Error('Falha ao carregar os dados da PokeAPI');
            }

            const data: PokemonResponse = await response.json();
            set({ loading: false, data, totalPages:Math.ceil(data.count/limit), currentPage:offset/limit}, false, 'pokemon/fetch_success');
          } catch (err: any) {
            set({ error: err.message, loading: false }, false, 'pokemons/fetch_error');
          }
        },

        // Ação assíncrona (similar ao Thunk)
        fetchPokemon: async (name:string) => {
          set({ loading: true, error: null}, false, "pokemon/fetch_start");
          try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            
            if (!response.ok) {
              throw new Error('Falha ao carregar os dados da PokeAPI');
            }

            const pokemon: Pokemon = await response.json();
            set({ loading: false, pokemon}, false, 'pokemon/fetch_success');
          } catch (err: any) {
            set({ error: err.message, loading: false }, false, 'pokemon/fetch_error');
          }
        },

        updateCurrentPage: (currentPage: number) => set({ currentPage }, false, 'pokemon/update_page'),
      }),
      { name: 'pokemon-storage' } // Nome da chave no localStorage
    )
  )

);