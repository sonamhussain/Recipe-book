import React from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-5 text-center">Recipe Book</h1>
      <RecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
