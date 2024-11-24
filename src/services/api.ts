import axios from 'axios';
import { Image } from '../types';

const UNSPLASH_ACCESS_KEY = 'yvyVy1RExVSyAZXEmZk6-bnRZDkXSEhCn4jC6GZqmXM';

export interface ApiResponse {
  results: Image[];
  total_pages: number;
}

const fetchImages = async (
  query: string,
  page: number = 1
): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(
    `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_ACCESS_KEY}&query=${query}&page=${page}`
  );
  return response.data;
};

export default fetchImages;
