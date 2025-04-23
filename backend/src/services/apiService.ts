import axios from "axios";
import { RecipeListResponse, RecipeResponse } from "../types/recipe";
import { ApiError } from "../middleware/errorHandler";

if (!process.env.THEMEALDB_API_URL) {
  throw new ApiError(500, 'THEMEALDB_API_URL environment variable is not set');
}

const API_URL = process.env.THEMEALDB_API_URL;

export const getAll = async () => {
  const response = await axios.get<RecipeResponse>(`${API_URL}/search.php?s=`);
  return response.data.meals || [];
};

export const getByFilter = async (type: 'i' | 'a' | 'c', value: string) => {
  const response = await axios.get<RecipeListResponse>(
    `${API_URL}/filter.php?${type}=${encodeURIComponent(value)}`
  );
  return response.data.meals || [];
};

export const getById = async (id: string) =>  {
  const response = await axios.get<RecipeResponse>(`${API_URL}/lookup.php?i=${id}`);
  return response.data.meals?.[0] || null;
};
