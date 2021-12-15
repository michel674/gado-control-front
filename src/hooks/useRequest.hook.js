import { useState, useCallback } from 'react';
import axios from 'axios';

export const useRequest = ({ method, baseURL, route, params, bodyData }) => {
  const [data, setData] = useState(null);
  const [errorCode, setErrorCode] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.request({
        method: method || 'get',
        baseURL: baseURL || 'http://localhost:8000/',
        url: route,
        params,
        data: bodyData,
      });
      setData(response.data);
    } catch (err) {
      if (err.isAxiosError) {
        const error = err;

        setErrorCode(String(error?.response?.status));
      }
    } finally {
      setLoading(false);
    }
  }, [route]);

  return { request, data, loading, errorCode };
};
