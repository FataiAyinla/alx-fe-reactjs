import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) =>
    set((state) => {
      const search = term.toLowerCase();
      return {
        searchTerm: term,
        filteredRecipes: state.recipes.filter(
          (recipe) =>
            recipe.title.toLowerCase().includes(search) ||
            recipe.description.toLowerCase().includes(search)
          // Add more fields as needed (e.g., ingredients, prepTime)
        ),
      };
    }),
  setRecipes: (recipes) =>
    set((state) => {
      const search = state.searchTerm.toLowerCase();
      return {
        recipes,
        filteredRecipes: recipes.filter(
          (recipe) =>
            recipe.title.toLowerCase().includes(search) ||
            recipe.description.toLowerCase().includes(search)
        ),
      };
    }),
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const recipes = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      const search = state.searchTerm.toLowerCase();
      return {
        recipes,
        filteredRecipes: recipes.filter(
          (recipe) =>
            recipe.title.toLowerCase().includes(search) ||
            recipe.description.toLowerCase().includes(search)
        ),
      };
    }),
}));

export default useRecipeStore;