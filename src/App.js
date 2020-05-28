import React, { useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import NavBar from './components/NavBar'


const App = () => {
    const { push } = useHistory();

    useEffect(() => {
        if(localStorage.getItem('id') && localStorage.getItem('token')) {
            push('/home');
        }
    }, [push])

    return (
        <>
            <div className='App'>
                <NavBar /> 
                
                {/* Routes: */}
                <Route exact path='/'>
                    <Login />
                </Route>

                <Route path='/signUp'>
                    <SignUp />
                </Route>

                <PrivateRoute path='/home' component={Home} />
            </div>
        </>
    )
}

export default App;