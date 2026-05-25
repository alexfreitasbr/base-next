import { api } from './api';

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error(error);

    if (!error.response) {
      return Promise.reject(
        new Error('Servidor indisponível')
      );
    }

    switch (error.response.status) {
      case 404:
        return Promise.reject(
          new Error('Recurso não encontrado')
        );

      case 500:
        return Promise.reject(
          new Error('Erro interno')
        );

      default:
        return Promise.reject(
          new Error('Erro inesperado')
        );
    }
  }
);