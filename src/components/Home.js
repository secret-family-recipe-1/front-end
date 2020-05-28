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


  useEffect(() => {
    dispatch(fetchUser(localStorage.getItem('id')));
  }, [dispatch])

  const showUpdateUser = () => {
    setUpdatingUser(true);
  }

  return (
    <div className="home-page">
      {user && <h2>Welcome, {user.name}</h2>}
      {!updatingUser && <button onClick={showUpdateUser}>Update Your Info</button>}
      {updatingUser && <UpdateUser setUpdatingUser={setUpdatingUser} />}
      {(editing) ? <UpdateRecipe /> : <AddRecipe />}
      <Feed />
    </div>
  );
}

export default Home;