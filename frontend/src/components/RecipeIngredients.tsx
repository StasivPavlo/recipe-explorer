import Link from "next/link";
import { Ingredient } from "@/types/recipe";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  ingredients: Ingredient[];
}

function RecipeIngredients({ ingredients, ...props }: Props) {
  return (
    <div {...props}>
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
    </div>
  )
}

export default RecipeIngredients;
