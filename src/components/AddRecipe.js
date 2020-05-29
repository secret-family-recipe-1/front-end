import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../actions';

const initial = {
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: '',
  img_url: ''
}

const AddRecipe = ({ setAddingRecipe }) => {
  const [ newRecipe, setNewRecipe ] = useState(initial);
  const dispatch = useDispatch();

  const handleChange = e => {
      setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value })
  }

  const submitRecipe = e => {
    e.preventDefault();

    dispatch(addRecipe({...newRecipe, user_id: localStorage.getItem('id')}));
    
    setAddingRecipe(false)

    setNewRecipe(initial);
  }

  return (
    <form onSubmit={submitRecipe} className="recipe-form">
      <button onClick={() => setAddingRecipe(false)} className="close">Close</button>
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
      <label>
        Image URL:
          <input
          name="img_url"
          value={newRecipe.img_url}
          onChange={handleChange}
        />
      </label>
      <button>Add Recipe!</button>
    </form>
  );
}

export default AddRecipe;
