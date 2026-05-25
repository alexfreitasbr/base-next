import {
  createSlice,
} from '@reduxjs/toolkit'

import { PockemonData } from '../../../interfaces/pockemon.interface'
import { getAllPockemons } from './thunk'

interface PockemonsState {
  loading: boolean
  error: string | null
  pockemonsData: PockemonData | null
}

const initialState: PockemonsState = {
  loading: false,
  error: null,
  pockemonsData: null
}

const pockemonsSlice = createSlice({
  name: 'pockemons',

  initialState,

  reducers: {},

  extraReducers: builder => {
    builder

      .addCase(getAllPockemons.pending, state => {
        state.loading = true
        state.error = null
      })

      .addCase(
        getAllPockemons.fulfilled,
        (state, action) => {
          state.loading = false
          state.pockemonsData = action.payload
        }
      )

      .addCase(getAllPockemons.rejected, (state, action) => {
        state.loading = false

        state.error =
          action.payload as string
      })
  }
})

export default pockemonsSlice.reducer

