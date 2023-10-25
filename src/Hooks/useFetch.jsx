import { useState, useEffect } from "react";

export const useFetch = (url, method) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch(url, {
      method: method,
    });
    const data = await res.json();
    setIsLoading(false);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { isLoading, data };
};
