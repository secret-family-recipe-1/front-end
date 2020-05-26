import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../actions';

const initial = {
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: ''
}

const AddRecipe = () => {
  const [ newRecipe, setNewRecipe ] = useState(initial);
  const dispatch = useDispatch();

  const handleChange = e => {
      setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value })
  }

  const submitRecipe = e => {
    e.preventDefault();

    dispatch(addRecipe({...newRecipe, user_id: localStorage.getItem('id')}));

    setNewRecipe(initial);
  }

  return (
    <form onSubmit={submitRecipe}>
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
            value={newRecipe.instructions}
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

export default AddRecipe;
