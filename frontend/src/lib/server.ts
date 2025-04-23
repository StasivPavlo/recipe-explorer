import { ApiResponse, Recipe } from '@/types/recipe';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchFromApi<T>(endpoint: string): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

const isValidStringParam = (param: string | string[] | undefined): param is string =>
  typeof param === 'string' && param.length > 0;

export async function getRecipes(searchParams: { [key: string]: string | string[] | undefined }) {
  const ingredient = searchParams.ingredient;
  const country = searchParams.country;
  const category = searchParams.category;

  let endpoint = '/api/recipes';

  switch (true) {
    case isValidStringParam(ingredient):
      endpoint += `?ingredient=${encodeURIComponent(ingredient)}`;
      break;
    case isValidStringParam(country):
      endpoint += `?country=${encodeURIComponent(country)}`;
      break;
    case isValidStringParam(category):
      endpoint += `?category=${encodeURIComponent(category)}`;
      break;
    default:
  }

  return fetchFromApi<Recipe[]>(endpoint);
}

export async function getRecipeById(id: string): Promise<ApiResponse<Recipe>> {
  return fetchFromApi<Recipe>(`/api/recipes/${id}`);
}
