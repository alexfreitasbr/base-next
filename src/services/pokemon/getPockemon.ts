import { PockemonData } from '@/interfaces/pockemon.interface';
import { api } from '@/services/axios/api';



export const getPockemon = (
  offset = 0,
  limit = 20
) => {
  return api.get<PockemonData>(
    `/pokemon?offset=${offset}&limit=${limit}`
  );
};