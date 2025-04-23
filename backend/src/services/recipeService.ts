import { Recipe } from '../types/recipe';
import * as api from './apiService';

export const getRecipeById = async (id: string) => {
  return api.getById(id);
}

export const getFullRecipeDetails = async (recipes: { idMeal: string }[]) => {
  const recipePromises = recipes.map(recipe => getRecipeById(recipe.idMeal));
  const fullRecipes: (Recipe | null)[] = await Promise.all(recipePromises);

  return fullRecipes.filter((recipe): recipe is Recipe => recipe !== null);
}

export const getAllRecipes = async () => {
  return api.getAll();
}

export const getRecipesByIngredient = async (ingredient: string) => {
  const recipes = await api.getByFilter('i', ingredient);

  return getFullRecipeDetails(recipes);
}

export const getRecipesByCountry = async (country: string) => {
  const recipes = await api.getByFilter('a', country);

  return getFullRecipeDetails(recipes);
}

export const getRecipesByCategory = async (category: string) => {
  const recipes = await api.getByFilter('c', category);

  return getFullRecipeDetails(recipes);
}

