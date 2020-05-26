import React, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute';
import './App.css';


const App = () => {
    const { push } = useHistory();

    useEffect(() => {
        if(localStorage.getItem('id') && localStorage.getItem('token')) {
            push('/home');
        } else {
            push('/login');
        }
    }, [push])

    return (
        <div className='App'>
           <h1>Secret Family Recipes</h1> 

            {/* Routes: */}
            <Switch>
                <Route path='/login'>
                    <Login />
                </Route>

                <Route path='/signUp'>
                    <SignUp />
                </Route>

                <PrivateRoute path='/home' component={Home} />
            </Switch>
        </div>
    )
}

export default App;