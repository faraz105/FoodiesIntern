import { useState, useEffect } from "react";
import axios from "axios";

const UseFetch = (url, method = 'get', body  = null ,count) => { // Add method and data parameters
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let response;
        if (method === 'post') {
          response = await axios.post(url, body); // Use axios.post for POST requests
        } else {
          response = await axios.get(url); // Default to GET if method is not 'post'
        }
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url ,count]); // Include method and data in dependency array

  return { data, isLoading, error };
};
// if(loading) return <>loading...</>
export default UseFetch;