import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetch(endpoint, onSuccess) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (config) => {
    try {
      const { data } = await axios(endpoint, config);
      setData(data);
      onSuccess?.();
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!onSuccess) {
      fetchData();
    }
  }, []);

  return { data, isLoading, error, fetchData };
}
