import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
  const { recipes, searchTerm } = useRecipeStore((state) => ({
    recipes: state.recipes,
    searchTerm: state.searchTerm,
  }));

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;