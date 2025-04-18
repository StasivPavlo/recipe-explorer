import axios from 'axios';
import { ApiResponse, Recipe } from '@/types/recipe';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = {
  async getAllRecipes(): Promise<ApiResponse<Recipe[]>> {
    const response = await axios.get(`${API_URL}/api/recipes`);
    return response.data;
  },

  async getRecipesByIngredient(ingredient: string): Promise<ApiResponse<Recipe[]>> {
    const response = await axios.get(`${API_URL}/api/recipes?ingredient=${encodeURIComponent(ingredient)}`);
    return response.data;
  },

  async getRecipesByCountry(country: string): Promise<ApiResponse<Recipe[]>> {
    const response = await axios.get(`${API_URL}/api/recipes?country=${encodeURIComponent(country)}`);
    return response.data;
  },

  async getRecipesByCategory(category: string): Promise<ApiResponse<Recipe[]>> {
    const response = await axios.get(`${API_URL}/api/recipes?category=${encodeURIComponent(category)}`);
    return response.data;
  },

  async getRecipeById(id: string): Promise<ApiResponse<Recipe>> {
    const response = await axios.get(`${API_URL}/api/recipes/${id}`);
    return response.data;
  }
}; 