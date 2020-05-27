import React, { useEffect } from 'react';
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


  useEffect(() => {
    dispatch(fetchUser(localStorage.getItem('id')));
  }, [dispatch])

  return (

    <>
    {console.log(user)}
      {user && JSON.stringify(user, null, 2)}
      <UpdateUser />
      
      <Feed />
      {(editing) ? <UpdateRecipe /> : <AddRecipe />}
      
    </>
  );
}

export default Home;