import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PockemonData } from '../../../interfaces/pockemon.interface';

interface PokemonsState {
  loading:boolean,
  error:string | null,
  pockemonsData: PockemonData | null
}

const initialState: PokemonsState = {
  loading:false,
  error:null,
  pockemonsData:null
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,

  reducers: {
    getAllPokemons: state => {
      state.loading = true,
      state.error = null,
      state.pockemonsData = null

      },
  }
})

export const {
  getAllPokemons
} = pokemonsSlice.actions

export default pokemonsSlice.reducer