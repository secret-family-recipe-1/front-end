import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '../actions';



const Feed = () => {
    const recipes = useSelector(state => state.recipes);
    const dispatch = useDispatch();
    const [ search, setSearch ] = useState('');

    console.log(recipes);

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch])

    const filterRecipes = () => {
        return recipes.filter(recipe => {
           if(recipe.title.toLowerCase().includes(search.toLowerCase()) 
            || recipe.category.toLowerCase().includes(search.toLowerCase())) {
                return recipe;
            }
        })
    }

    return (
        <>
            <div className="feed">
                <div className="search-bar">
                    <label>
                        Search Recipes
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </label>
                </div>
                {filterRecipes().map( recipe => {
                    return (
                        <Recipe key={recipe.title + recipe.id} {...recipe}/>
                    )
                })}
            </div>
        </>
    )
}

export default Feed;
