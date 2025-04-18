import axios from 'axios';
import { Recipe, RecipeListResponse, RecipeResponse } from '../types/recipe';
import { ApiError } from '../middleware/errorHandler';

if (!process.env.THEMEALDB_API_URL) {
  throw new ApiError(500, 'THEMEALDB_API_URL environment variable is not set');
}

const API_URL = process.env.THEMEALDB_API_URL;

const api = {
  async getAll() {
    const response = await axios.get<RecipeResponse>(`${API_URL}/search.php?s=`);
    return response.data.meals || [];
  },
  
  async getByFilter(type: 'i' | 'a' | 'c', value: string) {
    const response = await axios.get<RecipeListResponse>(
      `${API_URL}/filter.php?${type}=${encodeURIComponent(value)}`
    );
    return response.data.meals || [];
  },
  
  async getById(id: string) {
    const response = await axios.get<RecipeResponse>(`${API_URL}/lookup.php?i=${id}`);
    return response.data.meals?.[0] || null;
  }
};

export const recipeService = {
  async getAllRecipes() {
    return api.getAll();
  },
  
  async getRecipesByIngredient(ingredient: string) {
    const recipes = await api.getByFilter('i', ingredient);
    return this.getFullRecipeDetails(recipes);
  },
  
  async getRecipesByCountry(country: string) {
    const recipes = await api.getByFilter('a', country);
    return this.getFullRecipeDetails(recipes);
  },
  
  async getRecipesByCategory(category: string) {
    const recipes = await api.getByFilter('c', category);
    return this.getFullRecipeDetails(recipes);
  },
  
  async getRecipeById(id: string) {
    return api.getById(id);
  },
  
  async getFullRecipeDetails(recipes: { idMeal: string }[]) {
    const recipePromises = recipes.map(recipe => this.getRecipeById(recipe.idMeal));
    const fullRecipes = await Promise.all(recipePromises);
    return fullRecipes.filter((recipe): recipe is Recipe => recipe !== null);
  }
}; 