import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
  value: number
}

const initialState: PokemonsState = {
  value: 0
}

const pokemonsSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    increment: state => {
      state.value += 1
    },

    decrement: state => {
      state.value -= 1
    },

    incrementByAmount: (
      state,
      action: PayloadAction<number>
    ) => {
      state.value += action.payload
    }
  }
})

export const {
  increment,
  decrement,
  incrementByAmount
} = pokemonsSlice.actions

export default pokemonsSlice.reducer