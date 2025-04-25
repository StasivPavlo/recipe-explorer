import Link from "next/link";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  categoryName: string;
}

function RecipeCategory({ categoryName, ...props }: Props) {
  return (
    <div { ...props }>
      <h2 className="text-2xl font-semibold mb-4 text-white">Category</h2>
      <Link
        href={`/?category=${encodeURIComponent(categoryName)}`}
        className="inline-block bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors font-medium"
      >
        {categoryName}
      </Link>
    </div>
  )
}

export default RecipeCategory
