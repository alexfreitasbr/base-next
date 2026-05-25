import { api } from '@/services/axios/api';
import { PockemonData } from './interfaces/pokemon.interface';

import { useEffect, useState } from 'react';

interface UseUsersProps {
  offset?: number;
  limit?: number;
}

export const usePockemon = ({offset = 0, limit = 20,}: UseUsersProps = {}) => {
  const [data, setData] = useState<PockemonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    api
      .get<PockemonData>(`/pokemon?offset=${offset}&limit=${limit}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err.message || 'Erro ao buscar usuários');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [offset, limit]);

  return {
    data,
    loading,
    error,
  };
};