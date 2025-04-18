import Image from 'next/image';
import Link from 'next/link';
import { Recipe } from '@/types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipe/${recipe.idMeal}`} className="group">
      <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <div className="relative h-48 w-full">
          <Image
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">{recipe.strMeal}</h3>
          <p className="text-sm text-gray-300 mt-1">{recipe.strCategory}</p>
          <p className="text-sm text-gray-300">{recipe.strArea}</p>
        </div>
      </div>
    </Link>
  );
} 