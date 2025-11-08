import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold text-xl mb-2">{recipe.title}</h2>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
    </div>
  );
}

export default RecipeCard;
