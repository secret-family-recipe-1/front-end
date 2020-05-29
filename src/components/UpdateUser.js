import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../actions';
import { useHistory } from 'react-router-dom';
import { userDelete } from '../actions';

const initial = {
  username: '',
  name: '',
  location: ''
}

const UpdateUser = ({ setUpdatingUser }) => {
  const [newUser, setNewUser] = useState(initial);
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const {push} = useHistory()

  useEffect(() => {
    if(user)  setNewUser(user);
  }, [user])

  const handleChange = e => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  const submitUser = e => {
    e.preventDefault();

    dispatch(updateUser(newUser))
    setUpdatingUser(false)
    setNewUser(initial);
  }

  const deleteUser = e => {
    e.preventDefault();
    

    dispatch(userDelete(newUser.id))
    console.log(e)

   
   push('/login')

    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }

  return (
    <form onSubmit={submitUser} className="recipe-form">
      <button onClick={() => setUpdatingUser(false)} className="close">Close</button>
      <label>
        Username:
        <input
          name="username"
          value={newUser.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Name:
        <input
          name="name"
          value={newUser.name}
          onChange={handleChange}
        />
        </label>
        <label>
        Location:
        <input
          name="location"
          value={newUser.location}
          onChange={handleChange}
        />
      </label>
      <button>Update User</button>
      <button onClick={deleteUser}>Delete User</button>
    </form>
    
  );
}


export default UpdateUser;