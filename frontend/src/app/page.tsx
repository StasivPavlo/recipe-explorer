import { getRecipes } from '@/lib/server';
import RecipeSearch from '@/components/RecipeSearch';
import RecipesList from "@/components/RecipesList";
import { SearchParamsInterface } from "@/types/searchParams";

interface PageProps {
  searchParams: SearchParamsInterface;
}

export default async function Home({ searchParams }: PageProps) {
  const resolvedParams = await Promise.resolve(searchParams);
  const response = await getRecipes(resolvedParams);
  const recipes = response.success ? response.data : [];

  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-8">Recipe Explorer</h1>
      <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <RecipeSearch />
      </div>

      { response.success ? (
        <RecipesList recipes={recipes} />
      ) : (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg font-medium">
          {response.error || 'Failed to fetch recipes'}
        </div>
      ) }
    </div>
  );
}
