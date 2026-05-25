import { api } from '@/services/axios/api';
import { PockmonData } from '../interfaces/pockmon.interface';


export const getPockmon = (
  offset = 0,
  limit = 20
) => {
  return api.get<PockmonData>(
    `/pockmon?offset=${offset}&limit=${limit}`
  );
};