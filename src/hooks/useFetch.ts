import { useEffect, useState } from 'react';

interface UseFetchProps<T> {
  request: () => Promise<T>;
  dependencies?: unknown[];
}

export function useFetch<T>({
  request,
  dependencies = [],
}: UseFetchProps<T>) {
  const [data, setData] = useState<T | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(
    null
  );

  useEffect(() => {
    setLoading(true);
    setError(null);

    request()
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, dependencies);

  return {
    data,
    loading,
    error,
  };
}