import {Recipe} from "@/types/recipe";
import RecipeCard from "@/components/RecipeCard";

interface Props {
  recipes: Recipe[];
}

function RecipesList({ recipes }: Props) {
  if (recipes.length === 0) {
    return <div className="text-center text-gray-100 py-8 text-lg">No recipes found</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  )
}

export default RecipesList;
