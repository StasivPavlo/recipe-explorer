import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../middleware/errorHandler';
import { recipeService } from '../services/recipeService';

const isValidStringParam = (param: any): param is string => 
  typeof param === 'string' && param.length > 0;

export const recipeController = {
  async getRecipes(req: Request, res: Response, next: NextFunction) {
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
  },

  async getRecipeById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const recipe = await recipeService.getRecipeById(id);

    if (!recipe) {
      throw new ApiError(404, 'Recipe not found');
    }

    res.json({ success: true, data: recipe });
  }
}; 