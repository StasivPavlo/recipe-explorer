export interface Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string | null;
  [key: string]: string | null;
}

export interface RecipeListItem {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface RecipeResponse {
  meals: Recipe[] | null;
}

export interface RecipeListResponse {
  meals: RecipeListItem[] | null;
} 