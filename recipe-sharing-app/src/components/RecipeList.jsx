import { Link } from "react-router-dom";
import React from "react";
import { useRecipeStore } from "./recipeStore";


const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="border p-2 mb-2 rounded">
            <h2 className="text-xl font-bold">{recipe.title}</h2>
            <p>{recipe.description}</p>
            {/* Add more recipe details here */}
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;