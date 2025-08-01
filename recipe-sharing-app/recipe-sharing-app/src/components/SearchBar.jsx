import { useState } from "react";
import { useRecipeStore } from "../store/recipeStore";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const setSearch = useRecipeStore((state) => state.setSearchTerm);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;