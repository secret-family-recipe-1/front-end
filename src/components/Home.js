import React, { useEffect, useState } from 'react';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../actions';
import AddRecipe from './AddRecipe';
import UpdateRecipe from './UpdateRecipe';
import UpdateUser from './UpdateUser';

const Home = () => {
  const user = useSelector(state => state.user);
  const editing = useSelector(state => state.editing)
  const dispatch = useDispatch();
  const [ updatingUser, setUpdatingUser ] = useState(false);
  const [ addingRecipe, setAddingRecipe ] = useState(false);


  useEffect(() => {
    dispatch(fetchUser(localStorage.getItem('id')));
  }, [dispatch])

  useEffect(() => {
    window.scrollTo(0,0);
  }, [editing])

  const showUpdateUser = () => {
    setUpdatingUser(true);
  }

  const showAddRecipe = () => {
    setAddingRecipe(true);
  }

  return (
    <div className="home-page">
      {user && <h2>Welcome, {user.name}</h2>}
      <div className="home-buttons">
        {!updatingUser && <button onClick={showUpdateUser}>Update Your Info</button>}
        {!addingRecipe && <button  onClick={showAddRecipe}>Add a recipe</button>}
      </div>
      {updatingUser && <UpdateUser setUpdatingUser={setUpdatingUser} />}
      {addingRecipe && <AddRecipe setAddingRecipe={setAddingRecipe} />}
      {editing && <UpdateRecipe />}
      <Feed />
    </div>
  );
}

export default Home;