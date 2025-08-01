import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Preparation Time</h2>
      <p>{recipe.preparationTime} minutes</p>
    </div>
  );
};

export default RecipeDetail;