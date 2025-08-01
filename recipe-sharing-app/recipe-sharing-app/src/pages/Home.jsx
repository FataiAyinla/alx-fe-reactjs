import React from 'react';
import RecipeList from '../components/RecipeList';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';

const Home = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <FilterPanel />
      <RecipeList />
    </div>
  );
};

export default Home;