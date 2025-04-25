import { Recipe } from "@/types/recipe";

export const getIngredientsFromRecipe = (recipe: Recipe) => {
  const ingredientKeyName = 'strIngredients';
  const measureKeyName = 'strMeasure';

  return Object.entries(recipe)
    .filter(([key, value]) => key.startsWith(ingredientKeyName) && value)
    .map(([key, value]) => {
      const measureKey = key.replace(ingredientKeyName, measureKeyName);
      const measure = recipe[measureKey];
      return { ingredient: value, measure };
    });
};
