import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import axios from 'axios'


const Feed = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Set form values to form values we are updating
        axios.get('https://secretfamily.herokuapp.com/api/recipes')
        .then(res => {
          setRecipes(res.data)
        })
        .catch(err => {
          debugger
        })

    }, [])


    return (
        <div>
            {recipes.map( recipe => {
                return (
                    <Recipe {...recipe}/>
                )
            })}
        </div>
    )
}

export default Feed;
