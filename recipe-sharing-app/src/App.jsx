import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import { useRecipeStore } from "./components/recipeStore";

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    // Fetch or load recipes here, then call setRecipes
    // Example:
    // setRecipes([{ id: 1, title: "Pasta", description: "Yummy" }, ...]);
  }, [setRecipes]);

  return (
    <Router>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <RecipeList />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;