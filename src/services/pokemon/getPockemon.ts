import { api } from '@/services/axios/api';
import { PockemonData } from '../interfaces/pockemon.interface';


export const getPockemon = (
  offset = 0,
  limit = 20
) => {
  return api.get<PockemonData>(
    `/pockemon?offset=${offset}&limit=${limit}`
  );
};