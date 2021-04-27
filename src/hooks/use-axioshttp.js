import axios from "../adapters/axios";
import qs from "qs";
import { useCallback, useState } from "react";

const useAxioshttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback((requestConfig, processData) => {
    setIsLoading(true);
    setError(null);
    let url = requestConfig.url;
    if (
      requestConfig?.method?.toLowerCase() === "get" ||
      !requestConfig?.method
    ) {
      url += "?" + qs.stringify(requestConfig.data, { arrayFormat: "brackets" });
    }
    axios({
      method: requestConfig.method ?? "GET",
      url,
      headers: requestConfig.headers ?? { "Content-Type": "application/json" },
      data: requestConfig.data,
      paramsSerializer: function (requestConfig) {
        if (
          requestConfig.method.toLowerCase() === "get" ||
          !requestConfig?.method
        ) {
          return qs.stringify(requestConfig.data, { arrayFormat: "brackets" });
        }
        return "";
      },
    })
      .then((response) => {
        response.data.success
          ? processData(response.data.data)
          : setError(response.data.title);
      })
      .catch((error) => {
        setError(error.message || "Something went wrong!");
        console.log(error);
        if (error?.response?.data) setError(error?.response?.data.title);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useAxioshttp;
