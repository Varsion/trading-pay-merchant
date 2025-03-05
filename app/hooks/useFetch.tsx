import useSWR from 'swr';
import {get} from "@/apis/requests";

export const fetcher = (url: string, params = {}) => get(url, params);

export const useFetch = (url: string, options = {}) => {
  const { data, error, isLoading, mutate } = useSWR(url, fetcher, options);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};