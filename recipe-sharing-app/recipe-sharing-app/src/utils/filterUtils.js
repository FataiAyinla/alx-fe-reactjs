const filterRecipes = (recipes, searchTerm, ingredients, maxPrepTime) => {
  return recipes.filter(recipe => {
    const matchesSearchTerm = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIngredients = ingredients.length === 0 || ingredients.every(ingredient => 
      recipe.ingredients.map(ing => ing.toLowerCase()).includes(ingredient.toLowerCase())
    );
    const matchesPrepTime = maxPrepTime ? recipe.preparationTime <= maxPrepTime : true;

    return matchesSearchTerm && matchesIngredients && matchesPrepTime;
  });
};

export { filterRecipes };