import axios, { AxiosRequestConfig } from "axios";
import { Movie } from "../hooks/useMovies";

export interface MovieFetchResponse<T> {
  page: number;
  results: T[];
}
export interface Genre {
  id: number;
  name: string;
}
export interface GenreFetchResponse {
  genres: Genre[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
});

class APIClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getMovies = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<MovieFetchResponse<Movie>>(this.endpoint, { params: config })
      .then((res) => res.data);
  };

  getGenres = () => {
    return axiosInstance
      .get<GenreFetchResponse>(this.endpoint)
      .then((res) => res.data);
  };
  getMovie = (id: string) => {
    return axiosInstance
      .get<Movie>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
