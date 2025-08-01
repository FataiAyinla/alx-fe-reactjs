import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),
  setSearchTerm: (term) => {
    set((state) => {
      const filteredRecipes = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase()) ||
        recipe.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(term.toLowerCase())
        )
      );
      return { searchTerm: term, filteredRecipes };
    });
  },
}));

export { useRecipeStore };