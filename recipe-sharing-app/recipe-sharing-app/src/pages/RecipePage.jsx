import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import RecipeDetail from '../components/RecipeDetail';

const RecipePage = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <RecipeDetail recipe={recipe} />
    </div>
  );
};

export default RecipePage;