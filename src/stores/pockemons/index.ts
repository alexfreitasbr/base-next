import { configureStore } from '@reduxjs/toolkit'
import pockemonsReducer from '@/stores/pockemons/slice/pockemonsSlice'

export const store = configureStore({
  reducer: {
    pockemons: pockemonsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch