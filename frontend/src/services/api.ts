import axios from 'axios';
import { ApiResponse, Recipe } from '@/types/recipe';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllRecipes =  async (): Promise<ApiResponse<Recipe[]>> => {
  const response = await axios.get(`${API_URL}/api/recipes`);

  return response.data;
};

export const getRecipesByIngredient = async (ingredient: string): Promise<ApiResponse<Recipe[]>> => {
  const response = await axios.get(`${API_URL}/api/recipes?ingredient=${encodeURIComponent(ingredient)}`);

  return response.data;
}

export const getRecipesByCountry = async (country: string): Promise<ApiResponse<Recipe[]>> => {
  const response = await axios.get(`${API_URL}/api/recipes?country=${encodeURIComponent(country)}`);

  return response.data;
}

export const getRecipesByCategory = async (category: string): Promise<ApiResponse<Recipe[]>> => {
  const response = await axios.get(`${API_URL}/api/recipes?category=${encodeURIComponent(category)}`);

  return response.data;
}

export const getRecipeById = async (id: string): Promise<ApiResponse<Recipe>> => {
  const response = await axios.get(`${API_URL}/api/recipes/${id}`);

  return response.data;
}
