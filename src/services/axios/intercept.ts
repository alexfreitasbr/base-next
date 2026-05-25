import {apiPokemon} from '@/services/axios/apiPokemon'

export const api = apiPokemon
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error('API ERROR:', error);

    if (!error.response) {
      return Promise.reject(
        new Error('Sem conexão com o servidor')
      );
    }

    switch (error.response.status) {
      case 404:
        return Promise.reject(
          new Error('Recurso não encontrado')
        );

      case 500:
        return Promise.reject(
          new Error('Erro interno do servidor')
        );

      default:
        return Promise.reject(
          new Error('Erro inesperado')
        );
    }
  }
);