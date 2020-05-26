import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initial = {
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: ''
}

const UpdateRecipe = () => {
  const [newRecipe, setNewRecipe] = useState(initial);

  useEffect(() => {
    // Set form values to form values we are updating
  }, [])

  const handleChange = e => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value })
  }

  const submitRecipe = e => {
    e.preventDefault();

    axiosWithAuth()
    // REMEMEMBER TO ADD AN ENDPOINT
      .put('endpoint', newRecipe)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    setNewRecipe(initial);
  }

  return (
    <form onSubmit={submitRecipe} style={{ display: 'flex', flexDirection: 'column', padding: '100px' }}>
      <label>
        Title:
        <input
          name="title"
          value={newRecipe.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Source:
        <input
          name="source"
          value={newRecipe.source}
          onChange={handleChange}
        />
      </label>
      <label>
        Category;
        <input
          name="category"
          value={newRecipe.category}
          onChange={handleChange}
        />
      </label>
      <label>
        Instructions
        <input
          name="instructions"
          value={newRecipe.ingredients}
          onChange={handleChange}
        />
      </label>
      <label>
        Ingredients:
          <input
          name="ingredients"
          value={newRecipe.ingredients}
          onChange={handleChange}
        />
      </label>
      <button>Add Recipe!</button>
    </form>
  );
}

export default UpdateRecipe;
