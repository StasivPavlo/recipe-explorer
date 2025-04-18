import Image from 'next/image';
import Link from 'next/link';
import { getRecipeById } from '@/lib/server';

interface RecipePageProps {
  params: {
    id: string;
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const resolvedParams = await Promise.resolve(params);
  const response = await getRecipeById(resolvedParams.id);
  
  if (!response.success || !response.data) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 text-red-700 p-4 rounded-lg font-medium">
          {response.error || 'Recipe not found'}
        </div>
      </div>
    );
  }
  
  const recipe = response.data;
  
  const ingredients = Object.entries(recipe)
    .filter(([key, value]) => key.startsWith('strIngredient') && value)
    .map(([key, value]) => {
      const measureKey = key.replace('strIngredient', 'strMeasure');
      const measure = recipe[measureKey];
      return { ingredient: value, measure };
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-96 w-full mb-6">
            <Image
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{recipe.strMeal}</h1>
          <Link
            href={`/?country=${encodeURIComponent(recipe.strArea)}`}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors mb-6 font-medium"
          >
            {recipe.strArea} Cuisine
          </Link>
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-white">Instructions</h2>
            <p className="whitespace-pre-line text-gray-100 leading-relaxed">{recipe.strInstructions}</p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-white">Ingredients</h2>
            <ul className="space-y-2">
              {ingredients.map(({ ingredient, measure }, index) => (
                <li key={index} className="text-gray-100">
                  <Link
                    href={`/?ingredient=${encodeURIComponent(ingredient as string)}`}
                    className="text-blue-300 hover:text-blue-100 font-medium"
                  >
                    {measure} {ingredient}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">Category</h2>
              <Link
                href={`/?category=${encodeURIComponent(recipe.strCategory)}`}
                className="inline-block bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors font-medium"
              >
                {recipe.strCategory}
              </Link>
            </div>

            {recipe.strYoutube && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Video Tutorial</h2>
                <a
                  href={recipe.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-100 font-medium"
                >
                  Watch on YouTube
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 