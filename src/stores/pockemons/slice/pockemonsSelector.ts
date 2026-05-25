import { RootState } from '@/stores/pockemons'

export const selectPockemons = (state: RootState) => {
    return{
        loading:state.pokemons.loading,
        error:state.pokemons.error,
        data:state.pokemons.pockemonsData
    }
}
