import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Feed = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Set form values to form values we are updating
        axiosWithAuth()
        .get('/recipes')
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
                    <Recipe key={recipe.id} {...recipe}/>
                )
            })}
        </div>
    )
}

export default Feed;
