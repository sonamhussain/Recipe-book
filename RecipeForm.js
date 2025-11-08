import React, { useState } from 'react';
import axios from 'axios';

function RecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/recipes', { title, ingredients, instructions });
    setTitle('');
    setIngredients('');
    setInstructions('');
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-5 rounded shadow mb-5">
      <input className="border p-2 mb-2 w-full" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className="border p-2 mb-2 w-full" placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      <textarea className="border p-2 mb-2 w-full" placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Recipe</button>
    </form>
  );
}

export default RecipeForm;
