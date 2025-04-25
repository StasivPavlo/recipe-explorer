import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  instructionText: string;
}

function RecipeInstructions({ instructionText, ...props }: Props) {
  return (
    <div { ...props }>
      <h2 className="text-2xl font-semibold mb-4 text-white">Instructions</h2>
      <p className="whitespace-pre-line text-gray-100 leading-relaxed">{instructionText}</p>
    </div>
  )
}

export default RecipeInstructions;
