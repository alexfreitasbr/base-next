import { createAsyncThunk } from '@reduxjs/toolkit'
import { PockemonData } from '@/interfaces/pockemon.interface'
import { getPockemon } from '@/services/pokemon/getPockemon'

interface GetAllPockemonsParams {
  offset?: number
  limit?: number
}

export const getAllPockemons = createAsyncThunk<
  PockemonData,
  GetAllPockemonsParams
>(
  'pockemons/getAll',

  async (
    {
      offset = 0,
      limit = 20
    },
    thunkAPI
  ) => {
    try {
      const response = await getPockemon(
        offset,
        limit
      )

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'Erro ao buscar pokemons'
      )
    }
  }
)