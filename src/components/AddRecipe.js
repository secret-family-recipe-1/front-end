import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initial = {
  title: '',
  source: '',
  ingredients: ['', '', ''],
  instructions: ['', '', ''],
  category: ''
}

const AddRecipe = () => {
  const [ recipe, setRecipe ] = useState(initial);

  const handleChange = e => {
    if(e.target.name !== 'instructions' && e.target.name !== 'ingredients' ) {
      setRecipe({
        ...recipe,
        [e.target.name]: e.target.value
      })
    } else {
      const newArr = recipe[e.target.name].map((item, id) => {
        if (Number(e.target.id) === id) {
          return e.target.value;
        }
        return item;
      })
      setRecipe({
        ...recipe,
        [e.target.name]: newArr
      })
    }
  }

  const addInput = (e, name) => {
    e.preventDefault();
    setRecipe({ 
      ...recipe,
      [name]: [...recipe[name], '']
     })
  }

  const submitRecipe = e => {
    e.preventDefault();

    axiosWithAuth()
      .post('endpoint', recipe)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })

      setRecipe(initial);
  }

  return (
    <form onSubmit={submitRecipe} style={{ display: 'flex', flexDirection: 'column', padding: '100px' }}>
      <label>
        Title:
        <input
          name="title"
          value={recipe.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Source:
        <input
          name="source"
          value={recipe.source}
          onChange={handleChange}
        />
      </label>
      <label>
        Category;
        <input
          name="category"
          value={recipe.category}
          onChange={handleChange}
        />
      </label>
      <label>
        Instructions
        {recipe.instructions.map((item, id) => {
          return <input
            name="instructions"
            key={'instructions' + id}
            id={id}
            value={item}
            onChange={handleChange}
          />
        })}
        <button onClick={(e) => addInput(e, 'instructions')}>+</button>
      </label>
      <label>
        Ingredients:
        {recipe.ingredients.map((item, id) => {
          return <input
            name="ingredients"
            key={'ingredients' + id}
            id={id}
            value={item}
            onChange={handleChange}
          />
        })}
        <button onClick={(e) => addInput(e, 'ingredients')}>+</button>
      </label>
      <button>Add Recipe!</button>
    </form>
  );
}

export default AddRecipe;
