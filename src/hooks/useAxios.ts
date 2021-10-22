import React from "react";
import axios, { Method, AxiosRequestConfig } from "axios";

axios.defaults.baseURL = "http://bundle-africa.emmsdan.com.ng";
type Props = {
  url: string;
  method: Method;
  data?: {};
  headers?: {};
};
const useAxios = ({
  url,
  method,
  headers = {},
    ...options
}: Props | AxiosRequestConfig) => {

  const fetchData = async (data: FormData | {[key: string]: string|number}) => {
    try {
      const res = await axios({
        method,
        url,
        headers,
        data,
        ...options
      })
      return {response: res.data, error: null};
    } catch (err) {
      return {response: null, error: err};
    }
  };
  return fetchData
};

export default useAxios;
