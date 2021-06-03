import { useState, useCallback } from 'react';

export interface UseFetchResponse<T> {
  data: T;
  error: string;
  isLoading: boolean;
  fetchData: () => Promise<void>;
}

export const useFetch = <T>(endpoint: string): UseFetchResponse<T> => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(endpoint);
      const responseData = await response.json();
      setData(responseData);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [endpoint]);

  return {
    data,
    error,
    isLoading,
    fetchData,
  };
};
