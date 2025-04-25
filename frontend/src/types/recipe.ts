export interface Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string | null;
  [key: string]: string | null; // For dynamic ingredient and measure properties
}

export interface Ingredient {
  ingredient: string | null
  measure: string | null
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}
