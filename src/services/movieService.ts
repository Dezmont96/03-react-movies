import axios from 'axios';
import type { Movie } from '../types/movie';


const API_BASE_URL = 'https://api.themoviedb.org/3';


const ACCESS_TOKEN = import.meta.env.VITE_TMDB_TOKEN;


const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`, 
    'Content-Type': 'application/json;charset=utf-8',
  },
});


interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}


export const fetchMovies = async (query: string): Promise<ApiResponse> => {
  const response = await apiClient.get<ApiResponse>('/search/movie', {
    params: {
      query: query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
  });

  return response.data;
};