import { getRecipes } from '@/lib/server';
import RecipeCard from '@/components/RecipeCard';
import RecipeSearch from '@/components/RecipeSearch';

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
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

      {!response.success ? (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg font-medium">
          {response.error || 'Failed to fetch recipes'}
        </div>
      ) : recipes.length === 0 ? (
        <div className="text-center text-gray-100 py-8 text-lg">No recipes found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
