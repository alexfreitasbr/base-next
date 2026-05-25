import { RootState } from '@/stores/pockmons'

export const selectCounterValue = (state: RootState) => state.pokemons.value