import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

const useApiCall = <T,>() => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Generic function to handle any API call
  const apiCall = async (config: AxiosRequestConfig): Promise<T | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios(config);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError("An error occurred");
      return null;
    }
  };

  return { apiCall, loading, error };
};

export default useApiCall;
