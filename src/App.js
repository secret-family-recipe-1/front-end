import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute';
import './App.css';


const App = () => {
    return (
        <div className='App'>
           <h1>Secret Family Recipes</h1> 

            <Router>

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
            </Router>

        </div>
    )
}

export default App;