import Image from 'next/image';
import Link from 'next/link';
import { getRecipeById } from '@/lib/server';
import VideoTutorial from "@/components/VideoTutorial";
import RecipeCategory from "@/components/RecipeCategory";
import RecipeIngredients from "@/components/RecipeIngredients";
import RecipeInstructions from "@/components/RecipeInstructions";
import { getIngredientsFromRecipe } from "@/lib/helpers";

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
          { response.error || 'Recipe not found' }
        </div>
      </div>
    );
  }

  const recipe = response.data;
  const ingredients = getIngredientsFromRecipe(recipe);

  return (
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

          <RecipeInstructions instructionText={recipe.strInstructions} className="prose max-w-none" />
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <RecipeIngredients ingredients={ingredients} />

            <RecipeCategory categoryName={recipe.strCategory} className="mt-8" />

            { recipe.strYoutube && <VideoTutorial href={recipe.strYoutube} className="mt-8" /> }
          </div>
        </div>
      </div>
  );
}
