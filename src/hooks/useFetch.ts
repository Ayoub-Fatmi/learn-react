import { useState, useEffect, useCallback } from 'react';

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonData: T = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
    // fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
}

export default useFetch;