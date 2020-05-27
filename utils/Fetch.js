import React, { useState, useEffect } from "react";

export default function useFetch(url, opts) {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(url, opts)
      .then(json => res.json())
      .then((res) => {
        setResponse(res);
        setLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setLoading(false);
      });
  }, [url]);
  return [response, loading, hasError];
}
