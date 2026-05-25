import { getPockemon } from "@/services/pokemon/getPockemon"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getAllPockemons = createAsyncThunk(
  'pockemons/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await getPockemon(0, 20)

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'Erro ao buscar pokemons'
      )
    }
  }
)