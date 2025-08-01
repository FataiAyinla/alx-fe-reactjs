import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const FilterPanel = () => {
  const { setIngredientFilter, setPreparationTimeFilter } = useRecipeStore((state) => ({
    setIngredientFilter: state.setIngredientFilter,
    setPreparationTimeFilter: state.setPreparationTimeFilter,
  }));

  const handleIngredientChange = (event) => {
    setIngredientFilter(event.target.value);
  };

  const handlePreparationTimeChange = (event) => {
    setPreparationTimeFilter(event.target.value);
  };

  return (
    <div>
      <div>
        <label>Filter by Ingredient:</label>
        <input type="text" onChange={handleIngredientChange} />
      </div>
      <div>
        <label>Filter by Preparation Time (minutes):</label>
        <input type="number" onChange={handlePreparationTimeChange} />
      </div>
    </div>
  );
};

export default FilterPanel;