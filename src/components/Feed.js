import React, { useEffect } from 'react';
import Recipe from './Recipe';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '../actions';



const Feed = () => {
    const recipes = useSelector(state => state.recipes);
    const dispatch = useDispatch();

    console.log(recipes);

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch])

    return (
        <div>
            {recipes.map( recipe => {
                return (
                    <Recipe key={recipe.title + recipe.id} {...recipe}/>
                )
            })}
        </div>
    )
}

export default Feed;
