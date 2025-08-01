// src/components/RecipeList.jsx
import useRecipeStore from '../stores/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        <ul className="space-y-2">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="border p-3 rounded shadow">
              <h3 className="font-bold">{recipe.title}</h3>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )} 
    </div>
  );
};

export default RecipeList;
