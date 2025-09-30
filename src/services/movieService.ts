import axios from 'axios';
import type { Movie } from '../types/movie';

// Базовий URL для всіх запитів до API TMDB
const API_BASE_URL = 'https://api.themoviedb.org/3';

// Ваш токен доступу, який Vite бере зі змінних оточення
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

// Створюємо екземпляр axios з базовими налаштуваннями
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`, // Додаємо заголовок авторизації
    'Content-Type': 'application/json;charset=utf-8',
  },
});

// Типізація відповіді від API, щоб ми знали, що очікувати
interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

// Асинхронна функція для пошуку фільмів за ключовим словом
export const fetchMovies = async (query: string): Promise<ApiResponse> => {
  const response = await apiClient.get<ApiResponse>('/search/movie', {
    params: {
      query: query, // Ключове слово для пошуку
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
  });

  return response.data;
};