import { RootState } from "@/stores/pockemons";


export const selectPockemons = (
  state: RootState
) => ({
  data: state.pockemons.pockemonsData,
  loading: state.pockemons.loading,
  error: state.pockemons.error,
});