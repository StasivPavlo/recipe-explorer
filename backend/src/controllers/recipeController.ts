import { Request, Response } from 'express';
import { ApiError } from '../middleware/errorHandler';
import * as recipeService from '../services/recipeService';

const isValidStringParam = (param: any): param is string =>
  typeof param === 'string' && param.length > 0;

export const getRecipes = async (req: Request, res: Response) => {
  const { ingredient, country, category } = req.query;

  let recipes;
  switch (true) {
    case isValidStringParam(ingredient):
      recipes = await recipeService.getRecipesByIngredient(ingredient);
      break;
    case isValidStringParam(country):
      recipes = await recipeService.getRecipesByCountry(country);
      break;
    case isValidStringParam(category):
      recipes = await recipeService.getRecipesByCategory(category);
      break;
    default:
      recipes = await recipeService.getAllRecipes();
  }

  res.json({ success: true, data: recipes });
}

export const getRecipeById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const recipe = await recipeService.getRecipeById(id);

  if (!recipe) {
    throw new ApiError(404, 'Recipe not found');
  }

  res.json({ success: true, data: recipe });
}
