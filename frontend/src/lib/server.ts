import { ApiResponse, Recipe } from '@/types/recipe';
import { SearchParam, SearchParamsInterface } from "@/types/searchParams";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const endpoint = '/api/recipes';

async function fetchFromApi<T>(endpoint: string): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

const isValidStringParam = (param: SearchParam): param is string =>
  typeof param === 'string' && param.length > 0;

export async function getRecipes(searchParams: SearchParamsInterface) {
  const ingredient = searchParams.ingredient;
  const country = searchParams.country;
  const category = searchParams.category;

  let requestEndpoint = endpoint;

  switch (true) {
    case isValidStringParam(ingredient):
      requestEndpoint += `?ingredient=${encodeURIComponent(ingredient)}`;
      break;
    case isValidStringParam(country):
      requestEndpoint += `?country=${encodeURIComponent(country)}`;
      break;
    case isValidStringParam(category):
      requestEndpoint += `?category=${encodeURIComponent(category)}`;
      break;
    default:
  }

  return fetchFromApi<Recipe[]>(requestEndpoint);
}

export async function getRecipeById(id: string): Promise<ApiResponse<Recipe>> {
  return fetchFromApi<Recipe>(`${endpoint}${id}`);
}
