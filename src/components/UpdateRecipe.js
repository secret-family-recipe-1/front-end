import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateRecipe } from '../actions';

const initial = {
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: '',
  img_url: ''
}


const UpdateRecipe = () => {
  const [newRecipe, setNewRecipe] = useState(initial);
  const recipe = useSelector(state => state.editing)
  const dispatch = useDispatch();

  useEffect(() => {
    if(recipe)  setNewRecipe(recipe);
  }, [recipe])

  const handleChange = e => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value })
  }

  const submitRecipe = e => {
    e.preventDefault();

    dispatch(updateRecipe(newRecipe))

    setNewRecipe(initial);
  }

  return (
    <form onSubmit={submitRecipe} className="recipe-form">
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
      <button>Update Recipe!</button>
    </form>
  );
}

export default UpdateRecipe;
