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

export async function getRecipes(searchParams: { [key: string]: string | string[] | undefined }) {
  const ingredient = searchParams.ingredient;
  const country = searchParams.country;
  const category = searchParams.category;
  
  let endpoint = '/api/recipes';
  if (typeof ingredient === 'string' && ingredient) {
    endpoint += `?ingredient=${encodeURIComponent(ingredient)}`;
  } else if (typeof country === 'string' && country) {
    endpoint += `?country=${encodeURIComponent(country)}`;
  } else if (typeof category === 'string' && category) {
    endpoint += `?category=${encodeURIComponent(category)}`;
  }
  
  return fetchFromApi<Recipe[]>(endpoint);
}

export async function getRecipeById(id: string): Promise<ApiResponse<Recipe>> {
  return fetchFromApi<Recipe>(`/api/recipes/${id}`);
} 