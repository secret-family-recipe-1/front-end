import React, { useState } from 'react';

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
      const instructions = recipe[e.target.name].map((item, id) => {
        if (Number(e.target.id) === id) {
          return e.target.value;
        }
        return item;
      })

      setRecipe({
        ...recipe,
        [e.target.name]: instructions
      })
    }
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', padding: '100px' }}>
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
        {recipe.instructions.map((item, id) => {
          return <input
            name="instructions"
            key={item + id}
            id={id}
            value={item}
            onChange={handleChange}
          />
        })}
      <label>
        Ingredients:
        {recipe.ingredients.map((item, id) => {
          return <input
            name="ingredients"
            key={item + id}
            id={id}
            value={item}
            onChange={handleChange}
          />
        })}
      </label>
    </form>
  );
}

export default AddRecipe;