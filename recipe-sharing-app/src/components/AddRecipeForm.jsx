// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import useRecipeStore from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mb-5">
      <h2 className="text-lg font-semibold">Add a Recipe</h2>
      <input
        className="w-full border px-3 py-2"
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br/>
      <textarea
        className="w-full border px-3 py-2"
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Recipe 
      </button>
    </form>
  );
};

export default AddRecipeForm;
